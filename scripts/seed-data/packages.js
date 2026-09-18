import { DESTINATION_IMAGES, EXTRA_IMAGES } from "./images.js";

/**
 * Starter package inventory.
 *
 * Two groups live in here:
 *
 * 1. The four FIXED DEPARTURES the legacy site advertised — Pattaya & Bangkok,
 *    Ladakh, Phuket & Krabi and Langkawi. Their real departure dates are kept
 *    exactly as they were (2024 and 2025), which means they are all in the
 *    past. That is deliberate: they are the fixture that exercises the
 *    "expired but still shown" behaviour in the Fixed Departures calendar.
 *    A few plausible future dates are seeded alongside them so the default
 *    upcoming view is not empty during development.
 *
 * 2. A spread of CUSTOMISED packages across every category and a range of
 *    prices and durations, so the /packages/ filters (category, destination,
 *    budget, duration) all have something real to filter.
 *
 * `destinationSlug` is resolved to a Destination _id by scripts/seed.js.
 * Prices are INR throughout — the legacy site quoted USD on the buried /tour/
 * pages, and nothing on this site ever should.
 *
 * TO EXTEND: copy any entry, change the slug (it must be unique), and re-run
 * `npm run seed`. Existing documents are matched and updated by slug, so
 * re-running is safe and will not create duplicates.
 */

const d = (key) => ({ ...DESTINATION_IMAGES[key] });
const x = (key) => ({ ...EXTRA_IMAGES[key] });

/** Applied to every package unless overridden — edit once, not sixteen times. */
const STANDARD_INCLUSIONS = [
  "Return economy airfare with checked baggage",
  "Accommodation on twin-sharing basis",
  "Daily breakfast",
  "All transfers and sightseeing by private air-conditioned vehicle",
  "Entry tickets for the attractions listed in the itinerary",
  "All applicable taxes and service charges",
];

/**
 * The promotional packages are quoted LAND ONLY, so they cannot use the
 * standard set above — it opens with return airfare.
 */
const LAND_ONLY_INCLUSIONS = [
  "Accommodation on twin-sharing basis",
  "Daily breakfast",
  "All transfers and sightseeing by air-conditioned vehicle",
  "All applicable taxes and service charges",
];

const LAND_ONLY_EXCLUSIONS = [
  "Lunch and dinner unless specified in the itinerary",
  "Personal expenses — laundry, telephone, minibar, tips",
  "Travel insurance (available separately — see /services/travel-insurance/)",
  "Anything not explicitly listed under inclusions",
];

const STANDARD_EXCLUSIONS = [
  "Lunch and dinner unless specified in the itinerary",
  "Personal expenses — laundry, telephone, minibar, tips",
  "Travel insurance (available separately — see /services/travel-insurance/)",
  "Anything not explicitly listed under inclusions",
];

