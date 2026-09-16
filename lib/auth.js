import "server-only";

import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify } from "jose";

import { connectToDatabase } from "./db";
import { AdminUser } from "@/models";
import { verifyPasswordSafely } from "./password";

/**
 * Dashboard authentication.
 *
 * A signed JWT in an httpOnly cookie rather than NextAuth. This is a two-role
 * internal dashboard with no OAuth, no public signup and no account linking —
 * a signed cookie plus a guard is less machinery than a full auth framework
 * and there is no beta dependency in the critical path. See README > Stack.
 *
 * The token carries only what the UI needs to render (id, name, email, role).
 * It is never trusted for authorisation of a mutation: every Server Action
 * re-reads the session and checks the role server-side, because a cookie is
 * something the client holds and could be stale after a role change.
 */

const COOKIE_NAME = "alisha_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function secretKey() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "AUTH_SECRET is missing or too short. Generate one with `openssl rand -base64 48` and set it in .env.local (and in App Platform for production)."
    );
  }
  return new TextEncoder().encode(secret);
}

/* -------------------------------------------------------------------------- */
/*  Tokens                                                                     */
/* -------------------------------------------------------------------------- */

export async function signSessionToken(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("alishatravels.in")
    .setAudience("alisha-admin")
    .setExpirationTime(`${MAX_AGE_SECONDS}s`)
    .sign(secretKey());
}

/** Returns the payload, or null for anything invalid or expired. */
export async function verifySessionToken(token) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secretKey(), {
      issuer: "alishatravels.in",
      audience: "alisha-admin",
    });
    return payload;
  } catch {
    return null;
  }
}

export const SESSION_COOKIE = COOKIE_NAME;

/* -------------------------------------------------------------------------- */
/*  Session lifecycle                                                          */
/* -------------------------------------------------------------------------- */

export async function createSession(user) {
  const token = await signSessionToken({
    sub: String(user._id),
    name: user.name,
    email: user.email,
    role: user.role,
  });

  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    // Secure in production only, so http://localhost still works in dev.
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function destroySession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

/**
 * Memoised per request, so a layout, a page and three Server Components can
 * each ask for the session without re-verifying the token four times.
 */
export const getSession = cache(async () => {
  const store = await cookies();
  const payload = await verifySessionToken(store.get(COOKIE_NAME)?.value);
  if (!payload) return null;

  return {
    id: payload.sub,
    name: payload.name,
    email: payload.email,
    role: payload.role,
  };
});

/* -------------------------------------------------------------------------- */
/*  Guards                                                                     */
/* -------------------------------------------------------------------------- */

/** Use at the top of any admin page or Server Action. */
export async function requireSession() {
  const session = await getSession();
  if (!session) redirect("/admin/login/");
  return session;
}

/**
 * Content mutations and the team-accounts page are admin-only. `staff` may
 * read everything and change enquiry status, and nothing else.
 *
 * This redirects rather than throwing. Throwing works — it stops the request —
 * but it surfaces as a 500, and "the server broke" is the wrong message for
 * "you do not have access to this". A staff member who follows a bookmark to
 * a content page should be told plainly what happened.
 */
export async function requireAdmin() {
  const session = await requireSession();
  if (session.role !== "admin") redirect("/admin/denied/");
  return session;
}

export function isAdmin(session) {
  return session?.role === "admin";
}

/* -------------------------------------------------------------------------- */
/*  Login                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Verifies credentials and opens a session. Returns { ok, error } rather than
 * throwing, so the login form can render the message.
 *
 * The failure message is deliberately identical for "no such account",
 * "wrong password" and "deactivated": telling an attacker which e-mail
 * addresses exist is a free gift.
 */
export async function login(email, password) {
  const GENERIC = "That e-mail and password do not match an active account.";

  if (!email || !password) return { ok: false, error: GENERIC };

  await connectToDatabase();
  const user = await AdminUser.findOne({ email: String(email).trim().toLowerCase() }).select(
    "+passwordHash name email role active"
  );

  // verifyPasswordSafely hashes against a dummy when the user is missing, so
  // the response takes the same time either way and cannot be used to
  // enumerate accounts.
  const valid = await verifyPasswordSafely(password, user?.passwordHash);

  if (!user || !valid || !user.active) return { ok: false, error: GENERIC };

  await createSession(user);
  await AdminUser.updateOne({ _id: user._id }, { $set: { lastLoginAt: new Date() } });

  return { ok: true, role: user.role };
}
