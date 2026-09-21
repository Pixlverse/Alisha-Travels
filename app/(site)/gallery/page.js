import EnquiryCta from "@/components/site/EnquiryCta";
import GalleryGrid from "@/components/site/GalleryGrid";
import JsonLd from "@/components/site/JsonLd";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { galleryCategoriesOf, getGalleryItems } from "@/lib/data/content";

import { breadcrumbSchema } from "@/lib/seo/schema";

export const revalidate = 600;

export const metadata = {
  title: "Gallery - Tours, Offices and Travellers",
  description:
    "Photographs from Alisha Tours & Travels group departures, family holidays and our Kottayam office.",
  alternates: { canonical: "/gallery/" },
};

/**
 * One gallery, replacing the legacy site's two.
 *
 * The old site ran a "Memory Book" page and a separate portfolio custom post
 * type in parallel, with an image duplicated between them and filter tabs that
 * pointed at "#" and filtered nothing. Both legacy paths 301 here (see
 * next.config.mjs), and the tabs below are derived from the categories that
 * actually have photographs in them.
 */
export default async function GalleryPage() {
  const items = await getGalleryItems();
  const categories = galleryCategoriesOf(items);

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ label: "About", href: "/about/" }, { label: "Gallery" }])} />

      <PageHeader
        eyebrow={`${items.length} photographs`}
        title="Groups we have sent, places we have been, and the desk we work from."
        lead="Photographs from our group departures and family holidays, and from the Kottayam office. Nothing staged, and nothing from a stock library."
        breadcrumbs={[{ label: "About", href: "/about/" }, { label: "Gallery" }]}
      />

      <Section className="py-6 sm:py-7">
        <div className="container-page">
          {items.length ? (
            <GalleryGrid items={items} categories={categories} />
          ) : (
            <p className="rounded-3xl border border-dashed border-line p-12 text-center text-ink-muted">
              No photographs have been published yet.
            </p>
          )}
        </div>
      </Section>

      <Section tone="mist" className="pt-0">
        <div className="container-page">
          <EnquiryCta
            title="Fancy being in one of these?"
          />
        </div>
      </Section>
    </>
  );
}
