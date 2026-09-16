import { Clock, Phone, ShieldCheck } from "lucide-react";
import EnquiryRouteCard from "./EnquiryRouteCard";
import { RouteBody, routeClass } from "./EnquiryRoute";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { getDestinations } from "@/lib/data/destinations";
import { getServices } from "@/lib/data/content";
import { PRIMARY_PHONE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * The conversion block that closes every destination, package and service page
 * — around twenty pages use it, so this is the highest-leverage component on
 * the site.
 *
 * Three routes to the same outcome — the enquiry form, WhatsApp, or a phone
 * call — and all three are recorded. "Enquire now" opens the form in place,
 * pre-scoped to this page, so nobody has to navigate to /contact/ and
 * re-explain what they were reading. The WhatsApp message is pre-filled with
 * the same context; the legacy site had no WhatsApp CTA at all.
 *
 * REDESIGNED from a pale --brand-50 panel with three pills in a row, which the
 * client's read was "weak" and "doesn't even look interactive". What changed,
 * and why each one:
 *
 * - The three routes are CARDS, not pills. A pill says "button"; a card with an
 *   icon, a label, a line explaining what happens next and an arrow says which
 *   button and what it costs you. It also makes the tap targets full-width
 *   rows on a phone instead of three chips wrapping awkwardly.
 * - Each card names its trade-off — a written quote you can keep, the fastest
 *   reply, or talking to somebody now. That is the actual decision a visitor
 *   is making, and it was previously unsaid.
 * - The panel is --brand-800 by default rather than --brand-50. On a page of
 *   white cards the pale version read as one more card; the deep one reads as
 *   the end of the page. tone="tint" still gives the light treatment.
 * - Hover lifts the card and moves the arrow. Nothing on the old block moved.
 *
 * Contrast, measured on the dark panel: white on --brand-800 is 7.55:1, and the
 * sub-labels are --brand-100/90 rather than /75 because /75 over these cards'
 * composited background measures 3.94:1 and fails AA for 14px copy. That number
 * is why the light panel keeps --ink-soft instead of a tinted grey.
 *
 * This is an async Server Component: it loads the destination and service lists
 * itself so every page that drops in an <EnquiryCta /> gets a working, fully
 * populated form without having to thread the data through as props.
 */
export default async function EnquiryCta({
  title = "Tell us where you want to go.",
  lead = "Send us the dates, the destination and roughly what you have in mind. You will hear back from a person, not an auto-reply.",
  packageTitle,
  packageSlug,
  destinationName,
  destinationSlug,
  serviceTitle,
  source,
  className,
  tone = "deep",
}) {
  const [destinations, services] = await Promise.all([getDestinations(), getServices()]);

  const context = { packageTitle, destinationName, serviceTitle };
  const dark = tone !== "tint";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12",
        dark ? "bg-brand-800" : "bg-brand-50 ring-1 ring-brand-100",
        className
      )}
    >
      {/* A light source in the top-left corner, so a 1200px-wide slab of flat
          --brand-800 has some depth to it. Pure decoration, under the content. */}
      {dark ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_15%,rgba(255,255,255,0.16),transparent_55%)]"
        />
      ) : null}

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12">
        <div>
          <p
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold",
              dark ? "bg-white/12 text-white ring-1 ring-white/25" : "bg-white text-brand-800 ring-1 ring-brand-200"
            )}
          >
            <Clock className="size-3.5" aria-hidden="true" />
            Answered by a person, not a queue
          </p>

          <h2
            className={cn(
              "mt-5 text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] sm:text-[2rem]",
              dark ? "text-white" : "text-ink"
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed",
              dark ? "text-brand-100/90" : "text-ink-soft"
            )}
          >
            {lead}
          </p>

          <p
            className={cn(
              "mt-6 flex items-center gap-2.5 text-sm",
              dark ? "text-brand-100/80" : "text-ink-muted"
            )}
          >
            <ShieldCheck className={cn("size-4 shrink-0", dark ? "text-brand-200" : "text-brand-500")} aria-hidden="true" />
            IATA accredited — tickets issued directly by us, not resold.
          </p>
        </div>

        {/* The three routes. Same shell for all of them, so a card that opens a
            dialog, a card that leaves for WhatsApp and a card that dials look
            and behave identically. */}
        <ul className="grid gap-3">
          <li>
            <EnquiryRouteCard
              dark={dark}
              detail="A written quote you can keep, usually the same day"
              destinations={destinations}
              services={services}
              packageTitle={packageTitle}
              packageSlug={packageSlug}
              destinationSlug={destinationSlug}
              source={source}
              sourceLabel={packageTitle || destinationName || serviceTitle || ""}
              title={title}
            />
          </li>

          <li>
            <a
              href={whatsappLink(context)}
              target="_blank"
              rel="noopener noreferrer"
              className={routeClass(dark)}
            >
              <RouteBody
                dark={dark}
                icon={<WhatsAppIcon className="size-5" />}
                iconClass="bg-whatsapp text-white"
                label="WhatsApp us"
                detail="Fastest — the message arrives with this page attached"
              />
            </a>
          </li>

          <li>
            <a href={`tel:${PRIMARY_PHONE.tel}`} className={routeClass(dark)}>
              <RouteBody
                dark={dark}
                icon={<Phone className="size-5" />}
                iconClass={dark ? "bg-white/15 text-white" : "bg-brand-100 text-brand-800"}
                label={PRIMARY_PHONE.display}
                detail="Talk to somebody now — Monday to Saturday, 9:30 to 6:30"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
