import Image from "next/image";
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
  title: "Ramzi Mohammed Ali - Founder",
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
 * his portrait.
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
            {/* The portrait is a file, not a dashboard field - see
                SITE.founderPhoto in lib/site.js for how to replace it. */}
            <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] bg-brand-100">
              <Image
                src={SITE.founderPhoto.src}
                alt={SITE.founderPhoto.alt}
                fill
                priority
                sizes="20rem"
                className="object-cover"
              />
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

      {/*
        ONE SECTION, TWO COLUMNS. The story and "What he built it on" were two
        stacked bands, each capped at max-w-3xl in the middle of the page,
        which left wide empty margins on a laptop. The story keeps a readable
        measure on the left; mission, vision and the contact buttons sit beside
        it and stay in view while it is read. Below lg it is one column again.
      */}
      <Section className="py-12 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-20">
          <div>
            <p className="eyebrow">The story</p>

            <div className="mt-6 max-w-3xl space-y-6 text-lg leading-relaxed text-ink-soft sm:text-xl sm:leading-relaxed">
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

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.75rem] bg-mist-50 p-6 ring-1 ring-line sm:p-7">
              <p className="eyebrow">What he built it on</p>
              <h2 className="mt-3 text-xl leading-snug font-semibold text-ink">
                The arrangement has not changed since {SITE.founded}.
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <article className="rounded-2xl bg-white p-5 ring-1 ring-line">
                  <h3 className="text-base font-semibold text-ink">Our Mission</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {visionMission.mission}
                  </p>
                </article>
                <article className="rounded-2xl bg-white p-5 ring-1 ring-line">
                  <h3 className="text-base font-semibold text-ink">Our Vision</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {visionMission.vision}
                  </p>
                </article>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <Button href={`tel:${PRIMARY_PHONE.tel}`}>
                  <Phone className="size-4" aria-hidden="true" />
                  {PRIMARY_PHONE.display}
                </Button>
                <Button href={whatsappLink()} variant="whatsapp">
                  <WhatsAppIcon className="size-5" />
                  WhatsApp us
                </Button>
              </div>

              <p className="mt-6 text-sm">
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
          </aside>
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
