/**
 * Best-effort in-memory rate limiter for the public enquiry endpoint.
 *
 * Scope and honesty about it: this is per-process. On DigitalOcean App
 * Platform with a single instance that is the whole application, which is the
 * current deployment. Scale to more than one instance and each gets its own
 * window, so the effective limit multiplies. That is an acceptable trade for
 * now — the goal here is to stop a script hammering the endpoint and filling
 * the leads table, not to defend against a distributed attack. If this ever
 * needs to be exact, move the counter to MongoDB or Redis.
 *
 * The counter lives on globalThis so it survives Next's module reloads in
 * development.
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 8;

const store = (globalThis.__alishaRateLimit ??= new Map());

export function checkRateLimit(key, { windowMs = WINDOW_MS, max = MAX_REQUESTS } = {}) {
  const now = Date.now();
  const hits = (store.get(key) || []).filter((time) => now - time < windowMs);

  if (hits.length >= max) {
    const retryAfter = Math.ceil((windowMs - (now - hits[0])) / 1000);
    return { allowed: false, retryAfter };
  }

  hits.push(now);
  store.set(key, hits);

  // Opportunistic cleanup so the map cannot grow without bound.
  if (store.size > 5000) {
    for (const [existingKey, times] of store) {
      if (!times.some((time) => now - time < windowMs)) store.delete(existingKey);
    }
  }

  return { allowed: true, remaining: max - hits.length };
}
