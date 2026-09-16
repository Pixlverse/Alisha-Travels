import Link from "next/link";
import { ArrowRight, Phone, Quote, ShieldCheck } from "lucide-react";

import Breadcrumbs from "@/components/site/Breadcrumbs";
import JsonLd from "@/components/site/JsonLd";
import Button from "@/components/site/Button";
import EnquiryCta from "@/components/site/EnquiryCta";
import { Section } from "@/components/site/Section";
import WhatsAppIcon from "@/components/site/icons/WhatsAppIcon";
import { ABOUT_SECTIONS } from "@/lib/content/about";
import { PRIMARY_PHONE, SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

import { breadcrumbSchema } from "@/lib/seo/schema";

export const revalidate = 600;

export const metadata = {
  title: "Ramzi Mohammed Ali — Founder",
  description:
    "Ramzi Mohammed Ali founded Alisha Tours & Travels in Ettumanoor in 2013 with one desk and one conviction: a traveller should never have to chase anyone.",
  alternates: { canonical: "/about/ramzi-mohammed-ali/" },
};

const { story, visionMission } = ABOUT_SECTIONS;

/**
 * Founder profile.
 *
 * A standalone nav item (5.2 in the navigation specification), so it is a real
 * page rather than an anchor into /about/. The narrative is the client's own
 * Our Story copy, reproduced verbatim; the surrounding material is the
 * expansion the brief asks for — role, the principles the company runs on, and
 * a photograph placeholder.
 */
export default function FounderPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ label: "About", href: "/about/" }, { label: "Ramzi Mohammed Ali" }])} />

      <header className="border-b border-line bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page py-5 sm:py-6">
          <Breadcrumbs
            items={[{ label: "About", href: "/about/" }, { label: SITE.founder }]}
            className="mb-8"
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:items-center lg:gap-14">
            {/*
              Photograph placeholder. Deliberately a monogram rather than stock
              photography of somebody who is not him — a fake portrait on a
              founder page is worse than none. Replace from /admin/ once the
              client supplies a real photograph (Cloudinary, alisha/team).
            */}
            <div className="relative aspect-[4/5] max-w-xs overflow-hidden rounded-[2rem] bg-brand-100">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.7),transparent_60%)]"
                aria-hidden="true"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center font-display text-8xl font-semibold text-brand-700/60 italic"
              >
                R
              </span>
              <span className="absolute inset-x-0 bottom-0 bg-white/85 px-5 py-3 text-center text-xs text-ink-muted backdrop-blur-sm">
                Photograph to follow
              </span>
            </div>

            <div>
              <p className="eyebrow">Founder</p>
              <h1 className="mt-3 text-[2.25rem] leading-[1.06] font-extrabold tracking-[-0.025em] text-ink sm:text-[3rem]">
                {SITE.founder}
              </h1>
              <p className="mt-5 max-w-2xl font-display text-xl leading-snug text-brand-700 italic sm:text-2xl">
                {story.heading}
              </p>
              <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4 text-brand-500" aria-hidden="true" />
                  Founded {SITE.name} in {SITE.founded}
                </span>
                <span className="inline-flex items-center gap-2">
                  Ettumanoor, Kottayam · Kerala
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <Section className="py-14 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">The story</p>

          <div className="mt-6 space-y-6 text-lg leading-relaxed text-ink-soft sm:text-xl sm:leading-relaxed">
            {story.body.map((paragraph, index) =>
              // The third paragraph is a single line and the pivot of the whole
              // story, so it is set as a pull-quote rather than buried.
              index === 2 ? (
                <p
                  key={paragraph.slice(0, 40)}
                  className="flex gap-4 border-l-2 border-brand-400 py-2 pl-6 font-display text-2xl leading-snug font-semibold text-ink italic sm:text-3xl"
                >
                  <Quote className="mt-1.5 size-6 shrink-0 text-brand-300" aria-hidden="true" />
                  {paragraph}
                </p>
              ) : (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              )
            )}
          </div>
        </div>
      </Section>

      <Section tone="mist" className="py-14 sm:py-18">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">What he built it on</p>
          <h2 className="mt-4 text-2xl leading-tight font-semibold text-ink sm:text-3xl">
            The arrangement has not changed since {SITE.founded}.
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <article className="rounded-3xl border border-line bg-white p-7">
              <h3 className="text-lg font-semibold text-ink">Our Mission</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                {visionMission.mission}
              </p>
            </article>
            <article className="rounded-3xl border border-line bg-white p-7">
              <h3 className="text-lg font-semibold text-ink">Our Vision</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                {visionMission.vision}
              </p>
            </article>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={`tel:${PRIMARY_PHONE.tel}`} size="lg">
              <Phone className="size-4" aria-hidden="true" />
              {PRIMARY_PHONE.display}
            </Button>
            <Button href={whatsappLink()} variant="whatsapp" size="lg">
              <WhatsAppIcon className="size-5" />
              WhatsApp us
            </Button>
          </div>

          <p className="mt-8 text-sm text-ink-muted">
            <Link
              href="/about/"
              className="group inline-flex items-center gap-2 font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              Read the full company story
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </p>
        </div>
      </Section>

      <Section className="pt-0 pb-16 sm:pb-20">
        <div className="container-page">
          <EnquiryCta />
        </div>
      </Section>
    </>
  );
}
