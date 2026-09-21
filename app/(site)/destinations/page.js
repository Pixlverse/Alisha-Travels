import Link from "next/link";
import { ArrowRight } from "lucide-react";

import DestinationCard from "@/components/site/DestinationCard";
import DestinationRequest from "@/components/site/DestinationRequest";
import EnquiryCta from "@/components/site/EnquiryCta";
import JsonLd from "@/components/site/JsonLd";
import PageHeader from "@/components/site/PageHeader";
import { Section, SectionHeading } from "@/components/site/Section";
import { getDestinationsByRegion } from "@/lib/data/destinations";

import { breadcrumbSchema } from "@/lib/seo/schema";

export const revalidate = 600;

export const metadata = {
  title: "Destinations - Places We Send Travellers",
  description:
    "Every destination Alisha Tours & Travels arranges holidays to, international and domestic, each with attractions, the best time to travel, FAQs and the packages that go there.",
  alternates: { canonical: "/destinations/" },
};

/**
 * The destinations index.
 *
 * On the legacy site this page was dead tiles — an image and a heading with no
 * link and no page behind any of them. Every one of those high-intent landing
 * pages existed only as a JPEG, which the audit called the site's single
 * biggest missed opportunity. Every card here goes somewhere.
 *
 * NOTE: the size of the destination list is not published anywhere on this
 * site, at the client's instruction — not as a figure, not spelled out, and
 * not derived from the collection either. See the note in the region listing.
 */
export default async function DestinationsPage() {
  const { international, domestic } = await getDestinationsByRegion();

  const groups = [
    {
      region: "international",
      title: "International",
      href: "/destinations/international/",
      lead: "Ordered by what travellers from Kerala actually ask for - Dubai, Singapore, Thailand and the Maldives lead, because that is the order the enquiries arrive in.",
      destinations: international,
    },
    {
      region: "domestic",
      title: "Domestic",
      href: "/destinations/domestic/",
      lead: "Kerala is home, so we are most useful on it. The rest of India we sell only where we have sent travellers and heard back.",
      destinations: domestic,
    },
  ];

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ label: "Destinations" }])} />

      {/* No eyebrow: it read "DESTINATIONS" directly under a breadcrumb trail
          ending in "Destinations", so it cost a line of height to say the word
          twice. */}
      <PageHeader
        title="Every place we send people, and an honest opinion about each one."
        lead="We don't sell a destination we haven't sent people to and heard back from. Every page below carries what is actually worth doing, when to go, and what a trip really costs."
        breadcrumbs={[{ label: "Destinations" }]}
      />

      {groups.map((group, index) => (
        <Section key={group.region} tone={index % 2 === 0 ? "default" : "mist"}>
          <div className="container-page">
            <SectionHeading
              title={group.title}
              link={group.href}
              linkLabel={`All ${group.title.toLowerCase()}`}
            />

            {group.destinations.length ? (
              <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.destinations.map((destination, cardIndex) => (
                  <li key={destination.slug}>
                    <DestinationCard
                      destination={destination}
                      eager={index === 0 && cardIndex < 4}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-10 rounded-2xl border border-dashed border-line p-8 text-center text-ink-muted">
                No {group.title.toLowerCase()} destinations are published yet.
              </p>
            )}
          </div>
        </Section>
      ))}

      <Section tone="default" className="pt-0">
        <div className="container-page">
          <DestinationRequest />
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
