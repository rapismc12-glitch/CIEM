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
                        <h2>Nuestra Historia</h2>
                        <p>
                            El Centro de Investigación en Economía Moderna (CIEM) nace como un proyecto
                            estudiantil pionero, enfocado en trascender el entorno académico tradicional.
                            Ante la necesidad de consolidar espacios de alto nivel para estudiantes y
                            jóvenes investigadores, el CIEM se constituye como un think tank independiente,
                            orientado al análisis económico aplicado y las políticas públicas.
                        </p>

                        <h2 className={styles.mtLarge}>Propósito Institucional</h2>
                        <p>
                            El CIEM busca generar análisis económico riguroso, fomentar la investigación
                            entre estudiantes y contribuir al debate público mediante propuestas basadas
                            en evidencia. El centro funciona como un espacio de formación intelectual,
                            producción de conocimiento y vinculación académica.
                        </p>

                        <h2 className={styles.mtLarge}>Misión</h2>
                        <p>
                            Generar investigación económica rigurosa y accesible que contribuya al
                            análisis de los principales desafíos económicos contemporáneos, promoviendo
                            el desarrollo del pensamiento crítico, la formación de talento joven y la
                            generación de propuestas de política pública basadas en evidencia.
                        </p>

                        <h2 className={styles.mtLarge}>Visión</h2>
                        <p>
                            Consolidarse como un centro de investigación estudiantil reconocido por la
                            calidad de su producción intelectual, su contribución al debate económico y
                            su capacidad de formar nuevas generaciones de investigadores con alto nivel
                            analítico y compromiso académico.
                        </p>

                        <h2 className={styles.mtLarge}>Valores Institucionales</h2>
                        <ul className={styles.valuesList}>
                            <li><strong>Rigor académico:</strong> Excelencia metodológica en cada producto entregado.</li>
                            <li><strong>Independencia intelectual:</strong> Pensamiento autónomo libre de sesgos políticos.</li>
                            <li><strong>Responsabilidad pública:</strong> Compromiso inquebrantable con el bienestar social colectivo.</li>
                            <li><strong>Honestidad metodológica:</strong> Transparencia absoluta en datos y procesos analíticos.</li>
                            <li><strong>Colaboración académica:</strong> Trabajo en equipo para enriquecer perspectivas.</li>
                            <li><strong>Pensamiento crítico:</strong> Cuestionamiento constante y reflexión analítica rigurosa.</li>
                            <li><strong>Innovación analítica:</strong> Búsqueda de enfoques vanguardistas para solucionar problemas.</li>
                        </ul>

                        <h2 className={styles.mtLarge}>Tesis Institucional</h2>
                        <p>
                            El desarrollo económico sostenible requiere instituciones sólidas, mercados
                            eficientes, innovación productiva y capital humano altamente capacitado. La
                            investigación aplicada y el análisis basado en evidencia son herramientas
                            esenciales para mejorar la toma de decisiones públicas y privadas.
                        </p>

                        <h2 className={styles.mtLarge}>Modelo de Trabajo</h2>
                        <p>Para lograr nuestros objetivos, la producción y actividades del CIEM se centran en:</p>
                        <ul>
                            <li><strong>Policy briefs:</strong> Resúmenes analíticos orientados a la toma de decisiones.</li>
                            <li><strong>Artículos de análisis:</strong> Documentos profundos sobre temas económicos coyunturales y estructurales.</li>
                            <li><strong>Notas de coyuntura:</strong> Reflexiones breves y oportunas sobre la actualidad nacional e internacional.</li>
                            <li><strong>Investigación aplicada:</strong> Estudios rigurosos con datos y evidencia empírica.</li>
                            <li><strong>Eventos académicos:</strong> Foros, conversatorios y ponencias para el diálogo y debate.</li>
                        </ul>

                        <h2 className={styles.mtLarge}>Gobernanza y Estructura Organizacional</h2>
                        <p>El CIEM opera bajo una estructura que garantiza su eficiencia y profesionalismo funcional:</p>
                        <ul>
                            <li><strong>Dirección General:</strong> Conducción estratégica, supervisión general y representación institucional.</li>
                            <li><strong>Coordinación de Investigación:</strong> Gestión rigurosa de líneas de investigación, proyectos y estándares de calidad.</li>
                            <li><strong>Coordinación Editorial:</strong> Revisión, estilo, publicación y distribución de las investigaciones producidas.</li>
                            <li><strong>Comunicación Institucional:</strong> Manejo de la identidad, difusión y posicionamiento mediático del think tank.</li>
                            <li><strong>Relaciones Institucionales:</strong> Creación de vínculos con academia, sector público y organismos aliados.</li>
                        </ul>

                        <div className={styles.documentAction}>
                            <a href="#" className="btn btn-secondary" title="Próximamente">Descargar Documento Fundacional (PDF)</a>
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
