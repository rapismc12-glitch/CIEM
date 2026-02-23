import Link from 'next/link'
import styles from './page.module.css'
import ProjectCard from '@/components/ui/ProjectCard'

export default function Home() {

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
                    <div className={styles.emptyStateContainer} style={{ textAlign: 'center', padding: '3rem 0', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                            Las publicaciones del CIEM estarán disponibles próximamente conforme se desarrollen los primeros trabajos de investigación.
                        </p>
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
                        <Link href="/contacto" className="btn btn-primary">Aplicar ahora</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
