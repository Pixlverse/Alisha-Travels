import Link from "next/link";
import Button from "@/components/site/Button";
import TicketCard from "@/components/site/TicketCard";
import { NAV } from "@/lib/site";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/**
 * 404, as a boarding pass that did not depart.
 *
 * The copy is the same as the plain version it replaces — the page has moved,
 * here is the way back, here is the rest of the site. What changed is that a
 * travel agency's dead end now looks like something a travel agency would
 * hand you.
 */
export default function NotFound() {
  return (
    <div className="relative isolate overflow-hidden bg-brand-900 py-16 sm:py-24">
      {/* The same soft wash the dark bands elsewhere use, so this reads as part
          of the site rather than a system page from somewhere else. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.14),transparent_55%)]"
      />
      {/* Fades the wash back to the flat --brand-900 the footer uses, so
          the band and the footer read as one surface. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-brand-900"
      />

      <div className="relative z-10 container-page">
        <TicketCard
          stamp="Did not depart"
          routeFrom="Your request"
          routeTo="This page"
          cause="404 — no page at this address"
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
