import EmptyState from '@/components/ui/EmptyState';

export const metadata = {
    title: 'Gobernanza | CIEM',
    description: 'Página en construcción del Centro de Investigación en Economía Moderna',
};

export default function Gobernanza() {
    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <EmptyState />
        </div>
    );
}
