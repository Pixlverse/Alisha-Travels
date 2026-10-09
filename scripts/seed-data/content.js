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
 * Campaigns - the "Beyond Destinations" stories.
 *
 * TWO entries, and neither is invented: both are the client's own write-ups.
 * Each body is their copy, with the section breaks marked as "## " lines
 * (RichText renders those as subheadings).
 *
 * The fields map onto the /campaigns/ page the client wrote:
 *   title     "STORY 01 · TRAVEL BEYOND SIGHT" (the number is the order)
 *   headline  the card's heading - "A journey beyond what the eyes can see"
 *   subtitle  the line under the title, on the card and the story's header
 *   summary   the card's paragraph
 *
 * The homepage shows Travel Beyond Sight only, from short hardcoded copy
 * (TRAVEL_BEYOND_SIGHT in app/(site)/page.js) that links here for the rest.
 *
 * Neither photograph is from the trip, which is why each `imageNote` says so on
 * the page: /gallery/ promises visitors that nothing on this site is from a
 * stock library, and an unlabelled stand-in would make that a lie. Replace both
 * when the client supplies their own photographs, and the notes go with them.
 *  - Travel Beyond Sight: a freely licensed Pexels image of hands reading
 *    braille (photo 7695406 - commercial use, no attribution required).
 *  - When a Wish Found Its Wings: the Cochin International Airport photograph
 *    from Wikimedia Commons that the seed already uses elsewhere.
 *
 * The first slug predates the title and is kept so existing links still
 * resolve - Olassa is in Kottayam, so it is still true.
 */
