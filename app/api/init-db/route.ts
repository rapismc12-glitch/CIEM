import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS articles (
                slug VARCHAR(255) PRIMARY KEY,
                niche VARCHAR(255) NOT NULL,
                title TEXT NOT NULL,
                date TIMESTAMP NOT NULL,
                author VARCHAR(255) NOT NULL,
                abstract TEXT NOT NULL,
                tags TEXT NOT NULL,
                type VARCHAR(255) NOT NULL,
                "fileUrl" TEXT
            );
        `;

        return NextResponse.json({ success: true, message: "Database table initialized successfully." });
    } catch (error: any) {
        console.error("Database Init Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
