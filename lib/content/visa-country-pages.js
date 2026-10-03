/**
 * Which countries have their own tourist visa page, by ISO code.
 *
 * Its own tiny module, apart from the page copy in ./visa-countries.js,
 * because the country board and the destination finder are client
 * components: they only need to know WHETHER a country has a page, and
 * importing the full copy would ship every document list to every visitor.
 *
 * Keep in step with ./visa-countries.js: add a line here when a country page
 * is added there. The country page route warns in development if the two
 * disagree.
 */
export const COUNTRY_PAGES = {
  al: "albania",
  am: "armenia",
  au: "australia",
  az: "azerbaijan",
  bd: "bangladesh",
  bn: "brunei",
  kh: "cambodia",
  ca: "canada",
  cn: "china",
  eg: "egypt",
  et: "ethiopia",
  ge: "georgia",
  hk: "hong-kong",
  id: "indonesia",
  iq: "iraq",
  jp: "japan",
  jo: "jordan",
  ke: "kenya",
  kg: "kyrgyzstan",
  kr: "south-korea",
  gb: "united-kingdom",
  la: "laos",
  md: "moldova",
  ma: "morocco",
  ru: "russia",
  sg: "singapore",
  za: "south-africa",
  tw: "taiwan",
  tz: "tanzania",
  tn: "tunisia",
  tr: "turkey",
  us: "united-states",
  at: "austria",
  be: "belgium",
  bg: "bulgaria",
  hr: "croatia",
  cz: "czech-republic",
  dk: "denmark",
  ee: "estonia",
  fi: "finland",
  fr: "france",
  de: "germany",
  gr: "greece",
  hu: "hungary",
  is: "iceland",
  it: "italy",
  lv: "latvia",
  li: "liechtenstein",
  lt: "lithuania",
  lu: "luxembourg",
  mt: "malta",
  nl: "netherlands",
  no: "norway",
  pl: "poland",
  pt: "portugal",
  ro: "romania",
  sk: "slovakia",
  si: "slovenia",
  es: "spain",
  se: "sweden",
  ch: "switzerland",
  uz: "uzbekistan",
  vn: "vietnam",
  zm: "zambia",
};

export const TOURIST_VISA_BASE = "/services/global-visa/tourist-visa/";

/** The page for an ISO code, or null when the country has none. */
export function countryVisaHref(code) {
  const slug = COUNTRY_PAGES[String(code || "").toLowerCase()];
  return slug ? `${TOURIST_VISA_BASE}${slug}/` : null;
}
