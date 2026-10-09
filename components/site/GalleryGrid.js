"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { isVideo, videoPoster, videoSrc } from "@/lib/media";
import { cn } from "@/lib/utils";

/**
 * The consolidated gallery: photographs and videos together.
 *
 * Replaces the legacy site's two competing systems — the "Memory Book" page
 * and a portfolio custom post type — which between them also shipped a
 * duplicated image. `/memory-book/` and `/portfolio/*` both 301 here.
 *
 * Layout is justified rows. Every tile takes the aspect ratio of the file that
 * was uploaded — a portrait phone shot stays tall and narrow, a panorama stays
 * wide — and nothing is cropped. Each tile's flex-grow is its width/height
 * ratio, so a row fills the width while its tiles keep their shapes. The
 * trailing ::after soaks up the spare space on the last row so a lone item
 * there is not blown up to full width.
 *
 * The lightbox is a native <dialog>, so focus trapping, Escape and the
 * backdrop come from the browser rather than from hand-rolled JavaScript that
 * gets keyboard handling subtly wrong.
 */
export default function GalleryGrid({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const dialogRef = useRef(null);

  const close = useCallback(() => {
    dialogRef.current?.close();
    setOpenIndex(null);
  }, []);

  const step = useCallback(
    (delta) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        const next = current + delta;
        if (next < 0) return items.length - 1;
        if (next >= items.length) return 0;
        return next;
      });
    },
    [items.length]
  );

  const open = (index) => {
    setOpenIndex(index);
    dialogRef.current?.showModal();
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      }
    };
    // `close` fires for Escape and for form-method=dialog alike, so state and
    // the element never drift apart.
    const onClose = () => setOpenIndex(null);

    dialog.addEventListener("keydown", onKeyDown);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("keydown", onKeyDown);
      dialog.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = openIndex === null ? null : items[openIndex];

  return (
    <div>
      <ul className="flex flex-wrap gap-3 [--row-h:9rem] after:grow-[999] after:content-[''] sm:gap-4 sm:[--row-h:14rem] lg:[--row-h:17rem]">
        {items.map((item, index) => {
          const { width, height } = dimensionsOf(item.image);
          const ratio = width / height;
          const video = isVideo(item.image);
          const poster = video ? videoPoster(item.image.url) : "";

          return (
            <li
              key={item._id}
              style={{ flexGrow: ratio, flexBasis: `calc(var(--row-h) * ${ratio})` }}
              className="min-w-0"
            >
              <button
                type="button"
                onClick={() => open(index)}
                style={{ aspectRatio: `${width} / ${height}` }}
                className="group relative block w-full overflow-hidden rounded-2xl bg-mist-100 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {video && !poster ? (
                  <video
                    src={videoSrc(item.image.url)}
                    muted
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    className="absolute inset-0 size-full object-cover"
                  />
                ) : (
                  <Image
                    src={poster || item.image.url}
                    alt={altFor(item)}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}

                {video ? (
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex size-14 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <span className="sr-only">Play video</span>
                      <Play className="ml-0.5 size-6 fill-current" aria-hidden="true" />
                    </span>
                    {item.image.duration ? (
                      <span className="absolute top-3 right-3 rounded-full bg-black/55 px-2 py-0.5 text-xs font-semibold text-white tabular-nums">
                        {formatDuration(item.image.duration)}
                      </span>
                    ) : null}
                  </span>
                ) : null}

                {item.caption ? (
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-10 text-left text-sm leading-snug text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    {item.caption}
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        aria-label="Gallery viewer"
        className="w-full max-w-5xl rounded-3xl bg-transparent p-0 backdrop:bg-ink/85 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          // Clicking the backdrop closes; clicking the figure does not.
          if (event.target === dialogRef.current) close();
        }}
      >
        {current ? (
          <figure className="relative overflow-hidden rounded-3xl bg-white">
            {isVideo(current.image) ? (
              <video
                key={current._id}
                src={videoSrc(current.image.url)}
                poster={videoPoster(current.image.url) || undefined}
                controls
                autoPlay
                playsInline
                aria-label={altFor(current)}
                className="block max-h-[75vh] w-full bg-ink"
              />
            ) : (
              <Image
                src={current.image.url}
                alt={altFor(current)}
                width={dimensionsOf(current.image).width}
                height={dimensionsOf(current.image).height}
                sizes="(min-width: 1024px) 64rem, 100vw"
                className="h-auto max-h-[75vh] w-full object-contain bg-ink"
              />
            )}

            {current.caption ? (
              <figcaption className="px-6 py-4 text-sm leading-relaxed text-ink-soft">
                {current.caption}
              </figcaption>
            ) : null}

            <button
              type="button"
              onClick={close}
              className="absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-colors hover:bg-white"
            >
              <span className="sr-only">Close</span>
              <X className="size-5" aria-hidden="true" />
            </button>

            {items.length > 1 ? (
              <>
                <NavButton side="left" onClick={() => step(-1)} />
                <NavButton side="right" onClick={() => step(1)} />
                <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-soft">
                  {openIndex + 1} / {items.length}
                </p>
              </>
            ) : null}
          </figure>
        ) : null}
      </dialog>
    </div>
  );
}

function NavButton({ side, onClick }) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "absolute top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-colors hover:bg-white",
        side === "left" ? "left-3" : "right-3"
      )}
    >
      <span className="sr-only">{side === "left" ? "Previous" : "Next"} item</span>
      <Icon className="size-5" aria-hidden="true" />
    </button>
  );
}

/**
 * The uploaded file's own dimensions. Items seeded without Cloudinary have none
 * recorded, so they fall back to 4:3 rather than collapsing to zero height.
 */
function dimensionsOf(media) {
  if (media?.width > 0 && media?.height > 0) return { width: media.width, height: media.height };
  return { width: 1600, height: 1200 };
}

function altFor(item) {
  return item.image.alt || item.caption || "Alisha Tours & Travels gallery";
}

function formatDuration(seconds) {
  const total = Math.round(seconds);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}
