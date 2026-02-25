import { getArticleBySlug, getArticlesByNiche } from "@/lib/articles";
import './markdown.css';
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
    // If we had a database, we would generate params here.
    // Since it's local file system, we can just optionally pre-render everything.
    return [];
}

export default async function ArticlePage({ params }: { params: Promise<{ niche: string, slug: string }> }) {
    const { niche, slug } = await params;
    const articleData = await getArticleBySlug(niche, slug);

    if (!articleData) {
        notFound();
    }

    const { metadata, content } = articleData;

    const getCategoryName = (nicheSlug: string) => {
        switch (nicheSlug) {
            case 'economia-digital-regulacion': return 'Economía digital y regulación';
            case 'innovacion-crecimiento': return 'Innovación y crecimiento productivo';
            case 'mercado-laboral-joven': return 'Mercado laboral y talento joven';
            case 'desarrollo-urbano-vivienda': return 'Desarrollo urbano y vivienda';
            default: return 'Publicaciones';
        }
    };

    return (
        <article className="container" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

            {/* Breadcrumb */}
            <div style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                <Link href="/publicaciones" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Publicaciones</Link>
                <span style={{ margin: '0 0.5rem' }}>/</span>
                <span style={{ color: 'var(--color-text-main)' }}>{getCategoryName(metadata.niche)}</span>
            </div>

            {/* Header */}
            <header style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    <span style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-main)',
                        borderRadius: '1rem',
                        fontSize: '0.8rem',
                        fontWeight: 600
                    }}>
                        {metadata.type || 'Documento'}
                    </span>
                    {metadata.tags?.map(tag => (
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

                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-main)', fontWeight: 'bold', lineHeight: 1.2 }}>
                    {metadata.title}
                </h1>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                    <p style={{ margin: 0 }}>
                        Por <strong style={{ color: 'var(--color-text-main)' }}>{metadata.author}</strong>
                    </p>
                    <span style={{ color: 'var(--color-border)' }}>|</span>
                    <p style={{ margin: 0 }}>
                        {new Date(metadata.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </header>

            {/* Abstract */}
            <div style={{
                padding: '1.5rem',
                backgroundColor: 'var(--color-bg-secondary)',
                borderLeft: '4px solid var(--color-primary)',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                marginBottom: '3rem',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                color: 'var(--color-text-main)'
            }}>
                <strong>Resumen Ejecutivo:</strong><br />
                {metadata.abstract}
            </div>

            {/* Content / Download Action */}
            <div style={{
                marginTop: '4rem',
                padding: '3rem',
                backgroundColor: 'var(--color-bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                border: '1px solid var(--color-border)'
            }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-main)', marginBottom: '1rem' }}>
                    Documento Completo
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    Para preservar el formato institucional y gráficas originales, este artículo está disponible para su lectura y descarga en formato nativo.
                </p>
                {metadata.fileUrl ? (
                    <a
                        href={metadata.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ display: 'inline-block', padding: '1rem 2rem', fontSize: '1.1rem' }}
                    >
                        Leer Documento Original
                    </a>
                ) : (
                    <p style={{ color: 'var(--color-text-muted)' }}>El archivo original no está disponible momentáneamente.</p>
                )}
            </div>
        </article>
    );
}
