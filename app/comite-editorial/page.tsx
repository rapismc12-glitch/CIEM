import EmptyState from '@/components/ui/EmptyState';

export const metadata = {
    title: 'Comité Editorial | CIEM',
    description: 'Página en construcción del Centro de Investigación en Economía Moderna',
};

export default function ComiteEditorial() {
    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <EmptyState />
        </div>
    );
}
