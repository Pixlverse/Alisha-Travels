import { ExternalLink } from "lucide-react";

import EnquiryCta from "@/components/site/EnquiryCta";
import JsonLd from "@/components/site/JsonLd";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import StarRating from "@/components/site/StarRating";
import TestimonialCard from "@/components/site/TestimonialCard";
import { getTestimonials } from "@/lib/data/content";
import { SITE, SOCIAL } from "@/lib/site";
import { ABOUT_SECTIONS } from "@/lib/content/about";
import { breadcrumbSchema, reviewsSchema } from "@/lib/seo/schema";

export const revalidate = 600;

export const metadata = {
  title: "Customer Reviews — 4.8★ on Google",
  description:
    "What travellers say about Alisha Tours & Travels. 4.8 on Google reviews and 4.9 on JustDial, earned one traveller at a time since 2013.",
  alternates: { canonical: "/reviews/" },
};

const SOURCE_LABELS = {
  google: "Google",
  justdial: "JustDial",
  direct: "Shared with us",
};

/**
 * Customer reviews.
 *
 * Testimonials are entered by admins — there is no live Google Reviews API
 * sync in this phase, per the scope boundaries. The aggregate figures come
 * from lib/site.js so the ratings quoted across the site all move
 * together when the client updates them.
 *
 * The legacy site had no testimonials at all and a rating widget stuck at
 * zero, which is worse than showing nothing.
 */
export default async function ReviewsPage() {
  const testimonials = await getTestimonials();

  const bySource = testimonials.reduce((counts, item) => {
    counts[item.source] = (counts[item.source] || 0) + 1;
    return counts;
  }, {});

  const average =
    testimonials.length
      ? testimonials.reduce((total, item) => total + item.rating, 0) / testimonials.length
      : SITE.rating.value;

  return (
    <>
      {/* Only the reviews this page actually renders are described. */}
      <JsonLd
        schema={[
          reviewsSchema(testimonials),
          breadcrumbSchema([
            { label: "About", href: "/about/" },
            { label: "Customer Reviews" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Customer reviews"
        title={ABOUT_SECTIONS.proof.heading}
        lead="A rating is only a number until you know what sits behind it. Every one of those reviews is someone who trusted us with a flight, a honeymoon, a family holiday, a corporate movement or a document that their job abroad depended on."
        breadcrumbs={[{ label: "About", href: "/about/" }, { label: "Customer Reviews" }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={SOCIAL.google}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none"
          >
            <StarRating value={SITE.rating.value} size="lg" />
            <span className="font-sans text-lg font-bold text-ink">
              {SITE.rating.value}
              <span className="ml-1.5 text-sm font-normal text-ink-muted">
                on Google reviews
              </span>
            </span>
          </a>
          <span className="hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
          <span className="font-sans text-lg font-bold text-ink">
            {SITE.rating.justDial}
            <span className="ml-1.5 text-sm font-normal text-ink-muted">on JustDial</span>
          </span>
        </div>
      </PageHeader>

      <Section className="py-6 sm:py-7">
        <div className="container-page">
          {testimonials.length ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-ink-muted">
                  Showing <span className="font-semibold text-ink">{testimonials.length}</span>{" "}
                  {testimonials.length === 1 ? "review" : "reviews"} published here, averaging{" "}
                  <span className="font-semibold text-ink">{average.toFixed(1)}★</span>
                </p>
                <ul className="flex flex-wrap gap-2">
                  {Object.entries(bySource).map(([source, count]) => (
                    <li
                      key={source}
                      className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft"
                    >
                      {SOURCE_LABELS[source] || source}
                      <span className="ml-1.5 text-ink-muted">{count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* A masonry-ish column layout: reviews vary a lot in length and a
                  fixed grid leaves large gaps under the short ones. */}
              <ul className="mt-8 gap-5 sm:columns-2 lg:columns-3">
                {testimonials.map((testimonial) => (
                  <li key={testimonial._id} className="mb-5 break-inside-avoid">
                    <TestimonialCard testimonial={testimonial} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="rounded-3xl border border-dashed border-line p-12 text-center text-ink-muted">
              No reviews have been published yet.
            </p>
          )}

          <p className="mt-10 flex flex-wrap items-center gap-2 rounded-2xl border border-line bg-mist-50 p-5 text-sm leading-relaxed text-ink-soft">
            <ExternalLink className="size-4 shrink-0 text-brand-500" aria-hidden="true" />
            <span>
              These are published with the travellers&rsquo; permission. The full set lives on{" "}
              <a
                href={SOCIAL.google}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
              >
                our Google Business Profile
              </a>{" "}
              and on JustDial, where the ratings above come from.
            </span>
          </p>
        </div>
      </Section>

      <Section tone="mist" className="pt-0">
        <div className="container-page">
          <EnquiryCta
            title={ABOUT_SECTIONS.proof.close}
          />
        </div>
      </Section>
    </>
  );
}
