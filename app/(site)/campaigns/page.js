import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import EnquiryCta from "@/components/site/EnquiryCta";
import JsonLd from "@/components/site/JsonLd";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { getCampaigns } from "@/lib/data/content";
import { SITE } from "@/lib/site";

import { breadcrumbSchema } from "@/lib/seo/schema";

export const revalidate = 600;

export const metadata = {
  title: "Campaigns — The Trips That Are Not For Sale",
  description:
    "The journeys Alisha Tours & Travels arranges that nobody pays for: sponsored trips, community departures and the work behind the line every travel is a blessing.",
  alternates: { canonical: "/campaigns/" },
};

/**
 * The campaigns index.
 *
 * This page exists because the homepage band about the school for the blind was
 * hardcoded, and lib/site.js has carried a TODO for a Stories / Our Impact page
 * since the first build. Campaigns are a collection now, so the client adds the
 * next one in /admin/ rather than asking for a deploy.
 *
 * The first card is given the full width. There is currently one campaign, and
 * a lone card in a three-column grid reads as two missing cards; at full width
 * it reads as the only one there is, which is the truth.
 */
export default async function CampaignsPage() {
  const campaigns = await getCampaigns();
  const [lead, ...rest] = campaigns;

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ label: "Campaigns" }])} />

      <PageHeader
        eyebrow="Our campaigns"
        title="Some departures nobody pays for."
        lead={`${SITE.tagline} is the line this company is built on. These are the trips where it is the only reason.`}
        breadcrumbs={[{ label: "Campaigns" }]}
      />

      <Section className="py-6 sm:py-7">
        <div className="container-page">
          {lead ? (
            <article className="group relative isolate flex min-h-[26rem] items-end overflow-hidden rounded-[2rem] sm:min-h-[30rem]">
              <Image
                src={lead.heroImage.url}
                alt={lead.heroImage.alt || lead.title}
                fill
                priority
                sizes="(min-width: 1024px) 76rem, 100vw"
                quality={60}
                className="object-cover grayscale brightness-[1.15] contrast-[1.05] transition-transform duration-[900ms] ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(100deg,rgb(6_18_25/0.93)_0%,rgb(6_18_25/0.86)_42%,rgb(6_18_25/0.4)_100%)]"
              />

              <div className="relative z-10 p-7 sm:p-10 lg:max-w-3xl">
                {lead.location || lead.period ? (
                  <p className="eyebrow text-brand-200">
                    {[lead.period, lead.location].filter(Boolean).join(" · ")}
                  </p>
                ) : null}

                <h2 className="mt-4 text-balance-heading text-2xl leading-tight font-bold text-white sm:text-[2rem]">
                  <Link href={lead.href} className="after:absolute after:inset-0">
                    {lead.title}
                  </Link>
                </h2>

                <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                  {lead.summary}
                </p>

                <p className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Read the story
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </p>

                {lead.imageNote ? (
                  <p className="mt-6 text-xs leading-relaxed text-white/60">{lead.imageNote}</p>
                ) : null}
              </div>
            </article>
          ) : (
            <div className="rounded-3xl border border-dashed border-line px-6 py-16 text-center">
              <h2 className="text-xl font-semibold text-ink">No campaigns are published yet.</h2>
              <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
                They are added in the dashboard, under Campaigns.
              </p>
            </div>
          )}

          {rest.length ? (
            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((campaign) => (
                <li key={campaign.slug}>
                  <Link
                    href={campaign.href}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-colors hover:border-brand-300"
                  >
                    <span className="relative block aspect-[16/10] overflow-hidden bg-mist-100">
                      <Image
                        src={campaign.heroImage.url}
                        alt={campaign.heroImage.alt || campaign.title}
                        fill
                        sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 88vw"
                        quality={60}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    </span>

                    <span className="flex flex-1 flex-col p-6">
                      {campaign.location || campaign.period ? (
                        <span className="eyebrow">
                          {[campaign.period, campaign.location].filter(Boolean).join(" · ")}
                        </span>
                      ) : null}
                      <span className="mt-3 text-lg leading-snug font-semibold text-ink">
                        {campaign.title}
                      </span>
                      <span className="mt-2 line-clamp-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                        {campaign.summary}
                      </span>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                        Read the story
                        <ArrowRight
                          className="size-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Section>

      <Section tone="mist" className="pt-0">
        <div className="container-page">
          <EnquiryCta title="Travelling with a group that needs more than a booking?" />
        </div>
      </Section>
    </>
  );
}
