import mongoose from "mongoose";

/**
 * Mongoose connection helper.
 *
 * Next.js hot-reloads modules in development and runs many concurrent lambdas
 * in production, so a naive `mongoose.connect()` at module scope opens a new
 * pool on every reload and exhausts the Atlas connection limit. We cache the
 * connection promise on `globalThis` instead, which survives module reloads.
 */

const MONGODB_URI = process.env.MONGODB_URI;

let cached = globalThis.__alishaMongoose;
if (!cached) {
  cached = globalThis.__alishaMongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not set. Copy .env.example to .env.local and fill in your MongoDB Atlas connection string."
    );
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        // Fail fast rather than hanging a request for 30s when Atlas is
        // unreachable or the IP allowlist has not been updated.
        serverSelectionTimeoutMS: 10000,
        maxPoolSize: 10,
      })
      .then((m) => m.connection);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    // Clear the rejected promise so the next request retries instead of
    // replaying the same failure forever.
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}

export default connectToDatabase;
