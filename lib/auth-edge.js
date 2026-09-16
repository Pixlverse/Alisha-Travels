import { jwtVerify } from "jose";

/**
 * Token verification with no database and no `server-only` import, so it can
 * be used from proxy.js. lib/auth.js pulls in Mongoose and next/headers, which
 * do not belong in a request guard that runs on every /admin/* navigation.
 *
 * Keep the claim names here in step with signSessionToken() in lib/auth.js.
 */
export const SESSION_COOKIE = "alisha_session";

export async function verifySessionToken(token) {
  if (!token || !process.env.AUTH_SECRET) return null;
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.AUTH_SECRET),
      { issuer: "alishatravels.in", audience: "alisha-admin" }
    );
    return payload;
  } catch {
    return null;
  }
}
