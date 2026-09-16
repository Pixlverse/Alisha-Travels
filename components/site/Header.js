"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, Plus, X } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { NAV, PRIMARY_PHONE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * Site header.
 *
 * Deliberately NOT the legacy layout. The old alishatravels.in put a dark
 * utility strip across the top carrying the IATA badge, a phone number, an
 * e-mail address and social icons, with the menu on a second row below it.
 * That two-tier arrangement is the single most recognisable thing about the old
 * site, so this is one row: logo left, navigation centred, actions right, with
 * an underline marking the section you are in. The IATA credential moved to
 * where it actually persuades someone — the hero badge, the About page and the
 * footer — rather than sitting in a strip people have learned to ignore.
 *
 * Two rules from the signed-off navigation specification are load-bearing here
 * and should not be "tidied":
 *
 *   1. Every top-level item is a real, clickable page — not just a dropdown
 *      trigger. Each one is a <Link>; a separate adjacent button opens the
 *      panel. Clicking "Destinations" navigates; clicking the chevron opens.
 *   2. Destinations are ordered by demand, not alphabetically. The order comes
 *      from NAV in lib/site.js and must never be sorted.
 *
 * The Call control sits at the right-hand end of the bar, as specified.
 */
export default function Header() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  const closeAll = useCallback(() => {
    clearTimeout(closeTimer.current);
    setOpenIndex(null);
  }, []);

  /**
   * Any navigation closes every menu — otherwise the panel stays open over the
   * page you just moved to, and browser back/forward leaves the mobile drawer
   * covering the screen.
   *
   * React's "adjust state during render" pattern rather than an effect: an
   * effect would render the new page with the old menu open and then re-render
   * to close it. Doing it here means the first commit is already correct.
   */
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (pathname !== renderedPath) {
    setRenderedPath(pathname);
    setOpenIndex(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    const frame = requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      closeAll();
      setMobileOpen(false);
    };
    const onPointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) closeAll();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [closeAll]);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  // A short delay on mouse-out stops the panel snapping shut while the pointer
  // crosses the gap between the trigger and the panel.
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIndex(null), 140);
  };
  const cancelClose = () => clearTimeout(closeTimer.current);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-200",
        scrolled
          ? "border-b border-line shadow-[0_2px_24px_-14px_rgba(16,32,42,0.45)]"
          : "border-b border-line/60"
      )}
    >
      <div className="container-page flex h-18 items-center gap-6 xl:h-[5.25rem]">
        {/* Left — logo only. The tagline used to sit here behind a divider; it
            crowded the nav at every width and the footer already carries it. */}
        <Logo eager className="h-11 w-auto shrink-0 xl:h-14" />

        {/* Centre — primary navigation */}
        <nav
          ref={navRef}
          aria-label="Primary"
          className="mx-auto hidden xl:flex xl:items-center"
          onMouseLeave={scheduleClose}
        >
          <ul className="flex items-center gap-1.5">
            {NAV.map((item, index) => {
              const hasPanel = Boolean(item.columns);
              const open = openIndex === index;
              const active = isActive(item.href);
              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenIndex(hasPanel ? index : null);
                  }}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative px-2.5 py-2 text-[0.9375rem] font-medium whitespace-nowrap transition-colors",
                        "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none",
                        active ? "text-ink" : "text-ink-soft hover:text-brand-600"
                      )}
                    >
                      {item.label}
                      {/* Section indicator — the underline marks where you are,
                          which the legacy nav never did. */}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute -bottom-0.5 left-2.5 h-[2.5px] rounded-full bg-brand-500 transition-all duration-200",
                          active ? "right-2.5 opacity-100" : "right-[calc(100%-0.625rem)] opacity-0"
                        )}
                      />
                    </Link>
                    {hasPanel ? (
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={`nav-panel-${index}`}
                        aria-label={`${open ? "Hide" : "Show"} ${item.label} menu`}
                        onClick={() => setOpenIndex(open ? null : index)}
                        className="-ml-1 inline-flex size-7 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-brand-600 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none"
                      >
                        <ChevronDown
                          className={cn(
                            "size-3.5 transition-transform duration-200",
                            open && "rotate-180"
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    ) : null}
                  </div>

                  {hasPanel ? (
                    <MegaPanel
                      id={`nav-panel-${index}`}
                      item={item}
                      open={open}
                      wide={item.columns.length > 1}
                      onMouseEnter={cancelClose}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right — call, then the primary action */}
        <div className="ml-auto flex shrink-0 items-center gap-3 xl:ml-0">
          <a
            href={`tel:${PRIMARY_PHONE.tel}`}
            className="hidden items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-ink transition-colors hover:border-brand-300 hover:text-brand-700 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none md:inline-flex"
          >
            <Phone className="size-4 text-brand-500" aria-hidden="true" />
            {PRIMARY_PHONE.display}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-mist-100 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none xl:hidden"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} isActive={isActive} />
    </header>
  );
}

function MegaPanel({ id, item, open, wide, onMouseEnter }) {
  return (
    <div
      id={id}
      onMouseEnter={onMouseEnter}
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-150",
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
      )}
      // Hidden from assistive tech and from tab order while collapsed. React 19
      // treats `inert` as a boolean — passing "" coerces to false and is dropped.
      inert={!open}
    >
      <div
        className={cn(
          "rounded-3xl border border-line bg-white p-6 shadow-[0_28px_70px_-30px_rgba(16,32,42,0.4)]",
          wide ? "grid w-[44rem] grid-cols-[1.4fr_1fr] gap-8" : "w-[17rem]"
        )}
      >
        {item.columns.map((column) => (
          <div key={column.label}>
            <Link href={column.href} className="eyebrow hover:text-brand-800">
              {column.label}
            </Link>
            <ul
              className={cn(
                "mt-3",
                column.items.length > 8 ? "grid grid-cols-2 gap-x-5 gap-y-0.5" : "space-y-0.5"
              )}
            >
              {column.items.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-2.5 py-2 text-sm text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-800"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileNav({ open, onClose, isActive }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div
      id="mobile-nav"
      className={cn(
        "fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto bg-white xl:hidden",
        "transition-[opacity,transform] duration-200",
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible pointer-events-none -translate-y-2 opacity-0"
      )}
      inert={!open}
    >
      <div className="container-page flex min-h-full flex-col gap-6 py-6">
        <nav aria-label="Mobile">
          <ul className="divide-y divide-line">
            {NAV.map((item, index) => {
              const hasPanel = Boolean(item.columns);
              const isOpen = expanded === index;
              return (
                <li key={item.href} className="py-1">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex-1 py-3.5 text-lg font-semibold",
                        isActive(item.href) ? "text-brand-700" : "text-ink"
                      )}
                    >
                      {item.label}
                    </Link>
                    {hasPanel ? (
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Hide" : "Show"} ${item.label} sub-menu`}
                        className="inline-flex size-9 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:bg-mist-100"
                      >
                        {isOpen ? (
                          <X className="size-4" aria-hidden="true" />
                        ) : (
                          <Plus className="size-4" aria-hidden="true" />
                        )}
                      </button>
                    ) : null}
                  </div>

                  {hasPanel && isOpen ? (
                    <div className="space-y-4 pb-4">
                      {item.columns.map((column) => (
                        <div key={column.label}>
                          <Link href={column.href} onClick={onClose} className="eyebrow">
                            {column.label}
                          </Link>
                          <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
                            {column.items.map((link) => (
                              <li key={`${link.label}-${link.href}`}>
                                <Link
                                  href={link.href}
                                  onClick={onClose}
                                  className="block py-1.5 text-sm text-ink-soft"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto grid gap-3 pb-4">
          <Button href="/contact/" size="lg">
            Plan my trip
          </Button>
          <Button href={`tel:${PRIMARY_PHONE.tel}`} variant="outline" size="lg">
            <Phone className="size-4" aria-hidden="true" />
            {PRIMARY_PHONE.display}
          </Button>
          <Button href={whatsappLink()} variant="whatsapp" size="lg">
            <WhatsAppIcon className="size-5" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
