"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";

import StarRating from "./StarRating";
import { formatDate } from "@/lib/format";
import { SOCIAL } from "@/lib/site";
import { cn } from "@/lib/utils";

const SOURCE_LABEL = {
  google: "Google review",
  justdial: "JustDial review",
  direct: "Shared with us directly",
};

/** One slide, in milliseconds. Long, because these quotes are 40-60 words. */
const ROTATE_MS = 8000;

/**
 * The homepage reviews section: one quote in a spotlight, with every reviewer
 * listed beside it and selectable.
 *
 * This replaced a horizontal rail of six identical review cards. The rail's
 * problem was not how it looked, it was that it asked to be read: six cards of
 * 50-word quotes at 15px, three of them off-screen behind a scrollbar. Nobody
 * reads the sixth. One quote at a readable size, with the others named and one
 * click away, is the same content at a fraction of the effort.
 *
 * INTERACTION
 * - Click any reviewer, or use the arrows, or arrow-key through the list.
 * - It advances on its own every 8s, and there is a real pause button. That
 *   button is not decoration: WCAG 2.2.2 requires a pause, stop or hide control
 *   for anything that auto-updates for more than five seconds, and hover/focus
 *   pausing alone does not satisfy it for a keyboard or touch user. Hover and
 *   focus pause it too, because losing the quote you are mid-sentence in is
 *   infuriating.
 * - prefers-reduced-motion starts it paused and drops the crossfade. The play
 *   button still works — the setting means "do not move things at me", not "do
 *   not let me choose".
 *
 * The tablist keyboard behaviour is the full pattern (arrows, Home, End, roving
 * tabindex), not just click handlers. DealsTabs predates this and only wires up
 * clicks; this is the one to copy from.
 */
