import CalendarTabs from "@/components/site/CalendarTabs";
import DepartureCalendar from "@/components/site/DepartureCalendar";
import EnquiryCta from "@/components/site/EnquiryCta";
import JsonLd from "@/components/site/JsonLd";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { getDeparturesSplit } from "@/lib/data/departures";

import { breadcrumbSchema } from "@/lib/seo/schema";

export const revalidate = 600;

export const metadata = {
  title: "Fixed Departures — Upcoming Group Tours",
  description:
    "Group departures on set dates at set prices, with itineraries already tested and a tour manager travelling with the group. Upcoming international and domestic departures from Kerala.",
  alternates: { canonical: "/fixed-departures/" },
};

export default async function FixedDeparturesPage() {
  const [{ upcoming, past }, international, domestic] = await Promise.all([
    getDeparturesSplit(),
    getDeparturesSplit({ region: "international" }),
    getDeparturesSplit({ region: "domestic" }),
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ label: "Fixed Departures" }])} />

      <PageHeader
        eyebrow={`${upcoming.length} upcoming ${upcoming.length === 1 ? "departure" : "departures"}`}
        title="Set dates, set prices, and someone travelling with you."
        lead="Curated group departures with itineraries we have already run. Couples, senior travellers and women's groups travel with us often — and first-time flyers tell us it is the easiest way to start."
        breadcrumbs={[{ label: "Fixed Departures" }]}
      >
        <CalendarTabs
          active="all"
          counts={{
            all: upcoming.length,
            international: international.upcoming.length,
            domestic: domestic.upcoming.length,
          }}
        />
      </PageHeader>

      <Section className="py-6 sm:py-7">
        <div className="container-page">
          <DepartureCalendar upcoming={upcoming} past={past} />
        </div>
      </Section>

      <Section tone="mist" className="pt-0">
        <div className="container-page">
          <EnquiryCta
            title="Travelling on dates that aren't listed?"
          />
        </div>
      </Section>
    </>
  );
}
