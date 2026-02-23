import React from 'react';
import styles from './EmptyState.module.css';

interface EmptyStateProps {
    title?: string;
    description?: string;
    small?: boolean;
}

export default function EmptyState({
    title = "Información en proceso de actualización",
    description = "Estamos trabajando en la construcción de esta sección para ofrecer información clara y completa.\n\nAgradecemos tu comprensión mientras continuamos desarrollando el contenido institucional del CIEM.",
    small = false
}: EmptyStateProps) {
    if (small) {
        return (
            <div className={`${styles.container} ${styles.small}`}>
                <div className={styles.iconWrapper}>
                    <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p className={styles.descriptionSmall}>Contenido disponible próximamente.</p>
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.iconWrapper}>
                    <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className={styles.title}>{title}</h2>
                {description.split('\n').map((line, i) => (
                    line.trim() !== '' ? <p key={i} className={styles.description}>{line}</p> : <br key={i} />
                ))}
            </div>
        </div>
    );
}
