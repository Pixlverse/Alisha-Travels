import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { CLOUDINARY_FOLDERS, isCloudinaryConfigured, uploadBuffer } from "@/lib/cloudinary";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Image upload for the dashboard.
 *
 * Admin-only, and the file is validated on the server rather than trusting the
 * `accept` attribute on the input — the browser is not the security boundary.
 */

const MAX_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"];

export async function POST(request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  if (session.role !== "admin") {
    return NextResponse.json({ error: "Only an admin can upload images" }, { status: 403 });
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

  let form;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Malformed upload" }, { status: 400 });
  }

  const file = form.get("file");
  const folderKey = String(form.get("folder") || "misc");

  if (!file || typeof file.arrayBuffer !== "function") {
    return NextResponse.json({ error: "No file received" }, { status: 400 });
  }
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json(
      { error: `That file type is not supported. Use JPEG, PNG, WebP, AVIF or GIF.` },
      { status: 415 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: `That image is ${(file.size / 1024 / 1024).toFixed(1)} MB. The limit is 10 MB.` },
      { status: 413 }
    );
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const asset = await uploadBuffer(buffer, {
      folder: CLOUDINARY_FOLDERS[folderKey] || CLOUDINARY_FOLDERS.misc,
      tags: ["admin-upload"],
    });
    return NextResponse.json({ ok: true, ...asset });
  } catch (error) {
    console.error("[upload] Cloudinary failed:", error);
    return NextResponse.json({ error: error?.message || "Upload failed" }, { status: 500 });
  }
}
