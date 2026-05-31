import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Static-file extensions that should be served as-is from public/ on the skin subdomain.
// robots.txt and sitemap.xml are deliberately NOT in this list — they get rewritten
// to skin-specific route handlers (/skin/robots.txt, /skin/sitemap.xml).
const STATIC_EXT = /\.(svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|otf|eot|js|css|map|json)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") ?? "";

  // ── Skin subdomain routing ─────────────────────────────────────────────────
  if (
    hostname === "skin.fitlabreviews.com" &&
    !pathname.startsWith("/skin") &&
    !pathname.startsWith("/api")
  ) {
    // robots.txt and sitemap.xml → skin-specific route handlers
    if (pathname === "/robots.txt" || pathname === "/sitemap.xml") {
      const url = request.nextUrl.clone();
      url.pathname = `/skin${pathname}`;
      return NextResponse.rewrite(url);
    }

    // Static assets and pagefind → serve directly from public/ without rewriting
    if (pathname.startsWith("/pagefind/") || STATIC_EXT.test(pathname)) {
      return NextResponse.next();
    }

    // All other requests → rewrite to /skin/* (Next.js framework-aware rewrite)
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/skin" : `/skin${pathname}`;
    return NextResponse.rewrite(url);
  }

  // ── .html → clean URL redirect (existing) ─────────────────────────────────
  if (pathname.endsWith(".html")) {
    const newPath = pathname.slice(0, -5) || "/";
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    return NextResponse.redirect(url, { status: 301 });
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
