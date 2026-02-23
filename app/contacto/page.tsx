'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Contacto() {
    const [academicStatus, setAcademicStatus] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());

            await fetch('http://localhost:5678/webhook/15cf8cfd-6e50-429d-aa46-d7a4f13cb807', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            setIsSubmitted(true);
        } catch (error) {
            console.error('Error enviando la aplicación:', error);
            alert('Hubo un error al enviar tu aplicación. Por favor, inténtalo de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className={`container ${styles.successContainer}`}>
                <div className={styles.successMessage}>
                    <h2>¡Gracias por tu interés en formar parte del Centro de Investigación en Economía Moderna!</h2>
                    <p>Tu aplicación será revisada por nuestro equipo y nos pondremos en contacto contigo en caso de avanzar en el proceso.</p>
                    <button className="btn btn-primary mt-4" onClick={() => setIsSubmitted(false)}>Enviar otra aplicación</button>
                </div>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>

            <div className={styles.headerInfo}>
                <h1 className={styles.title}>Aplica para unirte al CIEM</h1>
                <p className={styles.description}>
                    Buscamos talento comprometido con el desarrollo económico sostenible,
                    el análisis riguroso y la innovación. Completa el siguiente formulario para
                    ser considerado en nuestras futuras incorporaciones.
                </p>

                <div className={styles.selectionCriteria}>
                    <h3>Criterios de Selección</h3>
                    <p>El CIEM evalúa las postulaciones con base en:</p>
                    <ul>
                        <li>Interés académico genuino</li>
                        <li>Compromiso y responsabilidad</li>
                        <li>Capacidad de análisis crítico</li>
                        <li>Claridad en la motivación personal</li>
                        <li>Disponibilidad de tiempo</li>
                        <li>Alineación funcional con los valores institucionales</li>
                    </ul>
                </div>
            </div>

            <form className={styles.applicationForm} onSubmit={handleSubmit}>
                {/* SECCIÓN 1 — INFORMACIÓN GENERAL */}
                <fieldset className={styles.formSection}>
                    <legend>Sección 1: Información General</legend>
                    <div className={styles.formGroup}>
                        <label htmlFor="fullName">Nombre completo *</label>
                        <input type="text" id="fullName" name="fullName" required placeholder="Ingresa tu nombre completo" />
                    </div>

                    <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Correo electrónico *</label>
                            <input type="email" id="email" name="email" required placeholder="tu@correo.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Número de contacto (Opcional)</label>
                            <input type="tel" id="phone" name="phone" placeholder="Ej. 222 123 4567" />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="location">Ciudad / País *</label>
                        <input type="text" id="location" name="location" required placeholder="Ej. Puebla, México" />
                    </div>
                </fieldset>

                {/* SECCIÓN 2 — PERFIL ACADÉMICO */}
                <fieldset className={styles.formSection}>
                    <legend>Sección 2: Perfil Académico</legend>
                    <div className={styles.formGroup}>
                        <label htmlFor="academicStatus">Situación académica *</label>
                        <select
                            id="academicStatus"
                            name="academicStatus"
                            required
                            value={academicStatus}
                            onChange={(e) => setAcademicStatus(e.target.value)}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="estudiante">Estudiante universitario</option>
                            <option value="egresado">Egresado</option>
                            <option value="titulado">Titulado</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    {academicStatus === 'estudiante' && (
                        <div className={styles.conditionalFields}>
                            <div className={styles.formGroup}>
                                <label htmlFor="major">Licenciatura *</label>
                                <input type="text" id="major" name="major" required placeholder="Ej. Economía" />
                            </div>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="university">Universidad *</label>
                                    <input type="text" id="university" name="university" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="semester">Semestre actual *</label>
                                    <input type="text" id="semester" name="semester" required />
                                </div>
                            </div>
                        </div>
                    )}

                    {(academicStatus === 'egresado' || academicStatus === 'titulado') && (
                        <div className={styles.conditionalFields}>
                            <div className={styles.formGroup}>
                                <label htmlFor="majorGrad">Licenciatura *</label>
                                <input type="text" id="majorGrad" name="majorGrad" required placeholder="Ej. Economía" />
                            </div>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="universityGrad">Universidad *</label>
                                    <input type="text" id="universityGrad" name="universityGrad" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="gradYear">Año de egreso *</label>
                                    <input type="number" id="gradYear" name="gradYear" min="1990" max={new Date().getFullYear() + 2} required />
                                </div>
                            </div>
                        </div>
                    )}
                </fieldset>

                {/* SECCIÓN 3 — ÁREA DE INTERÉS */}
                <fieldset className={styles.formSection}>
                    <legend>Sección 3: Área de Interés en el CIEM</legend>
                    <div className={styles.formGroup}>
                        <label htmlFor="interestArea">¿En qué área deseas aplicar? *</label>
                        <select id="interestArea" name="interestArea" required>
                            <option value="">Selecciona el área de tu interés</option>
                            <option value="investigacion">Investigación</option>
                            <option value="comunicacion">Equipo de comunicación y redes sociales</option>
                            <option value="coordinacion">Coordinación de programa</option>
                            <option value="editorial">Equipo editorial</option>
                            <option value="relaciones">Relaciones institucionales</option>
                            <option value="administracion">Administración y apoyo organizacional</option>
                            <option value="colaborador">Colaborador ocasional</option>
                        </select>
                    </div>
                </fieldset>

                {/* SECCIÓN 4 — MOTIVACIÓN */}
                <fieldset className={styles.formSection}>
                    <legend>Sección 4: Motivación</legend>
                    <div className={styles.formGroup}>
                        <label htmlFor="motivation">Cuéntanos brevemente por qué te interesa formar parte del CIEM y cómo crees que puedes contribuir *</label>
                        <textarea id="motivation" name="motivation" rows={5} required placeholder="Escribe aquí tus motivos..." />
                    </div>
                </fieldset>

                {/* SECCIÓN 5 — EXPERIENCIA RELEVANTE */}
                <fieldset className={styles.formSection}>
                    <legend>Sección 5: Experiencia Relevante (Opcional)</legend>
                    <div className={styles.formGroup}>
                        <label htmlFor="experience">Experiencia académica, proyectos, investigación o habilidades relevantes</label>
                        <textarea id="experience" name="experience" rows={4} placeholder="Menciona participación en congresos, publicaciones, idiomas, software (R, Python, Stata), etc." />
                    </div>
                </fieldset>

                {/* SECCIÓN 6 — DISPONIBILIDAD */}
                <fieldset className={styles.formSection}>
                    <legend>Sección 6: Disponibilidad de Tiempo</legend>
                    <div className={styles.formGroup}>
                        <label htmlFor="availability">Horas disponibles por semana *</label>
                        <select id="availability" name="availability" required>
                            <option value="">Selecciona una opción</option>
                            <option value="3-5">3 a 5 horas</option>
                            <option value="5-8">5 a 8 horas</option>
                            <option value="8+">Más de 8 horas</option>
                        </select>
                    </div>
                </fieldset>

                {/* SECCIÓN 7 — ENVÍO */}
                <div className={styles.formActions}>
                    <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar aplicación'}
                    </button>
                    <p className={styles.privacyNote}>
                        Al enviar esta solicitud, confirmas que la información proporcionada es verídica. Tus datos serán tratados de manera confidencial y utilizados exclusivamente para el proceso de selección institucional del CIEM.
                    </p>
                </div>
            </form>

            <div className={styles.contactInfo}>
                <p>Para dudas o información adicional puedes contactar a la dirección del centro:</p>
                <ul>
                    <li><strong>Correo institucional:</strong> <a href="mailto:mv202447722@alm.buap.mx">mv202447722@alm.buap.mx</a></li>
                    <li><strong>Teléfono:</strong> <a href="tel:+522225309754">222 530 9754</a></li>
                </ul>
            </div>
        </div>
    );
}
