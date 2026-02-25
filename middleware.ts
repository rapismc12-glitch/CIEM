import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/auth";

export async function middleware(request: NextRequest) {
    // Check if we're trying to access an /admin route
    if (request.nextUrl.pathname.startsWith("/admin")) {
        const isLoginPath = request.nextUrl.pathname === "/admin/login";

        // Get the session from cookies
        const session = request.cookies.get("admin_session")?.value;

        let isValidSession = false;
        if (session) {
            try {
                const payload = await decrypt(session);
                if (payload && payload.admin === true) {
                    isValidSession = true;
                }
            } catch (e) {
                // Invalid session
            }
        }

        if (!isValidSession && !isLoginPath) {
            // Redirect to login if not logged in and not already on the login page
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }

        if (isValidSession && isLoginPath) {
            // Redirect to admin dashboard if logged in and trying to access the login page
            return NextResponse.redirect(new URL("/admin", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
