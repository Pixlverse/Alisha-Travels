import Link from "next/link";
import { ArrowRight, CalendarDays, Check } from "lucide-react";

import EnquiryCta from "@/components/site/EnquiryCta";
import JsonLd from "@/components/site/JsonLd";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import ServiceIcon from "@/components/site/ServiceIcon";
import { getServices } from "@/lib/data/content";

import { breadcrumbSchema } from "@/lib/seo/schema";

export const revalidate = 600;

export const metadata = {
  title: "Our Services — Tickets, Hotels, Visas, Attestation & Tours",
  description:
    "Everything Alisha Tours & Travels handles in-house: IATA air ticketing, hotel booking, travel insurance, customised tours, MICE and corporate travel, educational and adventure tours, and certificate attestation.",
  alternates: { canonical: "/services/" },
};

/**
 * The services index.
 *
 * Nine cards, eight pages. The navigation specification lists nine Services
 * entries, but 4.8 "Fixed Departure Tours" points at /fixed-departures/ rather
 * than a page of its own — so eight Service documents render from the database
 * and the ninth card is a hand-written link to the departures calendar. The
 * menu and this page both show nine items, and no dead
 * /services/fixed-departure-tours/ page is created.
 *
 * On the legacy site each of these was a heading, a paragraph and a `tel:` link
 * with empty anchor text — an invisible, unclickable, screen-reader-hostile
 * link, with unencoded spaces in the phone number. Every card here is a real
 * link with visible text.
 */
