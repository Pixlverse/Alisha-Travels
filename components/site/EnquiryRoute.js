import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The shell shared by the three "routes" in EnquiryCta — enquire, WhatsApp,
 * call — so a card that opens a dialog, a card that leaves for WhatsApp and a
 * card that dials look and behave identically.
 *
 * NO "use client" here on purpose. Two of the three routes are plain anchors
 * rendered by a Server Component, and the third is a button inside a Client
 * Component; a module with no hooks and no server-only imports can be used
 * from both, which is what keeps the three from drifting apart.
 */

/** `full` is for the <button>, which does not fill its list item the way an
    anchor does. */
export function routeClass(dark, full = false) {
  return cn(
    "group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
    "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
    dark
      ? "bg-white/10 ring-1 ring-white/15 hover:bg-white/16 hover:ring-white/30 focus-visible:ring-white focus-visible:ring-offset-brand-800"
      : "bg-white ring-1 ring-brand-100 hover:ring-brand-300 hover:shadow-[0_22px_44px_-32px_rgba(10,68,87,0.45)] focus-visible:ring-brand-400",
    full && "cursor-pointer"
  );
}

export function RouteBody({ dark, icon, iconClass, label, detail }) {
  return (
    <>
      <span
        aria-hidden="true"
        className={cn("flex size-11 shrink-0 items-center justify-center rounded-xl", iconClass)}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className={cn("block font-semibold", dark ? "text-white" : "text-ink")}>{label}</span>
        {/* /90, not /75: over these cards' composited background /75 measures
            3.94:1 and fails AA for 13-14px copy. */}
        <span
          className={cn(
            "mt-0.5 block text-[0.8125rem] leading-snug",
            dark ? "text-brand-100/90" : "text-ink-muted"
          )}
        >
          {detail}
        </span>
      </span>
      <ArrowRight
        aria-hidden="true"
        className={cn(
          "ml-auto size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1",
          dark ? "text-brand-200" : "text-brand-500"
        )}
      />
    </>
  );
}

/** The enquiry route's glyph: the same paper plane as the hero badge, so the
    three icons are WhatsApp, a phone and the brand's own mark. */
export function PlaneGlyph({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" fill="currentColor" />
    </svg>
  );
}
