import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The public site's button.
 *
 * Deliberately NOT components/ui/button.jsx — that one is shadcn and belongs to
 * the admin dashboard. This is the bespoke one: fully rounded, slightly taller,
 * with the brand's own hover behaviour. Keeping the two separate is what stops
 * the public site drifting into looking like a component-library demo.
 *
 * Renders as <Link> for internal hrefs, <a> for external ones (which get
 * rel="noopener noreferrer" automatically), and <button> with no href.
 */

/*
 * A note on the primary fill, because it is the one place the palette does not
 * do the obvious thing.
 *
 * --brand-500 (#0a9ddb) is the client's primary colour, but white text on it
 * measures 3.06:1 — WCAG AA wants 4.5:1 for anything under 18.66px bold, and
 * no button on this site is that large. brand-600 does not rescue it either
 * (4.40). brand-700 is the first step that clears the bar, at 5.99:1.
 *
 * So brand-500 keeps every job where it is not carrying text — the nav's
 * active underline, icon tints, star ratings, focus rings, outline borders —
 * and white-on-blue surfaces step down to brand-700. Measured in the phase 14
 * accessibility pass; see README > Colour.
 */
const VARIANTS = {
  primary:
    "bg-brand-700 text-white shadow-sm shadow-brand-700/25 hover:bg-brand-800 active:bg-brand-900",
  deep: "bg-brand-800 text-white hover:bg-brand-900",
  outline:
    "border border-brand-500/40 bg-white/80 text-brand-700 hover:border-brand-500 hover:bg-brand-50",
  ghost: "text-brand-700 hover:bg-brand-50",
  white: "bg-white text-brand-800 shadow-sm hover:bg-mist-100",
  // Dark copy on the real WhatsApp green, not white — see the token note in
  // globals.css. White on #25D366 is 1.98:1.
  whatsapp: "bg-whatsapp text-whatsapp-ink hover:bg-whatsapp-hover",
};

const SIZES = {
  sm: "h-9 px-4 text-[0.8125rem] gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-13 px-8 text-base gap-2.5",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-sans font-semibold whitespace-nowrap",
    "transition-colors duration-150 outline-none",
    "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    VARIANTS[variant] || VARIANTS.primary,
    SIZES[size] || SIZES.md,
    className
  );

  if (!href) {
    return (
      <button type="button" className={classes} {...props}>
        {children}
      </button>
    );
  }

  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);

  if (isExternal) {
    const rel = href.startsWith("http") ? "noopener noreferrer" : undefined;
    const target = href.startsWith("http") ? "_blank" : undefined;
    return (
      <a href={href} className={classes} rel={rel} target={target} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

export default Button;
