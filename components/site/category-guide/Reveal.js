"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Fades a band up as it scrolls into view, once. Content is visible by
 * default and only hidden after hydration has confirmed the observer exists
 * and the reader has not asked for reduced motion, so it can never leave a
 * section blank for a crawler, a print or a browser without JavaScript.
 */
export default function Reveal({ children, className }) {
  const ref = useRef(null);
  const [state, setState] = useState("static");

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { top } = node.getBoundingClientRect();
    if (top < window.innerHeight) return; // already on screen: leave it alone

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        state === "hidden" && "translate-y-6 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
