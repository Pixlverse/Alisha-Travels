import { Phone, Star } from "lucide-react";

import Button from "./Button";
import PageHeader from "./PageHeader";
import RichText from "./RichText";
import { Section } from "./Section";
import Assurances from "./category-guide/Assurances";
import GuideBlocks from "./category-guide/GuideBlocks";
import { PRIMARY_PHONE, SITE, SOCIAL } from "@/lib/site";

/**
 * A package category page — the client's copy above the filtered listing.
 *
 * The three category routes (/packages/honeymoon/, /family/, /group-tours/)
 * were a heading, a lead and the grid. The client has written full pages for
 * them, in the same shape as a service page, so this renders them through the
 * same block system rather than a second one. See models/CategoryPage.js.
 *
 * ORDER OF THE PAGE. Hero, then the PACKAGES straight away, and only then the
 * four promises, the opening paragraph and the long-form bands. That is
 * deliberate and it is the same decision as on the destination pages: the
 * client's note was that nothing should stand between a visitor and the
 * trips, so the grid comes first and the argument sits under it for whoever
 * wants it.
 *
 * `children` is the listing. A category with no document here never reaches
 * this component — the route falls back to its original layout.
 */
export default function CategoryPageBody({ page, breadcrumbs, destinations = [], children }) {
  return (
    <>
      <PageHeader
        eyebrow={page.eyebrow}
        title={page.title}
        lead={page.heroLead}
        breadcrumbs={breadcrumbs}
      >
        {page.subline ? (
          <p className="mt-4 max-w-3xl text-[0.9375rem] leading-relaxed text-ink-muted">
            {page.subline}
          </p>
        ) : null}

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Button href="/contact/" size="lg">
            {page.ctaLabel || "Get a quote"}
          </Button>
          <Button href={`tel:${PRIMARY_PHONE.tel}`} variant="outline" size="lg">
            <Phone className="size-4" aria-hidden="true" />
            {page.secondaryCtaLabel || "Call us"}
          </Button>
        </div>

        {/* The same credentials line the service pages carry, and the rating
            links to Google for the same reason it does there. */}
        <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.8125rem] text-ink-muted">
          <li className="inline-flex items-center gap-1.5">
            <Star className="size-3.5 fill-sun text-sun" aria-hidden="true" />
            <a
              href={SOCIAL.google}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-brand-700 hover:underline"
            >
              {SITE.rating.value} on Google
            </a>
          </li>
          <li aria-hidden="true" className="size-1 rounded-full bg-mist-300" />
          <li className="inline-flex items-center gap-1.5">
            <Star className="size-3.5 fill-sun text-sun" aria-hidden="true" />
            {SITE.rating.justDial} on JustDial
          </li>
          <li aria-hidden="true" className="size-1 rounded-full bg-mist-300" />
          <li>IATA accredited · Since {SITE.founded}</li>
        </ul>
      </PageHeader>

      {/* The target of the "See the packages" buttons further down. */}
      <div id="packages" className="scroll-mt-28">
        {children}
      </div>

      <Assurances items={page.assurances} />

      {page.intro ? (
        <Section className="pt-4 pb-10 sm:pb-12">
          <div className="container-page">
            <LeadIntro text={page.intro} />
          </div>
        </Section>
      ) : null}

      <GuideBlocks
        blocks={page.blocks}
        destinations={destinations}
        backHref="#packages"
        backLabel="See the packages"
      />

      {page.closingTitle ? (
        <Section className="py-6 sm:py-7">
          <div className="container-page">
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-12 text-center sm:px-14 sm:py-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.22),transparent_55%)]"
              />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-balance-heading text-3xl leading-tight font-semibold text-white sm:text-4xl">
                  {page.closingTitle}
                </h2>
                {page.closingText ? (
                  <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                    {page.closingText}
                  </p>
                ) : null}
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <Button href={`tel:${PRIMARY_PHONE.tel}`} variant="white" size="lg">
                    <Phone className="size-4" aria-hidden="true" />
                    Call us
                  </Button>
                  <Button
                    href="/contact/"
                    variant="outline"
                    size="lg"
                    className="border-white/50 bg-transparent text-white hover:border-white hover:bg-white/10"
                  >
                    Email the details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ) : null}
    </>
  );
}

/**
 * The opening paragraph, split so its first sentence carries it: that line
 * large on the left, the rest beside it. One flat 600-character paragraph is
 * the easiest thing on the page to skip; a pull line is the hardest.
 */
function LeadIntro({ text }) {
  const match = String(text).trim().match(/^([\s\S]+?[.!?])\s+([\s\S]+)$/);
  if (!match) return <RichText text={text} size="lg" className="max-w-[52rem]" />;
  const [, first, rest] = match;
  return (
    <div className="grid gap-6 border-l-4 border-brand-500 pl-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-12 lg:pl-8">
      <p className="text-balance-heading text-2xl leading-snug font-semibold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
        {first}
      </p>
      <RichText text={rest} className="text-ink-soft" />
    </div>
  );
}
