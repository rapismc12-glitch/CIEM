import EmptyState from '@/components/ui/EmptyState';

export const metadata = {
    title: 'Publicaciones | CIEM',
    description: 'Página en construcción del Centro de Investigación en Economía Moderna',
};

export default function Publicaciones() {
    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <EmptyState />
        </div>
    );
}
