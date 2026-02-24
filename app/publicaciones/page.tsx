import Link from 'next/link';

export const metadata = {
    title: 'Publicaciones | CIEM',
    description: 'Repositorio de investigaciones y análisis del Centro de Investigación en Economía Moderna',
};

export default function Publicaciones() {
    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#0f172a', fontWeight: 'bold' }}>Publicaciones</h1>
            <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '3rem' }}>
                Explora el catálogo de investigaciones, análisis de políticas públicas y estudios socioeconómicos del CIEM.
            </p>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.5rem', color: '#334155', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
                    Mercado laboral y talento joven
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                    <article style={{
                        padding: '2rem',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '0.75rem',
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                    }}>
                        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                backgroundColor: '#f1f5f9',
                                color: '#475569',
                                borderRadius: '1rem',
                                fontSize: '0.8rem',
                                fontWeight: 600
                            }}>
                                Policy Brief
                            </span>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                backgroundColor: '#f1f5f9',
                                color: '#475569',
                                borderRadius: '1rem',
                                fontSize: '0.8rem',
                                fontWeight: 600
                            }}>
                                Investigación Aplicada
                            </span>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                backgroundColor: '#f8fafc',
                                color: '#64748b',
                                border: '1px solid #e2e8f0',
                                borderRadius: '1rem',
                                fontSize: '0.8rem',
                                fontWeight: 500
                            }}>
                                Desigualdad y bienestar socioeconómico
                            </span>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>
                            <Link
                                href="/publicaciones/mercado-laboral-y-talento-joven/desigualdad-y-bienestar-socioeconomico/informalidad-laboral-en-mexico"
                                style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 'bold' }}
                            >
                                Informalidad laboral en México: un análisis estructural y territorial de sus determinantes socioeconómicos...
                            </Link>
                        </h3>

                        <p style={{ color: '#475569', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            Estudio sobre la distribución territorial de la informalidad y su relación con variables socioeconómicas clave, y las limitaciones del desarrollo económico sostenible en México.
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                                Por <strong style={{ color: '#334155' }}>Rafael Rodrigo Mata Varela</strong> | 24 de febrero de 2026
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {['Pobreza multidimensional', 'Desigualdad', 'Análisis territorial', 'México'].map(tag => (
                                    <span key={tag} style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                                        #{tag.toLowerCase().replace(/ /g, '-')}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
