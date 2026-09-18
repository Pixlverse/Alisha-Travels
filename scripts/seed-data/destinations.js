import { DESTINATION_IMAGES } from "./images.js";

/**
 * All 21 destinations, 13 international and 8 domestic.
 *
 * `order` is DEMAND order, not alphabetical — the SEO/nav specification fixes
 * the sequence and the site sorts by this field everywhere. Dubai, Singapore,
 * Thailand and Maldives lead the international list; Kerala leads the domestic
 * one. If the client re-prioritises, change `order` here (or in /admin/) and
 * the nav, the grids and the homepage all follow.
 *
 * THE COPY IS THE CLIENT'S OWN, transcribed from the Word documents they
 * supplied — one per destination, in destination/. It replaced the credible
 * placeholder prose this file shipped with, and it is why `blocks` exists on
 * the Destination model: their documents are a sequence of sections (why
 * travellers choose it, the regions inside it, the packages they ask for, when
 * to go, what to know) and no fixed set of three prose fields would hold them
 * without throwing most of each document away. See models/Destination.js.
 *
 * TWO DESTINATIONS HAVE NO DOCUMENT YET — the Golden Triangle and Delhi &
 * Manali. They keep the original placeholder fields (whyVisit,
 * bestTimeToVisit, topAttractions), which is what the page falls back to when
 * a destination has no blocks, so they render correctly and are ready for the
 * client's copy whenever it arrives.
 *
 * Images, order, prices, FAQs and meta descriptions are NOT from the documents
 * and were carried over unchanged.
 *
 * REGENERATING: the documents were parsed rather than retyped. If the client
 * sends revisions, edit them in /admin/ (Destinations → Page sections) — this
 * file is the starting state of a fresh database, not the live content.
 */

const img = (key) => ({ ...DESTINATION_IMAGES[key] });

