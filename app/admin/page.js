import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Inbox,
  MapPin,
  Package as PackageIcon,
  TriangleAlert,
} from "lucide-react";

import StatusBadge, { StatusDot } from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import { requireSession, isAdmin } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Departure, Destination, Enquiry, GalleryItem, Package, Service, Testimonial } from "@/models";
import { departureAvailability } from "@/models/Departure";
import { getEnquiryCounts } from "@/lib/data/enquiries";
import { ENQUIRY_STATUS_LABELS } from "@/lib/data/enquiries";
import { plain } from "@/lib/data/_helpers";

export const dynamic = "force-dynamic";
export const metadata = { title: "Overview" };

/**
 * Dashboard overview.
 *
 * Deliberately not an analytics page — that is out of scope for this phase and
 * GTM covers traffic. What it shows is the two things somebody opening this at
 * 9am actually needs: leads waiting to be worked, and content that has gone
 * stale. The "departures with no upcoming dates" tile exists specifically
 * because the legacy site's defining failure was advertising tours that had
 * left over a year earlier.
 */
export default async function AdminOverviewPage() {
  const session = await requireSession();
  await connectToDatabase();

  const [counts, recent, contentCounts, staleDepartures] = await Promise.all([
    getEnquiryCounts(),
    Enquiry.find({}).sort({ createdAt: -1 }).limit(6).lean(),
    Promise.all([
      Destination.countDocuments({ status: "active" }),
      Package.countDocuments({ status: "active" }),
      Service.countDocuments({ status: "active" }),
      Testimonial.countDocuments({ status: "active" }),
      GalleryItem.countDocuments({ status: "active" }),
    ]),
    Departure.find({ status: "active" }).select("departureDate seatsTotal seatsRemaining").lean(),
  ]);

  const [destinations, packages, services, testimonials, gallery] = contentCounts;
  const upcoming = staleDepartures.filter((d) => departureAvailability(d) !== "expired").length;
  const expired = staleDepartures.length - upcoming;

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-ink">
          Good to see you, {session.name.split(" ")[0]}.
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {counts.new
            ? `${counts.new} new ${counts.new === 1 ? "enquiry is" : "enquiries are"} waiting.`
            : "No new enquiries waiting."}
        </p>
      </header>

      {/* Pipeline */}
      <section aria-labelledby="pipeline">
        <h2 id="pipeline" className="text-sm font-bold text-ink">
          Lead pipeline
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {["new", "contacted", "quoted", "confirmed", "lost"].map((status) => (
            <Link
              key={status}
              href={`/admin/enquiries/?status=${status}`}
              className="rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand-300"
            >
              <span className="block text-2xl font-bold text-ink">{counts[status]}</span>
              {/* The pipeline's own colour on each tile, so the dashboard and
                  the enquiry list are read the same way. */}
              <span className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
                <StatusDot status={status} />
                {ENQUIRY_STATUS_LABELS[status]}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Things that need attention */}
      {upcoming === 0 && staleDepartures.length > 0 ? (
        <section className="flex flex-wrap items-center gap-4 rounded-xl border border-sun/40 bg-sun/10 p-4">
          <TriangleAlert className="size-5 shrink-0 text-sun-deep" aria-hidden="true" />
          <p className="min-w-[16rem] flex-1 text-sm text-ink">
            <strong className="font-semibold">Every departure date has passed.</strong> The Fixed
            Departures calendar still shows them as history, but there is nothing on sale. Add new
            dates so the page has something to book.
          </p>
          {isAdmin(session) ? (
            <Button asChild size="sm">
              <Link href="/admin/departures/">Add departures</Link>
            </Button>
          ) : null}
        </section>
      ) : null}

      {/* Recent enquiries */}
      <section aria-labelledby="recent">
        <div className="flex items-center justify-between gap-4">
          <h2 id="recent" className="text-sm font-bold text-ink">
            Latest enquiries
          </h2>
          <Button asChild variant="ghost" size="sm">
            <Link href="/admin/enquiries/">
              View all
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {recent.length ? (
          <ul className="mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line bg-white">
            {plain(recent).map((enquiry) => (
              <li key={enquiry._id}>
                <Link
                  href={`/admin/enquiries/${enquiry._id}/`}
                  className="flex flex-wrap items-center gap-x-4 gap-y-1 p-4 transition-colors hover:bg-mist-50"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-ink">{enquiry.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {enquiry.packageTitle ||
                        enquiry.destinationName ||
                        enquiry.serviceType ||
                        "General enquiry"}{" "}
                      · {enquiry.phone}
                    </span>
                  </span>
                  <StatusBadge status={enquiry.status} />
                  <span className="w-20 text-right text-xs text-muted-foreground">
                    {new Date(enquiry.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                    })}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 rounded-xl border border-dashed border-line bg-white px-6 py-12 text-center text-sm text-muted-foreground">
            <Inbox className="mx-auto mb-3 size-7" aria-hidden="true" />
            Nothing yet. Enquiries appear here the moment they are submitted.
          </p>
        )}
      </section>

      {/* Content at a glance */}
      {isAdmin(session) ? (
        <section aria-labelledby="content">
          <h2 id="content" className="text-sm font-bold text-ink">
            Content
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Tile href="/admin/destinations/" icon={MapPin} label="Destinations" value={destinations} />
            <Tile href="/admin/packages/" icon={PackageIcon} label="Packages" value={packages} />
            <Tile
              href="/admin/departures/"
              icon={CalendarClock}
              label="Departures"
              value={upcoming}
              note={expired ? `${expired} past` : undefined}
            />
            <Tile href="/admin/services/" icon={Inbox} label="Services" value={services} />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Plus {testimonials} testimonials and {gallery} gallery photographs.
          </p>
        </section>
      ) : (
        <p className="rounded-xl border border-line bg-white p-4 text-sm text-muted-foreground">
          You are signed in as <strong className="font-semibold text-ink">staff</strong>. You can
          view and work every enquiry; content editing is restricted to admin accounts.
        </p>
      )}
    </div>
  );
}

function Tile({ href, icon: Icon, label, value, note }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand-300"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xl font-bold text-ink">{value}</span>
        <span className="block text-xs text-muted-foreground">
          {label}
          {note ? ` · ${note}` : ""}
        </span>
      </span>
    </Link>
  );
}