export const campaigns = [
  {
    slug: "school-for-the-blind-kottayam",
    title: "Travel Beyond Sight",
    headline: "A journey beyond what the eyes can see",
    subtitle:
      "A day at Sambranikodi with the children of the Government School for the Blind, Olassa.",
    summary:
      "What does a destination mean when you cannot see it? We set out to discover the answer with a group of children, through the sounds, textures and experiences of a day on Ashtamudi Lake.",
    body: [
      "What does a journey look like to someone who has never seen one?",
      "## It began with a question we couldn’t answer first",
      "If you take the view away, what is left for a travel agency to give?",
      "Every travel agency in the world sells the same thing first: a picture. The sunset from the houseboat. Snow on a mountain pass. The hotel pool, photographed from above so the water looks bluer than it is. For thirteen years we have put those pictures in front of people and watched their faces as they decide. It is how this business works. It is how we work. So when the idea came up of taking the children of Olassa on a trip, the first question in our office wasn’t about money, or buses, or dates.",
      "## So we went to Olassa. We started where we always start. We listened.",
      "It is the first thing we do for every traveller. We listen, then we plan. For a couple saving two years for a honeymoon. For a grandmother whose knees won’t manage the steps. For a company sending a hundred people to a conference. This time we sat in a classroom in Olassa with the teachers and asked the children what they love.",
      "One boy said his favourite sound in the world was rain on the school roof. A girl in the second row wanted to know what it feels like to stand in water that goes on and on. Someone else had never been on a boat and wanted to know if it rocks.",
      "Not one of them asked what anything would look like.",
      "They wanted to know what it would sound like. What they could hold. What they would eat. Whether someone would be beside them the whole way.",
      "And somewhere in that classroom, we realised the answer to our question.",
      "We also knew where we wanted to take them. About ten kilometres from Kollam town, in the middle of Ashtamudi Lake, there is a patch of sand that was never meant to be there. It rose from soil dredged for the national waterway and left in the backwaters, and over the years the mangroves moved in. Today the water around it comes up to your knees. You can step off a boat and walk in the middle of a lake.",
      "For children who know the world through their feet and their hands, we couldn’t think of a better place.",
      "## Everything except the view.",
      "For thirteen years, our real work has never been the picture. It has been the part nobody photographs.",
      "The route. The timing. Who will be waiting at the other end. Whether the hotel is what it promised to be. Who picks up the phone at 2 a.m. when something changes.",
      "For most travellers, those details stay in the background, and the view takes the credit. For these children, the details were the journey. Every single one.",
      "Somebody has to handle the details. On this trip, the details were everything.",
      "So we planned it the only way we know how. Exactly like any other departure. Only more carefully.",
      "## A trip planned for the ears, the hands and the heart.",
      "We planned the day for what it would sound like. The boat engine coughing awake at the jetty. Water slapping against the hull. Wind coming across the backwaters. Birds somewhere in the mangroves. And we asked everyone in the group to do something guides rarely do: stop pointing, and start describing.",
      "We planned it for what they could touch. Lake water around their knees. Soft sand giving way under their feet. The twisted roots of the mangroves. Wherever we could, the children held the thing instead of being told about it.",
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
  {
    slug: "when-a-wish-found-its-wings",
    title: "When a Wish Found Its Wings",
    headline: "Three people. One wish. A first flight.",
    subtitle: "They had a wish. We helped them take off.",
    summary:
      "Three members of a tribal community in Kerala had always wished to travel by aeroplane. In May 2024, they flew from Kochi and Alisha Tours & Travels was glad to make it possible.",
    body: [
      "For some people, flying is just another way to get somewhere. You book a ticket, pack a bag and head to the airport.",
      "For three members of a tribal community in Kerala, it meant something more.",
      "They had a wish to travel in an aeroplane. Not just to watch one pass overhead or hear someone talk about flying, but to experience it themselves.",
      "So we decided to make it happen.",
      "Alisha Tours & Travels sponsored a flight experience for the three of them, from Kochi to Trivandrum.",
      "And one day, a wish that had lived in their minds became a journey they could finally call their own.",
      "## The day the wish became real",
      "There is something special about an airport. The announcements, the luggage moving across the floor, the sight of aircraft waiting on the runway. For someone about to fly for the first time, every little thing can feel new.",
      "When they reached the airport, all three of them lit up with joy. It was their first time on an escalator, and even that short ride felt like part of the adventure.",
      "As they walked up to the aircraft, there was a slight hesitation among the three of them. But the moment they stepped inside, every hesitation was gone.",
      "Then came the moment they found their seats and realised that this was really happening.",
      "Soon, the aircraft left the ground. The familiar world began to look different. And for the first time, they were travelling through the sky.",
      "And the day did not end there. For the return journey, they boarded the Vande Bharat. It was their first time on a train as well.",
      "As the train moved out of the station, they settled into their seats and watched the world pass by the window. The same land they had seen from the sky earlier that day was now rushing past, up close.",
      "Two firsts in a single day, one in the sky and one on the rails. That made the day doubly special.",
      "## More than a flight",
      "The journey from Kochi to Trivandrum was short in distance. But the meaning of a journey cannot always be measured in kilometres.",
      "Sometimes, it is measured by a first experience. A wish fulfilled. A memory that stays long after the journey ends.",
      "We were happy to sponsor this experience. But the wish belonged to them, and so did the journey.",
      "## Every journey is a blessing",
      "At Alisha Tours & Travels, we have always believed that travel is about more than reaching a destination.",
      "It is about the experiences we carry with us, the things we discover and the moments we might otherwise never have known.",
      "This time, we got to be a part of three people's first flight, and their first train journey too.",
      "And that is a journey worth remembering.",
    ].join("\n\n"),
    pullQuote: "",
    period: "May 2024",
    location: "Kochi to Trivandrum",
    heroImage: x("airport"),
    imageNote: "Photograph illustrative - Cochin International Airport. Not taken on the day.",
    order: 2,
    metaTitle: "When a Wish Found Its Wings - A First Flight, Kochi to Trivandrum",
    metaDescription:
      "Three members of a tribal community in Kerala had always wished to fly. In May 2024 Alisha Tours & Travels sponsored their first flight, from Kochi to Trivandrum - and their first train ride home.",
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