export const destinations = [
  /* ---------------------------- INTERNATIONAL --------------------------- */
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    region: "international",
    order: 1,
    priceFrom: 42000,
    heroImage: img("dubai"),
    tagline: "Where the desert meets the skyline",
    intro:
      "Dubai is the city that never stops reinventing itself. In a single day you can ride to the top of the world's tallest building, shop in a gold souk that has barely changed in a century, and watch the sun set over red dunes from the back of a 4x4. It is glossy and traditional at the same time, and that mix is exactly why it remains the most popular international getaway for Indian travellers.\n\nAt Alisha Tours & Travels, we have been putting together Dubai tour packages from Kerala for years, and no two have been the same. A honeymoon needs a different rhythm from a trip with grandparents and toddlers in tow. As an IATA-accredited Dubai travel agency based in Kottayam, we build the itinerary around your dates, your budget and the people travelling with you.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Dubai",
        points: [
          "A destination that works for families, couples, seniors and solo travellers alike",
          "World-class attractions packed close together, so you see more in fewer days",
          "Tax-free shopping, especially during the Dubai Shopping Festival",
          "Safe, clean and easy to get around, with English widely spoken",
          "Dubai holiday packages to suit every budget, from smart 3-star stays to beachfront resorts",
          "A short flight and a ninety-minute time difference, so no jet lag to recover from",
        ],
      },
      {
        kind: "cards",
        title: "Top attractions",
        items: [
          { title: "Burj Khalifa", text: "The 828-metre icon of the city. Book the At The Top observation deck on levels 124 and 125 for the view, and try for a sunset slot if you can." },
          { title: "The Dubai Mall & Dubai Fountain", text: "More than a shopping centre. The aquarium, ice rink and VR park keep children busy for hours, which is why it features in almost every Dubai family tour package we plan. The fountain show outside runs every evening for free." },
          { title: "Desert Safari", text: "Dune bashing, camel rides, sandboarding and a barbecue dinner under the stars with belly dance and tanoura performances. The one experience nobody should skip." },
          { title: "Dubai Frame", text: "A 150-metre golden picture frame in Zabeel Park with old Dubai on one side and new Dubai on the other." },
          { title: "Palm Jumeirah & Atlantis", text: "The man-made palm island, home to Atlantis The Palm, Aquaventure Waterpark and The Lost Chambers Aquarium. The View at The Palm gives you the whole island from above." },
          { title: "Dubai Marina & Dhow Cruise", text: "Dinner on a traditional wooden dhow while the Marina skyline glides past. It is the evening most of our Dubai honeymoon packages are built around." },
          { title: "Old Dubai", text: "The Gold Souk, Spice Souk, Al Fahidi historic district and a one-dirham abra ride across Dubai Creek. This is the city before the skyscrapers." },
          { title: "Global Village", text: "Open from October to April. Pavilions from around the world, street food, shopping and live shows in one enormous open-air park." },
          { title: "Miracle Garden", text: "Over 150 million flowers arranged into arches, castles and life-size sculptures. Seasonal, and worth timing your trip around." },
          { title: "Museum of the Future", text: "One of the most striking buildings on earth, with immersive exhibits that older children and teenagers genuinely enjoy." },
        ],
      },
      {
        kind: "prose",
        title: "Best time to visit",
        body:
          "November to March is the peak season, with pleasant daytime temperatures and every outdoor attraction open. This is also when Global Village, Miracle Garden and the Dubai Shopping Festival are running. Book early, because this is when Dubai tour packages fill up fastest.\n\nApril to October is hotter, but hotel and flight rates drop significantly. If your plan leans towards malls, indoor attractions and resort pools, the summer months offer excellent value.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Friday and Saturday form the local weekend. Dress modestly at mosques and heritage sites. Alcohol is served in licensed hotels and restaurants only. The metro is cheap and efficient, though taxis are easy to find. Carry a light jacket for winter evenings in the desert, and keep sunscreen handy year-round.",
      },
    ],
    closingTitle: "Ready to plan your Dubai holiday?",
    closingText:
      "Whether it is a honeymoon, a family trip or a long-overdue break with friends, we will customise your Dubai holiday package around what you actually want to do. Flights, hotels, visa, transfers and sightseeing, all arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in",
    faqs: [
      {
        question: "Do we need a visa for Dubai from India?",
        answer:
          "Yes. Indian passport holders need a UAE tourist visa, usually issued as a 14, 30 or 60-day e-visa. We handle the application as part of the package — you send us scans, we do the rest.",
      },
      {
        question: "Is Dubai suitable for young children and elderly parents?",
        answer:
          "Very. Distances are short, everything is air-conditioned and most attractions have step-free access. Tell us who is travelling and we will pace the itinerary accordingly, including skipping the dune drive if that suits better.",
      },
      {
        question: "How many days are enough for Dubai?",
        answer:
          "Four nights covers the city comfortably. Five or six lets you add Abu Dhabi and the Ferrari World or Sheikh Zayed Mosque day trip without rushing.",
      },
    ],
    metaTitle: "Dubai Tour Packages",
    metaDescription:
      "Dubai holiday packages from Kochi and Trivandrum — visa, flights, hotels, desert safari and city tours arranged end to end by an IATA-accredited agency.",
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    region: "international",
    order: 2,
    priceFrom: 58000,
    heroImage: img("singapore"),
    tagline: "A small island that does everything properly",
    intro:
      "Singapore packs more into 700 square kilometres than most countries manage in ten times the space. You can be walking through a rainforest dome in the morning, riding a cable car over the harbour by afternoon, and eating chilli crab at a riverside table by night. Everything runs on time, everything is spotless, and nothing is more than forty minutes away.\n\nThat efficiency is exactly why Singapore holiday packages work so well for first-time international travellers and for families with young children or elderly parents. At Alisha Tours & Travels, Singapore tour packages from Kerala are a regular request, often combined with Malaysia into a single trip. As an IATA-accredited Singapore travel agency based in Kottayam, we handle the flights, hotels, attraction passes and transfers so you arrive with everything already booked.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Singapore",
        points: [
          "Compact and effortless to get around, with one of the world's best metro systems",
          "Genuinely world-class attractions clustered on a single island",
          "Among the safest destinations anywhere, day or night",
          "Excellent Indian food, with Little India and vegetarian options in every neighbourhood",
          "Singapore family tour packages that keep children occupied from morning to evening",
          "Pairs naturally with Malaysia, Bali or Thailand for a longer holiday",
        ],
      },
      {
        kind: "cards",
        title: "Top attractions",
        items: [
          { title: "Gardens by the Bay", text: "The Supertree Grove, the Cloud Forest with its indoor waterfall, and the Flower Dome. Stay for the Garden Rhapsody light show after dark, which is free." },
          { title: "Marina Bay Sands", text: "The three-tower landmark with a ship balanced on top. The SkyPark observation deck gives you the whole bay, and the Spectra light and water show runs nightly along the promenade." },
          { title: "Sentosa Island", text: "A resort island in its own right, covering Universal Studios Singapore, S.E.A. Aquarium, Adventure Cove Waterpark, Skyline Luge and the beaches. Reach it by cable car for the best arrival. Most of our Singapore family tour packages give Sentosa two full days rather than one." },
          { title: "Singapore Zoo & Night Safari", text: "Open enclosures rather than cages, and the world's first nocturnal wildlife park next door. The tram ride through the Night Safari is a highlight for every age group." },
          { title: "Universal Studios Singapore", text: "Seven themed zones, from Ancient Egypt to Sci-Fi City. Plan a full day, and go on a weekday if you can." },
          { title: "Singapore Flyer", text: "A 165-metre observation wheel over Marina Bay, with views stretching across to the Indonesian islands on a clear day." },
          { title: "Merlion Park", text: "The half-lion, half-fish statue that has become shorthand for the city. Small, but nobody leaves without the photograph." },
          { title: "Chinatown, Little India & Kampong Glam", text: "Three distinct quarters within a few metro stops. Sri Mariamman Temple, the Sultan Mosque and the shophouses of Haji Lane, all walkable." },
          { title: "Jewel Changi Airport", text: "The Rain Vortex, a seven-storey indoor waterfall ringed by forest terraces. Worth arriving early or building a stop into your departure day." },
          { title: "Clarke Quay & the Singapore River", text: "Riverside dining, bumboat cruises and the city's nightlife, best seen from the water at dusk. It is the evening most Singapore honeymoon packages are built around." },
        ],
      },
      {
        kind: "prose",
        title: "Best time to visit",
        body:
          "Singapore sits close to the equator, so it is warm and humid all year with no real off-season. February to April is the driest stretch and the most comfortable for long days outdoors.\n\nJune to August brings school holidays and the Great Singapore Sale, which means busier attractions but strong shopping, and it is when Singapore tour packages fill up fastest. November to January is the wettest period, though showers are short and heavy rather than all-day, and the Christmas lights along Orchard Road are worth seeing.\n\nRates climb around Formula 1 in September, Chinese New Year and the December holidays, so book those windows well ahead.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Singapore is two and a half hours ahead of India. The currency is the Singapore dollar and cards work almost everywhere. Buy an EZ-Link or Singapore Tourist Pass for unlimited metro and bus travel. The rules are taken seriously here, so no eating or drinking on the MRT, no littering, and chewing gum cannot be brought in. Tap water is safe to drink. Carry a light layer, because indoor air conditioning runs cold. All visitors must submit the SG Arrival Card online in the three days before landing, which we complete as part of your booking.",
      },
    ],
    closingTitle: "Ready to plan your Singapore holiday?",
    closingText:
      "A short city break, a family trip built around Sentosa, or a honeymoon that runs on to Malaysia for a second week, we will shape the itinerary around what you want. Flights, hotels, transfers, attraction tickets and sightseeing arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in",
    faqs: [
      {
        question: "Do Indian passport holders need a visa for Singapore?",
        answer:
          "Yes, an e-visa is required and must be filed through an authorised agent. We file it for you; approvals typically take three to five working days.",
      },
      {
        question: "Can we combine Singapore with Malaysia?",
        answer:
          "Yes, and most people should. Singapore plus Kuala Lumpur and Langkawi over eight or nine days shares one long-haul flight cost across two countries.",
      },
    ],
    metaTitle: "Singapore Tour Packages",
    metaDescription:
      "Singapore holiday packages with visa, flights, hotels, Universal Studios and Sentosa. Family and honeymoon itineraries arranged from our office.",
  },
  {
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    region: "international",
    order: 3,
    priceFrom: 38000,
    heroImage: img("thailand"),
    tagline: "Islands, temples and a night market on every corner",
    intro:
      "Thailand has been the default first trip abroad for Indian travellers for a generation, and it has earned that place. Bangkok is gold temples and rooftop bars and markets that run until three in the morning. Phuket and Krabi are limestone cliffs rising out of turquoise water. Chiang Mai is cool hills, elephant sanctuaries and lantern-lit streets. You can do all three in a week without rushing.\n\nIt stays popular because it works for everyone. A honeymoon and a family holiday and a trip with college friends can all be built out of the same country, at wildly different budgets. At Alisha Tours & Travels, an IATA-accredited Thailand travel agency based in Kottayam, we arrange flights, hotels, island transfers and day tours as a single booking.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Thailand",
        points: [
          "Beaches, cities, hills and heritage in one country",
          "Thailand holiday packages at every budget, from backpacker to five-star",
          "Excellent Indian and vegetarian food across Bangkok, Phuket and Pattaya",
          "Islands that genuinely deliver on the photographs",
          "Straightforward entry for Indian passport holders",
        ],
      },
      {
        kind: "prose",
        title: "Top attractions",
      },
      {
        kind: "cards",
        title: "Bangkok and around",
        items: [
          { title: "Grand Palace & Wat Phra Kaew", text: "The former royal residence and the Emerald Buddha, in a complex of gold spires and mirrored mosaic. Dress code is strict, so cover shoulders and knees." },
          { title: "Wat Arun & Wat Pho", text: "The Temple of Dawn across the river, and the vast reclining Buddha nearby. Cross between them on the public ferry for a few baht." },
          { title: "Chatuchak Weekend Market", text: "Fifteen thousand stalls selling everything imaginable. Go early, before the heat." },
          { title: "Floating markets & Maeklong Railway Market", text: "Damnoen Saduak's boats piled with fruit, and the market that packs itself away every time a train passes through the middle of it." },
          { title: "Safari World & Siam Park City", text: "Drive-through safari, marine shows and water rides. The reason Bangkok features in most Thailand family tour packages." },
          { title: "Ayutthaya", text: "The ruined former capital an hour north, with Buddha heads wrapped in tree roots and brick temple towers." },
        ],
      },
      {
        kind: "cards",
        title: "The southern islands",
        items: [
          { title: "Phuket", text: "The biggest island, with Patong's nightlife at one end and quiet beaches at the other. The base for most island trips." },
          { title: "Phi Phi Islands", text: "Maya Bay, snorkelling stops and limestone walls straight out of the sea. A day trip from Phuket or Krabi, or an overnight stay." },
          { title: "Krabi", text: "Railay's cliffs, Ao Nang beach and the four-island longtail tour. Calmer and more scenic than Phuket." },
          { title: "James Bond Island & Phang Nga Bay", text: "Sea caves and karst towers explored by longtail boat or kayak." },
          { title: "Koh Samui", text: "Palm-lined beaches, the Big Buddha and a slower pace on the Gulf side of the country." },
        ],
      },
      {
        kind: "cards",
        title: "The north",
        items: [
          { title: "Chiang Mai", text: "Old city temples, Doi Suthep on the hill above, Sunday walking street and ethical elephant sanctuaries where the animals are not ridden." },
          { title: "Chiang Rai", text: "The White Temple, Blue Temple and the Golden Triangle where three borders meet." },
        ],
      },
      {
        kind: "prose",
        title: "Pattaya",
        body:
          "Two hours from Bangkok, with Coral Island day trips, the Sanctuary of Truth carved entirely in wood, Nong Nooch gardens and the Alcazar cabaret. The easiest beach add-on for a short trip.",
      },
      {
        kind: "prose",
        title: "Thailand honeymoon packages",
        body:
          "Thailand suits honeymooners because it does not force a choice between a beach holiday and an actual trip. A week can start with temples and rooftop dinners in Bangkok and finish on a longtail boat between limestone cliffs, and both halves feel like a holiday.\n\nKrabi and Koh Samui are where most of our Thailand honeymoon packages spend their nights. Krabi has the scenery, with Railay's cliffs and the four-island tour on the doorstep. Koh Samui is quieter and better for couples who want to do very little. Phuket works for anyone who wants nightlife and shopping within reach of the beach.\n\nWe arrange the pool villa or beachfront room, private longtail and speedboat trips, candlelit dinners on the sand, couples' spa treatments and island transfers, and confirm the honeymoon benefits the resort is offering before you travel.",
      },
      {
        kind: "prose",
        title: "Thailand tour packages from Kerala",
        body:
          "Thailand remains the most booked international trip from Kerala, and the practical reasons hold up. Flights from Kochi and Thiruvananthapuram connect through Bangkok in a few hours, the time difference is ninety minutes, and Kerala travellers find familiar food in every tourist area, with plenty of vegetarian and South Indian restaurants across Bangkok, Pattaya and Phuket.\n\nWe plan these end-to-end: flights, hotels, airport and island transfers, day tours and entry tickets, all confirmed before departure. Group departures, family itineraries and honeymoon trips are all arranged from our office, so there is one point of contact from the first enquiry to the return flight.",
      },
      {
        kind: "prose",
        title: "Best time to visit",
        body:
          "November to February is the cool, dry season and the best window across the whole country. Clear skies, comfortable temperatures and calm seas for island hopping. This is peak season, so Thailand tour packages book out early around Christmas and the New Year.\n\nMarch to May is hot, especially in Bangkok, though the islands stay manageable and rates soften. Songkran, the water festival in mid-April, is worth planning around if the idea appeals.\n\nJune to October is the green season, with short heavy showers rather than constant rain and the lowest prices of the year. The Andaman side sees rougher seas, so the Gulf islands like Koh Samui are the better choice then.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Thailand is one and a half hours ahead of India. The currency is the baht, and cash is still preferred at markets and small restaurants. Temples require covered shoulders and knees, and shoes come off at the door. Never speak disrespectfully of the royal family, as the law is taken seriously. Grab and Bolt work well in the cities. Agree tuk-tuk fares before getting in, drink bottled water, and expect to bargain at markets.",
      },
    ],
    closingTitle: "Ready to plan your Thailand holiday?",
    closingText:
      "Bangkok and Pattaya across five days, a honeymoon split between Krabi and Phi Phi, or the full run north to Chiang Mai- we will shape the itinerary around what you want. Flights, hotels, transfers, island tours and sightseeing arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in",
    faqs: [
      {
        question: "Is a visa needed for Thailand?",
        answer:
          "Indian passport holders can currently enter Thailand visa-free for short tourist stays, but the rules have changed repeatedly in recent years. We confirm the position in writing for your travel dates before you book.",
      },
      {
        question: "Phuket or Krabi?",
        answer:
          "Phuket if you want nightlife, more hotel choice and easier flights. Krabi if you want quieter beaches and better scenery. Five nights lets you do both, which is what our fixed departure does.",
      },
    ],
    metaTitle: "Thailand Tour Packages",
    metaDescription:
      "Bangkok, Pattaya, Phuket and Krabi holiday packages with flights, hotels and island tours. Group fixed departures and customised Thailand itineraries.",
  },
  {
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    region: "international",
    order: 4,
    priceFrom: 55000,
    heroImage: img("maldives"),
    tagline: "Overwater villas, honeymoons and the clearest water on earth",
    intro:
      "The Maldives is 1,192 islands scattered across the Indian Ocean, and almost every resort occupies one of its own. You arrive by seaplane or speedboat, you are handed a coconut, and for the next few days your only decisions are about which water to get into. There is no sightseeing to tick off, no long drives, no early starts. That is the whole point.\n\nIt is also the closest of the classic honeymoon destinations to Kerala. Direct connections run from Kochi and Thiruvananthapuram via Male; the flight is short, and Indian food is on every resort menu. At Alisha Tours & Travels, an IATA-accredited Maldives travel agency based in Kottayam, we arrange the flights, resort, seaplane or speedboat transfers, meal plan, and any private experiences as one booking.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose the Maldives",
        points: [
          "Water so clear it looks unreal, and some of the best reefs in the world",
          "Private villas over the lagoon, with steps straight down into the sea",
          "A short flight from Kerala, with no visa needed in advance",
          "Full-board and all-inclusive plans, so nothing is left to arrange once you land",
          "Maldives holiday packages across every level, from guesthouse islands to private resorts",
          "Complete privacy, which no other destination at this distance can match",
        ],
      },
      {
        kind: "prose",
        title: "Maldives honeymoon packages",
        body:
          "This is the honeymoon almost everyone pictures, and there is a reason it has stayed at the top of the list for so long. An overwater villa with a private deck and a ladder into the lagoon, dinner served on the sand, a sandbank picnic with nothing else in sight, and no schedule to keep for a week.\n\nOur Maldives honeymoon packages are built around the couple rather than a fixed template. Some want a quiet island with a house reef and little else. Others want a resort with a spa, water sports and a choice of restaurants. We arrange the villa category, the meal plan, airport transfers, and the extras that matter: floating breakfast, a private sunset cruise, a candlelit beach dinner, spa treatments for two. Honeymoon benefits vary by resort, from room upgrades to a complimentary dinner or decorated villa, and we make sure yours are confirmed before you travel.",
      },
      {
        kind: "cards",
        title: "What to do",
        items: [
          { title: "Overwater villas", text: "Glass floor panels, a private deck and a ladder into the lagoon. Beach villas with private pools cost less and suit families better." },
          { title: "Snorkelling the house reef", text: "Most resorts have a reef a short swim from shore, with parrotfish, turtles and reef sharks. Often the best hour of the trip, and it costs nothing." },
          { title: "Scuba diving", text: "Manta rays, whale sharks and wreck dives. Resorts run PADI courses for beginners, so a first dive is entirely possible on a honeymoon." },
          { title: "Sandbank picnic", text: "A boat drops you on a strip of sand in open ocean with a packed lunch and an umbrella, and collects you hours later. Nothing else in sight." },
          { title: "Dolphin cruise at sunset", text: "Spinner dolphins riding the bow while the sky turns. The standard evening on almost every island." },
          { title: "Male and Hulhumale", text: "The capital's fish market, Friday Mosque and coloured streets, for travellers who want a half-day of something other than sand." },
          { title: "Maafushi and the local islands", text: "Guesthouse islands where the Maldives is affordable. Excursions, shared reefs and a bikini beach set aside for visitors." },
          { title: "Underwater dining", text: "A handful of resorts have restaurants built below the waterline, surrounded by reef. Expensive, and unforgettable." },
          { title: "Water sports", text: "Jet skis, parasailing, kayaks, catamarans and paddleboards, usually included in the villa rate or run as a package." },
          { title: "Spa over the water", text: "Treatment rooms with glass floors and the sound of the lagoon underneath." },
        ],
      },
      {
        kind: "prose",
        title: "Choosing where to stay",
        body:
          "The resort matters more here than in any other destination, because the island is your entire holiday.\n\nResort islands suit honeymooners and anyone wanting privacy, all-inclusive dining and a reef at the doorstep. Transfers are by speedboat for nearer atolls and seaplane for the far ones, and seaplanes only fly in daylight.\n\nLocal islands such as Maafushi cost a fraction of the resort rate, with guesthouses, local restaurants and day trips out to sandbanks and reefs. Alcohol is not served, and dress is modest away from the tourist beach.\n\nFamily resorts are the basis of our Maldives family packages, with kids' clubs, shallow lagoons and connecting or two-bedroom villas. Several sit close enough to Male to reach by speedboat, which avoids the seaplane cost and the daylight restriction that comes with it.\n\nWe match the island to the trip, since a resort that suits a honeymoon is rarely the right one for a family with small children.",
      },
      {
        kind: "prose",
        title: "Best time to visit",
        body:
          "November to April is the dry season and the peak, with calm seas, clear water and the best visibility for diving. Rates are highest around Christmas and the New Year, so you'll need to book Maldives tour packages several months ahead for those dates.\n\nMay to October is the wetter season, though rain tends to come in short bursts rather than settling in. Resort rates drop substantially, which is when the Maldives becomes surprisingly affordable, and whale shark and manta sightings are at their best around Baa Atoll from May to November.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "The Maldives is thirty minutes behind India. Indian passport holders receive a free visa on arrival, valid for thirty days, upon presenting confirmed hotel bookings and return tickets. The currency is the rufiyaa, though resorts bill in US dollars and cards are accepted everywhere. Resorts are relaxed about swimwear, while local islands are not. Alcohol is served only on resort islands. Seaplane transfers operate in daylight hours alone, so arrival timing decides whether you reach the island the same day. Bring reef-safe sunscreen, since several resorts have stopped selling anything else.",
      },
    ],
    closingTitle: "Ready to plan your Maldives holiday?",
    closingText:
      "An overwater villa for a honeymoon, a family week with a shallow lagoon and a kids' club, or a budget trip built around a local island, we will match the resort to what you actually want. Flights, transfers, meal plans and experiences arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in",
    faqs: [
      {
        question: "Do we need a visa for the Maldives?",
        answer:
          "No. A 30-day tourist visa is issued free on arrival for Indian passport holders, provided you have a confirmed hotel booking and a return ticket.",
      },
      {
        question: "Seaplane or speedboat transfer?",
        answer:
          "Speedboat resorts are cheaper and run at night; seaplanes only fly in daylight, so a late arrival can force an unplanned night in Malé. We factor this into the flight choice rather than leaving you to discover it.",
      },
      {
        question: "Is all-inclusive worth it?",
        answer:
          "On most islands, yes — there is nowhere else to eat and à la carte adds up fast. We will tell you when a half-board plan genuinely works out cheaper.",
      },
    ],
    metaTitle: "Maldives Tour Packages",
    metaDescription:
      "Maldives resort packages from Kerala with flights, transfers and all-inclusive stays. Honeymoon and family island holidays arranged by an IATA agency.",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    country: "Malaysia",
    region: "international",
    order: 5,
    priceFrom: 45000,
    heroImage: img("malaysia"),
    tagline: "Three countries' worth of culture in one",
    intro:
      "Malaysia is the trip that surprises people. You arrive expecting a city break and end up doing far more: breakfast at a Malay stall, an afternoon in a rainforest that predates the Amazon, and dinner in a Chinatown that feels like a different country altogether. Malay, Chinese and Indian cultures have lived side by side here for generations, and you taste it in every meal.\n\nAt Alisha Tours & Travels, Malaysia tour packages from Kerala are among the most requested trips we plan, and it is easy to see why. Malayalam is spoken in plenty of shops, vegetarian food is never a problem, and the money goes a long way once you land. As an IATA-accredited Malaysia travel agency based in Kottayam, we put the whole trip together for you, from flights and hotels to island transfers and theme park tickets.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Malaysia",
        points: [
          "Beaches, highlands, rainforests and big-city nightlife within one short trip",
          "Excellent value, with Malaysia holiday packages that stretch further than most of Asia",
          "Easy for Indian travellers, with vegetarian, Jain and halal food widely available",
          "Theme parks, cable cars and wildlife parks that keep children genuinely entertained",
          "Clean, safe and easy to travel around, with English spoken almost everywhere",
          "Works equally well as a honeymoon, a family trip or a first holiday abroad",
        ],
      },
      {
        kind: "cards",
        title: "Top attractions",
        items: [
          { title: "Petronas Twin Towers, Kuala Lumpur", text: "The 452-metre steel icon of the city. Walk the Skybridge on level 41 and the observation deck on level 86, then come back after dark for the light show from KLCC Park." },
          { title: "Batu Caves", text: "A 272-step rainbow staircase leading up to limestone caves and the towering gold statue of Lord Murugan. Familiar and moving for Malayali travellers, and one of the most photographed spots in the country." },
          { title: "Genting Highlands", text: "A cool-weather hill resort reached by the Awana SkyWay cable car, with Genting SkyWorlds theme park, indoor rides and shopping at the top. A firm fixture in our Malaysia family tour packages." },
          { title: "Langkawi", text: "Ninety-nine islands in the Andaman Sea. The SkyCab cable car and curved Sky Bridge give you the whole archipelago from above, while island hopping, mangrove tours and sunset cruises fill the rest. This is where most Malaysia honeymoon packages spend their nights." },
          { title: "Penang", text: "George Town's street art, colonial shophouses and hawker food, plus the Kek Lok Si temple and the funicular ride up Penang Hill. The best eating in the country, by some distance." },
          { title: "Cameron Highlands", text: "Rolling green tea estates, strawberry farms and mossy forest trails, at temperatures that will remind you of Munnar." },
          { title: "Sunway Lagoon", text: "Six parks in one, covering water rides, a wildlife zone, an amusement park and a scream park. A full day out with children." },
          { title: "Melaka", text: "A UNESCO World Heritage town of Dutch squares, Peranakan houses and river cruises, about two hours from Kuala Lumpur." },
          { title: "Putrajaya", text: "The planned administrative capital, known for the rose-tinted Putra Mosque, wide boulevards and lakeside architecture. An easy half-day stop on the way in from the airport." },
          { title: "Borneo: Sabah & Sarawak", text: "For travellers with time to spare. Orangutan sanctuaries, Mount Kinabalu and diving off Sipadan, on the wilder side of Malaysia." },
        ],
      },
      {
        kind: "prose",
        title: "Best time to visit",
        body:
          "December to April suits the west coast, which covers Kuala Lumpur, Langkawi, Penang and the Cameron Highlands. Skies are clearest, the sea is calm and island hopping runs without interruption. This is peak season, so Malaysia tour packages book out early around Christmas and the school holidays.\n\nMay to September brings occasional afternoon showers that pass quickly, along with lower rates on hotels and flights. A good window if you want the same Malaysia travel package for noticeably less.\n\nNovember to February is the monsoon on the east coast, so Tioman and the Perhentian islands are best left for another trip during those months.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Malaysia runs two and a half hours ahead of India. The currency is the ringgit, and cards are widely accepted in cities though small stalls prefer cash. Dress modestly at mosques and temples, and carry a scarf for mosque visits. Grab is the easiest way to get around Kuala Lumpur. Every visitor must complete the digital arrival card online before flying, which we take care of as part of your booking. Pack an umbrella, because rain arrives suddenly and leaves just as fast.",
      },
    ],
    closingTitle: "Ready to plan your Malaysia holiday?",
    closingText:
      "Kuala Lumpur and Langkawi, a highlands and beach combination, or a longer run down to Singapore, we will shape the itinerary around what you want. Honeymoon, family or friends, flights, hotels, transfers, sightseeing and entry tickets are all arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in",
    faqs: [
      {
        question: "Is a visa required for Malaysia?",
        answer:
          "Indian nationals currently have visa-free entry for short stays under the arrangement in place since December 2023. We reconfirm the rule for your travel dates in writing.",
      },
      {
        question: "Is Langkawi worth adding to Kuala Lumpur?",
        answer:
          "Yes, if you have at least seven nights. It is a one-hour internal flight and it changes the trip from a city break into a proper holiday.",
      },
    ],
    metaTitle: "Malaysia Tour Packages",
    metaDescription:
      "Kuala Lumpur, Langkawi and Cameron Highlands packages with flights and hotels. Malaysia and Singapore combined itineraries arranged from Kottayam.",
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "international",
    order: 6,
    priceFrom: 62000,
    heroImage: img("bali"),
    tagline: "Rice terraces, temple gates and a villa with its own pool",
    intro:
      "Bali does something few destinations manage. It is genuinely beautiful, genuinely cheap, and genuinely easy, all at once. A private villa with a plunge pool costs less than a decent hotel room in most cities. Temples sit on cliffs above the sea. Rice terraces climb the hills at Tegallalang. And the island is small enough that the beach, the jungle and the volcano are all within a couple of hours of each other.\n\nIt has become the honeymoon of choice for a generation of Indian couples, and the reasons hold up beyond the photographs. At Alisha Tours & Travels, an IATA-accredited Bali travel agency based in Kottayam, we arrange flights, villas, private drivers, day tours and island transfers as a single booking.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Bali",
        points: [
          "Private pool villas at prices that seem impossible elsewhere",
          "Beaches, volcanoes, waterfalls, temples and rice fields on one small island",
          "Visa on arrival for Indian passport holders, with no advance application",
          "Bali holiday packages that work at almost any budget",
          "Some of the best spa treatments anywhere, at a fraction of Indian rates",
          "Easy to extend to Gili, Nusa Penida or Lombok for a second week",
        ],
      },
      {
        kind: "prose",
        title: "Top attractions",
      },
      {
        kind: "cards",
        title: "South Bali",
        items: [
          { title: "Uluwatu Temple", text: "A clifftop temple 70 metres above the Indian Ocean, with the Kecak fire dance performed at sunset. The best evening on the island." },
          { title: "Tanah Lot", text: "A sea temple on a rock, cut off by the tide twice a day and photographed by everyone at sunset." },
          { title: "Seminyak & Canggu", text: "Beach clubs, boutiques, surf breaks and the island's best eating. Where most trips spend their first nights." },
          { title: "Nusa Dua & Jimbaran", text: "Calm water, resort beaches and grilled seafood on the sand as the sun goes down. The quieter side of the south." },
          { title: "Water sports at Tanjung Benoa", text: "Parasailing, banana boats, jet skis and sea walking, usually bundled together as a half-day." },
        ],
      },
      {
        kind: "cards",
        title: "Ubud and the centre",
        items: [
          { title: "Tegallalang Rice Terraces", text: "Stepped green hillsides with a jungle swing above them. The image most people have of Bali." },
          { title: "Ubud", text: "The cultural heart of the island. Monkey Forest, the palace, art markets, yoga retreats and the Campuhan ridge walk at dawn." },
          { title: "Tirta Empul & Tegenungan", text: "A holy spring temple where visitors can take part in the purification ritual, and a wide waterfall an easy stop away." },
          { title: "Handara Gate & Bedugul", text: "The freestanding split gate everyone photographs, and Ulun Danu Beratan floating on a mountain lake nearby." },
        ],
      },
      {
        kind: "cards",
        title: "North and east",
        items: [
          { title: "Mount Batur", text: "A sunrise trek up an active volcano, starting around 2am and rewarded with the view over the caldera and Lake Batur. Doable for anyone reasonably fit." },
          { title: "Sekumpul & Gitgit waterfalls", text: "The most dramatic falls on the island, in the northern hills." },
          { title: "Lempuyang Temple", text: "The Gates of Heaven, framing Mount Agung. Expect a long queue for the photograph." },
          { title: "Amed & Tulamben", text: "Black sand beaches and a shipwreck dive accessible straight from the shore." },
        ],
      },
      {
        kind: "cards",
        title: "The nearby islands",
        items: [
          { title: "Nusa Penida", text: "Kelingking Beach's dinosaur-shaped cliff, Angel's Billabong and snorkelling with manta rays. A long day trip or an overnight stay." },
          { title: "Gili Islands", text: "Three tiny islands with no cars, reached by fast boat. Turtles in the shallows and nothing to do after dark but eat." },
        ],
      },
      {
        kind: "prose",
        title: "Bali honeymoon packages",
        body:
          "Bali earns its reputation here. A private villa with a pool, a floating breakfast, a flower bath drawn in the afternoon and a candlelit dinner on the sand come to a fraction of what the same week costs in the Maldives, and there is an entire island to explore when lying down loses its appeal.\n\nThe split most couples settle on is a few nights in Ubud among the rice fields, then the coast at Seminyak, Nusa Dua or Jimbaran. Ubud is green and quiet with the jungle villas and spas. The south has the beaches, sunsets and restaurants. Adding Nusa Penida or the Gilis at the end turns it into a longer trip without much extra travel.\n\nOur Bali honeymoon packages cover the villa category and location, private car with driver for the full stay rather than shared tours, the spa and dinner experiences, and the honeymoon inclusions each property offers, confirmed before you travel.",
      },
      {
        kind: "prose",
        title: "Bali family tour packages",
        body:
          "Bali works better with children than most people expect, mainly because a villa changes the shape of the holiday. Two or three bedrooms with a private pool and a kitchen costs less than connecting hotel rooms, and having somewhere for the children to swim while the adults sit still matters more than any attraction.\n\nNusa Dua and Sanur are the usual base, with calm shallow water and none of the surf that makes Seminyak and Canggu hard work with small children. Waterbom Bali in Kuta is among the best waterparks in Asia, and Bali Safari Park, the Bali Zoo and the Bali Bird Park all fill a full day. The Tanjung Benoa water sports suit older children, and the Bali Swing and Tegallalang terraces work for everyone.\n\nOur Bali family tour packages are built around a private car and driver for the whole stay, which is what makes the island manageable with a group. Long temple days and the 2am Mount Batur trek are the two things we usually advise leaving out, and we plan around them rather than into them.",
      },
      {
        kind: "prose",
        title: "Bali tour packages from Kerala",
        body:
          "Bali connects from Kochi and Thiruvananthapuram through the Gulf or Southeast Asian hubs, and the visa on arrival means no application to file before leaving. The time difference is two and a half hours, small enough that no day is lost on either end.\n\nWe put these together as complete packages from our office: flights, villa or resort, airport transfers, a private driver for sightseeing days, entry tickets, and the fast boat if the trip runs on to Nusa Penida or the Gilis. Honeymoons, family trips and group departures are all arranged the same way, with one point of contact throughout.",
      },
      {
        kind: "prose",
        title: "Best time to visit",
        body:
          "April to October is the dry season and the best window. Sunny days, lower humidity, calm seas for diving and snorkelling, and reliable weather for the Mount Batur trek. July and August are the busiest, so Bali tour packages for those months need booking early.\n\nNovember to March is the wet season, with rain that usually arrives as an afternoon downpour rather than all day. Rates drop noticeably and the island is greener than at any other time, which suits couples and anyone travelling outside school holidays.\n\nNyepi, the Balinese day of silence in March, shuts the entire island down for 24 hours including the airport, so it is worth knowing the date before fixing travel.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Bali is two and a half hours ahead of India. Indian passport holders receive a visa on arrival valid for thirty days, and an electronic customs declaration is completed before landing, both of which we brief you on. The currency is the rupiah, cash is preferred outside hotels, and ATMs are everywhere.\n\nA sarong is required at temples and is usually provided at the entrance. Traffic is slow, so a journey that looks short on the map rarely is, which is why a private driver for the day beats individual taxis. Grab and Gojek work in the south but are restricted in some areas. Drink bottled water only. Scooters are everywhere and are best left to people who already ride.",
      },
    ],
    closingTitle: "Ready to plan your Bali holiday?",
    closingText:
      "A honeymoon split between Ubud and the coast, a family week with a villa and a driver, or a longer trip out to Nusa Penida and the Gilis, we will shape it around what you want. Flights, villas, transfers, tours and island boats arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in",
    faqs: [
      {
        question: "Do we need a visa for Bali?",
        answer:
          "Indian passport holders get a visa on arrival, payable in Indonesian rupiah or by card at the airport. We give you the current fee and the exact counter to use.",
      },
      {
        question: "How many nights should we split between Ubud and the beach?",
        answer:
          "Three and three over six nights is the balance most couples are happiest with. Fewer than two nights in Ubud is not worth the transfer.",
      },
    ],
    metaTitle: "Bali Tour Packages",
    metaDescription:
      "Bali holiday and honeymoon packages with Ubud and beach stays, private villas, flights and transfers, arranged from Kerala.",
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    region: "international",
    order: 7,
    priceFrom: 52000,
    heroImage: img("vietnam"),
    tagline: "Limestone bays, lantern towns and the best street food in Asia",
    intro:
      "Vietnam runs 1,600 kilometres from north to south, and it changes character the whole way down. Hanoi is old and crowded and wonderful. Halong Bay is thousands of limestone islands rising straight out of green water. Hoi An glows with silk lanterns after dark. Ho Chi Minh City is all motorbikes and energy. Few countries give you this much variety for this little money.\n\nThat value is a large part of why Vietnam holiday packages have taken off with Indian travellers over the past few years. Hotels, food and transport all cost a fraction of what you would pay elsewhere in Asia, which leaves room to do more. As an IATA-accredited Vietnam travel agency based in Kottayam, Alisha Tours & Travels arranges the flights, e-visa, hotels, internal transfers and cruises as a single booking.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Vietnam",
        points: [
          "Outstanding value, with Vietnam holiday packages that go further than almost anywhere in Asia",
          "Beaches, mountains, caves, cities and heritage towns in one country",
          "A simple e-visa for Indian passport holders",
          "Some of the best food in the world, and more vegetarian options than people expect",
          "Scenery that suits honeymooners and photographers in equal measure",
          "Easy to combine with Cambodia or Thailand for a longer trip",
        ],
      },
      {
        kind: "prose",
        title: "Top attractions",
      },
      {
        kind: "cards",
        title: "The north",
        items: [
          { title: "Hanoi", text: "The Old Quarter's thirty-six trading streets, Hoan Kiem Lake, the Temple of Literature and egg coffee on a plastic stool by the roadside. A city best understood on foot." },
          { title: "Halong Bay", text: "Nearly two thousand limestone karsts scattered across emerald water. Stay overnight on a cruise boat for kayaking, cave visits and sunrise on deck, which is the single most requested night in our Vietnam honeymoon packages." },
          { title: "Ninh Binh", text: "Halong Bay on land. Rowboats drift between rice paddies and limestone peaks, with the Mua Cave viewpoint above it all." },
          { title: "Sapa", text: "Terraced rice fields climbing the hills near the Chinese border, with hill tribe villages and the Fansipan cable car up Vietnam's highest peak." },
        ],
      },
      {
        kind: "cards",
        title: "The centre",
        items: [
          { title: "Hoi An", text: "A UNESCO trading port of yellow shophouses, tailors' studios and thousands of silk lanterns reflected in the river at night. The most romantic town in the country." },
          { title: "Da Nang", text: "Beaches, the Marble Mountains and the Golden Bridge held up by two giant stone hands at Ba Na Hills. The theme park and cable car there make it a fixture in Vietnam family tour packages." },
          { title: "Hue", text: "The old imperial capital, with a walled citadel, royal tombs and dragon boats along the Perfume River." },
          { title: "Phong Nha", text: "Some of the largest caves on earth, including river caves you enter by boat." },
        ],
      },
      {
        kind: "cards",
        title: "The south",
        items: [
          { title: "Ho Chi Minh City", text: "Saigon still, to most people. The War Remnants Museum, Notre-Dame Cathedral, Ben Thanh Market and the Cu Chi tunnels an hour outside." },
          { title: "Mekong Delta", text: "Floating markets, coconut candy workshops and sampan rides through narrow palm-lined channels." },
          { title: "Phu Quoc", text: "An island of white-sand beaches, the world's longest sea-crossing cable car and a large safari park. The usual place to end a trip lying down." },
        ],
      },
      {
        kind: "prose",
        title: "Vietnam tour packages from Kerala",
        body:
          "Vietnam has become one of the most requested trips from Kerala, and the reasons are practical. Connections run through Kochi and Thiruvananthapuram via the Gulf or Southeast Asian hubs; the time difference is small enough that nobody loses a day to jet lag, and the e-visa is straightforward. For families used to Dubai or Singapore, Vietnam offers a longer, more varied trip for a similar spend.\n\nWe plan these as complete packages: flights, visa, hotels, the Halong Bay cruise, internal flights between north and south, airport transfers and daily sightseeing, confirmed before you leave.",
      },
      {
        kind: "prose",
        title: "Best time to visit",
        body:
          "Vietnam is long enough that the weather differs between regions, so the best window depends on where you are heading.\n\nFebruary to April is the safest all-country choice. Dry and mild in the north, sunny in the centre, warm in the south. This is when Vietnam tour packages are most in demand, so book ahead.\n\nMay to August is hot but bright in the north and south, and it is the main Indian holiday season. Central Vietnam is at its best here.\n\nSeptember to November brings clear skies and cool air to Hanoi and Sapa. The centre can see storms in September and October.\n\nAvoid the week of Tet, the Lunar New Year, when much of the country closes for the holiday.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Vietnam is one and a half hours ahead of India. The currency is the dong and the numbers are large, so expect to be dealing in hundreds of thousands. Indian passport holders need an e-visa, applied for online in advance, which we process as part of your booking. Cash is still king outside the big hotels. Crossing the road means walking slowly and steadily rather than waiting for a gap. Grab works well in the cities. Drink bottled water only, and carry a light raincoat in any season.",
      },
    ],
    closingTitle: "Ready to plan your Vietnam holiday?",
    closingText:
      "A northern loop through Hanoi and Halong Bay, a honeymoon split between Hoi An and Phu Quoc, or the full run from north to south across ten days- we will shape the itinerary around what you want. Flights, e-visa, hotels, cruises, transfers, and sightseeing arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in",
    faqs: [
      {
        question: "Is a visa required for Vietnam?",
        answer:
          "Yes. Indian passport holders need an e-visa, which we file for you. It takes roughly three to five working days and is issued for single or multiple entry.",
      },
      {
        question: "How long do we need?",
        answer:
          "Six nights covers the north or the centre properly. Nine to ten nights lets you run Hanoi to Ho Chi Minh City without spending the trip in transit.",
      },
    ],
    metaTitle: "Vietnam Tour Packages",
    metaDescription:
      "Vietnam holiday packages covering Hanoi, Ha Long Bay, Da Nang and Hoi An, with e-visa, flights, cruises and hotels arranged end to end.",
  },
  {
    slug: "azerbaijan",
    name: "Azerbaijan",
    country: "Azerbaijan",
    region: "international",
    order: 8,
    priceFrom: 48000,
    heroImage: img("azerbaijan"),
    tagline: "Baku, the Caspian and the mountains beyond",
    intro:
      "Azerbaijan has quietly become one of the most talked-about destinations for Indian travellers, and the reason is simple. You get cobbled old towns, snow-capped mountains, flaming hillsides and a Caspian seafront skyline, all at a fraction of what a European trip would cost. Baku feels like Vienna one street and Tehran the next, which is precisely its appeal.\n\nThe country is small enough to cover properly in a week. Most Baku tour packages use the capital as a base, with mountain villages three hours away, mud volcanoes and rock carvings even closer, and Indian restaurants now open across the city in response to how many of us visit. At Alisha Tours & Travels, Azerbaijan tour packages from Kerala have grown fast over the past few seasons. As an IATA-accredited Azerbaijan travel agency based in Kottayam, we arrange the flights, e-visa, hotels, transfers and mountain excursions as one booking.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Azerbaijan",
        points: [
          "A European feel at a noticeably lower cost than Western Europe",
          "Snow, desert, sea and mountains within a few hours of one another",
          "Straightforward e-visa process for Indian passport holders",
          "Indian and vegetarian restaurants widely available across Baku",
          "Azerbaijan holiday packages that suit honeymooners and families equally",
          "Still uncrowded compared with the usual Southeast Asian circuit",
        ],
      },
      {
        kind: "cards",
        title: "Top attractions in Baku",
        items: [
          { title: "Baku Old City (Icherisheher)", text: "A walled UNESCO quarter of narrow lanes, caravanserais, the Palace of the Shirvanshahs and the mysterious Maiden Tower. The oldest part of the city, and the most atmospheric." },
          { title: "Flame Towers", text: "Three curved skyscrapers that turn into enormous LED flames after dark, visible from across the bay. The defining image of modern Baku." },
          { title: "Heydar Aliyev Centre", text: "Zaha Hadid's white, wave-like building with not a straight line anywhere. One of the most photographed pieces of architecture in the region." },
          { title: "Baku Boulevard", text: "A seaside promenade running for kilometres along the Caspian, with the Ferris wheel, Little Venice canals and Carpet Museum along the way. Best walked at sunset." },
          { title: "Gobustan National Park", text: "Prehistoric rock carvings dating back thousands of years, followed by a bumpy jeep ride out to the bubbling mud volcanoes. Azerbaijan has more of them than anywhere on earth." },
          { title: "Ateshgah Fire Temple & Yanar Dag", text: "A Zoroastrian and Hindu fire temple with inscriptions in Sanskrit, and a hillside that has been burning continuously for centuries. Historically significant for Indian visitors, since Indian merchants worshipped here." },
        ],
      },
      {
        kind: "cards",
        title: "Beyond the capital",
        items: [
          { title: "Gabala", text: "Green highland country with the Tufandag cable car, waterfalls, Nohur Lake and an adventure park. Winter turns it into a ski resort, and it is the most popular extension to our Azerbaijan family tour packages." },
          { title: "Guba & Khinalug", text: "Apple orchards, the Red Village, and a drive up to one of the highest inhabited villages in the world at over 2,000 metres." },
          { title: "Sheki", text: "A Silk Road town of caravanserais and the stained-glass Khan's Palace, wrapped in forested hills. The prettiest overnight stop in the country." },
          { title: "Shahdag", text: "The main winter sports resort, with skiing, snowboarding and snow parks from December through March. A regular add-on in Azerbaijan honeymoon packages for couples who want snow." },
        ],
      },
      {
        kind: "prose",
        title: "Best time to visit",
        body:
          "April to June is the finest window. The hills are green, wildflowers are out and the weather suits long drives and walking days without any heat.\n\nSeptember to November is the second peak, bringing the grape and apple harvest, cool clear air and autumn colour through Gabala and Sheki.\n\nJuly and August are hot in Baku but the mountains stay pleasant, and this is when most Indian families travel, so Azerbaijan tour packages book out early in those months.\n\nDecember to March is snow season. Shahdag and Tufandag open for skiing, and for travellers from Kerala who have never seen snow, this is the reason to go. Winter Baku tour packages also cost noticeably less.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Azerbaijan is thirty minutes behind India. The currency is the manat, and while cards work in Baku, carry cash for the mountains and smaller towns. Indian passport holders need an e-visa, which is applied for online in advance and which we process as part of your booking. Weekends are Saturday and Sunday. Tap water is best avoided in favour of bottled. Pack layers whatever the season, because Baku is windy year-round and mountain temperatures drop sharply after dark. A note on the map: Nagorno-Karabakh and the border areas are not part of any tourist itinerary.",
      },
    ],
    closingTitle: "Ready to plan your Azerbaijan holiday?",
    closingText:
      "Baku on its own across four days, a longer run through Gabala and Sheki, or a winter trip built around snow at Shahdag, we will shape the itinerary around what you want. Flights, e-visa, hotels, transfers and excursions arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in",
    faqs: [
      {
        question: "How do we get the Azerbaijan visa?",
        answer:
          "An ASAN e-visa, filed online. It is usually issued within three working days and we handle the submission.",
      },
      {
        question: "Is Azerbaijan good for a group tour?",
        answer:
          "Very. Distances are short, the sights are close together and hotel standards are consistent, which is why it works well as a set-departure group trip.",
      },
    ],
    metaTitle: "Azerbaijan Tour Packages",
    metaDescription:
      "Baku and Azerbaijan holiday packages with e-visa, flights, hotels, Gobustan and Gabala excursions. Group departures and customised itineraries from Kerala.",
  },
  {
    slug: "europe",
    name: "Europe",
    country: "Multiple",
    region: "international",
    order: 9,
    priceFrom: 185000,
    heroImage: img("europe"),
    tagline: "One trip, a continent's worth of countries",
    intro:
      "Europe is the holiday most people save up for, and it rewards the wait. A single week can take you from the canals of Amsterdam to the Swiss Alps, from Paris at night to a Venetian gondola, crossing three or four countries without a single long-haul flight in between. Train journeys run through mountain passes. Borders arrive and pass without anyone noticing.\n\nIt is also the trip that needs the most planning, which is exactly where an agency earns its place. Schengen appointments, multi-city rail, internal flights, hotels in four cities and a route that does not waste days in transit all have to be arranged in the right order and well in advance. At Alisha Tours & Travels, an IATA-accredited Europe travel agency based in Kottayam, we handle the visa, flights, rail passes, hotels and sightseeing as one booking, so the only thing left is the trip itself.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Europe",
        points: [
          "Several countries in one holiday, with short hops between them",
          "Scenery, history, art and food that live up to every expectation",
          "Europe holiday packages built as group departures or fully private trips",
          "Rail journeys through the Alps that are an attraction in their own right",
          "Indian restaurants in every major city, so food is never a problem",
          "The honeymoon and the milestone family trip that people remember for decades",
        ],
      },
      {
        kind: "prose",
        title: "Top attractions",
      },
      {
        kind: "cards",
        title: "The classic circuit",
        items: [
          { title: "Paris", text: "The Eiffel Tower, the Louvre, Seine cruises and Versailles an hour outside. Almost every first Europe trip begins or ends here." },
          { title: "Switzerland", text: "Interlaken, Lucerne and Zurich, with cogwheel trains up Jungfraujoch and Mount Titlis to snow at any time of year. For travellers from Kerala, this is usually the emotional highlight." },
          { title: "Italy", text: "Rome's Colosseum and Vatican City, Venice's canals, Florence's Renaissance galleries and Pisa's leaning tower." },
          { title: "Amsterdam", text: "Canal cruises, tulip season at Keukenhof from March to May, and Zaanse Schans windmills nearby." },
          { title: "Belgium", text: "Brussels' Grand Place and Atomium, and the medieval streets of Bruges." },
          { title: "Germany", text: "Rhine valley cruises, Black Forest drives and Neuschwanstein, the castle that inspired the fairy tale." },
          { title: "Austria", text: "Vienna's palaces and Salzburg's old town, with the lakes and peaks of the Tyrol between them." },
          { title: "Prague", text: "Astronomical clock, Charles Bridge and a castle above the river. The best value of any city on the circuit." },
        ],
      },
      {
        kind: "cards",
        title: "Beyond the first trip",
        items: [
          { title: "Spain & Portugal", text: "Barcelona's Gaudi architecture, Madrid, Seville's flamenco, and Lisbon's tiled hills and coastline." },
          { title: "Greece", text: "Athens for the Acropolis, then Santorini's white and blue caldera villages." },
          { title: "Scandinavia", text: "Norwegian fjords, midnight sun in summer and northern lights from Tromso or Rovaniemi in winter." },
          { title: "Eastern Europe", text: "Budapest's thermal baths and river views, Krakow, and the Croatian coast around Dubrovnik." },
          { title: "United Kingdom", text: "London, Scotland's highlands and Ireland's coast, on a separate visa from the Schengen zone." },
        ],
      },
      {
        kind: "prose",
        title: "Europe honeymoon packages",
        body:
          "Europe gives a honeymoon something no beach destination can: variety. Twelve days can hold a city, a mountain and a coastline, and the trip still feels unhurried because the distances between them are short.\n\nThe routes couples ask for most are Paris with Switzerland, where the Alps provide the quiet half of the trip, and Greece, where Athens leads into a few slow days on Santorini watching the caldera sunsets. Italy works beautifully for couples who want Venice and the Amalfi coast in one run. Switzerland on its own, split between Interlaken and Lucerne, suits anyone who wants snow and mountain rail journeys rather than a list of cities.\n\nOur Europe honeymoon packages are built around two or three countries rather than a longer list, with more nights in each place. We arrange the rooms with the view, private transfers instead of group coaches, dinner reservations and the scenic rail journeys, including Glacier Express and Jungfraujoch, booked ahead so nothing is left to chance.",
      },
      {
        kind: "prose",
        title: "Europe tour packages from Kerala",
        body:
          "A Europe trip from Kerala is mostly a question of sequencing, and the visa sets the pace. Schengen appointment slots in Kochi and Thiruvananthapuram get scarce well before the summer, so the application has to start two to three months ahead of departure, and the flights and hotels need confirming before that application can even be filed.\n\nWe handle that whole order of work from our office: documentation and the Schengen appointment, flights from Kochi or Thiruvananthapuram, hotels across every city on the route, rail passes and seat reservations, transfers and daily sightseeing. Group departures with Indian meals and a tour manager throughout suit first-time travellers and larger family groups, while private itineraries run on your own dates. Either way there is one point of contact from the first enquiry to the return flight.",
      },
      {
        kind: "prose",
        title: "How Europe trips are usually planned",
        body:
          "Group departures travel on fixed dates with a set route, a tour manager and Indian meals arranged throughout. They cost less per person and remove every decision.\n\nPrivate tours run on your dates, at your pace, with the countries and cities you choose. More expensive, but you decide how long to stay anywhere.\n\nFamily trips work best with fewer countries and longer stays. Switzerland and Paris across ten days beats six countries in twelve, particularly with children or elderly parents along, and our Europe family tour packages are usually built that way.\n\nMost first trips cover four to six countries in ten to fourteen days. On any multi-country tour, fewer countries and more nights in each is almost always the better holiday, and we will say so when a route is trying to do too much.",
      },
      {
        kind: "prose",
        title: "Best time to visit",
        body:
          "May to September is the main season. Long days, warm weather, everything open and the Alps at their greenest. July and August are the busiest and most expensive, and they coincide with Indian school holidays, so Europe tour packages for those weeks need booking months ahead.\n\nApril and October are the shoulder months, with thinner crowds, lower rates and comfortable weather. April brings the tulips to the Netherlands, and October brings autumn colour across Central Europe.\n\nNovember to March is cold and dark early, but it is the season for Christmas markets, skiing and northern lights, at the lowest prices of the year.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Most of the continent runs on the Schengen visa, which covers travel across 29 countries on a single application, while the UK and Ireland require separate visas. Appointments need to be booked well in advance, particularly for summer travel, and travel insurance is mandatory for Schengen.\n\nThe euro is used in most countries, with Switzerland on francs, the UK on pounds and Czechia on koruna. India is three and a half to four and a half hours behind depending on the season. Trains are the best way to move between cities, and tickets are cheaper when booked early. Pack layers even in summer, since mountain temperatures drop sharply. Tap water is safe almost everywhere, tipping is modest, and pickpocketing at crowded landmarks is the only real nuisance to watch for.",
      },
    ],
    closingTitle: "Ready to plan your Europe holiday?",
    closingText:
      "A first trip through Paris, Switzerland and Italy, a honeymoon across Greece and the islands, or a longer private route on your own dates, we will build it around what you want to see. Schengen visa, flights, hotels, rail, transfers and sightseeing arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in",
    faqs: [
      {
        question: "How far in advance should we start a Europe trip?",
        answer:
          "Four to five months. Schengen appointment slots are the bottleneck, not the flights — in peak season they can be booked out six weeks ahead.",
      },
      {
        question: "Do you handle the Schengen visa?",
        answer:
          "We prepare and check the full file — cover letter, itinerary, hotel and flight confirmations, insurance — and book the appointment. The applicant still has to attend in person for biometrics.",
      },
      {
        question: "Group tour or private?",
        answer:
          "Group departures are considerably cheaper and take the driving off you. A private itinerary is better if you have specific cities in mind or are travelling with small children.",
      },
    ],
    metaTitle: "Europe Tour Packages",
    metaDescription:
      "Europe holiday packages with Schengen visa assistance, flights, rail, hotels and guided touring. Group departures and private itineraries from Kerala.",
  },
  {
    slug: "bhutan",
    name: "Bhutan",
    country: "Bhutan",
    region: "international",
    order: 10,
    priceFrom: 68000,
    heroImage: img("bhutan"),
    tagline: "The last Himalayan kingdom, on its own terms",
    intro:
      "Bhutan has spent decades deliberately limiting how many visitors it takes, and the country you arrive in is the result. No traffic lights in the capital. Monasteries clinging to cliff faces. Fortress dzongs above river valleys. Prayer flags on every ridge. It measures its progress in Gross National Happiness, which sounds like a slogan until you spend a few days there and start to see what it protects.\n\nFor Indian travellers, it is the most accessible Himalayan destination there is. No visa is required, the Indian rupee is accepted, and the flight from Kolkata or Delhi into Paro takes a couple of hours. At Alisha Tours & Travels, an IATA-accredited Bhutan travel agency based in Kottayam, we arrange the flights, permits, hotels, guide and vehicle as one booking.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Bhutan",
        points: [
          "No visa for Indian passport holders, just a permit we arrange for you",
          "Himalayan scenery without the crowds of Nepal or Ladakh",
          "Clean air, safe roads and a pace that suits families travelling with elders",
          "Bhutan holiday packages that stay affordable for Indian nationals",
          "Monasteries, dzongs and festivals that are still part of daily life rather than staged",
          "Short enough to cover properly in five to seven days",
        ],
      },
      {
        kind: "prose",
        title: "Top attractions",
      },
      {
        kind: "cards",
        title: "Paro",
        items: [
          { title: "Tiger's Nest Monastery (Taktsang)", text: "A monastery built into a cliff 900 metres above the valley floor. The hike up takes four to five hours return, with horses available for part of the climb. The reason most people come to Bhutan." },
          { title: "Rinpung Dzong", text: "A seventeenth-century fortress monastery above the Paro river, reached across a traditional covered bridge." },
          { title: "National Museum", text: "Housed in the old watchtower above the dzong, with masks, textiles and thangka paintings." },
          { title: "Chele La Pass", text: "The highest motorable pass in the country at 3,988 metres, with views to Jhomolhari on a clear day and snow through the winter." },
        ],
      },
      {
        kind: "cards",
        title: "Thimphu",
        items: [
          { title: "Buddha Dordenma", text: "A 51-metre gilded Buddha seated above the capital, with thousands of smaller Buddhas inside." },
          { title: "Tashichho Dzong", text: "The seat of government and the summer residence of the Je Khenpo, lit up beautifully after dark." },
          { title: "Memorial Chorten", text: "Where residents circle and pray through the day. The best place to watch ordinary life in Thimphu." },
          { title: "Folk Heritage Museum & Craft Bazaar", text: "A restored farmhouse showing rural life, and stalls selling handwoven textiles and carved wood." },
          { title: "Takin Preserve", text: "The national animal, which looks like nothing else on earth. An easy stop on any Bhutan family tour package with younger children along." },
        ],
      },
      {
        kind: "cards",
        title: "Punakha and beyond",
        items: [
          { title: "Punakha Dzong", text: "The most beautiful building in Bhutan, set where two rivers meet, with jacaranda trees in bloom through spring." },
          { title: "Dochula Pass", text: "108 chortens on a ridge at 3,100 metres, with the Himalayan range laid out behind them on a clear morning." },
          { title: "Chimi Lhakhang", text: "The fertility temple, reached on a walk through rice fields and villages." },
          { title: "Phobjikha Valley", text: "A glacial valley where black-necked cranes winter from late October, with Gangtey Monastery above it." },
          { title: "Haa Valley", text: "Opened to visitors relatively recently and still very quiet, across Chele La from Paro." },
        ],
      },
      {
        kind: "prose",
        title: "Bhutan honeymoon packages",
        body:
          "Bhutan suits couples who want the trip to be about somewhere rather than about a resort. It is quiet in a way that beach destinations never are, the scenery does the work, and the limited number of visitors means the valleys feel like they belong to you.\n\nThe route most couples take is Paro, Thimphu and Punakha across six or seven nights, with Punakha as the romantic centre of it. The valley is warmer and lower than the rest, the dzang at the meeting of the rivers is the most beautiful building in the country, and the farmhouse and riverside lodges there are the best places to stay in Bhutan. Phobjikha adds a night of complete quiet for couples with time.\n\nOur Bhutan honeymoon packages cover boutique lodges and heritage farmhouse stays rather than standard hotels, a private guide and vehicle throughout, a traditional hot stone bath, candlelit dinners and the Tiger's Nest hike planned with a rest day either side. Spring and autumn book out early for these, so the flights into Paro are worth confirming well ahead.",
      },
      {
        kind: "prose",
        title: "Bhutan tour packages from Kerala",
        body:
          "Bhutan takes a little more arranging from Kerala than from the north, and it is mostly a question of routing. Flights connect through Kolkata, Delhi or Bagdogra, and the Paro sector is operated by Drukair and Bhutan Airlines alone, so seats are limited and worth confirming early, particularly during festival weeks and the spring season.\n\nIndian nationals do not need a visa, but an entry permit is required, along with a valid passport or a voter ID card. A licensed Bhutanese guide and vehicle are mandatory for the duration of the trip, and a daily Sustainable Development Fee applies, charged at a concessional rate for Indian nationals. We handle the permits, guide, driver, hotels and the full itinerary from our office, so nothing needs arranging after you land.",
      },
      {
        kind: "prose",
        title: "Best time to visit",
        body:
          "March to May is the finest season. Clear mountain views, rhododendrons and jacaranda in flower, and comfortable walking weather for the Tiger's Nest climb. The Paro Tsechu falls in this window and is the biggest festival of the year.\n\nSeptember to November is the second peak, with the clearest skies of all, the Thimphu Tsechu in autumn and the cranes arriving in Phobjikha from late October.\n\nJune to August is the monsoon. Rain is heaviest in the afternoons, the valleys are green and rates are at their lowest, though mountain views are often clouded over.\n\nDecember to February is cold and bright, with snow on the high passes and very few visitors. Chele La and Dochula are at their most dramatic, and Bhutan tour packages cost noticeably less.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Bhutan is thirty minutes ahead of India. Indian rupees are accepted, though 2000-rupee notes are not, and cards work only in larger hotels, so carry cash. Altitude is worth respecting, with Thimphu at 2,300 metres and the passes near 4,000, so take the first day slowly and drink plenty of water.\n\nSmoking in public is prohibited and tobacco is heavily restricted. Dress modestly at dzongs and monasteries, covering shoulders and knees, and remove hats and shoes where asked. Photography is not allowed inside temples. Roads are winding, so carry motion sickness tablets. Pack warm layers whatever the month, because evenings are cold even in summer.",
      },
    ],
    closingTitle: "Ready to plan your Bhutan holiday?",
    closingText:
      "Paro and Thimphu across five days, a honeymoon through Punakha and Phobjikha, or a trip timed around one of the tsechu festivals- we will shape it around what you want. Flights, permits, hotels, guide, vehicle and sightseeing arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in",
    faqs: [
      {
        question: "Do Indians need a visa for Bhutan?",
        answer:
          "Indian nationals need a permit rather than a visa, plus the Sustainable Development Fee, which is charged per person per night. We arrange both and quote the SDF separately so you can see it.",
      },
      {
        question: "Is it difficult physically?",
        answer:
          "The altitude in Paro and Thimphu is around 2,300 m, which most people handle fine. The Tiger's Nest walk is the only demanding part, and it is optional.",
      },
    ],
    metaTitle: "Bhutan Tour Packages",
    metaDescription:
      "Bhutan holiday packages with permits, SDF, flights and guided touring in Paro, Thimphu and Punakha. Arranged from Kerala by an IATA-accredited agency.",
  },
  {
    slug: "nepal",
    name: "Nepal",
    country: "Nepal",
    region: "international",
    order: 11,
    priceFrom: 34000,
    heroImage: img("nepal"),
    tagline: "Eight of the world's ten highest mountains, and the temples below them",
    intro:
      "Nepal is where the Himalaya stops being an idea and becomes a wall of white across the horizon. Sunrise from Nagarkot or Sarangkot, with Annapurna or Everest catching the first light, is the sort of thing people plan a trip around and still find themselves unprepared for. Below the peaks sit Kathmandu's temple squares, Pokhara's lakeside calm, the jungle at Chitwan, and Lumbini, where the Buddha was born.\n\nFor Indian travellers it is among the easiest trips abroad there is. No visa, no passport strictly required, the rupee accepted almost everywhere, and a shared language in most places you go. At Alisha Tours & Travels, an IATA-accredited Nepal travel agency based in Kottayam, we arrange the flights, hotels, mountain flights, transfers and sightseeing as a single booking.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Nepal",
        points: [
          "No visa required for Indian passport holders",
          "Himalayan views without a trek, from viewpoints you can drive to",
          "Nepal holiday packages that cost far less than most international trips",
          "Pashupatinath, Muktinath and Lumbini for travellers making the journey for pilgrimage",
          "Rafting, paragliding, jungle safari and mountain flights in one country",
          "Comfortable for families travelling with elderly parents",
        ],
      },
      {
        kind: "prose",
        title: "Top attractions",
      },
      {
        kind: "cards",
        title: "Kathmandu Valley",
        items: [
          { title: "Pashupatinath Temple", text: "One of the holiest Shiva temples anywhere, on the banks of the Bagmati. Aarti at dusk is the moment to be there." },
          { title: "Boudhanath Stupa", text: "An enormous white dome with painted eyes, circled by pilgrims and ringed by Tibetan monasteries and rooftop cafes." },
          { title: "Swayambhunath", text: "The monkey temple, at the top of a long stairway with the whole valley laid out below." },
          { title: "Kathmandu Durbar Square", text: "Palace courtyards, pagoda temples and the residence of the Kumari, the living goddess." },
          { title: "Patan & Bhaktapur", text: "Two medieval cities within the valley, with the finest Newari woodcarving and metalwork in Nepal. Bhaktapur in particular feels centuries older than its distance from the capital suggests." },
          { title: "Nagarkot", text: "An hour from the city, for sunrise over the range on a clear morning." },
        ],
      },
      {
        kind: "cards",
        title: "Pokhara",
        items: [
          { title: "Phewa Lake", text: "Boats out to the Tal Barahi temple on its island, with the Annapurna range reflected on still mornings. The quiet centre of most Nepal honeymoon packages." },
          { title: "Sarangkot", text: "The sunrise viewpoint, and the launch site for paragliding over the lake." },
          { title: "Davis Falls & Gupteshwor Cave", text: "A waterfall that disappears underground, with a cave shrine on the other side of the road." },
          { title: "World Peace Pagoda", text: "Above the lake, reached on foot or by road, with the best view in Pokhara." },
          { title: "Annapurna Base Camp & Poon Hill", text: "For travellers who want to walk. Poon Hill takes four to five days and suits reasonably fit beginners." },
        ],
      },
      {
        kind: "cards",
        title: "Beyond the cities",
        items: [
          { title: "Chitwan National Park", text: "Jeep and canoe safaris after one-horned rhino, sloth bear, gharial and, with luck, tiger. Two nights here is what turns a sightseeing trip into a Nepal family tour package that children remember." },
          { title: "Lumbini", text: "The birthplace of the Buddha, with the Maya Devi temple, the Ashoka pillar and monasteries built by Buddhist nations from around the world." },
          { title: "Muktinath", text: "At 3,800 metres in the Mustang valley, sacred to Hindus and Buddhists alike, reached by road from Pokhara or by a short flight to Jomsom." },
          { title: "Everest mountain flight", text: "An hour out of Kathmandu, flying along the range with a turn at Everest and a window seat for everyone. The alternative to trekking." },
          { title: "Bhote Koshi & Trishuli rafting", text: "White water within a few hours of Kathmandu, run as a day trip or overnight." },
        ],
      },
      {
        kind: "prose",
        title: "Nepal tour packages from Kerala",
        body:
          "Nepal is straightforward from Kerala once the routing is settled. Flights connect from Kochi and Thiruvananthapuram to Kathmandu through Delhi, and the time difference is fifteen minutes, so nothing is lost on arrival.\n\nIndian nationals do not need a visa. A passport or voter ID card is required, while Aadhaar and PAN cards are not accepted as identification, and children travelling need a birth certificate or school identification. We handle the flights, hotels in Kathmandu and Pokhara, the internal drive or flight between them, the Everest mountain flight, Chitwan, and pilgrimage itineraries taking in Pashupatinath, Muktinath and Lumbini, all arranged from our office.",
      },
      {
        kind: "prose",
        title: "Best time to visit",
        body:
          "October and November are the best months of the year. The monsoon has cleared the air, the mountains are visible almost every day and the weather suits both sightseeing and trekking. Dashain and Tihar fall in this window and are worth seeing, and Nepal tour packages for these weeks book out early.\n\nMarch to May is the second peak, warm with rhododendrons in flower across the hills, though haze can build in the valleys by late spring.\n\nDecember to February is cold and clear, with the sharpest mountain views of all and the fewest visitors. High passes and Muktinath can be snowbound, so the itinerary needs care.\n\nJune to September is the monsoon. Green and cheap, with mountain views often lost to cloud and landslides possible on hill roads.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Nepal runs fifteen minutes ahead of India. Indian rupees are accepted, though notes of 500 and above are officially not permitted, so carry smaller denominations or exchange on arrival. Cards work in hotels and larger restaurants, with cash needed elsewhere.\n\nMuktinath sits at 3,800 metres, so allow time to acclimatise and avoid rushing up from Pokhara in a day. Leather items are not permitted inside Pashupatinath, and non-Hindus cannot enter the main temple, though the surrounding complex is open. Hill roads are winding and journeys take longer than the distance suggests, which is why the Kathmandu to Pokhara flight is worth the small extra cost. Drink bottled water, and pack warm layers for early mornings at any time of year.",
      },
    ],
    closingTitle: "Ready to plan your Nepal holiday?",
    closingText:
      "Kathmandu and Pokhara across six days, a pilgrimage taking in Pashupatinath and Muktinath, or a longer trip adding Chitwan and Lumbini, we will shape it around what you want. Flights, hotels, mountain flights, transfers and sightseeing arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in",
    faqs: [
      {
        question: "Do Indians need a visa for Nepal?",
        answer:
          "No. Indian citizens travel visa-free, but you must carry a valid passport or voter ID — we will tell you exactly which documents to bring for each traveller.",
      },
      {
        question: "Can we do a short trek?",
        answer:
          "Yes. Ghorepani–Poon Hill is four to five days and needs no technical experience. We arrange guides, porters and permits.",
      },
    ],
    metaTitle: "Nepal Tour Packages",
    metaDescription:
      "Nepal holiday packages covering Kathmandu, Pokhara, Chitwan and Nagarkot, with flights, hotels, mountain flights and short treks.",
  },

  /* ------------------------------- DOMESTIC ----------------------------- */
  {
    slug: "kerala",
    name: "Kerala",
    country: "India",
    region: "domestic",
    order: 1,
    priceFrom: 14500,
    heroImage: img("kerala"),
    tagline: "God's own country, from the backwaters to the hills",
    intro:
      "Kerala is a narrow green strip between the Arabian Sea and the Western Ghats, and almost everything in it sits within a few hours of everything else. You can wake up on a houseboat in Alleppey, have lunch in a tea estate in Munnar and be watching a Kathakali performance in Fort Kochi the same evening. Nothing is rushed here, the food is worth the trip on its own, and it stays beautiful in the rain, which is more than most places can claim.\n\nAt Alisha Tours & Travels, Kerala is home. We are based in Kottayam, twenty minutes from Kumarakom, and we have been sending travellers around this state long enough to know which houseboat is actually worth the money, which hill road is a nightmare in July and which Ayurveda centre is the real thing. As an IATA-accredited Kerala travel agency, we build our Kerala tour packages around your dates, your budget and the people travelling with you, not around a fixed itinerary someone else wrote.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Kerala",
        points: [
          "Backwaters, hill stations, beaches and wildlife parks all within a few hours of each other",
          "Works equally well for honeymooners, families with small children and senior citizens",
          "Authentic Ayurveda, in the state where it is still practised rather than packaged",
          "Safe, green and easy to travel in, with English and Hindi widely understood",
          "Kerala holiday packages for every budget, from village homestays to backwater resorts",
          "Food worth travelling for, from appam and stew to Malabar biryani and karimeen pollichathu",
        ],
      },
      {
        kind: "cards",
        title: "Our most requested Kerala packages",
        items: [
          { title: "Kerala honeymoon packages", text: "Four to six nights, usually Munnar for the hills, Thekkady for a day in the spice country and a private houseboat in Alleppey or Kumarakom to finish. We add the things that make it a honeymoon rather than a holiday: a room with a view worth paying for, a candlelit dinner on the deck, and a pace that leaves you time to do nothing." },
          { title: "Kerala family tour packages", text: "Five to seven nights covering Kochi, Munnar, Thekkady and the backwaters, planned around shorter driving days and hotels with a pool. Elephants at Periyar, a tea museum, a boat ride and a beach at the end keep everyone from six to seventy happy." },
          { title: "Backwater and houseboat packages", text: "A short three or four night break for anyone who wants Kerala without a long itinerary. One night on a houseboat, one or two in a lakeside resort, and very little driving. This is the trip we put together most often for visitors with only a long weekend." },
          { title: "Ayurveda and wellness packages", text: "From a week of rejuvenation therapy to a full twenty-one day Panchakarma course at a government-classified centre, with a doctor's consultation before anything begins. Best taken during the monsoon, when the treatments work as they are meant to." },
        ],
        footnote:
          "Every one of these is a starting point rather than a fixed product. Tell us how many days you have and who is travelling, and we will change the route to match.",
      },
      {
        kind: "cards",
        title: "Top attractions",
        items: [
          { title: "Alleppey and the backwaters", text: "A night on a houseboat drifting through Vembanad Lake, with lunch cooked on board and nothing to do but watch village life go past. This is the picture most people have in their head when they think of Kerala, and it lives up to it." },
          { title: "Munnar", text: "Tea estates rolling over the hills at 1,600 metres, with cool mornings and mist that burns off by ten. Eravikulam National Park is home to the Nilgiri tahr, and the Neelakurinji flowers turn the slopes blue once every twelve years." },
          { title: "Thekkady and Periyar", text: "A boat ride across the lake at dawn is the best chance of spotting elephants and bison at the water's edge. Spice plantation walks, bamboo rafting and a Kalaripayattu show fill the rest of the day." },
          { title: "Fort Kochi and Mattancherry", text: "Chinese fishing nets on the shoreline, a 500-year-old synagogue in Jew Town, the Dutch Palace murals, cafés in old Portuguese buildings and a Kathakali performance in the evening." },
          { title: "Wayanad", text: "Edakkal Caves with their prehistoric carvings, the heart-shaped lake on Chembra Peak, Soochipara Falls and Banasura Sagar dam. The greenest, quietest corner of the state and a favourite for long weekends." },
          { title: "Kumarakom", text: "Twenty minutes from our office, and still the calmest place we send people. A bird sanctuary on the lake, lakeside resorts, canoe rides through the narrow canals and the best sunsets in the backwaters." },
          { title: "Kovalam and Varkala", text: "Kovalam's crescent beaches under the red-and-white lighthouse, and Varkala's cliff path lined with cafés looking straight out over the Arabian Sea. Add a day for Thiruvananthapuram's Padmanabhaswamy Temple and the palace at Kanakakkunnu." },
          { title: "Athirappilly and Vazhachal", text: "Kerala's widest waterfall, eighty feet of it, thundering through rainforest an hour and a half from Kochi. Spectacular right after the monsoon, when the river is at full strength." },
          { title: "Kannur and Bekal", text: "North Kerala's beaches, the sea-facing Bekal Fort, Muzhappilangad's drive-in beach and the Theyyam rituals that run from December to March. Very few tour groups come this far north, which is exactly the appeal." },
        ],
      },
      {
        kind: "prose",
        title: "Best time to visit Kerala",
        body:
          "October to March is the season most people travel in. The air is clear, the backwaters are calm, the hill stations are cool without being cold and the Theyyam season runs through the north from December. Onam falls in August or September, and the snake boat races around it are worth planning a trip around. Book early, because houseboats and the better hill resorts fill up well in advance.\n\nJune to September is the monsoon, and Kerala is at its most beautiful, greenest and cheapest. This is also the traditional Ayurveda season, when the body responds best to treatment, and when waterfalls like Athirappilly are at full force. Bring an umbrella and plan a slower itinerary.\n\nApril and May get hot and humid on the plains, but Munnar, Wayanad and Vagamon stay comfortable throughout. With the school holidays on, these are the months when most of our Kerala family tour packages go out.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Kerala is long and thin and the roads wind, so allow more driving time than the map suggests. Kochi is the most convenient airport for most itineraries, with Thiruvananthapuram for the south and Kannur for the north. By train, the main line runs the length of the state: Ernakulam suits Kochi and Munnar, Kottayam is closest for Kumarakom and Thekkady, Alappuzha for the houseboats, Thiruvananthapuram and Varkala for the south, and Kozhikode and Kannur for Wayanad and the north. Alcohol is sold only in licensed bars and state outlets, and the first of every month is a dry day. Dress modestly at temples, where men are often asked to remove their shirts and wear a mundu, and note that a few temples admit Hindus only. Carry light cotton clothing, mosquito repellent and an umbrella, whatever the season.",
      },
    ],
    closingTitle: "Ready to plan your Kerala holiday?",
    closingText:
      "Whether it is a honeymoon in the backwaters, a family trip through the hills or a slow week of Ayurveda by the sea, we will build the itinerary around what you actually want to do. Flights or train tickets into Kerala, houseboats, hotels, cars, guides and sightseeing, all arranged from one place, by people who live here.\n\nCall +91 9562921818 or write to info@alishatravels.in. Alisha Tours & Travels, SBI Building, Ettumanoor, Kottayam 686631, Kerala.",
    faqs: [
      {
        question: "How many days do we need for Kerala?",
        answer:
          "Six nights covers Munnar, Thekkady, Alleppey and Kochi without a single rushed drive. Four is possible if you drop one hill station.",
      },
      {
        question: "Is an overnight houseboat worth it?",
        answer:
          "Yes, provided it is a well-maintained boat with air conditioning at night. There is a wide quality range on the same canal and the price difference is smaller than you would expect.",
      },
      {
        question: "Can you arrange Ayurvedic treatment?",
        answer:
          "Yes, at government-classified centres rather than hotel spas. Genuine treatment courses run seven to fourteen days and we will say so rather than sell you a one-hour massage as therapy.",
      },
    ],
    metaTitle: "Kerala Tour Packages",
    metaDescription:
      "Kerala holiday packages covering Munnar, Thekkady, Alleppey houseboats and Kovalam, arranged by a Kottayam-based IATA-accredited travel agency.",
  },
  {
    slug: "kashmir-srinagar",
    name: "Kashmir & Srinagar",
    country: "India",
    region: "domestic",
    order: 2,
    priceFrom: 26000,
    heroImage: img("kashmir-srinagar"),
    tagline: "Houseboats on the lake, snow on the meadow",
    intro:
      "Srinagar is a city built around water. Wooden houseboats sit moored along Dal Lake, shikaras carry vegetables to a market that opens before sunrise, and seventeenth-century Mughal gardens step down the hillside to the shore. An hour and a half away the meadow at Gulmarg is under snow for four months of the year, and a couple of hours in the other direction the Lidder river runs through the pine forests of Pahalgam. Very little of it looks like the rest of India.\n\nAt Alisha Tours & Travels, we have been putting together Kashmir tour packages from Kerala for as long as we have been sending people north, and Srinagar is still one of our most-booked destinations. As an IATA-accredited Kashmir travel agency based in Kottayam, we build our Srinagar tour packages around the connecting flights from Kochi or Trivandrum, or the train now that the railway runs all the way into the valley, so the houseboat, the hotels in Gulmarg and Pahalgam and the vehicles all sit in one booking. We also know which houseboats have actually been maintained, which a photograph will not tell you.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Kashmir",
        points: [
          "Houseboats, alpine meadows, snow and Mughal gardens within a couple of hours of one another",
          "The most reliable snow in India, and for most Kerala travellers the first they have seen",
          "Kashmir honeymoon packages that have been a favourite from Kerala for three generations",
          "Short driving days, so it suits families with small children and senior citizens",
          "Pashmina, saffron, walnut wood and carpets, bought where they are actually made",
          "Kashmir holiday packages from four-night breaks to ten-day trips ending in Ladakh",
          "Now reachable by train as well as by air, with the railway running all the way to Srinagar",
        ],
      },
      {
        kind: "cards",
        title: "Our most requested Kashmir packages",
        items: [
          { title: "Kashmir honeymoon packages", text: "Five or six nights, and still the trip we are asked for most often. Two nights on a houseboat on Dal or Nigeen Lake, two in Gulmarg and one or two in Pahalgam, with a shikara ride at sunset and a room with a view of the water. Short drives, good hotels, and nothing scheduled before nine in the morning." },
          { title: "Kashmir family tour packages", text: "Six or seven nights covering Srinagar, Gulmarg, Pahalgam and Sonamarg at a pace that works with children. The gondola at Gulmarg, ponies and the Lidder river at Pahalgam, the glacier walk at Sonamarg, and the Mughal gardens on the day everyone needs a slower one." },
          { title: "Srinagar and Gulmarg snow packages", text: "December to February, when Gulmarg is under several feet of snow and the skiing is the best in the country. Four or five nights, with heated hotels that actually stay warm, local snow clothing arranged, and ski instruction for beginners if you want it." },
          { title: "Srinagar to Leh road trip", text: "Ten days or so, driving from Srinagar over the Zoji La to Kargil and on to Leh, then flying home from there. The finest road journey in India, and it gives you Kashmir and Ladakh in one trip. See our Ladakh tour packages for the second half of the route." },
        ],
        footnote:
          "All of our Kashmir tour packages are starting points rather than fixed products. Most people book Srinagar, Gulmarg and Pahalgam and stop there. If you have two extra days, Sonamarg and Doodhpathri are the ones worth adding.",
      },
      {
        kind: "cards",
        title: "Top attractions",
        items: [
          { title: "Dal Lake and the houseboats", text: "A night on a carved cedar houseboat with breakfast brought across by shikara, and the floating vegetable market at dawn if you can manage the alarm. Nigeen Lake is quieter than Dal if you would rather not be in the middle of everything." },
          { title: "Gulmarg", text: "A meadow of wildflowers in summer and a ski resort in winter, an hour and a half from Srinagar. The gondola is among the highest cable cars in the world, with the second stage climbing to Apharwat at nearly 4,000 metres. Book the tickets online before you travel." },
          { title: "Pahalgam", text: "The Lidder river running through pine forest, with Betaab Valley and Aru a short drive further up. Greener and gentler than Gulmarg, and the base for the Amarnath yatra in July and August." },
          { title: "The Mughal gardens", text: "Shalimar Bagh, Nishat Bagh and Chashme Shahi, built in terraces down to the lake in the seventeenth century, with Pari Mahal above them. Best in April when everything is in flower, and again in late October when the chinars turn." },
          { title: "Sonamarg", text: "The meadow of gold, two and a half hours from Srinagar, with the Thajiwas glacier a pony ride away. This is also where the road to Ladakh begins its climb over the Zoji La." },
          { title: "Tulip Garden", text: "Asia's largest tulip garden, on the slope below Shankaracharya hill, open for two or three weeks from late March. Well over a million bulbs, and worth timing a trip around if your dates are flexible." },
          { title: "Old Srinagar", text: "Jamia Masjid with its forest of deodar pillars, the Hazratbal shrine on the lakeshore, Shankaracharya Temple on the hill above the city, and the lanes around them where the papier-mâché and walnut carving workshops still are." },
          { title: "Pampore saffron fields", text: "Twenty minutes from Srinagar, purple from end to end for a few weeks in late October and early November. The rest of the year it is a field, so this one is entirely about timing." },
          { title: "Doodhpathri and Yusmarg", text: "Two meadows most itineraries skip, an easy day trip from Srinagar each. Go if you have an extra day and would rather spend it somewhere without a queue for the ponies." },
        ],
      },
      {
        kind: "prose",
        title: "Best time to visit Kashmir",
        body:
          "March to May is spring, with almond blossom in Srinagar, the Tulip Garden open for a few weeks from late March, and the gardens at their best. Pleasant during the day and cold at night, with snow still lying at Gulmarg well into April, which means you get flowers and snow in the same trip.\n\nJune to September is the summer season and the busiest, particularly during the Kerala school holidays, when most of our Kashmir family tour packages go out. The meadows are green, Sonamarg and the high valleys are fully open, and the weather is reliable. Book two months ahead for June and July, because the good houseboats and Gulmarg hotels go early.\n\nOctober and November bring the autumn, when the chinar trees turn copper and the saffron fields at Pampore flower. Fewer visitors, lower rates and the clearest light of the year. Nights get cold quickly, so pack for it.\n\nDecember to February is deep winter. Gulmarg gets the best snow in India and the skiing season runs through it, while Srinagar can drop below freezing during the forty coldest days, the chillai kalan. Some high roads close, but this is the trip to take if snow is the reason you are going.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Prepaid mobile connections issued outside the region do not work in Kashmir, so convert to postpaid before you travel or plan to be largely offline. Carry layers whatever the season, because Gulmarg and Sonamarg are cold even in June, and proper snow clothing in winter, which is easy to hire locally. Local taxi unions in Gulmarg and Pahalgam require you to change into a local vehicle at the entry point, which is normal and included in our packages. ATMs are plentiful in Srinagar and scarce above it, so draw cash before you leave the city. Buy pashmina and saffron from established shops with a GI certification rather than from boats or roadside stalls, and dress modestly at the shrines, where women cover their heads. The railway now runs all the way to Srinagar: trains from Kerala reach Jammu or Katra in about three days, and the Vande Bharat covers the rest of the way to Srinagar in around five hours, over some of the most dramatic railway engineering in the country. Srinagar flights are occasionally delayed by winter fog, so keep the return day loose.",
      },
    ],
    closingTitle: "Ready to plan your Kashmir holiday?",
    closingText:
      "Whether it is a honeymoon on a houseboat, a family trip in the summer holidays or a week in the snow, we will build the itinerary around your dates and your budget. Our Srinagar tour packages cover flights or train tickets, houseboats, hotels, vehicles and permits, all arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in. Alisha Tours & Travels, SBI Building, Ettumanoor, Kottayam 686631, Kerala.",
    faqs: [
      {
        question: "Is Kashmir safe to travel in?",
        answer:
          "Tourist areas have been operating normally for several years and we send families there regularly. We monitor advisories for your specific dates and will tell you plainly if we would not go ourselves.",
      },
      {
        question: "Houseboat or hotel?",
        answer:
          "Both, ideally — two nights on a houseboat for the experience and the rest in a hotel for the facilities. Houseboats vary enormously in standard, which is where our recommendation actually matters.",
      },
    ],
    metaTitle: "Srinagar & Kashmir Tour Packages",
    metaDescription:
      "Kashmir holiday packages covering Srinagar houseboats, Gulmarg, Pahalgam and Sonamarg, with flights, transfers and hotels arranged from Kerala.",
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    country: "India",
    region: "domestic",
    order: 3,
    priceFrom: 32000,
    heroImage: img("ladakh"),
    tagline: "High passes, blue lakes and very thin air",
    intro:
      "Ladakh does not look like the rest of India, and it does not feel like it either. This is cold desert at the top of the country, where the mountains are bare rock in forty shades of brown, the lakes are an unreasonable shade of blue, and prayer flags snap over passes higher than anything in the Alps. It is a long way from Kerala in every sense, which is exactly why people who go once tend to talk about it for years afterwards.\n\nAt Alisha Tours & Travels, we put together Ladakh tour packages from Kerala with one thing in mind: you are going from sea level to 3,500 metres in a single morning, and the itinerary has to respect that. Ours build in acclimatisation days, carry oxygen in the vehicle, and use drivers who have run these roads for years. As an IATA-accredited Ladakh travel agency based in Kottayam, we handle the connecting flights or trains, the permits and the camps in one booking, so you are not coordinating three suppliers across four time zones of paperwork.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Ladakh",
        points: [
          "Scenery that genuinely looks unreal, at an altitude most people will never otherwise stand at",
          "Buddhist monasteries, high-altitude lakes, sand dunes and some of the world's highest motorable roads",
          "The bike trip a lot of people keep on a list for years and finally do",
          "Quiet, low-crime and welcoming, with a culture unlike anywhere else in India",
          "Ladakh family tour packages that work as well for teenagers as they do for photographers and riders",
          "Ladakh holiday packages from short fly-in trips to two-week overland journeys",
          "Photography that needs no filter, in light you only get above 3,000 metres",
        ],
      },
      {
        kind: "cards",
        title: "Our most requested Ladakh packages",
        items: [
          { title: "Leh Ladakh tour packages", text: "Six or seven nights, flying into Leh and out again. Two easy days in Leh to acclimatise, then Nubra Valley over Khardung La, a night at Pangong Tso and back. This is the standard route and the one we recommend for most first-timers, because it gets you everything without a punishing amount of driving." },
          { title: "Ladakh bike trip packages", text: "Royal Enfields, a backup vehicle and a mechanic, either on the Manali to Leh highway or as a loop out of Leh once you have acclimatised. We do not send anyone straight from the airport onto a bike. The riding is the point, but the first two days still belong to your lungs." },
          { title: "Ladakh honeymoon packages", text: "Five or six nights, slower, with the better camps at Nubra and Pangong booked well in advance and comfortable hotels in Leh. Fewer stops, longer at each one, and the drives timed so you are not arriving at a lakeside camp after dark." },
          { title: "Ladakh family tour packages", text: "Built around shorter days and proper rest, usually skipping Tso Moriri and keeping the itinerary to Leh, Nubra and Pangong. Ladakh works beautifully with older children and teenagers. For young children and grandparents, the altitude needs a conversation with your doctor first, and we will tell you honestly if we think the plan is too much." },
        ],
        footnote:
          "If you have the time, the best version of this trip is flying into Leh and driving out through Kargil to Srinagar, or the reverse. It turns a week into ten days and adds Kashmir to the trip, and now that the railway runs all the way to Srinagar, the Kashmir end can be reached by train from Kerala as well. Ask us about it.",
      },
      {
        kind: "cards",
        title: "Top attractions",
        items: [
          { title: "Pangong Tso", text: "The lake everyone comes for, 134 kilometres long and changing colour through the day from turquoise to deep blue. Stay a night at a camp on the shore if you can, because the sky after dark is the better half of the experience." },
          { title: "Nubra Valley", text: "Sand dunes at 10,000 feet with double-humped Bactrian camels, reached over Khardung La, one of the highest motorable passes in the world. Diskit Monastery and its 32-metre Maitreya Buddha look out over the whole valley." },
          { title: "Leh", text: "Leh Palace above the old town, Shanti Stupa at sunset, the bazaar, and a couple of deliberately lazy days at the start of the trip while your body adjusts. More interesting than most people expect it to be." },
          { title: "Thiksey and Hemis monasteries", text: "Thiksey for the morning prayers, which start before sunrise and are worth the early alarm, and Hemis for the largest monastery in Ladakh and its masked dance festival in June or July." },
          { title: "Tso Moriri", text: "Higher, further and far quieter than Pangong, at 4,500 metres in the Changthang plateau. Worth adding if you have nine nights or more and want somewhere with almost nobody in it." },
          { title: "Khardung La and the high passes", text: "Chang La, Khardung La and the Wari La are destinations in themselves. Stop briefly, take the photograph, and keep moving. Nobody feels good standing around at 5,300 metres." },
          { title: "Magnetic Hill and the Sangam", text: "The optical illusion that appears to roll your car uphill, and just beyond it the confluence at Nimmu where the green Indus and the brown Zanskar run side by side before mixing." },
          { title: "Lamayuru", text: "The moonland formations on the Leh to Kargil road, and one of the oldest monasteries in Ladakh sitting above them. A natural stop if you are coming in or out via Srinagar." },
          { title: "Turtuk", text: "A Balti village that was part of Pakistan until 1971, near the end of the Nubra Valley. Apricot orchards, stone houses and a completely different feel from the rest of Ladakh. Add a night if your schedule allows." },
        ],
      },
      {
        kind: "prose",
        title: "Best time to visit Ladakh",
        body:
          "June to September is the main season. Every pass is open, both the Manali and Srinagar highways are running, and the camps at Pangong and Nubra are set up. July and August are the busiest and most expensive months, and also when the Hemis festival and the apricot harvest fall. Book two to three months ahead for these dates, because the good camps genuinely run out.\n\nMay and early October are the shoulder weeks, with fewer people, lower rates and the clearest skies of the year in early October. It is properly cold at night, some high roads may still be closed in May, and parts of Pangong can still be frozen. Worth it if you do not mind the cold.\n\nNovember to March shuts most of Ladakh down. The road links close and Leh is reachable only by air. What remains is the Chadar trek on the frozen Zanskar river in January and February, for experienced trekkers with time to acclimatise properly, and a very quiet, very cold Leh.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Almost everything about a Ladakh trip comes back to altitude. Leh is at roughly 3,500 metres and the passes go well above 5,000, so the first two days are for resting, drinking water and doing very little, and alcohol is best avoided entirely at the start. Talk to your doctor before you travel about altitude sickness and whether to carry medication for it. There is no railway to Leh, so if you would rather not fly, the train takes you to Jammu and on to Srinagar, or to Chandigarh for the Manali highway, and the last stretch is by road. Both roads are open only in summer, and arriving gradually by road is easier on the body than landing straight at altitude. Beyond that: carry cash, because ATMs outside Leh are unreliable and often empty; pack layers, since a twenty-degree afternoon becomes a near-freezing night; use high-factor sunscreen, because the thin air burns faster than the temperature suggests; and build a spare day into your return, as Leh flights are cancelled for weather more often than most.",
      },
    ],
    closingTitle: "Ready to plan your Ladakh holiday?",
    closingText:
      "Tell us your dates and whether you want to fly both ways, ride it or drive out through Kashmir, and we will build the rest around it. Flights from Kochi or Trivandrum, trains for the overland routes, permits, hotels, camps, vehicles and bikes, all arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in. Alisha Tours & Travels, SBI Building, Ettumanoor, Kottayam 686631, Kerala.",
    faqs: [
      {
        question: "How long do we need to acclimatise?",
        answer:
          "Two full nights in Leh with no strenuous activity before going any higher. Every itinerary we build does this, even when it means one fewer sight.",
      },
      {
        question: "Do we need permits?",
        answer:
          "Yes, Inner Line Permits for Nubra, Pangong and Tso Moriri. We arrange them; you will need passport-size photographs and ID copies.",
      },
      {
        question: "Is it suitable for older travellers or children?",
        answer:
          "It depends on the individual, and on heart and lung health in particular. We ask openly about this before booking rather than after.",
      },
    ],
    metaTitle: "Ladakh Tour Packages",
    metaDescription:
      "Leh Ladakh holiday packages with Pangong, Nubra and monastery touring, inner line permits and a properly paced acclimatisation itinerary.",
  },
  {
    slug: "andaman",
    name: "Andaman",
    country: "India",
    region: "domestic",
    order: 4,
    priceFrom: 29000,
    heroImage: img("andaman"),
    tagline: "Clear water, white sand and a slower clock",
    intro:
      "The Andamans sit a thousand kilometres off the mainland, closer to Myanmar than to India, and they run at their own speed. The water is the colour people assume has been edited, the coral starts a few metres from the shore, and the islands go quiet at sunset because there is nothing much to stay up for. For anyone from Kerala who has grown up around the sea, it is still a surprise how different this sea looks.\n\nAt Alisha Tours & Travels, we have been putting together Andaman tour packages from Kerala for years, and the thing that separates a good island trip from a frustrating one is almost never the hotel. It is the ferries. As an IATA-accredited Andaman travel agency based in Kottayam, we book the journey to Port Blair, whether that is a connecting flight through Chennai or Bangalore or an overnight train to Chennai and a flight on from there, together with the inter-island sailings and the hotels, so the whole itinerary holds up when you get there.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose the Andamans",
        points: [
          "Some of the clearest water and whitest sand in the country, on beaches that never feel crowded",
          "Scuba diving and snorkelling that beginners can do on day one, over living coral",
          "Andaman honeymoon packages with nothing to do after sunset, which is rather the point",
          "No passport, no visa and no currency to change, for an island that feels foreign anyway",
          "Andaman holiday packages from four-night island breaks to ten days including the north",
          "A short season of rough weather and eight months of calm, warm sea",
        ],
      },
      {
        kind: "cards",
        title: "Our most requested Andaman packages",
        items: [
          { title: "Andaman honeymoon packages", text: "Five or six nights, split between Port Blair, Swaraj Dweep and Shaheed Dweep, with a beachfront room for at least two of them. Sunset at Radhanagar, a morning snorkelling trip, and long stretches of time with nothing scheduled. The islands do very little in the evening, which suits this trip perfectly." },
          { title: "Andaman family tour packages", text: "Six nights covering Port Blair, Swaraj Dweep and Shaheed Dweep, planned around ferry timings rather than against them. Glass-bottom boats and sea walks for anyone who does not swim, the Cellular Jail light and sound show, and the limestone caves at Baratang for a change from the beach." },
          { title: "Scuba diving packages", text: "A Discover Scuba dive needs no experience and no certification, and takes an afternoon. If you want the full PADI Open Water course, budget four days on Swaraj Dweep and do it at the start of the trip, not the end. We book with the established dive schools only." },
          { title: "Short island break", text: "Four nights, Port Blair and Swaraj Dweep, one ferry each way. The least amount of travelling for the most amount of beach, and the version we suggest for anyone with a long weekend and a day either side." },
        ],
        footnote:
          "All of our Andaman tour packages are built around the ferry schedule for your specific dates, which changes through the year. Tell us how many nights you have and we will tell you honestly how many islands are sensible.",
      },
      {
        kind: "cards",
        title: "Top attractions",
        items: [
          { title: "Radhanagar Beach", text: "On Swaraj Dweep, and regularly called the best beach in Asia. A long white curve backed by forest, with the sunset as the main event. Get there by five, and swim before the crowd arrives in the late afternoon." },
          { title: "Cellular Jail", text: "The colonial prison at Port Blair where India's political prisoners were held in solitary confinement. Sobering in daylight, and the light and sound show in the evening tells the story properly. Most itineraries start here, and should." },
          { title: "Swaraj Dweep", text: "Formerly Havelock, and the centre of gravity for most Andaman trips. Radhanagar on one side, Kalapathar for sunrise on the other, Elephant Beach for snorkelling and the best diving in the islands just offshore." },
          { title: "Shaheed Dweep", text: "Formerly Neil, smaller and slower than its neighbour. Bharatpur for snorkelling, Laxmanpur for the sunset, and the Natural Bridge, a rock arch that only appears at low tide. Two nights here is the easiest decision on the itinerary." },
          { title: "Ross Island", text: "Now Netaji Subhas Chandra Bose Dweep, a twenty-minute boat ride from Port Blair. The British administrative headquarters until the 1941 earthquake, and now colonial ruins being slowly pulled apart by banyan roots, with deer wandering through them." },
          { title: "Elephant Beach", text: "Reached by boat or a forty-minute walk through forest from Swaraj Dweep. The shallow reef starts a few metres from shore, which makes it the easiest snorkelling in the islands for anyone nervous about deep water." },
          { title: "North Bay", text: "Coral gardens close to the surface, and where most of the water sports run from. Glass-bottom boats, sea walking and snorkelling all happen here, usually as a half day combined with Ross Island." },
          { title: "Baratang", text: "A convoy drive north from Port Blair, a mangrove creek by speedboat and then limestone caves at the end of it. There is a mud volcano nearby. The road crosses the Jarawa tribal reserve, where stopping, photographing or interacting with the community is illegal and taken seriously." },
          { title: "Diglipur", text: "Twelve hours north of Port Blair, with the twin islands of Ross and Smith joined by a sandbar and Saddle Peak, the highest point in the Andamans. Very few people go. Worth it only if you have ten nights or more." },
        ],
      },
      {
        kind: "prose",
        title: "Best time to visit the Andamans",
        body:
          "October to March is the season. The sea is calm, the ferries run reliably, visibility underwater is at its best and the weather is warm without being punishing. December and January are the busiest and most expensive weeks of the year, and also when most of our Andaman honeymoon packages travel, so Radhanagar, the dive schools and the better resorts all need booking well ahead.\n\nApril and May are hot and humid, but the sea stays calm and the crowds thin out considerably. Rates drop, diving is still excellent, and this is when most of our Andaman family tour packages travel, because it lines up with the school holidays.\n\nJune to September is the monsoon. Rain is heavy, the sea gets rough and ferries are cancelled at short notice, which can strand you on an island for a day. Hotels are at their cheapest and the islands are beautifully green, but only travel in these months if your plans can absorb a delay.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Everything on an Andaman itinerary hangs on the ferries, which run between Port Blair, Swaraj Dweep and Shaheed Dweep a few times a day and sell out well ahead in season. We book them alongside the hotels, because a missed sailing does not delay the trip by an hour, it removes a day from it. Carry cash, since ATMs on the islands are few and often out of service. Mobile coverage is patchy outside Port Blair and the internet is slow everywhere, which most people end up enjoying. There is no rail link to the islands, so travelling by train means an overnight journey from Kerala to Chennai and a flight of a little over two hours to Port Blair, which suits anyone who would rather keep flying to a minimum. Indian nationals need no permit for the main islands, while foreign nationals are issued one on arrival. The beaches empty at sunset and there is almost no nightlife, so plan your evenings around dinner. Take something for seasickness if you are prone to it, and do not touch or stand on the coral.",
      },
    ],
    closingTitle: "Ready to plan your Andaman holiday?",
    closingText:
      "Whether it is a honeymoon, a family trip in the school holidays or a week of diving, we will build the itinerary around your dates and the sailings that actually exist on them. Our Andaman tour packages from Kerala include the connecting flights out of Kochi or Trivandrum, or the train to Chennai and the flight on from there, the ferries, hotels, transfers and water sports, all arranged from one place.\n\nCall +91 9562921818 or write to info@alishatravels.in. Alisha Tours & Travels, SBI Building, Ettumanoor, Kottayam 686631, Kerala.",
    faqs: [
      {
        question: "Do we need a permit for the Andamans?",
        answer:
          "Indian nationals do not need a permit for the main islands. Foreign nationals are issued one on arrival. Some tribal reserve areas are closed to all visitors.",
      },
      {
        question: "How many days are enough?",
        answer:
          "Five nights is the practical minimum — Port Blair either side of two or three nights on Havelock. Anything shorter and the ferries eat the trip.",
      },
    ],
    metaTitle: "Andaman Tour Packages",
    metaDescription:
      "Andaman holiday packages covering Port Blair, Havelock and Neil Island with flights, ferries, hotels, snorkelling and scuba, arranged from Kerala.",
  },
  {
    slug: "goa",
    name: "Goa",
    country: "India",
    region: "domestic",
    order: 5,
    priceFrom: 9999,
    heroImage: img("goa"),
    tagline: "Two coastlines, four centuries and no hurry at all",
    intro:
      "Goa is smaller than most people expect and more varied than the postcards suggest. The north is loud, cheap and awake until three in the morning. The south, ninety minutes down the same coast, is long empty beaches and resorts where nothing happens after dinner. In between are Portuguese churches, a Latin Quarter of ochre houses, spice plantations in the hills and a waterfall that only really performs once the rain has stopped.\n\nAt Alisha Tours & Travels, Goa is the easiest trip we sell from Kerala. Direct flights out of Kochi take under two hours, and the overnight train to Madgaon is often the better call for a family, which is the kind of thing worth being told before you book. As an IATA-accredited Goa travel agency based in Kottayam, we put together Goa tour packages from Kerala with the travel, the hotels and the transfers in one booking, and we will tell you plainly whether north or south suits the trip you are describing.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Goa",
        points: [
          "The easiest trip from Kerala, with direct flights from Kochi and an overnight train to Madgaon",
          "Two very different halves, so the same state suits a party weekend and a quiet family week",
          "Goa honeymoon packages that need no visa, no long flight and very little planning",
          "Portuguese churches, Latin Quarter streets and spice plantations when you want a break from the sand",
          "Goa holiday packages from three-night breaks to a full week with both coasts",
          "Food that will feel familiar to anyone from the Kerala coast, and still surprise them",
        ],
      },
      {
        kind: "cards",
        title: "Our most requested Goa packages",
        items: [
          { title: "Goa honeymoon packages", text: "Four or five nights, almost always in the south, where the beaches are wide and empty and the resorts are built for exactly this. A sunset cruise on the Mandovi, a private dinner on the sand, and a day trip north if you want one evening of noise. The shortest and simplest honeymoon we sell." },
          { title: "Goa family tour packages", text: "Five nights, usually split between a beach hotel and a day or two inland. Water sports at Calangute, the Basilica and the churches at Old Goa, a spice plantation lunch and the Dudhsagar jeep safari. We book hotels with a pool, because that is where half the trip actually happens." },
          { title: "North Goa short break", text: "Three or four nights around Baga, Calangute or Anjuna, close to the markets, the shacks and the nightlife. Best from November to February when everything is open. The trip most groups of friends are asking for." },
          { title: "South Goa quiet escape", text: "Four or five nights at Palolem, Agonda, Colva or Benaulim, where the pace drops considerably. Long beaches, fewer people, dolphin boats in the morning and very little to do after dinner. This is the version we suggest for anyone travelling with parents." },
        ],
        footnote:
          "All of our Goa tour packages can be split across both coasts if you have five nights or more, though it costs you a half day of driving. For shorter trips, pick one side and stay there.",
      },
      {
        kind: "cards",
        title: "Top attractions",
        items: [
          { title: "The north Goa beaches", text: "Baga and Calangute for water sports and crowds, Candolim for something calmer, Anjuna and Vagator for the cliffs and the music, and Arambol and Morjim further up for the long empty stretches. Chapora Fort above Vagator is the sunset everyone climbs for." },
          { title: "The south Goa beaches", text: "Palolem's crescent bay, Agonda next door, and the long flat sands at Colva and Benaulim. Butterfly Beach and Cola are reachable only by boat or a walk, which is what keeps them worth the effort." },
          { title: "Old Goa", text: "The Basilica of Bom Jesus, where St Francis Xavier's remains are kept, along with Se Cathedral and the Church of St Cajetan. A UNESCO World Heritage site, and a reminder that Goa was Portuguese for four and a half centuries." },
          { title: "Fontainhas, Panjim", text: "The Latin Quarter, where the houses are painted ochre, blue and green and the streets are too narrow for cars. An hour on foot, ideally in the late afternoon, and the best part of Panjim by a distance." },
          { title: "Dudhsagar Falls", text: "A 310-metre waterfall on the Mandovi, reached by jeep safari from Kulem through the Mollem forest. Thundering just after the monsoon, and closed or restricted at the height of it, so check before you plan a day around it." },
          { title: "Fort Aguada", text: "A seventeenth-century Portuguese fort above Sinquerim with its lighthouse still standing, built to hold off the Dutch. The view down the coast is the reason to go up." },
          { title: "The markets", text: "The Anjuna flea market on Wednesdays and the Saturday night market at Arpora, both running only in season. Spices, textiles, silver and a great deal of things you did not plan to buy." },
          { title: "Spice plantations", text: "Sahakari and Savoi, both about an hour inland, with a walk through pepper, cardamom and vanilla and a buffet lunch served on a banana leaf. Familiar territory if you have been to Thekkady, and still a good day." },
          { title: "Divar and Chorao islands", text: "A five-minute ferry from the mainland and a different century. Chorao has the Salim Ali bird sanctuary, and Divar has almost nothing at all, which is the appeal." },
        ],
      },
      {
        kind: "prose",
        title: "Best time to visit Goa",
        body:
          "November to February is the season, and the reason everyone goes then. Dry, warm days, cool evenings, every shack and market open, and the Carnival in February. This is also when most of our Goa honeymoon packages travel. Christmas and New Year are the most expensive weeks of the year in Goa by a wide margin and need booking three or four months ahead. Everything else in this window is straightforward.\n\nMarch to May turns hot and humid, the crowds thin and the rates fall sharply. The sea is warm and swimming is still good, but the shacks begin closing from late April and the beaches feel emptier than some people want. Good value if you are travelling for the resort rather than the scene, and the window when most of our Goa family tour packages go out, because it lines up with the school holidays.\n\nJune to October is the monsoon and the shoulder either side of it. Goa goes green, Dudhsagar runs at full strength, and hotels are at their cheapest. The shacks are gone, swimming is restricted or unsafe on many beaches, and by late October things start reopening. A quiet, cheap, very pretty Goa, as long as you are not going for the beach itself.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "The single biggest planning decision in Goa is north or south, and the two are an hour and a half apart: north for markets, shacks and nightlife, south for space and quiet. It also shapes how you arrive: by air, Dabolim is better placed for the south and Mopa for the north, and by train, Madgaon is the main stop for trains from Kerala and suits the south, while some also call at Thivim and Karmali, which are closer for the north. The beach shacks are seasonal and most are dismantled for the monsoon, so a May or June trip will find a very different coastline from the photographs. Swim between the flags and take the lifeguards seriously, because the currents here are stronger than they look and the monsoon sea is genuinely dangerous. Drinking alcohol in public places is prohibited and fined, though the beach shacks and bars are entirely fine. Taxis are expensive and metered options are limited, so factor transport into the budget, and if you are hiring a scooter, carry your licence and wear the helmet. Cover your shoulders and knees at the churches in Old Goa.",
      },
    ],
    closingTitle: "Ready to plan your Goa holiday?",
    closingText:
      "Whether it is a honeymoon in the south, a family week with a pool and a beach, or three nights in the north with friends, we will build it around your dates and your budget. Our Goa tour packages from Kerala cover the flight or the train, hotels, transfers, water sports and sightseeing in one booking, and we have worked as a Goa travel agency long enough to know which hotels are genuinely on the beach and which are a ten-minute walk from it.\n\nCall +91 9562921818 or write to info@alishatravels.in. Alisha Tours & Travels, SBI Building, Ettumanoor, Kottayam 686631, Kerala.",
    faqs: [
      {
        question: "North Goa or South Goa?",
        answer:
          "South for couples, families and anyone wanting quiet. North for groups of friends, markets and nightlife. If you want both, stay south and drive north for a day rather than the other way round.",
      },
      {
        question: "Is a long weekend enough?",
        answer:
          "Three nights works and is the most common booking we make. Four lets you add Dudhsagar or Old Goa without giving up a beach day.",
      },
    ],
    metaTitle: "Goa Tour Packages",
    metaDescription:
      "Goa holiday packages for North and South Goa with flights or train, hotels, sightseeing and water sports. Long-weekend and family itineraries.",
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    country: "India",
    region: "domestic",
    order: 6,
    priceFrom: 24000,
    heroImage: img("rajasthan"),
    tagline: "Forts on the hills, palaces on the water, desert in between",
    intro:
      "Rajasthan is the India that people who have never been to India picture. Sandstone forts the size of small towns, a palace floating in the middle of a lake, a blue city seen from four hundred feet of fort wall, and camels walking out onto the dunes at sunset. Almost all of it is still standing, much of it is still lived in, and the whole state is built around colour in a way that makes it photograph better than anywhere else in the country.\n\nAt Alisha Tours & Travels, the thing we spend most time on with this destination is restraint. Rajasthan is enormous, the drives between cities run to eight and ten hours, and the most common mistake is trying to fit six cities into seven nights. As an IATA-accredited Rajasthan travel agency based in Kottayam, we put together Rajasthan tour packages from Kerala with flights into Jaipur or Udaipur or the train from Kerala, the hotels, and one driver who stays with you for the whole circuit rather than a different car in every city.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Rajasthan",
        points: [
          "Forts and palaces on a scale nothing else in India matches, most of them still standing complete",
          "Rajasthan family tour packages built around a camel safari and a night under canvas on the Sam dunes",
          "Rajasthan honeymoon packages built around Udaipur, which is as romantic as the country gets",
          "Block prints, blue pottery, bandhani and juttis, bought in the bazaars that make them",
          "Rajasthan holiday packages from a six-night Jaipur and Udaipur loop to a full twelve-day circuit",
          "Tigers at Ranthambore, and a genuine chance of seeing one",
        ],
      },
      {
        kind: "cards",
        title: "Our most requested Rajasthan packages",
        items: [
          { title: "Rajasthan honeymoon packages", text: "Six or seven nights centred on Udaipur, with a lake-facing room, a boat to Jag Mandir at sunset and a night in a heritage haveli. Usually paired with Jaipur, sometimes with Jodhpur. Short driving days and hotels chosen for the view rather than the star rating." },
          { title: "Rajasthan family tour packages", text: "Eight or nine nights through Jaipur, Jodhpur and Jaisalmer, ending with a camel safari and a desert camp on the Sam dunes. Forts that children can actually climb around, a puppet show at Chokhi Dhani, and the drives broken up so nobody spends six hours in a car." },
          { title: "Golden Triangle with Rajasthan", text: "Delhi, Agra and Jaipur in the first four nights, then on to Udaipur or Jodhpur for another three or four. The version most first-time visitors want, because it puts the Taj Mahal and the Rajasthan forts into one trip." },
          { title: "The desert circuit", text: "Jodhpur, Jaisalmer and Bikaner over seven nights, for anyone who has already seen Jaipur or would rather skip it. Mehrangarh, the living fort at Jaisalmer, Junagarh, and a great deal of desert in between." },
        ],
        footnote:
          "All of our Rajasthan tour packages are planned in driving hours rather than kilometres, because that is what the day actually costs. Tell us your nights and we will tell you how many cities are realistic.",
      },
      {
        kind: "cards",
        title: "Top attractions",
        items: [
          { title: "Amber Fort, Jaipur", text: "The hilltop fort above Maota Lake, with the mirrored Sheesh Mahal inside it. Go at opening time, before the heat and the crowds. Jeeps run up to the gate for anyone who would rather not take an elephant." },
          { title: "Udaipur and Lake Pichola", text: "The City Palace running along the shore, the Lake Palace floating in the middle of the water, and a boat out to Jag Mandir in the last hour of daylight. Add the Monsoon Palace above the town for the sunset and Bagore ki Haveli for the evening dance." },
          { title: "Mehrangarh Fort, Jodhpur", text: "Four hundred feet of sheer wall above the blue city, and probably the finest fort in India. The museum inside is genuinely good, and Jaswant Thada in white marble sits a short walk away." },
          { title: "Jaisalmer", text: "A twelfth-century fort still lived in, with houses, shops and temples inside the walls. Patwon ki Haveli for the stone carving, Gadisar Lake at dawn, and the Sam dunes an hour out for camel rides and a night in a desert camp." },
          { title: "Hawa Mahal and Jantar Mantar", text: "The pink honeycomb facade built so the palace women could watch the street unseen, and next to it the eighteenth-century observatory with the world's largest stone sundial, now a UNESCO World Heritage Site." },
          { title: "Ranthambore", text: "The best chance of seeing a wild tiger in India, in a park built around a thousand-year-old fort. Safaris run in the morning and afternoon in allotted zones, permits sell out weeks ahead, and the park closes through the monsoon." },
          { title: "Kumbhalgarh and Ranakpur", text: "On the road between Udaipur and Jodhpur, and worth breaking the drive for. Kumbhalgarh's perimeter wall is the second longest in the world, and the Ranakpur Jain temple has 1,444 marble pillars, no two carved the same." },
          { title: "Pushkar", text: "A small town around a sacred lake, with one of the very few Brahma temples anywhere and fifty-two ghats down to the water. The camel fair in November turns it into something else entirely." },
          { title: "Shekhawati", text: "The painted havelis of Mandawa and Nawalgarh, north of Jaipur, where merchant families covered entire houses in frescoes. Almost nobody stops here, which is most of the appeal." },
        ],
      },
      {
        kind: "prose",
        title: "Best time to visit Rajasthan",
        body:
          "October to March is the season, and the only one most people should consider for a full circuit. Days are warm and dry, the forts are bearable in the afternoon, and the desert nights are cold and clear. The Pushkar camel fair falls in November and the Jaisalmer desert festival in February, both worth building a trip around. December and January book out early.\n\nApril to June is severe, regularly over forty-five degrees, and the forts offer very little shade. Hotel rates fall a long way and the crowds disappear, which suits some travellers, but the itinerary has to be planned around early mornings and long afternoons indoors. Not the months for a first visit.\n\nJuly to September brings a modest monsoon. Rajasthan turns unexpectedly green, the lakes at Udaipur fill, and rates stay low. Ranthambore closes for the season. This is the window when most of our Rajasthan family tour packages travel, because it overlaps the school holidays and the heat has broken.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Rajasthan is large and the distances punish an over-packed itinerary: Jaipur to Jaisalmer is a ten-hour drive, and the difference between a good trip and an exhausting one is usually two fewer cities. Seven nights covers Jaipur and Udaipur comfortably, ten to twelve gets you the desert as well. If you are coming by train, a weekly direct service from Ernakulam reaches Jaipur in under two days, or the daily trains to Delhi connect with fast services on to Jaipur, which suits the Golden Triangle route anyway. Ranthambore safari permits have to be booked weeks in advance and the park closes from July to September. Winter nights in the desert drop close to freezing even when the days are warm, so carry layers, and from April the daytime heat is severe enough to plan around. Dress modestly at the temples, and cover your head at the Ajmer dargah. Bargaining is normal in the bazaars. Our drivers are instructed not to take you to commission shops, which is a routine problem on this circuit and worth asking any operator about before you book.",
      },
    ],
    closingTitle: "Ready to plan your Rajasthan holiday?",
    closingText:
      "Whether it is a honeymoon in Udaipur, a family circuit ending on the dunes, or the Golden Triangle with a few days of Rajasthan attached, we will build it around your dates. As a Rajasthan travel agency working out of Kerala, we cover the connecting flights or trains, hotels, safari permits and one car for the whole route in a single booking.\n\nCall +91 9562921818 or write to info@alishatravels.in. Alisha Tours & Travels, SBI Building, Ettumanoor, Kottayam 686631, Kerala.",
    faqs: [
      {
        question: "How many cities should we include?",
        answer:
          "Three in seven nights, four in ten. We would rather cut a city than have you spend the holiday in the car, and we will say so when an itinerary is over-packed.",
      },
      {
        question: "Are heritage hotels worth the extra?",
        answer:
          "In Rajasthan, more than anywhere else in India — the buildings are the sightseeing. We will point out which ones are genuinely historic and which are recent construction in an old style.",
      },
    ],
    metaTitle: "Rajasthan Tour Packages",
    metaDescription:
      "Rajasthan holiday packages covering Jaipur, Jodhpur, Udaipur and Jaisalmer with heritage hotels, desert camps and Ranthambore safaris.",
  },
  {
    slug: "darjeeling",
    name: "Darjeeling",
    country: "India",
    region: "domestic",
    order: 7,
    priceFrom: 18500,
    heroImage: img("darjeeling"),
    tagline: "Kanchenjunga at dawn, tea gardens and a steam train",
    intro:
      "Darjeeling sits on a ridge at 2,050 metres with the third highest mountain in the world filling the horizon on a clear morning. The British came for the climate and stayed for the tea, and much of what they left is still running: a narrow-gauge railway pulled by steam engines built before the First World War, hill station bungalows, a square at the top of town where everyone walks in the evening. Four hours east is Gangtok and the whole of Sikkim, which is why very few people come all this way for Darjeeling alone.\n\nAt Alisha Tours & Travels, we plan this as one trip across two states rather than two separate holidays. Getting here from Kerala means either a connecting flight through Kolkata or Delhi into Bagdogra, or around two days by train to New Jalpaiguri, and then a long climb by road, and Sikkim's permits have to be arranged through a registered operator before you travel. As an IATA-accredited Darjeeling travel agency based in Kottayam, we put together Darjeeling tour packages from Kerala with the flights or train tickets, the permits, the hotels and one vehicle for the whole route in a single booking.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Darjeeling",
        points: [
          "Kanchenjunga at sunrise, which is the third highest mountain on earth seen from a hilltop you can drive to",
          "A UNESCO World Heritage railway still running steam engines up the mountain",
          "Tea gardens you can walk through, on the slopes that made the name famous",
          "Darjeeling honeymoon packages with cold mornings, log fires and very little to do in a hurry",
          "Gangtok, Pelling and north Sikkim within a day's drive, so one trip can cover two states",
          "Darjeeling holiday packages from five-night hill breaks to ten days including the high valleys",
        ],
      },
      {
        kind: "cards",
        title: "Our most requested Darjeeling packages",
        items: [
          { title: "Darjeeling and Gangtok packages", text: "Six or seven nights, three in Darjeeling and three in Gangtok, which is how most people do this trip and for good reason. Tiger Hill at dawn, the toy train, the tea gardens, then over to Sikkim for Tsomgo Lake, Rumtek and MG Marg. One vehicle, one driver, and the permits handled before you arrive." },
          { title: "Darjeeling honeymoon packages", text: "Five nights, split between a heritage hotel in Darjeeling and a tea estate bungalow or a quiet property outside town. Sunrise over Kanchenjunga, an afternoon of tea tasting, a cable car down the valley and evenings by a fire. Cold, slow and very easy to like." },
          { title: "Darjeeling family tour packages", text: "Six nights covering Darjeeling, Mirik and Gangtok, planned around shorter driving days because the mountain roads take longer than the distances suggest. The zoo and its red pandas, the toy train joy ride, the ropeway and the Rock Garden fill the days without anyone being dragged anywhere." },
          { title: "North Sikkim extension", text: "Nine or ten nights, adding Lachung, the Yumthang valley and Gurudongmar Lake at 5,400 metres. Spectacular, and genuinely demanding: the altitude is serious, permits are restricted, and there is no mobile network for days. We will tell you honestly whether your group should attempt it." },
        ],
        footnote:
          "All of our Darjeeling tour packages assume you will want Sikkim as well, because the drive between them is short and the two are very different. If you would rather stay on one side, say so and we will build it that way.",
      },
      {
        kind: "cards",
        title: "Top attractions",
        items: [
          { title: "Tiger Hill", text: "The sunrise everyone comes for, with Kanchenjunga catching the light before the valley does and Everest visible on a clear morning. It means leaving at half past three and joining a queue of vehicles in the dark, and on a good day it is entirely worth it." },
          { title: "The Darjeeling Himalayan Railway", text: "The toy train, running since 1881 and a UNESCO World Heritage Site. The two-hour joy ride from Darjeeling to Ghum, the highest railway station in India, loops through Batasia and its war memorial. Tickets sell out, so book online well before you travel." },
          { title: "The tea gardens", text: "Happy Valley is the closest to town and Makaibari the best known, both open for a walk through the bushes and a tasting at the end. Worth understanding the difference between a first flush and a second before you buy anything." },
          { title: "Padmaja Naidu Zoological Park", text: "The best high-altitude zoo in the country, with red pandas, snow leopards and Himalayan wolves, sharing its gate with the Himalayan Mountaineering Institute founded after Tenzing Norgay came down from Everest. Allow half a day for both." },
          { title: "Chowrasta and the Mall", text: "The flat open square at the top of town where Darjeeling gathers in the evening, with bookshops, the old bakery and a view down the ridge. Observatory Hill and the Mahakal temple are a short walk up from it." },
          { title: "Gangtok", text: "Four hours from Darjeeling and a different state. MG Marg for the evening, Rumtek Monastery for the morning, the Namgyal Institute of Tibetology for an hour that surprises most people, and Tsomgo Lake and Baba Mandir on a day trip up towards the border." },
          { title: "Mirik and Kalimpong", text: "Mirik for the lake and the pine forest on an easy day trip, Kalimpong for Deolo Hill, the Durpin monastery and the flower nurseries that supply half the country's orchids." },
          { title: "Pelling", text: "West Sikkim, and the closest you can comfortably get to Kanchenjunga without walking. The skywalk juts out over the valley, and Pemayangtse and the Rabdentse ruins are nearby. Add two nights if you have the time." },
          { title: "Yumthang and Gurudongmar", text: "The valley of flowers in bloom from late April, and a glacial lake at 5,400 metres that stays frozen most of the year. North Sikkim at its most extraordinary, and the part of the trip that needs the most planning." },
        ],
      },
      {
        kind: "prose",
        title: "Best time to visit Darjeeling",
        body:
          "October to early December gives the clearest mountain views of the year. The monsoon has washed the air, Kanchenjunga is visible on most mornings and the light is extraordinary. Cold at dawn and pleasant by midday. This is the window to choose if seeing the mountain is the reason you are going.\n\nMarch to May is spring, with rhododendrons and magnolias out across the hills and the Yumthang valley in flower from late April. Warmer days, busier hotels, and cloud that rolls in more often, so the mountain plays harder to get. It is also the busiest window for our Darjeeling honeymoon packages, so the heritage hotels and tea bungalows need booking early.\n\nJune to September is the monsoon and the one season to avoid. Rain is heavy and persistent, views disappear for days, and landslides regularly close the Teesta highway between Siliguri and Gangtok. Rates are low for a reason.\n\nJanuary and February are cold and very quiet, with occasional snow in Darjeeling and the clearest skies after a dry spell. Some high routes and passes close. A good choice if you want the hills to yourself and do not mind single-digit temperatures.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Sikkim runs on permits. Indian nationals need them for Tsomgo Lake, Nathu La and everywhere in the north, and they have to be applied for through a registered operator rather than on arrival, which is the main practical reason to book this trip through an agency. Foreign nationals need an Inner Line Permit for Sikkim itself and are not allowed at Nathu La at all. Getting there means flying into Bagdogra or taking the train to New Jalpaiguri, the railhead a short drive from the airport, and then three hours up to Darjeeling or four to five to Gangtok, on roads of continuous hairpins, so carry something for motion sickness. Pack properly warm clothing whatever the month, because Darjeeling is at 2,050 metres and the mornings are cold even in May. North Sikkim goes well above 4,000 metres and needs acclimatisation and a word with your doctor first. Landslides close the Teesta highway during heavy rain, and mobile coverage disappears entirely in the north.",
      },
    ],
    closingTitle: "Ready to plan your Darjeeling holiday?",
    closingText:
      "Whether it is a honeymoon in the tea country, a family trip across Darjeeling and Sikkim, or the long route north to Gurudongmar, we will build it around your dates. Our Darjeeling tour packages from Kerala include the connecting flights or train tickets, all permits, hotels, and one driver who stays with you for the whole route, which is the practical difference between using a Darjeeling travel agency and assembling the trip yourself from four bookings.\n\nCall +91 9562921818 or write to info@alishatravels.in. Alisha Tours & Travels, SBI Building, Ettumanoor, Kottayam 686631, Kerala.",
    faqs: [
      {
        question: "How do we get there from Kerala?",
        answer:
          "Fly to Bagdogra, then roughly three hours by road up to Darjeeling. We build the drive into the transfer rather than leaving you to arrange it at the airport.",
      },
      {
        question: "Can we add Sikkim?",
        answer:
          "Yes. Gangtok and Tsomgo Lake add three nights. Indian nationals need a permit for Tsomgo and Nathu La, which we arrange.",
      },
    ],
    metaTitle: "Darjeeling Tour Packages",
    metaDescription:
      "Darjeeling and Gangtok holiday packages with Tiger Hill sunrise, the toy train, tea estate visits and Sikkim permits, arranged from Kerala.",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    country: "India",
    region: "domestic",
    order: 8,
    priceFrom: 12500,
    heroImage: img("hyderabad"),
    tagline: "Charminar, Golconda and the best biryani in the country",
    intro:
      "Hyderabad is two cities sharing a name. South of the river is the old one, where the Charminar has stood since 1591 and the bangle sellers of Laad Bazaar work the same lanes their families always have. North of it is Hitec City, all glass and flyovers. Between them sit a fort on a granite hill with acoustics nobody has fully explained, a museum built from one man's obsession, and the food that made the city famous.\n\nAt Alisha Tours & Travels, we recommend Hyderabad to anyone who wants a real holiday out of three or four days. Direct flights from Kochi take under two hours, the daily Sabari Express runs straight through from Kottayam for anyone who prefers the train, the distances inside the city are short, and there is enough here to fill the time without rushing. As an IATA-accredited Hyderabad travel agency based in Kottayam, we put together Hyderabad tour packages from Kerala with the flights or train tickets, hotels, a car and the Ramoji tickets in one booking.",
    blocks: [
      {
        kind: "list",
        title: "Why travellers choose Hyderabad",
        points: [
          "A genuine long weekend, with direct flights from Kochi and enough to fill three days",
          "Four hundred years of Qutb Shahi and Nizami history sitting inside a modern tech city",
          "Ramoji Film City, the largest studio complex in the world and a full day on its own",
          "Hyderabad sightseeing packages that cover the Old City, Golconda and the museums inside two days",
          "Pearls, bangles and ikat, bought in the lanes where they have always been sold",
          "Hyderabad holiday packages from two-night city breaks to a week including Warangal",
        ],
      },
      {
        kind: "cards",
        title: "Our most requested Hyderabad packages",
        items: [
          { title: "Hyderabad family tour packages", text: "Four nights, with a full day at Ramoji Film City, a day for the Old City and Golconda, and a third for the zoo, Snow World or the lake depending on the ages involved. Short distances, good hotels and no early starts. The trip we are asked for most often in April and May." },
          { title: "Hyderabad sightseeing packages", text: "Two or three nights, built around the Old City, Golconda Fort, the Salar Jung Museum, the Qutb Shahi Tombs and a great deal of eating. Fly in Friday evening, fly out Sunday night. The most efficient short holiday in the country if you like history and food in equal measure." },
          { title: "Hyderabad honeymoon packages", text: "Three or four nights at a slower pace, with dinner at the Falaknuma Palace, a sunset at Golconda and an afternoon on Hussain Sagar. Booked well ahead, because the palace does not take walk-ins and the good tables go weeks in advance." },
          { title: "Hyderabad with Warangal and Ramappa", text: "Six nights, adding the Kakatiya capital two and a half hours east. The Thousand Pillar Temple, Warangal Fort and the Ramappa Temple, which became a UNESCO World Heritage Site in 2021 and still sees remarkably few visitors." },
        ],
        footnote:
          "All of our Hyderabad tour packages are built around how much time you actually have. Three days is a proper trip here, which is not true of most cities.",
      },
      {
        kind: "cards",
        title: "Top attractions",
        items: [
          { title: "Charminar", text: "The 1591 monument at the centre of the Old City, with four minarets and the lanes of Laad Bazaar running off it. Go in the morning for the building and come back in the evening for the bangle shops, which are a completely different experience after dark." },
          { title: "Golconda Fort", text: "A ruined citadel on a granite hill, famous for acoustics that carry a handclap at the entrance all the way to the summit. The climb takes about an hour. The sound and light show in the evening covers the history properly, so check which language it runs in on your date." },
          { title: "Ramoji Film City", text: "Two thousand acres of film sets, gardens, studios and rides an hour outside the city, and comfortably the biggest attraction for families. It needs a full day, tickets bought in advance and comfortable shoes, and it is worth all three." },
          { title: "Salar Jung Museum", text: "One of the largest collections ever assembled by a single person, from Mughal miniatures to the Veiled Rebecca marble and a nineteenth-century musical clock that draws a crowd every hour. Two hours minimum." },
          { title: "Chowmahalla and Falaknuma palaces", text: "Chowmahalla was the Nizams' seat and is open to visitors. Falaknuma sits on a hill above the city and is now a Taj hotel, so the way in is to book high tea or dinner, which is an experience in itself." },
          { title: "Qutb Shahi Tombs", text: "A necropolis of domed tombs in a garden setting next to Golconda, extensively restored over the last decade and still quiet. The best hour of the Old City circuit and the one most itineraries leave out." },
          { title: "Hussain Sagar and Tank Bund", text: "The lake at the centre of the city with a monolithic Buddha standing on a rock in the middle of it. Boats run out to the statue, and the Necklace Road promenade is where Hyderabad walks in the evening." },
          { title: "Mecca Masjid and Birla Mandir", text: "One of the oldest and largest mosques in India, built with bricks from Mecca, a few steps from Charminar. The white marble Birla Mandir on a hill across the city gives the best view over Hyderabad at sunset." },
          { title: "The food", text: "Biryani at one of the old dum houses, haleem if you are there in Ramzan, Irani chai and Osmania biscuits in a cafe that has not changed in fifty years, and qubani ka meetha to finish. Half the reason people come back." },
        ],
      },
      {
        kind: "prose",
        title: "Best time to visit Hyderabad",
        body:
          "October to February is the season. Days are warm rather than hot, evenings are pleasant, and walking around Golconda or the Old City is comfortable rather than an endurance test. December and January are the best weeks of the year, and also the busiest, so book hotels ahead over the Christmas period.\n\nMarch to May gets seriously hot, over forty degrees in April and May. It is also when the Kerala school holidays fall, which is why a good share of our Hyderabad family tour packages still travel then. It works if the itinerary is planned around it: outdoor sights early, Ramoji and the museums in the middle of the day, and nothing scheduled at three in the afternoon.\n\nJune to September brings the monsoon, which in Hyderabad is moderate rather than relentless. The city turns green, the lakes fill, hotel rates drop and the crowds thin. Rain comes in bursts and rarely costs you a whole day, making this the most underrated window of the year.",
      },
      {
        kind: "prose",
        title: "Good to know before you go",
        body:
          "Hyderabad is compact and three days covers the city comfortably, but Ramoji Film City is an hour out and needs a day entirely to itself, so plan four if it is on the list. The Sabari Express takes about a day from Kottayam to Secunderabad, so a train trip needs a day added at each end, or you can take the train one way and fly the other. The metro is clean, cheap and faster than the traffic on the main corridors. The Old City is best in the morning, before the heat and the crowds around Charminar build. Falaknuma Palace takes bookings only, usually a week or more ahead. If you are buying pearls, which is what Hyderabad is known for, use the established dealers around Basheerbagh and Charminar rather than street stalls, and ask for a certificate. Dress modestly at Mecca Masjid and the temples. Summer heat is serious from March, so if you are travelling then, do the outdoor sights before eleven.",
      },
    ],
    closingTitle: "Ready to plan your Hyderabad holiday?",
    closingText:
      "Whether it is a long weekend of history and food, a family trip built around Ramoji, or a longer route taking in Warangal, we will put it together around your dates. Our Hyderabad tour packages from Kerala cover the flights or train tickets, hotels, cars, guides and entry tickets in one booking, and we have worked as a Hyderabad travel agency long enough to know which hotels put you within reach of the Old City and which leave you stuck on the wrong side of the traffic.\n\nCall +91 9562921818 or write to info@alishatravels.in. Alisha Tours & Travels, SBI Building, Ettumanoor, Kottayam 686631, Kerala.",
    faqs: [
      {
        question: "Is two nights enough?",
        answer:
          "Two nights covers the old city and the fort. Add a third if Ramoji Film City is on the list — it genuinely takes a full day.",
      },
      {
        question: "Can this work as a corporate add-on?",
        answer:
          "Yes, and it often does. We arrange the leisure days around the meeting schedule rather than as a separate booking.",
      },
    ],
    metaTitle: "Hyderabad Tour Packages",
    metaDescription:
      "Hyderabad short-break packages with Charminar, Golconda Fort and Ramoji Film City, flights and hotels, arranged from Kottayam.",
  },
  {
    slug: "golden-triangle",
    name: "Golden Triangle",
    country: "India",
    region: "domestic",
    order: 9,
    priceFrom: 11999,
    heroImage: img("golden-triangle"),
    tagline: "Delhi, Agra and Jaipur on one circuit",
    intro:
      "Delhi, Agra and Jaipur sit close enough together to see properly in four days, which is why the circuit has outlasted every itinerary invented since. It is the trip most families do first in north India, and the one first-time visitors are almost always sold.",
    whyVisit:
      "Three cities, three completely different characters, and no long internal flights between them. Delhi carries the Mughal and colonial history, Agra has the one building everybody has come to see, and Jaipur is where the trip loosens up — forts, bazaars and colour.",
    bestTimeToVisit:
      "October to March. April to June is genuinely punishing on the road between Agra and Jaipur, and the monsoon months make the fort visits harder work than they are worth.",
    topAttractions: [
      { title: "Taj Mahal, Agra", description: "First light, before the coaches arrive. Entry is ticketed separately and we book it ahead." },
      { title: "Red Fort & Akshardham, Delhi", description: "A full day between them, with Akshardham best late in the afternoon." },
      { title: "Hawa Mahal & City Palace, Jaipur", description: "Both in the old city, and walkable between them." },
      { title: "Amber Fort", description: "Go early. The climb is manageable, and a jeep is available for anyone who would rather not." },
    ],
    faqs: [
      {
        question: "How many days does the circuit need?",
        answer:
          "Four days and three nights covers all three cities at a workable pace. Three is possible but leaves Jaipur feeling rushed.",
      },
      {
        question: "Is the Taj Mahal ticket included?",
        answer:
          "Not in the headline package price — monument entry is quoted separately, and we tell you the current rate when we quote.",
      },
    ],
    metaTitle: "Golden Triangle Tour Packages",
    metaDescription:
      "Golden Triangle packages covering Delhi, Agra and Jaipur — the Taj Mahal, Red Fort, Hawa Mahal and Amber Fort, arranged from Kerala.",
  },
  {
    slug: "delhi-manali",
    name: "Delhi & Manali",
    country: "India",
    region: "domestic",
    order: 10,
    priceFrom: 8999,
    heroImage: img("delhi-manali"),
    tagline: "A Himalayan hill station, with the capital either side of it",
    intro:
      "Manali is the easiest Himalayan holiday to reach from Kerala: fly into Delhi, take the overnight Volvo up, and wake in the mountains. Snow for travellers who have never seen it, and a hill station that works for a family and a honeymooning couple equally well.",
    whyVisit:
      "It is the cheapest way to put a Kerala family in the mountains, and the overnight coach both ways keeps two nights out of the hotel bill. Delhi at one end gives the trip a day of sightseeing without a second flight.",
    bestTimeToVisit:
      "March to June for clear weather and comfortable days, and December to February if snow is the point of the trip. Rohtang Pass is closed through winter and its permits are limited even in season.",
    topAttractions: [
      { title: "Solang Valley", description: "Paragliding, ropeway and snow depending on the season." },
      { title: "Hadimba Temple & Old Manali", description: "An easy half-day on foot." },
      { title: "Kullu", description: "The valley, the river and the shawl workshops, usually on the way back." },
      { title: "Delhi's landmarks", description: "Half a day before the flight home — India Gate, the Red Fort and Akshardham." },
    ],
    faqs: [
      {
        question: "How long is the road journey?",
        answer:
          "Delhi to Manali is twelve to fourteen hours by Volvo coach, travelling overnight in both directions. It is comfortable, but tell us if anyone in the party would rather not do it and we will price the flight to Bhuntar instead.",
      },
      {
        question: "Will we see snow?",
        answer:
          "Between December and March, yes, at Solang. Later in the season it means going higher, which depends on Rohtang permits — we will say honestly what your dates are likely to get.",
      },
    ],
    metaTitle: "Delhi & Manali Tour Packages",
    metaDescription:
      "Delhi and Manali holiday packages from Kerala — Solang Valley, Hadimba Temple and Kullu, with overnight Volvo transfers and a day in Delhi.",
  },
];

export default destinations;
