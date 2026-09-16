"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

/**
 * ============================================================================
 *  FULL-SCREEN LOADER — SHOWS ON *EVERY* FULL PAGE LOAD. THIS IS INTENTIONAL.
 * ============================================================================
 *
 * Future maintainer: please read this before "fixing" it.
 *
 * The client asked for this loader on every full document load — first visit,
 * return visit, and a hard refresh on any route, not just the homepage. The
 * obvious "improvement" is to show it once and remember the visit in
 * sessionStorage. That is explicitly NOT what was asked for, so there is no
 * storage check here and there should not be one.
 *
 * What it does NOT do is appear on client-side navigation. This component is
 * mounted by app/(site)/layout.js, and a layout does not re-mount when the
 * router moves between pages inside it. So a soft navigation is untouched and
 * only a real document load brings the loader back — which is exactly the
 * distinction the brief draws.
 *
 * The mark: the client's "travel loading" animation — a ring of city landmarks
 * that draws itself into a complete globe while a dot travels around it. It is
 * doing what a spinner cannot, which is to say how far along it is: the globe is
 * unfinished for most of the wait and whole at the end. See
 * `public/animations/travel-loader.svg` and the note in globals.css for what was
 * changed in the supplied file and why.
 *
 * Timing, and why it is built this way:
 *
 *   - It is server-rendered visible, so it is painted with the very first
 *     frame. Waiting for hydration to show it would produce a flash of the
 *     page followed by a loader, which is worse than no loader at all.
 *   - MIN_MS and MAX_MS are both 3000, so this is a fixed three-second hold on
 *     the client's instruction. It will not leave early on a fast connection,
 *     and the cap still clears it if the page is slower than that.
 *   - There is a CSS-only fallback (see `.page-loader` in app/globals.css): the
 *     overlay carries a keyframe animation that fades it out at 3000ms with no
 *     JavaScript involved at all. If hydration fails or JS is blocked, the site
 *     is still reachable.
 *
 * Core Web Vitals, stated plainly because this one has a cost: the overlay is a
 * fixed-position layer over content that has already been streamed and painted
 * underneath, so it is not a render blocker and it loads no libraries, and the
 * animation is declarative SMIL rather than a rAF loop competing with hydration
 * (total blocking time measures 10ms).
 *
 * The artwork is a 2,491-path vector illustration, though: ~562KB, ~80KB over
 * the wire once the edge compresses it, even after the trimming described in
 * globals.css. It lives in an iframe, which has a useful side effect beyond the
 * one it was chosen for — content inside a nested browsing context is not a
 * Largest Contentful Paint candidate for this page. Back when the artwork was a
 * server-rendered <img> it was the LCP outright: the overlay covers the
 * viewport, so nothing beneath it can be a larger paint, and a
 * PerformanceObserver on the built page reported that file as the one and only
 * candidate — about two Lighthouse points spent waiting on half a megabyte.
 */

// Client asked for a three-second loader. MIN and MAX are deliberately equal,
// which makes it a fixed hold rather than a range: it never leaves early on a
// fast connection, and the cap still fires if the page is slower than 3s, so
// the overlay is on screen for 3s either way.
//
// The cost is worth stating: the body scroll lock lasts the full 3s, so nobody
// can scroll or interact until it clears. That is the trade a fixed hold makes.
// If it ever needs to feel faster, drop MIN_MS and leave MAX_MS — that restores
// the original "as soon as ready, capped at" behaviour.
//
// Two things are timed to this number and must move with it:
//   - the CSS fallback delay in app/globals.css (.page-loader). If it is
//     shorter, the overlay fades while JavaScript still thinks it is holding.
//   - the SVG's own cycle. travel-loader.svg is the client's asset retimed from
//     6.033s so one full pass lands exactly on 3000ms; a different hold needs a
//     different retime, which the script in globals.css's comment reproduces.
const MIN_MS = 3000;
const MAX_MS = 3000;

