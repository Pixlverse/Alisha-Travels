import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageLoader from "@/components/site/PageLoader";
import StickyActionBar from "@/components/site/StickyActionBar";
import CookieConsent from "@/components/site/CookieConsent";
import FloatingCta from "@/components/site/FloatingCta";
import JsonLd from "@/components/site/JsonLd";
import { travelAgencySchema, websiteSchema } from "@/lib/seo/schema";

/**
 * Public site shell.
 *
 * Everything under app/(site)/ gets this chrome. /admin/ deliberately sits
 * outside the group so the dashboard has no header, no footer, no loader and
 * no sticky bar.
 *
 * PageLoader lives here rather than in the root layout on purpose: a layout
 * does not re-mount on client-side navigation, which is exactly the behaviour
 * the loader needs. See the long comment in components/site/PageLoader.js.
 */
export default function SiteLayout({ children }) {
  return (
    <>
      {/*
        The organisation and website nodes are declared once here, for the whole
        public site. Every other page references them by @id rather than
        repeating the business details on each one.
      */}
      <JsonLd schema={[travelAgencySchema(), websiteSchema()]} />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-brand-800 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <PageLoader />
      <Header />

      {/*
        overflow-x-clip, not hidden: the horizontal card rails in ScrollRow
        leak their scrollable width to the document, so the whole page could be
        dragged sideways — 1355px of it at 390px wide. Clipping here contains
        that. `clip` rather than `hidden` because `hidden` would make this a
        scroll container and break `position: sticky` inside it (the contact
        page's aside), whereas `clip` does not.
      */}
      <main id="main-content" className="flex-1 overflow-x-clip">
        {children}
      </main>

      <Footer />

      {/* Clearance so the fixed mobile action bar never covers the end of the
          footer. Matches the footer's background so it is invisible. */}
      <div className="has-action-bar bg-brand-900 lg:hidden" aria-hidden="true" />

      <StickyActionBar />
      <FloatingCta />
      <CookieConsent />
    </>
  );
}
