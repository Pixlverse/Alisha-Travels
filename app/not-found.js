import Link from "next/link";

import Button from "@/components/site/Button";
import Logo from "@/components/site/Logo";
import TicketCard from "@/components/site/TicketCard";
import { NAV } from "@/lib/site";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/**
 * The 404 for URLs that match no route at all.
 *
 * Next renders this one from the ROOT layout, not the site layout, so there is
 * no header or footer around it — see not-found.md in the Next docs. That is
 * why the logo and the navigation are part of the page here, while
 * app/(site)/not-found.js, which handles notFound() thrown inside a real
 * section, leans on the site chrome instead. Both render the same ticket.
 */
export default function GlobalNotFound() {
  return (
    <div className="relative isolate flex min-h-full flex-col overflow-hidden bg-brand-900 py-10 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.14),transparent_55%)]"
      />

      <div className="relative z-10 container-page">
        {/* Logo renders its own link to "/" — do not wrap it in another. */}
        <Logo variant="white" className="h-11 w-auto" />
      </div>

      <div className="relative z-10 container-page mt-10 sm:mt-14">
        <TicketCard
          stamp="Did not depart"
          routeFrom="Your request"
          routeTo="This page"
          cause="404 - no page at this address"
          heading="This one has departed without us."
          code={["A", "K", "–", "4", "0", "4"]}
          reference="REF-NOT-FOUND"
          actions={
            <>
              <Button href="/" size="lg">
                Back to the homepage
              </Button>
              <Button href="/contact/" variant="outline" size="lg">
                Talk to a person
              </Button>
            </>
          }
        >
          The page you were looking for is not here. It may have moved during our recent site
          rebuild. Everything below is where it should be.
        </TicketCard>

        <nav
          aria-label="Site sections"
          className="mx-auto mt-10 max-w-4xl border-t border-white/15 pt-8"
        >
          <h2 className="eyebrow text-brand-200">Or jump to</h2>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/20"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
