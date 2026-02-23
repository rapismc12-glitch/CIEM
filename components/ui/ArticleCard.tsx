import Link from 'next/link';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
    title: string;
    excerpt: string;
    date: string;
    author: string;
    slug: string;
    category?: string;
    readTime?: string;
}

export default function ArticleCard({
    title,
    excerpt,
    date,
    author,
    slug,
    category,
    readTime
}: ArticleCardProps) {
    return (
        <article className={styles.card}>
            {category && <span className={styles.category}>{category}</span>}
            <h3 className={styles.title}>
                <Link href={`/publicaciones/${slug}`}>{title}</Link>
            </h3>
            <p className={styles.excerpt}>{excerpt}</p>

            <div className={styles.meta}>
                <div className={styles.authorDate}>
                    <span className={styles.author}>{author}</span>
                    <span className={styles.dot}>•</span>
                    <time className={styles.date}>{date}</time>
                </div>
                {readTime && <span className={styles.readTime}>{readTime} lectura</span>}
            </div>
        </article>
    );
}
