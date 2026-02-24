import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Aviso Legal | CIEM',
    description: 'Aviso legal y términos de uso del Centro de Investigación en Economía Moderna',
};

export default function AvisoLegal() {
    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', color: 'var(--color-base-darker)' }}>Aviso legal y términos de uso</h1>

            <div className={styles.legalContent}>
                <p>Bienvenido al sitio web del <strong>Centro de Investigación en Economía Moderna (CIEM)</strong>. Como iniciativa académica estudiantil, estamos comprometidos con la transparencia, el rigor metodológico y la protección de tu información.</p>
                <p>En esta sección encontrarás los lineamientos legales que rigen el uso de nuestra plataforma y cómo gestionamos tus datos personales.</p>

                <div style={{ backgroundColor: 'var(--color-bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '2rem' }}>
                    <strong>Navegación rápida:</strong>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '0.5rem' }}>
                        <li><a href="#aviso-legal" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Aviso Legal</a></li>
                        <li><a href="#politica-privacidad" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Política de Privacidad</a></li>
                    </ul>
                </div>

                <h2 id="aviso-legal">Aviso Legal</h2>

                <h3>I. Naturaleza Institucional y Propósito</h3>
                <p>El CIEM es una iniciativa estudiantil independiente y sin fines de lucro. Nuestro propósito es generar, analizar y difundir conocimiento económico aplicado a los desafíos contemporáneos del desarrollo, la transformación productiva y las dinámicas sociales. Todos nuestros contenidos (estudios, <em>policy briefs</em>, artículos y espacios de diálogo) tienen un propósito exclusivamente académico, informativo y de discusión pública.</p>

                <h3>II. Propiedad Intelectual</h3>
                <p>Todo el material académico, publicaciones, artículos de análisis, metodologías y recursos visuales publicados en este sitio son propiedad del CIEM o de sus respectivos autores.</p>
                <ul>
                    <li><strong>Uso permitido:</strong> Fomentamos la difusión de nuestras investigaciones. Puedes citar y compartir nuestros documentos siempre y cuando se otorgue el crédito correspondiente al CIEM y a los autores, sin fines de lucro.</li>
                    <li><strong>Uso no permitido:</strong> No se autoriza la reproducción comercial, falsificación o alteración del sentido original de nuestras investigaciones sin consentimiento previo por escrito.</li>
                </ul>

                <h3>III. Exención de Responsabilidad Académica</h3>
                <p>La información y análisis económicos presentados en este sitio web representan posiciones académicas basadas en evidencia empírica. <strong>No constituyen en ningún caso asesoría financiera, legal, de inversión o consultoría profesional.</strong> El CIEM no se hace responsable por decisiones tomadas por terceros con base en el material aquí publicado.</p>

                <hr style={{ margin: '3rem 0', borderColor: 'var(--color-border)', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />

                <h2 id="politica-privacidad">Política de Privacidad</h2>

                <h3>I. Recopilación y Uso de Datos Personales</h3>
                <p>En congruencia con nuestro compromiso de integridad institucional, el CIEM protege los datos personales de sus usuarios. Únicamente recopilamos información de manera voluntaria a través de nuestros formularios de contacto o registro a eventos académicos.</p>

                <p><strong>¿Para qué usamos tus datos?</strong></p>
                <ul>
                    <li>Enviar actualizaciones sobre nuevas publicaciones académicas o <em>policy briefs</em>.</li>
                    <li>Gestionar tu participación en seminarios, conversatorios y talleres.</li>
                    <li>Establecer redes de colaboración con estudiantes, académicos y actores institucionales.</li>
                    <li>En ningún caso el CIEM venderá, alquilará o comercializará tu información con terceros.</li>
                </ul>

                <h3>II. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h3>
                <p>Tienes el derecho de conocer qué datos personales tenemos de ti y para qué los utilizamos. De igual manera, es tu derecho solicitar la corrección de tu información, que la eliminemos de nuestros registros, o bien, oponerte al uso de tus datos para fines específicos (por ejemplo, darte de baja de nuestro boletín).</p>
                <p>Para ejercer estos derechos, o si tienes dudas sobre el tratamiento de tu información, contáctanos a través de nuestros canales oficiales señalados en la sección de <Link href="/contacto" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Contacto</Link>.</p>

                <p style={{ marginTop: '3rem', fontStyle: 'italic', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                    El Centro de Investigación en Economía Moderna se compromete a mantener estándares de calidad y ética en todas sus operaciones digitales.<br />
                    Última actualización: Febrero 2026
                </p>
            </div>
        </div>
    );
}
