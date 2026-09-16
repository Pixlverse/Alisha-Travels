import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Breadcrumb trail.
 *
 * Present on every page below the top level, per the SEO requirements. The
 * matching BreadcrumbList structured data is emitted separately in phase 12 —
 * this component only draws the visible trail, so the two never disagree about
 * which one is authoritative.
 *
 * `items` is [{ label, href }]; the final entry is rendered as plain text
 * because you cannot navigate to the page you are already on.
 */
export default function Breadcrumbs({ items = [], className, invert = false }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className={cn(
              "underline-offset-4 hover:underline",
              invert ? "text-white/70 hover:text-white" : "text-ink-muted hover:text-brand-700"
            )}
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              <ChevronRight
                className={cn("size-3.5 shrink-0", invert ? "text-white/40" : "text-mist-300")}
                aria-hidden="true"
              />
              {last || !item.href ? (
                <span
                  aria-current={last ? "page" : undefined}
                  className={cn("font-medium", invert ? "text-white" : "text-ink")}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "underline-offset-4 hover:underline",
                    invert ? "text-white/70 hover:text-white" : "text-ink-muted hover:text-brand-700"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
