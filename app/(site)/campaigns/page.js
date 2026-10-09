import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HandHeart } from "lucide-react";

import Button from "@/components/site/Button";
import JsonLd from "@/components/site/JsonLd";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { getCampaigns } from "@/lib/data/content";
import { cn } from "@/lib/utils";

import { breadcrumbSchema } from "@/lib/seo/schema";

export const revalidate = 600;

export const metadata = {
  title: "Beyond Destinations - Journeys That Mean Something More",
  description:
    "Beyond Destinations: the stories of journeys Alisha Tours & Travels has been part of that mean something more - a day on Ashtamudi Lake with the children of a school for the blind, and a first flight for three people who had always wished to fly.",
  alternates: { canonical: "/campaigns/" },
};

/**
 * Beyond Destinations - the campaigns index, in the client's words.
 *
 * Campaigns are a collection, so the client adds the next story in /admin/
 * rather than asking for a deploy. Each one is a row of photograph and copy,
 * alternating sides, numbered by its place in the sort order ("Story 01").
 * The intro, the partner call and the closing line are this page's own copy
 * and stay here.
 */
export default async function CampaignsPage() {
  const campaigns = await getCampaigns();

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ label: "Campaigns" }])} />

      <PageHeader
        eyebrow="Our campaigns"
        title="Beyond Destinations"
        lead="Some journeys are about more than where you go."
        breadcrumbs={[{ label: "Campaigns" }]}
      >
        <div className="mt-4 max-w-3xl space-y-3 text-[0.9375rem] leading-relaxed text-ink-soft">
          <p>
            Travel can mean discovering a place for the first time. It can mean experiencing
            something you have always wished for. Sometimes, it means a journey someone has long
            waited to take.
          </p>
          <p>Through Beyond Destinations, we share the stories of journeys that mean something more.</p>
        </div>
      </PageHeader>

      <Section className="py-10 sm:py-14">
        <div className="container-page">
          {campaigns.length ? (
            <ol className="space-y-12 sm:space-y-16">
              {campaigns.map((campaign, index) => (
                <li key={campaign.slug}>
                  <StoryRow campaign={campaign} number={index + 1} flip={index % 2 === 1} priority={index === 0} />
                </li>
              ))}
            </ol>
          ) : (
            <div className="rounded-3xl border border-dashed border-line px-6 py-16 text-center">
              <h2 className="text-xl font-semibold text-ink">No stories are published yet.</h2>
              <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
                They are added in the dashboard, under Campaigns.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* The call to action, then the line the page ends on. */}
      <Section className="pt-0 pb-12 sm:pb-16">
        <div className="container-page">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-900 px-6 py-10 text-white sm:px-12 sm:py-14">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-1.5 ring-1 ring-white/25">
                <HandHeart className="size-4 text-brand-200" aria-hidden="true" />
                <span className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
                  Partner with us
                </span>
              </p>
              <h2 className="mt-5 text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] sm:text-[2rem]">
                Help make the next journey happen
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                These are our first two journeys of this kind. We don&rsquo;t want them to be the
                last. If you run a school, an organisation or a company that would like to make the
                next one possible with us, we would love to hear from you.
              </p>
              <Button href="/contact/" variant="white" size="lg" className="mt-7">
                Partner with us
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center sm:mt-16">
            <p className="font-display text-[2rem] leading-tight text-ink italic sm:text-[2.75rem]">
              Every travel is a blessing.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              Some journeys take us somewhere new. Others change what a journey means to us. These
              are the experiences we are grateful to be part of.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

function StoryRow({ campaign, number, flip, priority }) {
  return (
    <article className="group relative grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-14">
      <div className={cn("relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-mist-100", flip && "lg:order-2")}>
        <Image
          src={campaign.heroImage.url}
          alt={campaign.heroImage.alt || campaign.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 38rem, 100vw"
          quality={60}
          className="object-cover grayscale brightness-[1.1] contrast-[1.05] transition-transform duration-[900ms] ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div>
        <p className="eyebrow">
          Story {String(number).padStart(2, "0")} · {campaign.title}
        </p>

        <h2 className="mt-4 text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] text-ink sm:text-[2rem]">
          <Link href={campaign.href} className="after:absolute after:inset-0">
            {campaign.headline || campaign.title}
          </Link>
        </h2>

        {campaign.subtitle ? (
          <p className="mt-3 text-lg leading-snug font-medium text-ink">{campaign.subtitle}</p>
        ) : null}

        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-[1.0625rem]">
          {campaign.summary}
        </p>

        <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
          Read the story
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </p>

        {campaign.imageNote ? (
          <p className="mt-5 text-xs leading-relaxed text-ink-muted">{campaign.imageNote}</p>
        ) : null}
      </div>
    </article>
  );
}
