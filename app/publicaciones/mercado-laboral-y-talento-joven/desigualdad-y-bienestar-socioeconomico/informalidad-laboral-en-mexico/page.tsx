import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Informalidad laboral en México | CIEM',
    description: 'Análisis estructural y territorial de sus determinantes socioeconómicos, dinámicas regionales y desafíos de política pública.',
};

export default function InformalidadLaboralArticle() {
    return (
        <article className="container" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            {/* Breadcrumbs */}
            <nav style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                <Link href="/publicaciones" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Publicaciones</Link> &gt; {' '}
                <span>Mercado laboral y talento joven</span> &gt; {' '}
                <span>Desigualdad y bienestar socioeconómico</span>
            </nav>

            {/* Cabecera / Metadatos */}
            <header style={{ marginBottom: '3rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.35rem 0.85rem',
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-main)',
                        borderRadius: '2rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginRight: '0.75rem',
                        marginBottom: '0.5rem'
                    }}>
                        Policy Brief
                    </span>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.35rem 0.85rem',
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-main)',
                        borderRadius: '2rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginRight: '0.75rem',
                        marginBottom: '0.5rem'
                    }}>
                        Investigación Aplicada
                    </span>
                </div>

                <h1 style={{ fontSize: '2.5rem', lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--color-text-main)', fontWeight: 'bold' }}>
                    Informalidad laboral en México: un análisis estructural y territorial de sus determinantes socioeconómicos, dinámicas regionales y desafíos de política pública
                </h1>

                <div style={{ color: 'var(--color-text-secondary)', borderLeft: '4px solid var(--color-primary)', paddingLeft: '1.25rem', marginBottom: '2rem' }}>
                    <p style={{ margin: '0 0 0.25rem 0', fontWeight: '600', fontSize: '1.1rem', color: 'var(--color-text-main)' }}>Rafael Rodrigo Mata Varela</p>
                    <p style={{ margin: '0 0 0.25rem 0' }}>Centro de Investigación en Economía Moderna — CIEM</p>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>24 de febrero de 2026</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Pobreza multidimensional', 'Desigualdad', 'Desarrollo regional', 'Política social', 'México', 'Análisis territorial', 'Desarrollo urbano y vivienda'].map(tag => (
                        <span key={tag} style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', backgroundColor: 'var(--color-bg-tertiary)', border: '1px solid var(--color-border)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                            #{tag.toLowerCase().replace(/ /g, '-')}
                        </span>
                    ))}
                </div>
            </header>

            {/* Contenido principal */}
            <div style={{ lineHeight: 1.8, color: 'var(--color-text-main)', fontSize: '1.125rem' }}>
                <h2 style={{ marginTop: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-base-darker)', fontSize: '1.75rem' }}>Resumen</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    La informalidad laboral representa uno de los rasgos estructurales más persistentes del mercado de trabajo en México y constituye un fenómeno central para comprender las limitaciones del desarrollo económico, la productividad y la distribución del ingreso. Este estudio examina la distribución territorial de la informalidad y su relación con variables socioeconómicas clave como ingreso laboral, pobreza, nivel educativo y estructura productiva regional, integrando un enfoque descriptivo con análisis territorial apoyado en representación cartográfica. A partir de información proveniente de fuentes oficiales, se identifican patrones regionales que evidencian la estrecha relación entre informalidad, desigualdad territorial y heterogeneidad estructural. El análisis permite discutir implicaciones de política pública orientadas a la reducción de brechas regionales y al fortalecimiento del empleo formal como componente esencial del desarrollo económico sostenido.
                </p>

                <h2 style={{ marginTop: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-base-darker)', fontSize: '1.75rem' }}>Introducción</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    El mercado laboral constituye uno de los espacios donde se manifiestan con mayor claridad las fortalezas y limitaciones estructurales de una economía. En el caso de México, la persistencia de elevados niveles de informalidad laboral refleja la coexistencia de distintos niveles de productividad, desigualdades regionales profundas y limitaciones en la capacidad del sistema económico para generar empleo formal suficiente y de calidad.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    La informalidad no solo implica ausencia de seguridad social o protección laboral, sino que también se vincula con menores niveles de productividad, ingresos más bajos y mayores niveles de vulnerabilidad económica. Su persistencia durante décadas indica que no se trata de un fenómeno transitorio, sino de un componente estructural del funcionamiento económico.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    De acuerdo con estimaciones recientes, más de la mitad de la población ocupada en México se encuentra en condiciones de informalidad, lo que sitúa al país entre las economías con mayor proporción de empleo informal dentro de la región latinoamericana. Esta situación adquiere especial relevancia debido a sus implicaciones sobre la productividad agregada, la capacidad recaudatoria del Estado y la sostenibilidad de los sistemas de protección social.
                </p>

                {/* 1️⃣ Gráfico - Serie Histórica */}
                <figure style={{ margin: '3.5rem 0', textAlign: 'center' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', backgroundColor: '#fff', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                        <Image
                            src="/figura1-evolucion-pobreza.png"
                            alt="Evolución de la Pobreza Multidimensional"
                            fill
                            style={{ objectFit: 'contain', padding: '1rem' }}
                            sizes="(max-width: 800px) 100vw, 800px"
                        />
                    </div>
                    <figcaption style={{ marginTop: '1.25rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                        <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--color-base-darker)', fontSize: '1rem' }}>Figura 1. Evolución de la Pobreza Multidimensional en México</strong>
                        Serie histórica. Fuente: Elaboración propia con datos de CONEVAL.
                    </figcaption>
                </figure>

                <h2 style={{ marginTop: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-base-darker)', fontSize: '1.75rem' }}>Contexto del mercado laboral mexicano y evolución reciente</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    El mercado laboral en México se caracteriza por una marcada heterogeneidad estructural, resultado de procesos históricos de desarrollo desigual, cambios en la estructura productiva y transformaciones en la dinámica económica global. Mientras algunas regiones han experimentado procesos de industrialización y mayor integración a cadenas de valor, otras mantienen estructuras económicas con menor nivel de diversificación y menor productividad.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    La informalidad laboral ha mostrado una notable persistencia a lo largo del tiempo, incluso en periodos de crecimiento económico, lo que sugiere que su comportamiento no depende exclusivamente del ciclo económico sino de factores estructurales más profundos. Esta persistencia refleja la incapacidad del sector formal para absorber la totalidad de la fuerza laboral disponible, así como la existencia de barreras institucionales y económicas que dificultan la formalización.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Las diferencias regionales son particularmente relevantes. Entidades del sur y sureste del país presentan niveles de informalidad significativamente superiores al promedio nacional, mientras que regiones del norte y algunas zonas del centro muestran niveles relativamente menores, asociados a mayor industrialización y diversificación económica.
                </p>

                {/* 2️⃣ Gráfico - Comparación Regional */}
                <figure style={{ margin: '3.5rem 0', textAlign: 'center' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', backgroundColor: '#fff', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                        <Image
                            src="/figura2-disparidad-regional.png"
                            alt="Disparidad Regional de la Pobreza"
                            fill
                            style={{ objectFit: 'contain', padding: '1rem' }}
                            sizes="(max-width: 800px) 100vw, 800px"
                        />
                    </div>
                    <figcaption style={{ marginTop: '1.25rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                        <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--color-base-darker)', fontSize: '1rem' }}>Figura 2. Disparidad Regional de la Pobreza en México</strong>
                        Comparación regional. Fuente: Elaboración propia con datos de CONEVAL.
                    </figcaption>
                </figure>

                <h2 style={{ marginTop: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-base-darker)', fontSize: '1.75rem' }}>Marco teórico ampliado</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    El análisis de la informalidad laboral se sustenta en diversas corrientes teóricas que han buscado explicar su origen y persistencia en economías en desarrollo. El modelo dual de desarrollo propuesto por W. Arthur Lewis constituye uno de los enfoques más influyentes al plantear que las economías presentan un sector moderno caracterizado por alta productividad que convive con un sector tradicional intensivo en trabajo y con baja acumulación de capital. Este enfoque permite interpretar la informalidad como un mecanismo de absorción del excedente laboral.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Las aproximaciones institucionales amplían esta interpretación al considerar el papel de los marcos regulatorios y los costos de formalización. La perspectiva desarrollada por Hernando de Soto sostiene que la informalidad surge como respuesta racional ante barreras institucionales que limitan la formalización de actividades económicas.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    La literatura contemporánea ha incorporado el papel del capital humano como determinante clave, destacando que mayores niveles de educación incrementan la probabilidad de inserción en empleos formales y de mayor productividad. Este enfoque se vincula con teorías de crecimiento endógeno que resaltan la importancia del conocimiento como motor del desarrollo económico.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Investigaciones del Banco Mundial y la Comisión Económica para América Latina y el Caribe han señalado que la informalidad refleja la heterogeneidad estructural de las economías latinoamericanas, donde coexisten sectores modernos con segmentos de baja productividad.
                </p>

                <h2 style={{ marginTop: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-base-darker)', fontSize: '1.75rem' }}>Metodología detallada</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    El estudio adopta un enfoque cuantitativo descriptivo complementado con análisis territorial mediante sistemas de información geográfica. Se utilizan datos provenientes de encuestas laborales y estadísticas oficiales para construir indicadores comparables a nivel estatal.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Las variables consideradas incluyen tasa de informalidad laboral, ingreso laboral promedio, nivel educativo promedio, estructura sectorial del empleo y tasa de pobreza laboral. El análisis descriptivo permite identificar relaciones entre variables, mientras que la representación cartográfica facilita la visualización de patrones territoriales.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    El enfoque metodológico busca proporcionar una aproximación integral que permita comprender tanto la dimensión estructural como la dimensión espacial del fenómeno.
                </p>

                <h2 style={{ marginTop: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-base-darker)', fontSize: '1.75rem' }}>Resultados y análisis territorial ampliado</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    El análisis evidencia una clara concentración de la informalidad en entidades con menor nivel de ingreso per cápita y mayores niveles de pobreza laboral, lo que sugiere una estrecha relación entre informalidad y rezago económico. Las regiones con menor diversificación productiva presentan mayores dificultades para generar empleo formal, lo que refuerza la interpretación de la informalidad como resultado de limitaciones estructurales.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    La relación entre nivel educativo promedio y tasas de informalidad muestra un patrón consistente donde mayores niveles de escolaridad se asocian con menor informalidad, lo que resalta la importancia del capital humano como determinante del empleo formal.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    El análisis espacial permite identificar agrupaciones regionales que reflejan dinámicas históricas de desarrollo desigual, así como limitaciones en la capacidad de generación de empleo formal en ciertas regiones del país.
                </p>

                {/* 3️⃣ Gráfico - Mapa */}
                <figure style={{ margin: '3.5rem 0', textAlign: 'center' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', backgroundColor: '#fff', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                        <Image
                            src="/figura3-distribucion-territorial.png"
                            alt="Distribución Territorial de la Pobreza"
                            fill
                            style={{ objectFit: 'contain', padding: '1rem' }}
                            sizes="(max-width: 800px) 100vw, 800px"
                        />
                    </div>
                    <figcaption style={{ marginTop: '1.25rem', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                        <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--color-base-darker)', fontSize: '1rem' }}>Figura 3. Distribución de la Pobreza Multidimensional en México</strong>
                        Análisis territorial mediante mapas coropléticos. Fuente: Elaboración propia con datos de CONEVAL.
                    </figcaption>
                </figure>

                <h2 style={{ marginTop: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-base-darker)', fontSize: '1.75rem' }}>Discusión ampliada</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Los resultados sugieren que la informalidad laboral en México responde a un conjunto complejo de factores estructurales que incluyen desigualdades regionales, limitaciones en la estructura productiva y brechas en acumulación de capital humano. La persistencia del fenómeno indica que las políticas orientadas únicamente a la regulación laboral resultan insuficientes para abordar sus causas profundas.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    El empleo informal cumple una función de absorción de mano de obra en contextos donde el crecimiento económico no ha sido capaz de generar suficientes oportunidades formales, lo que explica su persistencia incluso en periodos de expansión económica.
                </p>

                <h2 style={{ marginTop: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-base-darker)', fontSize: '1.75rem' }}>Implicaciones de política pública ampliadas</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    La reducción de la informalidad requiere estrategias integrales que incluyan políticas de desarrollo productivo orientadas a incrementar la complejidad económica y la diversificación sectorial, especialmente en regiones con menor nivel de industrialización.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    El fortalecimiento del capital humano mediante políticas educativas y programas de capacitación laboral constituye un componente esencial para mejorar la empleabilidad formal. La simplificación de marcos regulatorios y la reducción de costos de formalización pueden incentivar la transición hacia la formalidad.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    El fortalecimiento de sistemas de protección social puede reducir la vulnerabilidad asociada al empleo informal y mejorar las condiciones de bienestar.
                </p>

                <h2 style={{ marginTop: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-base-darker)', fontSize: '1.75rem' }}>Conclusiones extensas</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    La informalidad laboral constituye un fenómeno estructural que refleja limitaciones en el desarrollo económico y desigualdades territoriales persistentes. Su análisis territorial permite identificar patrones diferenciados que evidencian la relación entre informalidad, capital humano y estructura productiva.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    El fortalecimiento de políticas orientadas al desarrollo productivo, la educación y la formalización laboral resulta fundamental para reducir la informalidad y mejorar la calidad del empleo en el país.
                </p>

                {/* Referencias bibliográficas */}
                <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                    <h3 style={{ marginBottom: '1.25rem', color: 'var(--color-base-darker)', fontSize: '1.25rem' }}>Referencias</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                        <li style={{ marginBottom: '0.75rem' }}>W. Arthur Lewis (1954). <em>Economic Development with Unlimited Supplies of Labour.</em></li>
                        <li style={{ marginBottom: '0.75rem' }}>Hernando de Soto (1989). <em>The Other Path.</em></li>
                        <li style={{ marginBottom: '0.75rem' }}>Banco Mundial. <em>Informes sobre informalidad laboral.</em></li>
                        <li style={{ marginBottom: '0.75rem' }}>Comisión Económica para América Latina y el Caribe. <em>Estudios sobre heterogeneidad estructural.</em></li>
                        <li style={{ marginBottom: '0.75rem' }}>INEGI. <em>Encuesta Nacional de Ocupación y Empleo.</em></li>
                        <li style={{ marginBottom: '0.75rem' }}>CONEVAL. <em>Indicadores de pobreza laboral.</em></li>
                    </ul>
                </div>

            </div>

            {/* Copyright / Footer Note */}
            <footer style={{ marginTop: '5rem', borderTop: '2px solid var(--color-base-darker)', paddingTop: '2rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>
                    © Centro de Investigación en Economía Moderna — CIEM
                </p>
            </footer>
        </article>
    );
}
