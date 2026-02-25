import AdminDashboardClient from "./DashboardClient";
import { getArticles } from "@/lib/articles";

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
    // Fetch articles natively on the server
    const articles = getArticles();

    // Pass them as initial prop to the client component
    return <AdminDashboardClient initialArticles={articles} />;
}
