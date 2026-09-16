/**
 * Browser-safe slugify, mirroring the one in models/_shared.js.
 *
 * The model version is the authority — it runs on save. This exists so the
 * admin form can show the editor what the slug will be before they submit,
 * without pulling Mongoose into the client bundle. Keep the two in step.
 */
export function slugify(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
