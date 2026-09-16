"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { X } from "lucide-react";
import Button from "./Button";
import { SITE } from "@/lib/site";

/**
 * Cookie consent, and the analytics it gates.
 *
 * The legacy site loaded Google Tag Manager unconditionally on every page,
 * which is a problem under India's DPDP Act and for any EU traffic. Here GTM is
 * not injected at all until the visitor accepts — the <Script> below simply
 * does not render otherwise, so no request is made and no cookie is set.
 *
 * The container ID is the legacy one (GTM-NF9ST9W5), reused deliberately so
 * historical analytics stay continuous rather than restarting from zero.
 *
 * An alternative worth knowing about: Google Consent Mode v2 loads GTM
 * immediately with consent defaulted to "denied" and updates it on accept.
 * That gives better modelling but does put the container on the page before
 * consent. The brief asks for the stricter behaviour, so that is what this is.
 *
 * The choice is stored in localStorage, which is a functional preference
 * rather than tracking. Declining is genuinely respected and is remembered, so
 * the banner does not reappear on every visit.
 */

const STORAGE_KEY = "alisha:cookie-consent";

export default function CookieConsent() {
  // `null` = not yet read from storage; nothing renders until we know, so the
  // banner never flashes for a visitor who has already answered.
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    // Deferred to the next frame: reading storage and deciding is a post-paint
    // concern, and doing it synchronously on mount would cascade a second
    // render before the first has been committed.
    const frame = requestAnimationFrame(() => {
      let stored = null;
      try {
        stored = window.localStorage.getItem(STORAGE_KEY);
      } catch {
        // Private browsing or blocked storage. Treat as undecided but do not
        // load analytics — failing closed is the right default here.
      }
      setConsent(stored === "granted" || stored === "denied" ? stored : "undecided");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const decide = (value) => {
    setConsent(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* Nothing to do — the choice simply is not remembered next visit. */
    }
  };

  return (
    <>
      {consent === "granted" && SITE.gtmId ? (
        <Script id="gtm-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${SITE.gtmId}');`}
        </Script>
      ) : null}

      {consent === "undecided" ? (
        <div
          role="dialog"
          aria-label="Cookie preferences"
          className="fixed inset-x-3 bottom-20 z-45 sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-sm lg:bottom-5"
        >
          <div className="relative rounded-2xl border border-line bg-white p-5 shadow-[0_24px_60px_-24px_rgba(16,32,42,0.45)]">
            <button
              type="button"
              onClick={() => decide("denied")}
              className="absolute top-3 right-3 rounded-full p-1 text-ink-muted transition-colors hover:bg-mist-100 hover:text-ink"
            >
              <span className="sr-only">Decline and close</span>
              <X className="size-4" aria-hidden="true" />
            </button>

            <h2 className="pr-6 text-lg font-semibold text-ink">
              A word about cookies
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              We would like to use analytics cookies to understand which destinations and packages
              people actually look at, so we can make this site more useful. Nothing loads until you
              say yes, and declining changes nothing about how the site works for you.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Button size="sm" onClick={() => decide("granted")}>
                Accept
              </Button>
              <Button size="sm" variant="outline" onClick={() => decide("denied")}>
                Decline
              </Button>
              <Link
                href="/contact/"
                className="ml-auto text-xs text-ink-muted underline-offset-4 hover:text-brand-700 hover:underline"
              >
                Questions?
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
