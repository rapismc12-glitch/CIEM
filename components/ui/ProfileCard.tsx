import Image from 'next/image';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
    name: string;
    role: string;
    imageUrl?: string;
    bio?: string;
    linkedinUrl?: string;
    email?: string;
}

export default function ProfileCard({
    name,
    role,
    imageUrl,
    bio,
    linkedinUrl,
    email
}: ProfileCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={`Foto de ${name}`}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <span className={styles.initials}>{name.charAt(0)}</span>
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
                {bio && <p className={styles.bio}>{bio}</p>}

                {(linkedinUrl || email) && (
                    <div className={styles.social}>
                        {linkedinUrl && (
                            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                LinkedIn
                            </a>
                        )}
                        {email && (
                            <a href={`mailto:${email}`} className={styles.link}>
                                Email
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
