"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Horizontal card rail with scroll-snap and arrow controls.
 *
 * Used for Trending Destinations and the deals carousel. Native overflow
 * scrolling does the work — so it is a real touch scroller on mobile, keeps
 * keyboard and screen-reader access for free, and needs no carousel library.
 * The arrows are progressive enhancement and hide themselves when there is
 * nothing to scroll to.
 */
export default function ScrollRow({
  children,
  className,
  itemClassName,
  label,
  // The rail now owns its section header. The arrows have to live in the same
  // component as the rail they scroll — they need its ref and its scroll state
  // — and the client wants them on the heading row, top right, next to the
  // "view all" link. Rendering the heading here is what lets both sit in one
  // row without reaching across the component tree.
  title,
  // A rail can carry a full section header — the homepage bands each open with
  // an eyebrow and a lead paragraph — without giving up the arrows, which have
  // to be rendered here because they need the rail's ref and scroll state.
  eyebrow,
  lead,
  link,
  linkLabel = "View all",
  // Anything that belongs between the header and the rail — the deals tabs,
  // for instance.
  beforeRail,
  // Lets a caller wrap the rail without losing the header, e.g. the deals
  // carousel needs role="tabpanel" on the element that contains the rail.
  railWrapper,
}) {
  const railRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const update = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setAtStart(rail.scrollLeft <= 4);
    setAtEnd(rail.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;
    update();
    rail.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(rail);
    return () => {
      rail.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [update]);

  const scrollBy = (direction) => {
    const rail = railRef.current;
    if (!rail) return;
    // Roughly one card plus its gap, so a press advances by a whole item.
    const step = Math.max(rail.clientWidth * 0.8, 280);
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const hideArrows = atStart && atEnd;

  const rail = (
    <ul
        ref={railRef}
        aria-label={label}
        className={cn(
          "-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10",
          // scroll-padding MUST match the horizontal padding above. The rail
          // bleeds edge-to-edge with a negative margin and pads its content
          // back in, so the first card lines up with the section heading. But
          // `snap-mandatory` snaps items to the *snapport* edge, and without
          // scroll-padding the snapport starts at the border box — so on load
          // the browser scrolled the container by exactly the padding (32px)
          // to satisfy the first item's `snap-start`, dragging every card 32px
          // left of the heading. Setting scroll-padding moves the snapport in
          // to the content edge and scrollLeft stays 0.
          "scroll-pl-5 scroll-pr-5 sm:scroll-pl-8 sm:scroll-pr-8 lg:scroll-pl-10 lg:scroll-pr-10",
          // Hide the scrollbar chrome but keep the scrolling behaviour.
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <li key={child?.key ?? index} className={cn("snap-start", itemClassName)}>
                {child}
              </li>
            ))
          : children}
    </ul>
  );

  const arrows = !hideArrows ? (
    <div className="flex shrink-0 gap-2">
      <RailButton
        onClick={() => scrollBy(-1)}
        disabled={atStart}
        label={`Scroll ${label} left`}
        icon={<ChevronLeft className="size-5" aria-hidden="true" />}
      />
      <RailButton
        onClick={() => scrollBy(1)}
        disabled={atEnd}
        label={`Scroll ${label} right`}
        icon={<ChevronRight className="size-5" aria-hidden="true" />}
      />
    </div>
  ) : null;

  const header =
    title || link || arrows ? (
      <div className="flex items-end justify-between gap-4">
        {title ? (
          <div className="max-w-2xl">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className="text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
              {title}
            </h2>
          </div>
        ) : (
          <span />
        )}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          {link ? (
            <Link
              href={link}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap text-brand-700 underline-offset-4 hover:underline"
            >
              {linkLabel}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          ) : null}
          {arrows}
        </div>
      </div>
    ) : null;

  return (
    <div className={cn("relative", className)}>
      {header}
      {lead ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{lead}</p>
      ) : null}
      {beforeRail ? <div className="mt-5">{beforeRail}</div> : null}
      <div className={header || beforeRail ? "mt-5" : undefined}>
        {railWrapper ? railWrapper(rail) : rail}
      </div>
    </div>
  );
}

function RailButton({ onClick, disabled, label, icon }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink",
        "transition-colors hover:border-brand-400 hover:text-brand-700",
        "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-35"
      )}
    >
      <span className="sr-only">{label}</span>
      {icon}
    </button>
  );
}
