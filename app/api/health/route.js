import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Health check for DigitalOcean App Platform.
 *
 * App Platform polls this before routing traffic to a new deployment and
 * restarts the container if it starts failing. So it must answer two questions
 * honestly and quickly:
 *
 *   - Is the process up?           Always yes if this responds at all.
 *   - Can it reach the database?   Reported, but NOT fatal.
 *
 * A database blip returns 200 with `database: "degraded"` rather than 503.
 * Failing the health check on a transient Atlas hiccup would take the whole
 * site down — including the statically generated pages, which do not need the
 * database at all — and App Platform would then roll the container in a loop.
 * A 503 here should mean "this container is broken", not "Atlas is slow".
 */
export async function GET() {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  const database = states[mongoose.connection?.readyState] || "unknown";

  return NextResponse.json(
    {
      status: "ok",
      database: database === "connected" ? "connected" : "degraded",
      readyState: database,
      uptimeSeconds: Math.round(process.uptime()),
      timestamp: new Date().toISOString(),
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
