"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteArticleAction } from "./actions";
import { ArticleMetadata } from "@/lib/articles";

export default function AdminDashboardClient({ initialArticles }: { initialArticles: ArticleMetadata[] }) {
    const [file, setFile] = useState<File | null>(null);
    const [niche, setNiche] = useState("economia-digital-regulacion");
    const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error" | "deleting">("idle");
    const [message, setMessage] = useState("");
    const [articles, setArticles] = useState<ArticleMetadata[]>(initialArticles || []);
    const router = useRouter();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            setMessage("Por favor selecciona un archivo.");
            return;
        }

        setStatus("uploading");
        setMessage("Procesando documento... Esto puede tardar varios segundos debido a la generación por IA.");

        const formData = new FormData();
        formData.append("file", file);
        formData.append("niche", niche);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setMessage("¡Artículo procesado y publicado con éxito!");
                setTimeout(() => {
                    setStatus("idle");
                    setFile(null);
                    router.push(`/publicaciones/${niche}/${data.slug || ''}`);
                }, 3000);
            } else {
                throw new Error(data.error || "Ocurrió un error al procesar el documento.");
            }
        } catch (err: any) {
            setStatus("error");
            setMessage(err.message || "Error de red o servidor.");
        }
    };

    const logout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    };

    const handleDelete = async (niche: string, slug: string) => {
        if (!confirm("¿Estás seguro de que quieres eliminar este artículo permanentemente?")) return;

        setStatus("deleting");
        setMessage("Eliminando...");

        const result = await deleteArticleAction(niche, slug);

        if (result.success) {
            setArticles(articles.filter(a => !(a.slug === slug && a.niche === niche)));
            setStatus("success");
            setMessage("Artículo eliminado correctamente.");
            setTimeout(() => {
                setStatus("idle");
                setMessage("");
            }, 3000);
        } else {
            setStatus("error");
            setMessage(result.error || "Error al eliminar");
        }
    };

    return (
        <div className="container" style={{ padding: "4rem 1rem", maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <h1 style={{ fontSize: "2.5rem", color: "var(--color-text-main)", fontWeight: "bold" }}>Panel de Administración</h1>
                <button
                    onClick={logout}
                    className="btn btn-secondary"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
                >
                    Cerrar sesión
                </button>
            </div>

            <p style={{ color: "var(--color-text-secondary)", marginBottom: "3rem", fontSize: "1.1rem" }}>
                Sube un documento en formato <strong>.docx</strong> o <strong>.pdf</strong>. El sistema automáticamente extraerá el texto, generará un resumen, asignará formato web y lo publicará en el nicho seleccionado.
            </p>

            <div style={{
                backgroundColor: "var(--color-bg-main)",
                padding: "2.5rem",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-md)",
                border: "1px solid var(--color-border)"
            }}>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

                    {/* File input */}
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "var(--color-text-main)" }}>Documento</label>
                        <div style={{
                            border: "2px dashed var(--color-border)",
                            padding: "2rem",
                            borderRadius: "var(--radius-md)",
                            textAlign: "center",
                            backgroundColor: "var(--color-bg-secondary)",
                            position: "relative"
                        }}>
                            <input
                                type="file"
                                accept=".pdf,.docx"
                                onChange={handleFileChange}
                                disabled={status === "uploading"}
                                style={{
                                    position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0, cursor: "pointer"
                                }}
                            />
                            {file ? (
                                <div style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                                    📄 {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                </div>
                            ) : (
                                <div style={{ color: "var(--color-text-muted)" }}>
                                    Arrastra tu archivo aquí o <strong>haz clic para explorar</strong>
                                    <br /><span style={{ fontSize: "0.85rem" }}>Solo PDF o DOCX</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Niche select */}
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600, color: "var(--color-text-main)" }}>Nicho / Categoría</label>
                        <select
                            value={niche}
                            onChange={(e) => setNiche(e.target.value)}
                            disabled={status === "uploading"}
                            style={{
                                width: "100%", padding: "1rem", borderRadius: "var(--radius-md)",
                                border: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-secondary)",
                                color: "var(--color-text-main)", fontSize: "1rem", outline: "none"
                            }}
                        >
                            <option value="economia-digital-regulacion">Economía digital y regulación</option>
                            <option value="innovacion-crecimiento">Innovación y crecimiento productivo</option>
                            <option value="mercado-laboral-joven">Mercado laboral y talento joven</option>
                            <option value="desarrollo-urbano-vivienda">Desarrollo urbano y vivienda</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={!file || status === "uploading"}
                        className="btn btn-primary"
                        style={{
                            padding: "1rem",
                            fontSize: "1.1rem",
                            opacity: (!file || status === "uploading") ? 0.7 : 1,
                            cursor: (!file || status === "uploading") ? "not-allowed" : "pointer",
                            transition: "all 0.3s ease"
                        }}
                    >
                        {status === "uploading" ? (
                            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                <span>Procesando con IA...</span>
                                <span className="spinner"></span>
                            </span>
                        ) : "Publicar Artículo"}
                    </button>
                </form>

                {message && (
                    <div style={{
                        marginTop: "1.5rem",
                        padding: "1rem",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: status === "error" ? "rgba(255,0,0,0.1)" : status === "success" ? "rgba(0,255,0,0.1)" : "var(--color-bg-secondary)",
                        color: status === "error" ? "red" : status === "success" ? "green" : "var(--color-text-main)",
                        textAlign: "center",
                        fontWeight: 500
                    }}>
                        {message}
                    </div>
                )}
            </div>

            {/* Articles List */}
            <div style={{ marginTop: "4rem" }}>
                <h2 style={{ fontSize: "1.8rem", color: "var(--color-text-main)", marginBottom: "1.5rem", fontWeight: "bold" }}>
                    Publicaciones Existentes
                </h2>

                {articles.length === 0 ? (
                    <p style={{ color: "var(--color-text-muted)" }}>No hay publicaciones todavía.</p>
                ) : (
                    <div style={{
                        backgroundColor: "var(--color-bg-main)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-border)",
                        overflow: "hidden"
                    }}>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr style={{ backgroundColor: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", textAlign: "left" }}>
                                    <th style={{ padding: "1rem", color: "var(--color-text-main)", fontWeight: 600 }}>Título</th>
                                    <th style={{ padding: "1rem", color: "var(--color-text-main)", fontWeight: 600 }}>Fecha</th>
                                    <th style={{ padding: "1rem", color: "var(--color-text-main)", fontWeight: 600 }}>Nicho</th>
                                    <th style={{ padding: "1rem", color: "var(--color-text-main)", fontWeight: 600, textAlign: "right" }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {articles.map((article) => (
                                    <tr key={`${article.niche}-${article.slug}`} style={{ borderBottom: "1px solid var(--color-border)" }}>
                                        <td style={{ padding: "1rem", color: "var(--color-text-main)" }}>
                                            <a href={`/publicaciones/${article.niche}/${article.slug}`} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)", textDecoration: "none", fontWeight: 500 }}>
                                                {article.title}
                                            </a>
                                        </td>
                                        <td style={{ padding: "1rem", color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                                            {new Date(article.date).toLocaleDateString()}
                                        </td>
                                        <td style={{ padding: "1rem", color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                                            {article.niche}
                                        </td>
                                        <td style={{ padding: "1rem", textAlign: "right" }}>
                                            <button
                                                onClick={() => handleDelete(article.niche, article.slug)}
                                                disabled={status === "deleting"}
                                                className="btn"
                                                style={{
                                                    backgroundColor: "var(--color-danger, #ef4444)",
                                                    color: "white",
                                                    padding: "0.4rem 0.8rem",
                                                    fontSize: "0.85rem",
                                                    border: "none",
                                                    borderRadius: "var(--radius-sm)",
                                                    cursor: status === "deleting" ? "not-allowed" : "pointer",
                                                    opacity: status === "deleting" ? 0.6 : 1
                                                }}
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <style jsx>{`
        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}
