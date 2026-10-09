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
 * ONE entry, and it is not invented: "Travel Beyond Sight" is the client's own
 * write-up of the day at Sambranikodi with the Government School for the
 * Blind, Olassa. The body is their copy, with the section breaks marked as
 * "## " lines (RichText renders those as subheadings).
 *
 * The homepage band does NOT read this copy — it carries a short, hardcoded
 * version of the same story and links here for the rest.
 *
 * The photograph is a freely licensed Pexels image of hands reading braille
 * (photo 7695406 — commercial use, no attribution required). It is NOT from
 * the trip, which is why `imageNote` says so on the page: /gallery/ promises
 * visitors that nothing on this site is from a stock library, and an
 * unlabelled stand-in would make that a lie. Replace both when the client
 * supplies their own photograph, and the note goes with it.
 *
 * The slug predates the title and is kept so existing links still resolve —
 * Olassa is in Kottayam, so it is still true.
 */
export const campaigns = [
  {
    slug: "school-for-the-blind-kottayam",
    title: "Travel Beyond Sight",
    summary:
      "A day at Sambranikodi with the children of the Government School for the Blind, Olassa - and what it taught us about our own work.",
    body: [
      "What does a journey look like to someone who has never seen one?",
      "## It began with a question we couldn’t answer",
      "Every travel agency in the world sells the same thing first: a picture. The sunset from the houseboat. Snow on a mountain pass. The hotel pool, photographed from above so the water looks bluer than it is. For thirteen years we have put those pictures in front of people and watched their faces as they decide. It is how this business works. It is how we work. So when the idea came up of taking the children of Olassa on a trip, the first question in our office wasn’t about money, or buses, or dates.",
      "If you take the view away, what is left for a travel agency to give?",
      "So we went to Olassa. We started where we always start. We listened.",
      "It is the first thing we do for every traveller. We listen, then we plan. For a couple saving two years for a honeymoon. For a grandmother whose knees won’t manage the steps. For a company sending a hundred people to a conference. This time we sat in a classroom in Olassa with the teachers and asked the children what they love.",
      "One boy said his favourite sound in the world was rain on the school roof. A girl in the second row wanted to know what it feels like to stand in water that goes on and on. Someone else had never been on a boat and wanted to know if it rocks.",
      "Not one of them asked what anything would look like.",
      "They wanted to know what it would sound like. What they could hold. What they would eat. Whether someone would be beside them the whole way.",
      "And somewhere in that classroom, we realised the answer to our question.",
      "We also knew where we wanted to take them. About ten kilometres from Kollam town, in the middle of Ashtamudi Lake, there is a patch of sand that was never meant to be there. It rose from soil dredged for the national waterway and left in the backwaters, and over the years the mangroves moved in. Today the water around it comes up to your knees. You can step off a boat and walk in the middle of a lake.",
      "For children who know the world through their feet and their hands, we couldn’t think of a better place.",
      "## Everything except the view",
      "For thirteen years, our real work has never been the picture. It has been the part nobody photographs.",
      "The route. The timing. Who will be waiting at the other end. Whether the hotel is what it promised to be. Who picks up the phone at 2 a.m. when something changes.",
      "For most travellers, those details stay in the background, and the view takes the credit. For these children, the details were the journey. Every single one.",
      "Somebody has to handle the details. On this trip, the details were everything.",
      "So we planned it the only way we know how. Exactly like any other departure. Only more carefully.",
      "## A trip planned for the ears, the hands and the heart",
      "We planned the day for what it would sound like. The boat engine coughing awake at the jetty. Water slapping against the hull. Wind coming across the backwaters. Birds somewhere in the mangroves. And we asked everyone in the group to do something guides rarely do: stop pointing, and start describing.",
      "We planned it for what they could touch. Lake water around their knees. Soft sand giving way under their feet. The twisted roots of the mangroves. Wherever we could, the children held the thing instead of being told about it.",
      "We built lunch into the day instead of squeezing it in, because food is the one part of a place you can take in completely. In Kollam, that means seafood - the pearl spot, from the same backwaters they had just walked in.",
      "We walked it before they did. We checked the jetty, the boat, and the footing on the island, and planned the visit around the tide so the water would be shallow enough to walk in. A life jacket on every child before anyone stepped aboard. And we left time. Time to stand still in the water. Time to listen. Time to go back to something twice.",
      "In their world, destinations are not just places. They are stories written in the language of touch.",
      "## We went to give something. We came back having learnt something.",
      "We thought we were organising a trip for a group of children. What we were really doing was finding out what our own work is made of.",
      "Every traveller has something the brochure forgot. A grandmother who can’t manage the steps up to the fort. A child who can’t bear a loud room. A father who uses a wheelchair. A friend who is hard of hearing, or whose eyesight is going.",
      "The question we asked at Olassa is the one every journey deserves. What will this person actually experience, and what will it take to make that good?",
      "We ask it more carefully now. For everyone.",
      "## Every travel is a blessing.",
      "We have always said it. After Olassa, we understand it a little better.",
      "To the students and teachers of the Government School for the Blind, Olassa: thank you for trusting us with your day on the lake, and for showing us what a journey really is.",
      "Travel Beyond Sight was the first journey of its kind for us. We don’t want it to be the last. If you run a school, an organisation or a company that would like to make the next one happen with us, we would love to hear from you.",
    ].join("\n\n"),
    // Empty on purpose: the story already ends on the line, as a heading.
    pullQuote: "",
    location: "Sambranikodi, Ashtamudi Lake, Kollam",
    heroImage: {
      url: "/images/campaign-braille.jpg",
      alt: "A person's hands resting on an open page of braille.",
    },
    imageNote: "Photograph illustrative - hands reading braille. Not taken on the trip.",
    order: 1,
    metaTitle: "Travel Beyond Sight - A Day With the School for the Blind, Olassa",
    metaDescription:
      "Alisha Tours & Travels took the children of the Government School for the Blind, Olassa, to Sambranikodi on Ashtamudi Lake - a trip planned for the ears, the hands and the heart.",
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
      "Junaid planned our honeymoon down to the transfer times, which turned out to matter - our flight landed late and the seaplane would not have flown. He had already put us on a speedboat resort for that exact reason. Nothing went wrong because somebody had thought about it before we did.",
  },
  {
    name: "Priya Menon",
    location: "Thiruvananthapuram",
    tourTaken: "Kerala - Munnar, Thekkady & Alleppey",
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
      "The two rest days in Leh felt excessive when I read the itinerary and made complete sense by day four, when half the people we met who had gone straight up were unwell. Only reason it is not five stars is the camp at Pangong, which was basic - though they did warn us it would be.",
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
  { image: x("gardensByTheBay"), caption: "Gardens by the Bay - Singapore family package advertisement", category: "ads", order: 10 },
  { image: d("thailand"), caption: "Phi Phi Islands - Thailand fixed departure advertisement", category: "ads", order: 11 },
];

/**
 * Offices. One location, with every phone number labelled by role — the legacy
 * contact page listed five numbers in Kottayam and five under a Trivandrum
 * branch with no indication of who answered which. That branch is closed and
 * the client has confirmed a single Ettumanoor office, so the Trivandrum
 * document is gone from this seed. A database seeded before that change still
 * holds it: delete it in /admin/offices/ or re-seed.
 *
 * ONE NUMBER, not the five the legacy site published or the three this seed
 * carried: the client has confirmed +91 95629 21818 is the only line
 * associated with the business.
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
    hours: "Monday to Saturday, 9:30 am – 6:00 pm",
    /*
      ONE NUMBER. The client's instruction is that +91 95629 21818 is the only
      line associated with the business.

      Two others used to be here: a second mobile labelled "Customized Tours",
      and an office landline carrying a comment to replace it with the real one
      before launch — the answer turned out to be that there is no landline to
      replace it with. A published number that nobody answers is worse than no
      number at all.
    */
    phones: [
      { label: "24x7 Support", number: "+919562921818", display: "+91 95629 21818", whatsapp: true },
    ],
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Alisha+Tours+and+Travels+Ettumanoor+Kottayam",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Alisha+Tours+and+Travels,+SBI+Building,+Ettumanoor,+Kottayam+686631&output=embed",
  },
];
