import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") ?? "";

  // Skin subdomain rewrite: skin.fitlabreviews.com/[path] → /skin/[path]
  // This runs BEFORE the .html redirect so Next.js framework knows about the
  // rewrite — prevents the hydration mismatch that Vercel JSON rewrites cause.
  if (
    hostname === "skin.fitlabreviews.com" &&
    !pathname.startsWith("/skin") &&
    !pathname.startsWith("/api")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/skin" : `/skin${pathname}`;
    return NextResponse.rewrite(url);
  }

  // .html → clean URL permanent redirect (existing)
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
