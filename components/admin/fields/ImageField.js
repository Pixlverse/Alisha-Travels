"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * A single Cloudinary asset: the picture, plus its alt text.
 *
 * Alt text sits beside the image rather than in a separate field list because
 * it belongs to the image — it travels with it to every place it is rendered,
 * which is what makes "every image has an alt attribute" achievable rather
 * than aspirational.
 */
export default function ImageField({ id, value, onChange, folder = "misc", help }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const upload = async (file) => {
    if (!file) return;
    setBusy(true);
    setError("");

    const body = new FormData();
    body.append("file", file);
    body.append("folder", folder);

    try {
      const response = await fetch("/api/admin/upload/", { method: "POST", body });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error || "Upload failed.");
        return;
      }
      onChange({
        url: result.url,
        publicId: result.publicId,
        width: result.width,
        height: result.height,
        alt: value?.alt || "",
      });
    } catch {
      setError("Could not reach the server.");
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-start gap-4">
        <div className="relative size-28 shrink-0 overflow-hidden rounded-lg border border-line bg-mist-50">
          {value?.url ? (
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
            accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
            onChange={(event) => upload(event.target.files?.[0])}
            className="block w-full text-sm text-ink-soft file:mr-3 file:rounded-md file:border-0 file:bg-brand-50 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100"
          />

          {busy ? (
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
              Uploading to Cloudinary…
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
                placeholder="Describe the photograph for someone who cannot see it"
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
