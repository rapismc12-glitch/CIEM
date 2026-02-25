import Link from 'next/link'
import styles from './page.module.css'
import ProjectCard from '@/components/ui/ProjectCard'
import { getArticles } from '@/lib/articles'

export default async function Home() {
    const articles = await getArticles();

    // Select top 3 most recent articles for the carousel
    const recentArticles = articles.slice(0, 3);

    // Fetch active projects or get from constant
    const activeProjects = [
        {
            title: "Economía digital y regulación",
            description: "Análisis del impacto y normatividad de los mercados digitales emergentes.",
            status: "Activo" as const,
            slug: "economia-digital-regulacion",
            category: "Regulación"
        },
        {
            title: "Innovación y crecimiento productivo",
            description: "Estudio de políticas para el desarrollo tecnológico y la competitividad empresarial.",
            status: "Activo" as const,
            slug: "innovacion-crecimiento",
            category: "Desarrollo Económico"
        },
        {
            title: "Mercado laboral y talento joven",
            description: "Investigación sobre las dinámicas de empleo y la inserción de nuevas generaciones.",
            status: "Activo" as const,
            slug: "mercado-laboral-joven",
            category: "Mercado Laboral"
        },
        {
            title: "Desarrollo urbano y vivienda",
            description: "Evaluación de políticas de vivienda, urbanismo y acceso a servicios básicos.",
            status: "Activo" as const,
            slug: "desarrollo-urbano-vivienda",
            category: "Economía Urbana"
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Centro de Investigación en Economía Moderna</h1>
                        <p className={styles.heroSubtitle}>
                            Innovación, frescura intelectual y rigor académico.
                            Impulsando el análisis y la difusión del conocimiento económico.
                        </p>
                        <div className={styles.heroActions}>
                            <Link href="/sobre-nosotros" className="btn btn-primary">Conoce más</Link>
                            <Link href="/publicaciones" className="btn btn-secondary">Últimas Publicaciones</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Publications */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Últimas Publicaciones</h2>
                        <Link href="/publicaciones" className={styles.viewAll}>Ver todas &rarr;</Link>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                        {recentArticles.length > 0 ? recentArticles.map(article => (
                            <article key={article.slug} style={{
                                padding: '2rem',
                                backgroundColor: 'var(--color-bg-main)',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: 'var(--shadow-sm)'
                            }}>
                                <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        backgroundColor: 'var(--color-bg-secondary)',
                                        color: 'var(--color-text-secondary)',
                                        borderRadius: '1rem',
                                        fontSize: '0.8rem',
                                        fontWeight: 600
                                    }}>
                                        {article.type}
                                    </span>
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
                                    {article.abstract.substring(0, 150)}...
                                </p>

                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>
                                    {new Date(article.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </article>
                        )) : (
                            <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                                Aún no hay publicaciones recientes.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* About CIEM Teaser */}
            <section className={`${styles.section} ${styles.bgSecondary}`}>
                <div className="container">
                    <div className={styles.aboutTeaser}>
                        <div className={styles.aboutText}>
                            <h2 className={styles.sectionTitleLeft}>Sobre el CIEM</h2>
                            <p>
                                El Centro de Investigación en Economía Moderna (CIEM) es un think tank académico
                                estudiantil dedicado a la producción y divulgación de conocimiento económico riguroso,
                                relevante y accesible.
                            </p>
                            <p>
                                Buscamos fomentar el debate crítico y la formación de nuevas generaciones de
                                economistas comprometidos con el desarrollo y la innovación.
                            </p>
                            <Link href="/sobre-nosotros" className="btn btn-primary mt-4">Nuestra Misión</Link>
                        </div>
                        <div className={styles.aboutImage}>
                            {/* Optional: we can add an image here later. For now a modern geometric placeholder */}
                            <div className={styles.placeholderImage}>
                                <span>Formando el futuro económico</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Agenda */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Agenda de Investigación</h2>
                        <Link href="/investigacion" className={styles.viewAll}>Ver agenda completa &rarr;</Link>
                    </div>
                    <p className={styles.agendaDescription}>
                        Nuestros esfuerzos actuales se concentran en líneas estratégicas que responden
                        a los desafíos contemporáneos de la economía nacional y global.
                    </p>
                    <div className={styles.grid2}>
                        {activeProjects.map(project => (
                            <ProjectCard key={project.slug} {...project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>¿Te interesa la investigación económica?</h2>
                        <p>Únete a nuestro equipo y desarrolla tu perfil académico y experiencia formativa integrándote como Investigador, Colaborador o miembro del Equipo Editorial.</p>
                        <Link href="/contacto" className={styles.ctaButton}>Aplicar ahora</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
