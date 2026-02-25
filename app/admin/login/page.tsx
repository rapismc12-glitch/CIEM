import { cookies } from "next/headers";
import { encrypt } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import styles from "../../app/page.module.css";

export const metadata = {
    title: "Admin Login | CIEM",
};

export default function AdminLogin() {
    async function login(formData: FormData) {
        "use server";

        // Default credentials if none provided in env
        const validUser = process.env.ADMIN_USER || "administración_rafaelmata";
        const validPass = process.env.ADMIN_PASSWORD || "rafael2227368798";

        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        if (username === validUser && password === validPass) {
            const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
            const session = await encrypt({ admin: true, expires });

            const cookieStore = await cookies();
            cookieStore.set("admin_session", session, {
                expires,
                httpOnly: true,
                secure: true,
                sameSite: "lax",
            });

            redirect("/admin");
        } else {
            redirect("/admin/login?error=Invalid+credentials");
        }
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-bg-secondary)' }}>
            <div style={{ padding: '3rem', backgroundColor: 'var(--color-bg-main)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', maxWidth: '400px', width: '100%' }}>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>Acceso CIEM</h1>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Panel de administración exclusivo.</p>
                </div>

                <form action={login} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label htmlFor="username" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--color-text-main)', fontWeight: 500 }}>Usuario</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            style={{
                                width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-secondary)',
                                color: 'var(--color-text-main)', outline: 'none'
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--color-text-main)', fontWeight: 500 }}>Contraseña</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            style={{
                                width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-secondary)',
                                color: 'var(--color-text-main)', outline: 'none'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}
                    >
                        Ingresar
                    </button>
                </form>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <Link href="/" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none' }}>
                        &larr; Volver al sitio principal
                    </Link>
                </div>
            </div>
        </div>
    );
}
