import { DESTINATION_IMAGES, EXTRA_IMAGES } from "./images.js";
import { EMAILS, OFFICES } from "../../lib/site.js";

const d = (key) => ({ ...DESTINATION_IMAGES[key] });
const x = (key) => ({ ...EXTRA_IMAGES[key] });

/**
 * Testimonials.
 *
 * The About copy says travellers thank Junaid, Ben, SriSankar and Aditya by
 * name rather than thanking "the agency", so the seeded reviews name them —
 * that is the point the /reviews/ page has to make.
 *
 * These are PLACEHOLDERS written to look like the real thing. Before launch
 * the client must replace them with genuine reviews they have permission to
 * publish (the audit asks for exactly this in section 14.5). There is no live
 * Google Reviews API sync in this phase.
 */
/**
 * Campaigns.
 *
 * ONE entry, and it is not invented: this is the copy that was hardcoded into
 * the homepage's campaign band, moved into the database so the client can edit
 * it and so a second campaign does not need a developer. The wording, the
 * photograph and the "illustrative" note are exactly what the band carried.
 *
 * The photograph is a freely licensed Pexels image of hands reading braille
 * (photo 7695406 — commercial use, no attribution required). It is NOT from
 * the trip, which is why `imageNote` says so on the page: /gallery/ promises
 * visitors that nothing on this site is from a stock library, and an
 * unlabelled stand-in would make that a lie. Replace both when the client
 * supplies their own photograph, and the note goes with it.
 */
export const campaigns = [
  {
    slug: "school-for-the-blind-kottayam",
    title: "We sponsored a trip for children from a school for the blind in Kottayam.",
    summary:
      "The same work as any other departure — the route, the stops, the people who would meet them at the other end. For travellers who would take the whole place in through everything except the view. Nothing we have done explains our line better.",
    body:
      "The same work as any other departure — the route, the stops, the people who would meet them at the other end. For travellers who would take the whole place in through everything except the view. Nothing we have done explains our line better.",
    pullQuote: "Every travel is a blessing.",
    location: "Kottayam, Kerala",
    heroImage: {
      url: "/images/campaign-braille.jpg",
      alt: "A person's hands resting on an open page of braille.",
    },
    imageNote: "Photograph illustrative — hands reading braille. Not taken on the trip.",
    order: 1,
    metaTitle: "Our Campaign — A Trip for Children From a School for the Blind",
    metaDescription:
      "Alisha Tours & Travels sponsored a trip for children from a school for the blind in Kottayam — the same work as any other departure.",
  },
];

export const testimonials = [
  {
    name: "Anish Varghese",
    location: "Kottayam",
    tourTaken: "Maldives, 4D/3N",
    rating: 5,
    source: "google",
    featured: true,
    order: 1,
    date: "2026-06-14",
    quote:
      "Junaid planned our honeymoon down to the transfer times, which turned out to matter — our flight landed late and the seaplane would not have flown. He had already put us on a speedboat resort for that exact reason. Nothing went wrong because somebody had thought about it before we did.",
  },
  {
    name: "Priya Menon",
    location: "Thiruvananthapuram",
    tourTaken: "Kerala — Munnar, Thekkady & Alleppey",
    rating: 5,
    source: "google",
    featured: true,
    order: 2,
    date: "2026-04-02",
    quote:
      "We were travelling with my mother, who cannot walk far. Ben rebuilt the whole itinerary around that without being asked twice, and swapped one hill stop for an extra night at the houseboat. He also called midway through the trip just to check the hotel was right.",
  },
  {
    name: "Rajesh Kumar",
    location: "Dubai",
    tourTaken: "Kashmir Valley, 6D/5N",
    rating: 5,
    source: "google",
    featured: true,
    order: 3,
    date: "2026-05-21",
    quote:
      "I booked from Dubai for my parents travelling out of Kochi. SriSankar answered every message, including at hours he had no business being awake. My father is not an easy traveller and even he had nothing to complain about.",
  },
  {
    name: "Fathima Rasheed",
    location: "Ernakulam",
    tourTaken: "Singapore & Malaysia",
    rating: 5,
    source: "justdial",
    featured: false,
    order: 4,
    date: "2026-02-11",
    quote:
      "First time abroad with two small children and I was dreading the airport. Aditya wrote out exactly what to expect at each stage, down to which counter to go to. That single page made the whole trip manageable.",
  },
  {
    name: "Thomas Mathew",
    location: "Changanassery",
    tourTaken: "Corporate dealer meet, Bangkok",
    rating: 5,
    source: "direct",
    featured: false,
    order: 5,
    date: "2026-01-30",
    quote:
      "We moved 96 delegates to Bangkok with one coordinator handling visas, flights, the conference hall and the gala dinner. Our finance team got a clean invoice and I got exactly one phone number to call. We have already booked next year.",
  },
  {
    name: "Sneha Nair",
    location: "Pathanamthitta",
    tourTaken: "Ladakh group departure",
    rating: 4,
    source: "google",
    featured: false,
    order: 6,
    date: "2025-09-08",
    quote:
      "The two rest days in Leh felt excessive when I read the itinerary and made complete sense by day four, when half the people we met who had gone straight up were unwell. Only reason it is not five stars is the camp at Pangong, which was basic — though they did warn us it would be.",
  },
];

