import EmptyState from '@/components/ui/EmptyState';

export const metadata = {
    title: 'Equipo | CIEM',
    description: 'Conoce al equipo del Centro de Investigación en Economía Moderna',
};

export default function Equipo() {
    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 style={{ marginBottom: '2rem', color: 'var(--color-base-darker)', textAlign: 'center' }}>Nuestro Equipo</h1>

            <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                <div style={{
                    padding: '2rem',
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-sm)',
                    borderLeft: '4px solid var(--color-primary)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--color-base-darker)', marginBottom: '0.25rem' }}>Rafael Rodrigo Mata Varela</h2>
                    <p style={{ color: 'var(--color-primary)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5rem' }}>Director</p>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem' }}>Centro de Investigación en Economía Moderna</p>
                </div>
            </div>

            <EmptyState title="Más perfiles en proceso de actualización" description="Próximamente compartiremos la información pública de nuestros coordinadores, investigadores y cuerpo editorial formal." />
        </div>
    );
}
