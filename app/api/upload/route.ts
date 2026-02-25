import { NextResponse } from "next/server";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { saveArticle, ArticleMetadata } from "@/lib/articles";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/auth";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";

// Tell Next.js we want to run this dynamic API on Node.js.
// Since pdf-parse works best in Node.js standard environment.
export const runtime = 'nodejs';
export const maxDuration = 60; // Allow 60s for OpenAI

export async function POST(req: Request) {
    try {
        // 1. Auth check
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get("admin_session")?.value;
        if (!sessionCookie) {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 });
        }

        try {
            const payload = await decrypt(sessionCookie);
            if (!payload || !payload.admin) {
                throw new Error();
            }
        } catch {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 });
        }

        // 2. Form data parsing
        const formData = await req.formData();
        const file = formData.get("file") as File;
        const niche = formData.get("niche") as string;

        if (!file || !niche) {
            return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
        }

        // Convert to buffer for parsing and uploading
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const originalExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

        // Validate extensions
        if (originalExtension !== ".pdf" && originalExtension !== ".docx") {
            return NextResponse.json({ error: "El archivo debe ser .pdf o .docx" }, { status: 400 });
        }

        // Check if API keys are set
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({ error: "OPENAI_API_KEY no está configurada en el servidor" }, { status: 500 });
        }

        // 3. Extract Text based on file type
        let extractedText = "";

        if (originalExtension === ".pdf") {
            const pdfParse = require("pdf-parse");
            const data = await pdfParse(buffer);
            extractedText = data.text;
        } else if (originalExtension === ".docx") {
            const mammoth = require("mammoth");
            const result = await mammoth.extractRawText({ buffer });
            extractedText = result.value;
        }

        if (!extractedText || extractedText.trim().length === 0) {
            return NextResponse.json({ error: "No se pudo extraer texto del documento." }, { status: 400 });
        }

        // 4. Send to LLM for Processing
        const prompt = `
          Eres un asistente experto en edición y automatización para publicaciones académicas y policy briefs del Centro de Investigación en Economía Moderna (CIEM).
          Se te proporcionará el texto crudo extraído de un documento académico estructurado (PDF o DOCX).
          
          Tu tarea es analizarlo y devolver un objeto JSON estricto con los siguientes campos:
          - "title": El título principal del artículo.
          - "abstract": Un resumen automático y atractivo de entre 200 y 300 palabras sobre el contenido, que sirva como "abstract".
          - "tags": Un array de 3 a 5 palabras clave (tags) relevantes.
          - "type": "Policy Brief", "Investigación Aplicada", "Artículo Académico" u otro equivalente basado en el tono del documento.

          Texto crudo extraído:
          """
          ${extractedText.substring(0, 30000)} ... (truncado)
          """
          
          Devuelve SOLAMENTE un JSON válido (sin marcas de código como \`\`\`json).
        `;

        const { text } = await generateText({
            model: openai("gpt-4o-mini"),
            system: "Solo respondes con JSON válido.",
            prompt: prompt,
        });

        // 5. Parse the LLM response
        let aiResult;
        try {
            const cleanJsonStr = text.replace(/^```json/g, "").replace(/```$/g, "").trim();
            aiResult = JSON.parse(cleanJsonStr);
        } catch (e) {
            console.error("Failed to parse LLM JSON:", text);
            return NextResponse.json({ error: "El modelo de IA no devolvió un formato válido." }, { status: 500 });
        }

        // 6. Generate Slug and prepare metadata
        const slug = aiResult.title
            .toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

        const metadata: ArticleMetadata = {
            title: aiResult.title,
            slug: slug,
            niche: niche,
            date: new Date().toISOString(),
            author: "Admin CIEM",
            abstract: aiResult.abstract,
            tags: aiResult.tags || [],
            type: aiResult.type || "Documento"
        };

        // 7. Save to Cloud Db and Blob
        const success = await saveArticle(metadata, buffer, originalExtension);

        if (success) {
            return NextResponse.json({ success: true, slug: metadata.slug });
        } else {
            return NextResponse.json({ error: "Error al guardar el artículo en la nube" }, { status: 500 });
        }
    } catch (error: any) {
        console.error("Upload Error:", error);
        return NextResponse.json({ error: error.message || "Error interno del servidor" }, { status: 500 });
    }
}