export const packages = [
  /* ====================== FIXED DEPARTURES (legacy four) ================== */
  {
    slug: "pattaya-bangkok-5d4n",
    title: "Pattaya & Bangkok — 5 Days / 4 Nights",
    summary:
      "Two nights on the coast at Pattaya and two in Bangkok, with the Coral Island trip and the Grand Palace both included.",
    destinationSlug: "thailand",
    category: "group-tours",
    type: "fixed-departure",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 38500,
    featured: false,
    order: 1,
    heroImage: x("pattaya"),
    gallery: [d("thailand"), x("phuket")],
    highlights: [
      "Coral Island speedboat trip with lunch",
      "Alcazar cabaret show, Pattaya",
      "Grand Palace and Wat Arun, Bangkok",
      "Safari World and Marine Park",
      "Chao Phraya dinner cruise",
    ],
    itinerary: [
      { day: 1, title: "Arrive Bangkok, transfer to Pattaya", description: "Met at Suvarnabhumi and driven straight down to Pattaya, roughly two hours. Evening free on Walking Street or at the hotel.", stay: "Pattaya", meals: "Dinner" },
      { day: 2, title: "Coral Island and the Alcazar show", description: "Speedboat out to Koh Larn for the morning, with lunch on the island. Back in time for the Alcazar cabaret in the evening.", stay: "Pattaya", meals: "Breakfast, lunch" },
      { day: 3, title: "Pattaya to Bangkok, Safari World", description: "Drive back towards Bangkok, stopping at Safari World and the Marine Park for the day. Check in to the Bangkok hotel by evening.", stay: "Bangkok", meals: "Breakfast, lunch" },
      { day: 4, title: "Bangkok city and temples", description: "Grand Palace, Wat Phra Kaew and Wat Arun in the morning, free afternoon for shopping at MBK or Chatuchak, and a Chao Phraya dinner cruise to close.", stay: "Bangkok", meals: "Breakfast, dinner" },
      { day: 5, title: "Departure", description: "Free morning, then transfer to the airport for the flight home.", meals: "Breakfast" },
    ],
    inclusions: [...STANDARD_INCLUSIONS, "Tour manager accompanying the group throughout"],
    exclusions: STANDARD_EXCLUSIONS,
    faqs: [
      { question: "Is the group size limited?", answer: "Departures are capped at 24 travellers so the coach and the guide can stay with one group." },
    ],
    metaTitle: "Pattaya & Bangkok Group Tour 5D/4N",
    metaDescription:
      "Fixed departure group tour to Pattaya and Bangkok — 5 days, 4 nights with flights, hotels, Coral Island, Safari World and the Grand Palace.",
    departures: [
      // The two real 2025 dates from the legacy site. Both expired — kept on
      // purpose so the calendar shows history rather than a blank page.
      { departureDate: "2025-04-25", price: 38500, seatsTotal: 24, seatsRemaining: 0, boardingCity: "Kochi" },
      { departureDate: "2025-05-02", price: 38500, seatsTotal: 24, seatsRemaining: 0, boardingCity: "Kochi" },
      // Illustrative future dates so the default "upcoming" view is populated.
      { departureDate: "2026-10-23", price: 41500, seatsTotal: 24, seatsRemaining: 11, boardingCity: "Kochi" },
      { departureDate: "2026-12-26", price: 46900, seatsTotal: 24, seatsRemaining: 0, boardingCity: "Kochi" },
      { departureDate: "2027-02-12", price: 41500, seatsTotal: 24, seatsRemaining: 19, boardingCity: "Trivandrum" },
    ],
  },
  {
    slug: "ladakh-6d5n",
    title: "Ladakh — 6 Days / 5 Nights",
    summary:
      "Leh, Nubra and Pangong at a pace that lets you acclimatise properly, with two full nights in Leh before going any higher.",
    destinationSlug: "ladakh",
    category: "group-tours",
    type: "fixed-departure",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 44000,
    featured: false,
    order: 2,
    heroImage: d("ladakh"),
    gallery: [d("ladakh")],
    highlights: [
      "Two acclimatisation nights in Leh before any high pass",
      "Khardung La and the Nubra Valley",
      "Overnight at Pangong Tso",
      "Thiksey monastery morning prayers",
      "Inner Line Permits arranged for you",
    ],
    itinerary: [
      { day: 1, title: "Arrive Leh — rest day", description: "Met at the airport and taken to the hotel. Complete rest for the remainder of the day; this is not wasted time, it is what makes the rest of the trip possible.", stay: "Leh", meals: "Dinner" },
      { day: 2, title: "Leh local sightseeing", description: "A gentle day at low exertion — Shanti Stupa, Leh Palace, Magnetic Hill and the Indus–Zanskar confluence at Sangam.", stay: "Leh", meals: "Breakfast, dinner" },
      { day: 3, title: "Leh to Nubra over Khardung La", description: "Over the pass at 5,359 m with a short stop only, then down to Hunder for the dunes and the double-humped camels.", stay: "Nubra", meals: "Breakfast, dinner" },
      { day: 4, title: "Nubra to Pangong Tso", description: "The Shyok river road across to Pangong. Afternoon and sunset at the lake, overnight in camp on the shore.", stay: "Pangong", meals: "Breakfast, dinner" },
      { day: 5, title: "Pangong to Leh via Chang La", description: "Sunrise at the lake, then back over Chang La with a stop at Thiksey monastery on the way in.", stay: "Leh", meals: "Breakfast, dinner" },
      { day: 6, title: "Departure", description: "Transfer to Leh airport for the morning flight.", meals: "Breakfast" },
    ],
    inclusions: [
      ...STANDARD_INCLUSIONS,
      "Inner Line Permits for Nubra and Pangong",
      "Oxygen cylinder carried in the vehicle",
      "Dinner on all nights",
    ],
    exclusions: [...STANDARD_EXCLUSIONS, "Any additional night caused by weather or road closure"],
    faqs: [
      { question: "Why two nights in Leh before going higher?", answer: "Leh is at 3,500 m. Acute mountain sickness is the single most common reason a Ladakh trip goes wrong, and two quiet nights at altitude is the accepted way to avoid it. We will not sell an itinerary that skips it." },
    ],
    metaTitle: "Ladakh Group Tour 6D/5N",
    metaDescription:
      "Fixed departure Ladakh group tour — Leh, Khardung La, Nubra Valley and an overnight at Pangong Tso, with permits and a properly paced acclimatisation plan.",
    departures: [
      { departureDate: "2024-09-12", price: 44000, seatsTotal: 20, seatsRemaining: 0, boardingCity: "Kochi" },
      { departureDate: "2027-06-18", price: 48500, seatsTotal: 20, seatsRemaining: 14, boardingCity: "Kochi" },
      { departureDate: "2027-08-06", price: 48500, seatsTotal: 20, seatsRemaining: 20, boardingCity: "Kochi" },
    ],
  },
  {
    slug: "phuket-krabi-5d4n",
    title: "Phuket & Krabi — 5 Days / 4 Nights",
    summary:
      "Both of Thailand's island bases in one trip — Phi Phi by speedboat from Phuket, and the Four Islands from Krabi.",
    destinationSlug: "thailand",
    category: "group-tours",
    type: "fixed-departure",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 42000,
    featured: false,
    order: 3,
    heroImage: x("phuket"),
    gallery: [d("thailand"), x("phuket")],
    highlights: [
      "Phi Phi Islands by speedboat",
      "Phang Nga Bay and James Bond Island",
      "Krabi Four Islands tour",
      "Sunset at Promthep Cape",
      "Old Phuket Town walking evening",
    ],
    itinerary: [
      { day: 1, title: "Arrive Phuket", description: "Airport transfer and check-in. Evening at Promthep Cape for the sunset and then Patong at your own pace.", stay: "Phuket", meals: "Dinner" },
      { day: 2, title: "Phi Phi Islands", description: "Full-day speedboat trip — Maya Bay, Pileh Lagoon, Monkey Beach and Bamboo Island, with lunch on board.", stay: "Phuket", meals: "Breakfast, lunch" },
      { day: 3, title: "Phang Nga Bay, transfer to Krabi", description: "James Bond Island and the sea caves by longtail canoe in the morning, then the road transfer across to Krabi.", stay: "Krabi", meals: "Breakfast, lunch" },
      { day: 4, title: "Krabi Four Islands", description: "Tup, Chicken, Poda and Phra Nang by longtail, including the sandbank that appears at low tide. Free evening at Ao Nang.", stay: "Krabi", meals: "Breakfast, lunch" },
      { day: 5, title: "Departure", description: "Transfer to Krabi airport for the flight home.", meals: "Breakfast" },
    ],
    inclusions: [...STANDARD_INCLUSIONS, "All island trips with national park fees included"],
    exclusions: STANDARD_EXCLUSIONS,
    faqs: [
      { question: "Are the boat trips suitable for children?", answer: "The Krabi longtail trip is calm and fine for most ages. The Phi Phi speedboat run is faster and choppier — tell us the ages and we will swap it for the slower ferry if that is the better call." },
    ],
    metaTitle: "Phuket & Krabi Group Tour 5D/4N",
    metaDescription:
      "Fixed departure Phuket and Krabi tour with Phi Phi Islands, Phang Nga Bay and the Four Islands trip. Flights, hotels and transfers included.",
    departures: [
      { departureDate: "2024-11-08", price: 42000, seatsTotal: 22, seatsRemaining: 0, boardingCity: "Kochi" },
      { departureDate: "2026-11-13", price: 45500, seatsTotal: 22, seatsRemaining: 6, boardingCity: "Kochi" },
      { departureDate: "2027-01-22", price: 45500, seatsTotal: 22, seatsRemaining: 22, boardingCity: "Trivandrum" },
    ],
  },
  {
    slug: "langkawi-4d3n",
    title: "Langkawi — 4 Days / 3 Nights",
    summary:
      "A short island break with the SkyCab, the island-hopping trip and enough free time to actually sit on the beach.",
    destinationSlug: "malaysia",
    category: "group-tours",
    type: "fixed-departure",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 32500,
    featured: false,
    order: 4,
    heroImage: d("malaysia"),
    gallery: [d("malaysia")],
    highlights: [
      "Langkawi SkyCab and the curved Sky Bridge",
      "Island-hopping to Dayang Bunting and the eagle feeding",
      "Mangrove kilim geoforest tour",
      "Duty-free shopping at Kuah",
    ],
    itinerary: [
      { day: 1, title: "Arrive Langkawi", description: "Transfer to the hotel at Pantai Cenang. Evening free on the beach.", stay: "Langkawi", meals: "Dinner" },
      { day: 2, title: "SkyCab and island tour", description: "Cable car to the Sky Bridge in the morning while the peak is clear, then the afternoon island-hopping boat trip with the eagle feeding.", stay: "Langkawi", meals: "Breakfast" },
      { day: 3, title: "Mangrove tour and Kuah", description: "Kilim Geoforest Park by boat — mangroves, bat cave and fish farm — then Eagle Square and the duty-free shops at Kuah.", stay: "Langkawi", meals: "Breakfast, lunch" },
      { day: 4, title: "Departure", description: "Free morning, then transfer to the airport.", meals: "Breakfast" },
    ],
    inclusions: STANDARD_INCLUSIONS,
    exclusions: STANDARD_EXCLUSIONS,
    faqs: [],
    metaTitle: "Langkawi Group Tour 4D/3N",
    metaDescription:
      "Fixed departure Langkawi island break with the SkyCab, island hopping, mangrove tour and beach time. Flights and hotels included.",
    departures: [
      { departureDate: "2024-11-15", price: 32500, seatsTotal: 20, seatsRemaining: 0, boardingCity: "Kochi" },
      { departureDate: "2026-12-11", price: 35900, seatsTotal: 20, seatsRemaining: 9, boardingCity: "Kochi" },
    ],
  },

  /* ========================= CUSTOMISED PACKAGES ========================= */
  {
    slug: "dubai-city-escape-5d4n",
    title: "Dubai City Escape — 5 Days / 4 Nights",
    summary:
      "The city done properly in four nights — Burj Khalifa, a desert evening, the Marina by dhow and a full free day for the malls or Abu Dhabi.",
    destinationSlug: "dubai",
    category: "family",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 52000,
    featured: false,
    order: 10,
    heroImage: d("dubai"),
    gallery: [d("dubai")],
    highlights: [
      "Burj Khalifa level 124 with a timed late-afternoon slot",
      "Desert safari with barbecue dinner",
      "Dhow cruise on Dubai Marina",
      "Dubai Frame and Old Dubai souks",
      "UAE tourist visa handled for you",
    ],
    itinerary: [
      { day: 1, title: "Arrive Dubai", description: "Airport pickup and hotel check-in. Evening free — the Dubai Mall fountain show runs every half hour after six.", stay: "Dubai", meals: "—" },
      { day: 2, title: "Modern Dubai and the Burj", description: "Dubai Frame, Palm Jumeirah drive and Marina, then the Burj Khalifa observation deck timed for the change of light.", stay: "Dubai", meals: "Breakfast" },
      { day: 3, title: "Desert safari", description: "Morning free. Afternoon pickup for dune bashing, camel ride and a barbecue dinner with entertainment at the desert camp.", stay: "Dubai", meals: "Breakfast, dinner" },
      { day: 4, title: "Old Dubai, free afternoon", description: "Abra crossing over the creek, the gold and spice souks, and the Al Fahidi quarter. Afternoon free for shopping or an Abu Dhabi add-on.", stay: "Dubai", meals: "Breakfast" },
      { day: 5, title: "Departure", description: "Transfer to the airport.", meals: "Breakfast" },
    ],
    inclusions: [...STANDARD_INCLUSIONS, "UAE tourist visa processing"],
    exclusions: [...STANDARD_EXCLUSIONS, "Optional Abu Dhabi day trip"],
    faqs: [
      { question: "Can this be run as a honeymoon instead?", answer: "Yes — we swap the desert group safari for a private one and move the hotel to the Marina or Palm. Ask and we will requote." },
    ],
    metaTitle: "Dubai Tour Package 5D/4N",
    metaDescription:
      "Dubai holiday package with flights, visa, hotel, Burj Khalifa, desert safari and city tours. Family and first-time traveller friendly.",
    departures: [],
  },
  {
    slug: "dubai-honeymoon-5d4n",
    title: "Dubai Honeymoon — 5 Days / 4 Nights",
    summary:
      "A Marina-view room, a private desert evening and a dinner cruise, with the sightseeing kept deliberately light.",
    destinationSlug: "dubai",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 74000,
    featured: false,
    order: 11,
    heroImage: d("dubai"),
    gallery: [d("dubai")],
    highlights: [
      "Marina or Palm view room with honeymoon set-up",
      "Private desert safari, not a shared coach",
      "Dinner cruise on Dubai Creek",
      "Burj Khalifa sunset slot",
      "Late checkout on the final day",
    ],
    itinerary: [
      { day: 1, title: "Arrive Dubai", description: "Private transfer, check-in and the rest of the evening free.", stay: "Dubai", meals: "—" },
      { day: 2, title: "City at your own pace", description: "A half-day private city tour — Palm Jumeirah, the Marina and Jumeirah Beach — with the afternoon left open.", stay: "Dubai", meals: "Breakfast" },
      { day: 3, title: "Private desert evening", description: "Private 4x4 to the desert, dune drive, sunset photographs and a quiet dinner at the camp.", stay: "Dubai", meals: "Breakfast, dinner" },
      { day: 4, title: "Burj Khalifa and dinner cruise", description: "A sunset slot at the top of the Burj, then a dhow dinner cruise on the creek.", stay: "Dubai", meals: "Breakfast, dinner" },
      { day: 5, title: "Departure", description: "Late checkout where the hotel allows it, then the airport transfer.", meals: "Breakfast" },
    ],
    inclusions: [...STANDARD_INCLUSIONS, "UAE tourist visa processing", "Private vehicle throughout", "Honeymoon room set-up and cake"],
    exclusions: STANDARD_EXCLUSIONS,
    faqs: [],
    metaTitle: "Dubai Honeymoon Package 5D/4N",
    metaDescription:
      "Dubai honeymoon package with private transfers, a Marina-view room, private desert safari, Burj Khalifa sunset and a dinner cruise.",
    departures: [],
  },
  {
    slug: "singapore-sentosa-5d4n",
    title: "Singapore & Sentosa — 5 Days / 4 Nights",
    summary:
      "Universal Studios, the Night Safari and Gardens by the Bay, with the MRT passes sorted so you are not queuing for tickets.",
    destinationSlug: "singapore",
    category: "family",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 68000,
    featured: false,
    order: 12,
    heroImage: x("gardensByTheBay"),
    gallery: [d("singapore"), x("gardensByTheBay")],
    highlights: [
      "Universal Studios Singapore, full day",
      "Night Safari tram and walking trail",
      "Gardens by the Bay with the evening light show",
      "Sentosa cable car and Wings of Time",
      "Singapore e-visa filed for you",
    ],
    itinerary: [
      { day: 1, title: "Arrive Singapore", description: "Airport transfer and check-in, with the MRT tourist pass issued on arrival. Evening at Marina Bay for the Spectra light show.", stay: "Singapore", meals: "—" },
      { day: 2, title: "City tour and Gardens by the Bay", description: "Merlion Park, Chinatown and Little India in the morning, then the Cloud Forest and Flower Dome, staying on for the Supertree light show at 7.45.", stay: "Singapore", meals: "Breakfast" },
      { day: 3, title: "Sentosa and Universal Studios", description: "A full day at Universal Studios, then the cable car across and Wings of Time in the evening.", stay: "Singapore", meals: "Breakfast" },
      { day: 4, title: "Night Safari", description: "Free day for Jurong Bird Park, the Science Centre or Orchard Road, then the Night Safari after dark.", stay: "Singapore", meals: "Breakfast" },
      { day: 5, title: "Departure", description: "Transfer to Changi with time to see the Jewel waterfall before the flight.", meals: "Breakfast" },
    ],
    inclusions: [...STANDARD_INCLUSIONS, "Singapore e-visa processing", "MRT tourist travel pass"],
    exclusions: STANDARD_EXCLUSIONS,
    faqs: [
      { question: "Is Universal Studios worth a full day?", answer: "With children, yes. Without, half a day is usually enough and we would move the rest to Sentosa or the Science Centre." },
    ],
    metaTitle: "Singapore Family Package 5D/4N",
    metaDescription:
      "Singapore family holiday package with e-visa, flights, hotel, Universal Studios, Night Safari, Sentosa and Gardens by the Bay.",
    departures: [],
  },
  {
    slug: "maldives-overwater-honeymoon-4d3n",
    title: "Maldives Overwater Honeymoon — 4 Days / 3 Nights",
    summary:
      "Two nights beach villa, one night overwater, on an island with a real house reef you can swim to.",
    destinationSlug: "maldives",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 89000,
    featured: false,
    order: 13,
    heroImage: d("maldives"),
    gallery: [d("maldives")],
    highlights: [
      "Split stay — beach villa then overwater villa",
      "Speedboat transfer, so a late flight does not cost you a night in Malé",
      "House reef snorkelling from the beach",
      "Sunset dolphin cruise",
      "Honeymoon set-up and a private beach dinner",
    ],
    itinerary: [
      { day: 1, title: "Arrive Malé, speedboat to the island", description: "Met at Velana International and transferred by speedboat. Check in to the beach villa; afternoon free.", stay: "Beach villa", meals: "Half board" },
      { day: 2, title: "Reef and lagoon", description: "Snorkelling on the house reef in the morning and a sunset dolphin cruise in the evening.", stay: "Beach villa", meals: "Half board" },
      { day: 3, title: "Move to the overwater villa", description: "Transfer across to the overwater villa, with a private beach dinner in the evening.", stay: "Overwater villa", meals: "Half board" },
      { day: 4, title: "Departure", description: "Speedboat back to Malé for the flight home.", meals: "Breakfast" },
    ],
    inclusions: [
      "Return economy airfare with checked baggage",
      "Three nights on half board, split between beach and overwater villa",
      "Return speedboat transfers",
      "Sunset dolphin cruise",
      "Honeymoon set-up, cake and one private beach dinner",
      "All applicable taxes and the green tax",
    ],
    exclusions: [...STANDARD_EXCLUSIONS, "Excursions and water sports beyond those listed"],
    faqs: [
      { question: "Why not all three nights overwater?", answer: "It is a large price jump for a room you will mostly sleep in, and the beach villas on the islands we use are excellent. Splitting the stay gets you the photograph and the budget." },
    ],
    metaTitle: "Maldives Honeymoon Package 4D/3N",
    metaDescription:
      "Maldives honeymoon package with flights, speedboat transfers, a split beach and overwater villa stay, half board and a private beach dinner.",
    departures: [],
  },
  {
    slug: "bali-honeymoon-6d5n",
    title: "Bali Honeymoon — 6 Days / 5 Nights",
    summary:
      "Three nights in Ubud among the rice terraces and two on the coast, with a private pool villa for both halves.",
    destinationSlug: "bali",
    category: "honeymoon",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 78000,
    featured: false,
    order: 14,
    heroImage: d("bali"),
    gallery: [d("bali")],
    highlights: [
      "Private pool villas in both Ubud and the south",
      "Tegallalang rice terraces before the crowds",
      "Tanah Lot and Uluwatu at sunset",
      "Floating breakfast and a candlelit dinner",
      "Nusa Penida day trip, optional",
    ],
    itinerary: [
      { day: 1, title: "Arrive Denpasar, transfer to Ubud", description: "Private transfer inland, about ninety minutes. Evening free at the villa.", stay: "Ubud", meals: "—" },
      { day: 2, title: "Ubud and the terraces", description: "Tegallalang early, then the Monkey Forest, Tirta Empul and the art villages. Floating breakfast at the villa to start.", stay: "Ubud", meals: "Breakfast" },
      { day: 3, title: "Kintamani and the waterfalls", description: "Mount Batur viewpoint, a coffee plantation and Tegenungan waterfall.", stay: "Ubud", meals: "Breakfast" },
      { day: 4, title: "Transfer south via Tanah Lot", description: "Drive to Seminyak or Nusa Dua, stopping at Tanah Lot for the sunset.", stay: "South coast", meals: "Breakfast" },
      { day: 5, title: "Uluwatu and a candlelit dinner", description: "Free day on the beach, then Uluwatu temple, the Kecak dance and dinner at Jimbaran.", stay: "South coast", meals: "Breakfast, dinner" },
      { day: 6, title: "Departure", description: "Transfer to Denpasar airport.", meals: "Breakfast" },
    ],
    inclusions: [...STANDARD_INCLUSIONS, "Private pool villa accommodation", "Floating breakfast and one candlelit dinner"],
    exclusions: [...STANDARD_EXCLUSIONS, "Indonesian visa on arrival fee", "Optional Nusa Penida day trip"],
    faqs: [],
    metaTitle: "Bali Honeymoon Package 6D/5N",
    metaDescription:
      "Bali honeymoon package with private pool villas in Ubud and on the coast, rice terraces, Tanah Lot, Uluwatu and a candlelit dinner.",
    departures: [],
  },
  {
    slug: "kerala-backwaters-munnar-5d4n",
    title: "Kerala — Munnar, Thekkady & Alleppey, 5 Days / 4 Nights",
    summary:
      "Tea hills, spice forest and a night on a houseboat, with drives kept short enough to enjoy.",
    destinationSlug: "kerala",
    category: "family",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 21500,
    featured: false,
    order: 15,
    heroImage: d("kerala"),
    gallery: [d("kerala"), x("houseboat")],
    highlights: [
      "Two nights in Munnar tea country",
      "Periyar boat safari at first light",
      "Overnight on an air-conditioned houseboat",
      "Spice plantation walk at Thekkady",
      "Private car and driver throughout",
    ],
    itinerary: [
      { day: 1, title: "Kochi to Munnar", description: "Pickup at Kochi airport or railway station and the drive up to Munnar, stopping at Cheeyappara falls and a tea outlet on the way.", stay: "Munnar", meals: "Dinner" },
      { day: 2, title: "Munnar sightseeing", description: "Mattupetty dam, Echo Point, Kundala lake and the tea museum, with the Eravikulam park in the morning if the season allows.", stay: "Munnar", meals: "Breakfast, dinner" },
      { day: 3, title: "Munnar to Thekkady", description: "Down through the spice hills to Thekkady. Afternoon plantation walk and an evening Kalaripayattu performance.", stay: "Thekkady", meals: "Breakfast, dinner" },
      { day: 4, title: "Periyar and on to Alleppey", description: "First boat on Periyar lake, then the drive to Alleppey to board the houseboat at noon. Cruise, lunch and dinner on board.", stay: "Houseboat", meals: "Breakfast, lunch, dinner" },
      { day: 5, title: "Disembark and depart", description: "Breakfast on board, disembark at nine and transfer to Kochi.", meals: "Breakfast" },
    ],
    inclusions: [
      "Accommodation on twin-sharing basis",
      "Daily breakfast, plus dinner on nights 1–3",
      "Full board on the houseboat",
      "Private air-conditioned car with driver throughout",
      "All listed entry tickets and the Periyar boat safari",
      "All applicable taxes",
    ],
    exclusions: [...STANDARD_EXCLUSIONS, "Airfare or train fare to and from Kochi"],
    faqs: [
      { question: "Can the houseboat be swapped for a day cruise?", answer: "Yes. Some travellers would rather not sleep on the water — we substitute a five-hour day cruise and an extra night at a lakeside resort, usually at a lower cost." },
    ],
    metaTitle: "Kerala Tour Package 5D/4N — Munnar, Thekkady, Alleppey",
    metaDescription:
      "Kerala holiday package covering Munnar, Thekkady and an Alleppey houseboat overnight, with a private car and driver throughout.",
    departures: [],
  },
  {
    slug: "kashmir-valley-6d5n",
    title: "Kashmir Valley — 6 Days / 5 Nights",
    summary:
      "Srinagar, Gulmarg, Pahalgam and Sonamarg, with two nights on a houseboat and a full day kept for Gulmarg.",
    destinationSlug: "kashmir-srinagar",
    category: "family",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 34500,
    featured: false,
    order: 16,
    heroImage: d("kashmir-srinagar"),
    gallery: [d("kashmir-srinagar")],
    highlights: [
      "Two nights on a Dal or Nigeen Lake houseboat",
      "A full day at Gulmarg, both gondola phases",
      "Overnight at Pahalgam rather than a day trip",
      "Dawn shikara to the floating market",
      "Mughal Gardens in the late afternoon light",
    ],
    itinerary: [
      { day: 1, title: "Arrive Srinagar", description: "Met at the airport and taken to the houseboat. Evening shikara ride on the lake.", stay: "Houseboat", meals: "Breakfast, dinner" },
      { day: 2, title: "Srinagar and the Mughal Gardens", description: "Dawn shikara to the floating vegetable market, then Nishat, Shalimar and Chashme Shahi in the afternoon.", stay: "Houseboat", meals: "Breakfast, dinner" },
      { day: 3, title: "Gulmarg, full day", description: "The drive up and both gondola phases if the weather holds, with time for the meadow.", stay: "Srinagar", meals: "Breakfast, dinner" },
      { day: 4, title: "Pahalgam", description: "Down to Pahalgam through the saffron fields and cricket-bat willows, with Betaab and Aru valleys in the afternoon.", stay: "Pahalgam", meals: "Breakfast, dinner" },
      { day: 5, title: "Sonamarg and back to Srinagar", description: "The day trip up to Sonamarg, with the optional Thajiwas glacier walk, then back to Srinagar.", stay: "Srinagar", meals: "Breakfast, dinner" },
      { day: 6, title: "Departure", description: "Transfer to Srinagar airport.", meals: "Breakfast" },
    ],
    inclusions: [
      ...STANDARD_INCLUSIONS,
      "Dinner on all nights",
      "Two shikara rides",
      "Houseboat stay on Dal or Nigeen Lake",
    ],
    exclusions: [...STANDARD_EXCLUSIONS, "Gondola tickets at Gulmarg", "Pony rides and local union taxis at Pahalgam and Sonamarg"],
    faqs: [
      { question: "Why are the Gulmarg gondola tickets excluded?", answer: "Because the second phase closes on wind at short notice and we would rather not charge you for something you may not be able to use. We book them locally on the day." },
    ],
    metaTitle: "Kashmir Tour Package 6D/5N",
    metaDescription:
      "Kashmir holiday package with a Srinagar houseboat stay, a full day at Gulmarg, an overnight at Pahalgam and a Sonamarg day trip.",
    departures: [],
  },
  {
    slug: "goa-getaway-4d3n",
    title: "Goa Getaway — 4 Days / 3 Nights",
    summary:
      "A long-weekend South Goa break with the Old Goa churches and a Mandovi sunset cruise, and the beach left alone.",
    destinationSlug: "goa",
    category: "family",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 9999,
    featured: false,
    order: 17,
    heroImage: d("goa"),
    gallery: [d("goa")],
    highlights: [
      "South Goa beach base at Palolem or Colva",
      "Old Goa churches and the Basilica of Bom Jesus",
      "Mandovi river sunset cruise",
      "Optional Dudhsagar jeep safari",
      "Airport transfers included",
    ],
    itinerary: [
      { day: 1, title: "Arrive Goa", description: "Transfer to the South Goa hotel. The rest of the day on the beach.", stay: "South Goa", meals: "Breakfast" },
      { day: 2, title: "North Goa and Old Goa", description: "Basilica of Bom Jesus and Se Cathedral in the morning, then Panjim and the Mandovi sunset cruise.", stay: "South Goa", meals: "Breakfast" },
      { day: 3, title: "Free day", description: "Beach day, or the optional Dudhsagar falls jeep safari, or a spice plantation lunch.", stay: "South Goa", meals: "Breakfast" },
      { day: 4, title: "Departure", description: "Transfer to Dabolim or Mopa airport.", meals: "Breakfast" },
    ],
    inclusions: [
      "Accommodation on twin-sharing basis",
      "Daily breakfast",
      "Airport transfers and one full-day sightseeing by air-conditioned vehicle",
      "Mandovi river cruise tickets",
      "All applicable taxes",
    ],
    exclusions: [...STANDARD_EXCLUSIONS, "Airfare or train fare", "Optional Dudhsagar jeep safari", "Water sports"],
    faqs: [
      { question: "Why South Goa and not North?", answer: "Because most families who book Goa want quiet and get sold noise. If you want the markets and the nightlife we will move you north — just say so and we will requote." },
    ],
    metaTitle: "Goa Package 4D/3N from ₹9,999",
    metaDescription:
      "South Goa long-weekend package with hotel, breakfast, transfers, Old Goa sightseeing and a Mandovi sunset cruise.",
    departures: [],
  },
  {
    slug: "andaman-islands-5d4n",
    title: "Andaman Islands — 5 Days / 4 Nights",
    summary:
      "Port Blair, Havelock and Neil with every ferry booked in advance, because the ferries are what break this trip.",
    destinationSlug: "andaman",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 38000,
    featured: false,
    order: 18,
    heroImage: d("andaman"),
    gallery: [d("andaman")],
    highlights: [
      "All inter-island ferries pre-booked and confirmed",
      "Radhanagar Beach at sunset",
      "Elephant Beach snorkelling on the first boat out",
      "Cellular Jail light and sound show",
      "Optional try-dive for complete beginners",
    ],
    itinerary: [
      { day: 1, title: "Arrive Port Blair", description: "Transfer and check-in, then Corbyn's Cove and the Cellular Jail light and sound show in the evening.", stay: "Port Blair", meals: "Breakfast" },
      { day: 2, title: "Ferry to Havelock", description: "Morning cruise across to Havelock, afternoon free, and Radhanagar Beach for the sunset.", stay: "Havelock", meals: "Breakfast" },
      { day: 3, title: "Elephant Beach", description: "First boat out to Elephant Beach for snorkelling, with an optional try-dive. Afternoon at leisure.", stay: "Havelock", meals: "Breakfast" },
      { day: 4, title: "Neil Island and back to Port Blair", description: "Ferry to Neil for Bharatpur and Laxmanpur beaches and the natural bridge, then on to Port Blair in the evening.", stay: "Port Blair", meals: "Breakfast" },
      { day: 5, title: "Departure", description: "Transfer to Veer Savarkar airport.", meals: "Breakfast" },
    ],
    inclusions: [
      ...STANDARD_INCLUSIONS,
      "All inter-island ferry tickets in the class stated on your confirmation",
      "Cellular Jail show tickets",
    ],
    exclusions: [...STANDARD_EXCLUSIONS, "Scuba diving and water sports", "Any cost arising from ferry cancellation due to weather"],
    faqs: [
      { question: "What happens if a ferry is cancelled?", answer: "We rebook you on the next available sailing and adjust the hotels. It is uncommon outside the monsoon, but it does happen, and someone from our office handles it rather than leaving you at the jetty." },
    ],
    metaTitle: "Andaman Tour Package 5D/4N",
    metaDescription:
      "Andaman holiday package covering Port Blair, Havelock and Neil Island with all ferries pre-booked, hotels, transfers and snorkelling.",
    departures: [],
  },
  {
    slug: "baku-discovery-5d4n",
    title: "Baku Discovery — 5 Days / 4 Nights",
    summary:
      "The old city, the Caspian promenade, Gobustan's mud volcanoes and a day up in the Gabala mountains.",
    destinationSlug: "azerbaijan",
    category: "group-tours",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 55000,
    featured: false,
    order: 19,
    heroImage: d("azerbaijan"),
    gallery: [d("azerbaijan")],
    highlights: [
      "Icherisheher, the walled old city",
      "Gobustan rock art and the mud volcanoes by 4x4",
      "Flame Towers and Baku Boulevard after dark",
      "Gabala mountain day trip",
      "ASAN e-visa filed for you",
    ],
    itinerary: [
      { day: 1, title: "Arrive Baku", description: "Airport transfer and check-in. Evening walk along the boulevard with the Flame Towers lit.", stay: "Baku", meals: "Breakfast" },
      { day: 2, title: "Old and new Baku", description: "Maiden Tower, Shirvanshahs' Palace and the walled city in the morning, Heydar Aliyev Center and Highland Park in the afternoon.", stay: "Baku", meals: "Breakfast" },
      { day: 3, title: "Gobustan and Absheron", description: "Rock carvings, the mud volcanoes by 4x4, then Ateshgah fire temple and Yanar Dag on the way back.", stay: "Baku", meals: "Breakfast, lunch" },
      { day: 4, title: "Gabala", description: "A long day north into the mountains — the cable car, Nohur lake and the Yeddi Gozel waterfall.", stay: "Baku", meals: "Breakfast, lunch" },
      { day: 5, title: "Departure", description: "Transfer to Heydar Aliyev International.", meals: "Breakfast" },
    ],
    inclusions: [...STANDARD_INCLUSIONS, "ASAN e-visa processing", "4x4 for the mud volcano track"],
    exclusions: STANDARD_EXCLUSIONS,
    faqs: [],
    metaTitle: "Baku Azerbaijan Package 5D/4N",
    metaDescription:
      "Baku and Azerbaijan package with e-visa, flights, hotels, the old city, Gobustan mud volcanoes and a Gabala mountain day trip.",
    departures: [],
  },
  {
    slug: "vietnam-highlights-6d5n",
    title: "Vietnam Highlights — 6 Days / 5 Nights",
    summary:
      "Hanoi, an overnight cruise on Ha Long Bay, and the lantern-lit old town at Hoi An.",
    destinationSlug: "vietnam",
    category: "group-tours",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 64000,
    featured: false,
    order: 20,
    heroImage: d("vietnam"),
    gallery: [d("vietnam")],
    highlights: [
      "Overnight cruise on Ha Long Bay, not a day trip",
      "Hanoi Old Quarter and the water puppet theatre",
      "Ba Na Hills and the Golden Bridge",
      "Hoi An Ancient Town after dark",
      "Vietnam e-visa filed for you",
    ],
    itinerary: [
      { day: 1, title: "Arrive Hanoi", description: "Transfer and check-in, then the Old Quarter on foot and a water puppet show in the evening.", stay: "Hanoi", meals: "Breakfast" },
      { day: 2, title: "Ha Long Bay cruise", description: "Drive out to the bay and board at midday. Kayaking, a cave visit and dinner on board.", stay: "Cruise ship", meals: "Breakfast, lunch, dinner" },
      { day: 3, title: "Back to Hanoi, fly to Da Nang", description: "Morning on the bay, disembark after brunch, then the drive back and the evening flight south.", stay: "Da Nang", meals: "Breakfast, brunch" },
      { day: 4, title: "Ba Na Hills", description: "Cable car up to the Golden Bridge and the French village, back down in the afternoon.", stay: "Da Nang", meals: "Breakfast" },
      { day: 5, title: "Hoi An", description: "Marble Mountains on the way, then the Ancient Town — a tailor visit in the afternoon and the lanterns after dark.", stay: "Da Nang", meals: "Breakfast" },
      { day: 6, title: "Departure", description: "Transfer to Da Nang airport.", meals: "Breakfast" },
    ],
    inclusions: [...STANDARD_INCLUSIONS, "Vietnam e-visa processing", "Internal flight Hanoi–Da Nang", "One night aboard a Ha Long Bay cruise, full board"],
    exclusions: STANDARD_EXCLUSIONS,
    faqs: [],
    metaTitle: "Vietnam Tour Package 6D/5N",
    metaDescription:
      "Vietnam holiday package covering Hanoi, an overnight Ha Long Bay cruise, Da Nang, Ba Na Hills and Hoi An, with e-visa and internal flights.",
    departures: [],
  },
  {
    slug: "royal-rajasthan-7d6n",
    title: "Royal Rajasthan — 7 Days / 6 Nights",
    summary:
      "Jaipur, Jodhpur and Udaipur in six nights — three cities, not five, so you are not in the car all week.",
    destinationSlug: "rajasthan",
    category: "family",
    type: "customized",
    durationDays: 7,
    durationNights: 6,
    priceFrom: 46000,
    featured: false,
    order: 21,
    heroImage: d("rajasthan"),
    gallery: [d("rajasthan")],
    highlights: [
      "Three cities in six nights, deliberately not four",
      "Amber Fort at opening time",
      "Mehrangarh Fort with the audio guide",
      "Sunset boat on Lake Pichola",
      "One night in a genuine heritage property",
    ],
    itinerary: [
      { day: 1, title: "Arrive Jaipur", description: "Transfer and check-in, then Birla Mandir and the bazaars in the evening.", stay: "Jaipur", meals: "Breakfast" },
      { day: 2, title: "Jaipur", description: "Amber Fort at opening, then the City Palace, Jantar Mantar and a photo stop at the Hawa Mahal.", stay: "Jaipur", meals: "Breakfast" },
      { day: 3, title: "Jaipur to Jodhpur", description: "The drive across, with Pushkar as an optional stop. Evening free at the clock tower market.", stay: "Jodhpur", meals: "Breakfast" },
      { day: 4, title: "Jodhpur", description: "Mehrangarh Fort for the morning, Jaswant Thada and Mandore Gardens afterwards.", stay: "Jodhpur", meals: "Breakfast" },
      { day: 5, title: "Jodhpur to Udaipur via Ranakpur", description: "The Jain temples at Ranakpur on the way, arriving Udaipur by late afternoon.", stay: "Udaipur", meals: "Breakfast" },
      { day: 6, title: "Udaipur", description: "City Palace and the Jagdish temple in the morning, Saheliyon ki Bari in the afternoon and a sunset boat on Lake Pichola.", stay: "Udaipur", meals: "Breakfast" },
      { day: 7, title: "Departure", description: "Transfer to Udaipur airport.", meals: "Breakfast" },
    ],
    inclusions: [...STANDARD_INCLUSIONS, "One night in a heritage property", "Lake Pichola boat ride"],
    exclusions: [...STANDARD_EXCLUSIONS, "Elephant or jeep ride at Amber Fort", "Camera fees at monuments"],
    faqs: [],
    metaTitle: "Rajasthan Tour Package 7D/6N",
    metaDescription:
      "Rajasthan holiday package covering Jaipur, Jodhpur and Udaipur with heritage stays, fort touring and a Lake Pichola sunset boat.",
    departures: [],
  },
  {
    slug: "bangkok-dealer-meet-4d3n",
    title: "Bangkok Dealer Meet — 4 Days / 3 Nights",
    summary:
      "A turnkey incentive and dealer-meet programme for 40 to 150 delegates, with one coordinator from quote to departure.",
    destinationSlug: "thailand",
    // Was category "corporate". The client removed Corporate & MICE as a
    // package category — every corporate movement is quoted from scratch — so
    // these two are what they always were: customised trips.
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 46000,
    featured: false,
    order: 22,
    heroImage: x("pattaya"),
    gallery: [d("thailand"), x("pattaya")],
    highlights: [
      "Conference room with AV, stage and branding",
      "Group visa and airfare handled as one block",
      "Gala dinner with entertainment",
      "Team activity — Coral Island or a city treasure hunt",
      "One named coordinator travelling with the group",
    ],
    itinerary: [
      { day: 1, title: "Arrival and welcome dinner", description: "Group arrival, hotel check-in with pre-assigned rooming, and a welcome dinner in the evening.", stay: "Bangkok", meals: "Dinner" },
      { day: 2, title: "Conference day", description: "Full-day conference in the hotel with AV, two tea breaks and a working lunch. Evening free.", stay: "Bangkok", meals: "Breakfast, lunch" },
      { day: 3, title: "Team activity and gala dinner", description: "Half-day team activity, free afternoon for shopping, and the gala dinner with entertainment in the evening.", stay: "Bangkok", meals: "Breakfast, dinner" },
      { day: 4, title: "Departure", description: "Group transfer to the airport.", meals: "Breakfast" },
    ],
    inclusions: [
      "Return group airfare with checked baggage",
      "Three nights in a four or five-star hotel, twin-sharing",
      "Conference hall with standard AV and stage branding",
      "Daily breakfast, one working lunch, welcome and gala dinners",
      "All group transfers in air-conditioned coaches",
      "One coordinator travelling with the group",
      "Group visa processing",
    ],
    exclusions: [
      "Personal expenses and extras billed to the room",
      "Single-occupancy supplement",
      "Anything not explicitly listed under inclusions",
    ],
    faqs: [
      { question: "What group size do you handle?", answer: "We have run single events for groups of over a hundred. Below about forty the per-head cost rises because the conference and coach costs are fixed — we will tell you where the break points sit." },
      { question: "Do you invoice the company directly?", answer: "Yes, with a GST invoice and a documented payment schedule against milestones." },
    ],
    metaTitle: "Bangkok Corporate & MICE Package 4D/3N",
    metaDescription:
      "Corporate dealer meet and incentive package in Bangkok — group airfare, conference hall, gala dinner and a dedicated coordinator, for 40 to 150 delegates.",
    departures: [],
  },
  {
    slug: "dubai-conference-4d3n",
    title: "Dubai Conference & Incentive — 4 Days / 3 Nights",
    summary:
      "Conference facilities in Dubai with a desert gala and an Abu Dhabi excursion, priced per delegate.",
    destinationSlug: "dubai",
    // Was category "corporate". The client removed Corporate & MICE as a
    // package category — every corporate movement is quoted from scratch — so
    // these two are what they always were: customised trips.
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 68000,
    featured: false,
    order: 23,
    heroImage: d("dubai"),
    gallery: [d("dubai")],
    highlights: [
      "Conference room with full AV in a business-district hotel",
      "Desert gala dinner with entertainment",
      "Abu Dhabi and Sheikh Zayed Mosque excursion",
      "Block UAE visa processing",
      "Airport meet-and-greet for the whole group",
    ],
    itinerary: [
      { day: 1, title: "Arrival", description: "Group meet-and-greet at the airport, transfer and check-in. Welcome dinner at the hotel.", stay: "Dubai", meals: "Dinner" },
      { day: 2, title: "Conference day", description: "Full-day session with AV, breaks and a working lunch. Evening free at Dubai Mall.", stay: "Dubai", meals: "Breakfast, lunch" },
      { day: 3, title: "Abu Dhabi and desert gala", description: "Sheikh Zayed Mosque and the Corniche in the morning, then the desert camp gala dinner in the evening.", stay: "Dubai", meals: "Breakfast, dinner" },
      { day: 4, title: "Departure", description: "Group transfer to the airport.", meals: "Breakfast" },
    ],
    inclusions: [
      "Return group airfare with checked baggage",
      "Three nights in a four or five-star hotel, twin-sharing",
      "Conference hall with standard AV",
      "Daily breakfast, one working lunch, welcome and gala dinners",
      "All group transfers in air-conditioned coaches",
      "Block UAE visa processing",
      "One coordinator travelling with the group",
    ],
    exclusions: [
      "Personal expenses and extras billed to the room",
      "Single-occupancy supplement",
      "Anything not explicitly listed under inclusions",
    ],
    faqs: [],
    metaTitle: "Dubai Corporate & MICE Package 4D/3N",
    metaDescription:
      "Dubai conference and incentive package with group airfare, block visas, conference facilities, a desert gala dinner and an Abu Dhabi excursion.",
    departures: [],
  },
  {
    slug: "europe-classic-10d9n",
    title: "Europe Classic — 10 Days / 9 Nights",
    summary:
      "Paris, Switzerland and Italy by rail rather than coach, with Schengen visa preparation handled from the start.",
    destinationSlug: "europe",
    category: "group-tours",
    type: "customized",
    durationDays: 10,
    durationNights: 9,
    priceFrom: 235000,
    featured: false,
    order: 24,
    heroImage: d("europe"),
    gallery: [d("europe")],
    highlights: [
      "Rail between cities, not a coach circuit",
      "Jungfraujoch or Mount Titlis, weather permitting",
      "Eiffel Tower summit with a timed ticket",
      "Venice, Florence and Rome",
      "Full Schengen visa file prepared and the appointment booked",
    ],
    itinerary: [
      { day: 1, title: "Arrive Paris", description: "Transfer and check-in, then an evening Seine cruise.", stay: "Paris", meals: "Breakfast" },
      { day: 2, title: "Paris", description: "City tour, the Louvre with a timed entry, and the Eiffel Tower summit in the evening.", stay: "Paris", meals: "Breakfast" },
      { day: 3, title: "Paris to Switzerland", description: "Morning free, then the afternoon train to Lucerne or Interlaken.", stay: "Switzerland", meals: "Breakfast" },
      { day: 4, title: "The high Alps", description: "Jungfraujoch or Mount Titlis, kept flexible so we can move it if the mountain is clouded in.", stay: "Switzerland", meals: "Breakfast" },
      { day: 5, title: "Lucerne and the lake", description: "Lion Monument, Chapel Bridge and a lake cruise, with a free afternoon.", stay: "Switzerland", meals: "Breakfast" },
      { day: 6, title: "Switzerland to Venice", description: "Train south through the Alps, arriving Venice in the afternoon. Evening at St Mark's Square.", stay: "Venice", meals: "Breakfast" },
      { day: 7, title: "Venice to Florence", description: "Gondola ride and the Doge's Palace in the morning, then the train to Florence.", stay: "Florence", meals: "Breakfast" },
      { day: 8, title: "Florence and Pisa", description: "The Duomo and Piazzale Michelangelo, with a half-day to Pisa.", stay: "Florence", meals: "Breakfast" },
      { day: 9, title: "Rome", description: "Train down to Rome, then the Colosseum, Roman Forum, Trevi Fountain and the Vatican.", stay: "Rome", meals: "Breakfast" },
      { day: 10, title: "Departure", description: "Transfer to Rome Fiumicino.", meals: "Breakfast" },
    ],
    inclusions: [
      ...STANDARD_INCLUSIONS,
      "All inter-city rail in second class with seat reservations",
      "Schengen visa file preparation and appointment booking",
      "City taxes at all hotels",
    ],
    exclusions: [
      ...STANDARD_EXCLUSIONS,
      "Schengen visa fee and biometric charges, payable at the centre",
      "Anything the weather forces us to substitute at extra cost",
    ],
    faqs: [
      { question: "How early should we start?", answer: "Four to five months before travel. Schengen appointment availability, not flights or hotels, is what decides how early a Europe trip has to be booked." },
    ],
    metaTitle: "Europe Tour Package 10D/9N",
    metaDescription:
      "Europe holiday package covering Paris, Switzerland, Venice, Florence and Rome by rail, with Schengen visa preparation, flights and hotels.",
    departures: [],
  },
  {
    slug: "darjeeling-gangtok-6d5n",
    title: "Darjeeling & Gangtok — 6 Days / 5 Nights",
    summary:
      "Tiger Hill at dawn, the toy train, and three nights in Sikkim with the Tsomgo Lake permit arranged.",
    destinationSlug: "darjeeling",
    category: "family",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 27500,
    featured: false,
    order: 25,
    heroImage: d("darjeeling"),
    gallery: [d("darjeeling")],
    highlights: [
      "Kanchenjunga sunrise from Tiger Hill",
      "Darjeeling Himalayan Railway joyride",
      "Happy Valley working tea estate",
      "Tsomgo Lake and Baba Mandir, permits included",
      "MG Marg evenings in Gangtok",
    ],
    itinerary: [
      { day: 1, title: "Bagdogra to Darjeeling", description: "Met at the airport and driven up, roughly three hours. Evening free on the Mall.", stay: "Darjeeling", meals: "Breakfast" },
      { day: 2, title: "Tiger Hill and the toy train", description: "A 4 am start for the sunrise, Batasia Loop and Ghum on the way back, then the tea estate and the Himalayan Mountaineering Institute.", stay: "Darjeeling", meals: "Breakfast" },
      { day: 3, title: "Darjeeling to Gangtok", description: "The drive across, about four hours. Evening on MG Marg.", stay: "Gangtok", meals: "Breakfast" },
      { day: 4, title: "Tsomgo Lake and Baba Mandir", description: "Up to the lake at 3,750 m with the permit arranged in advance, returning to Gangtok in the afternoon.", stay: "Gangtok", meals: "Breakfast" },
      { day: 5, title: "Gangtok sightseeing", description: "Rumtek monastery, Banjhakri falls, the ropeway and the handicraft centre.", stay: "Gangtok", meals: "Breakfast" },
      { day: 6, title: "Departure", description: "Transfer down to Bagdogra airport.", meals: "Breakfast" },
    ],
    inclusions: [...STANDARD_INCLUSIONS, "Tsomgo Lake protected area permit", "Toy train joyride tickets"],
    exclusions: [...STANDARD_EXCLUSIONS, "Nathu La pass permit, subject to availability"],
    faqs: [],
    metaTitle: "Darjeeling & Gangtok Package 6D/5N",
    metaDescription:
      "Darjeeling and Gangtok holiday package with Tiger Hill sunrise, the toy train, tea estates and Tsomgo Lake, permits and transfers included.",
    departures: [],
  },

  /* ==================== PROMOTIONAL PACKAGES (client copy) ================ */
  /*
    The seven packages the client promotes on the homepage. All of them are
    LAND ONLY — the price excludes airfare, which is why they carry their own
    inclusions rather than STANDARD_INCLUSIONS, and why every one of them
    states its basis in `priceNote`. `offerEndsOn` drives the "Offer ends"
    badge on the card and expires itself.

    TO DO: only Charm of Hyderabad has a day-by-day itinerary — it is the one
    the client sent a full proposal for (sample1.pdf). For the other six they
    supplied the highlight line and the price basis only; the itinerary,
    hotels and proposal fields go in through /admin/ as each proposal arrives.
  */
  {
    slug: "charm-of-hyderabad-3d2n",
    title: "Charm of Hyderabad",
    summary:
      "A full day at Ramoji Film City, the Charminar and Golconda Fort, and the laser show over Hussain Sagar.",
    priceNote:
      "Per adult, land only, min 4 sharing 2 rooms. Ramoji entry included; flights and other entry tickets extra.",
    destinationSlug: "hyderabad",
    category: "customized",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 7999,
    featured: true,
    offerEndsOn: "2026-09-30",
    order: 1,
    heroImage: d("hyderabad"),
    highlights: [
      "A full day at Ramoji Film City",
      "The Charminar and the Laad Bazaar quarter",
      "Golconda Fort",
      "The laser show over Hussain Sagar",
    ],
    /* Inclusions, exclusions, itinerary and the proposal fields below are
       transcribed from the client's own travel proposal for this trip
       (REF 004645, prepared 29 July 2026) — see sample1.pdf. */
    inclusions: [
      "2 nights' A/C room accommodation",
      "Daily breakfast except on arrival day",
      "Airport pick-up and drop",
      "Ramoji Film City entry ticket",
      "All local sightseeing entry tickets as per the itinerary",
      "Sedan car for sightseeing as per the itinerary",
      "Toll, parking and driver allowance",
      "GST",
    ],
    exclusions: [
      "Round trip airfare",
      "Early check-in or late check-out (standard check-in 12:00pm, check-out 10:00am)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Other sightseeing entry tickets",
      "Personal expenses, room service, special orders, and alcoholic/non-alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Local Sightseeing",
        description:
          "On arrival at Hyderabad Airport, transfer to your hotel to check in and freshen up. The city tour covers Birla Mandir, NTR Gardens, the 125-foot bronze Statue of Dr. B.R. Ambedkar, Lumbini Park and Hussain Sagar Lake, ending with the evening Laser Show before returning to the hotel.",
        stay: "Overnight, Hyderabad",
      },
      {
        day: 2,
        title: "Ramoji Film City Excursion",
        description:
          "After breakfast, a full-day excursion to Ramoji Film City, the world's largest integrated film studio complex, exploring its film sets, gardens and entertainment zones before returning to the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Hyderabad",
      },
      {
        day: 3,
        title: "Heritage Tour of Hyderabad",
        description:
          "After breakfast, a historical sightseeing tour: the Salar Jung Museum, the iconic Charminar and its surrounding markets, the historic Mecca Masjid, and Golconda Fort, before transferring to Hyderabad Airport for your onward journey.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004645",
    travelWindow: "August 2026",
    travellers: "3 adults",
    rooms: 1,
    stays: [
      {
        destination: "Hyderabad",
        hotel: "Hotel Central Park or similar",
        nights: 2,
        meals: "Breakfast",
      },
    ],
    metaTitle: "Charm of Hyderabad — 3 Days / 2 Nights",
    metaDescription:
      "Hyderabad in three days from ₹7,999 per adult — Ramoji Film City, the Charminar, Golconda Fort and the Hussain Sagar laser show. Land only.",
  },
  {
    slug: "fascinating-delhi-manali-5d4n",
    title: "Fascinating Delhi – Manali",
    summary:
      "Solang Valley, the Manali temples and Kullu, with a half-day of Delhi's landmarks before you fly.",
    priceNote:
      "Per adult, min 4 sharing 2 rooms. Two nights are on the overnight Volvo. Flights and entry tickets extra.",
    destinationSlug: "delhi-manali",
    category: "customized",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 8999,
    featured: true,
    offerEndsOn: "2026-09-30",
    order: 2,
    heroImage: d("delhi-manali"),
    highlights: [
      "Solang Valley",
      "Hadimba Temple and Old Manali",
      "Kullu valley on the way back",
      "A half-day of Delhi's landmarks before the flight home",
    ],
    inclusions: [
      "Overnight Volvo coach transfers between Delhi and Manali",
      ...LAND_ONLY_INCLUSIONS,
    ],
    exclusions: [
      "Flights to and from Delhi",
      "Entry tickets to monuments and attractions",
      "Rohtang Pass permits and the vehicle for it",
      ...LAND_ONLY_EXCLUSIONS,
    ],
    metaTitle: "Fascinating Delhi – Manali — 5 Days / 4 Nights",
    metaDescription:
      "Delhi and Manali in five days from ₹8,999 per adult — Solang Valley, Hadimba Temple and Kullu, with overnight Volvo transfers. Land only.",
  },
  {
    slug: "charm-of-delhi-agra-jaipur-4d3n",
    title: "Charm of Delhi, Agra & Jaipur",
    summary:
      "The Red Fort and Akshardham, the Taj Mahal at Agra, then Hawa Mahal and the City Palace at Jaipur.",
    priceNote:
      "Per adult, land only, min 4 sharing 2 rooms. Flights and all entry tickets extra, including the Taj Mahal.",
    destinationSlug: "golden-triangle",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 11999,
    featured: true,
    offerEndsOn: "2026-09-30",
    order: 3,
    heroImage: d("golden-triangle"),
    highlights: [
      "The Red Fort and Akshardham, Delhi",
      "The Taj Mahal at Agra",
      "Hawa Mahal, Jaipur",
      "The City Palace, Jaipur",
    ],
    inclusions: LAND_ONLY_INCLUSIONS,
    exclusions: [
      "Flights to and from Delhi",
      "All monument entry tickets, including the Taj Mahal",
      ...LAND_ONLY_EXCLUSIONS,
    ],
    metaTitle: "Charm of Delhi, Agra & Jaipur — 4 Days / 3 Nights",
    metaDescription:
      "The Golden Triangle in four days from ₹11,999 per adult — the Red Fort, Akshardham, the Taj Mahal, Hawa Mahal and the City Palace. Land only.",
  },
  {
    slug: "incredible-bali-4d3n",
    title: "Incredible Bali",
    summary:
      "Sea Walker at Benoa, a Phinisi sunset dinner cruise, Kintamani's volcano views and the jungle swing.",
    priceNote:
      "Per adult, land only, min 4 sharing 2 rooms. Flights, on-arrival visa and levy, and TCS extra.",
    destinationSlug: "bali",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 13999,
    featured: true,
    offerEndsOn: "2026-09-30",
    order: 4,
    heroImage: d("bali"),
    highlights: [
      "Sea Walker at Tanjung Benoa",
      "Phinisi sunset dinner cruise",
      "Kintamani and the volcano views",
      "The Bali jungle swing",
    ],
    inclusions: LAND_ONLY_INCLUSIONS,
    exclusions: [
      "Flights to and from Bali",
      "Visa on arrival and the tourist levy",
      "TCS on the overseas remittance",
      ...LAND_ONLY_EXCLUSIONS,
    ],
    metaTitle: "Incredible Bali — 4 Days / 3 Nights",
    metaDescription:
      "Bali in four days from ₹13,999 per adult — Sea Walker at Benoa, a Phinisi sunset cruise, Kintamani and the jungle swing. Land only.",
  },
  {
    slug: "charm-of-pattaya-bangkok-4d3n",
    title: "Charm of Pattaya & Bangkok",
    summary:
      "Pattaya's floating market and a speedboat day at Coral Island, then Wat Traimit and Wat Pho in Bangkok.",
    priceNote:
      "Per adult, land only, min 4 sharing 2 rooms. Entry tickets included; flights and TCS extra.",
    destinationSlug: "thailand",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 15999,
    featured: true,
    offerEndsOn: "2026-09-30",
    order: 5,
    heroImage: x("pattaya"),
    highlights: [
      "Pattaya floating market",
      "Speedboat day at Coral Island",
      "Wat Traimit, Bangkok",
      "Wat Pho, Bangkok",
    ],
    inclusions: [
      ...LAND_ONLY_INCLUSIONS,
      "Entry tickets for the attractions listed in the itinerary",
    ],
    exclusions: [
      "Flights to and from Bangkok",
      "TCS on the overseas remittance",
      ...LAND_ONLY_EXCLUSIONS,
    ],
    metaTitle: "Charm of Pattaya & Bangkok — 4 Days / 3 Nights",
    metaDescription:
      "Pattaya and Bangkok in four days from ₹15,999 per adult — the floating market, Coral Island by speedboat, Wat Traimit and Wat Pho. Land only.",
  },
  {
    slug: "fascinating-vietnam-4d3n",
    title: "Fascinating Vietnam",
    summary:
      "Hanoi's Old Quarter by electric car and egg coffee, then a night aboard a cruise among the Halong Bay karsts.",
    priceNote:
      "Per adult, min 4 sharing 2 rooms. Flights, visa, TCS and guide tipping extra.",
    destinationSlug: "vietnam",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 23999,
    featured: true,
    offerEndsOn: "2026-09-30",
    order: 6,
    heroImage: d("vietnam"),
    highlights: [
      "Hanoi's Old Quarter by electric car",
      "Egg coffee in the old town",
      "An overnight cruise in Halong Bay",
      "The karst islands of the bay",
    ],
    inclusions: [...LAND_ONLY_INCLUSIONS, "One night aboard the Halong Bay cruise"],
    exclusions: [
      "Flights to and from Hanoi",
      "Vietnam visa",
      "TCS on the overseas remittance",
      "Guide and crew tipping",
      ...LAND_ONLY_EXCLUSIONS,
    ],
    metaTitle: "Fascinating Vietnam — 4 Days / 3 Nights",
    metaDescription:
      "Vietnam in four days from ₹23,999 per adult — Hanoi's Old Quarter, egg coffee and an overnight cruise among the Halong Bay karsts.",
  },
  {
    slug: "fascinating-dubai-4d3n",
    title: "Fascinating Dubai",
    summary:
      "A creek dhow dinner cruise, the 124th floor of the Burj Khalifa, and a desert safari with BBQ under the stars.",
    priceNote:
      "Per adult, land only, min 4 sharing 2 rooms. Entry tickets included; flights, visa and TCS extra.",
    destinationSlug: "dubai",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 26999,
    featured: true,
    offerEndsOn: "2026-09-30",
    order: 7,
    heroImage: d("dubai"),
    highlights: [
      "Dhow dinner cruise on Dubai Creek",
      "The 124th floor of the Burj Khalifa",
      "Desert safari with a barbecue dinner",
      "Dubai city sightseeing",
    ],
    inclusions: [
      ...LAND_ONLY_INCLUSIONS,
      "Entry tickets for the attractions listed in the itinerary",
    ],
    exclusions: [
      "Flights to and from Dubai",
      "UAE visa",
      "TCS on the overseas remittance",
      ...LAND_ONLY_EXCLUSIONS,
    ],
    metaTitle: "Fascinating Dubai — 4 Days / 3 Nights",
    metaDescription:
      "Dubai in four days from ₹26,999 per adult — a creek dhow dinner cruise, the Burj Khalifa's 124th floor and a desert safari with BBQ. Land only.",
  },

  /* =============== PROPOSAL-BACKED PACKAGES (client PDF) ================= */
  /*
    Transcribed from the client's own travel proposal (REF 004946) — see
    sample2.pdf. This is the shape every quote they send out takes, so it is
    the reference entry: every proposal field the model carries is filled in
    here, and the detail page renders each one as its own section.
  */
  {
    slug: "charm-of-malaysia-3d2n",
    title: "Charm of Malaysia",
    summary:
      "Three days across Kuala Lumpur — Putrajaya's modern skyline, the golden statue and limestone caves at Batu, a cable-car ride into the hills at Genting, and the city's own landmarks.",
    priceNote:
      "Package cost shown per person; excludes airfare. Quoted rates are not valid on surcharged dates — public holidays, festivals or peak season — when additional charges will apply.",
    destinationSlug: "malaysia",
    category: "customized",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 21199,
    order: 8,
    heroImage: x("kualaLumpur"),
    highlights: [
      "Putrajaya en route from the airport",
      "Batu Caves and its golden statue",
      "The Genting Skyway cable car",
      "KL Tower Observatory Deck and the KLCC Aquarium",
    ],
    inclusions: [
      "2 nights' accommodation at the above-mentioned hotel",
      "Daily breakfast (except on arrival day)",
      "Meet & greet at the airport",
      "Sightseeing as per the above-mentioned itinerary",
      "All entry tickets as per the itinerary",
      "All tours and transfers on a private sedan",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "TCS",
      "Lunch and dinner",
      "Early check-in or late check-out (standard check-in after 1400/1500 hrs, check-out before 1100/1200 hrs)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival — Putrajaya Tour",
        description:
          "Upon arrival at Kuala Lumpur International Airport, you will be met and greeted by our representative and transferred to your hotel in Kuala Lumpur, with a visit to Putrajaya en route. Upon arrival at the hotel, you will proceed with check-in. In the evening, enjoy a 2-hour tour of Bukit Bintang, one of Kuala Lumpur's most vibrant shopping and entertainment districts. After the tour, return to the hotel for an overnight stay.",
        meals: "None",
        stay: "Overnight, Kuala Lumpur",
      },
      {
        day: 2,
        title: "Genting Highlands, Batu Caves & Cable Car",
        description:
          "After breakfast, begin your day with a visit to the iconic Batu Caves, one of Malaysia's most famous Hindu pilgrimage sites. Continue to Genting Highlands, a popular hill resort offering cool weather, entertainment and scenic views. Enjoy a round-trip ride on the Genting Skyway Cable Car, which is included in your package.",
        meals: "Breakfast only",
        stay: "Overnight, Kuala Lumpur",
      },
      {
        day: 3,
        title: "Kuala Lumpur City Tour & Departure",
        description:
          "After breakfast, embark on a half-day Kuala Lumpur city tour lasting approximately 4 hours. The tour includes photo stops at the iconic Petronas Twin Towers and KL Tower, visits to the National Mosque, National Monument, Independence Square, the King's Palace and a chocolate outlet, and entry to the KL Tower Observatory Deck and the KLCC Aquarium. You are then transferred to Kuala Lumpur International Airport for your onward flight, marking the end of your Malaysia trip.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "004946",
    travelWindow: "January 2027",
    travellers: "4 adults",
    rooms: 2,
    stays: [
      {
        destination: "Kuala Lumpur",
        hotel: "Howard Johnson or similar",
        nights: 2,
        meals: "Breakfast",
      },
    ],
    priceRows: [{ label: "Per adult", amount: 21199 }],
    metaTitle: "Charm of Malaysia — 3 Days / 2 Nights",
    metaDescription:
      "Kuala Lumpur in three days from ₹21,199 per adult — Putrajaya, Batu Caves, the Genting Skyway cable car and the KL city tour. Land only.",
  },
];

export default packages;
