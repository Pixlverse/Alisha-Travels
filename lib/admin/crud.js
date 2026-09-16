import "server-only";

import { connectToDatabase } from "../db";
import { plain } from "../data/_helpers";
import { getResource } from "./resources";
import { slugify } from "@/models/_shared";

/**
 * Generic read/write for every content collection, driven by the registry in
 * lib/admin/resources.js.
 *
 * Values arriving from a form are all strings, so `coerce` turns them back
 * into the types the Mongoose schemas expect. Doing that here rather than in
 * each form keeps the browser from being trusted about types at all — the
 * server decides what a number is.
 */

function coerceValue(field, raw) {
  if (raw === undefined) return undefined;

  switch (field.type) {
    case "number": {
      if (raw === "" || raw === null) return undefined;
      const number = Number(raw);
      return Number.isFinite(number) ? number : undefined;
    }
    case "checkbox":
      return raw === true || raw === "true" || raw === "on";
    case "date": {
      if (!raw) return undefined;
      // Dates are stored at UTC midnight so a departure never displays a day
      // early for a viewer in a negative-offset timezone.
      const date = new Date(`${String(raw).slice(0, 10)}T00:00:00.000Z`);
      return Number.isNaN(date.getTime()) ? undefined : date;
    }
    case "ref":
      return raw || undefined;
    case "stringList":
      return Array.isArray(raw) ? raw.map((v) => String(v).trim()).filter(Boolean) : [];
    case "imageList":
      return Array.isArray(raw) ? raw.filter((image) => image?.url) : [];
    case "image":
      return raw?.url ? raw : undefined;
    case "objectList": {
      if (!Array.isArray(raw)) return [];
      return raw
        .map((item) => {
          const out = {};
          for (const sub of field.of) {
            const value = coerceValue(sub, item?.[sub.name]);
            if (value !== undefined) out[sub.name] = value;
          }
          return out;
        })
        // Drop rows where every required sub-field is empty — an "add row"
        // click the editor never filled in should not be saved.
        .filter((item) =>
          field.of.some((sub) => sub.required !== true || (item[sub.name] ?? "") !== "")
        )
        .filter((item) => Object.keys(item).length > 0);
    }
    default:
      return typeof raw === "string" ? raw.trim() : raw;
  }
}

export function coerceDocument(resourceKey, input) {
  const resource = getResource(resourceKey);
  const doc = {};

  for (const field of resource.fields) {
    const value = coerceValue(field, input[field.name]);
    if (value !== undefined) doc[field.name] = value;
  }

  // A slug is required by every schema that has one; derive it rather than
  // rejecting the save.
  const slugField = resource.fields.find((f) => f.type === "slug");
  if (slugField && !doc[slugField.name] && doc[slugField.from]) {
    doc[slugField.name] = slugify(doc[slugField.from]);
  }
  if (slugField && doc[slugField.name]) {
    doc[slugField.name] = slugify(doc[slugField.name]);
  }

  return doc;
}

/* -------------------------------------------------------------------------- */
/*  Reads                                                                      */
/* -------------------------------------------------------------------------- */

export async function listDocuments(resourceKey, { search = "", parent } = {}) {
  const resource = getResource(resourceKey);
  await connectToDatabase();

  const query = {};
  if (parent?.key && parent?.value) query[parent.key] = parent.value;

  if (search && resource.searchFields?.length) {
    const safe = String(search).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const rx = new RegExp(safe, "i");
    query.$or = resource.searchFields.map((field) => ({ [field]: rx }));
  }

  let builder = resource.model.find(query).sort(resource.defaultSort || { createdAt: -1 });
  for (const populate of resource.populate || []) builder = builder.populate(populate);

  return plain(await builder.lean());
}

export async function getDocument(resourceKey, id) {
  const resource = getResource(resourceKey);
  await connectToDatabase();
  const doc = await resource.model.findById(id).lean().catch(() => null);
  return doc ? plain(doc) : null;
}

export async function countDocuments(resourceKey, query = {}) {
  const resource = getResource(resourceKey);
  await connectToDatabase();
  return resource.model.countDocuments(query);
}

/** Options for `ref` fields — { value, label } pairs. */
export async function getRefOptions(resourceKey) {
  const resource = getResource(resourceKey);
  if (!resource) return [];
  await connectToDatabase();

  const labelField = resourceKey === "packages" ? "title" : "name";
  const docs = await resource.model
    .find({})
    .select(`${labelField} region status`)
    .sort({ [labelField]: 1 })
    .lean();

  return docs.map((doc) => ({
    value: String(doc._id),
    label: doc.region ? `${doc[labelField]} (${doc.region})` : doc[labelField],
    status: doc.status,
  }));
}

/* -------------------------------------------------------------------------- */
/*  Writes                                                                     */
/* -------------------------------------------------------------------------- */

export async function saveDocument(resourceKey, id, input) {
  const resource = getResource(resourceKey);
  const doc = coerceDocument(resourceKey, input);

  await connectToDatabase();

  try {
    if (id) {
      const updated = await resource.model.findByIdAndUpdate(
        id,
        { $set: doc },
        { returnDocument: "after", runValidators: true }
      );
      if (!updated) return { ok: false, error: `That ${resource.label.toLowerCase()} no longer exists.` };
      return { ok: true, id: String(updated._id) };
    }

    const created = await resource.model.create(doc);
    return { ok: true, id: String(created._id) };
  } catch (error) {
    return { ok: false, error: describeMongooseError(error, resource) };
  }
}

export async function deleteDocument(resourceKey, id) {
  const resource = getResource(resourceKey);
  await connectToDatabase();

  // Refuse to orphan children. Deleting a package whose departures still point
  // at it would leave rows the calendar silently drops.
  if (resource.children) {
    const child = getResource(resource.children.resource);
    const count = await child.model.countDocuments({ [resource.children.foreignKey]: id });
    if (count) {
      return {
        ok: false,
        error: `This ${resource.label.toLowerCase()} still has ${count} ${child.plural.toLowerCase()}. Delete or reassign those first.`,
      };
    }
  }

  await resource.model.deleteOne({ _id: id });
  return { ok: true };
}

/** Turns Mongoose's errors into something an admin can act on. */
function describeMongooseError(error, resource) {
  if (error?.code === 11000) {
    const field = Object.keys(error.keyPattern || { slug: 1 })[0];
    return `Another ${resource.label.toLowerCase()} already uses that ${field}. Pick a different one.`;
  }
  if (error?.name === "ValidationError") {
    const messages = Object.values(error.errors || {}).map((e) => e.message);
    return messages.length ? messages.join(" ") : "Some fields need checking.";
  }
  if (error?.name === "CastError") {
    return `"${error.value}" is not valid for ${error.path}.`;
  }
  return error?.message || "Could not save.";
}
