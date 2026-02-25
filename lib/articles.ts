import fs from 'fs';
import path from 'path';

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
    fileUrl?: string; // NEW: Path to the original file
}

const contentDir = path.join(process.cwd(), 'content', 'articles');
const registryPath = path.join(process.cwd(), 'content', 'articles.json');
const publicUploadsDir = path.join(process.cwd(), 'public', 'uploads', 'documents');

// Ensure directories exist
function ensureDirectories() {
    try {
        if (!fs.existsSync(path.join(process.cwd(), 'content'))) fs.mkdirSync(path.join(process.cwd(), 'content'));
        if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });
        if (!fs.existsSync(registryPath)) fs.writeFileSync(registryPath, JSON.stringify([]), 'utf-8');

        // Public uploads dir for hosting original files
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
        const uploadsDir = path.join(publicDir, 'uploads');
        if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
        if (!fs.existsSync(publicUploadsDir)) fs.mkdirSync(publicUploadsDir);
    } catch (e) {
        // Ignore read-only file system errors on Vercel
        console.warn("Could not ensure directories. Ignoring due to read-only environment.");
    }
}

export function getArticles(): ArticleMetadata[] {
    ensureDirectories();
    try {
        const data = fs.readFileSync(registryPath, 'utf-8');
        return JSON.parse(data) as ArticleMetadata[];
    } catch (error) {
        console.error('Error reading articles registry:', error);
        return [];
    }
}

export function getArticlesByNiche(niche: string): ArticleMetadata[] {
    const articles = getArticles();
    return articles.filter(a => a.niche === niche).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(niche: string, slug: string): { metadata: ArticleMetadata, content: string } | null {
    const articles = getArticles();
    const metadata = articles.find(a => a.niche === niche && a.slug === slug);

    if (!metadata) return null;

    try {
        const mdPath = path.join(contentDir, `${slug}.md`);
        const content = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, 'utf-8') : "";
        return { metadata, content };
    } catch (error) {
        console.error(`Error reading markdown for ${slug}:`, error);
        return null;
    }
}

export function saveArticle(metadata: ArticleMetadata, originalBuffer: Buffer, extension: string): boolean {
    ensureDirectories();
    try {
        // Save Original File to Public Directory
        const fileName = `${metadata.slug}${extension}`;
        const filePath = path.join(publicUploadsDir, fileName);
        fs.writeFileSync(filePath, originalBuffer);

        // Update metadata with the URL
        metadata.fileUrl = `/uploads/documents/${fileName}`;

        // Optionally still save the raw extracted text as markdown just in case, but frontend won't rely on it heavily.
        // We can just create an empty .md or skip it, but keeping it for structure.
        const mdPath = path.join(contentDir, `${metadata.slug}.md`);
        if (!fs.existsSync(mdPath)) {
            fs.writeFileSync(mdPath, `Document saved at: ${metadata.fileUrl}`, 'utf-8');
        }

        // Update Registry
        const articles = getArticles();
        const existingIndex = articles.findIndex(a => a.slug === metadata.slug && a.niche === metadata.niche);

        if (existingIndex >= 0) {
            articles[existingIndex] = metadata;
        } else {
            articles.push(metadata);
        }

        articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        fs.writeFileSync(registryPath, JSON.stringify(articles, null, 2), 'utf-8');

        return true;
    } catch (error) {
        console.error('Error saving article:', error);
        return false;
    }
}

export function deleteArticle(niche: string, slug: string): boolean {
    ensureDirectories();
    try {
        const articles = getArticles();
        const existingIndex = articles.findIndex(a => a.slug === slug && a.niche === niche);

        if (existingIndex === -1) {
            return false; // Not found
        }

        const metadata = articles[existingIndex];

        // 1. Remove from JSON registry
        articles.splice(existingIndex, 1);
        fs.writeFileSync(registryPath, JSON.stringify(articles, null, 2), 'utf-8');

        // 2. Try to delete the markdown file
        const mdPath = path.join(contentDir, `${slug}.md`);
        if (fs.existsSync(mdPath)) {
            fs.unlinkSync(mdPath);
        }

        // 3. Try to delete the original file if possible
        if (metadata.fileUrl) {
            const fileName = metadata.fileUrl.split('/').pop();
            if (fileName) {
                const filePath = path.join(publicUploadsDir, fileName);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }
        }

        return true;
    } catch (error) {
        console.error(`Error deleting article ${slug}:`, error);
        return false;
    }
}
