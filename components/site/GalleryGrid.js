"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The consolidated gallery.
 *
 * Replaces the legacy site's two competing systems — the "Memory Book" page
 * and a portfolio custom post type — which between them also shipped a
 * duplicated image. `/memory-book/` and `/portfolio/*` both 301 here.
 *
 * Two rules, both from defects in the old gallery:
 *   - A filter tab only exists if pressing it will show something. The tabs
 *     are derived from the categories actually present in the data, and the
 *     legacy tabs all pointed at "#" and filtered nothing.
 *   - The lightbox is a native <dialog>, so focus trapping, Escape and the
 *     backdrop come from the browser rather than from hand-rolled JavaScript
 *     that gets keyboard handling subtly wrong.
 */
export default function GalleryGrid({ items = [], categories = [] }) {
  const [active, setActive] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);
  const dialogRef = useRef(null);

  const visible = active === "all" ? items : items.filter((item) => item.category === active);

  const close = useCallback(() => {
    dialogRef.current?.close();
    setOpenIndex(null);
  }, []);

  const step = useCallback(
    (delta) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        const next = current + delta;
        if (next < 0) return visible.length - 1;
        if (next >= visible.length) return 0;
        return next;
      });
    },
    [visible.length]
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

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <div>
      {categories.length > 1 ? (
        <nav
          aria-label="Filter photographs"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <FilterTab
            label="All"
            count={items.length}
            selected={active === "all"}
            onClick={() => setActive("all")}
          />
          {categories.map((category) => (
            <FilterTab
              key={category.slug}
              label={category.label}
              count={category.count}
              selected={active === category.slug}
              onClick={() => setActive(category.slug)}
            />
          ))}
        </nav>
      ) : null}

      <ul className="mt-8 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((item, index) => (
          <li key={item._id} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => open(index)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-mist-100 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Image
                src={item.image.url}
                alt={item.image.alt || item.caption || "Alisha Tours & Travels photograph"}
                width={800}
                height={600}
                loading="lazy"
                sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw"
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {item.caption ? (
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-10 text-left text-sm leading-snug text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {item.caption}
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>

      {!visible.length ? (
        <p className="rounded-3xl border border-dashed border-line p-12 text-center text-ink-muted">
          Nothing in this category yet.
        </p>
      ) : null}

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        aria-label="Photograph viewer"
        className="w-full max-w-5xl rounded-3xl bg-transparent p-0 backdrop:bg-ink/85 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          // Clicking the backdrop closes; clicking the figure does not.
          if (event.target === dialogRef.current) close();
        }}
      >
        {current ? (
          <figure className="relative overflow-hidden rounded-3xl bg-white">
            <Image
              src={current.image.url}
              alt={current.image.alt || current.caption || ""}
              width={1600}
              height={1200}
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="h-auto max-h-[75vh] w-full object-contain bg-ink"
            />

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

            {visible.length > 1 ? (
              <>
                <NavButton side="left" onClick={() => step(-1)} />
                <NavButton side="right" onClick={() => step(1)} />
                <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-soft">
                  {openIndex + 1} / {visible.length}
                </p>
              </>
            ) : null}
          </figure>
        ) : null}
      </dialog>
    </div>
  );
}

function FilterTab({ label, count, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
        "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none",
        selected
          ? "border-brand-700 bg-brand-700 text-white"
          : "border-line bg-white text-ink-soft hover:border-brand-300 hover:text-brand-700"
      )}
    >
      {label}
      <span className={cn("ml-2 text-xs", selected ? "text-white/85" : "text-ink-muted")}>
        {count}
      </span>
    </button>
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
      <span className="sr-only">{side === "left" ? "Previous" : "Next"} photograph</span>
      <Icon className="size-5" aria-hidden="true" />
    </button>
  );
}
