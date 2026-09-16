import { Suspense } from "react";

import EnquiryCta from "@/components/site/EnquiryCta";
import PackagesBrowser from "@/components/site/PackagesBrowser";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { getDestinations } from "@/lib/data/destinations";
import { getPackages } from "@/lib/data/packages";

export const revalidate = 600;

export const metadata = {
  title: "Honeymoon Packages from Kerala",
  description: "Honeymoon packages to the Maldives, Bali, Dubai, Andaman and more — private villas, transfers and itineraries built around the two of you. Priced in INR from Kerala.",
  alternates: { canonical: "/packages/honeymoon/" },
};

/**
 * A category view over the Package collection — not a separate content type.
 * PackagesBrowser is rendered with the category locked, so its control is
 * hidden while destination, budget and duration stay available.
 */
export default async function CategoryPage() {
  const [packages, destinations] = await Promise.all([
    getPackages({ category: "honeymoon", limit: 200 }),
    getDestinations(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={`Honeymoon · ${packages.length} ${packages.length === 1 ? "package" : "packages"}`}
        title={"Honeymoons, planned so neither of you has to."}
        lead="The trips couples come back and thank us for by name. Private transfers where it matters, a room worth the upgrade, and an itinerary with enough space left in it to do nothing."
        breadcrumbs={[
          { label: "Packages", href: "/packages/" },
          { label: "Honeymoon" },
        ]}
      />

      <Section className="py-6 sm:py-7">
        <div className="container-page">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-mist-100" />}>
            <PackagesBrowser
              packages={packages}
              destinations={destinations}
              lockedCategory="honeymoon"
            />
          </Suspense>
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
