import { Check, Phone, Star } from "lucide-react";

import Button from "./Button";
import ContentBlock from "./ContentBlocks";
import PageHeader from "./PageHeader";
import RichText from "./RichText";
import { Section } from "./Section";
import { PRIMARY_PHONE, SITE, SOCIAL } from "@/lib/site";

/**
 * A package category page — the client's copy above the filtered listing.
 *
 * The three category routes (/packages/honeymoon/, /family/, /group-tours/)
 * were a heading, a lead and the grid. The client has written full pages for
 * them, in the same shape as a service page, so this renders them through the
 * same block system rather than a second one. See models/CategoryPage.js.
 *
 * ORDER OF THE PAGE. Hero, the four promises, the opening paragraph, then the
 * PACKAGES, and only then the long-form bands. That is deliberate and it is
 * the same decision as on the destination pages: the client's note early on
 * was that prose should not stand between a visitor and a price, so the grid
 * stays high and the argument sits under it for whoever wants it.
 *
 * `children` is the listing. A category with no document here never reaches
 * this component — the route falls back to its original layout.
 */
export default function CategoryPageBody({ page, breadcrumbs, children }) {
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

      {page.assurances?.length ? (
        <Section className="py-6 sm:py-7">
          <div className="container-page">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {page.assurances.map((card) => (
                <li
                  key={card.title}
                  className="flex h-full flex-col rounded-2xl border border-line bg-white p-5"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-base font-semibold text-ink">{card.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{card.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      {page.intro ? (
        <Section className="pt-2 pb-6 sm:pb-7">
          <div className="container-page">
            <RichText text={page.intro} size="lg" className="max-w-[52rem]" />
          </div>
        </Section>
      ) : null}

      {children}

      {/* Bands alternate tone so a page of eight blocks still reads as eight
          blocks rather than one continuous column. */}
      {page.blocks?.map((block, index) => (
        <Section
          key={`${block.kind}-${index}`}
          tone={index % 2 === 0 ? "mist" : "default"}
          className="py-6 sm:py-7"
        >
          <div className="container-page">
            <ContentBlock block={block} />
          </div>
        </Section>
      ))}

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
