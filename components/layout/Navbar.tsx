'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/logo.png" alt="CIEM Logo" width={180} height={50} className={`${styles.logoBrand} ${styles.logoImage}`} style={{ objectFit: 'contain' }} />
                    </Link>
                </div>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        <li><Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
                        <li><Link href="/investigacion" onClick={() => setIsOpen(false)}>Investigación</Link></li>
                        <li><Link href="/publicaciones" onClick={() => setIsOpen(false)}>Publicaciones</Link></li>
                        <li><Link href="/podcast" onClick={() => setIsOpen(false)}>Podcast</Link></li>
                        <li><Link href="/sobre-nosotros" onClick={() => setIsOpen(false)}>Sobre el CIEM</Link></li>
                        <li><Link href="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
