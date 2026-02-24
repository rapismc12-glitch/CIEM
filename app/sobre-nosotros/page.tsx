import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Sobre el CIEM | Centro de Investigación en Economía Moderna',
    description: 'Conoce la historia, misión y visión del CIEM.',
};

export default function SobreNosotros() {
    return (
        <div className={styles.page}>
            {/* Header */}
            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Sobre el CIEM</h1>
                    <p className={styles.subtitle}>
                        Un think tank académico estudiantil dedicado a la innovación y el rigor económico.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className={styles.section}>
                <div className={`container ${styles.contentGrid}`}>

                    <div className={styles.textContent}>
                        <p className={styles.leadParagraph}>
                            <strong>El Centro de Investigación en Economía Moderna (CIEM)</strong> es un espacio universitario emergente, crítico e independiente, diseñado para analizar, comprender y proponer soluciones a los desafíos económicos de la actualidad.
                        </p>
                        <p className={styles.leadParagraph}>
                            Creemos firmemente en el rigor metodológico, el análisis basado en evidencia y el poder del talento joven para incidir en la discusión pública y académica.
                        </p>

                        <h2 className={styles.mtLarge}>Nuestra Misión</h2>
                        <p>
                            Promover y difundir el conocimiento económico a través de investigación rigurosa, análisis crítico y producción académica aplicada. Buscamos formar talento analítico y contribuir significativamente al desarrollo del pensamiento económico contemporáneo.
                        </p>

                        <h2 className={styles.mtLarge}>Nuestra Visión</h2>
                        <p>
                            Consolidarnos como un centro de investigación estudiantil de excelencia, reconocido como un referente universitario en la generación de conocimiento aplicado y en la capacidad de enriquecer el debate económico público y profesional.
                        </p>

                        <h2 className={styles.mtLarge}>¿Por qué nace el CIEM?</h2>
                        <p>
                            En un mundo marcado por transformaciones globales aceleradas, la digitalización de los sistemas productivos, la evolución de los mercados laborales y los complejos retos del desarrollo urbano, <strong>es indispensable contar con espacios de análisis donde converjan la academia y la práctica.</strong>
                        </p>
                        <p>
                            El CIEM nace como respuesta a esta necesidad. Articulamos el talento de estudiantes apasionados por la investigación económica, ofreciendo una plataforma para:
                        </p>
                        <ul className={styles.bulletsList}>
                            <li><strong>Fortalecer</strong> capacidades analíticas y pensamiento crítico.</li>
                            <li><strong>Fomentar</strong> el debate fundamentado e informado.</li>
                            <li><strong>Generar</strong> propuestas y análisis con impacto real en el entorno.</li>
                        </ul>

                        <h2 className={styles.mtLarge}>Nuestras Líneas de Investigación</h2>
                        <p>
                            Nuestra agenda se estructura en torno a áreas prioritarias para el desarrollo económico moderno. A través de ellas orientamos la producción de nuestros estudios, artículos y <em>policy briefs</em>:
                        </p>

                        <div className={styles.researchLines}>
                            <h3>🌐 Economía Digital y Regulación</h3>
                            <p>Analizamos el impacto de la transformación digital en los mercados actuales, evaluando la regulación económica, el rol de la innovación tecnológica y los nuevos modelos de producción.</p>

                            <h3>📈 Innovación y Crecimiento Productivo</h3>
                            <p>Estudiamos qué determina la productividad y cómo la innovación empresarial y la política industrial impulsan el crecimiento económico y la transformación estructural sostenible.</p>

                            <h3>💼 Mercado Laboral y Talento Joven</h3>
                            <p>Exploramos las dinámicas contemporáneas del empleo, los retos en la formación de capital humano y las brechas de habilidades, con un enfoque especial en la inserción del talento joven.</p>

                            <h3>🏙️ Desarrollo Urbano y Vivienda</h3>
                            <p>Abordamos los retos de la urbanización desde la perspectiva económica, estudiando la política de vivienda, la planeación territorial y los caminos hacia la sostenibilidad urbana.</p>
                        </div>

                        <h2 className={styles.mtLarge}>Lo que hacemos</h2>
                        <p>En el CIEM, la teoría se traduce en acción y divulgación. Nuestras principales actividades incluyen:</p>
                        <ul className={styles.bulletsList}>
                            <li><strong>Publicaciones:</strong> Artículos de análisis económico e investigación académica.</li>
                            <li><strong>Análisis de Políticas:</strong> Elaboración de <em>Policy briefs</em> con propuestas concretas.</li>
                            <li><strong>Diálogo y Difusión:</strong> Organización de eventos académicos, seminarios y conversatorios.</li>
                        </ul>

                        <h2 className={styles.mtLarge}>Nuestros Valores</h2>
                        <p>Cada proyecto, investigación y análisis del CIEM se rige bajo principios irrenunciables:</p>
                        <p className={styles.valuesListInline}>
                            <strong>Rigor Académico</strong> &bull; <strong>Integridad Intelectual</strong> &bull; <strong>Responsabilidad</strong> &bull; <strong>Pensamiento Crítico</strong> &bull; <strong>Objetividad</strong> &bull; <strong>Colaboración</strong>
                        </p>

                        <div className={styles.documentAction}>
                            <a href="#" className="btn btn-secondary" title="Próximamente">Descargar Documento Fundacional (PDF)</a>
                            <div style={{ marginTop: '1.5rem' }}>
                                <Link href="/aviso-legal" className="btn" style={{ backgroundColor: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}>Ver Aviso Legal y Privacidad</Link>
                            </div>
                        </div>
                    </div>

                    <aside className={styles.sidebar}>
                        <div className={styles.infoBox}>
                            <h3>Datos Institucionales</h3>
                            <ul className={styles.infoList}>
                                <li><strong>Fundación:</strong> Febrero 2026</li>
                                <li><strong>Tipo:</strong> Think Tank Académico</li>
                                <li><strong>Áreas de Enfoque:</strong> 5</li>
                                <li><strong>Sede:</strong> Universitaria</li>
                            </ul>
                        </div>

                        <div className={styles.teamTeaser}>
                            <h3>Nuestro Equipo</h3>
                            <p>Conoce a los directores, investigadores y analistas que conforman el CIEM.</p>
                            <Link href="/equipo" className={styles.linkAction}>Ver Directorio &rarr;</Link>
                        </div>
                    </aside>

                </div>
            </section>
        </div>
    );
}
