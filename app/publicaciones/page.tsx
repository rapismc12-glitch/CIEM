import Link from 'next/link';
import { getArticles } from '@/lib/articles';

export const metadata = {
    title: 'Publicaciones | CIEM',
    description: 'Repositorio de investigaciones y análisis del Centro de Investigación en Economía Moderna',
};

const NICHES = [
    { id: 'economia-digital-regulacion', title: 'Economía digital y regulación' },
    { id: 'innovacion-crecimiento', title: 'Innovación y crecimiento productivo' },
    { id: 'mercado-laboral-joven', title: 'Mercado laboral y talento joven' },
    { id: 'desarrollo-urbano-vivienda', title: 'Desarrollo urbano y vivienda' }
];

export default async function Publicaciones() {
    const articles = getArticles();

    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-text-main)', fontWeight: 'bold' }}>Publicaciones</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>
                Explora el catálogo de investigaciones, análisis de políticas públicas y estudios socioeconómicos del CIEM.
            </p>

            {NICHES.map(niche => {
                const nicheArticles = articles.filter(a => a.niche === niche.id);
                if (nicheArticles.length === 0) return null;

                return (
                    <section key={niche.id} style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-main)', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
                            {niche.title}
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                            {nicheArticles.map(article => (
                                <article key={article.slug} style={{
                                    padding: '2rem',
                                    backgroundColor: 'var(--color-bg-main)',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '0.75rem',
                                    boxShadow: 'var(--shadow-sm)'
                                }}>
                                    <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem',
                                            backgroundColor: 'var(--color-bg-secondary)',
                                            color: 'var(--color-text-main)',
                                            borderRadius: '1rem',
                                            fontSize: '0.8rem',
                                            fontWeight: 600
                                        }}>
                                            {article.type}
                                        </span>
                                        {article.tags.map(tag => (
                                            <span key={tag} style={{
                                                padding: '0.25rem 0.75rem',
                                                backgroundColor: 'var(--color-bg-tertiary)',
                                                color: 'var(--color-text-secondary)',
                                                border: '1px solid var(--color-border)',
                                                borderRadius: '1rem',
                                                fontSize: '0.8rem',
                                                fontWeight: 500
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>
                                        <Link
                                            href={`/publicaciones/${article.niche}/${article.slug}`}
                                            style={{ color: 'var(--color-text-main)', textDecoration: 'none', fontWeight: 'bold' }}
                                        >
                                            {article.title}
                                        </Link>
                                    </h3>

                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                        {article.abstract.substring(0, 200)}...
                                    </p>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                                            Por <strong style={{ color: 'var(--color-text-main)' }}>{article.author}</strong> | {new Date(article.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
