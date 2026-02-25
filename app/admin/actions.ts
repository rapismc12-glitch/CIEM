"use server";

import { getArticles, deleteArticle, ArticleMetadata } from "@/lib/articles";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/auth";

// Basic authentication check for server actions
async function requireAuth() {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session")?.value;

    if (!session) return false;
    try {
        const payload = await decrypt(session);
        return payload?.admin === true;
    } catch (e) {
        return false;
    }
}


export async function deleteArticleAction(niche: string, slug: string): Promise<{ success: boolean; error?: string }> {
    const isAuthenticated = await requireAuth();
    if (!isAuthenticated) return { success: false, error: "Unauthorized" };

    const success = deleteArticle(niche, slug);
    if (success) {
        return { success: true };
    } else {
        return { success: false, error: "Error deleting article" };
    }
}
