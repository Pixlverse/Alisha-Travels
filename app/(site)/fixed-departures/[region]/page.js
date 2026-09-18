import { notFound } from "next/navigation";

import CalendarTabs from "@/components/site/CalendarTabs";
import DepartureCalendar from "@/components/site/DepartureCalendar";
import EnquiryCta from "@/components/site/EnquiryCta";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { getDeparturesSplit } from "@/lib/data/departures";
import { getDestinations } from "@/lib/data/destinations";
import { getServices } from "@/lib/data/content";

export const revalidate = 600;

/**
 * The International and Domestic calendars from the navigation specification.
 * Both are the same view over the Departure collection, filtered by the region
 * of the package's destination.
 */
const REGIONS = {
  international: {
    label: "International",
    heading: "International group departures.",
    lead: "Thailand, Malaysia, Azerbaijan and Europe on set dates — visas, group airfare and a tour manager included, so the only thing you organise is your leave.",
    metaTitle: "International Fixed Departures & Group Tours",
    metaDescription:
      "Upcoming international group departures from Kerala — Thailand, Malaysia, Azerbaijan and Europe on set dates at set prices, with visas, flights and a tour manager.",
    empty:
      "There are no international group departures on sale right now. Tell us where and roughly when, and we will either open a group or build it privately.",
  },
  domestic: {
    label: "Domestic",
    heading: "Group departures within India.",
    lead: "Ladakh, Kashmir, the Andamans and the hill stations on fixed dates. No visas to worry about, and an itinerary paced by people who have run it before.",
    metaTitle: "Domestic Fixed Departures & Group Tours",
    metaDescription:
      "Upcoming domestic group departures from Kerala — Ladakh, Kashmir, Andaman and more on set dates at set prices, with flights, hotels and a tour manager.",
    empty:
      "There are no domestic group departures on sale right now. Tell us where and roughly when, and we will either open a group or build it privately.",
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
    alternates: { canonical: `/fixed-departures/${region}/` },
  };
}

export default async function RegionCalendarPage({ params }) {
  const { region } = await params;
  const config = REGIONS[region];
  if (!config) notFound();

  // destinations and services feed the enquiry form each card can open in
  // place — see DepartureCard.
  const [{ upcoming, past }, all, other, destinations, services] = await Promise.all([
    getDeparturesSplit({ region }),
    getDeparturesSplit(),
    getDeparturesSplit({ region: region === "international" ? "domestic" : "international" }),
    getDestinations(),
    getServices(),
  ]);

  return (
    <>
      <PageHeader
        eyebrow={`${config.label} · ${upcoming.length} upcoming`}
        title={config.heading}
        lead={config.lead}
        breadcrumbs={[
          { label: "Fixed Departures", href: "/fixed-departures/" },
          { label: `${config.label} Calendar` },
        ]}
      >
        <CalendarTabs
          active={region}
          counts={{
            all: all.upcoming.length,
            [region]: upcoming.length,
            [region === "international" ? "domestic" : "international"]: other.upcoming.length,
          }}
        />
      </PageHeader>

      <Section className="py-6 sm:py-7">
        <div className="container-page">
          <DepartureCalendar
            upcoming={upcoming}
            past={past}
            emptyMessage={config.empty}
            destinations={destinations}
            services={services}
          />
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
