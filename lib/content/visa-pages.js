/**
 * The Global visa pages: URL, name and one-line summary of each.
 *
 * Its own module, apart from the page copy in ./visa.js, because the header
 * builds its menu from it and the header is a client component: importing
 * the full copy there would ship every document checklist to every visitor.
 *
 * `flags` are ISO codes of files in /public/flags, shown beside each page's
 * name in the menu and in the "other visa services" cards.
 */
export const VISA_PAGES = {
  hub: {
    href: "/services/global-visa/",
    label: "Global visa",
  },
  tourist: {
    href: "/services/global-tourist-visa/",
    label: "Tourist visa",
    navLabel: "Tourist Visa",
    summary: "Holidays, family visits and short trips to 197 destinations.",
    flags: ["fr", "us", "ae"],
  },
  dependant: {
    href: "/services/global-visa/uk-ireland-dependant-visa/",
    label: "UK & Ireland dependant visa",
    navLabel: "UK & Ireland Dependant Visa",
    summary: "Spouses, partners and children joining a worker in the UK or Ireland.",
    flags: ["gb", "ie"],
  },
  settlement: {
    href: "/services/global-visa/uk-settlement-visa/",
    label: "UK settlement visa",
    navLabel: "UK Settlement Visa",
    summary: "Joining a British or settled partner, and indefinite leave to remain.",
    flags: ["gb"],
  },
};
