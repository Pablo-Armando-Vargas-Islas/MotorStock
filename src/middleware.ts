import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Solo interceptamos rutas /admin y /api/admin
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api/admin")
  ) {
    // Intenta obtener el token JWT de NextAuth
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // Si no hay token o no es ADMIN, bloquea
    if (!token || token.role !== "ADMIN") {
      // Para llamadas a la API devolvemos 401 JSON
      if (pathname.startsWith("/api/admin")) {
        return new NextResponse(
          JSON.stringify({ error: "No autorizado" }),
          {
            status: 401,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
      // Para páginas, redirigimos al login
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("callbackUrl", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Si todo OK, deja pasar
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*"
  ],
};
