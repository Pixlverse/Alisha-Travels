/**
 * Route classification for the tourist visa destination table.
 *
 * Its own module so the client-side DestinationFinder can import it without
 * pulling the page copy in lib/content/tourist-visa.js into the bundle.
 */

/**
 * Which legend kinds a route belongs to, in the order the route names them.
 * The first is the one the badge is coloured by; every one of them counts
 * for the filters, so "eVisa / VOA" turns up under both eVisa and VOA.
 *
 * Parts that name no route ("Entry rules apply", "permit", "visa
 * conditions") match nothing and are simply shown as written.
 */
export function routeKinds(route) {
  const kinds = [];
  for (const raw of route.replace(/\*$/, "").split("/")) {
    const part = raw.trim().toLowerCase();
    let kind = null;
    if (part.includes("schengen")) kind = "schengen";
    else if (/^(e-?visa|e-?ta\b|k-eta|nzeta)|authori[sz]ation|registration/.test(part)) kind = "evisa";
    else if (/^voa|on arrival/.test(part)) kind = "voa";
    else if (part.startsWith("visa-free")) kind = "free";
    else if (part === "visa" || part.startsWith("visa required")) kind = "required";
    if (kind && !kinds.includes(kind)) kinds.push(kind);
  }
  return kinds;
}
