import { notFound } from "next/navigation";

import DestinationCard from "@/components/site/DestinationCard";
import EnquiryCta from "@/components/site/EnquiryCta";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { getDestinations } from "@/lib/data/destinations";

export const revalidate = 600;

/**
 * The two region listings, /destinations/international/ and
 * /destinations/domestic/, share this file. Nesting the detail pages under a
 * region segment (see README > URL structure) is what makes these two real
 * parent pages rather than orphan filters.
 */
const REGIONS = {
  international: {
    title: "International destinations",
    heading: "The countries people ask for, in the order they ask for them.",
    lead: "Dubai, Singapore, Thailand and the Maldives lead this list because that is the order the enquiries arrive in — not because it reads well alphabetically. Every page tells you what the visa involves, when to go, and what the trip really costs in rupees.",
    metaTitle: "International Tour Packages from Kerala",
    metaDescription:
      "Dubai, Singapore, Thailand, Maldives, Malaysia, Bali, Vietnam, Azerbaijan, Europe, Bhutan and Nepal — international holiday packages with visas, flights and hotels arranged from Kerala.",
  },
  domestic: {
    title: "Domestic destinations",
    heading: "India, starting with the part of it we live in.",
    lead: "Kerala is home, which is where we are most useful — we know which backwater operator maintains their boats and which hill resort photographs better than it lives. The rest we sell only where we have sent travellers and heard back.",
    metaTitle: "Domestic Tour Packages from Kerala",
    metaDescription:
      "Kerala, Kashmir, Ladakh, Andaman, Goa, Rajasthan, Darjeeling and Hyderabad — domestic holiday packages with flights, hotels and transfers arranged from Kottayam.",
  },
};

export function generateStaticParams() {
  return Object.keys(REGIONS).map((region) => ({ region }));
}

export async function generateMetadata({ params }) {
  const { region } = await params;
  const config = REGIONS[region];
  if (!config) return {};

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: { canonical: `/destinations/${region}/` },
  };
}

export default async function RegionPage({ params }) {
  const { region } = await params;
  const config = REGIONS[region];
  // Anything other than the two real regions is a 404, not an empty grid —
  // otherwise /destinations/anything/ would return a soft 200 for crawlers.
  if (!config) notFound();

  const destinations = await getDestinations({ region });

  return (
    <>
      <PageHeader
        // Was {destinations.length} destinations. The client does not want the
        // size of the destination list published anywhere on the site, and a
        // count derived from the collection is the same statement with extra
        // steps — it just goes stale on its own.
        eyebrow={config.title}
        title={config.heading}
        lead={config.lead}
        breadcrumbs={[
          { label: "Destinations", href: "/destinations/" },
          { label: config.title },
        ]}
      />

      <Section>
        <div className="container-page">
          {destinations.length ? (
            <>
              {/* DestinationCard titles are <h3> and this page has no visible
                  section heading, so the outline jumped h1 -> h3. Caught by
                  Lighthouse's heading-order audit on
                  /destinations/international/; it was pre-existing, not new.
                  sr-only because a visible heading here would just repeat the
                  h1 above it. */}
              <h2 className="sr-only">{`${config.title} destinations`}</h2>
              <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {destinations.map((destination, index) => (
                  <li key={destination.slug}>
                    <DestinationCard destination={destination} eager={index < 4} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="rounded-2xl border border-dashed border-line p-10 text-center text-ink-muted">
              No destinations are published in this region yet.
            </p>
          )}
        </div>
      </Section>

      <Section tone="mist" className="pt-0">
        <div className="container-page">
          <EnquiryCta />
        </div>
      </Section>
    </>
  );
}
