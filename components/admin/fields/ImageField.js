"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ImagePlus, Loader2, Play, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isVideo, videoPoster } from "@/lib/media";

const IMAGE_TYPES = "image/jpeg,image/png,image/webp,image/avif,image/gif";
const VIDEO_TYPES = "video/mp4,video/webm,video/quicktime";
// Cloudinary's per-file video limit on the standard plans. Checked here so the
// admin hears about it before a long upload, not after.
const MAX_VIDEO_BYTES = 100 * 1024 * 1024;

/**
 * A single Cloudinary asset: the picture, plus its alt text.
 *
 * Alt text sits beside the image rather than in a separate field list because
 * it belongs to the image — it travels with it to every place it is rendered,
 * which is what makes "every image has an alt attribute" achievable rather
 * than aspirational.
 *
 * With `allowVideo` (the gallery) it also takes a video. Images still go
 * through our own upload route; videos are uploaded by the browser straight to
 * Cloudinary with a signature from /api/admin/upload/sign/, because they are
 * too large to pass through a serverless request body.
 */
export default function ImageField({ id, value, onChange, folder = "misc", help, allowVideo = false }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState("");

  const video = isVideo(value);

  const upload = async (file) => {
    if (!file) return;
    setError("");

    const asVideo = file.type.startsWith("video/");
    if (asVideo && !allowVideo) {
      setError("Only images can be uploaded here.");
      return;
    }
    if (asVideo && file.size > MAX_VIDEO_BYTES) {
      setError(`That video is ${(file.size / 1024 / 1024).toFixed(0)} MB. The limit is 100 MB - trim or compress it first.`);
      if (inputRef.current) inputRef.current.value = "";
      return;
    }

    setBusy(true);
    try {
      const result = asVideo ? await uploadVideo(file, folder, setProgress) : await uploadImage(file, folder);
      onChange({
        url: result.url,
        publicId: result.publicId,
        resourceType: asVideo ? "video" : "image",
        width: result.width,
        height: result.height,
        ...(asVideo ? { duration: result.duration } : {}),
        alt: value?.alt || "",
      });
    } catch (uploadError) {
      setError(uploadError.message || "Upload failed.");
    } finally {
      setBusy(false);
      setProgress(null);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-start gap-4">
        <div className="relative size-28 shrink-0 overflow-hidden rounded-lg border border-line bg-mist-50">
          {value?.url && video ? (
            <>
              <video
                src={value.url}
                poster={videoPoster(value.url) || undefined}
                muted
                playsInline
                preload="metadata"
                className="size-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/20 text-white">
                <Play className="size-6 fill-current" aria-hidden="true" />
              </span>
            </>
          ) : value?.url ? (
            <Image src={value.url} alt="" fill sizes="7rem" className="object-cover" />
          ) : (
            <span className="flex size-full items-center justify-center text-muted-foreground">
              <ImagePlus className="size-6" aria-hidden="true" />
            </span>
          )}
        </div>

        <div className="min-w-[14rem] flex-1 space-y-2">
          <input
            ref={inputRef}
            id={id}
            type="file"
            accept={allowVideo ? `${IMAGE_TYPES},${VIDEO_TYPES}` : IMAGE_TYPES}
            onChange={(event) => upload(event.target.files?.[0])}
            className="block w-full text-sm text-ink-soft file:mr-3 file:rounded-md file:border-0 file:bg-brand-50 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100"
          />

          {busy ? (
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
              Uploading to Cloudinary{progress !== null ? ` - ${progress}%` : "…"}
            </p>
          ) : null}

          {error ? (
            <p role="alert" className="text-xs text-destructive">
              {error}
            </p>
          ) : null}

          {value?.url ? (
            <div className="space-y-1.5">
              <Label htmlFor={`${id}-alt`} className="text-xs">
                Alt text
              </Label>
              <Input
                id={`${id}-alt`}
                value={value.alt || ""}
                onChange={(event) => onChange({ ...value, alt: event.target.value })}
                placeholder={
                  video
                    ? "Describe what happens in the video for someone who cannot see it"
                    : "Describe the photograph for someone who cannot see it"
                }
              />
            </div>
          ) : null}
        </div>

        {value?.url ? (
          <Button type="button" variant="ghost" size="sm" onClick={() => onChange(null)}>
            <Trash2 className="size-4" aria-hidden="true" />
            Remove
          </Button>
        ) : null}
      </div>

      {help ? <p className="text-xs text-muted-foreground">{help}</p> : null}
    </div>
  );
}

async function uploadImage(file, folder) {
  const body = new FormData();
  body.append("file", file);
  body.append("folder", folder);

  let response;
  try {
    response = await fetch("/api/admin/upload/", { method: "POST", body });
  } catch {
    throw new Error("Could not reach the server.");
  }
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || "Upload failed.");
  return result;
}

/**
 * Signed, browser-direct upload to Cloudinary's video endpoint. XHR rather than
 * fetch because fetch still cannot report upload progress, and a minute-long
 * upload with no feedback reads as a hang.
 */
async function uploadVideo(file, folder, onProgress) {
  let signed;
  try {
    const response = await fetch("/api/admin/upload/sign/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ folder }),
    });
    signed = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(signed.error || "Could not start the upload.");
  } catch (signError) {
    throw new Error(signError.message || "Could not reach the server.");
  }

  const body = new FormData();
  body.append("file", file);
  body.append("api_key", signed.apiKey);
  body.append("timestamp", String(signed.timestamp));
  body.append("signature", signed.signature);
  body.append("folder", signed.folder);
  body.append("tags", signed.tags);

  const result = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `https://api.cloudinary.com/v1_1/${signed.cloudName}/video/upload`);
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) onProgress(Math.round((event.loaded / event.total) * 100));
    };
    xhr.onload = () => {
      let json = {};
      try {
        json = JSON.parse(xhr.responseText);
      } catch {
        // Fall through to the generic message.
      }
      if (xhr.status >= 200 && xhr.status < 300) resolve(json);
      else reject(new Error(json.error?.message || "Cloudinary rejected the video."));
    };
    xhr.onerror = () => reject(new Error("Could not reach Cloudinary."));
    xhr.send(body);
  });

  return {
    url: result.secure_url,
    publicId: result.public_id,
    width: result.width,
    height: result.height,
    duration: result.duration,
  };
}
