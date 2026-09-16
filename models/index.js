/**
 * Importing this module registers every schema with Mongoose, which matters
 * for `.populate()` — a populate on `destination` fails if the Destination
 * model has not been registered in that process yet.
 */
export { default as Destination } from "./Destination.js";
export { default as Package } from "./Package.js";
export { default as Departure, departureAvailability } from "./Departure.js";
export { default as Service } from "./Service.js";
export { default as Campaign } from "./Campaign.js";
export { default as Testimonial } from "./Testimonial.js";
export { default as GalleryItem } from "./GalleryItem.js";
export { default as Office } from "./Office.js";
export { default as Enquiry } from "./Enquiry.js";
export { default as AdminUser } from "./AdminUser.js";
export { slugify } from "./_shared.js";
