import styles from './page.module.css';

export const metadata = {
    title: 'Investigación | CIEM',
    description: 'Agenda de investigación y líneas de análisis del Centro de Investigación en Economía Moderna',
};

export default function Investigacion() {

    const linesOfResearch = [
        {
            title: "Economía digital y regulación",
            description: "Esta línea analiza el impacto de la transformación digital en los mercados, la regulación económica, la innovación tecnológica y los nuevos modelos productivos, evaluando sus implicaciones para el desarrollo económico y la competitividad."
        },
        {
            title: "Innovación y crecimiento productivo",
            description: "Esta área estudia los determinantes de la productividad, la innovación empresarial, la política industrial y los procesos de transformación estructural que impulsan el crecimiento económico sostenible."
        },
        {
            title: "Mercado laboral y talento joven",
            description: "Esta línea aborda las dinámicas del empleo, la formación de capital humano, las brechas de habilidades y los desafíos del mercado laboral en economías contemporáneas, con especial énfasis en el talento joven."
        },
        {
            title: "Desarrollo urbano y vivienda",
            description: "Esta área analiza los retos de la urbanización, la política de vivienda, la planeación territorial y la sostenibilidad urbana desde una perspectiva económica."
        }
    ];

    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '900px' }}>
            <h1 className={styles.pageTitle}>Agenda de Investigación</h1>

            <div className={styles.introBlock}>
                <p>
                    La agenda de investigación del Centro de Investigación en Economía Moderna define las áreas prioritarias de análisis del centro y orienta la producción de estudios, policy briefs y artículos académicos.
                </p>
                <p>
                    A través de estas líneas de investigación, el CIEM busca contribuir al análisis de los principales desafíos económicos contemporáneos mediante un enfoque riguroso y aplicado.
                </p>
            </div>

            <div className={styles.researchGrid}>
                {linesOfResearch.map((line, index) => (
                    <div key={index} className={styles.categoryCard}>
                        <h2 className={styles.categoryTitle}>{line.title}</h2>
                        <p className={styles.categoryDescription}>{line.description}</p>

                        {(line.title === "Mercado laboral y talento joven" || line.title === "Desarrollo urbano y vivienda") ? (
                            <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                                <h3 style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '0.75rem', fontWeight: 600 }}>Artículos Destacados:</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li>
                                        <a
                                            href="/publicaciones/mercado-laboral-joven/informalidad-laboral-en-mexico"
                                            style={{ color: 'var(--color-primary)', fontWeight: 500, fontSize: '1.05rem', textDecoration: 'none' }}
                                        >
                                            → Informalidad laboral en México: un análisis estructural y territorial
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className={styles.statusMessage}>
                                <svg className={styles.statusIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Las publicaciones de esta línea estarán disponibles próximamente conforme se desarrollen los primeros trabajos de investigación.</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.generalStatus}>
                <p>
                    El CIEM se encuentra en proceso de desarrollo de sus primeras publicaciones. La agenda de investigación se actualizará conforme se publiquen nuevos trabajos.
                </p>
            </div>
        </div>
    );
}
