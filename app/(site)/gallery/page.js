import EnquiryCta from "@/components/site/EnquiryCta";
import GalleryGrid from "@/components/site/GalleryGrid";
import JsonLd from "@/components/site/JsonLd";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { getGalleryItems } from "@/lib/data/content";

import { breadcrumbSchema } from "@/lib/seo/schema";

export const revalidate = 600;

export const metadata = {
  title: "Gallery - Destinations We Travel To",
  description:
    "Photographs of the destinations Alisha Tours & Travels plans trips to, from Dubai and Thailand to Kashmir, Goa and Kerala.",
  alternates: { canonical: "/gallery/" },
};

/**
 * One gallery, replacing the legacy site's two.
 *
 * The old site ran a "Memory Book" page and a separate portfolio custom post
 * type in parallel, with an image duplicated between them and filter tabs that
 * pointed at "#" and filtered nothing. Both legacy paths 301 here (see
 * next.config.mjs). There are no filter tabs: every photograph and video is
 * shown together, each at the shape it was uploaded in.
 */
export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ label: "About", href: "/about/" }, { label: "Gallery" }])} />

      <PageHeader
        eyebrow={galleryCount(items)}
        title="The places our travellers go."
        lead="A look at the destinations we plan trips to. Photographs from our own group departures and family holidays will be added here."
        breadcrumbs={[{ label: "About", href: "/about/" }, { label: "Gallery" }]}
      />

      <Section className="py-6 sm:py-7">
        <div className="container-page">
          {items.length ? (
            <GalleryGrid items={items} />
          ) : (
            <p className="rounded-3xl border border-dashed border-line p-12 text-center text-ink-muted">
              Nothing has been published to the gallery yet.
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

/** "12 photographs", "3 videos", "12 photographs · 3 videos". */
function galleryCount(items) {
  const videos = items.filter((item) => item.image?.resourceType === "video").length;
  const photos = items.length - videos;
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
  return [photos ? plural(photos, "photograph") : "", videos ? plural(videos, "video") : ""]
    .filter(Boolean)
    .join(" · ");
}