export default function TestimonialSpotlight({ testimonials = [], rating, className }) {
  const items = testimonials.filter((item) => item?.quote);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const tabRefs = useRef([]);
  const blockRef = useRef(null);

  const count = items.length;

  const go = useCallback(
    (next, { focus = false } = {}) => {
      if (!count) return;
      const wrapped = (next + count) % count;
      setIndex(wrapped);
      if (focus) tabRefs.current[wrapped]?.focus();
    },
    [count]
  );

  // Read the motion preference once and keep listening: someone can flip it in
  // the OS while the page is open, and this is cheap to honour.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduced(query.matches);
      if (query.matches) setPaused(true);
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  // The rotation. Keyed on `index` as well as `paused`, so every manual
  // selection restarts the clock rather than leaving a slide that changes 200ms
  // after it was chosen.
  useEffect(() => {
    if (paused || reduced || count < 2) return undefined;
    const timer = window.setTimeout(() => go(index + 1), ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduced, count, go]);

  if (!count) return null;

  const active = items[index];
  const running = !paused && !reduced && count > 1;

  const onKeyDown = (event) => {
    const keys = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: count - 1,
    };
    if (!(event.key in keys)) return;
    event.preventDefault();
    go(keys[event.key], { focus: true });
  };

  return (
    <div
      // One card holding both columns, on a tinted band.
      //
      // The quote panel used to sit on the page directly, with the reviewer
      // list on bare white beside it, and the whole band read as an expanse of
      // empty page with two objects floating in it. Inside a card, the same
      // slack reads as padding, and the tinted band behind it gives the card an
      // edge to have.
      className={cn(
        "rounded-[1.75rem] bg-white p-3 shadow-[0_24px_60px_-45px_rgba(16,32,42,0.4)] ring-1 ring-line/70 sm:p-4",
        className
      )}
      ref={blockRef}
      // Hover and focus pause on the whole block, not just the quote: the
      // reviewer list is part of reading it.
      //
      // Both handlers check the other condition before resuming. Without that,
      // moving the mouse away while a tab still has keyboard focus restarted
      // the rotation under the cursor of someone reading with the keyboard, and
      // tabbing out of a hovered block did the same to the mouse.
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        if (reduced) return;
        if (blockRef.current?.contains(document.activeElement)) return;
        setPaused(false);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (reduced) return;
        if (event.currentTarget.contains(event.relatedTarget)) return;
        if (event.currentTarget.matches(":hover")) return;
        setPaused(false);
      }}
    >
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-5">
        {/* ------------------------------ Spotlight ------------------------------ */}
        <div
          role="tabpanel"
          id={`review-panel-${active._id}`}
          aria-labelledby={`review-tab-${active._id}`}
          // flex column, so the quote stack can take the full height of the
          // panel. The panel is a grid item next to the reviewer list and gets
          // stretched to whichever of the two is taller, so its height is NOT
          // the height of its content — without this the attribution floated
          // wherever the quote ended and left slack under it.
          className="relative flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand-50 via-white to-white p-7 ring-1 ring-brand-100/80 sm:p-9"
        >
          {/* Same corner-mark idea as the services cards: sized past the box and
              hung off the corner so the panel crops it, rather than dropped in
              the middle at 40% where it just looks like a stray icon. */}
          <Quote
            aria-hidden="true"
            className="pointer-events-none absolute -top-7 -right-5 size-40 text-brand-100/70"
            strokeWidth={1}
          />

          {/*
            Every quote is rendered, all of them stacked in one grid cell, and
            only the active one is visible. Two reasons, both learned the hard
            way: the panel's height is then the TALLEST quote and never changes,
            where swapping a single node made the section jump by up to 90px
            between a short review and a long one; and opacity can crossfade,
            which a node that unmounts cannot.

            The inactive ones are aria-hidden. Safe here because a quote contains
            no focusable content — add a link inside one and it needs `inert` too.
          */}
          <div className="relative grid flex-1">
            {items.map((item, position) => {
              const current = position === index;
              return (
                <figure
                  key={item._id}
                  aria-hidden={!current}
                  className={cn(
                    // Centred, not pinned. The stack is as tall as the LONGEST
                    // quote, so every shorter slide has slack to put somewhere,
                    // and there are only three places to put it. Below the
                    // caption reads as a bug. All of it between quote and caption
                    // — a flex-1 blockquote, which is what this did first — reads
                    // as a hole, and on the shortest review that hole was over
                    // 200px. Split above and below the whole group, it reads as
                    // the panel's proportions and nothing looks broken.
                    //
                    // No h-full here, deliberately. height:100% against a grid
                    // row that is auto-sized is indefinite, so it resolves to
                    // auto AND suppresses the align-self:stretch that would
                    // otherwise fill the row.
                    "col-start-1 row-start-1 flex flex-col justify-center",
                    !reduced && "transition-opacity duration-500 ease-out",
                    current ? "opacity-100" : "pointer-events-none opacity-0"
                  )}
                >
                  {/* The trip sits up here beside the stars rather than only in
                      the caption: the stars alone left a 500px line with one
                      80px object on it, which was the emptiest part of the
                      panel. */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <StarRating value={item.rating} size="lg" />
                    {item.tourTaken ? (
                      <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-brand-800 ring-1 ring-brand-200">
                        {item.tourTaken}
                      </span>
                    ) : null}
                  </div>

                  <blockquote className="mt-5">
                    <p className="text-pretty text-lg leading-relaxed text-ink sm:text-xl sm:leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-3.5 border-t border-brand-100 pt-5">
                    <Avatar person={item} className="size-12" />
                    <div className="min-w-0">
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="truncate text-sm text-ink-muted">{item.location}</p>
                    </div>
                    <p className="ml-auto hidden shrink-0 text-right text-xs leading-relaxed text-ink-muted sm:block">
                      {SOURCE_LABEL[item.source] || "Review"}
                      {item.date ? (
                        <>
                          <br />
                          {formatDate(item.date)}
                        </>
                      ) : null}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>

        {/* --------------------------- Reviewer list ---------------------------- */}
        <div className="flex min-w-0 flex-col">
          {rating ? (
            /* Links to Google, not to our own reviews page — see the note on
               SOCIAL.google in lib/site.js. */
            <a
              href={SOCIAL.google}
              target="_blank"
              rel="noopener noreferrer"
              className="order-2 mt-4 flex w-fit items-center gap-2 text-sm text-ink-muted underline-offset-4 transition-colors hover:text-brand-700 hover:underline focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none lg:order-1 lg:mt-0 lg:mb-4"
            >
              <StarRating value={rating.value} showValue />
              <span>on Google reviews</span>
            </a>
          ) : null}

          {/*
            Horizontal and scrollable below lg, a vertical list above it. Same
            buttons either way — a second markup path for mobile is how the two
            drift apart.
          */}
          <div
            role="tablist"
            aria-label="Customer reviews"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="order-1 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:order-2 lg:mx-0 lg:flex-1 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, position) => {
              const selected = position === index;
              return (
                <button
                  key={item._id}
                  ref={(node) => {
                    tabRefs.current[position] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`review-tab-${item._id}`}
                  aria-selected={selected}
                  aria-controls={`review-panel-${item._id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => go(position)}
                  className={cn(
                    "group relative flex shrink-0 items-center gap-3 overflow-hidden rounded-2xl px-3.5 py-2.5 text-left transition-colors duration-300",
                    "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none",
                    "lg:w-full lg:shrink",
                    selected
                      ? "bg-brand-50 ring-1 ring-brand-200"
                      : "ring-1 ring-line hover:bg-mist-50 lg:ring-transparent"
                  )}
                >
                  <Avatar person={item} className="size-9" muted={!selected} />
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block text-sm font-semibold whitespace-nowrap lg:whitespace-normal",
                        selected ? "text-brand-800" : "text-ink"
                      )}
                    >
                      {item.name}
                    </span>
                    <span className="hidden truncate text-xs text-ink-muted lg:block">
                      {item.tourTaken || item.location}
                    </span>
                  </span>

                  {/*
                    The rotation made visible. It is an animation rather than
                    state so it does not re-render the section thirty times a
                    second, `key` restarts it on every change of slide, and
                    --alisha-rotate is where the duration lives so the CSS and
                    ROTATE_MS cannot drift apart.
                  */}
                  {selected && running ? (
                    <span
                      key={index}
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-400 [animation:alisha-spotlight-progress_var(--alisha-rotate)_linear_forwards]"
                      style={{ "--alisha-rotate": `${ROTATE_MS}ms` }}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>

          {/* ------------------------------ Controls ------------------------------ */}
          {count > 1 ? (
            <div className="order-3 mt-4 flex items-center gap-2">
              <ControlButton label="Previous review" onClick={() => go(index - 1, { focus: true })}>
                <ChevronLeft className="size-4" aria-hidden="true" />
              </ControlButton>
              <ControlButton label="Next review" onClick={() => go(index + 1, { focus: true })}>
                <ChevronRight className="size-4" aria-hidden="true" />
              </ControlButton>

              <ControlButton
                label={paused ? "Play reviews" : "Pause reviews"}
                onClick={() => setPaused((value) => !value)}
                // The block pauses on hover, so a mouse user always sees "Play"
                // by the time they reach this button. aria-pressed carries the
                // real state for anyone not hovering.
                pressed={paused}
              >
                {paused ? (
                  <Play className="size-3.5" aria-hidden="true" />
                ) : (
                  <Pause className="size-3.5" aria-hidden="true" />
                )}
              </ControlButton>

              {/* No aria-live: it would announce a new position every 8 seconds
                  to a screen reader that never asked for it. The tablist's
                  aria-selected already carries the change when a user makes it. */}
              <p className="ml-auto text-sm text-ink-muted">
                <span className="font-semibold text-ink">{index + 1}</span> / {count}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/** The reviewer's photograph if there is one, their initial if there is not. */
function Avatar({ person, className, muted = false }) {
  if (person.photo?.url) {
    return (
      <Image
        src={person.photo.url}
        alt={person.photo.alt || person.name}
        width={48}
        height={48}
        className={cn("shrink-0 rounded-full object-cover", className)}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-display font-semibold transition-colors duration-300",
        muted ? "bg-mist-100 text-ink-muted" : "bg-brand-100 text-brand-800",
        className
      )}
    >
      {person.name.charAt(0)}
    </span>
  );
}

function ControlButton({ label, onClick, pressed, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={pressed}
      className="flex size-9 items-center justify-center rounded-full ring-1 ring-line text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none"
    >
      {children}
    </button>
  );
}
