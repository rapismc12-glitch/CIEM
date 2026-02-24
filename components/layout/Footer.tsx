import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.brandSection}>
                    <div className={styles.logo}>
                        <Image src="/logo-circular.png" alt="CIEM Logo" width={140} height={140} style={{ objectFit: 'contain' }} />
                    </div>
                    <p className={styles.description}>
                        El Centro de Investigación en Economía Moderna es un espacio académico dedicado a la generación de análisis económico aplicado y la formación de talento joven en investigación.
                    </p>
                </div>

                <div className={styles.linksSection}>
                    <h3 className={styles.columnTitle}>Enlaces Rápidos</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/sobre-nosotros">Sobre el CIEM</Link></li>
                        <li><Link href="/publicaciones">Publicaciones</Link></li>
                        <li><Link href="/investigacion">Investigación</Link></li>
                        <li><Link href="/equipo">Equipo</Link></li>
                    </ul>
                </div>

                <div className={styles.linksSection}>
                    <h3 className={styles.columnTitle}>Legal</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/aviso-legal">Aviso Legal</Link></li>
                        <li><Link href="/privacidad">Privacidad</Link></li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Centro de Investigación en Economía Moderna. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
