import { connectToDatabase } from "../db";

/**
 * Server-side data access.
 *
 * These modules run only on the server (pages and Route Handlers). They return
 * plain, JSON-serialisable objects so the results can be handed straight to
 * Client Components without "only plain objects can be passed" errors.
 *
 * `withDb` exists for one specific reason: CI and preview builds. Public pages
 * are statically generated with ISR, which means they query MongoDB at build
 * time. If MONGODB_URI is simply absent — a CI job running `next build` with no
 * secrets — we would rather emit an empty page and a loud warning than fail the
 * build. When the URI IS set but the database is unreachable, that is a real
 * misconfiguration and the error is allowed to surface.
 */
export async function withDb(run, fallback) {
  if (!process.env.MONGODB_URI) {
    console.warn(
      "[data] MONGODB_URI is not set - returning empty data. " +
        "Set it in .env.local (development) or in App Platform (production)."
    );
    return fallback;
  }
  await connectToDatabase();
  return run();
}

/**
 * Mongoose lean documents still contain ObjectIds and Dates. This flattens
 * them to strings so they cross the server/client boundary cleanly. Dates
 * become ISO strings, which every helper in lib/format.js accepts.
 */
export function plain(value) {
  return value === null || value === undefined ? value : JSON.parse(JSON.stringify(value));
}
