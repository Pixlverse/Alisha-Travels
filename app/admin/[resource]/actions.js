"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { deleteDocument, saveDocument } from "@/lib/admin/crud";
import { getResource } from "@/lib/admin/resources";

/**
 * Content mutations for every collection.
 *
 * requireAdmin(), not requireSession(): the brief restricts `staff` to viewing
 * enquiries and changing their status. Hiding the navigation links from staff
 * is a courtesy; this is the boundary that actually enforces it, and it runs
 * on the server where the client cannot reach it.
 */

/** Public paths that go stale when content changes. */
function revalidateFor(resourceKey) {
  const map = {
    destinations: ["/", "/destinations", "/packages"],
    packages: ["/", "/packages", "/destinations", "/fixed-departures"],
    departures: ["/", "/fixed-departures", "/packages"],
    services: ["/", "/services", "/about"],
    testimonials: ["/", "/reviews", "/about"],
    gallery: ["/gallery"],
    offices: ["/contact"],
  };

  for (const path of map[resourceKey] || []) {
    // `layout` so nested dynamic routes under the path are cleared too.
    revalidatePath(path, "layout");
  }
  revalidatePath(`/admin/${resourceKey}/`);
  revalidatePath("/admin/");
}

export async function saveResource(resourceKey, id, values) {
  await requireAdmin();

  const resource = getResource(resourceKey);
  if (!resource) return { ok: false, error: "Unknown content type." };

  const result = await saveDocument(resourceKey, id, values);
  if (result.ok) revalidateFor(resourceKey);
  return result;
}

export async function deleteResource(resourceKey, id) {
  await requireAdmin();

  const resource = getResource(resourceKey);
  if (!resource) return { ok: false, error: "Unknown content type." };

  const result = await deleteDocument(resourceKey, id);
  if (result.ok) revalidateFor(resourceKey);
  return result;
}