export default async function ServicesPage() {
  const services = await getServices();

  /*
    The split was "has long-form content" while only three services had it.
    All eight do now, so the rule is the client's own ranking instead: the
    three they order first — which is demand order, the same sequence the menu
    runs in — lead the page, and the rest follow as an index.

    Still no list of slugs in code: reorder the services in /admin/ and this
    page reorders with them.
  */
  const ranked = [...services].sort((a, b) => (a.order ?? 100) - (b.order ?? 100));
  const inDetail = ranked.slice(0, 3).filter((service) => service.blocks?.length);
  const rest = ranked.filter((service) => !inDetail.includes(service));

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ label: "Services" }])} />

      <PageHeader
        eyebrow="What we do"
        title="A single trip never needs a second agency."
        lead="Tickets, hotels, insurance, attestation and the tour itself — all handled in-house, by the same people, so nothing falls between two suppliers who each think the other has it."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/*
        REDESIGNED from a nine-card grid.

        Nine identical cards — icon chip, heading, three lines, "Read more" —
        gave the page no shape at all: the eye had nothing to land on, and a
        visitor who came for one thing had to read all nine to find it. Worse,
        the grid said all nine were equal, which they are not. Three of them
        now have pages the client has written in full, with a process, a
        situations grid and a costed argument behind them; the rest are a
        paragraph and a bullet list.

        So the page is in two registers now.

        ONE COMPOSITE PANEL for the three the client ranks first — three
        columns inside a single bordered object, divided by hairlines rather
        than floating as three separate cards, each showing what its page
        actually promises. Which three is DATA, not a hardcoded list: it reads
        the same `order` the menu and the index are sorted by, so reordering
        the services in the dashboard reorders this.

        A HAIRLINE INDEX for the rest — numbered rows, name and one line, no
        card chrome. It reads as a directory, scans in one pass, and takes a
        third of the height the cards did.

        Fixed departures closes the page as its own strip. It is the ninth item
        in the menu but it is not a service page — it points at the calendar —
        and it now looks like the different thing it is instead of being a
        card with a different border colour.
      */}
      <Section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-brand-50/70 to-white py-8 sm:py-10">
        {/* Two soft washes behind the content. The page is nine short entries
            on a white ground and read as blank without them; this is the same
            backdrop the homepage services band uses, so the two bands feel
            like the same site. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <span className="absolute -top-32 -right-24 size-[30rem] rounded-full bg-[radial-gradient(circle,var(--brand-100)_0%,transparent_65%)] opacity-80" />
          <span className="absolute -bottom-40 -left-32 size-[26rem] rounded-full bg-[radial-gradient(circle,var(--brand-100)_0%,transparent_65%)] opacity-50" />
        </div>

        <div className="relative z-10 container-page">
          {inDetail.length ? (
            <>
              <h2 className="eyebrow">Most asked for</h2>

              <div className="relative mt-4 overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-line shadow-[0_30px_70px_-45px_rgba(16,32,42,0.55)]">
                {/* One accent across the whole panel, not one per card — it is
                    what makes the three columns read as a single object. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-300"
                />

                <div className="grid divide-y divide-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                  {inDetail.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      className="group relative isolate flex flex-col overflow-hidden p-6 pt-8 transition-colors hover:bg-brand-50/45 focus-visible:bg-brand-50/45 focus-visible:outline-none sm:p-7 sm:pt-9"
                    >
                      {/* The column's own subject, hung off the corner and
                          cropped to about half a glyph — texture, not a second
                          icon. strokeWidth 1: lucide's default renders a ~9px
                          stroke at this size and reads as a graphic. */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-8 -bottom-8 z-0 text-brand-100 transition-colors duration-500 group-hover:text-brand-200"
                      >
                        <ServiceIcon name={service.icon} className="size-40" strokeWidth={1} />
                      </span>

                      <span className="relative z-10 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 transition-colors duration-300 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                        <ServiceIcon name={service.icon} className="size-5" />
                      </span>

                      <h3 className="relative z-10 mt-5 text-xl leading-snug font-semibold text-ink">
                        {service.title}
                      </h3>
                      {/* flex-1 so the rule under the description lands at the
                          same height in all three columns — the descriptions
                          are two and three lines and the rules were stepping. */}
                      <p className="relative z-10 mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                        {service.shortDescription}
                      </p>

                      {/* The page's own promises, in its own words — the thing
                          a "Read more" link could not tell you. */}
                      {service.assurances?.length ? (
                        <ul className="relative z-10 mt-5 space-y-2.5 border-t border-line pt-5">
                          {service.assurances.slice(0, 3).map((assurance) => (
                            <li
                              key={assurance.title}
                              className="flex items-start gap-2.5 text-sm leading-snug font-medium text-ink"
                            >
                              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                                <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                              </span>
                              {assurance.title}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      <span className="relative z-10 mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-700">
                        How it works
                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : null}

          {rest.length ? (
            <div className={inDetail.length ? "mt-12" : undefined}>
              <h2 className="eyebrow">Also handled in-house</h2>

              <ul className="mt-4 divide-y divide-line overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-line shadow-[0_24px_60px_-48px_rgba(16,32,42,0.5)]">
                {rest.map((service, index) => (
                  <li key={service.slug}>
                    <Link
                      href={service.href}
                      className="group grid gap-x-6 gap-y-2 px-5 py-4 transition-colors hover:bg-brand-50/45 focus-visible:bg-brand-50/45 focus-visible:outline-none sm:px-6 lg:grid-cols-[minmax(0,19rem)_1fr_auto] lg:items-center"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="font-sans text-[0.6875rem] font-bold text-brand-400 tabular-nums"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 transition-colors duration-300 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                          <ServiceIcon name={service.icon} className="size-4" />
                        </span>
                        <span className="text-base font-semibold text-ink group-hover:text-brand-800">
                          {service.title}
                        </span>
                      </span>

                      <span className="pl-[3.6rem] text-[0.9375rem] leading-relaxed text-ink-soft lg:pl-0">
                        {service.shortDescription}
                      </span>

                      <ArrowRight
                        className="hidden size-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-700 lg:block"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* The ninth entry in the menu, and the only one that is not a
              service page. Per the navigation specification it links to the
              departures calendar. */}
          {/* The one dark block on the page. It is doing two jobs: giving a
              page of white panels a base to sit on, and saying plainly that
              this entry is a different kind of thing from the eight above it.
              Copy is white on --brand-800, which clears AA at this size. */}
          <Link
            href="/fixed-departures/"
            className="group relative isolate mt-8 flex flex-col gap-5 overflow-hidden rounded-[1.5rem] bg-brand-800 p-6 transition-colors hover:bg-brand-900 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-7"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_15%,rgba(255,255,255,0.2),transparent_55%)]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -bottom-10 z-0 text-white/10"
            >
              <CalendarDays className="size-44" strokeWidth={1} />
            </span>

            <span className="relative z-10 flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/25">
                <CalendarDays className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xl leading-snug font-semibold text-white">
                  Fixed departure tours
                </span>
                <span className="mt-1.5 block max-w-2xl text-[0.9375rem] leading-relaxed text-brand-100/90">
                  Curated group departures on set dates at set prices, with itineraries already
                  tested and a tour manager travelling with the group.
                </span>
              </span>
            </span>

            <span className="relative z-10 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition-colors group-hover:bg-brand-50">
              See the calendar
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </Section>

      <Section tone="mist" className="pt-0">
        <div className="container-page">
          <EnquiryCta
            title="Not sure which of these you need?"
          />
        </div>
      </Section>
    </>
  );
}
