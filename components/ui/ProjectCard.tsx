import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    description: string;
    status: 'Activo' | 'Completado' | 'En planeación';
    category: string;
}

export default function ProjectCard({
    title,
    description,
    status,
    category
}: ProjectCardProps) {

    const statusClass =
        status === 'Activo' ? styles.statusActive :
            status === 'Completado' ? styles.statusCompleted :
                styles.statusPlanning;

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.category}>{category}</span>
                <span className={`${styles.status} ${statusClass}`}>{status}</span>
            </div>

            <h3 className={styles.title}>
                <Link href={`/investigacion`}>{title}</Link>
            </h3>

            <p className={styles.description}>{description}</p>

            <div className={styles.footer}>
                <Link href={`/investigacion`} className={styles.link}>
                    Ver línea de investigación &rarr;
                </Link>
            </div>
        </div>
    );
}
