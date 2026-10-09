import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { CLOUDINARY_FOLDERS, isCloudinaryConfigured, signUpload } from "@/lib/cloudinary";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Signs a browser-direct Cloudinary upload, used for gallery videos.
 *
 * Videos are too large to send through /api/admin/upload/ (serverless request
 * bodies cap out well below a phone video), so the browser uploads them to
 * Cloudinary itself. This route is the gate: only an admin gets a signature,
 * and the signature pins the folder, so it cannot be reused to write anywhere
 * else in the account. File type and size are enforced by Cloudinary's video
 * endpoint and the plan's upload limit.
 */
export async function POST(request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  if (session.role !== "admin") {
    return NextResponse.json({ error: "Only an admin can upload media" }, { status: 403 });
  }

  if (!isCloudinaryConfigured()) {
    return NextResponse.json(
      {
        error:
          "Cloudinary is not configured. Set CLOUDINARY_URL (or the three CLOUDINARY_* variables) and restart.",
      },
      { status: 503 }
    );
  }

  let body = {};
  try {
    body = await request.json();
  } catch {
    // An empty body just means the default folder.
  }

  const folder = CLOUDINARY_FOLDERS[String(body.folder || "misc")] || CLOUDINARY_FOLDERS.misc;
  return NextResponse.json({ ok: true, ...signUpload({ folder, tags: ["admin-upload"] }) });
}