// Someone who has asked for reduced motion gets no artwork, so there is nothing
// for them to wait three seconds through — the CSS drops the animated SVG for a
// still plane and clears the overlay at 600ms.
//
// This constant exists because the CSS doing that ALONE was a bug worth
// spelling out: the overlay faded on the media query's schedule while this
// component was still counting to 3000, and the body scroll lock is released by
// this component. The result was 2.3 seconds of a visible, apparently ready page
// that could not be scrolled. Both clocks have to agree, so the hold is read
// from the same media query the stylesheet uses.
//
// Keep this equal to the delay in the @media (prefers-reduced-motion) block of
// app/globals.css.
const REDUCED_MS = 600;

export default function PageLoader() {
  const [hiding, setHiding] = useState(false);
  const artSlot = useRef(null);

  useEffect(() => {
    let minTimer;
    let maxTimer;
    let done = false;

    const hide = () => {
      if (done) return;
      done = true;
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener("load", onReady);
      setHiding(true);
      // Restore scrolling the moment the fade begins rather than at the end of
      // it, so a visitor who reaches for the scroll wheel is never blocked.
      document.body.style.removeProperty("overflow");
    };

    // performance.now() is already measured from navigation start, which is
    // also the moment this overlay was first painted (it is server-rendered
    // visible). So it *is* the elapsed lifetime of the loader — no separate
    // start timestamp is needed, and none may be taken during render anyway.
    const elapsed = () => performance.now();

    // Matched at effect time rather than through a listener: this overlay lives
    // for a second or two and is gone, so there is no realistic window in which
    // someone flips the OS setting mid-loader and needs it to react.
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const minMs = reduced ? REDUCED_MS : MIN_MS;
    const maxMs = reduced ? REDUCED_MS : MAX_MS;

    const onReady = () => {
      const remaining = minMs - elapsed();
      if (remaining <= 0) hide();
      else minTimer = setTimeout(hide, remaining);
    };

    // Attach the artwork now rather than shipping it in the HTML. It is an
    // iframe, and the reasons for both of those choices are in the markup
    // below — read that before changing this.
    //
    // Creating it here costs nothing visually: the artwork's own first keyframe
    // holds at scale(0,0) until 27.6% of the cycle, which is 828ms of the
    // 3000ms hold, so hydration lands inside the empty opening. The slot is a
    // fixed square in CSS, so nothing moves when the frame arrives either.
    //
    // Done with the DOM rather than with state deliberately: state would
    // re-render the whole overlay for one element, and React's own lint rule
    // rejects a setState in an effect body. The slot is rendered empty and
    // React never reconciles its children, so appending into it is safe.
    const art = document.createElement("iframe");
    art.className = "page-loader__art";
    art.src = "/animations/travel-loader.svg";
    art.title = "";
    art.tabIndex = -1;
    art.setAttribute("aria-hidden", "true");
    artSlot.current?.append(art);

    // Hold the scroll position still while the overlay is up; a page that
    // scrolls behind a loader looks broken.
    document.body.style.overflow = "hidden";

    if (document.readyState === "complete") onReady();
    else window.addEventListener("load", onReady);

    maxTimer = setTimeout(hide, maxMs);

    return () => {
      art.remove();
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener("load", onReady);
      document.body.style.removeProperty("overflow");
    };
  }, []);

  return (
    <div
      className="page-loader"
      data-hiding={hiding ? "true" : "false"}
      // The loader is decorative chrome, not content. Screen readers should
      // announce the page itself, which is already in the DOM behind this.
      aria-hidden="true"
    >
      <div className="page-loader__stage">
        {/*
          The client's travel-loading artwork — see
          public/animations/travel-loader.svg.

          Two decisions here, both measured, both counter-intuitive. Please read
          this before simplifying either of them.

          (1) IT IS AN IFRAME, NOT AN <img>. The brief is that the animation must
          begin at its first frame on every page load, and an <img> cannot do
          that. Chrome keeps an SVG image's document — and with it the SMIL clock
          — alive in its memory cache and hands the same *running* document to
          the next page that asks for the same URL. Measured from the artwork's
          own load event: 1,062 ink pixels at +80ms on the first load (frame
          zero, as intended) against ~3,000 on the second, third and fourth. The
          globe carried on from wherever the last visitor left it.

          Giving the src a unique #fragment per load is the usual remedy. It does
          not work: the numbers above ARE the fragmented version, because Chrome
          keys the image document by the URL without its fragment. A unique
          ?query does work, but only by making the URL genuinely new, which
          defeats caching and re-downloads the artwork on every page load.

          A nested browsing context gets a fresh document every time the element
          is created — documents are never reused across navigations, only bytes
          are — so the animation starts at frame zero while the file still comes
          from the HTTP cache. Verified over five consecutive loads: ink at
          2800ms was 5269px on four of them and 5123px on the cold first one,
          where the download was still arriving.

          (2) IT IS ATTACHED BY THE EFFECT ABOVE, NOT SERVER-RENDERED. Chrome
          holds the parent's first paint until a same-origin child document has
          committed, and this child is 2,491 paths and 82 animations. With the
          iframe in the initial HTML, First Contentful Paint went 1.4s -> 2.1s
          and Total Blocking Time 10ms -> ~100ms. Attaching it a beat later keeps
          the frame-zero guarantee and gives the paint back.

          It is inert by construction: aria-hidden so it is not announced,
          tabIndex -1 so it cannot be focused or tabbed into, and
          pointer-events: none in the stylesheet so it cannot swallow a click.
        */}
        <div ref={artSlot} className="page-loader__art-slot" aria-hidden="true" />

        {/*
          With scripting off the effect never runs, so the artwork is rendered
          the ordinary way. <noscript> is inert when JS is enabled, so this
          costs nothing and never creates a second frame. It pays the first-paint
          cost described above, which is the right trade on a path that has no
          JavaScript to do anything better.
        */}
        <noscript>
          <iframe
            className="page-loader__art"
            src="/animations/travel-loader.svg"
            aria-hidden="true"
            tabIndex={-1}
            title=""
          />
        </noscript>

        {/*
          The wordmark and the tagline both sit INSIDE the ring of landmarks,
          which is why they are children of the stage rather than siblings of it.
          The artwork leaves a clear circle in the middle and this group is
          centred in it — the position is measured, not guessed; see the note in
          globals.css.

          The logo is unlinked. The loader is aria-hidden chrome, so a second
          link to the homepage in it would be dead weight; `href={null}` returns
          the bare image. It is `eager` because a lazy logo on a screen that only
          lives for three seconds would arrive halfway through it.
        */}
        <div className="page-loader__inner">
          <Logo variant="white" href={null} eager className="page-loader__mark" />

          {/*
            The tagline, set word by word so the line arrives rather than
            simply appearing. Splitting on spaces keeps each word whole, which
            is the right unit here: per-letter staggering on a phrase this short
            reads as a gimmick, and it would break if the tagline in lib/site.js
            were ever changed to something longer.

            The stagger is applied from a custom property rather than from
            inline transition delays so the whole effect stays in the stylesheet
            next to the keyframes it belongs with.
          */}
          <p className="page-loader__quote">
            {SITE.tagline.split(" ").map((word, i) => (
              <span key={`${word}-${i}`} style={{ "--i": i }}>
                {word}
              </span>
            ))}
          </p>
        </div>

        {/*
          Reduced-motion stand-in, and here it is not merely a courtesy: the
          artwork's first keyframe is scale(0,0) and every element is animated
          in, so with SMIL suppressed there would be nothing on screen at all.
          A still paper plane — the mark already in the logo — stands in.
        */}
        <svg
          className="page-loader__still"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M22 2 15 22l-4-9-9-4 20-7Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
