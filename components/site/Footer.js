import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { FacebookIcon, GoogleIcon, InstagramIcon } from "./icons/SocialIcons";
import { EMAILS, NAV, OFFICES, PRIMARY_PHONE, SITE, SOCIAL } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * Footer.
 *
 * Three things the legacy footer got wrong and this one does not:
 *   - It said "Copyright 2020". The year here is computed.
 *   - Its "Read more" link pointed nowhere. Every link below has a real
 *     destination and visible text; there are no "#" placeholders.
 *   - It was the only place the tagline appeared. Here it sits with the logo,
 *     as the brief asks, and it also carries the loader and the homepage hero.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: "Destinations",
      links: [
        { label: "All destinations", href: "/destinations/" },
        { label: "International", href: "/destinations/international/" },
        { label: "Domestic", href: "/destinations/domestic/" },
        { label: "Dubai", href: "/destinations/international/dubai/" },
        { label: "Maldives", href: "/destinations/international/maldives/" },
        { label: "Kerala", href: "/destinations/domestic/kerala/" },
      ],
    },
    {
      title: "Packages",
      links: [
        { label: "All packages", href: "/packages/" },
        ...NAV.find((item) => item.label === "Packages").columns[0].items,
        { label: "Fixed departures", href: "/fixed-departures/" },
      ],
    },
    {
      title: "Services",
      links: NAV.find((item) => item.label === "Services").columns[0].items.slice(0, 6),
    },
    {
      title: "Company",
      links: [
        { label: "About Alisha", href: "/about/" },
        { label: "Our Founder", href: "/about/ramzi-mohammed-ali/" },
        { label: "Customer Reviews", href: "/reviews/" },
        { label: "Campaigns", href: "/campaigns/" },
        { label: "Gallery", href: "/gallery/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
  ];

  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="container-page py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          {/* Brand block */}
          <div className="max-w-sm">
            <Logo variant="white" className="h-12 w-auto" />
            <p className="mt-6 font-display text-2xl italic leading-snug text-white">
              {SITE.tagline}.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-100/75">
              An IATA-accredited travel agency based in Kerala since {SITE.founded}. Customised
              holidays, fixed departures, corporate movements and the paperwork that goes with
              them — handled by a named person from the first question to the last boarding pass.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-brand-200">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              IATA Accredited Agent
            </p>

            {/*
              Four marks on filled tiles, where there used to be three words in
              a row of underlined text at the size of the small print. The
              client's note was that these were hard to find, and they were:
              set in the same colour and weight as the paragraph above them,
              the only thing distinguishing a social link from body copy was
              the word itself.

              Google is the fourth, and new — it is where the 4.8 on this site
              comes from, so it belongs beside the other three. It keeps its
              own four colours on a white tile; the rest take the footer's.
            */}
            <ul className="mt-7 flex flex-wrap items-center gap-2.5">
              {[
                { href: SOCIAL.facebook, label: "Facebook", Icon: FacebookIcon },
                { href: SOCIAL.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: whatsappLink(), label: "WhatsApp", Icon: WhatsAppIcon },
                { href: SOCIAL.google, label: "Google reviews", Icon: GoogleIcon, brand: true },
              ].map(({ href, label, Icon, brand }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none",
                      brand
                        ? "bg-white hover:bg-brand-50"
                        : "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white hover:text-brand-900"
                    )}
                  >
                    <Icon className="size-5" />
                    <span className="sr-only">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="font-sans text-[0.6875rem] font-semibold tracking-[0.18em] text-brand-300 uppercase">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.href}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-brand-100/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Offices. Three cells, not four: one office, "Talk to us" and the
            hours. This was lg:grid-cols-4 when there was a Trivandrum branch,
            and left a dead quarter-width column when it closed. */}
        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICES.map((office) => (
            <div key={office.slug}>
              <h2 className="text-lg font-semibold text-white">{office.name}</h2>
              <p className="mt-3 flex gap-2.5 text-sm leading-relaxed text-brand-100/75">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-300" aria-hidden="true" />
                <span>{office.address}</span>
              </p>
              <p className="mt-2.5">
                <a
                  href={`mailto:${office.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-brand-100/80 underline-offset-4 hover:text-white hover:underline"
                >
                  <Mail className="size-4 shrink-0 text-brand-300" aria-hidden="true" />
                  {office.email}
                </a>
              </p>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-semibold text-white">Talk to us</h2>
            <ul className="mt-3 space-y-2.5">
              {[PRIMARY_PHONE].map((phone) => (
                <li key={phone.tel}>
                  <a
                    href={`tel:${phone.tel}`}
                    className="inline-flex items-center gap-2.5 text-sm text-brand-100/80 underline-offset-4 hover:text-white hover:underline"
                  >
                    <Phone className="size-4 shrink-0 text-brand-300" aria-hidden="true" />
                    <span>
                      {phone.display}
                      <span className="ml-1.5 text-xs text-brand-300">{phone.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Office hours</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-100/75">
              Monday to Saturday
              <br />
              9:30 am – 6:30 pm IST
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-100/75">
              Travelling and something has gone wrong? Call the number on your itinerary at any
              hour.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-brand-100/80 sm:flex-row sm:items-center sm:justify-between">
          {/* The client's own credit line, in their order: accreditation,
              founding, copyright. */}
          <p>
            IATA accredited · Founded {SITE.founded} by {SITE.founder} · © {year}{" "}
            {SITE.legalName}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/reviews/" className="underline-offset-4 hover:text-white hover:underline">
              Read our reviews
            </Link>

            {/* The build credit. The mark is white artwork on transparency, so
                it needs no treatment against this band — it carries its own
                colour and sits at the weight of the line beside it rather than
                competing with the client's own logo above. */}
            <a
              href="https://www.hiwagamakers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-brand-100/70 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
            >
              Developed by
              <Image
                src="/images/hiwaga-logo.png"
                alt="Hiwaga Makers"
                width={3206}
                height={868}
                sizes="88px"
                className="h-5 w-auto opacity-80 transition-opacity group-hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
