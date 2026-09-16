import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The floating "Plan my trip" action, bottom-right.
 *
 * Moved out of the header on client request. In the header it was one of eight
 * things competing for the same row and it was the first thing to wrap to two
 * lines when the nav ran out of space; down here it is unmissable, always
 * reachable without scrolling back up, and it gives the nav its width back.
 *
 * Shown from `lg` only. Below that StickyActionBar already occupies the bottom
 * of the screen with Call / WhatsApp / Enquire, and stacking a second floating
 * control on a phone would cover content and duplicate the same destination.
 *
 * CookieConsent was moved to the bottom-LEFT on desktop so the two never
 * overlap.
 */
export default function FloatingCta() {
  return (
    <Link
      href="/contact/"
      className="group fixed right-6 bottom-6 z-40 hidden items-center gap-2.5 rounded-full bg-brand-700 py-4 pr-5 pl-5 text-sm font-semibold whitespace-nowrap text-white shadow-[0_18px_40px_-12px_rgba(0,92,117,0.65)] transition-colors hover:bg-brand-800 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none lg:inline-flex"
    >
      {/* The site's own paper plane, not a lucide icon — the same path as the
          hero badge and the two contrails, so the button carries the mark the
          rest of the page already uses. It lifts and tips slightly on hover,
          which is also what pulls the eye to the arrow on the other side. */}
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
        <svg
          viewBox="0 0 24 24"
          className="size-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-px group-hover:translate-x-px motion-reduce:transition-none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M22 2 15 22l-4-9-9-4 20-7Z" fill="currentColor" />
        </svg>
      </span>
      Plan my trip
      <ArrowRight
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}
