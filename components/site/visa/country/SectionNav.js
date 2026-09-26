"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * The sticky jump bar on a country visa page. Highlights the section in view
 * as you scroll, so the page always says where you are and how much is left,
 * and one tap takes you straight to the document list, which is what most
 * visitors came for.
 */
export default function SectionNav({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const nodes = items.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!nodes.length || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-18 z-30 border-y border-line bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 xl:top-[5.25rem]"
    >
      <ul className="container-page flex gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
        {items.map((item, index) => (
          <li key={item.id} className="shrink-0">
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                active === item.id ? "bg-brand-700 text-white" : "text-ink-soft hover:bg-brand-50 hover:text-ink"
              )}
            >
              <span
                className={cn(
                  "font-mono text-[0.6875rem] tabular-nums",
                  active === item.id ? "text-brand-100" : "text-brand-500"
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
