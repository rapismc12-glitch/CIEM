import styles from '../aviso-legal/page.module.css';

export const metadata = {
    title: 'Aviso de Privacidad | CIEM',
    description: 'Políticas de privacidad y protección de datos del Centro de Investigación en Economía Moderna',
};

export default function Privacidad() {
    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', color: 'var(--color-base-darker)' }}>Aviso de Privacidad</h1>

            <div className={styles.legalContent}>
                <h2>Identidad del responsable</h2>
                <p>El Centro de Investigación en Economía Moderna (CIEM) es responsable del tratamiento de los datos personales recabados a través de este sitio web.</p>

                <h2>Datos personales que se recaban</h2>
                <p>El CIEM podrá recabar los siguientes datos a través de formularios:</p>
                <ul>
                    <li>Nombre completo</li>
                    <li>Correo electrónico</li>
                    <li>Número de contacto (opcional)</li>
                    <li>Información académica</li>
                    <li>Información proporcionada voluntariamente en campos abiertos</li>
                </ul>
                <p>No se recaban datos sensibles.</p>

                <h2>Finalidad del tratamiento de datos</h2>
                <p>Los datos serán utilizados exclusivamente para:</p>
                <ul>
                    <li>Procesos de aplicación y selección de miembros</li>
                    <li>Contacto institucional</li>
                    <li>Comunicación académica</li>
                    <li>Gestión de participación en actividades del centro</li>
                </ul>
                <p>Los datos no serán utilizados con fines comerciales.</p>

                <h2>Protección de datos</h2>
                <p>El CIEM implementa medidas razonables para proteger la información proporcionada y evitar acceso no autorizado.</p>

                <h2>Transferencia de datos</h2>
                <p>Los datos personales no serán compartidos con terceros sin consentimiento, salvo cuando sea requerido por disposición legal.</p>

                <h2>Derechos de los titulares</h2>
                <p>Las personas podrán solicitar en cualquier momento:</p>
                <ul>
                    <li>Acceso a sus datos</li>
                    <li>Corrección</li>
                    <li>Actualización</li>
                    <li>Eliminación</li>
                </ul>
                <p>Enviando solicitud al correo institucional.</p>

                <h2>Conservación de la información</h2>
                <p>Los datos serán conservados únicamente durante el tiempo necesario para cumplir con las finalidades descritas.</p>

                <h2>Cambios al aviso de privacidad</h2>
                <p>El CIEM se reserva el derecho de actualizar este aviso en cualquier momento.</p>

                <h2>Contacto</h2>
                <p>Para dudas o solicitudes relacionadas con datos personales:</p>
                <p><strong>Correo:</strong> <a href="mailto:mv202447722@alm.buap.mx">mv202447722@alm.buap.mx</a></p>
                <p><strong>Teléfono:</strong> <a href="tel:+522225309754">222 530 9754</a></p>
            </div>
        </div>
    );
}
