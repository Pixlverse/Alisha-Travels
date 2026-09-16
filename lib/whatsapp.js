import { WHATSAPP_NUMBER } from "./site";

/**
 * Every WhatsApp link on the site is built here.
 *
 * The number itself comes from lib/site.js, which reads
 * NEXT_PUBLIC_WHATSAPP_NUMBER. Nothing else in the codebase should ever
 * contain a phone number in a wa.me URL — changing the number must be a
 * one-line edit that updates the sticky mobile bar, every package and
 * destination page, the contact page and the footer at once.
 */

/** Raw wa.me link with a pre-filled message. */
export function whatsappUrl(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Builds the message body a visitor arrives in WhatsApp with. Naming the
 * package or destination is the whole point — the legacy site had no WhatsApp
 * CTA at all, and a bare "Hi" gives the sales team nothing to work with.
 */
export function whatsappMessage({ packageTitle, destinationName, serviceTitle, travelDates, travellers, name } = {}) {
  const lines = ["Hi Alisha Tours & Travels,"];

  if (packageTitle) lines.push(`I'd like to know more about the "${packageTitle}" package.`);
  else if (destinationName) lines.push(`I'd like to plan a trip to ${destinationName}.`);
  else if (serviceTitle) lines.push(`I'd like to enquire about ${serviceTitle}.`);
  else lines.push("I'd like to plan a trip.");

  if (travelDates) lines.push(`Travel dates: ${travelDates}`);
  if (travellers) lines.push(`Travellers: ${travellers}`);
  if (name) lines.push(`— ${name}`);

  return lines.join("\n");
}

/** Convenience: the two combined, for simple call sites. */
export function whatsappLink(context) {
  return whatsappUrl(whatsappMessage(context));
}
