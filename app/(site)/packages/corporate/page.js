import { Suspense } from "react";

import EnquiryCta from "@/components/site/EnquiryCta";
import PackagesBrowser from "@/components/site/PackagesBrowser";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { getDestinations } from "@/lib/data/destinations";
import { getPackages } from "@/lib/data/packages";

export const revalidate = 600;

export const metadata = {
  title: "Corporate & MICE Travel Packages",
  description: "Corporate travel, conferences, dealer meets and incentive trips for 40 to 150 delegates — block visas, group airfare, conference facilities and one dedicated coordinator.",
  alternates: { canonical: "/packages/corporate/" },
};

/**
 * A category view over the Package collection — not a separate content type.
 * PackagesBrowser is rendered with the category locked, so its control is
 * hidden while destination, budget and duration stay available.
 */
export default async function CategoryPage() {
  const [packages, destinations] = await Promise.all([
    getPackages({ category: "corporate", limit: 200 }),
    getDestinations(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={`Corporate & MICE · ${packages.length} ${packages.length === 1 ? "package" : "packages"}`}
        title={"Conferences, dealer meets and incentive trips."}
        lead="We have delivered single events for groups of over a hundred, with one coordinator from the first quote to the last boarding pass. Block visas, group airfare, conference facilities and a GST invoice at the end of it."
        breadcrumbs={[
          { label: "Packages", href: "/packages/" },
          { label: "Corporate & MICE" },
        ]}
      />

      <Section className="py-6 sm:py-7">
        <div className="container-page">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-mist-100" />}>
            <PackagesBrowser
              packages={packages}
              destinations={destinations}
              lockedCategory="corporate"
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
