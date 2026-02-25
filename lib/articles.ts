import { sql } from '@vercel/postgres';
import { put, del } from '@vercel/blob';

export interface ArticleMetadata {
    title: string;
    slug: string;
    niche: string;
    date: string;
    author: string;
    abstract: string;
    tags: string[];
    type: string;
    thumbnail?: string;
    fileUrl?: string;
}

export async function getArticles(): Promise<ArticleMetadata[]> {
    try {
        const { rows } = await sql`
            SELECT * FROM articles 
            ORDER BY date DESC
        `;

        // Parse the tags string back to array if needed (Postgres text stores it as string)
        return rows.map(row => ({
            ...row,
            tags: JSON.parse(row.tags)
        })) as ArticleMetadata[];

    } catch (error: any) {
        if (error.message.includes('relation "articles" does not exist')) {
            console.log("Articles table not found. Returning empty array.");
            return [];
        }
        console.error('Error reading articles from Postgres:', error);
        return [];
    }
}

export async function getArticlesByNiche(niche: string): Promise<ArticleMetadata[]> {
    try {
        const { rows } = await sql`
            SELECT * FROM articles 
            WHERE niche = ${niche}
            ORDER BY date DESC
        `;
        return rows.map(row => ({ ...row, tags: JSON.parse(row.tags) })) as ArticleMetadata[];
    } catch (error) {
        return [];
    }
}

export async function getArticleBySlug(niche: string, slug: string): Promise<{ metadata: ArticleMetadata, content: string } | null> {
    try {
        const { rows } = await sql`
            SELECT * FROM articles 
            WHERE slug = ${slug} AND niche = ${niche}
            LIMIT 1
        `;

        if (rows.length === 0) return null;

        const metadata = { ...rows[0], tags: JSON.parse(rows[0].tags) } as ArticleMetadata;

        return { metadata, content: `Document saved at: ${metadata.fileUrl}` };
    } catch (error) {
        console.error(`Error reading article ${slug}:`, error);
        return null;
    }
}

export async function saveArticle(metadata: ArticleMetadata, originalBuffer: Buffer, extension: string): Promise<boolean> {
    try {
        // 1. Upload file to Vercel Blob
        const fileName = `${metadata.slug}${extension}`;
        const blob = await put(`documents/${fileName}`, originalBuffer, {
            access: 'public',
            addRandomSuffix: false
        });

        // 2. Insert into Postgres
        const tagsJson = JSON.stringify(metadata.tags);

        await sql`
            INSERT INTO articles (slug, niche, title, date, author, abstract, tags, type, "fileUrl")
            VALUES (${metadata.slug}, ${metadata.niche}, ${metadata.title}, ${metadata.date}, ${metadata.author}, ${metadata.abstract}, ${tagsJson}, ${metadata.type}, ${blob.url})
            ON CONFLICT (slug) 
            DO UPDATE SET 
                niche = EXCLUDED.niche,
                title = EXCLUDED.title,
                date = EXCLUDED.date,
                author = EXCLUDED.author,
                abstract = EXCLUDED.abstract,
                tags = EXCLUDED.tags,
                type = EXCLUDED.type,
                "fileUrl" = EXCLUDED."fileUrl";
        `;

        return true;
    } catch (error) {
        console.error('Error saving article to Postgres/Blob:', error);
        return false;
    }
}

export async function deleteArticle(niche: string, slug: string): Promise<boolean> {
    try {
        // 1. Get fileUrl before deleting to remove blob
        const { rows } = await sql`SELECT "fileUrl" FROM articles WHERE slug = ${slug} AND niche = ${niche}`;

        if (rows.length > 0 && rows[0].fileUrl) {
            // Delete from Blob Storage
            await del(rows[0].fileUrl);
        }

        // 2. Delete from Postgres
        await sql`DELETE FROM articles WHERE slug = ${slug} AND niche = ${niche}`;

        return true;
    } catch (error) {
        console.error(`Error deleting article ${slug}:`, error);
        return false;
    }
}

