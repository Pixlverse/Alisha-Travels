import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";
import { telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * One office, with every phone number labelled by who answers it.
 *
 * The legacy contact page listed five numbers under Kottayam and five under
 * Trivandrum with almost no indication of which was which, a "View On Google
 * Map" link that pointed at "#", and an e-mail address on the tour pages using
 * the wrong TLD (.com instead of .in). All three are fixed here: labels come
 * from the Office document, the map link is a real https:// URL, and the
 * addresses come from the database rather than being retyped.
 */
export default function OfficeCard({ office, mapLoading = "lazy" }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-white">
      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold text-ink">{office.name}</h3>
          {office.isHeadOffice ? (
            <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[0.625rem] font-bold tracking-wide text-brand-700 uppercase">
              Head office
            </span>
          ) : null}
        </div>

        <address className="mt-4 flex gap-3 text-[0.9375rem] leading-relaxed text-ink-soft not-italic">
          <MapPin className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true" />
          <span>{office.address}</span>
        </address>

        {office.phones?.length ? (
          <ul className="mt-5 space-y-2.5">
            {office.phones.map((phone) => (
              <li key={`${office.slug}-${phone.number}-${phone.label}`}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <a
                    href={telHref(phone.number)}
                    className="inline-flex items-center gap-2.5 font-sans text-[0.9375rem] font-semibold text-ink underline-offset-4 hover:text-brand-700 hover:underline"
                  >
                    <Phone className="size-4 shrink-0 text-brand-500" aria-hidden="true" />
                    {phone.display || phone.number}
                  </a>
                  <span className="rounded-full bg-mist-100 px-2.5 py-0.5 text-xs text-ink-muted">
                    {phone.label}
                  </span>
                  {phone.whatsapp ? (
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-whatsapp-text underline-offset-4 hover:underline"
                    >
                      <WhatsAppIcon className="size-3.5" />
                      WhatsApp
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 space-y-2.5 border-t border-line pt-5">
          {office.email ? (
            <p>
              <a
                href={`mailto:${office.email}`}
                className="inline-flex items-center gap-2.5 text-[0.9375rem] text-ink-soft underline-offset-4 hover:text-brand-700 hover:underline"
              >
                <Mail className="size-4 shrink-0 text-brand-500" aria-hidden="true" />
                {office.email}
              </a>
            </p>
          ) : null}

          {office.hours ? (
            <p className="flex items-center gap-2.5 text-[0.9375rem] text-ink-soft">
              <Clock className="size-4 shrink-0 text-brand-500" aria-hidden="true" />
              {office.hours}
            </p>
          ) : null}

          {office.mapLink ? (
            <p>
              <a
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[0.9375rem] font-semibold text-brand-700 underline-offset-4 hover:underline"
              >
                <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
                Get directions
              </a>
            </p>
          ) : null}
        </div>
      </div>

      {office.mapEmbedUrl ? (
        <div className={cn("aspect-[16/10] w-full border-t border-line bg-mist-100 sm:aspect-[2/1]")}>
          <iframe
            src={office.mapEmbedUrl}
            title={`Map showing ${office.name}`}
            loading={mapLoading}
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full"
            style={{ border: 0 }}
          />
        </div>
      ) : null}
    </article>
  );
}