/**
 * Gallery.
 *
 * One consolidated gallery replacing the legacy site's two competing systems
 * (the /memory-book/ page and the /portfolio/ custom post type), which between
 * them also carried a duplicated image. Categories here are real: the /gallery/
 * page only renders a filter tab when at least one item uses that category, so
 * there are no dead tabs.
 */
export const galleryItems = [
  { image: d("dubai"), caption: "Group departure at the Burj Khalifa observation deck", category: "tours", order: 1 },
  { image: x("pattaya"), caption: "Coral Island morning, Pattaya group tour", category: "tours", order: 2 },
  { image: d("ladakh"), caption: "On the Zanskar road, Ladakh fixed departure", category: "tours", order: 3 },
  { image: x("houseboat"), caption: "Alleppey houseboat, Kerala family package", category: "tours", order: 4 },
  { image: d("kashmir-srinagar"), caption: "Shikaras on Dal Lake at first light", category: "memories", order: 5 },
  { image: d("maldives"), caption: "A honeymoon couple's sandbank picnic, Baa Atoll", category: "memories", order: 6 },
  { image: d("goa"), caption: "Long-weekend group at Palolem, South Goa", category: "memories", order: 7 },
  { image: x("ettumanoor"), caption: "Ettumanoor, where the head office has been since 2013", category: "office", order: 8 },
  { image: x("airport"), caption: "Sending a group off from Cochin International", category: "office", order: 9 },
  { image: x("gardensByTheBay"), caption: "Gardens by the Bay — Singapore family package advertisement", category: "ads", order: 10 },
  { image: d("thailand"), caption: "Phi Phi Islands — Thailand fixed departure advertisement", category: "ads", order: 11 },
];

/**
 * Offices. One location, with every phone number labelled by role — the legacy
 * contact page listed five numbers in Kottayam and five under a Trivandrum
 * branch with no indication of who answered which. That branch is closed and
 * the client has confirmed a single Ettumanoor office, so the Trivandrum
 * document is gone from this seed. A database seeded before that change still
 * holds it: delete it in /admin/offices/ or re-seed.
 *
 * The two mobile numbers below are the ones published on the legacy site. The
 * landline is marked PLACEHOLDER and must be replaced with the real value
 * before launch (see README > Content to confirm).
 */
export const offices = [
  {
    slug: "kottayam",
    name: "Kottayam Office",
    // No branch to be the head of, so no badge — OfficeCard renders a "Head
    // office" pill off this flag.
    isHeadOffice: false,
    address: OFFICES[0].address,
    locality: OFFICES[0].locality,
    region: OFFICES[0].region,
    postalCode: OFFICES[0].postalCode,
    geo: OFFICES[0].geo,
    email: EMAILS.primary,
    order: 1,
    hours: "Monday to Saturday, 9:30 am – 6:30 pm",
    phones: [
      { label: "Sales", number: "+919562921818", display: "+91 95629 21818", whatsapp: true },
      { label: "Customized Tours", number: "+919562311818", display: "+91 95623 11818", whatsapp: false },
      // PLACEHOLDER — replace with the real landline before launch.
      { label: "Office Landline", number: "+914812630000", display: "+91 481 263 0000", whatsapp: false },
    ],
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Alisha+Tours+and+Travels+Ettumanoor+Kottayam",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Alisha+Tours+and+Travels,+SBI+Building,+Ettumanoor,+Kottayam+686631&output=embed",
  },
];
