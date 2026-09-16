import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Breadcrumbs from "@/components/site/Breadcrumbs";
import EnquiryCta from "@/components/site/EnquiryCta";
import JsonLd from "@/components/site/JsonLd";
import RichText from "@/components/site/RichText";
import { Section } from "@/components/site/Section";
import { getCampaignBySlug, getCampaignSlugs, getCampaigns } from "@/lib/data/content";
import { SITE } from "@/lib/site";

import { breadcrumbSchema } from "@/lib/seo/schema";

export const revalidate = 600;

export async function generateStaticParams() {
  return getCampaignSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const campaign = await getCampaignBySlug(slug);
  if (!campaign) return {};

  const title = campaign.metaTitle || campaign.title;
  return {
    title: title.includes(SITE.name) ? { absolute: title } : title,
    description: campaign.metaDescription || campaign.summary,
    alternates: { canonical: `/campaigns/${slug}/` },
    openGraph: {
      title,
      description: campaign.metaDescription || campaign.summary,
      images: campaign.heroImage?.url ? [campaign.heroImage.url] : undefined,
    },
  };
}

export default async function CampaignPage({ params }) {
  const { slug } = await params;
  const [campaign, all] = await Promise.all([getCampaignBySlug(slug), getCampaigns()]);
  if (!campaign) notFound();

  const others = all.filter((item) => item.slug !== slug);
  const crumbs = [{ label: "Campaigns", href: "/campaigns/" }, { label: campaign.title }];

  return (
    <>
      <JsonLd schema={breadcrumbSchema(crumbs)} />

      {/* The photograph carries the page, so it is the page — the same
          treatment the homepage band uses. Shorter than the homepage's,
          though: that band has to stop a scroll, this one is a page header
          with the story directly under it, and at 32rem the first paragraph
          started below the fold. */}
      <section className="relative isolate flex min-h-[17rem] items-end overflow-hidden sm:min-h-[21rem]">
        <Image
          src={campaign.heroImage.url}
          alt={campaign.heroImage.alt || campaign.title}
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale brightness-[1.15] contrast-[1.05]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgb(6_18_25/0.93)_0%,rgb(6_18_25/0.86)_42%,rgb(6_18_25/0.38)_100%)]"
        />

        <div className="relative z-10 container-page py-8 sm:py-10">
          <Breadcrumbs items={crumbs} invert className="mb-6" />

          {campaign.period || campaign.location ? (
            <p className="eyebrow text-brand-200">
              {[campaign.period, campaign.location].filter(Boolean).join(" · ")}
            </p>
          ) : null}

          <h1 className="mt-4 max-w-4xl text-balance-heading text-[1.875rem] leading-[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-[2.5rem]">
            {campaign.title}
          </h1>
        </div>
      </section>

      <Section className="py-10 sm:py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-ink sm:text-xl">{campaign.summary}</p>

            {campaign.body && campaign.body !== campaign.summary ? (
              <RichText text={campaign.body} className="mt-7" size="lg" />
            ) : null}

            {campaign.pullQuote ? (
              <p className="mt-10 border-t border-line pt-9 font-display text-[1.75rem] leading-snug text-ink italic sm:text-[2.25rem]">
                {campaign.pullQuote}
              </p>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            {campaign.imageNote ? (
              <p className="rounded-2xl bg-mist-50 p-5 text-xs leading-relaxed text-ink-muted ring-1 ring-line">
                {campaign.imageNote}
              </p>
            ) : null}

            <p className={campaign.imageNote ? "mt-5" : undefined}>
              <Link
                href="/campaigns/"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
              >
                <ArrowLeft
                  className="size-4 transition-transform group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
                All campaigns
              </Link>
            </p>
          </aside>
        </div>
      </Section>

      {others.length ? (
        <Section tone="mist" className="py-8 sm:py-10">
          <div className="container-page">
            <h2 className="eyebrow">More campaigns</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    className="group flex h-full items-center gap-3 rounded-2xl bg-white px-4 py-4 ring-1 ring-line transition-colors hover:ring-brand-300"
                  >
                    <span className="flex-1 text-[0.9375rem] leading-snug font-semibold text-ink group-hover:text-brand-800">
                      {item.title}
                    </span>
                    <ArrowRight
                      className="size-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-700"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      <Section tone="mist" className="pt-0">
        <div className="container-page">
          <EnquiryCta />
        </div>
      </Section>
    </>
  );
}
