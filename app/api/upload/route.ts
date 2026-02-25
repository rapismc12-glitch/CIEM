import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import { saveArticle, ArticleMetadata } from "@/lib/articles";

export async function POST(request: NextRequest) {
    try {
        // 1. Verify User Session (Security)
        const session = request.cookies.get("admin_session")?.value;
        if (!session) {
            return NextResponse.json({ error: "No autorizado" }, { status: 401 });
        }

        // 2. Parse FormData
        const formData = await request.formData();
        const file = formData.get("file") as File;
        const niche = formData.get("niche") as string;

        if (!file) {
            return NextResponse.json({ error: "No se proporcionó ningún archivo" }, { status: 400 });
        }

        // Check if API keys are set
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({ error: "OPENAI_API_KEY no está configurada en el servidor" }, { status: 500 });
        }

        // 3. Extract Text based on file type
        const buffer = Buffer.from(await file.arrayBuffer());
        let extractedText = "";

        if (file.name.toLowerCase().endsWith(".pdf")) {
            const pdfParse = require("pdf-parse");
            const data = await pdfParse(buffer);
            extractedText = data.text;
        } else if (file.name.toLowerCase().endsWith(".docx")) {
            const mammoth = require("mammoth");
            const result = await mammoth.extractRawText({ buffer });
            extractedText = result.value;
        } else {
            return NextResponse.json({ error: "Formato no soportado. Usa .pdf o .docx" }, { status: 400 });
        }

        if (!extractedText || extractedText.trim().length === 0) {
            return NextResponse.json({ error: "No se pudo extraer texto del documento." }, { status: 400 });
        }

        // 4. Send to LLM for Processing
        // We request a complex JSON structure from the LLM containing metadata and the formatted markdown
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
      ${extractedText.substring(0, 30000)} ... (truncado si es muy largo, procesa lo más importante para las etiquetas, pero el contenido entero para el markdown si cabe)
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
            // Clean up potential markdown JSON wrapping
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
            author: "Admin CIEM", // Default to single user
            abstract: aiResult.abstract,
            tags: aiResult.tags || [],
            type: aiResult.type || "Documento"
        };

        // 7. Save to File System
        const extension = file.name.substring(file.name.lastIndexOf("."));
        const success = saveArticle(metadata, buffer, extension);

        if (success) {
            return NextResponse.json({ success: true, slug: metadata.slug });
        } else {
            return NextResponse.json({ error: "Error al guardar el artículo en el sistema de archivos" }, { status: 500 });
        }

    } catch (error: any) {
        console.error("Upload Error:", error);
        return NextResponse.json({ error: error.message || "Error interno del servidor" }, { status: 500 });
    }
}
