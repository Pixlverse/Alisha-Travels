import { Suspense } from "react";

import EnquiryCta from "@/components/site/EnquiryCta";
import PackagesBrowser from "@/components/site/PackagesBrowser";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
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
 */
export default async function CategoryPage() {
  const [packages, destinations] = await Promise.all([
    getPackages({ category: "family", limit: 200 }),
    getDestinations(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={`Family · ${packages.length} ${packages.length === 1 ? "package" : "packages"}`}
        title={"Family holidays that account for everyone travelling."}
        lead="A toddler's nap times, a parent who cannot walk far, a teenager who wants a beach. Tell us who is coming and the itinerary is built around them, not around a coach schedule."
        breadcrumbs={[
          { label: "Packages", href: "/packages/" },
          { label: "Family" },
        ]}
      />

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

      <Section tone="mist" className="pt-0">
        <div className="container-page">
          <EnquiryCta />
        </div>
      </Section>
    </>
  );
}
