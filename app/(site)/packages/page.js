import { Suspense } from "react";

import EnquiryCta from "@/components/site/EnquiryCta";
import PackagesBrowser from "@/components/site/PackagesBrowser";
import JsonLd from "@/components/site/JsonLd";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { getDestinations } from "@/lib/data/destinations";
import { getPackages } from "@/lib/data/packages";
import { PACKAGE_CATEGORIES } from "@/lib/site";
import Link from "next/link";

import { breadcrumbSchema } from "@/lib/seo/schema";

export const revalidate = 600;

export const metadata = {
  title: "Tour Packages - Honeymoon, Family, Group & Corporate",
  description:
    "Every package Alisha Tours & Travels has built and priced - filter by destination, budget, duration and the kind of trip. Fixed group departures and customised itineraries, all in INR.",
  alternates: { canonical: "/packages/" },
};

export default async function PackagesPage() {
  const [packages, destinations] = await Promise.all([
    getPackages({ limit: 200 }),
    getDestinations(),
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ label: "Packages" }])} />

      <PageHeader
        eyebrow={`${packages.length} ${packages.length === 1 ? "package" : "packages"}`}
        title="Trips we have already built, priced and tested."
        lead="Filter by where you want to go, what kind of trip it is, how long you have and what you want to spend. Every one of these can be rebuilt around your dates and your family - ask, and we will requote."
        breadcrumbs={[{ label: "Packages" }]}
      >
        <nav aria-label="Package categories" className="mt-8 flex flex-wrap gap-2">
          {PACKAGE_CATEGORIES.filter((c) => c.slug !== "customized").map((category) => (
            <Link
              key={category.slug}
              href={category.href}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              {category.label}
            </Link>
          ))}
        </nav>
      </PageHeader>

      <Section className="py-6 sm:py-7">
        <div className="container-page">
          {/*
            useSearchParams() needs a Suspense boundary so the rest of the page
            can still be prerendered — the browser reads the hero card's deep
            links (?destination=&category=&minPrice=) out of the URL on mount.
          */}
          <Suspense fallback={<BrowserFallback />}>
            <PackagesBrowser packages={packages} destinations={destinations} />
          </Suspense>
        </div>
      </Section>

      <Section tone="mist" className="pt-0">
        <div className="container-page">
          <EnquiryCta
            title="Not quite what you had in mind?"
          />
        </div>
      </Section>
    </>
  );
}

/** Shaped like the browser it stands in for: filter rail, then the grid. */
function BrowserFallback() {
  return (
    <div className="lg:grid lg:grid-cols-[16.5rem_minmax(0,1fr)] lg:items-start lg:gap-8">
      <div className="hidden h-[32rem] animate-pulse rounded-3xl border border-line bg-mist-50 lg:block" />
      <div>
        <div className="h-10 animate-pulse rounded-full bg-mist-100" />
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <li key={index} className="h-96 animate-pulse rounded-3xl bg-mist-100" />
          ))}
        </ul>
      </div>
    </div>
  );
}
