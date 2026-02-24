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
                <p>El presente sitio web es operado por el Centro de Investigación en Economía Moderna (CIEM), un centro de investigación estudiantil con fines académicos y de análisis económico.</p>
                <p>El acceso y uso de este sitio implica la aceptación de los siguientes términos.</p>

                <h2>Naturaleza del contenido</h2>
                <p>El contenido publicado en este sitio tiene fines exclusivamente informativos, académicos y de análisis.</p>
                <p>Las opiniones expresadas en artículos, publicaciones o análisis corresponden a sus autores y no necesariamente reflejan una postura institucional oficial.</p>
                <p>El CIEM no garantiza la exactitud absoluta de la información, aunque procura mantener estándares de rigor académico.</p>

                <h2>Propiedad intelectual</h2>
                <p>Todos los contenidos del sitio, incluyendo textos, documentos, logotipos, identidad visual y materiales publicados, son propiedad del CIEM o de sus respectivos autores.</p>
                <p>Queda prohibida la reproducción total o parcial sin autorización previa, salvo uso con fines académicos citando la fuente correspondiente.</p>

                <h2>Uso del sitio</h2>
                <p>El usuario se compromete a utilizar el sitio de manera responsable y conforme a la legislación aplicable.</p>
                <p>Queda prohibido:</p>
                <ul>
                    <li>Uso indebido del contenido</li>
                    <li>Intentos de acceso no autorizado</li>
                    <li>Uso del sitio con fines ilícitos</li>
                    <li>Alteración o interferencia en su funcionamiento</li>
                </ul>

                <h2>Enlaces externos</h2>
                <p>El sitio puede contener enlaces a sitios externos. El CIEM no se responsabiliza por el contenido o políticas de terceros.</p>

                <h2>Modificaciones</h2>
                <p>El CIEM se reserva el derecho de modificar el contenido del sitio y estos términos en cualquier momento sin previo aviso.</p>

                <h2>Contacto</h2>
                <p>Para cualquier duda sobre este aviso legal:</p>
                <p><strong>Correo:</strong> <a href="mailto:rapismc12@gmail.com">rapismc12@gmail.com</a></p>
            </div>
        </div>
    );
}
