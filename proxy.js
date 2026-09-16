import { NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE } from "@/lib/auth-edge";

/**
 * Route guard for the dashboard.
 *
 * In Next 16 this file is `proxy.js`, not `middleware.js` — the convention was
 * renamed, the named export must be `proxy`, and the runtime is Node.js and
 * cannot be configured.
 *
 * This is an OPTIMISTIC check, in the sense the Next docs mean: it keeps
 * signed-out visitors from seeing the dashboard shell and bounces signed-in
 * users away from the login screen. It is NOT the authorisation boundary. Every
 * admin page re-reads the session, and every Server Action re-checks the role,
 * because that is where a stale or forged cookie has to be caught.
 */
export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const session = await verifySessionToken(token);

  const isLogin = pathname.startsWith("/admin/login");

  if (!session && !isLogin) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login/";
    // Remember where they were headed so login can send them back.
    url.search = pathname === "/admin/" ? "" : `?next=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }

  if (session && isLogin) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
