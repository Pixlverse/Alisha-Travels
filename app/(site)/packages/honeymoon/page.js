import { Suspense } from "react";

import CategoryPageBody from "@/components/site/CategoryPageBody";
import EnquiryCta from "@/components/site/EnquiryCta";
import PackagesBrowser from "@/components/site/PackagesBrowser";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { getCategoryPage } from "@/lib/data/content";
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
 *
 * The page the client wrote for this category sits around that listing, and
 * comes from the CategoryPage collection. Where there is no document for a
 * category, the original heading-and-grid layout below still renders, so a
 * category the client has not written yet is never a broken page.
 */
export default async function CategoryPage() {
  const [packages, destinations, page] = await Promise.all([
    getPackages({ category: "honeymoon", limit: 200 }),
    getDestinations(),
    getCategoryPage("honeymoon"),
  ]);

  const breadcrumbs = [{ label: "Packages", href: "/packages/" }, { label: "Honeymoon" }];

  const listing = (
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
  );

  if (page) {
    return (
      <CategoryPageBody page={page} breadcrumbs={breadcrumbs}>
        {listing}
      </CategoryPageBody>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow={`Honeymoon · ${packages.length} ${packages.length === 1 ? "package" : "packages"}`}
        title="Honeymoons, planned so neither of you has to."
        lead="The trips couples come back and thank us for by name. Private transfers where it matters, a room worth the upgrade, and an itinerary with enough space left in it to do nothing."
        breadcrumbs={breadcrumbs}
      />

      {listing}

      <Section tone="mist" className="pt-0">
        <div className="container-page">
          <EnquiryCta />
        </div>
      </Section>
    </>
  );
}
