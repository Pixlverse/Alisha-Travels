import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import ResourceFormShell from "@/components/admin/ResourceFormShell";
import { Button } from "@/components/ui/button";
import { requireAdmin } from "@/lib/auth";
import { getRefOptions } from "@/lib/admin/crud";
import { getResource, resourceSections } from "@/lib/admin/resources";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { resource } = await params;
  const config = getResource(resource);
  return { title: config ? `New ${config.label.toLowerCase()}` : "New" };
}

export default async function NewResourcePage({ params, searchParams }) {
  await requireAdmin();

  const { resource: resourceKey } = await params;
  const resource = getResource(resourceKey);
  if (!resource) notFound();

  const query = await searchParams;
  const refOptions = await loadRefOptions(resource);

  // Sensible starting values, plus any parent handed in by a nested "add"
  // button — e.g. adding a departure from inside a package.
  const initial = {
    status: "active",
    order: 100,
    ...(resourceKey === "packages" ? { type: "customized", category: "family" } : {}),
    ...(resourceKey === "testimonials" ? { rating: "5", source: "google" } : {}),
    ...(resourceKey === "departures" && query?.package ? { package: query.package } : {}),
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Button asChild variant="ghost" size="sm" className="-ml-2">
        <Link href={`/admin/${resourceKey}/`}>
          <ArrowLeft className="size-4" aria-hidden="true" />
          {resource.plural}
        </Link>
      </Button>

      <header>
        <h1 className="text-2xl font-bold tracking-tight text-ink">
          New {resource.label.toLowerCase()}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Fields marked * are required. Anything left blank falls back to the schema default.
        </p>
      </header>

      <ResourceFormShell
        resourceKey={resourceKey}
        label={resource.label}
        sections={resourceSections(resource)}
        fields={resource.fields}
        initial={initial}
        refOptions={refOptions}
      />
    </div>
  );
}

async function loadRefOptions(resource) {
  const needed = [...new Set(resource.fields.filter((f) => f.type === "ref").map((f) => f.optionsFrom))];
  const entries = await Promise.all(needed.map(async (key) => [key, await getRefOptions(key)]));
  return Object.fromEntries(entries);
}
