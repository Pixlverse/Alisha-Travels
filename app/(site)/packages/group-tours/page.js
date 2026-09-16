import { Suspense } from "react";

import EnquiryCta from "@/components/site/EnquiryCta";
import PackagesBrowser from "@/components/site/PackagesBrowser";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { getDestinations } from "@/lib/data/destinations";
import { getPackages } from "@/lib/data/packages";

export const revalidate = 600;

export const metadata = {
  title: "Group Tour Packages & Fixed Departures",
  description: "Group tours and fixed departures from Kerala to Thailand, Ladakh, Malaysia, Azerbaijan and Europe — set dates, set prices and a tour manager with the group.",
  alternates: { canonical: "/packages/group-tours/" },
};

/**
 * A category view over the Package collection — not a separate content type.
 * PackagesBrowser is rendered with the category locked, so its control is
 * hidden while destination, budget and duration stay available.
 */
export default async function CategoryPage() {
  const [packages, destinations] = await Promise.all([
    getPackages({ category: "group-tours", limit: 200 }),
    getDestinations(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={`Group Tours · ${packages.length} ${packages.length === 1 ? "package" : "packages"}`}
        title={"Group departures on set dates, at set prices."}
        lead="Itineraries already tested, a tour manager travelling with you, and no organising to do yourself. Couples, senior travellers and first-time flyers tell us this is the easiest way to start."
        breadcrumbs={[
          { label: "Packages", href: "/packages/" },
          { label: "Group Tours" },
        ]}
      />

      <Section className="py-6 sm:py-7">
        <div className="container-page">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-mist-100" />}>
            <PackagesBrowser
              packages={packages}
              destinations={destinations}
              lockedCategory="group-tours"
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
