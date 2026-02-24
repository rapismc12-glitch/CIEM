import EmptyState from '@/components/ui/EmptyState';

export const metadata = {
    title: 'Podcast | CIEM',
    description: 'Próximamente estaremos publicando nuestros episodios de podcast.',
};

export default function Podcast() {
    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 style={{ marginBottom: '2rem', color: 'var(--color-base-darker)', textAlign: 'center' }}>Podcast CIEM</h1>
            <EmptyState
                title="Próximamente: Nuestro Podcast"
                description="Estamos construyendo el espacio donde discutiremos a fondo los temas económicos más relevantes junto a expertos, investigadores y analistas.\n\nPronto podrás escuchar nuestros episodios en esta sección."
            />
        </div>
    );
}
