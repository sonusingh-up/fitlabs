import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // .html → clean URL redirect (existing behaviour)
  if (pathname.endsWith(".html")) {
    const newPath = pathname.slice(0, -5) || "/";
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    return NextResponse.redirect(url, { status: 301 });
  }

  // Auth session refresh on protected & auth routes
  if (pathname.startsWith("/account") || pathname.startsWith("/auth/") || pathname.startsWith("/admin")) {
    let supabaseResponse = NextResponse.next({ request });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value),
            );
            supabaseResponse = NextResponse.next({ request });
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options),
            );
          },
        },
      },
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Redirect unauthenticated users away from /account and /admin
    if (!user && (pathname.startsWith("/account") || pathname.startsWith("/admin"))) {
      const url = request.nextUrl.clone();
      url.pathname = "/auth/login";
      url.searchParams.set("redirect", pathname);
      return NextResponse.redirect(url);
    }

    // Redirect authenticated users away from auth pages
    // (except /auth/reset-password — user must be logged in to set a new password,
    //  and /auth/callback — needs to complete the code exchange)
    if (
      user &&
      pathname.startsWith("/auth/") &&
      !pathname.startsWith("/auth/reset-password") &&
      !pathname.startsWith("/auth/callback")
    ) {
      const redirect = request.nextUrl.searchParams.get("redirect") || "/account";
      const url = request.nextUrl.clone();
      url.pathname = redirect;
      url.search = "";
      return NextResponse.redirect(url);
    }

    return supabaseResponse;
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
