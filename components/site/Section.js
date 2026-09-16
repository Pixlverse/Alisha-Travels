import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Section rhythm for the public site. Every band on every page goes through
 * these two components so vertical spacing and heading hierarchy stay
 * consistent without being restated in twenty files.
 */

export function Section({ className, tone = "default", children, ...props }) {
  const tones = {
    default: "bg-white",
    mist: "bg-mist-50",
    tint: "bg-brand-50/60",
    deep: "bg-brand-800 text-white",
  };
  return (
    // Tight on purpose, and the numbers are why. This started at
    // py-16 sm:py-20 lg:py-24 — 96px top and bottom at lg, so 192px between
    // adjacent sections and 1152px of pure padding on the homepage alone,
    // about 18% of its height. At 32px it is 64px between sections, which is
    // where the client's reference sites sit: title, content, next title. If a
    // section genuinely needs air it can still pass its own py-* via
    // className.
    <section className={cn("py-6 sm:py-7 lg:py-8", tones[tone], className)} {...props}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  link,
  linkLabel = "View all",
  invert = false,
  className,
}) {
  const centred = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        centred && "sm:flex-col sm:items-center sm:text-center",
        className
      )}
    >
      <div className={cn("max-w-2xl", centred && "mx-auto text-center")}>
        {eyebrow ? (
          <p className={cn("eyebrow", invert && "text-brand-200")}>{eyebrow}</p>
        ) : null}
        <h2
          className={cn(
            // The eyebrow is a 15px italic now, not an 11px cap line, so the
            // heading needs a gap under it rather than sitting flush.
            eyebrow && "mt-2",
            // Deliberately modest. These are listing-section labels, not page
            // titles: the client's reference sites set them around 24-28px and
            // give them no eyebrow and no lead paragraph, on the grounds that
            // a stack of eyebrow + 44px heading + two-line lead on every
            // section reads as filler by the third one.
            "text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] sm:text-[1.75rem]",
            invert ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
        {lead ? (
          <p
            className={cn(
              "mt-4 text-base leading-relaxed sm:text-lg",
              invert ? "text-brand-100/85" : "text-ink-soft"
            )}
          >
            {lead}
          </p>
        ) : null}
      </div>

      {link ? (
        <Link
          href={link}
          className={cn(
            "group inline-flex shrink-0 items-center gap-2 font-sans text-sm font-semibold",
            "underline-offset-4 hover:underline",
            invert ? "text-brand-100" : "text-brand-700"
          )}
        >
          {linkLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}

export default Section;
