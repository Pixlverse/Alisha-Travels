import Link from "next/link";
import { Download, Filter, Inbox, Mail, Phone } from "lucide-react";

import StatusBadge from "@/components/admin/StatusBadge";
import StatusSelect from "@/components/admin/StatusSelect";
import EnquiryRowActions from "./EnquiryRowActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { requireSession } from "@/lib/auth";
import { telHref } from "@/lib/site";
import {
  ENQUIRY_STATUS_LABELS,
  ENQUIRY_STATUS_VALUES,
  getEnquiries,
  getEnquiryCounts,
} from "@/lib/data/enquiries";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";
export const metadata = { title: "Enquiries" };

const PER_PAGE = 25;

/**
 * The lead list. This is the page staff live in.
 *
 * Filters are in the query string rather than component state so a filtered
 * view can be bookmarked, shared with a colleague, and — importantly — handed
 * straight to the CSV export, which reads the same parameters.
 */
export default async function EnquiriesPage({ searchParams }) {
  await requireSession();

  const params = await searchParams;
  const filters = {
    status: params?.status || "",
    channel: params?.channel || "",
    search: params?.search || "",
    from: params?.from || "",
    to: params?.to || "",
  };
  const page = Math.max(1, Number(params?.page) || 1);

  const [{ enquiries, total, pages }, counts] = await Promise.all([
    getEnquiries(filters, { page, perPage: PER_PAGE }),
    getEnquiryCounts(),
  ]);

  const query = (patch) => {
    const next = new URLSearchParams();
    for (const [key, value] of Object.entries({ ...filters, ...patch })) {
      if (value) next.set(key, value);
    }
    const string = next.toString();
    return string ? `?${string}` : "";
  };

  const exportQuery = new URLSearchParams(
    Object.entries(filters).filter(([, value]) => value)
  ).toString();

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-ink">Enquiries</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {total} {total === 1 ? "enquiry" : "enquiries"} matching this view · {counts.new} new
            overall
          </p>
        </div>

        <Button asChild variant="outline">
          <a href={`/api/admin/enquiries/export/${exportQuery ? `?${exportQuery}` : ""}`}>
            <Download className="size-4" aria-hidden="true" />
            Export CSV
          </a>
        </Button>
      </header>

      {/* Status pipeline */}
      <nav aria-label="Filter by status" className="flex flex-wrap gap-2">
        <FilterChip href={query({ status: "", page: "" })} active={!filters.status}>
          All <span className="ml-1.5 opacity-60">{counts.total}</span>
        </FilterChip>
        {ENQUIRY_STATUS_VALUES.map((status) => (
          <FilterChip
            key={status}
            href={query({ status, page: "" })}
            active={filters.status === status}
          >
            {ENQUIRY_STATUS_LABELS[status]}
            <span className="ml-1.5 opacity-60">{counts[status]}</span>
          </FilterChip>
        ))}
      </nav>

      {/* Search and date range — a GET form, so the URL stays the source of truth */}
      <form className="flex flex-wrap items-end gap-3 rounded-xl border border-line bg-white p-4">
        <label className="min-w-[14rem] flex-1">
          <span className="mb-1.5 block text-xs font-semibold text-ink">Search</span>
          <Input
            name="search"
            defaultValue={filters.search}
            placeholder="Name, phone, e-mail, destination…"
          />
        </label>
        <label>
          <span className="mb-1.5 block text-xs font-semibold text-ink">From</span>
          <Input type="date" name="from" defaultValue={filters.from} />
        </label>
        <label>
          <span className="mb-1.5 block text-xs font-semibold text-ink">To</span>
          <Input type="date" name="to" defaultValue={filters.to} />
        </label>
        {filters.status ? <input type="hidden" name="status" value={filters.status} /> : null}
        <Button type="submit">
          <Filter className="size-4" aria-hidden="true" />
          Apply
        </Button>
        {filters.search || filters.from || filters.to ? (
          <Button asChild variant="ghost">
            <Link href={query({ search: "", from: "", to: "", page: "" })}>Clear</Link>
          </Button>
        ) : null}
      </form>

      {/* Results */}
      {enquiries.length ? (
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Received</TableHead>
                <TableHead>Who</TableHead>
                <TableHead>About</TableHead>
                <TableHead>Channel</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-px text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {enquiries.map((enquiry) => (
                <TableRow key={enquiry._id}>
                  <TableCell className="whitespace-nowrap align-top text-xs text-muted-foreground">
                    {new Date(enquiry.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                    })}
                    <span className="block">
                      {new Date(enquiry.createdAt).toLocaleTimeString("en-IN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </TableCell>

                  <TableCell className="align-top">
                    <Link
                      href={`/admin/enquiries/${enquiry._id}/`}
                      className="font-semibold text-ink hover:text-brand-700 hover:underline"
                    >
                      {enquiry.name}
                    </Link>
                    <span className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-muted-foreground">
                      <a href={telHref(enquiry.phone)} className="inline-flex items-center gap-1 hover:text-brand-700">
                        <Phone className="size-3" aria-hidden="true" />
                        {enquiry.phone}
                      </a>
                      {enquiry.email ? (
                        <a href={`mailto:${enquiry.email}`} className="inline-flex items-center gap-1 hover:text-brand-700">
                          <Mail className="size-3" aria-hidden="true" />
                          {enquiry.email}
                        </a>
                      ) : null}
                    </span>
                  </TableCell>

                  <TableCell className="max-w-[18rem] align-top text-sm">
                    <span className="block font-medium text-ink">
                      {enquiry.packageTitle ||
                        enquiry.destinationName ||
                        enquiry.serviceType ||
                        (enquiry.enquiryType === "tours" ? "Tours - not specified" : "Other services")}
                    </span>
                    {enquiry.message ? (
                      <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">
                        {enquiry.message}
                      </span>
                    ) : null}
                  </TableCell>

                  <TableCell className="align-top">
                    <span className="text-xs capitalize text-muted-foreground">
                      {enquiry.channel}
                    </span>
                    {enquiry.emailError ? (
                      <span
                        className="mt-0.5 block text-[0.625rem] font-semibold text-destructive"
                        title={enquiry.emailError}
                      >
                        e-mail failed
                      </span>
                    ) : null}
                  </TableCell>

                  <TableCell className="align-top">
                    <StatusSelect id={enquiry._id} status={enquiry.status} />
                  </TableCell>

                  <TableCell className="align-top text-right">
                    <EnquiryRowActions
                      id={enquiry._id}
                      name={enquiry.name}
                      editHref={`/admin/enquiries/${enquiry._id}/`}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-line bg-white px-6 py-16 text-center">
          <Inbox className="mx-auto size-8 text-muted-foreground" aria-hidden="true" />
          <h2 className="mt-4 font-semibold text-ink">
            {counts.total ? "Nothing matches those filters." : "No enquiries yet."}
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
            {counts.total
              ? "Try widening the date range or clearing the search."
              : "Every enquiry from the website lands here the moment it is submitted - before the visitor is handed off to WhatsApp or e-mail."}
          </p>
        </div>
      )}

      {/* Pagination */}
      {pages > 1 ? (
        <nav aria-label="Pagination" className="flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Page {page} of {pages}
          </p>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm" disabled={page <= 1}>
              <Link href={query({ page: String(page - 1) })} aria-disabled={page <= 1}>
                Previous
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" disabled={page >= pages}>
              <Link href={query({ page: String(page + 1) })} aria-disabled={page >= pages}>
                Next
              </Link>
            </Button>
          </div>
        </nav>
      ) : null}
    </div>
  );
}

function FilterChip({ href, active, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "border-brand-500 bg-brand-500 text-white"
          : "border-line bg-white text-ink-soft hover:border-brand-300 hover:text-brand-700"
      )}
    >
      {children}
    </Link>
  );
}
