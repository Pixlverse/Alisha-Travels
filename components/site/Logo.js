import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * The brand mark already contains a paper aeroplane, which is why the loader
 * animation (components/site/PageLoader.js) uses the same motif — it reads as
 * the logo taking off rather than as unrelated decoration.
 *
 * Two files ship: the full-colour mark for light surfaces and an all-white
 * version for the deep teal footer.
 */
export default function Logo({ variant = "colour", className = "h-10 w-auto", href = "/", eager = false }) {
  const src =
    variant === "white" ? "/images/alisha-white.png" : "/images/alisha-official-logo.png";
  const dimensions =
    variant === "white" ? { width: 3842, height: 2099 } : { width: 2542, height: 1374 };

  const image = (
    <Image
      src={src}
      alt={`${SITE.name} — ${SITE.tagline}`}
      {...dimensions}
      className={className}
      sizes="240px"
      // Eager in the header so the mark never pops in late, lazy in the
      // footer. Deliberately no `preload` and no fetchPriority="high": at
      // ~5KB served against sizes="240px" it is not the LCP on any page and
      // must not be hinted ahead of the hero image. (Next still emits a
      // rel=preload link for the eager copy — measured, not assumed — which
      // is fine at this weight.)
      loading={eager ? "eager" : "lazy"}
    />
  );

  if (!href) return image;

  return (
    <Link href={href} className="inline-flex shrink-0 items-center" aria-label={`${SITE.name}, home`}>
      {image}
    </Link>
  );
}
