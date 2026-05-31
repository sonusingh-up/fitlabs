import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.endsWith(".html")) {
    const newPath = pathname.slice(0, -5) || "/";
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    return NextResponse.redirect(url, { status: 301 });
  }
}

export const config = {
  // Run on every path except Next.js internals and static assets
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
