import Link from "next/link";
import { notFound } from "next/navigation";
import { Plus, Search } from "lucide-react";

import ResourceRowActions from "@/components/admin/ResourceRowActions";
import StatusBadge from "@/components/admin/StatusBadge";
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
import { requireAdmin } from "@/lib/auth";
import { listDocuments } from "@/lib/admin/crud";
import { getResource, RESOURCE_KEYS } from "@/lib/admin/resources";
import { departureAvailability } from "@/models/Departure";
import { formatDate, formatINR } from "@/lib/format";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return RESOURCE_KEYS.map((resource) => ({ resource }));
}

export async function generateMetadata({ params }) {
  const { resource } = await params;
  const config = getResource(resource);
  return { title: config?.plural || "Content" };
}

/**
 * The list view for every content collection.
 *
 * `enquiries`, `login` and `users` are static segments and take precedence
 * over this dynamic one, so they keep their own purpose-built pages.
 */
export default async function ResourceListPage({ params, searchParams }) {
  await requireAdmin();

  const { resource: resourceKey } = await params;
  const resource = getResource(resourceKey);
  if (!resource) notFound();

  const query = await searchParams;
  const search = query?.search || "";

  const documents = await listDocuments(resourceKey, { search });

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold tracking-tight text-ink">{resource.plural}</h1>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {resource.description}
          </p>
        </div>
        <Button asChild>
          <Link href={`/admin/${resourceKey}/new/`}>
            <Plus className="size-4" aria-hidden="true" />
            New {resource.label.toLowerCase()}
          </Link>
        </Button>
      </header>

      {resource.searchFields?.length ? (
        <form className="flex max-w-md gap-2">
          <Input name="search" defaultValue={search} placeholder={`Search ${resource.plural.toLowerCase()}…`} />
          <Button type="submit" variant="outline">
            <Search className="size-4" aria-hidden="true" />
            <span className="sr-only">Search</span>
          </Button>
          {search ? (
            <Button asChild variant="ghost">
              <Link href={`/admin/${resourceKey}/`}>Clear</Link>
            </Button>
          ) : null}
        </form>
      ) : null}

      {documents.length ? (
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                {resource.listColumns.map((column) => (
                  <TableHead
                    key={column.key}
                    className={column.align === "right" ? "text-right" : undefined}
                  >
                    {column.label}
                  </TableHead>
                ))}
                {/* Actions. Editing used to be "the first column happens to be
                    a link" and deleting was buried at the foot of the edit
                    form, which read as a dashboard you could not change. */}
                <TableHead className="w-px text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc._id}>
                  {resource.listColumns.map((column) => (
                    <TableCell
                      key={column.key}
                      className={cn(column.align === "right" && "text-right")}
                    >
                      {column.primary ? (
                        <Link
                          href={`/admin/${resourceKey}/${doc._id}/`}
                          className="font-semibold text-ink hover:text-brand-700 hover:underline"
                        >
                          {renderCell(column, doc) || "Untitled"}
                        </Link>
                      ) : (
                        <span className="text-sm text-ink-soft">{renderCell(column, doc)}</span>
                      )}
                    </TableCell>
                  ))}

                  <TableCell className="text-right">
                    <ResourceRowActions
                      resourceKey={resourceKey}
                      id={doc._id}
                      label={resource.label}
                      name={rowLabel(resource, doc)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-line bg-white px-6 py-16 text-center">
          <h2 className="font-semibold text-ink">
            {search ? "Nothing matches that search." : `No ${resource.plural.toLowerCase()} yet.`}
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
            {search
              ? "Try a shorter search term."
              : `Create the first one, or run \`npm run seed\` to load the starter content.`}
          </p>
          {!search ? (
            <Button asChild className="mt-6">
              <Link href={`/admin/${resourceKey}/new/`}>
                <Plus className="size-4" aria-hidden="true" />
                New {resource.label.toLowerCase()}
              </Link>
            </Button>
          ) : null}
        </div>
      )}
    </div>
  );
}

/**
 * What the delete dialog calls this row. The primary column is the record's
 * name on every collection here; departures have none, so they fall back to
 * their date, and anything else to the resource label.
 */
function rowLabel(resource, doc) {
  const primary = resource.listColumns.find((column) => column.primary);
  const value = primary
    ? primary.key.split(".").reduce((current, part) => current?.[part], doc)
    : null;

  // Departures are titled by their date, and after serialisation that value is
  // an ISO string — which would put "2026-01-15T00:00:00.000Z" in the dialog.
  if (value && primary?.format === "date") {
    return `the ${formatDate(value)} departure`;
  }
  if (typeof value === "string" && value.trim()) return value;
  return `this ${resource.label.toLowerCase()}`;
}

/** Resolves "destination.name" style keys and applies the column's format. */
function renderCell(column, doc) {
  const raw = column.key.split(".").reduce((value, part) => value?.[part], doc);

  switch (column.format) {
    case "inr":
      return raw ? formatINR(raw) : "-";
    case "date":
      return raw ? formatDate(raw) : "-";
    case "status":
      return <StatusBadge status={raw || "draft"} />;
    case "availability":
      // Was three ad-hoc text colours here. Same badge as every other state in
      // the dashboard now, so "upcoming" and "active" look alike on purpose.
      return <StatusBadge status={departureAvailability(doc)} />;
    default:
      return raw === undefined || raw === null || raw === "" ? "-" : String(raw);
  }
}
