import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Plus } from "lucide-react";

import ResourceFormShell from "@/components/admin/ResourceFormShell";
import ResourceRowActions from "@/components/admin/ResourceRowActions";
import StatusBadge from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import { requireAdmin } from "@/lib/auth";
import { getDocument, getRefOptions, listDocuments } from "@/lib/admin/crud";
import { getResource, resourceSections } from "@/lib/admin/resources";
import { departureAvailability } from "@/models/Departure";
import { formatDate, formatINR } from "@/lib/format";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { resource, id } = await params;
  const config = getResource(resource);
  if (!config) return {};
  const doc = await getDocument(resource, id);
  return { title: doc ? `${doc.name || doc.title || config.label}` : config.label };
}

export default async function EditResourcePage({ params }) {
  await requireAdmin();

  const { resource: resourceKey, id } = await params;
  const resource = getResource(resourceKey);
  if (!resource) notFound();

  const document = await getDocument(resourceKey, id);
  if (!document) notFound();

  const [refOptions, children] = await Promise.all([
    loadRefOptions(resource),
    resource.children
      ? listDocuments(resource.children.resource, {
          parent: { key: resource.children.foreignKey, value: id },
        })
      : Promise.resolve(null),
  ]);

  const title = document.name || document.title || document.caption || resource.label;

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Button asChild variant="ghost" size="sm" className="-ml-2">
        <Link href={`/admin/${resourceKey}/`}>
          <ArrowLeft className="size-4" aria-hidden="true" />
          {resource.plural}
        </Link>
      </Button>

      <header>
        <h1 className="text-2xl font-bold tracking-tight text-ink">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Editing a {resource.label.toLowerCase()} · last updated{" "}
          {new Date(document.updatedAt || document.createdAt).toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </p>
      </header>

      <ResourceFormShell
        resourceKey={resourceKey}
        label={resource.label}
        sections={resourceSections(resource)}
        fields={resource.fields}
        initial={document}
        refOptions={refOptions}
        previewPath={resource.previewPath ? resource.previewPath(document) : null}
      />

      {/*
        Nested children, shown inline. A destination has packages; a package has
        departures. The brief asks for that nesting to be visible rather than
        leaving an editor to work out the relationship across three flat tables.
      */}
      {children ? (
        <section className="rounded-xl border border-line bg-white p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-bold text-ink">
                {resource.children.label} on this {resource.label.toLowerCase()}
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {children.length} in total. Past dates stay here deliberately — they are shown on
                the site as history rather than deleted.
              </p>
            </div>
            <Button asChild size="sm" variant="outline">
              <Link href={`/admin/${resource.children.resource}/new/?package=${id}`}>
                <Plus className="size-4" aria-hidden="true" />
                Add
              </Link>
            </Button>
          </div>

          {children.length ? (
            <ul className="mt-4 divide-y divide-line rounded-lg border border-line">
              {children.map((child) => {
                const availability = departureAvailability(child);
                return (
                  <li
                    key={child._id}
                    className="flex items-center gap-2 pr-2 transition-colors hover:bg-mist-50"
                  >
                    <Link
                      href={`/admin/${resource.children.resource}/${child._id}/`}
                      className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-1 p-3"
                    >
                      <span className="min-w-0 flex-1 font-medium text-ink">
                        {formatDate(child.departureDate)}
                        {child.boardingCity ? (
                          <span className="ml-2 text-xs font-normal text-muted-foreground">
                            from {child.boardingCity}
                          </span>
                        ) : null}
                      </span>
                      <span className="text-sm text-ink-soft">{formatINR(child.price)}</span>
                      <span className="w-24 text-right text-xs text-muted-foreground">
                        {child.seatsRemaining}/{child.seatsTotal} seats
                      </span>
                      <span className="w-24 text-right">
                        <StatusBadge status={availability} />
                      </span>
                    </Link>

                    {/* The nested list had no way to remove a row either — you
                        had to open the child and scroll to the foot of its
                        form. */}
                    <ResourceRowActions
                      resourceKey={resource.children.resource}
                      id={child._id}
                      label="departure"
                      name={`the ${formatDate(child.departureDate)} departure`}
                      note="This removes the departure date permanently. It disappears from the Fixed Departures calendar immediately. Past dates are kept on purpose — the site shows them as history."
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mt-4 rounded-lg border border-dashed border-line p-6 text-center text-sm text-muted-foreground">
              No {resource.children.label.toLowerCase()} yet. Add a date and this package appears in
              the Fixed Departures calendar.
            </p>
          )}
        </section>
      ) : null}
    </div>
  );
}

async function loadRefOptions(resource) {
  const needed = [...new Set(resource.fields.filter((f) => f.type === "ref").map((f) => f.optionsFrom))];
  const entries = await Promise.all(needed.map(async (key) => [key, await getRefOptions(key)]));
  return Object.fromEntries(entries);
}
