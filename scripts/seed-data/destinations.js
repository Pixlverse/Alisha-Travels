import { DESTINATION_IMAGES } from "./images.js";

/**
 * All 19 destinations from the legacy site's inventory (11 international,
 * 8 domestic).
 *
 * `order` is DEMAND order, not alphabetical — the SEO/nav specification fixes
 * the sequence and the site sorts by this field everywhere. Dubai, Singapore,
 * Thailand and Maldives lead the international list; Kerala leads the domestic
 * one. If the client re-prioritises, change `order` here (or in /admin/) and
 * the nav, the grids and the homepage all follow.
 *
 * On the legacy site all 19 of these were dead tiles: an image and a heading
 * with no link and no page behind them. Nineteen high-intent landing pages
 * existed only as JPEGs. Each one now has intro / why-visit / best-time /
 * attractions / FAQ copy, which is what makes it rank.
 *
 * The prose below is deliberately specific and written to be *replaced* — it
 * is credible placeholder copy, not the client's final marketing voice.
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
    tagline: "Desert, skyline and a four-hour flight from Kochi",
    heroImage: img("dubai"),
    intro:
      "Dubai is the trip most Kerala families take first, and there are good reasons for that. It is four hours from Kochi, the visa is straightforward, and it works equally well for a family with young children, a honeymooning couple and a corporate group of eighty. What changes is the itinerary, not the destination.",
    whyVisit:
      "Everything is close together and everything is reliable. You can be at the top of the Burj Khalifa in the morning, in the desert for a barbecue by evening, and back at the hotel before the children get tired. For first-time international travellers it is a gentle introduction: English is spoken everywhere, Indian food is everywhere, and nothing about the logistics is intimidating.",
    bestTimeToVisit:
      "November to March, when daytime temperatures sit in the mid-twenties and the outdoor attractions are actually pleasant. July and August are cheapest but very hot — worth it only if you plan to stay indoors, and we will tell you so honestly.",
    topAttractions: [
      { title: "Burj Khalifa & Dubai Mall", description: "Book the 124th-floor deck for late afternoon so you get the city in daylight and again lit up." },
      { title: "Desert safari", description: "Dune bashing, camel ride and a barbecue dinner under lights. We use operators who will slow the drive down for older travellers." },
      { title: "Dubai Marina & Palm Jumeirah", description: "A dhow cruise along the Marina is the calmest way to see the skyline." },
      { title: "Global Village", description: "Open November to April only. Worth an evening if your dates fall inside the season." },
      { title: "Museum of the Future", description: "Tickets sell out days ahead — we book these before you arrive." },
    ],
    faqs: [
      { question: "Do we need a visa for Dubai from India?", answer: "Yes. Indian passport holders need a UAE tourist visa, usually issued as a 14, 30 or 60-day e-visa. We handle the application as part of the package — you send us scans, we do the rest." },
      { question: "Is Dubai suitable for young children and elderly parents?", answer: "Very. Distances are short, everything is air-conditioned and most attractions have step-free access. Tell us who is travelling and we will pace the itinerary accordingly, including skipping the dune drive if that suits better." },
      { question: "How many days are enough for Dubai?", answer: "Four nights covers the city comfortably. Five or six lets you add Abu Dhabi and the Ferrari World or Sheikh Zayed Mosque day trip without rushing." },
    ],
    metaTitle: "Dubai Tour Packages from Kerala",
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
    tagline: "The easiest first trip abroad with children",
    heroImage: img("singapore"),
    intro:
      "Singapore is small, spotlessly organised and unusually easy to travel in. The MRT reaches almost everything, nobody haggles, and the whole city is built for people moving through it with luggage and children in tow. It is the destination we recommend most often to families making their first trip outside India.",
    whyVisit:
      "In four days you can do Universal Studios, the Night Safari, Gardens by the Bay and Sentosa without ever feeling hurried. It also pairs naturally with Malaysia — a Singapore–Kuala Lumpur–Langkawi run is one of our most-booked combinations.",
    bestTimeToVisit:
      "Any month works; Singapore is two degrees off the equator and the weather barely changes. February to April is marginally drier. Avoid the last week of December if crowds bother you.",
    topAttractions: [
      { title: "Gardens by the Bay", description: "Go for the 7.45 pm light show at the Supertree Grove — it is free and it is the picture everyone comes home with." },
      { title: "Universal Studios Sentosa", description: "A full day. Buy the express pass if you are travelling in school holidays." },
      { title: "Night Safari", description: "The tram ride plus one walking trail is about right with children." },
      { title: "Marina Bay & Merlion Park", description: "Best walked after dark when the bay is lit." },
      { title: "Jewel Changi", description: "Worth arriving early for on the way out — the indoor waterfall is at the airport itself." },
    ],
    faqs: [
      { question: "Do Indian passport holders need a visa for Singapore?", answer: "Yes, an e-visa is required and must be filed through an authorised agent. We file it for you; approvals typically take three to five working days." },
      { question: "Can we combine Singapore with Malaysia?", answer: "Yes, and most people should. Singapore plus Kuala Lumpur and Langkawi over eight or nine days shares one long-haul flight cost across two countries." },
    ],
    metaTitle: "Singapore Tour Packages from Kerala",
    metaDescription:
      "Singapore holiday packages with visa, flights, hotels, Universal Studios and Sentosa. Family and honeymoon itineraries arranged from our Kottayam office.",
  },
  {
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    region: "international",
    order: 3,
    priceFrom: 38000,
    tagline: "Beaches, islands and the best value in South-East Asia",
    heroImage: img("thailand"),
    intro:
      "Thailand gives you more holiday per rupee than almost anywhere else we sell. Bangkok for the city and the shopping, Pattaya for a short beach add-on, Phuket and Krabi for the islands that people actually remember. Most of our Thailand travellers combine two of the three.",
    whyVisit:
      "Short flights, food you will keep talking about, and beaches that hold up against anywhere in the world at a fraction of the Maldives price. It also runs well as a group departure, which is why it appears most often in our fixed departure calendar.",
    bestTimeToVisit:
      "November to February is the dry, cool season and the best time for the islands. March to May is hot. The southern monsoon runs June to October, though Krabi and Phuket still get plenty of clear days.",
    topAttractions: [
      { title: "Phi Phi Islands", description: "A full-day speedboat trip from Phuket or Krabi. Leave early — by eleven the bays are busy." },
      { title: "James Bond Island, Phang Nga Bay", description: "Better by canoe than by speedboat if you want the limestone caves." },
      { title: "Grand Palace & Wat Arun, Bangkok", description: "Shoulders and knees covered; go at opening time to beat the heat." },
      { title: "Coral Island, Pattaya", description: "The easiest half-day for families who do not want a long boat ride." },
      { title: "Floating and night markets", description: "Damnoen Saduak for the classic photographs, Asiatique for a calmer evening." },
    ],
    faqs: [
      { question: "Is a visa needed for Thailand?", answer: "Indian passport holders can currently enter Thailand visa-free for short tourist stays, but the rules have changed repeatedly in recent years. We confirm the position in writing for your travel dates before you book." },
      { question: "Phuket or Krabi?", answer: "Phuket if you want nightlife, more hotel choice and easier flights. Krabi if you want quieter beaches and better scenery. Five nights lets you do both, which is what our fixed departure does." },
    ],
    metaTitle: "Thailand Tour Packages from Kerala",
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
    tagline: "One island, one resort, nothing to organise",
    heroImage: img("maldives"),
    intro:
      "The Maldives is the one destination where the hotel is the holiday. You fly into Malé, transfer by speedboat or seaplane, and then you stop making decisions for four days. That is the appeal, and it is why it is our most-booked honeymoon.",
    whyVisit:
      "Nothing else delivers privacy this completely this close to home — under four hours from Kochi. Choosing the right island matters far more than choosing the right dates, and that is the part we are useful for: which resorts have a genuine house reef, which transfers add a costly extra night in Malé, which ones are honest about the all-inclusive plan.",
    bestTimeToVisit:
      "November to April is the dry season with the calmest water. May to October is cheaper and still largely sunny, with short heavy showers rather than washed-out days.",
    topAttractions: [
      { title: "House-reef snorkelling", description: "The single thing that separates a good Maldives resort from an expensive one. We only recommend islands where you can swim to the reef." },
      { title: "Sandbank picnic", description: "A couple of hours alone on a strip of sand with nothing on it. Book it for sunrise." },
      { title: "Sunset dolphin cruise", description: "Spinner dolphins are reliable year-round." },
      { title: "Overwater villa stay", description: "Worth splitting the trip — two nights beach villa, two nights overwater, rather than paying for all four." },
    ],
    faqs: [
      { question: "Do we need a visa for the Maldives?", answer: "No. A 30-day tourist visa is issued free on arrival for Indian passport holders, provided you have a confirmed hotel booking and a return ticket." },
      { question: "Seaplane or speedboat transfer?", answer: "Speedboat resorts are cheaper and run at night; seaplanes only fly in daylight, so a late arrival can force an unplanned night in Malé. We factor this into the flight choice rather than leaving you to discover it." },
      { question: "Is all-inclusive worth it?", answer: "On most islands, yes — there is nowhere else to eat and à la carte adds up fast. We will tell you when a half-board plan genuinely works out cheaper." },
    ],
    metaTitle: "Maldives Honeymoon & Holiday Packages",
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
    tagline: "City, highlands and islands in one country",
    heroImage: img("malaysia"),
    intro:
      "Malaysia is three holidays stacked together: Kuala Lumpur for the city, the Cameron Highlands or Genting for the cool air, and Langkawi for the beaches. It is comfortable, inexpensive, and very easy for Indian travellers — halal food is everywhere and English is widely spoken.",
    whyVisit:
      "It is the best-value multi-centre trip in South-East Asia, and it pairs with Singapore across one set of flights. Our Langkawi fixed departure has been running for years for exactly this reason.",
    bestTimeToVisit:
      "December to April on the west coast, which is where Langkawi and Penang are. Kuala Lumpur is fine year-round.",
    topAttractions: [
      { title: "Petronas Twin Towers", description: "Book the skybridge slot in advance; sunset slots go first." },
      { title: "Langkawi SkyCab & Sky Bridge", description: "Go in the morning — the peak clouds over by early afternoon." },
      { title: "Batu Caves", description: "272 steps, so plan around anyone with knee trouble." },
      { title: "Cameron Highlands tea estates", description: "A three-hour drive from KL; better as an overnight than a day trip." },
      { title: "Island hopping, Langkawi", description: "Dayang Bunting and the eagle feeding, half a day." },
    ],
    faqs: [
      { question: "Is a visa required for Malaysia?", answer: "Indian nationals currently have visa-free entry for short stays under the arrangement in place since December 2023. We reconfirm the rule for your travel dates in writing." },
      { question: "Is Langkawi worth adding to Kuala Lumpur?", answer: "Yes, if you have at least seven nights. It is a one-hour internal flight and it changes the trip from a city break into a proper holiday." },
    ],
    metaTitle: "Malaysia Tour Packages from Kerala",
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
    tagline: "Rice terraces, temples and a honeymoon that photographs well",
    heroImage: img("bali"),
    intro:
      "Bali splits naturally into two halves: Ubud inland, where the rice terraces, temples and the quiet are, and the south coast at Seminyak or Nusa Dua for the beach. Trying to do it from one hotel is the most common mistake, and it costs you two hours in traffic every day.",
    whyVisit:
      "It is the most photogenic honeymoon we sell, and it stays affordable because the villas are extraordinary value. It also rewards a slower pace than most tropical destinations — there is genuinely something to see inland.",
    bestTimeToVisit:
      "April to October is the dry season. July and August are busiest. The shoulder months of April, May and September give you the same weather with fewer people.",
    topAttractions: [
      { title: "Tanah Lot temple", description: "Sunset is the point. Arrive an hour early for a place at the rail." },
      { title: "Tegallalang rice terraces", description: "Go before 9 am; the coach groups arrive at ten." },
      { title: "Uluwatu temple & Kecak dance", description: "Cliff-edge sunset performance, booked ahead." },
      { title: "Nusa Penida day trip", description: "A long day and a rough crossing — worth it for Kelingking Beach, but not for anyone prone to seasickness." },
      { title: "Ubud Monkey Forest and art villages", description: "Half a day, easily combined with the terraces." },
    ],
    faqs: [
      { question: "Do we need a visa for Bali?", answer: "Indian passport holders get a visa on arrival, payable in Indonesian rupiah or by card at the airport. We give you the current fee and the exact counter to use." },
      { question: "How many nights should we split between Ubud and the beach?", answer: "Three and three over six nights is the balance most couples are happiest with. Fewer than two nights in Ubud is not worth the transfer." },
    ],
    metaTitle: "Bali Honeymoon & Tour Packages",
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
    tagline: "Ha Long Bay, old towns and the food you did not expect",
    heroImage: img("vietnam"),
    intro:
      "Vietnam has become one of the fastest-growing requests we get, and it deserves it. A Hanoi–Ha Long–Da Nang–Hoi An run gives you a capital city, one of the world's great seascapes, a beach and a lantern-lit old town in about a week.",
    whyVisit:
      "It is still noticeably cheaper than Thailand for the same standard of hotel, the scenery is more varied, and the overnight cruise on Ha Long Bay is a genuinely memorable night rather than a box to tick.",
    bestTimeToVisit:
      "Vietnam is long, so the weather differs north to south. March to April and September to November suit the whole country best. Ha Long Bay is at its clearest in autumn.",
    topAttractions: [
      { title: "Ha Long Bay overnight cruise", description: "One night on board beats a day trip by a distance. Cabins on the upper deck are worth the small supplement." },
      { title: "Hoi An Ancient Town", description: "Go out after dark for the lanterns; tailors here will finish a suit in two days." },
      { title: "Ba Na Hills & the Golden Bridge", description: "The cable car is the longest of its kind. Weekday mornings are quietest." },
      { title: "Cu Chi Tunnels", description: "Half a day from Ho Chi Minh City; not suitable for anyone claustrophobic." },
      { title: "Ninh Binh", description: "The 'Ha Long on land' rowboat trip, and a calmer alternative if the bay is fully booked." },
    ],
    faqs: [
      { question: "Is a visa required for Vietnam?", answer: "Yes. Indian passport holders need an e-visa, which we file for you. It takes roughly three to five working days and is issued for single or multiple entry." },
      { question: "How long do we need?", answer: "Six nights covers the north or the centre properly. Nine to ten nights lets you run Hanoi to Ho Chi Minh City without spending the trip in transit." },
    ],
    metaTitle: "Vietnam Tour Packages from Kerala",
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
    tagline: "Europe's look and feel at South-East Asian prices",
    heroImage: img("azerbaijan"),
    intro:
      "Baku surprises people. It has the old walled city, the Caspian promenade and the Flame Towers in one compact place, and an hour outside it there are mud volcanoes and rock carvings that are thousands of years old. For travellers who want somewhere that feels European without a Schengen visa, this is it.",
    whyVisit:
      "The e-visa is quick, the flight is short, the exchange rate is kind, and in shoulder season you can have the old city almost to yourself. It is also a good short group tour, which is why we run it as a fixed departure.",
    bestTimeToVisit:
      "April to June and September to October. July and August are hot; winter is cold but the city looks striking in it.",
    topAttractions: [
      { title: "Icherisheher (Old City)", description: "The Maiden Tower and Shirvanshahs' Palace inside the walls, easily half a day on foot." },
      { title: "Gobustan rock art & mud volcanoes", description: "A half-day trip south; the mud volcano track needs a 4x4, which we include." },
      { title: "Flame Towers & Baku Boulevard", description: "The towers are best seen lit after dark from the promenade." },
      { title: "Heydar Aliyev Center", description: "Zaha Hadid's building; worth it even if you skip the exhibits." },
      { title: "Gabala or Sheki day trip", description: "Green mountain country, a long but rewarding day out of Baku." },
    ],
    faqs: [
      { question: "How do we get the Azerbaijan visa?", answer: "An ASAN e-visa, filed online. It is usually issued within three working days and we handle the submission." },
      { question: "Is Azerbaijan good for a group tour?", answer: "Very. Distances are short, the sights are close together and hotel standards are consistent, which is why it works well as a set-departure group trip." },
    ],
    metaTitle: "Azerbaijan & Baku Tour Packages",
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
    tagline: "The trip people plan for years — planned properly",
    heroImage: img("europe"),
    intro:
      "Europe is the one where the planning matters most. Schengen appointments, train reservations, city taxes, the difference between a hotel that is technically in Paris and one that is actually walkable to anything — these are the details that decide whether a once-in-a-decade trip works.",
    whyVisit:
      "Because it is usually a milestone. Most of our Europe travellers are going for a landmark anniversary, a graduation or a long-promised family trip, and the itinerary is built around what that particular group actually wants to see rather than a fixed coach route.",
    bestTimeToVisit:
      "May to September for long daylight and open Alpine passes. April and October are cheaper and much quieter. December suits the Christmas markets if you do not mind the cold.",
    topAttractions: [
      { title: "Swiss Alps — Jungfraujoch or Matterhorn", description: "One clear day is worth three cloudy ones; we keep the schedule flexible enough to swap." },
      { title: "Paris", description: "Three nights minimum. The Eiffel Tower summit and the Louvre both need timed tickets booked well ahead." },
      { title: "Venice, Florence & Rome", description: "The classic Italian trio, best done by train rather than coach." },
      { title: "Rhine Valley & Black Forest", description: "The pretty half of Germany, and easy to reach from Frankfurt." },
      { title: "Amsterdam & Keukenhof", description: "The tulip gardens open only from late March to mid-May." },
    ],
    faqs: [
      { question: "How far in advance should we start a Europe trip?", answer: "Four to five months. Schengen appointment slots are the bottleneck, not the flights — in peak season they can be booked out six weeks ahead." },
      { question: "Do you handle the Schengen visa?", answer: "We prepare and check the full file — cover letter, itinerary, hotel and flight confirmations, insurance — and book the appointment. The applicant still has to attend in person for biometrics." },
      { question: "Group tour or private?", answer: "Group departures are considerably cheaper and take the driving off you. A private itinerary is better if you have specific cities in mind or are travelling with small children." },
    ],
    metaTitle: "Europe Tour Packages from Kerala",
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
    tagline: "Slow, high and completely unlike anywhere else",
    heroImage: img("bhutan"),
    intro:
      "Bhutan is deliberately hard to rush. The country limits tourism by design, the valleys are high, and the roads are slow. What you get in return is a Himalayan kingdom that has not been rebuilt for visitors — monasteries still functioning as monasteries, and valleys with nothing in them.",
    whyVisit:
      "It suits travellers who have done the obvious destinations and want somewhere quiet and genuinely different. The walk up to Paro Taktsang is the single most rewarding half-day of walking we send people on.",
    bestTimeToVisit:
      "March to May for rhododendrons and clear mornings, September to November for the best mountain views and the big festivals. Book festival dates months ahead.",
    topAttractions: [
      { title: "Paro Taktsang (Tiger's Nest)", description: "A four to five hour round-trip walk, steep but not technical. Ponies are available for the first half." },
      { title: "Punakha Dzong", description: "The most beautiful building in the country, at the meeting of two rivers." },
      { title: "Dochula Pass", description: "108 chortens and, on a clear morning, the eastern Himalaya laid out behind them." },
      { title: "Thimphu", description: "The only capital in the world with no traffic lights; the weekend market is worth timing for." },
    ],
    faqs: [
      { question: "Do Indians need a visa for Bhutan?", answer: "Indian nationals need a permit rather than a visa, plus the Sustainable Development Fee, which is charged per person per night. We arrange both and quote the SDF separately so you can see it." },
      { question: "Is it difficult physically?", answer: "The altitude in Paro and Thimphu is around 2,300 m, which most people handle fine. The Tiger's Nest walk is the only demanding part, and it is optional." },
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
    tagline: "Himalaya, temples and Pokhara — no visa needed",
    heroImage: img("nepal"),
    intro:
      "Nepal is the cheapest way for an Indian traveller to stand in front of the Himalaya. No visa, a short flight, and within a day of landing you can be watching sunrise on the Annapurnas from a lakeside town.",
    whyVisit:
      "It works for three quite different trips — a Kathmandu temple circuit, a relaxed Pokhara break, or a trekking holiday — and often all three in the same ten days. It is also one of the few destinations where the budget end is genuinely good.",
    bestTimeToVisit:
      "October and November for the clearest mountain views, March and April for the rhododendrons. The monsoon from June to September clouds the peaks over.",
    topAttractions: [
      { title: "Pokhara & Phewa Lake", description: "Sarangkot at dawn for the Annapurna sunrise, the lake in the afternoon." },
      { title: "Pashupatinath & Boudhanath", description: "Kathmandu's two great religious sites, best in the early evening." },
      { title: "Everest mountain flight", description: "An hour in the air, everyone gets a window seat. Weather-dependent, so schedule it early in the trip with a spare day." },
      { title: "Chitwan National Park", description: "Rhino and elephant, two nights, a good break between the two cities." },
      { title: "Nagarkot", description: "The easiest Himalayan sunrise from Kathmandu, without any trekking." },
    ],
    faqs: [
      { question: "Do Indians need a visa for Nepal?", answer: "No. Indian citizens travel visa-free, but you must carry a valid passport or voter ID — we will tell you exactly which documents to bring for each traveller." },
      { question: "Can we do a short trek?", answer: "Yes. Ghorepani–Poon Hill is four to five days and needs no technical experience. We arrange guides, porters and permits." },
    ],
    metaTitle: "Nepal Tour Packages from Kerala",
    metaDescription:
      "Nepal holiday packages covering Kathmandu, Pokhara, Chitwan and Nagarkot, with flights, hotels, mountain flights and short treks.",
  },

  /* ------------------------------- DOMESTIC ------------------------------ */
  {
    slug: "kerala",
    name: "Kerala",
    country: "India",
    region: "domestic",
    order: 1,
    priceFrom: 14500,
    tagline: "Backwaters, hill stations and the place we know best",
    heroImage: img("kerala"),
    intro:
      "Kerala is where we are based, and it is the destination we are most useful on. Not because the itinerary is complicated — it isn't — but because we know which backwater operator actually maintains their boats, which Thekkady property is worth the extra hour on the road, and which hill resort looks better in photographs than in person.",
    whyVisit:
      "Munnar, Thekkady, Alleppey and Kovalam sit within a comfortable week's driving, and the change of scene between them is total: tea hills, spice forest, backwaters, coast. It suits families, honeymooners and returning NRIs bringing relatives who have never seen it.",
    bestTimeToVisit:
      "September to March. The monsoon from June to August is beautiful and cheap but limits boating and hill visibility — it also happens to be the right time for Ayurvedic treatment, which is a real reason to come.",
    topAttractions: [
      { title: "Munnar tea country", description: "Two nights. Sunrise at Top Station and a tea factory visit are the two things worth fixing in the plan." },
      { title: "Alleppey backwaters", description: "An overnight houseboat, or a day cruise if anyone is unsure about sleeping on the water." },
      { title: "Thekkady & Periyar", description: "Boat safari at first light, spice plantation walk afterwards." },
      { title: "Kovalam & Varkala", description: "The two coastal ends of the state; Varkala's cliff is the quieter of the two." },
      { title: "Fort Kochi", description: "Chinese fishing nets, the Jewish quarter and a Kathakali performance in one evening." },
    ],
    faqs: [
      { question: "How many days do we need for Kerala?", answer: "Six nights covers Munnar, Thekkady, Alleppey and Kochi without a single rushed drive. Four is possible if you drop one hill station." },
      { question: "Is an overnight houseboat worth it?", answer: "Yes, provided it is a well-maintained boat with air conditioning at night. There is a wide quality range on the same canal and the price difference is smaller than you would expect." },
      { question: "Can you arrange Ayurvedic treatment?", answer: "Yes, at government-classified centres rather than hotel spas. Genuine treatment courses run seven to fourteen days and we will say so rather than sell you a one-hour massage as therapy." },
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
    tagline: "Mughal gardens, Gulmarg and Pahalgam",
    heroImage: img("kashmir-srinagar"),
    intro:
      "Kashmir rewards a slower itinerary than most operators sell. Gulmarg deserves a full day rather than a stop on the way to somewhere else, and if you are travelling with a small child, Nigeen Lake is a calmer houseboat base than Dal.",
    whyVisit:
      "Few places in India change this completely with the season — tulips in April, meadows in summer, snow from December. And the shikara and houseboat experience has no real equivalent anywhere else in the country.",
    bestTimeToVisit:
      "April to October for gardens, meadows and the tulip festival in early April. December to February for snow in Gulmarg, with the caveat that road closures do happen.",
    topAttractions: [
      { title: "Dal & Nigeen Lakes", description: "A dawn shikara ride to the floating vegetable market is the one people remember." },
      { title: "Gulmarg gondola", description: "Both phases if the weather allows. Book the second phase early; it closes on wind." },
      { title: "Pahalgam & Betaab Valley", description: "An overnight is better than a day trip from Srinagar." },
      { title: "Mughal Gardens", description: "Nishat and Shalimar, best in late afternoon light." },
      { title: "Sonamarg", description: "A long day trip; the Thajiwas glacier walk is optional and pony-assisted." },
    ],
    faqs: [
      { question: "Is Kashmir safe to travel in?", answer: "Tourist areas have been operating normally for several years and we send families there regularly. We monitor advisories for your specific dates and will tell you plainly if we would not go ourselves." },
      { question: "Houseboat or hotel?", answer: "Both, ideally — two nights on a houseboat for the experience and the rest in a hotel for the facilities. Houseboats vary enormously in standard, which is where our recommendation actually matters." },
    ],
    metaTitle: "Kashmir & Srinagar Tour Packages",
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
    tagline: "High-altitude desert, and an itinerary built around acclimatising",
    heroImage: img("ladakh"),
    intro:
      "Ladakh is the one domestic destination where the itinerary has to be built around your body rather than the sights. Leh sits at 3,500 m and Khardung La is well over 5,000 m. Any plan that sends you up on day one is a plan that will ruin your trip.",
    whyVisit:
      "There is nothing else like it in India — Pangong and Nubra, monasteries on ridgelines, and roads that are the reason many people come at all. It is also the domestic trip our group departures fill fastest.",
    bestTimeToVisit:
      "June to September, when the passes are reliably open. May and early October are possible but weather-dependent. The roads in from Manali and Srinagar close in winter.",
    topAttractions: [
      { title: "Pangong Tso", description: "Overnight at the lake rather than a day return — the drive is too long to do twice in a day." },
      { title: "Nubra Valley & Diskit", description: "Over Khardung La, with the sand dunes and double-humped camels at Hunder." },
      { title: "Thiksey & Hemis monasteries", description: "Thiksey's morning prayers are worth the early start." },
      { title: "Magnetic Hill & Sangam", description: "Where the Indus and Zanskar meet — an easy half-day from Leh." },
      { title: "Tso Moriri", description: "Quieter than Pangong and higher; only for travellers who have acclimatised well." },
    ],
    faqs: [
      { question: "How long do we need to acclimatise?", answer: "Two full nights in Leh with no strenuous activity before going any higher. Every itinerary we build does this, even when it means one fewer sight." },
      { question: "Do we need permits?", answer: "Yes, Inner Line Permits for Nubra, Pangong and Tso Moriri. We arrange them; you will need passport-size photographs and ID copies." },
      { question: "Is it suitable for older travellers or children?", answer: "It depends on the individual, and on heart and lung health in particular. We ask openly about this before booking rather than after." },
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
    tagline: "India's best beaches, and the ferries that decide your itinerary",
    heroImage: img("andaman"),
    intro:
      "Radhanagar on Havelock is regularly called the best beach in Asia and it earns it. What most people underestimate is the ferry schedule — inter-island crossings are limited, they sell out, and one missed booking can cost you a whole day of a short trip.",
    whyVisit:
      "Clear water and genuine coral within India, no visa, no currency exchange, and diving and snorkelling that stand up internationally. For a beach holiday it is the strongest domestic option we have.",
    bestTimeToVisit:
      "October to May. The monsoon from June to September brings rough seas and ferry cancellations, which matters more here than the rain does.",
    topAttractions: [
      { title: "Radhanagar Beach, Havelock", description: "Go for sunset. The swimming is best at the northern end." },
      { title: "Elephant Beach snorkelling", description: "Reached by boat from Havelock; go on the first departure for the clearest water." },
      { title: "Cellular Jail & light and sound show", description: "In Port Blair, best on your first or last evening." },
      { title: "Neil Island (Shaheed Dweep)", description: "Quieter than Havelock and worth two nights if you have the days." },
      { title: "Scuba diving", description: "Try-dives are available for complete beginners; certified courses need three to four days." },
    ],
    faqs: [
      { question: "Do we need a permit for the Andamans?", answer: "Indian nationals do not need a permit for the main islands. Foreign nationals are issued one on arrival. Some tribal reserve areas are closed to all visitors." },
      { question: "How many days are enough?", answer: "Five nights is the practical minimum — Port Blair either side of two or three nights on Havelock. Anything shorter and the ferries eat the trip." },
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
    tagline: "Beaches, old churches and spice gardens",
    heroImage: img("goa"),
    intro:
      "Almost every disappointing Goa holiday comes from booking the wrong half of the state. North Goa is busy, cheap and lively; South Goa is quiet, greener and more expensive. Families and couples usually want the south and are usually sold the north.",
    whyVisit:
      "It is the shortest, cheapest proper holiday available from Kerala, it works over a long weekend, and the Portuguese-era churches and Old Goa quarter give it more to do than the beaches alone.",
    bestTimeToVisit:
      "November to February for the best weather and the season crowd. March to May is hot but much cheaper. The monsoon is green, dramatic and largely empty, with most shacks closed.",
    topAttractions: [
      { title: "Palolem & Agonda, South Goa", description: "The two calmest beaches in the state." },
      { title: "Baga, Calangute & Anjuna", description: "The north's water sports, markets and nightlife." },
      { title: "Old Goa churches", description: "Basilica of Bom Jesus and Se Cathedral, half a morning." },
      { title: "Dudhsagar Falls", description: "A jeep safari from Mollem; spectacular right after the monsoon." },
      { title: "Mandovi river cruise", description: "An easy sunset hour, good with a mixed-age group." },
    ],
    faqs: [
      { question: "North Goa or South Goa?", answer: "South for couples, families and anyone wanting quiet. North for groups of friends, markets and nightlife. If you want both, stay south and drive north for a day rather than the other way round." },
      { question: "Is a long weekend enough?", answer: "Three nights works and is the most common booking we make. Four lets you add Dudhsagar or Old Goa without giving up a beach day." },
    ],
    metaTitle: "Goa Tour Packages from Kerala",
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
    tagline: "Forts, palaces and desert, at a workable pace",
    heroImage: img("rajasthan"),
    intro:
      "Rajasthan is a driving holiday, and the difference between a good one and an exhausting one is how many cities you attempt. Jaipur, Jodhpur, Udaipur and Jaisalmer in seven days looks fine on paper and means five hours in a car most days.",
    whyVisit:
      "The forts and palaces are on a scale nothing else in India matches, the heritage hotels are genuinely old buildings rather than themed ones, and a night in the dunes outside Jaisalmer is worth planning the whole trip around.",
    bestTimeToVisit:
      "October to March. December and January are cold at night in the desert, which is pleasant but needs packing for. April to June is very hot.",
    topAttractions: [
      { title: "Amber Fort & Hawa Mahal, Jaipur", description: "Amber at opening time, before both the heat and the coaches." },
      { title: "Mehrangarh Fort, Jodhpur", description: "The best-preserved fort in the state and the finest audio guide in India." },
      { title: "Lake Pichola & City Palace, Udaipur", description: "Sunset boat first, palace the next morning." },
      { title: "Jaisalmer Fort & Sam dunes", description: "A living fort, and a desert camp night outside town." },
      { title: "Ranthambore", description: "Two safaris minimum if tiger sightings matter to you." },
    ],
    faqs: [
      { question: "How many cities should we include?", answer: "Three in seven nights, four in ten. We would rather cut a city than have you spend the holiday in the car, and we will say so when an itinerary is over-packed." },
      { question: "Are heritage hotels worth the extra?", answer: "In Rajasthan, more than anywhere else in India — the buildings are the sightseeing. We will point out which ones are genuinely historic and which are recent construction in an old style." },
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
    tagline: "Kanchenjunga at sunrise and the toy train",
    heroImage: img("darjeeling"),
    intro:
      "Darjeeling is a small hill station with two things nowhere else has: the view of Kanchenjunga from Tiger Hill at dawn, and a working narrow-gauge railway that has been running since 1881. Both need booking ahead, and both are why people come.",
    whyVisit:
      "It combines easily with Gangtok and Sikkim into a single week, the tea estates are genuinely working ones you can walk through, and it is comfortable at a time of year when most of India is not.",
    bestTimeToVisit:
      "March to May and October to November. The mountain views are most reliable in autumn. The monsoon brings landslides and closed roads, and should be avoided.",
    topAttractions: [
      { title: "Tiger Hill sunrise", description: "A 4 am start. Book the vehicle the day before; the road jams in season." },
      { title: "Darjeeling Himalayan Railway", description: "The Ghum joyride is the practical option — the full run takes most of a day." },
      { title: "Happy Valley Tea Estate", description: "A working estate; the plucking season runs March to November." },
      { title: "Batasia Loop", description: "Where the railway spirals; good views on a clear morning." },
      { title: "Gangtok add-on", description: "Four hours by road, and it turns a short break into a proper trip." },
    ],
    faqs: [
      { question: "How do we get there from Kerala?", answer: "Fly to Bagdogra, then roughly three hours by road up to Darjeeling. We build the drive into the transfer rather than leaving you to arrange it at the airport." },
      { question: "Can we add Sikkim?", answer: "Yes. Gangtok and Tsomgo Lake add three nights. Indian nationals need a permit for Tsomgo and Nathu La, which we arrange." },
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
    tagline: "A short-break city with real history and better food",
    heroImage: img("hyderabad"),
    intro:
      "Hyderabad is an easy weekend from Kerala and an unusually good one with children — Ramoji Film City alone fills a day, and the Charminar quarter and Golconda Fort give the trip a spine beyond the shopping and the biryani.",
    whyVisit:
      "It is close, cheap, and the sightseeing is compact. It also works well as a two or three-night add-on either side of a business trip, which is how a good share of our corporate travellers use it.",
    bestTimeToVisit:
      "October to February. March to May is hot, though most of the sightseeing is manageable in the mornings.",
    topAttractions: [
      { title: "Charminar & Laad Bazaar", description: "Late afternoon, then dinner nearby." },
      { title: "Golconda Fort", description: "The evening light and sound show is the best way to see it." },
      { title: "Ramoji Film City", description: "A full day; buy the guided-tour package rather than the entry-only ticket." },
      { title: "Chowmahalla Palace & Salar Jung Museum", description: "Half a day between them, and both are indoors." },
      { title: "Hussain Sagar & Necklace Road", description: "An easy evening walk with the Buddha statue on the lake." },
    ],
    faqs: [
      { question: "Is two nights enough?", answer: "Two nights covers the old city and the fort. Add a third if Ramoji Film City is on the list — it genuinely takes a full day." },
      { question: "Can this work as a corporate add-on?", answer: "Yes, and it often does. We arrange the leisure days around the meeting schedule rather than as a separate booking." },
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
    tagline: "Delhi, Agra and Jaipur on one circuit",
    heroImage: img("golden-triangle"),
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
      { question: "How many days does the circuit need?", answer: "Four days and three nights covers all three cities at a workable pace. Three is possible but leaves Jaipur feeling rushed." },
      { question: "Is the Taj Mahal ticket included?", answer: "Not in the headline package price — monument entry is quoted separately, and we tell you the current rate when we quote." },
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
    tagline: "A Himalayan hill station, with the capital either side of it",
    heroImage: img("delhi-manali"),
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
      { question: "How long is the road journey?", answer: "Delhi to Manali is twelve to fourteen hours by Volvo coach, travelling overnight in both directions. It is comfortable, but tell us if anyone in the party would rather not do it and we will price the flight to Bhuntar instead." },
      { question: "Will we see snow?", answer: "Between December and March, yes, at Solang. Later in the season it means going higher, which depends on Rohtang permits — we will say honestly what your dates are likely to get." },
    ],
    metaTitle: "Delhi & Manali Tour Packages",
    metaDescription:
      "Delhi and Manali holiday packages from Kerala — Solang Valley, Hadimba Temple and Kullu, with overnight Volvo transfers and a day in Delhi.",
  },
];

export default destinations;
