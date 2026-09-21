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
  title: "Family Tour Packages from Kerala",
  description: "Family holiday packages to Dubai, Singapore, Kerala, Kashmir, Goa and Rajasthan — paced for children and grandparents, with flights, hotels and transfers arranged.",
  alternates: { canonical: "/packages/family/" },
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
    getPackages({ category: "family", limit: 200 }),
    getDestinations(),
    getCategoryPage("family"),
  ]);

  const breadcrumbs = [{ label: "Packages", href: "/packages/" }, { label: "Family" }];

  const listing = (
    <Section className="py-6 sm:py-7">
      <div className="container-page">
        <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-mist-100" />}>
          <PackagesBrowser
            packages={packages}
            destinations={destinations}
            lockedCategory="family"
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
        eyebrow={`Family · ${packages.length} ${packages.length === 1 ? "package" : "packages"}`}
        title="Family holidays that account for everyone travelling."
        lead="A toddler's nap times, a parent who cannot walk far, a teenager who wants a beach. Tell us who is coming and the itinerary is built around them, not around a coach schedule."
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
