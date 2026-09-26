import { DESTINATION_IMAGES, EXTRA_IMAGES } from "./images.js";

/**
 * Package inventory: the client's own confirmed travel proposals.
 *
 * Every entry below is transcribed from one of the agency's PDF proposals
 * (the file name is in the comment above it), so the site launches with the
 * trips the client actually sells and the admin does not have to key them in
 * one by one. Where a proposal predates the current template and has no "Trip
 * at a Glance" paragraph or cover highlight line, the summary and highlights
 * were written from its itinerary; everything else is as the PDF has it.
 *
 * Only proposals for a destination that already exists in destinations.js are
 * here. There are no fixed departures: none of the proposals is one, and the
 * dated departures are added through /admin/ as they are scheduled.
 *
 * `category` is the occasion shelf the trip sits on: two adults on a leisure
 * trip → honeymoon; children, or three to six adults → family; seven or more
 * → group-tours; a solo trip → customized.
 *
 * Payment options, booking and cancellation policy, guidelines and terms are
 * set only where a proposal differs from the standard ones in
 * lib/content/package-policies.js; left empty, the page falls back to those.
 *
 * `destinationSlug` is resolved to a Destination _id by scripts/seed.js.
 *
 * TO EXTEND: copy any entry, change the slug (it must be unique), and re-run
 * `npm run seed`. Existing documents are matched and updated by slug, so
 * re-running is safe and will not create duplicates.
 */

const d = (key) => ({ ...DESTINATION_IMAGES[key] });
const x = (key) => ({ ...EXTRA_IMAGES[key] });

/** Shown in the homepage "Exclusive Deals" carousel. */
const FEATURED = [
  "fascinating-dubai-5d4n",
  "charm-of-malaysia-4d3n",
  "fascinating-vietnam-4d3n",
  "charm-of-pattaya-bangkok-4d3n",
  "fascinating-bali-5d4n",
  "magical-bhutan-a-himalayan-adventure-6d5n",
  "charm-of-andaman-5d4n",
  "fascinating-delhi-manali-5d4n",
  "charm-of-rajasthan-5d4n",
  "goa-3d2n",
];

const entries = [
  // 002395 - 6D 5N - LEH, LADAKH - AUG 05 - 3 ADULTS.pdf
  {
    slug: "charm-of-leh-ladakh-6d5n",
    title: "Charm of Leh - Ladakh",
    summary:
      "A full day of rest in Leh to acclimatise, a day of local sightseeing by scooty, then Khardung La to the Nubra Valley, the Shyok river road to Pangong, and Hemis and Thiksey monasteries on the way back to Leh.",
    priceNote:
      "Per adult, based on 3 adults sharing 1 room with 1 extra bed; excludes airfare. Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply.",
    destinationSlug: "ladakh",
    category: "family",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 29500,
    heroImage: d("ladakh"),
    highlights: [
      "Full day of acclimatisation in Leh",
      "Shanti Stupa, Leh Palace and Magnetic Hill",
      "Khardung La to the Nubra Valley",
      "Overnight at Pangong",
      "Hemis and Thiksey Monasteries",
    ],
    inclusions: [
      "Leh Airport to hotel transfer (pickup & drop) by non-AC vehicle",
      "Welcome drink (non-alcoholic) on arrival at hotel",
      "Accommodation as per the selected category of package",
      "Daily breakfast & dinner at hotel/camp on buffet system (non-veg served in Leh area only)",
      "1 room with 1 extra bed",
      "Inner line permit",
      "One oxygen cylinder for Nubra and Pangong",
      "1 non-AC Ertiga",
      "All toll tax, parking & driver expenses",
      "GST",
    ],
    exclusions: [
      "Airfare to and from Leh/Srinagar/Delhi",
      "Monument & museum entrance fees to be paid directly",
      "Any kind of personal expenses, extra meals, starters & drinks (alcoholic, mineral, etc.)",
      "Any kind of optional tours",
      "Heating charges at hotel/camps",
      "Tips, insurance, laundry, phone calls, guide fee & camera fee",
      "Services of vehicle on leisure days and after finishing the sightseeing tour",
      "Adventure activity costs (pony ride, camel safari, rafting, paragliding etc.)",
      "Medical & travel insurance other than included above",
      "Additional costs due to flight cancellations, road blocks, natural calamities and nature's fury",
      "Anything not mentioned under the category \"Package Inclusions\"",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Leh",
        description:
          "Arrival Leh in the morning and transfer to the hotel. Full day of rest for acclimatization to the high altitude of Leh (11,500 ft / 3,500 mtrs).",
        stay: "Overnight, Leh",
      },
      {
        day: 2,
        title: "Local Sightseeing (by own in scooty)",
        description:
          "Breakfast at hotel. Visit Kali Mata Mandir, Hall of Fame, Pathar Sahib Gurdwara, Magnetic Hill and Sangam Point, Shanti Stupa, Leh Palace and market. Dinner and overnight at the hotel.",
        meals: "Breakfast, dinner",
        stay: "Overnight, Leh",
      },
      {
        day: 3,
        title: "Leh - Khardung La - Nubra Valley (125 km, 5 to 6 hrs)",
        description:
          "Breakfast at hotel. Proceed to Nubra Valley, driving across Khardung La (alt: 18,380 ft). After descending from the pass, drive on for sightseeing of Diskit area. Later check into a fixed camp in the same area or drive across to Diskit / Hunder for dinner. Overnight in a fixed camp or hotel.",
        meals: "Breakfast, dinner",
        stay: "Overnight, Nubra",
      },
      {
        day: 4,
        title: "Nubra Valley - Pangong (150 km, 5 to 6 hrs)",
        description:
          "Breakfast at hotel. Drive to Pangong via the Shyok river, reaching Pangong by evening. Enjoy the beauty of the lake while appreciating the changing colors of this fascinating high altitude water body. Overnight stay at Pangong.",
        meals: "Breakfast, dinner",
        stay: "Overnight, Pangong",
      },
      {
        day: 5,
        title: "Pangong - Leh (150 km, 5 to 6 hrs)",
        description:
          "Breakfast at hotel. Leave Pangong / Tangtse and retrace the Leh route across Chang La. Upon reaching Karu, drive across the Indus and visit the famous Hemis Monastery, biggest monastery of Ladakh. Later drive on to Leh, en route visiting the picturesque Thiksey Monastery. Arrive hotel in Leh for dinner and overnight.",
        meals: "Breakfast, dinner",
        stay: "Overnight, Leh",
      },
      {
        day: 6,
        title: "Airport Drop",
        description:
          "Breakfast at hotel. Transfer to Leh airport taking the flight back home. Tour ends with sweet memories of Leh - Ladakh.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "002395",
    travelWindow: "August 2025",
    travellers: "3 adults",
    rooms: 2,
    stays: [
      { destination: "Leh", hotel: "Hotel La Mount or similar", nights: 3, meals: "Breakfast" },
      { destination: "Nubra", hotel: "Nubra Lotus Eco Resort or similar", nights: 1, meals: "Breakfast" },
      { destination: "Pangong", hotel: "Pangong Heights or similar", nights: 1, meals: "Breakfast" },
    ],
    stayNote:
      "Hotels shown are Option 1 (3 star). Option 2 (4 star): Hotel Barath Ladakh / Hotel The Druk Ladakh, Misty Hills Cabins Nubra Valley, Pangong Wood Pangong Lake. Option 3 (5 star): Hotel The Zen / Hotel Chospa Ladakh, Organic Retreat Nubra Valley, Water Mark Resort / Blue Desert Pangong Lake - all or similar.",
    priceRows: [
      { label: "Per adult - Option 1 (3 star)", amount: 29500 },
      { label: "Per adult - Option 2 (4 star)", amount: 33700 },
      { label: "Per adult - Option 3 (5 star)", amount: 69500 },
    ],
    metaTitle: "Charm of Leh - Ladakh - 6 Days / 5 Nights",
    metaDescription:
      "Ladakh in six days from ₹29,500 per adult - an acclimatisation day in Leh, Khardung La, the Nubra Valley, Pangong and the Hemis and Thiksey monasteries. Land only.",
  },
  // 002597 - 6D 5N - GOA, HAMPI - NOV - 7 ADULTS.pdf
  {
    slug: "goa-hampi-6d5n",
    title: "Goa, Hampi",
    summary:
      "Three nights in Goa for the North and South Goa beaches, forts and churches, then the train to Hampi for the Virupaksha and Vijaya Vitthala temples.",
    priceNote:
      "Land cost per adult; excludes train fare. 1 adult free of cost. Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply.",
    destinationSlug: "goa",
    category: "group-tours",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 15900,
    heroImage: d("goa"),
    highlights: [
      "North Goa beaches and Aguada Fort",
      "Old Goa churches and a spice garden",
      "Train from Madgaon to Hampi",
      "Virupaksha and Vijaya Vitthala Temples",
      "Hemakuta Hill and the Elephant Stables",
    ],
    inclusions: [
      "05 nights' accommodation in Goa and Hampi hotels",
      "Daily breakfast (except on arrival day)",
      "Railway station pick up & drop",
      "Sightseeing as per the above mentioned itinerary",
      "All entry tickets as per the itinerary",
      "All tours and transfers on PVT basis",
      "GST",
    ],
    exclusions: [
      "Round trip train fare",
      "Early check-in at hotel, late check-out at hotel",
      "Check-in time in hotel is after 1400/1500 hours and check-out is before 1100/1200 hours",
      "Water sports activity",
      "Other meals not mentioned, laundry, telephone calls, incidentals",
      "Any extra excursion or sightseeing apart from suggested tour itinerary",
      "Any personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Madgaon",
        description:
          "Arrival at Madgaon Railway Station. Pick up and proceed to hotel. Hotel check-in as per hotel policy. Free for leisure or water activities.",
        stay: "Overnight, Goa",
      },
      {
        day: 2,
        title: "North Goa Sightseeing",
        description:
          "Breakfast at hotel. North Goa sightseeing: Aguada Fort, Sinquerim Beach, Candolim Beach, Calangute Beach, Baga Beach, Anjuna Beach.",
        meals: "Breakfast",
        stay: "Overnight, Goa",
      },
      {
        day: 3,
        title: "South Goa Sightseeing",
        description:
          "Breakfast at hotel. South Goa sightseeing: Old Goa church, Mangeshi Temple, Balaji Temple, Spice Garden, Panjim Church, Miramar Beach.",
        meals: "Breakfast",
        stay: "Overnight, Goa",
      },
      {
        day: 4,
        title: "Goa - Hampi by Train",
        description:
          "Breakfast at hotel. Madgaon Railway Station drop and train to Hampi. Hampi railway station arrival & pick up. 2 hours sightseeing (if time permits). Hotel check-in.",
        meals: "Breakfast",
        stay: "Overnight, Hampi",
      },
      {
        day: 5,
        title: "Hampi Sightseeing",
        description:
          "Breakfast at hotel. Hampi sightseeing: Virupaksha Temple, Vijaya Vitthala Temple, ascend Hemakuta Hill, Elephant Stables. Drop at hotel.",
        meals: "Breakfast",
        stay: "Overnight, Hampi",
      },
      {
        day: 6,
        title: "Departure",
        description:
          "Breakfast at hotel. Hampi sightseeing (depends on train timings). Drop at railway station for departure.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "002597",
    travelWindow: "November 2025",
    travellers: "7 adults",
    rooms: 3,
    stays: [
      { destination: "Goa", hotel: "Hotel W S Royal Village or similar", nights: 3, meals: "Breakfast" },
      { destination: "Hampi", hotel: "Hotel Kishkinda Heritage or similar", nights: 2, meals: "Breakfast" },
    ],
    priceRows: [{ label: "Per adult", amount: 15900 }],
    metaTitle: "Goa, Hampi - 6 Days / 5 Nights",
    metaDescription:
      "Goa and Hampi in six days from ₹15,900 per adult - North and South Goa sightseeing, then the train to Hampi's Virupaksha and Vijaya Vitthala temples. Land only.",
  },
  // 002825 - 4N 5D - BHUTAN- SEP 12- 03 PAX.pdf
  {
    slug: "bhutan-5d4n",
    title: "Bhutan",
    summary:
      "Two nights in Thimphu for the Buddha Dordenma, the Memorial Chorten and the Takin Preserve, then over the Dochula Pass to Paro and the hike to the Tiger's Nest.",
    priceNote:
      "Land cost per adult with 4 star hotels, based on 3 adults sharing 1 double room with 1 extra mattress; flight fare quoted separately. Above rate is valid for Indian nationals only.",
    destinationSlug: "bhutan",
    category: "family",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 32000,
    heroImage: d("bhutan"),
    highlights: [
      "Buddha Dordenma Statue, Thimphu",
      "National Memorial Chorten and Folk Heritage Museum",
      "Dochula Pass",
      "Ta Dzong and the National Museum, Paro",
      "Hike to Taktsang Monastery (Tiger's Nest)",
    ],
    inclusions: [
      "04 nights' accommodation in hotel",
      "No of pax: 03 adults",
      "No of room: 01 double room + 01 extra mattress",
      "Meal plan: MAPAI (04 breakfasts + 04 dinners)",
      "Vehicle: all transfer and sightseeing by Creta / Tucson / Santa Fe / similar",
      "With all transfer driver allowances, parking, toll taxes, road permit, fuel",
      "Professional English speaking tour guide within Bhutan",
      "Above rate is valid for Indian nationals only",
      "01 bottle mineral water per head per day",
      "01 tourist SIM card on arrival",
    ],
    exclusions: [
      "Round-trip airfare",
      "Early check-in at hotel, late check-out at hotel",
      "Other meals not mentioned, laundry, telephone calls, incidentals",
      "Any extra excursion or sightseeing apart from suggested tour itinerary",
      "Any personal expenses, room service and special orders. Alcoholic and non-alcoholic beverages",
      "Insurance",
      "Costs for additional hotel nights or extended stays before or after the tour",
      "Prices are subject to change based on availability and seasonality",
      "Additional fees may apply for amenities or services",
      "Discounts may be available for extended stays or group bookings",
      "For groups larger than 20 guests, please contact for customized pricing",
      "Bhutan Government tax (Sustainable Development Fee 1,200/- per person / per night) (only INR cash, fresh 500/- notes acceptable)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Paro Airport - Thimphu",
        description:
          "Morning: land at Paro Airport and complete immigration formalities for the Bhutan entry permit. Meet our representative and transfer to Thimphu (55 km / 2 hrs). Visit temples, Dzong, chortens, museums, handicraft stores, nunneries and parks, then check into your hotel.",
        meals: "Dinner",
        stay: "Overnight, Thimphu",
      },
      {
        day: 2,
        title: "Thimphu Local Sightseeing",
        description:
          "After breakfast, visit the towering Buddha Dordenma Statue overlooking the valley. Visit the National Memorial Chorten, built in the memory of the Third King of Bhutan, and the Folk Heritage Museum. Afternoon visit Sangaygang View Point, Changangkha Monastery and the Takin Preserve Centre. Overnight stay at hotel.",
        meals: "Breakfast, dinner",
        stay: "Overnight, Thimphu",
      },
      {
        day: 3,
        title: "Thimphu - Paro via Dochula Pass",
        description:
          "After breakfast, drive to Paro, crossing the Dochula Pass (3,100 m). Hotel check-in and, after freshening up, visit Ta Dzong and the National Museum. Overnight stay at hotel.",
        meals: "Breakfast, dinner",
        stay: "Overnight, Paro",
      },
      {
        day: 4,
        title: "Paro Sightseeing (Tiger's Nest Trek)",
        description:
          "Hike to Taktsang Monastery (Tiger's Nest) (4–5 hours round trip). Meditation & blessing at a monastery, Paro Taktsang. Overnight stay at hotel.",
        meals: "Breakfast, dinner",
        stay: "Overnight, Paro",
      },
      {
        day: 5,
        title: "Paro Airport Departure",
        description: "Morning: drive to Paro Airport.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "002825",
    travelWindow: "September 2025",
    travellers: "3 adults",
    rooms: 1,
    stays: [
      { destination: "Thimphu", hotel: "Hotel Tashi Yid Wond Grand / Hotel Asura or similar", nights: 2, meals: "Breakfast & dinner" },
      { destination: "Paro", hotel: "Hotel Thim Dorji or similar", nights: 2, meals: "Breakfast & dinner" },
    ],
    stayNote:
      "Hotels shown are the 4 star option. 5 star option: Hotel Le Meridien Thimphu and Hotel Le Meridien Riverfront Paro, or similar.",
    priceRows: [
      { label: "Per adult - 4 star hotels", amount: 32000 },
      { label: "Per adult - 5 star hotels", amount: 67000 },
      { label: "Flight fare", amount: 65000 },
    ],
    bookingPolicy:
      "Tour: 50% at the time of confirmation. Remaining 50% due 30 days prior to departure. Air: 100% at the time of confirmation.",
    cancellationPolicy:
      "Tour: 50% charge before 30 days of travel date. 100% charge within 30 days of travel date. Air: as per airline policy.",
    metaTitle: "Bhutan - 5 Days / 4 Nights",
    metaDescription:
      "Bhutan in five days from ₹32,000 per adult - Thimphu's Buddha Dordenma and Memorial Chorten, the Dochula Pass, Paro and the Tiger's Nest hike, with breakfast and dinner daily.",
  },
  // 004577 - 6D 5N - BHUTAN - NOV - 2 ADULTS.pdf
  {
    slug: "magical-bhutan-a-himalayan-adventure-6d5n",
    title: "Magical Bhutan - A Himalayan Adventure",
    summary:
      "Discover the enchanting beauty of Bhutan, exploring its majestic Himalayan landscapes, ancient monasteries, vibrant culture, and peaceful valleys. Experience the charm of Paro, Thimphu, and Punakha while enjoying Bhutan's unique traditions, breathtaking scenery, and warm hospitality.",
    priceNote:
      "Land cost shown per adult, based on sharing 2 rooms; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "bhutan",
    category: "honeymoon",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 32900,
    heroImage: d("bhutan"),
    highlights: ["Phuentsholing", "Thimphu", "Paro"],
    inclusions: [
      "5 nights' accommodation in the above-mentioned hotel",
      "Breakfast as per the itinerary",
      "Meet & greet at the airport",
      "All transfers and tours on PVT & SIC basis",
      "With all transfer driver allowances, parking, toll taxes, road permit, fuel",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "SDF",
      "All entry tickets as per the itinerary",
      "Lunch & dinner",
      "Early check-in & late check-out",
      "Check-in time in hotel is after 1400/1500 hours and check-out is before 1100/1200 hours",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Personal expenses, room service, special orders, and alcoholic/non-alcoholic beverages",
      "Any extra excursion or sightseeing beyond the itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Pick up from IXB Airport / NJP Station - Phuentsholing (170 km / 5 hrs approx.)",
        description:
          "On arrival, pick up from IXB Airport / NJP Railway Station and drive to Phuentsholing, the gateway of Bhutan by road from India. It is a thriving commercial center on the northern edge of the Indian plains. On reaching Phuentsholing, check in at the hotel. Overnight stay at the hotel in Phuentsholing.",
        meals: "No meals",
        stay: "Overnight, Phuentsholing",
      },
      {
        day: 2,
        title: "Phuentsholing - Thimphu (altitude 2,320 m / 160 km / 5 hrs approx.)",
        description:
          "After breakfast, check out of the hotel, get the permit done and drive to Thimphu via the wonderful mystic town of Gedu, which is about 9,000 ft above the sea, and Chukha Dam. On the way visit Kharbandi Gompa and Wangkha waterfalls, and halt at Chuzom to take photographs of the confluence of two rivers of Bhutan. Then resume your journey to Thimphu; on reaching, check in to the hotel for an overnight stay in Thimphu.",
        meals: "Breakfast",
        stay: "Overnight, Thimphu",
      },
      {
        day: 3,
        title: "Thimphu Local Sightseeing - Paro (50 km / 2 hrs approx.)",
        description:
          "After breakfast, visit the Kuensel Phodrang (Buddha Statue). Located a short drive from Thimphu city centre, Kuensel Phodrang offers a good overview of the Thimphu valley. The largest statue of Buddha in the country sits here, and it houses over one hundred thousand smaller Buddha statues. Then visit the National Memorial Chorten, built in the memory of the Third King of Bhutan. Finally visit the Folk Heritage Museum. Afternoon visit Sangaygang View Point, Changangkha Monastery and the Takin Preserve Centre. Takin is the national animal of Bhutan. In the evening visit Tashichho Dzong (Fortress of the Glorious Religion). After sightseeing, transfer to Paro. On reaching, check in to the hotel. Overnight stay at hotel in Paro.",
        meals: "Breakfast",
        stay: "Overnight, Paro",
      },
      {
        day: 4,
        title: "Paro Local Sightseeing",
        description:
          "After breakfast, visit Nya-mey Zam and Dungtse Lhakhang, Tamchog Lhakhang, Rinpung Dzong, a view of Taktsang Monastery, and Ta Dzong. After sightseeing, return to the hotel. Evening is for leisure. Overnight stay at hotel in Paro.\n\nOR\n\nAfter breakfast, we proceed to the world famous \"Tiger's Nest Monastery\". It will take your full day. One needs to do some trekking to visit this; ponies are available on hire. Evening is for leisure. Overnight stay at a hotel in Paro.",
        meals: "Breakfast",
        stay: "Overnight, Paro",
      },
      {
        day: 5,
        title: "Paro - Phuentsholing (150 km / 4 hrs approx.)",
        description:
          "After breakfast, check out of your hotel and transfer to Phuentsholing, visiting the Paro Airport View Point and local market on the way. On reaching, check in to the hotel. Explore the local area in the evening, enjoy a delicious dinner at the hotel, and stay overnight at Phuentsholing.",
        meals: "Breakfast",
        stay: "Overnight, Phuentsholing",
      },
      {
        day: 6,
        title: "Phuentsholing - Bagdogra Airport / NJP Station (160 km / 4 hrs approx.)",
        description:
          "Early morning after breakfast, check out from the hotel and transfer to Bagdogra Airport / NJP Railway Station. Tour ends with sweet memories.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004577",
    travelWindow: "November 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      { destination: "Phuentsholing", hotel: "Hotel Palm / Hotel Amochhu View or similar", nights: 2, meals: "Breakfast" },
      { destination: "Thimphu", hotel: "Hotel Starlight / Hotel Tsenden / Boutique Hotel Ugyen or similar", nights: 1, meals: "Breakfast" },
      { destination: "Paro", hotel: "Hotel Penchu Boutique / Hotel Center Point / Hotel Dorjeeling or similar", nights: 2, meals: "Breakfast" },
    ],
    priceRows: [
      { label: "Per adult", amount: 32900 },
      { label: "Party of 2", amount: 65800 },
    ],
    faqs: [
      {
        question: "What documents are required for Bhutan?",
        answer:
          "An original valid passport (minimum 6 months validity) or voter ID card, and a birth certificate for children below 18 years. Aadhaar card is not allowed for any type of permit.",
      },
      {
        question: "What is the SDF?",
        answer:
          "SDF is a fee levied by the Royal Government of Bhutan on all tourists visiting Bhutan, to promote sustainable and responsible tourism under the overall principle of \"High value, Low volume\" tourism. It contributes to social welfare, developmental activities, conservation of the environment, promotion of culture, and enhancement of infrastructure and facilities for tourists. Tourists from Bangladesh, India and Maldives are levied a concessional SDF of Nu. 1,200 per person per night.",
      },
      {
        question: "Are there any other things to note?",
        answer:
          "Any cost arising due to natural calamities like landslides, road blockage or political disturbances (strikes) is to be borne by the client and paid directly on the spot, as is any increase in taxes or fuel price affecting surface transportation and land arrangements before departure. AC will not work in hill areas or in a stopped / parked vehicle. The vehicle will run only till the point it is allowed in a particular destination; beyond that, local transport has to be arranged by the guest. The Department of Immigration Office, Thimphu may remain closed without prior notice on an immediate declaration of holidays.",
      },
    ],
    metaTitle: "Magical Bhutan - A Himalayan Adventure - 6 Days / 5 Nights",
    metaDescription:
      "Bhutan in six days from ₹32,900 per adult - by road from Bagdogra through Phuentsholing to Thimphu and Paro, with Kuensel Phodrang, Tashichho Dzong and the Tiger's Nest. Land only.",
  },
  // 004493-7D 6N-NEPAL-OCT-02 ADULTS.pdf
  {
    slug: "charm-of-nepal-7d6n",
    title: "Charm of Nepal",
    summary:
      "Kathmandu's temples and stupas, the Manakamana cable car on the drive to Pokhara, a Sarangkot sunrise over the Annapurnas and a free day by Phewa Lake.",
    priceNote:
      "Land cost per adult, based on 2 adults sharing 1 double room; excludes airfare. Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply.",
    destinationSlug: "nepal",
    category: "honeymoon",
    type: "customized",
    durationDays: 7,
    durationNights: 6,
    priceFrom: 46500,
    heroImage: d("nepal"),
    highlights: [
      "Pashupatinath, Boudhanath and Swayambhunath",
      "Kathmandu Durbar Square",
      "Manakamana Temple by cable car",
      "Sunrise over the Annapurnas from Sarangkot",
      "Phewa Lake and Tal Barahi Temple",
    ],
    inclusions: [
      "06 nights' accommodation at the above mentioned hotel",
      "Daily breakfast except on arrival day",
      "Meal plan (06 breakfasts & 06 dinners) as per the itinerary",
      "01 double room",
      "All transfers and sightseeing by 01 sedan",
      "With all transfer driver allowances, parking, toll taxes, fuel",
      "Airport / railway station pickup, drop off and sightseeing as per the itinerary",
      "GST",
      "All the sightseeing mentioned in the itinerary will be covered if time permits. If not, you may cut down and choose the places that interest you most.",
    ],
    exclusions: [
      "Round trip airfare / train fare",
      "Early check-in at hotel, late check-out at hotel",
      "Check-in & check-out time 02:00 noon & 11:00 am",
      "Any adventure activities, any personal expenses, etc.",
      "Anything which is not mentioned in package inclusions",
      "Travel insurance",
      "Monument fees",
      "Sarangkot cable car ride ticket",
      "Any meal other than specified",
      "Any expenditure of a personal nature",
      "Room heater charges",
      "Boating, guide charges",
      "Entry fee, SIM recharge",
      "Any increase in taxes or fuel price, leading to increase in surface transportation & land arrangements, which may come into effect prior to departure",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Kathmandu Airport",
        description:
          "Upon arrival at Tribhuvan International Airport, Kathmandu, meet our representative and transfer to your hotel. The airport is located approximately 6–8 km from the city centre, and the transfer takes around 20–30 minutes depending on traffic. After check-in, the day is free for leisure. You may explore the bustling streets of Thamel in the evening and enjoy the local atmosphere.",
        meals: "Dinner",
        stay: "Overnight, Kathmandu",
      },
      {
        day: 2,
        title: "Kathmandu City Sightseeing (approx. 25–30 km)",
        description:
          "After breakfast, proceed for a full-day sightseeing tour covering Pashupatinath Temple (approximately 5 km from the city centre), Boudhanath Stupa (3 km from Pashupatinath), Swayambhunath Stupa (10 km from Boudhanath), and Kathmandu Durbar Square (4 km from Swayambhunath). The total sightseeing distance for the day is approximately 25–30 km. Pashupatinath Temple is open daily, though non-Hindus are not permitted inside the main sanctum. Kathmandu Durbar Square and Swayambhunath remain open throughout the week. Return to the hotel.",
        meals: "Breakfast, dinner",
        stay: "Overnight, Kathmandu",
      },
      {
        day: 3,
        title: "Kathmandu - Pokhara (approx. 210 km / 6–7 hours)",
        description:
          "After breakfast, check out and drive to Pokhara through Nepal's scenic countryside, following the beautiful Trishuli River. En route, visit the sacred Manakamana Temple via the famous cable car ride, offering breathtaking views of the hills and valleys. (Cable car tickets are payable directly by guests.) Arrive in Pokhara, check in to your hotel, and enjoy the charming Lakeside area and serene Phewa Lake.",
        meals: "Breakfast, dinner",
        stay: "Overnight, Pokhara",
      },
      {
        day: 4,
        title: "Pokhara Sightseeing (approx. 30–35 km)",
        description:
          "Early morning excursion to Sarangkot, located approximately 12 km from Lakeside, to witness a magnificent sunrise over the Annapurna Himalayan range. After breakfast, proceed for local sightseeing covering Davis Falls, Gupteshwor Mahadev Cave, Bindabasini Temple, Seti Gorge, and Tal Barahi Temple situated in the middle of Phewa Lake. The total sightseeing distance for the day is approximately 30–35 km. Most attractions in Pokhara remain open daily, although museums and caves may have restricted timings during public holidays.",
        meals: "Breakfast, dinner",
        stay: "Overnight, Pokhara",
      },
      {
        day: 5,
        title: "Leisure Day in Pokhara",
        description:
          "After breakfast, enjoy a day at leisure. Guests may opt for adventure activities such as paragliding from Sarangkot, zip-lining, ultralight flights, or additional boating on Phewa Lake at an extra cost. Alternatively, relax at the lakeside cafés and enjoy the stunning mountain views.",
        meals: "Breakfast, dinner",
        stay: "Overnight, Pokhara",
      },
      {
        day: 6,
        title: "Pokhara - Kathmandu (200 km / 7 hrs approx.)",
        description:
          "After breakfast, transfer back to Kathmandu. Reach your hotel by evening; the rest of the time is free for personal activities.",
        meals: "Breakfast, dinner",
        stay: "Overnight, Kathmandu",
      },
      {
        day: 7,
        title: "Kathmandu - Departure",
        description:
          "Morning after breakfast, check out from the hotel and transfer to the airport as per your flight schedule. Tour ends with sweet memories.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004493",
    travelWindow: "September 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      { destination: "Kathmandu", hotel: "Hotel Crowne Imperial / Hotel Grand or similar", nights: 3, meals: "Breakfast & dinner" },
      { destination: "Pokhara", hotel: "Lake View Resort or similar", nights: 3, meals: "Breakfast & dinner" },
    ],
    priceRows: [{ label: "Per adult", amount: 46500 }],
    faqs: [
      {
        question: "What ID do I need to travel to Nepal?",
        answer:
          "A valid passport or original voter ID is required for adults (18 yrs & above) to travel to Kathmandu by air. A student ID card should clearly show the traveller's picture, validity date, school or college name, date of birth and the class in which the student is studying.",
      },
      {
        question: "Can I use Indian currency in Nepal?",
        answer: "Yes, but INR 200, 500 & 2000 notes are not valid in Nepal.",
      },
      {
        question: "Are there any other things to note?",
        answer:
          "In the event of natural calamities (e.g. landslides) or political events (such as bandhs), if roads are closed and alternative routes are required, any additional costs for the detour are the responsibility of the guest and must be paid directly. The itinerary cannot be changed due to flight or train delays or any situations beyond our control. Drinking alcohol and eating food is not allowed inside the vehicle. The vehicle will run only till the point it is allowed in a particular destination; beyond that, local transport has to be arranged by the guest. Driver details will be sent by message, WhatsApp or mail one day before your tour by our tour coordinator.",
      },
    ],
    metaTitle: "Charm of Nepal - 7 Days / 6 Nights",
    metaDescription:
      "Nepal in seven days from ₹46,500 per adult - Kathmandu's temples and stupas, the Manakamana cable car, a Sarangkot sunrise and Phewa Lake in Pokhara. Land only.",
  },
  // 003064 - 6D 5N - SWITZERLAND - JAN - 2 ADULTS.pdf
  {
    slug: "switzerland-6d5n",
    title: "Switzerland",
    summary:
      "A guided coach circuit of Switzerland from Zurich - Bern, Glacier 3000 and Chillon Castle, Geneva, Lausanne and Gruyères, Interlaken and the Aare Gorge, a boat to Lugano, then Bellinzona and Lucerne.",
    priceNote:
      "Land cost per adult; excludes airfare, visa and TCS. Exchange rate fluctuations at the time of full payment will be applicable and may result in price adjustments. Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply.",
    destinationSlug: "europe",
    category: "honeymoon",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 156000,
    heroImage: d("europe"),
    highlights: [
      "Glacier 3000 cable car",
      "Chillon Castle on Lake Geneva",
      "Cailler chocolate factory, Gruyères",
      "Aare Gorge and the Susten Pass",
      "Boat from Gandria to Lugano",
      "Lucerne's Kapellbrücke",
    ],
    inclusions: [
      "06 nights' accommodation at the above mentioned hotel",
      "A/C vehicle during the tours and transfers mentioned in the itinerary",
      "Tours & transfers on seat-in-coach (SIC) basis",
      "Daily breakfast at the hotel's restaurant (from day 2) (only if hotel is booked with us) & other meals as mentioned in the itinerary",
      "Travel by bus with English speaking guide, basic travel insurance, hotel and breakfast buffet",
      "Includes arrival transfer",
      "City tour in: Geneva",
      "Boat: Gandria / Lugano",
      "Ticket admission: Chillon Castle, Cailler chocolate factory, Aareschlucht gorges",
      "Funicular: Glacier 3000",
      "2 lunches included in: Chillon Castle, Aare Gorge",
      "GST",
    ],
    exclusions: [
      "Roundtrip airfare",
      "Early check-in at hotel, late check-out at hotel, laundry, telephone calls and incidentals",
      "Any personal expenses, room service and special orders. Alcoholic and non-alcoholic beverages",
      "Any extra excursion apart from the itinerary",
      "TCS",
      "Visa",
    ],
    itinerary: [
      {
        day: 1,
        title: "Zurich",
        description:
          "We'll transfer you to the hotel and you'll have some free time. In the afternoon, you'll find information about the start of your tour on the boards located at the hotel reception.\n\nImportant - check-in: please note that hotel check-in time is usually at 03:00 p.m. If you require earlier room availability, consider booking an additional night at the beginning of your trip. Additional nights: if you requested additional nights, your room will be ready upon arrival at the hotel, but your trip guide will only contact you when the included activities begin. At the reception, you will find an information board with our staff's telephone number and hours of assistance. Until then, you have free time to enjoy at your leisure. The hotel staff can assist you with any information you need.\n\nNote: the schedules provided in this itinerary are indicative. The guide may adjust them as needed to enhance the trip experience.",
        stay: "Overnight, Zurich",
      },
      {
        day: 2,
        title: "Zurich - Bern - Chillon Castle - Geneva",
        description:
          "Total distance covered: 361 km. Scenery: stunning landscapes throughout the journey, featuring impressive alpine views, picturesque villages, and scenic views over Lake Geneva. Note: don't forget to bring winter clothing and comfortable shoes, as we'll be ascending to one of the most spectacular points in Switzerland, where you can admire ice and snow year-round. A raincoat is also recommended. If the day is sunny in the mountains, be sure to use sunscreen.\n\n08:00 a.m. - Departure from Zurich. We'll enjoy beautiful scenery along the way. 10:00 a.m. - Bern. Welcome to Switzerland's capital, one of the country's most charming historic cities. We'll ascend to the Rose Garden for panoramic views from its lookout point. Afterward, you'll have free time to stroll through the city center. 11:30 a.m. - Departure from Bern. We'll continue our journey along a scenic road surrounded by majestic alpine landscapes, passing through the canton of Bern with its quaint wooden architecture, on our way to the Gstaad region, famous for its ski resorts.\n\n01:30 p.m. - Glacier 3000. Cable car ride included to this station located 3,000 meters above sea level, covered in snow for most of the year. The station features various viewpoints offering breathtaking panoramas of more than 20 peaks over 4,000 meters tall. If you're feeling brave, you can also walk across the 107-meter-long suspension bridge connecting two of these peaks. Lunch will be included. 04:30 p.m. - After descending from Glacier 3000, we'll journey toward Lake Geneva in the French-speaking region of Switzerland, known for its mild climate and extensive vineyards.\n\n05:15 p.m. - Chillon Castle (tickets included). We'll stop to visit this medieval fortress built over the waters of Lake Geneva. 06:15 p.m. - Departure from Chillon Castle. We'll continue along the lakeshore, passing through the center of Montreux, a sophisticated city renowned for its jazz festival. 07:45 p.m. - Geneva. We'll arrive at our hotel by the end of the day, typically located on the French outskirts of the city.\n\nImportant note: in case of adverse weather conditions or other unforeseen circumstances, the Glacier 3000 cable car may be closed. If this happens, we will offer an equally spectacular alternative to enjoy the alpine landscapes.",
        meals: "Breakfast, lunch",
        stay: "Overnight, Geneva",
      },
      {
        day: 3,
        title: "Geneva - Lausanne - Gruyères - Fribourg",
        description:
          "Total distance covered: 155 km. Scenery: beautiful views of Lake Geneva, with large lakes and snowcapped peaks in the distance.\n\nAfter breakfast, it will be time to embark on a panoramic tour of Geneva, a city on the shores of Lake Geneva, home to the European headquarters of the United Nations, the International Labour Organization, the Red Cross, and many other international organizations. We'll visit the Palais des Nations (United Nations headquarters in Europe), the beautiful English Garden with its flower clock, and admire the \"Jet d'Eau,\" the tallest fountain in Europe. You'll then have free time to explore and have lunch. 12:45 p.m. - Departure from Geneva, following the shores of Lake Geneva, passing through vineyard landscapes and snow-capped mountains on the horizon.\n\n01:45 p.m. - Lausanne, a city in western Switzerland crossed by four rivers that carry water from the Alps into Lake Geneva. Lausanne is home to the International Olympic Committee, founded here in 1894. We'll stop at the Olympic Park, located by the lake, an iconic space dedicated to sports and Olympic culture. 02:30 p.m. - Departure from Lausanne.\n\n03:30 p.m. - Gruyères. There will be time to stroll through the center of this picturesque walled town, famous for the production of the cheese that bears its name. Nearby are some of Switzerland's leading chocolate manufacturers, such as Nestlé. We'll visit the Cailler Chocolate Factory, and you'll enjoy a sweet tasting. 06:00 p.m. - Departure from Gruyères. 06:45 p.m. - Arrival in Fribourg for accommodation, a bilingual city (French/German) with a charming old town.\n\nNote: due to the limited number of hotel options in Fribourg, accommodation may sometimes be arranged in a nearby city.",
        meals: "Breakfast",
        stay: "Overnight, Fribourg",
      },
      {
        day: 4,
        title: "Fribourg - Interlaken - Aare Gorge - Lugano - Chiasso",
        description:
          "Total distance covered: 309 km. Scenery: this stage offers spectacular views of year-round snow-capped peaks and beautiful lakes. Tip: bring some warm clothing for the boat ride to enjoy the experience on deck.\n\n08:00 a.m. - Departure from Fribourg. We'll take a charming and scenic route through the canton of Bern, passing hills, forests, and green fields. We'll make a photo stop along the way, either at Schwarzenburg Castle or, depending on accommodation, at a viewpoint over Lake Thun or Lake Brienz. 09:30 a.m. - Interlaken. We'll stop for a stroll in this tourist town nestled between Lake Thun and Lake Brienz, from which it takes its name. 10:30 a.m. - Departure from Interlaken.\n\n11:15 a.m. - Aare Gorge. Admission included to walk along the pathways and tunnels of this stunning 200-meter-deep, 1.4 km-long gorge carved into limestone by the Aar River. Lunch will be included. 01:00 p.m. - Departure from Aare Gorge. We'll head toward one of Switzerland's most spectacular mountain passes: the Susten Pass, known for its eternal snow and glaciers. We'll stop along the way to take in the breathtaking high mountain glacial scenery. Surrounded by these impressive landscapes, we'll continue toward the Italian-speaking part of Switzerland, crossing the famous 17 km-long Gotthard Tunnel.\n\n04:00 p.m. - Gandria. Brief stop in this charming village on the shores of Lake Lugano, known for its traditional architecture, narrow, steep streets, and picturesque setting. 04:45 p.m. - Gandria. We'll board a boat (tickets included) for a cruise on the lake to Lugano, the main city of Italian-speaking Switzerland. 05:30 p.m. - Arrival in Lugano, a major financial hub and popular tourist destination, famous for its mild climate, lakeside promenade, parks, and vibrant cultural life. You'll have free time to explore the city. 06:30 p.m. - Departure from Lugano. 07:00 p.m. - Arrival in Chiasso, a Swiss city on the border with Italy.\n\nNote: from late May to early October, the Susten Pass may be closed due to snow. In that case, we'll travel via the Brünig Pass, which is also very scenic. In winter, the Aareschlucht Falls are closed, so we'll visit the charming towns of Brienz and Meiringen instead. Occasionally, accommodation may be in the metropolitan area of Como.",
        meals: "Breakfast, lunch",
        stay: "Overnight, Chiasso",
      },
      {
        day: 5,
        title: "Chiasso - Bellinzona - Altdorf - Lucerne - Zurich",
        description:
          "Total distance covered: 265 km. Scenery: panoramic views from the highway, featuring lakes and mountains.\n\n08:30 a.m. - Departure from Chiasso after breakfast. 09:30 a.m. - Bellinzona. Free time in the capital of Italian-speaking Switzerland, renowned for its three medieval castles, which are a UNESCO World Heritage Site. Perched on the hills, these castles played a key historical role as Alpine fortifications. 10:30 a.m. - Departure from Bellinzona, heading towards the German-speaking region of Switzerland. We'll cross the Gotthard Pass, with a photo stop at a breathtaking viewpoint.\n\n12:45 p.m. - Arrival in Altdorf, the capital of the canton of Uri and the birthplace of William Tell, one of the founding cantons of independent Switzerland. You'll have time to stroll and enjoy lunch. 02:00 p.m. - Departure from Altdorf. 02:45 p.m. - Lucerne, the tourism capital of Switzerland. You'll have the chance to visit iconic landmarks such as the Kapellbrücke, the Lion Monument, the cathedral, the Jesuit Church, and the charming old town. The rest of the afternoon will be yours to explore. 06:30 p.m. - Departure from Lucerne. 07:30 p.m. - Zurich.",
        meals: "Breakfast",
        stay: "Overnight, Zurich",
      },
      {
        day: 6,
        title: "Zurich",
        description:
          "After breakfast, our journey will come to an end, leaving you with wonderful lasting memories.\n\nNote: please be aware that the hotel check-out time is usually 10:00 a.m. You can leave your luggage in reception upon check-out, allowing you to explore the city without carrying your bags. You can retrieve your luggage at your convenience later in the day. If you require additional time to use your room, we recommend booking an extra night at the end of your tour.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "003064",
    travelWindow: "January 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      { destination: "Zurich", hotel: "Mercure Zurich City or similar (3 star)", nights: 2, meals: "Breakfast" },
      { destination: "Geneva", hotel: "Adonis Excellior Grand or similar (3 star)", nights: 1, meals: "Breakfast" },
      { destination: "Fribourg", hotel: "Ibis Bulle - La Gruyère or similar (3 star)", nights: 1, meals: "Breakfast" },
      { destination: "Chiasso", hotel: "Mövenpick Albergo or similar (3 star)", nights: 1, meals: "Breakfast" },
    ],
    priceRows: [{ label: "Per adult", amount: 156000 }],
    metaTitle: "Switzerland - 6 Days / 5 Nights",
    metaDescription:
      "Switzerland in six days from ₹1,56,000 per adult - Bern, Glacier 3000, Chillon Castle, Geneva, Gruyères, the Aare Gorge, Lugano and Lucerne on a guided coach tour. Land only.",
  },
  // 003493 - 7D 6N - SWITZERLAND, ITALY - SEP - 4 ADULTS.pdf
  {
    slug: "switzerland-italy-7d6n",
    title: "Switzerland & Italy",
    summary:
      "Three nights in Zurich for Lake Zurich, Grindelwald-First and Lucerne, then over the Alps by Bellinzona and Como to Milan, through Pisa to Rome for the Eternal City and an evening in Trastevere.",
    priceNote:
      "Land cost per adult; excludes airfare, visa and TCS. Exchange rate fluctuations at the time of full payment will be applicable and may result in price adjustments. Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply.",
    destinationSlug: "europe",
    category: "family",
    type: "customized",
    durationDays: 7,
    durationNights: 6,
    priceFrom: 161000,
    heroImage: d("europe"),
    highlights: [
      "Lake Zurich cruise to Rapperswil",
      "Grindelwald-First cable car",
      "Lucerne's Kapellbrücke",
      "Lake Como and Milan's Piazza del Duomo",
      "The Leaning Tower of Pisa",
      "Guided tour of Rome and an evening in Trastevere",
    ],
    inclusions: [
      "06 nights' accommodation at the above mentioned hotel",
      "Travel by bus with English speaking guide, basic travel insurance, hotel and breakfast buffet",
      "Includes arrival transfer",
      "City tour in: Rome",
      "Boat: Lake Zurich",
      "Evening transfer: Trastevere in Rome",
      "Train: Rapperswil / Zurich, Piazza dei Miracoli in Pisa",
      "Funicular: cable car to Grindelwald First",
      "1 lunch included in: Lucerne",
      "GST",
    ],
    exclusions: [
      "Roundtrip airfare",
      "Early check-in at hotel, late check-out at hotel",
      "Other meals not mentioned",
      "Laundry, telephone calls and incidentals",
      "Any personal expenses, room service and special orders. Alcoholic and non-alcoholic beverages",
      "Any extra excursion apart from the itinerary",
      "Visa",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Zurich",
        description:
          "Welcome to Europamundo! We'll transfer you to the hotel and you'll have some free time. In the afternoon, you'll find information about the start of your tour on the boards located at the hotel reception.\n\nImportant - check-in: please note that hotel check-in time is usually at 03:00 p.m. If you require earlier room availability, consider booking an additional night at the beginning of your trip. Additional nights: if you requested additional nights, your room will be ready upon arrival at the hotel, but your trip guide will only contact you when the included activities begin. At the reception, you will find an information board with our staff's telephone number and hours of assistance. Until then, you have free time to enjoy at your leisure. The hotel staff can assist you with any information you need. Optional activities: during your trip, your guide may offer optional activities. If these activities are available on the Europamundo app or through your \"My Trip\" link, we strongly recommend booking them as early as possible to ensure availability. Waiting until the last minute may result in missed opportunities due to limited tickets, bus seats, or other factors.\n\nNote: the schedules provided in this itinerary are indicative. The guide may adjust them as needed to enhance the trip experience.",
        stay: "Overnight, Zurich",
      },
      {
        day: 2,
        title: "Zurich",
        description:
          "Total distance covered by train: 42 km. Note: today's itinerary is unique, featuring a boat journey across Lake Zurich and a return trip by train. Depending on the number of travelers, transfers to and from the city centre may be conducted using public transport. Please note that the boat schedules may change, and the itinerary may be adjusted accordingly.\n\n09:00 a.m. - We'll depart from the hotel for a tranquil day. Accompanied by our guide, we'll take a leisurely walk through Zurich, Switzerland's largest city and its financial and cultural hub. Renowned for its banking industry, Zurich has twice been recognized as the city with the best quality of life in the world. 10:30 a.m. - We'll embark on an approximately two-hour cruise on Lake Zurich. The boat will make brief stops, allowing us to admire the charming villages along the way.\n\n12:30 p.m. - Rapperswil. Arriving in this quaint and picturesque village, famous for its medieval castle, there will be time to explore and enjoy lunch. 03:00 p.m. - We'll return to Zurich by train, experiencing the efficiency and punctuality of the Swiss railway system. The journey back to Zurich will take just under 35 minutes. Afterward, you'll have free time to explore the city on your own.",
        meals: "Breakfast",
        stay: "Overnight, Zurich",
      },
      {
        day: 3,
        title: "Zurich - Lucerne - Zurich",
        description:
          "Total distance covered: 280 km. Note: wear warm clothing and comfortable walking shoes and be sure to bring your camera. Please be aware that the cable car may not operate at certain times due to weather conditions (strong winds) or maintenance. If this happens, we will provide alternative transportation to a similar location.\n\n07:30 a.m. - Departure from Zurich for a scenic journey through stunning landscapes featuring tall mountains and lakes. 10:00 a.m. - Grindelwald. Enjoy a coffee break in this mountain resort in the Bernese Alps before taking the cable car to Grindelwald-First (tickets included), the largest ski area in the region. We'll embark on a 30-minute walk along a path that offers breathtaking alpine views, including the \"footbridge over the void,\" where you can marvel at the surrounding glaciers. Lunch is included for all passengers (vegetarian option available).\n\n01:45 p.m. - Departure from Grindelwald, continuing on to Lucerne. 03:30 p.m. - Lucerne. You'll have time to explore this charming Swiss city, including the Kapellbrücke, the covered bridge over the Reuss River, the Town Hall and Square with its Clock Tower, and the pedestrian streets filled with elegant shops. Enjoy a stroll through the city and dine before we head back to the hotel in Zurich. 07:00 p.m. - Departure from Lucerne to return to Zurich. 08:00 p.m. - Zurich.\n\nNote: for operational reasons, the departure from Lucerne may be moved up to 5:30 p.m., allowing time in Zurich for dinner before heading to the hotel. The guide will offer an optional full-day excursion, starting in the morning. After some free time in Lucerne, we'll take a rotating cable car to the summit of Mount Titlis. At over 3,000 meters above sea level, the alpine summit offers breathtaking views of the glacier and the Alps.",
        meals: "Breakfast, lunch",
        stay: "Overnight, Zurich",
      },
      {
        day: 4,
        title: "Zurich - Bellinzona - Como - Milan",
        description:
          "Total distance covered: 290 km. Scenery: spectacular alpine landscapes, mountains and lakes. Be sure to bring your camera! Note: please keep your passport handy, as it may be required when crossing into Italy.\n\n08:00 a.m. - Departure from Zurich. We'll leave early in the morning, crossing the Alps to reach the Italian-speaking part of Switzerland. 10:45 a.m. - Bellinzona. We'll arrive in this town, famous for its three medieval castles, which are UNESCO World Heritage Sites. These castles, with their walls, towers, and gates overlooking the city from the hills, are prime examples of medieval military architecture, showcasing their historical significance as alpine strongholds. You'll have free time to stroll through the picturesque narrow streets of the old town. 12:00 p.m. - Departure from Bellinzona.\n\n01:15 p.m. - Como. Arrival in this city, considered a jewel of Lombardy, known for its beautiful lakeside gardens, promenade and stunning cathedral. Enjoy some time to stroll around and have lunch. 03:15 p.m. - Departure from Como. 04:15 p.m. - Milan. Our guide will lead us to the impressive Piazza del Duomo, where you'll have some time for a walk. Transfer to the hotel will be at 8:00 p.m.",
        meals: "Breakfast",
        stay: "Overnight, Milan",
      },
      {
        day: 5,
        title: "Milan - Pisa - Rome",
        description:
          "Total distance covered: 640 km. Scenery: we'll enjoy breathtaking Mediterranean views, with stunning seascapes and delightful scenery throughout the journey.\n\n08:30 a.m. - We'll depart from Milan, the financial heart of Italy, and head towards Pisa. 12:00 p.m. - Pisa. Upon arrival, we'll take a charming little tourist train to the Piazza dei Miracoli (Square of Miracles). Here, you'll have time to admire one of Italy's most captivating art complexes, including the famous Leaning Tower of Pisa. 03:00 p.m. - We'll leave Pisa and continue our journey towards Rome. 08:30 p.m. - Rome.\n\nNote: the schedule for this stage may vary, with possible later arrivals in Pisa and Rome to accommodate travelers joining us from Nice.",
        meals: "Breakfast",
        stay: "Overnight, Rome",
      },
      {
        day: 6,
        title: "Rome",
        description:
          "In the morning, we'll take a three-hour guided tour of the Eternal City, combining a walking tour of Imperial Rome with a panoramic bus ride to admire one of the oldest and most influential cities in Western civilization. During the tour, we'll see several iconic sites, including the Arch of Constantine, the exterior of the Colosseum and the Imperial Forums, the Circus Maximus, the Baths of Caracalla, the Basilica of Saint Mary Major, the Pyramid of Cestius, and Castel Sant'Angelo. This tour will end around 11:00 a.m. at Vatican City, an independent state within Rome and the center of the Catholic Church. For those who are especially interested, our guide will offer an optional visit after the panoramic tour to explore in more detail the most important halls of the Vatican Museums and the Sistine Chapel.\n\nFree afternoon. 6:00 p.m. - To wrap up the day, we'll include a transfer to the popular Trastevere neighborhood, known for its charming restaurants and lively atmosphere. 8:30 p.m. - Return to the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Rome",
      },
      {
        day: 7,
        title: "Rome",
        description:
          "After breakfast, our journey will come to an end, leaving you with wonderful lasting memories.\n\nNote: please be aware that the hotel check-out time is usually 10:00 a.m. You can leave your luggage in reception upon check-out, allowing you to explore the city without carrying your bags. You can retrieve your luggage at your convenience later in the day. If you require additional time to use your room, we recommend booking an extra night at the end of your tour.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "003493",
    travelWindow: "September 2026",
    travellers: "4 adults",
    rooms: 2,
    stays: [
      { destination: "Zurich", hotel: "Hotel Ibis Zurich Messe or similar", nights: 3, meals: "Breakfast" },
      { destination: "Milan", hotel: "Belstay Milano Assago or similar", nights: 1, meals: "Breakfast" },
      { destination: "Rome", hotel: "Aran Park or similar", nights: 2, meals: "Breakfast" },
    ],
    priceRows: [{ label: "Per adult", amount: 161000 }],
    metaTitle: "Switzerland & Italy - 7 Days / 6 Nights",
    metaDescription:
      "Switzerland and Italy in seven days from ₹1,61,000 per adult - Lake Zurich, Grindelwald-First, Lucerne, Como, Milan, Pisa and a guided tour of Rome. Land only.",
  },
  // 003255 - 6D 5N - BALI - JUL 12 - 2 ADULTS.pdf
  {
    slug: "incredible-bali-6d5n",
    title: "Incredible Bali",
    summary:
      "Six days in Bali - three nights in Kuta and two in a private pool villa in Ubud, with a full day on Nusa Penida, a water sports combo and the Uluwatu sunset, ATV riding and the jungle swing, and the Gate of Heaven at Lempuyang.",
    priceNote:
      "Package cost shown per adult; excludes airfare, the on-arrival visa (IDR 500,000, approx. USD 35), the international tourism levy (IDR 150,000) and TCS. Exchange-rate movement at the time of full payment may result in adjustments.",
    destinationSlug: "bali",
    category: "honeymoon",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 35500,
    heroImage: d("bali"),
    highlights: [
      "Full-day Nusa Penida West tour - Kelingking, Angel Billabong, Broken Beach and Bubu Beach",
      "Water sports combo - banana boat, couple parasailing and jet ski",
      "Padang Padang Beach and the Uluwatu sunset",
      "ATV quad biking, Tegalalang Rice Terrace and the Bali Jungle Swing",
      "Lempuyang Temple (Gate of Heaven) and Tirta Gangga",
      "Two nights in a private pool villa in Ubud",
    ],
    inclusions: [
      "05 night accommodation at the above-mentioned hotels",
      "Daily breakfast at the hotel's restaurant (from day 2); other meals as mentioned in the itinerary",
      "A/C vehicle during the tours and transfers mentioned in the itinerary (1 - 4 pax: SUV - Avanza / Xenia / similar)",
      "02 water bottles (600 ml) per adult per day during the full-day and half-day tours in Bali. For island tours like Nusa Penida or Nusa Lembongan, or any other island tour, water bottles will not be provided on those islands",
      "Welcome with a flower garland upon arrival at Bali Airport",
      "Airport to hotel / hotel to airport - private transfers, as per the itinerary",
      "All transfers and sightseeing as mentioned in the itinerary on a PRIVATE A/C VEHICLE only, other than mentioned",
      "Basic English-speaking driver during the tours and transfers on Bali mainland. On remote islands like Nusa Penida / Nusa Lembongan / Nusa Ceningan, drivers provided cannot speak English very well. Please use Google Translate, if needed",
      "All entrance fees, local taxes, donations, parking and toll charges for the above-mentioned itinerary, other than mentioned - at some places the local government collects the entrance charges directly from the guest, and these cannot be paid indirectly, so such charges are mentioned in the itinerary",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "On-arrival visa charges - IDR 500,000 (USD 35 approx.), to be paid by tourists on arrival",
      "International tourism levy charges - IDR 150,000, to be paid by tourists on arrival",
      "Early check-in or late check-out at the hotel",
      "Other meals not mentioned",
      "Laundry, telephone calls and incidentals",
      "Any personal expenses, room service and special orders; alcoholic and non-alcoholic beverages",
      "Any extra excursion apart from the itinerary",
      "Tour guide (extra charges if needed)",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali - Airport Pick-Up and Hotel Check-In",
        description:
          "After arrival at Bali International Airport, our driver will pick you up from the airport and drop you at your hotel for check-in at the hotel / villa. The driver for the airport pick-up will arrive 45 - 60 minutes after the flight arrival time, so that you get enough time to clear all the formalities at the airport, like visa, immigration, luggage collection and customs.\n\nNotes: 1. Maximum waiting time will be 02 hours 30 minutes after the flight arrival time. If the waiting time is more than 02 hours for any reason, waiting charges will apply, which can be discussed and paid directly to the driver on the spot. 2. If the flight arrival time is before 0800 hrs in the morning or after 1930 hrs in the evening, there will be additional night charges for the transportation; in such a case, kindly cross-check with our sales team for the charges. 3. Kindly remember to cross-check your itinerary with the driver upon arrival, to avoid any confusion during the tours. Also please discuss your next day's pick-up timings with the driver.",
        meals: "None",
        stay: "Overnight, Kuta",
      },
      {
        day: 2,
        title: "Full-Day Nusa Penida West Tour (Private) - 4 Beaches",
        description:
          "Kelingking Beach, Angel Billabong, Broken Bay and Bubu Beach, with complimentary snorkelling and canoeing (if time permits) and Fins Beach Club (transfers only, for 3 hours). Pick-up at 0600 - 0700 hrs in the morning, depending on your hotel location. The boat departure time is 0800 hrs from Bali; the reporting / check-in time is normally 30 - 45 minutes before departure. We will take you to the harbour to board a sharing boat to Nusa Penida Island. In Nusa Penida, our tour driver will provide the full-day tour including Kelingking Beach, Angel Billabong, Broken Bay and Bubu Beach. Tentative departure time from Nusa Penida is 1630 hrs (please read the notes).\n\nNusa Penida package inclusions: Bali hotel to harbour and harbour to Bali hotel transfers (private vehicle); return boat transfer from mainland Bali (sharing boat); private / charter car for the tour on Nusa Penida; 03 beaches - viewing point tour (Kelingking Bay, Angel Billabong and Broken Beach - all 03 places are seen from the viewing point only, as going down to the beach takes more than 02 hours at one location alone; you will get 20 - 30 minutes at each location due to the limited time); 01 beach tour - Bubu Beach, where you can visit the beach and enjoy swimming; snorkelling at the harbour (if time permits) - for the complimentary snorkelling, please connect with the staff at the harbour; canoeing at the harbour (if time permits) - for the complimentary canoeing, please connect with the staff at the harbour; the retribution fees (compulsory donation) for Nusa Penida of IDR 25,000 / adult and IDR 15,000 / child.\n\nNotes: 1. Drivers in Nusa Penida are not fluent in English; most understand very little, as it is a remote island. Kindly use Google Translate, if needed. 2. Please take 01 - 02 pairs of clothes with you for changing after the beaches or snorkelling. 3. At Nusa Penida, depending on traffic conditions and boat arrival and departure timings, the tour can be shortened by the driver on the spot. If the tour is shortened, we will cut 01 beach. 4. The boat departure timings from Bali (morning) and Nusa Penida (evening) can be a little different from the mentioned time. It is advised to cross-check the time with the driver one day prior. 5. No instructor is provided for snorkelling and canoeing.",
        meals: "Breakfast, local lunch on Nusa Penida (economy)",
        stay: "Overnight, Kuta",
      },
      {
        day: 3,
        title: "Water Sports Combo, Padang Padang Beach & Uluwatu Sunset Tour",
        description:
          "Pick-up at 0930 - 1030 hrs from the hotel lobby, depending on your hotel location. We will take you to the water sports location in the Benoa beach area, where you will enjoy some of the best water sports activities on mainland Bali. You will do the pre-booked activities - banana boat (05 minutes), jet ski (05 minutes) and parasailing (03 minutes fly time). Other than these, you can also take optional activities on a direct payment basis.\n\nAfter the water sports, we will take you directly to Padang Padang Beach, celebrated for its crystal-clear waters, white sandy shores and unique limestone cave entrance, making it a popular spot for surfers and beachgoers alike. After the beach, we will take you directly to the Uluwatu area to visit Uluwatu Temple, famous for its panoramic views of the ocean and especially renowned for its stunning sunset. After the tour, we will drop you back at the hotel for a good rest.\n\nNotes: 1. To enjoy the Uluwatu sunset, you should reach Uluwatu by 1600 hrs at the latest. 2. Please take a spare pair of clothes for changing after the water sports, in case needed. 3. For children below 09 years of age, water sports activities are not included in the given itinerary. For 09 years and above, the charges for the mentioned water sports are already included from our end. Children below 12 years will need to do these activities along with their parents only.",
        meals: "Breakfast",
        stay: "Overnight, Kuta",
      },
      {
        day: 4,
        title: "ATV Quad Biking, Tegalalang Rice Terrace & Bali Jungle Swing",
        description:
          "ATV / quad biking (double sharing, 90 minutes), Tegalalang Rice Terrace and the Bali Jungle Swing with unlimited swings and nests, and a complimentary small local lunch at the swing. Pick-up at 0800 - 0900 hrs from the hotel lobby. Tegalalang Rice Terrace has a landscape of lush green rice paddies across the photogenic Bali countryside.\n\nBali Jungle Swing: unlimited swings - visitors can enjoy the swings without a time limit, as much as they like. There are 07 kinds of swing, consisting of 3 adult swings, 1 couple swing, 1 children's swing, 1 swing bed and 1 swing circle. Besides the swings, there are also 5 kinds of nests / photo places, consisting of 01 circle nest, 02 bird nests, 01 lovely nest and 01 chicken nest. There is also a beautiful stone and 1 gate (Heaven Gate), and a local lunch with Balinese coffee, tea and water.\n\nNotes: For children below 05 years of age, we will be providing lunch only. For children between 05 and 09 years of age, the parents will need to sign an approval form before doing the activities, and the children need to do these activities along with their parents only. Kindly cross-check with the driver for the exact pick-up timings.",
        meals: "Breakfast, lunch",
        stay: "Overnight, Ubud",
      },
      {
        day: 5,
        title: "Full-Day Lempuyang Temple (Gate of Heaven) & Tirta Gangga",
        description:
          "Pick-up at 0630 - 0700 hrs. First we will take you to Lempuyang Temple, also known as the Gate of Heaven, known for its beautiful scenic views and its photos for Instagram. Please note that at Lempuyang it can take up to 4 hours to get the photos, as there is a long waiting line - so the earlier you start from the hotel, the better, and the less waiting time for you. Please remember to finish the Lempuyang tour by 1300 hrs at the latest, otherwise you will miss the other places.\n\nAfter that, continue to Tirta Gangga, known for its royal water palace and bathing pools. It is also good for scenic views and photos. The tour will finish at 1700 - 1800 hrs, after which we will drop you back at your hotel for a good rest.",
        meals: "Breakfast",
        stay: "Overnight, Ubud",
      },
      {
        day: 6,
        title: "Check-Out & Departure from Bali",
        description:
          "Check out from the hotel by 1200 hrs at the latest, or as per the hotel policy. Depending on your flight timings, you will be transferred from the hotel to Bali International Airport for your flight back home / to your next destination.\n\nNotes: 1. Kindly cross-check the pick-up time from the hotel / villa with the driver on the day prior to your flight, so there is no confusion between the guest and the driver. 2. If the flight departure time is before 1000 hrs in the morning or after 2200 hrs in the evening, there will be additional night charges for the transportation; in such a case, kindly cross-check with our sales team for the charges.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "003255",
    travelWindow: "July 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Kuta",
        hotel: "Golden Tulip Jineng Resort or similar",
        nights: 3,
        meals: "Breakfast",
      },
      {
        destination: "Ubud",
        hotel: "Bumi Linggah Villas - One Bedroom Private Pool Villa (Sapphire Villa) or similar",
        nights: 2,
        meals: "Breakfast",
      },
    ],
    priceRows: [{ label: "Per adult", amount: 35500 }],
    metaTitle: "Incredible Bali - 6 Days / 5 Nights",
    metaDescription:
      "Bali in six days from ₹35,500 per adult - Nusa Penida, water sports and the Uluwatu sunset, the jungle swing and the Gate of Heaven, with two nights in a private pool villa in Ubud. Land only.",
  },
  // 004682 BALI 4N 5D 3A NOV.pdf
  {
    slug: "fascinating-bali-5d4n",
    title: "Fascinating Bali",
    summary:
      "Five days in Bali - Padang Padang Beach and the Uluwatu sunset, a full day on Nusa Penida's west coast, and Kintamani's volcano views with a coffee plantation, Tegalalang and the jungle swing.",
    priceNote:
      "Land cost shown per adult; excludes airfare and the on-arrival visa / levy charges. Flight fare per adult is approx. INR 47,000 - 54,000 and is subject to change. Exchange-rate movement at the time of full payment may result in adjustments.",
    destinationSlug: "bali",
    category: "family",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 20300,
    heroImage: d("bali"),
    highlights: [
      "Nusa Penida",
      "Padang Padang",
      "Uluwatu Sunset",
      "Kintamani",
    ],
    inclusions: [
      "4 nights' accommodation at the above-mentioned hotel in Kuta",
      "A/C vehicle during tours and transfers mentioned in the itinerary (1-4 pax - SUV: Avanza/Xenia or similar)",
      "Daily breakfast at the hotel (from Day 2)",
      "01 water bottle (600 ml) per adult per day during the full-day tours and half-day tour in Bali. For island tours like Nusa Penida or Nusa Lembongan, or any other island tour, water bottles will not be provided on those islands",
      "Flower garland welcome on arrival at Bali airport",
      "Airport to hotel / hotel to airport - private transfers, as per the itinerary",
      "All transfers and sightseeing as mentioned in the itinerary on a PRIVATE A/C VEHICLE only, other than mentioned",
      "Basic English-speaking driver during the tours and transfers on Bali mainland. On remote islands like Nusa Penida / Nusa Lembongan / Nusa Ceningan, drivers provided cannot speak English very well. Please use Google Translate, if needed. The driver will not be guiding the tours",
      "All entrance fees, local taxes, donations, parking and toll charges for the above-mentioned itinerary, other than mentioned - at some places the local government collects the entrance charges directly from the guest, and these cannot be paid indirectly, so such charges are mentioned in the itinerary",
      "GST",
    ],
    exclusions: [
      "On-arrival visa cost - IDR 500,000 (approx. USD 35), paid directly on arrival",
      "International tourism levy - IDR 150,000, paid directly on arrival",
      "Round-trip airfare",
      "TCS",
      "Early check-in or late check-out",
      "Laundry, telephone calls and incidentals",
      "Personal expenses, room service, special orders, and alcoholic/non-alcoholic beverages",
      "Lunch, dinner",
      "Any extra excursion beyond the itinerary",
      "A tour guide, if required (available at extra charge)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali - Transfer to Hotel",
        description:
          "After arrival at Bali International Airport, our driver will pick you up from the airport and drop you at your hotel for check-in at the hotel / villa. The driver for the airport pick-up will arrive 45 - 60 minutes after the flight arrival time, so that you get enough time to clear all the formalities at the airport, like visa, immigration, luggage collection and customs.\n\nNotes: 1. Maximum waiting time will be 02 hours 30 minutes after the flight arrival time. If the waiting time is more than 02 hours for any reason, waiting charges will apply, which can be discussed and paid directly to the driver on the spot. 2. If the flight arrival time is before 0800 hrs in the morning or after 1930 hrs in the evening, there will be additional night charges for the transportation; in such a case, kindly cross-check with our sales team for the charges. 3. Kindly remember to cross-check your itinerary with the driver upon arrival, to avoid any confusion during the tours. Also please discuss your next day's pick-up timings with the driver.",
        meals: "None",
        stay: "Overnight, Bali",
      },
      {
        day: 2,
        title: "Half-Day Padang Padang Beach & Sunset at Uluwatu",
        description:
          "Pick-up at 1200 - 1330 hrs, depending on the hotel location. The tour includes a visit to Padang Padang Beach, celebrated for its crystal-clear waters, white sandy shores and unique limestone cave entrance, making it a popular spot for surfers and beachgoers alike. After the beach, we will take you directly to the Uluwatu area to visit Uluwatu Temple, famous for its panoramic views of the ocean and especially renowned for its stunning sunset. After the tour, we will drop you back at the hotel for a good rest.\n\nNotes: 1. To enjoy the Uluwatu sunset, you should reach Uluwatu by 1600 hrs at the latest. 2. Please cross-check the pick-up timings with the driver one day prior, to avoid any confusion. 3. Please take a pair of clothes with you, in case you want to go swimming at the beach.",
        meals: "None",
        stay: "Overnight, Bali",
      },
      {
        day: 3,
        title: "Full-Day Nusa Penida West Tour (Private) - 4 Beaches",
        description:
          "Kelingking Beach, Angel Billabong, Broken Bay and Bubu Beach, with complimentary snorkelling and canoeing (if time permits). Pick-up at 0545 - 0630 hrs in the morning, depending on your hotel location; please cross-check the exact pick-up time with the driver. The boat departure time is 0800 hrs from Bali; the reporting / check-in time is normally 30 - 45 minutes before departure. We will take you to the harbour to board a sharing boat to Nusa Penida Island. In Nusa Penida, our tour driver will provide the full-day tour including Kelingking Beach, Angel Billabong, Broken Bay and Bubu Beach. The beach tour will finish between 1400 hrs and 1430 hrs, after which you can enjoy snorkelling and canoeing at the harbour until the boat departure time. Tentative departure time from Nusa Penida is 1630 hrs (please read the notes).\n\nNusa Penida package inclusions: Bali hotel to harbour and harbour to Bali hotel transfers (private vehicle); return boat transfer from mainland Bali (sharing boat); private / charter car for the tour on Nusa Penida; 03 beaches - viewing point tour (Kelingking Bay, Angel Billabong and Broken Beach - all 03 places are seen from the viewing point only, as going down to the beach takes more than 02 hours at one location alone; you will get 20 - 30 minutes at each location due to the limited time); 01 beach tour - Bubu Beach, where you can visit the beach and enjoy swimming; snorkelling at the harbour (if time permits) - for the complimentary snorkelling, please connect with the staff at the harbour; canoeing at the harbour (if time permits) - for the complimentary canoeing, please connect with the staff at the harbour; the retribution fees (compulsory donation) for Nusa Penida of IDR 25,000 / adult and IDR 15,000 / child.\n\nNotes: Drivers in Nusa Penida are not fluent in English; most understand very little, as it is a remote island. Kindly use Google Translate, if needed. Please take 01 - 02 pairs of clothes with you for changing after the beaches or snorkelling. At Nusa Penida, depending on traffic conditions and boat arrival and departure timings, the tour can be shortened by the driver on the spot; if the tour is shortened, we will cut 01 beach. No instructor is provided for snorkelling and canoeing. No guide will be provided in Nusa Penida, even if a guide is selected in the booking.",
        meals: "Breakfast, lunch",
        stay: "Overnight, Bali",
      },
      {
        day: 4,
        title: "Kintamani Tour, Coffee Plantation & Bali Jungle Swing",
        description:
          "Kintamani tour, coffee plantation and the Bali Jungle Swing with unlimited swings and nests, and a complimentary small local lunch at the swing. Pick-up at 0800 - 0900 hrs from the hotel lobby. Today we will cover Kintamani (viewing Lake Batur and Mount Batur from the viewpoint); a coffee plantation, known for tasting different types of coffee, and spice plantations; Tegalalang Rice Terrace, with its landscape of lush green rice paddies across the photogenic Bali countryside; and Tegenungan Waterfall, known for the natural beauty of the area.\n\nBali Jungle Swing: unlimited swings - visitors can enjoy the swings without a time limit, as much as they like. There are 07 kinds of swing, consisting of 3 adult swings, 1 couple swing, 1 children's swing, 1 swing bed and 1 swing circle. Besides the swings, there are also 5 kinds of nests / photo places, consisting of 01 circle nest, 02 bird nests, 01 lovely nest and 01 chicken nest. There is also a beautiful stone and 1 gate (Heaven Gate), and a local lunch with Balinese coffee, tea and water.\n\nNotes: For children below 05 years of age, we will be providing lunch only. For children between 05 and 09 years of age, the parents will need to sign an approval form before doing the activities, and the children need to do these activities along with their parents only. Kindly cross-check with the driver for the exact pick-up timings.",
        meals: "Breakfast, lunch",
        stay: "Overnight, Bali",
      },
      {
        day: 5,
        title: "Check-Out & Airport Drop / Departure from Bali",
        description:
          "Check out from the hotel by 1200 hrs at the latest, or as per the hotel policy. Depending on your flight timings, you will be transferred from the hotel to Bali International Airport for your flight back home / to your next destination.\n\nNotes: 1. Kindly cross-check the pick-up time from the hotel / villa with the driver on the day prior to your flight, so there is no confusion between the guest and the driver. 2. If the flight departure time is before 1000 hrs in the morning or after 2200 hrs in the evening, there will be additional night charges for the transportation; in such a case, kindly cross-check with our sales team for the charges.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004682",
    travelWindow: "November 2026",
    travellers: "3 adults",
    priceRows: [{ label: "Per adult", amount: 20300 }],
    metaTitle: "Fascinating Bali - 5 Days / 4 Nights",
    metaDescription:
      "Bali in five days from ₹20,300 per adult - Padang Padang and the Uluwatu sunset, a full day on Nusa Penida, and Kintamani with the jungle swing. Land only.",
  },
  // 0038900-5D 4N-SINGAPORE-APRIL-11 ADULTS + 1 CHILD REVISED.pdf
  {
    slug: "charm-of-singapore-5d4n",
    title: "Charm of Singapore",
    summary:
      "Five days in Singapore with Indian lunches and dinners throughout - Bird Paradise and the Night Safari, a full day at Universal Studios, Sentosa with Madame Tussauds and Wings of Time, and Gardens by the Bay.",
    priceNote:
      "Land cost shown per person; excludes airfare. Exchange-rate movement at the time of full payment may result in adjustments.",
    destinationSlug: "singapore",
    category: "group-tours",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 63500,
    heroImage: d("singapore"),
    highlights: [
      "Bird Paradise and the Night Safari with tram ride",
      "A full day at Universal Studios",
      "Sentosa - cable car, Madame Tussauds (5-in-1) and Wings of Time",
      "Gardens by the Bay - Cloud Forest and Flower Dome",
      "Singapore panoramic drive",
    ],
    inclusions: [
      "04 nights' accommodation at the above-mentioned hotel",
      "04 rooms on double-sharing basis",
      "01 room on triple-sharing basis",
      "Daily breakfast (except on arrival day)",
      "04 lunches and 04 dinners at an Indian restaurant, without transfer",
      "Sightseeing as per the above-mentioned itinerary",
      "All entry tickets as per the itinerary",
      "All tours and transfers on private basis",
      "Rates are valid for the India market only",
      "All tickets are subject to availability; SIC transfers always depend on the arrival time",
      "Singapore visa",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "Early check-in or late check-out at the hotel",
      "Entry tickets not mentioned",
      "Other meals not mentioned, laundry, telephone calls, incidentals, room services",
      "Extra excursion or sightseeing apart from the suggested tour itinerary, special orders",
      "English-speaking tour guide",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival - Bird Paradise & Night Safari",
        description:
          "Arrival at Singapore Airport, pick-up from the airport and drop at the Singapore hotel. Visit Bird Paradise, followed by the Night Safari with tram ride. Overnight stay at the Singapore hotel.",
        meals: "Lunch, dinner",
        stay: "Overnight, Singapore",
      },
      {
        day: 2,
        title: "Universal Studios",
        description:
          "Breakfast at the hotel, then a day at Universal Studios. Drop at the hotel and overnight stay at the Singapore hotel.",
        meals: "Breakfast, meal voucher (SGD 20), dinner",
        stay: "Overnight, Singapore",
      },
      {
        day: 3,
        title: "Sentosa Tour",
        description:
          "Breakfast at the hotel, then the Sentosa tour with island admission, a one-way cable car ride, Madame Tussauds (5-in-1) and Wings of Time (1st show). Drop at the hotel and overnight stay at the Singapore hotel.",
        meals: "Breakfast, lunch, dinner",
        stay: "Overnight, Singapore",
      },
      {
        day: 4,
        title: "Gardens by the Bay",
        description:
          "Breakfast at the hotel, then Gardens by the Bay (Cloud Forest and Flower Dome - Jurassic World). Drop at the hotel and overnight stay at the Singapore hotel.",
        meals: "Breakfast, lunch, dinner",
        stay: "Overnight, Singapore",
      },
      {
        day: 5,
        title: "Singapore Panoramic Drive & Departure",
        description:
          "Breakfast at the hotel and check out. Singapore panoramic drive (2.5 hrs), then airport drop for departure.",
        meals: "Breakfast, lunch",
      },
    ],
    referenceNo: "003900",
    travelWindow: "April 2026",
    travellers: "11 adults, 1 child",
    rooms: 4,
    stays: [
      {
        destination: "Singapore",
        hotel: "Ibis Styles Albert Street or similar",
        nights: 4,
        meals: "Breakfast",
      },
    ],
    priceRows: [
      { label: "Per adult", amount: 63500 },
      { label: "Child without bed", amount: 41200 },
    ],
    metaTitle: "Charm of Singapore - 5 Days / 4 Nights",
    metaDescription:
      "Singapore in five days from ₹63,500 per adult - Bird Paradise and the Night Safari, Universal Studios, Sentosa and Gardens by the Bay, with Indian lunches and dinners and the visa included. Land only.",
  },
  // SINGA.pdf
  {
    slug: "charm-of-singapore-4d3n",
    title: "Charm of Singapore",
    summary:
      "Four days in Singapore - a panoramic drive and Gardens by the Bay on arrival, a full day at Universal Studios, and Sentosa with the cable car, SkyHelix and Wings of Time.",
    priceNote:
      "Land cost shown per adult; excludes airfare and the Singapore visa (INR 4,500). Exchange-rate movement at the time of full payment may result in adjustments.",
    destinationSlug: "singapore",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 47500,
    heroImage: x("gardensByTheBay"),
    highlights: [
      "Singapore panoramic drive",
      "Gardens by the Bay - Cloud Forest and Flower Dome",
      "A full day at Universal Studios",
      "Sentosa - cable car, SkyHelix and Wings of Time",
    ],
    inclusions: [
      "03 nights' accommodation on double-sharing basis at the above-mentioned hotel",
      "Meal plan - daily breakfast (except on arrival day)",
      "Sightseeing as per the above-mentioned itinerary",
      "All entry tickets as per the itinerary",
      "All tours and transfers on private basis",
      "Rates are valid for the India market only",
      "All tickets are subject to availability; SIC transfers always depend on the arrival time",
      "GST",
    ],
    exclusions: [
      "Early check-in or late check-out at the hotel",
      "Other meals not mentioned, laundry, telephone calls, incidentals, room services",
      "Extra excursion or sightseeing apart from the suggested tour itinerary, special orders",
      "Round-trip airfare",
      "Singapore visa",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival - Panoramic Drive & Gardens by the Bay",
        description:
          "Arrival at the airport and pick-up. Singapore panoramic drive (2.5 hrs), then Gardens by the Bay (Cloud Forest and Flower Dome - Jurassic World). Drop at the hotel and overnight stay.",
        stay: "Overnight, Singapore",
      },
      {
        day: 2,
        title: "Universal Studios",
        description:
          "Breakfast at the hotel, then a day at Universal Studios. Drop at the hotel and overnight stay.",
        meals: "Breakfast",
        stay: "Overnight, Singapore",
      },
      {
        day: 3,
        title: "Sentosa Tour",
        description:
          "Breakfast at the hotel, then the Sentosa tour with island admission, a one-way cable car ride, SkyHelix and Wings of Time (1st show). Drop at the hotel and overnight stay.",
        meals: "Breakfast",
        stay: "Overnight, Singapore",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Breakfast at the hotel, check out and drop at the airport for departure.",
        meals: "Breakfast",
      },
    ],
    travelWindow: "February 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Singapore",
        hotel: "Ibis Styles Albert Street (Standard) or similar",
        nights: 3,
        meals: "Breakfast",
      },
    ],
    priceRows: [
      { label: "Per adult", amount: 47500 },
      { label: "Visa cost", amount: 4500 },
    ],
    metaTitle: "Charm of Singapore - 4 Days / 3 Nights",
    metaDescription:
      "Singapore in four days from ₹47,500 per adult - a panoramic drive, Gardens by the Bay, Universal Studios and Sentosa with the cable car, SkyHelix and Wings of Time. Land only.",
  },
  // 004127 - 4D 3N - PHU QUOC - JUN - 4 ADULTS, 1 INFANT.pdf
  {
    slug: "charm-of-phu-quoc-4d3n",
    title: "Charm of Phu Quoc",
    summary:
      "Four days on Vietnam's pearl island - Grand World on arrival, VinWonders and Vinpearl Safari, and a speedboat day across the southern islands, back by the cable car at sunset.",
    priceNote:
      "Land cost shown per adult; infants free. Excludes airfare - flight fare approx. INR 29,800 - 35,000 per adult and INR 3,500 - 4,500 per infant ex Kochi, subject to change. Exchange-rate movement at the time of full payment may result in adjustments.",
    destinationSlug: "vietnam",
    category: "family",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 36700,
    heroImage: d("vietnam"),
    highlights: [
      "Grand World and the Bear Museum",
      "VinWonders Phu Quoc and Vinpearl Safari",
      "Speedboat tour of the southern islands with snorkelling",
      "Hon Thom cable car at sunset and the Kiss of the Sea show",
    ],
    inclusions: [
      "All transportation with A/C as mentioned",
      "Accommodation in a double room with daily breakfast (except on arrival day)",
      "English-speaking guide at sightseeing time",
      "Meals as mentioned in the programme: (B) breakfast, (L) lunch, (D) dinner",
      "Complimentary mineral water on tour (01 bottle / pax / day)",
      "All sightseeing tickets",
      "GST",
    ],
    exclusions: [
      "Airfare (international and domestic)",
      "TCS",
      "Early check-in or late check-out at the hotel (check-in time is after 1400/1500 hrs and check-out before 1100/1200 hrs)",
      "Drinks and other meals not clearly mentioned, laundry, telephone calls, incidentals",
      "eVisa to Vietnam (if any)",
      "Surcharge for special requests on food and meals",
      "Insurance, gratuities and personal expenses",
      "Compulsory tipping for guide and driver - USD 3 / pax / day",
      "Surcharge for public holidays (if any), government tax",
      "Any extra excursion or sightseeing apart from the suggested tour itinerary",
      "Any personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Phu Quoc & Grand World",
        description:
          "Airport pick-up and a visit to Grand World (private transfer, no guide). Upon your arrival, you will be escorted to your hotel for some rest. Then transfer to visit Grand World, an entertainment and shopping complex belonging to Phu Quoc United Center. It is located right at Long Beach in Ganh Dau Commune, a well-known place on Phu Quoc Island. Although it was only inaugurated at the end of 2020, it has quickly become one of the must-see destinations on the pearl island for any tourist. Explore: the Bear Museum. Excluded: the boat trip on the Venice River and The Quintessence of Vietnam show.",
        meals: "None",
        stay: "Overnight, Phu Quoc",
      },
      {
        day: 2,
        title: "VinWonders & Vinpearl Safari",
        description:
          "Private transfer, no guide. Morning: visit VinWonders Phu Quoc, Vietnam's largest theme park. Enjoy the various themed zones like the Seashell Aquarium (the largest turtle-shaped aquarium in Vietnam) and the Typhoon World water park. Afternoon: head to Vinpearl Safari Phu Quoc to see diverse wildlife in a semi-wild environment and catch the animal shows. Evening: return to your accommodation.",
        meals: "Breakfast",
        stay: "Overnight, Phu Quoc",
      },
      {
        day: 3,
        title: "Phu Quoc 4 Islands & Cable Car (SIC Tour)",
        description:
          "7:15 pick-up from your hotel lobby or pick-up point by sharing bus. Arrive at An Thoi harbour and board the speedboat. Visit 3 islands in the south: Mong Tay Island - enjoy the beach; May Rut Island - take photographs, fly cam with SUP; Gam Ghi Island - snorkelling at the coral reef, exploring Seawalker (at your own expense). The speedboat then arrives at Thom Island: enjoy the water park, with more than 20 modern games from the world's leading manufacturers. Back by cable car (around 25 mins): enjoy the sunset and a panoramic view over the islands. Explore Kiss Bridge and the Kiss of the Sea show, then transfer to your hotel by private transfer.",
        meals: "Breakfast, lunch",
        stay: "Overnight, Phu Quoc",
      },
      {
        day: 4,
        title: "Phu Quoc Departure",
        description:
          "After breakfast at the hotel, you have the morning free to relax or shop for souvenirs before being transferred to the airport for the flight back home.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004127",
    travelWindow: "June 2026",
    travellers: "4 adults, 1 infant",
    rooms: 2,
    stays: [
      {
        destination: "Phu Quoc",
        hotel: "Gaia Hotel (3 star) or similar",
        nights: 3,
        meals: "Breakfast",
      },
    ],
    priceRows: [
      { label: "Per adult", amount: 36700 },
      { label: "Infant (free of cost)", amount: 0 },
    ],
    metaTitle: "Charm of Phu Quoc - 4 Days / 3 Nights",
    metaDescription:
      "Phu Quoc in four days from ₹36,700 per adult - Grand World, VinWonders and Vinpearl Safari, and a speedboat day across the southern islands with the sunset cable car. Land only.",
  },
  // 004752 VIETNAM 3N4D 2A NOV 2026.pdf
  {
    slug: "fascinating-vietnam-4d3n",
    title: "Fascinating Vietnam",
    summary:
      "Four days in Hanoi - explore the capital's historic landmarks, Old Quarter and Train Street, discover the scenic beauty of Ninh Binh, and enjoy a day cruise through the spectacular Halong Bay.",
    priceNote:
      "Land cost and visa cost shown per person; excludes flights. Exchange-rate movement at the time of full payment may result in adjustments.",
    destinationSlug: "vietnam",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 24000,
    heroImage: d("vietnam"),
    highlights: [
      "Hanoi City Tour",
      "Ninh Binh",
      "Halong Bay",
    ],
    inclusions: [
      "Accommodation on double-sharing basis",
      "Breakfast at all hotels",
      "Hanoi half-day city tour - round-trip transfers",
      "Ha Long Bay cruise with lunch on SIC basis",
      "Ninh Binh tour with lunch on SIC basis",
      "All airport transfers on private basis",
      "GST",
    ],
    exclusions: [
      "International & domestic flight tickets",
      "Meals not mentioned in the itinerary",
      "Visa",
      "Flight",
      "Anything not mentioned in the inclusions is excluded",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Hanoi - Half-Day City Tour",
        description:
          "Upon arrival in Hanoi, you will be met at the airport and transferred privately to your hotel for check-in and leisure. Later, proceed for a half-day city tour of Hanoi with round-trip transfers, exploring the city's major landmarks and experiencing its rich culture and vibrant atmosphere. After the tour, return to your hotel and enjoy the rest of the day at leisure.",
        meals: "None",
        stay: "Overnight, Hanoi",
      },
      {
        day: 2,
        title: "Ninh Binh Tour with Lunch (Hoa Lu - Trang An - Mua Cave)",
        description:
          "Your day begins with a morning pick-up from your hotel in Hanoi, followed by a scenic drive of approximately 2–2.5 hours to Ninh Binh. Upon arrival, you will visit Hoa Lu, the ancient capital of Vietnam, where you can explore the historic temples of King Dinh and King Le surrounded by dramatic limestone mountains. Afterward, enjoy a traditional Vietnamese lunch at a local restaurant before continuing to Trang An, a UNESCO-listed landscape famous for its serene waterways and spectacular karst formations. Here, you will embark on a peaceful sampan boat ride through a network of caves, rivers, and lush valleys, experiencing the natural beauty often referred to as \"Halong Bay on land.\" The tour concludes with a visit to Mua Cave, where you can climb to the top for a breathtaking panoramic view of the Tam Coc valley and surrounding limestone peaks. Later in the afternoon, return to Hanoi with drop-off at your hotel in the evening.",
        meals: "Breakfast",
        stay: "Overnight, Hanoi",
      },
      {
        day: 3,
        title: "Ha Long Bay Day Cruise with Lunch on SIC",
        description:
          "Begin your day with breakfast at the hotel. Your tour starts from Hanoi at 8:00 AM. Our guide will meet you in the hotel lobby and transfer you to Tuan Chau Marina. Upon arrival, check in and board your cruise. Enjoy a delicious lunch served on board as you sail through Halong Bay, a UNESCO World Heritage Site known for its 1,600+ limestone islands. Explore the magnificent Sung Sot (Surprising) Grotto, one of the most impressive caves in the bay. Discover Luon Cave, a beautiful water cave, by small boat or kayak. Visit Titop Island, where you can swim on the sandy beach or climb to the viewpoint for breathtaking panoramic views of Halong Bay. Enjoy a relaxing sunset experience on the boat with complimentary red wine, French fries, cakes, and seasonal fruits. 17:45–18:00 - Cruise returns to Ha Long Harbor. 20:30–20:45 - Arrival back in Hanoi. Overnight stay in Hanoi.",
        meals: "Breakfast",
        stay: "Overnight, Hanoi",
      },
      {
        day: 4,
        title: "Check-Out & Airport Drop / Departure from Hanoi",
        description:
          "After breakfast, proceed with a private transfer from your hotel to Noi Bai International Airport, Hanoi, for your onward journey. The transfer will be arranged as per your flight departure time.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004752",
    travelWindow: "November 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Hanoi",
        hotel: "Golden Holiday Hotel or similar",
        nights: 3,
        meals: "Breakfast",
      },
    ],
    priceRows: [
      { label: "Per adult", amount: 24000 },
      { label: "Visa cost", amount: 3800 },
    ],
    metaTitle: "Fascinating Vietnam - 4 Days / 3 Nights",
    metaDescription:
      "Vietnam in four days from ₹24,000 per adult - a Hanoi city tour with the Old Quarter and Train Street, Ninh Binh's Trang An and Mua Cave, and a Halong Bay day cruise. Land only.",
  },
  // 004872 VIETNAM 5D 4N 2A APRIL.pdf
  {
    slug: "fascinating-vietnam-5d4n",
    title: "Fascinating Vietnam",
    summary:
      "Five days in Vietnam - the capital's Old Quarter and Train Street, a cruise through Halong Bay, and Ninh Binh with the Hoa Lu ancient capital.",
    priceNote:
      "Land cost and visa cost shown per person; excludes flights. Exchange-rate movement at the time of full payment may result in adjustments.",
    destinationSlug: "vietnam",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 40100,
    heroImage: d("vietnam"),
    highlights: [
      "Hanoi",
      "Ninh Binh",
      "Halong Bay",
    ],
    inclusions: [
      "All transportation with A/C as mentioned",
      "Accommodation in a double-sharing room with daily breakfast, except on arrival day",
      "English-speaking guide at sightseeing time",
      "Meals as mentioned in the itinerary (B for breakfast, L for lunch)",
      "Complimentary mineral water on tour (1 bottle / pax / day)",
      "All sightseeing tickets",
      "Halong Bay boat trip with full meals",
      "GST",
    ],
    exclusions: [
      "International & domestic flight tickets (including Hanoi–Da Nang)",
      "Drinks and other meals not clearly mentioned",
      "eVisa to Vietnam",
      "Surcharge for special requests on food and meals",
      "Insurance, gratuities and personal expenses",
      "Compulsory tipping for guides and drivers",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Hanoi Arrival - Half-Day City Tour",
        description:
          "Welcome to Hanoi, Vietnam! On arrival at Noi Bai airport, meet our guide; it is a 35-minute drive to the centre of Hanoi, then check in at the hotel. Transfer to visit the beautiful Tran Quoc Pagoda on the shores of West Lake, and the Ho Chi Minh complex, including Ho Chi Minh's Mausoleum - the final resting place of Vietnam's great father, \"Uncle Ho\" - and President Ho Chi Minh's stilt house, where he lived on and off from 1958 to 1969. Next is the One Pillar Pagoda, a group of structures consisting of a pagoda and a tower built in the middle of a square lake.\n\nBack downtown for refreshment by Hoan Kiem Lake (Restored Sword Lake) and the Old Quarter, also known as the 36 streets. This bustling area of narrow streets is home to literally thousands of small businesses and shopkeepers, and is a great place to explore with plenty of photo opportunities. We will also have a chance to check in at Train Street, one of the most renowned tourist destinations in the capital - a tiny, winding street tucked away in one of Hanoi's back streets, surrounded by tightly clustered, tall, narrow houses. The train passes by the backyards of these families a couple of times each day.",
        meals: "None",
        stay: "Overnight, Hanoi",
      },
      {
        day: 2,
        title: "Hanoi - Ninh Binh - Hanoi (Group Tour)",
        description:
          "7:15 - 7:30: our tour guide will pick you up from your hotel and take you to Ninh Binh province, about 120 km from Hanoi. 9:30: a short 20-minute break to relax. 10:30: the first destination is the Hoa Lu ancient capital, the first capital of Vietnam, where you will learn why the capital was moved to present-day Hanoi. You will be impressed by the outstanding architecture of the temples of King Dinh and King Le, the first and second emperors of ancient Vietnam, built in the 17th century, and can feel the ancient atmosphere of Hoa Lu.\n\n11:45: buffet lunch at a restaurant with plenty of local food - goat meat, fried rice and more; vegetarian food is always available in the buffet. 13:00: visit Tam Coc by 1.5-hour bamboo boat. During the boat trip you will be surprised by the charming beauty of the paddy fields, river, water, clouds, sky and stunning cave system - all together a masterpiece the Vietnamese call \"Halong Bay on land\". 14:30: continue with 45 minutes of cycling around the village to discover the life of the local people. 15:30: get on the bus to Mua Cave (Dancing Cave). Walk up almost 500 steps to reach the top of Lying Dragon Mountain for an amazing panoramic view of Tam Coc. 16:30 - 17:00: get on the bus to return to Hanoi. 19:30: arrive in Hanoi and drop-off at the hotel.",
        meals: "Breakfast, lunch",
        stay: "Overnight, Hanoi",
      },
      {
        day: 3,
        title: "Hanoi - Halong Bay (Group Tour)",
        description:
          "Morning pick-up at 8:00 AM from your hotel for the transfer to Ha Long Bay, about 160 km or a 3.5-hour drive away. Arrive in Ha Long City at 11:30 AM and check in aboard the booked junk right after the welcome drink is served. Start cruising while having lunch on board and enjoy the mighty bay view. Ha Long Bay means Descending Dragon Bay in Vietnamese, as legend has it that it was where a holy dragon landed from the sky. The bay, famous as one of the world's wonders and a heritage site whose formation dates back 500 million years, consists of around 2,000 karst islands and islets scattered over an area of 1,553 km². Relax and enjoy the bay view at sunset, have dinner, go fishing at 09:00 PM and spend the night on board.\n\nPlease note: a sharing limousine bus runs Hanoi - Ha Long - Hanoi for groups of 1-9 pax, and a private transfer for groups of 10 pax or more.",
        meals: "Breakfast, lunch, dinner (local food)",
        stay: "Overnight on cruise, Halong Bay",
      },
      {
        day: 4,
        title: "Halong Bay - Hanoi",
        description:
          "Early risers can enjoy the splendid yet tranquil view of the bay at the crack of dawn. Breathe the fresh sea air, feel the morning breeze and hear the sounds of the birds above. Have breakfast and cruise to visit Human Head Island and Tortoise Island. Continue cruising into Bai Tu Long Bay to discover the adjacent bay of \"The Little Dragon Bowing to His Mother\", as it is named. Check out and have lunch on board while heading to shore. Disembark and transfer to Hanoi.",
        meals: "Breakfast, brunch",
        stay: "Overnight, Hanoi",
      },
      {
        day: 5,
        title: "Hanoi - Departure",
        description:
          "After breakfast, the morning is free to relax or shop for souvenirs before your transfer to the airport for the flight home.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004872",
    travelWindow: "April 2027",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Hanoi",
        hotel: "Anise Hotel or similar",
        nights: 3,
        meals: "Breakfast",
      },
      {
        destination: "Halong Bay",
        hotel: "La Regina Classic Cruise or similar",
        nights: 1,
        meals: "Breakfast",
      },
    ],
    priceRows: [
      { label: "Per adult", amount: 40100 },
      { label: "Visa cost", amount: 3800 },
    ],
    metaTitle: "Fascinating Vietnam - 5 Days / 4 Nights",
    metaDescription:
      "Vietnam in five days from ₹40,100 per adult - Hanoi's Old Quarter and Train Street, Hoa Lu and Tam Coc in Ninh Binh, and a night aboard a Halong Bay cruise. Land only.",
  },
  // 4N5D VIETNAM  2A NOV.pdf
  {
    slug: "vietnam-halong-day-cruise-5d4n",
    title: "Fascinating Vietnam",
    summary:
      "Five days in Vietnam - the capital's Old Quarter and Train Street, a day cruise through Halong Bay, and Ninh Binh with the Hoa Lu ancient capital.",
    priceNote:
      "Land cost and visa cost shown per person; excludes flights. Price is valid for 3 days from the date of this proposal and may change thereafter; exchange-rate movement at the time of full payment may result in adjustments.",
    destinationSlug: "vietnam",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 38100,
    heroImage: d("vietnam"),
    highlights: ["Hanoi", "Ninh Binh", "Halong Bay"],
    inclusions: [
      "All transportation with A/C as mentioned",
      "Accommodation in double-sharing room with daily breakfast, except on arrival day",
      "English-speaking guide at sightseeing time",
      "Meals as mentioned in the itinerary (B for breakfast, L for lunch)",
      "Complimentary mineral water on tour (1 bottle / pax / day)",
      "All sightseeing tickets",
      "Halong bay boat trip with full meal",
      "GST",
    ],
    exclusions: [
      "International & domestic flight tickets (including Hanoi–Da Nang)",
      "Drinks and other meals not clearly mentioned",
      "eVisa to Vietnam",
      "Surcharge for special requests on food and meals",
      "Insurance, gratuities and personal expenses",
      "Compulsory tipping for guides and drivers",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Hanoi Arrival - Half-Day City Tour",
        description:
          "Welcome to Hanoi - Vietnam! Upon arrival, it takes us 35 minutes driving to the centre of Hanoi, then check-in at the hotel. Arrival in Noibai airport, meet our guide and transfer to visit the beautiful Tran Quoc Pagoda located on the shores of West Lake, and visit the Ho Chi Minh complex, including Ho Chi Minh's Mausoleum - the final resting place of Vietnamese great father or Uncle Ho, and President Ho Chi Minh's stilt house, where he lived on and off from 1958 to 1969. The next place to move to is One Pillar Pagoda - a group of structures consisting of a pagoda and a tower built in the middle of a square lake.\n\nBack to downtown for refreshment by Hoan Kiem Lake, visit Hoan Kiem Lake (Restored Sword Lake) with the Old Quarter, also known as the 36 streets. This bustling area of narrow streets is home to literally thousands of small businesses and shopkeepers. It's a great place to explore with plenty of photo opportunities.\n\nWe will also have a chance to check in at the train street - one of the most renowned tourist destinations in the capital. It is a tiny, winding street tucked away in one of Hanoi's back streets, surrounded by tightly clustered, tall, narrow houses. The train travels by the backyards of these families a couple of times each day.",
        meals: "None",
        stay: "Overnight, Hanoi",
      },
      {
        day: 2,
        title: "Hanoi - Ninh Binh - Hanoi (B/L) Group Tour",
        description:
          "7h15 - 7h30: Our tour guide will pick you up from your hotel. We take you to Ninh Binh province, about 120 km from Hanoi city.\n\n9h30: Have a short break for 20 minutes to relax.\n\n10h30: The first destination in this trip is Hoa Lu ancient capital. This is the first capital of Vietnam. Come to visit Hoa Lu, you will learn about why the capital was moved to Hanoi nowadays. You are impressed by the outstanding architecture when entering the temples of King Dinh and King Le, the first and second emperors of ancient Vietnam, built in the 17th century. Try to feel the ancient atmosphere in Hoa Lu ancient capital.\n\n11h45: Have buffet lunch in the restaurant with a lot of local foods - goat meat, fried rice… Vegetarian food is always available in the buffet lunch.\n\n13h00: Visit Tam Coc by 1.5-hour bamboo boat. During the boat trip, you will be surprised by the charming beauty here with paddy field, river, water, cloud, sky and stunning cave system. All make a masterpiece which Vietnamese people called \"Halong Bay on land\".\n\n14h30: Continue the tour with 45 minutes of cycling around the village to discover the life of local people.\n\n15h30: Get on the bus to go to Mua Cave (Dancing Cave). Walk up almost 500 steps, you can reach the top of Lying Dragon Mountain and have an amazing panoramic view of Tam Coc from here.\n\n16h30 - 17h00: Get on the bus to return to Hanoi.\n\n19h30: Arrive in Hanoi and get dropped off at the hotel. The trip ends.",
        meals: "Breakfast, Lunch",
        stay: "Overnight, Hanoi",
      },
      {
        day: 3,
        title: "Hanoi - Halong Bay (B/L/D) Group Tour",
        description:
          "Morning pickup at 8:00 AM from your hotel for transfer to Ha Long Bay, which is about 160 km or a 3.5-hour drive away. Arrive in Ha Long City at 11:30 AM and check in aboard the booked junk right after the welcome drink is served. Start cruising while having lunch on board and enjoy the mighty bay view. Ha Long Bay means Descending Dragon Bay in Vietnamese, as legend has it that it was where a holy dragon landed down from the sky. The bay, famous as one of the world's wonders and heritage sites whose formation dates back 500 million years, consists of around 2,000 karst islands and islets scattered over an area of 1,553 km2. Relax to enjoy the bay view at sunset, have dinner after, go fishing at 09:00 PM and spend a night on board.\n\nPlease note: Sharing limousine bus Hanoi - Ha Long - Hanoi for groups of 1-9 pax, and private transfer for groups from 10 pax.",
        meals: "Breakfast, Lunch, Dinner",
        stay: "Overnight on cruise",
      },
      {
        day: 4,
        title: "Halong Bay - Hanoi (B/BR)",
        description:
          "Early risers can enjoy the splendid yet tranquil view of the bay at the crack of dawn. Breathe the sea's fresh air, feel the morning breeze and hear the sounds of birds above. Have breakfast and cruise to visit Human Head shaped island and Tortoise Island. Continue to cruise into Bai Tu Long Bay to discover the adjacent bay of \"The Little Dragon Bowing to His Mother\", as it is named. Check out and have lunch on board while heading to shore. Disembark and transfer to Hanoi.",
        meals: "Breakfast, Brunch",
        stay: "Overnight, Hanoi",
      },
      {
        day: 5,
        title: "Hanoi - Departure (B)",
        description:
          "After breakfast, the morning is free to relax or shop for souvenirs before your transfer to the airport for the flight home.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004864",
    travelWindow: "November 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      { destination: "Hanoi", hotel: "Anise Hotel or similar", nights: 3, meals: "Breakfast" },
      { destination: "Halong Bay", hotel: "La Regina Classic Cruise or similar", nights: 1, meals: "Breakfast" },
    ],
    stayNote:
      "Hotel categories are confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Exchange rate fluctuations at the time of full payment will be applicable and may result in price adjustments.",
    priceRows: [
      { label: "Per adult - land cost", amount: 38100 },
      { label: "Per adult - visa cost", amount: 3800 },
    ],
    metaTitle: "Fascinating Vietnam - 5 Days / 4 Nights",
    metaDescription:
      "Vietnam in five days from ₹38,100 per adult - Hanoi's Old Quarter and Train Street, Hoa Lu and Tam Coc at Ninh Binh, and a night aboard a Halong Bay cruise. Land only.",
  },
  // 004130 - 5D 4N - MALAYSIA, LANGKAWI - SEP - 20 ADULTS.pdf
  {
    slug: "charm-of-malaysia-langkawi-5d4n",
    title: "Charm of Malaysia - Langkawi",
    summary:
      "Kuala Lumpur and Langkawi in five days - Putrajaya, Batu Caves and the Genting Skyway, then island hopping, the SkyCab and the Sky Bridge, with a Malayali tour manager throughout.",
    priceNote:
      "Total package cost per adult, including the current flight fare. The package price offered is valid for 3 days only and may change thereafter; the offered flight fare is valid for today only and is subject to change thereafter. Exchange rate fluctuations at the time of full payment will be applicable and may result in price adjustments.",
    destinationSlug: "malaysia",
    category: "group-tours",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 77000,
    heroImage: d("malaysia"),
    highlights: [
      "Putrajaya and Thean Hou Temple",
      "Batu Caves and the Genting Skyway",
      "Langkawi island hopping",
      "Langkawi SkyCab and Sky Bridge",
      "Eagle Square, Langkawi",
    ],
    inclusions: [
      "02 nights' accommodation @ Kuala Lumpur",
      "02 nights' accommodation @ Langkawi",
      "10 double rooms",
      "05 breakfasts (04 complimentary from hotel - should adhere to hotel timing)",
      "05 lunches (01 Muhibba)",
      "04 dinners",
      "Coach + English-speaking guide - KL",
      "Mini coach + English-speaking guide - LGK (except island hopping boat ride - LGK)",
      "Meal plan as mentioned in the itinerary",
      "Meet & greet at the airport",
      "Sightseeing as per the above-mentioned itinerary",
      "All entry tickets as per the itinerary",
      "Malayali tour manager",
      "Current flight fare",
      "GST",
    ],
    exclusions: [
      "Round trip air fare",
      "Early check-in at hotel, late check-out at hotel",
      "Check-in time in hotel is after 1400/1500 hours and check-out is before 1100/1200 hours",
      "Any extra excursion or sightseeing apart from the suggested tour itinerary",
      "Any personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
      "Other meals not mentioned, laundry, telephone calls, incidentals",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kuala Lumpur",
        description:
          "Upon arrival at Kuala Lumpur International Airport, meet and greet with our local representative, followed by a comfortable transfer for your city sightseeing tour. Begin your journey with a visit to Putrajaya, the administrative capital of Malaysia, well known for its beautifully planned architecture, scenic bridges, landscaped gardens, and modern Islamic-inspired buildings.\n\nLater, proceed to visit the stunning Thean Hou Temple, one of the oldest and largest Chinese temples in Southeast Asia. Admire the beautiful architecture, traditional decorations, and panoramic city views while experiencing the peaceful spiritual atmosphere of the temple.\n\nAfter completing the sightseeing tour, transfer to the hotel for check-in. Please note that the standard hotel check-in time is 3:00 PM, and guests may have to wait at the hotel lobby until the rooms are ready.\n\nIn the evening, proceed for a 4-hour city tour covering the lively Bukit Bintang area, famous for its vibrant nightlife, shopping streets, cafés, and entertainment attractions. Continue the tour with a photo stop at the iconic Petronas Twin Towers, where you can capture memorable pictures of Kuala Lumpur's most famous landmark beautifully illuminated at night.\n\nAfter the tour, return to the hotel for an overnight stay in Kuala Lumpur.",
        stay: "Overnight, Kuala Lumpur",
      },
      {
        day: 2,
        title: "Batu Caves & Genting Highlands Tour",
        description:
          "After breakfast at the hotel, proceed for an exciting full-day excursion to Batu Caves, one of Malaysia's most famous Hindu pilgrimage sites. Admire the towering golden statue of Lord Murugan and explore the impressive limestone caves surrounded by scenic hills. Guests can climb the colorful staircase leading to the temple cave and enjoy the vibrant cultural atmosphere of the attraction.\n\nLater, continue your journey towards Genting Highlands, a popular hill resort located amidst the cool mountain ranges. Enjoy breathtaking views during the ride on the famous Genting Skyway with included 2-way cable car tickets, offering panoramic scenery of lush rainforests and mist-covered hills.\n\nSpend leisure time exploring Genting Highlands, known for its entertainment attractions, shopping outlets, restaurants, indoor activities, and lively atmosphere. Guests can also try their luck at the casino or enjoy various entertainment options available at the resort.\n\nPlease note that the included cable car tickets are standard tickets, and guests may upgrade to express tickets at an additional cost of RM 20 per person, subject to availability.\n\nAfter the tour, return to the hotel for an overnight stay in Kuala Lumpur.",
        stay: "Overnight, Kuala Lumpur",
      },
      {
        day: 3,
        title: "Kuala Lumpur City Tour & Flight to Langkawi",
        description:
          "After breakfast at the hotel, complete the check-out formalities and proceed for a full-day Kuala Lumpur city tour covering the major landmarks of the city. Begin the sightseeing tour with a visit to the National Mosque of Malaysia, a beautiful Islamic landmark well known for its unique contemporary design and peaceful surroundings. Later, visit the historic National Monument, built in honor of Malaysia's fallen heroes.\n\nProceed for a photo stop at the famous KL Tower, offering spectacular views of the city skyline from the outside. The tour then continues to Merdeka Square, also known as Independence Square, a significant historical landmark surrounded by colonial-era architecture.\n\nLater, visit the magnificent Istana Negara, the official residence of the King of Malaysia, where guests can enjoy a photo stop outside the palace gates.\n\nAfter completing the city tour, proceed to Kuala Lumpur International Airport for your departure flight to Langkawi.\n\nUpon arrival at Langkawi, our representative will take you to the vehicle and proceed to Cenang for hotel check-in. After freshening up, you can explore Cenang beach shows, shopping, food varieties etc…",
        stay: "Overnight, Langkawi",
      },
      {
        day: 4,
        title: "Langkawi Island Tour & Island Hopping Experience",
        description:
          "After breakfast at the hotel, proceed for an exciting full-day island tour in Langkawi featuring some of the destination's most popular attractions and scenic experiences. Begin the day with an enjoyable island hopping boat ride, where you can witness the breathtaking beauty of Langkawi's tropical islands, crystal-clear waters, limestone formations, and lush greenery.\n\nThe tour includes visits around famous islands such as Dayang Bunting Island, well known for its picturesque freshwater lake and stunning natural surroundings. Guests who wish to access the freshwater lake are required to pay the conservation fee directly, which is RM 20 per adult and RM 10 per child.\n\nLater, continue to Oriental Village, a popular entertainment and shopping destination located near the foothills of Machinchang Mountain. Enjoy the included attractions such as the famous Langkawi SkyCab cable car ride offering spectacular panoramic views of the island and surrounding sea.\n\nExperience the thrilling Langkawi Sky Bridge, one of the world's longest curved suspension bridges, along with attractions including SkyGlide, SkyDome, SkyRex, and the interactive 3D Art Museum, all with included entry tickets.\n\nAfter a fun-filled day exploring the natural beauty and attractions of Langkawi, return to the hotel for an overnight stay.",
        stay: "Overnight, Langkawi",
      },
      {
        day: 5,
        title: "Langkawi Sightseeing & Departure",
        description:
          "After breakfast at the hotel, complete the check-out formalities and proceed for a short sightseeing tour of Langkawi. Begin with a visit to the iconic Eagle Square, also known as Dataran Lang, one of the most famous landmarks in Langkawi. Admire the massive eagle statue overlooking the waterfront and enjoy the scenic views of the surrounding sea and marina.\n\nLater, continue to Langkawi Tower, where guests can enjoy panoramic views of the island and its beautiful landscapes from the observation area.\n\nAfter completing the sightseeing tour, proceed to Langkawi International Airport for your departure flight with unforgettable memories of your Malaysia holiday. End of Services - Have a Pleasant Journey!",
      },
    ],
    referenceNo: "004130",
    travelWindow: "September 2026",
    travellers: "20 adults",
    rooms: 10,
    stays: [
      { destination: "Kuala Lumpur", hotel: "Kingston Bukit Bintang or similar", nights: 2, meals: "Breakfast" },
      { destination: "Langkawi", hotel: "Hotel Nadias Cenang or similar", nights: 2, meals: "Breakfast" },
    ],
    stayNote:
      "Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply. Vehicle will run only till the point it is allowed in a particular destination; if the guest wants to travel/visit beyond that point, local transport will have to be arranged by the guest. Vehicle is used strictly as per the itinerary and not for disposal. The sightseeing mentioned in the itinerary will definitely be covered as planned; however, the exact timings and days of the sightseeing will be confirmed only one day prior to departure through the confirmation voucher.",
    priceRows: [{ label: "Per adult - total package cost", amount: 77000 }],
    bookingPolicy:
      "Tour: 50% at the time of confirmation, 50% at 30 days prior to departure date. Air: 100% at the time of confirmation.",
    cancellationPolicy:
      "Tour: 50% before 30 days of travel date, 100% within 30 days of travel date. Air: as per airline policy.",
    metaTitle: "Charm of Malaysia - Langkawi - 5 Days / 4 Nights",
    metaDescription:
      "Kuala Lumpur and Langkawi group tour in five days from ₹77,000 per adult - Batu Caves, the Genting Skyway, island hopping, the SkyCab and Sky Bridge, with a Malayali tour manager.",
  },
  // 004946 MALAYSIA 2A 3N4D JANUARY 2027.pdf
  {
    slug: "charm-of-malaysia-4d3n",
    title: "Charm of Malaysia",
    summary:
      "Four days across Kuala Lumpur - Putrajaya's modern skyline, the golden statue and limestone caves at Batu, a cable-car ride into the hills at Genting, and the city's own landmarks.",
    priceNote:
      "Package cost shown per person; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "malaysia",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 28699,
    heroImage: x("kualaLumpur"),
    highlights: ["Putrajaya", "Batu Caves", "Genting Highlands"],
    inclusions: [
      "3 nights' accommodation at the above-mentioned hotel",
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
        title: "Arrival - Putrajaya Tour",
        description:
          "Upon arrival at Kuala Lumpur International Airport, you will be met and greeted by our representative and transferred to your hotel in Kuala Lumpur, with a visit to Putrajaya en route. Upon arrival at the hotel, you will proceed with check-in. Standard hotel check-in applies, and guests may have to wait in the hotel lobby until the room is ready. In the evening, enjoy a 2-hour tour of Bukit Bintang, one of Kuala Lumpur's most vibrant shopping and entertainment districts. After the tour, return to the hotel for an overnight stay in Kuala Lumpur.",
        meals: "None",
        stay: "Overnight, Kuala Lumpur",
      },
      {
        day: 2,
        title: "Genting Highlands, Batu Caves & Cable Car",
        description:
          "After breakfast, begin your day with a visit to the iconic Batu Caves, one of Malaysia's most famous Hindu pilgrimage sites. Continue to Genting Highlands, a popular hill resort offering cool weather, entertainment, and scenic views. Enjoy a round-trip ride on the Genting Skyway Cable Car, which is included in your package.",
        meals: "Breakfast only",
        stay: "Overnight, Kuala Lumpur",
      },
      {
        day: 3,
        title: "Kuala Lumpur City Tour",
        description:
          "After breakfast, embark on a half-day Kuala Lumpur city tour lasting approximately 4 hours. The tour includes photo stops at the iconic Petronas Twin Towers and KL Tower, visits to the National Mosque, National Monument, Independence Square, the King's Palace, and a Chocolate Outlet. Your tour also includes entry to the KL Tower Observatory Deck, where you can enjoy panoramic views of the city skyline.",
        meals: "Breakfast only",
        stay: "Overnight, Kuala Lumpur",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "After breakfast, check out of your hotel and visit the KLCC Aquarium, where entry tickets are included, allowing approximately 2 hours to explore the marine exhibits. Later, you will be transferred to Kuala Lumpur International Airport for your onward flight, marking the end of your memorable Malaysia trip.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004946",
    travelWindow: "January 2027",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      { destination: "Kuala Lumpur", hotel: "Howard Johnson or similar", nights: 3, meals: "Breakfast" },
    ],
    priceRows: [{ label: "Per adult", amount: 28699 }],
    metaTitle: "Charm of Malaysia - 4 Days / 3 Nights",
    metaDescription:
      "Kuala Lumpur in four days from ₹28,699 per adult - Putrajaya, Batu Caves, the Genting Skyway cable car, the KL city tour and the KLCC Aquarium. Land only.",
  },
  // 004728-4D 3N-MALDIVES-02 ADULT-SEP 2026.pdf
  {
    slug: "charm-of-maldives-4d3n",
    title: "Charm of Maldives",
    summary:
      "Three nights at Medhufushi Island Resort - two in a beach villa and one in a water villa - with all meals and speedboat transfers from the airport.",
    priceNote:
      "Land cost per room for 2 adults; the per-adult figure is half the room rate. Includes all meals and speedboat transfers; excludes airfare. This rate is valid for 07 days only.",
    destinationSlug: "maldives",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 62250,
    heroImage: d("maldives"),
    highlights: [
      "2 nights in a beach villa",
      "1 night in a water villa",
      "Breakfast, lunch & dinner",
      "Speedboat airport transfers",
    ],
    inclusions: [
      "2N Beach Villa + 1N Water Villa",
      "Breakfast, Lunch & Dinner",
      "Round trip airport transfers on speed boat",
      "All taxes",
    ],
    referenceNo: "003728",
    travelWindow: "September 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Maldives",
        hotel: "Medhufushi Island Resort or similar",
        nights: 3,
        meals: "Breakfast, Lunch, Dinner",
      },
    ],
    priceRows: [{ label: "Cost per room", amount: 124500 }],
    bookingPolicy:
      "Tour: 50% at the time of confirmation, 50% at 30 days prior to departure date. Air: 100% at the time of confirmation.",
    cancellationPolicy:
      "Tour: 50% before 30 days of travel date, 100% within 30 days of travel date. Air: as per airline policy.",
    metaTitle: "Charm of Maldives - 4 Days / 3 Nights",
    metaDescription:
      "The Maldives in four days from ₹1,24,500 per room for two - beach and water villas at Medhufushi Island Resort, all meals and speedboat transfers. Land only.",
  },
  // 004770-5D 4N-DUBAI-02 ADULTS-NOV 2026.pdf
  {
    slug: "fascinating-dubai-5d4n",
    title: "Fascinating Dubai",
    summary:
      "Five days in Dubai - experience a traditional Creek dhow dinner cruise, explore Dubai's iconic cityscape and Burj Khalifa, enjoy the spectacular Dubai Mall Fountain Show, discover the immersive Aya Universe, and embark on a desert safari with BBQ dinner under the stars before departure.",
    priceNote:
      "Land cost shown per adult, based on 4 travellers sharing 1 room; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "dubai",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 55000,
    heroImage: d("dubai"),
    highlights: ["Dhow Cruise", "Burj Khalifa", "Desert Safari", "Miracle Garden", "Global Village"],
    inclusions: [
      "4 nights' accommodation at the above-mentioned hotel",
      "Meet & greet at the airport",
      "Daily breakfast (except on arrival day)",
      "Sightseeing as per the above-mentioned itinerary",
      "All tours & transfers on a private, point-to-point basis",
      "All entry tickets as per the itinerary",
      "Airport pick-up and drop-off on a private basis",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "Tourist visa",
      "Early check-in or late check-out (standard check-in after 1400/1500 hrs, check-out before 1100/1200 hrs)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai - Creek Dhow Dinner Cruise",
        description:
          "You will arrive at Dubai International Airport (Terminal 1, 2, or 3). Upon arrival, you will meet your driver and receive a private transfer to your hotel in a 7-seater vehicle. After completing the hotel check-in, you will have some time to relax.\n\nIn the evening, you will proceed for a Creek Deluxe Dinner Cruise. You will enjoy dinner, entertainment, and beautiful views of Dubai Creek during the cruise. Private two-way transfers will be provided for the dinner cruise. After the cruise, you will return to your hotel for an overnight stay.",
        meals: "Dinner only",
        stay: "Overnight, Dubai",
      },
      {
        day: 2,
        title: "Dubai City Tour & Burj Khalifa Experience + Dubai Frame",
        description:
          "Enjoy a memorable Dubai sightseeing experience with a half-day private Dubai City Tour for 2 pax in a comfortable 7-seater vehicle accompanied by a professional driver-cum-guide. The tour will cover some of Dubai's major landmarks and attractions, offering opportunities for sightseeing and photography while learning about the city's modern architecture, culture, and heritage. Later, proceed to the iconic Burj Khalifa, where you will visit the 124th and 125th observation decks with Silver (Non-Prime) tickets and enjoy panoramic views of Dubai's impressive skyline from one of the world's tallest buildings. A one-way private transfer to the Burj Khalifa will be provided for your convenience. Complete the Dubai experience with a visit to the Dubai Frame, an architectural landmark offering spectacular views of both old and modern Dubai, along with an insight into the city's transformation and heritage. All the above sightseeing and admission tickets are arranged for 2 pax.",
        meals: "Breakfast only",
        stay: "Overnight, Dubai",
      },
      {
        day: 3,
        title: "Standard Desert Safari with BBQ Dinner",
        description:
          "Your private Deluxe Desert Safari begins with a convenient pickup from your hotel/residence in a private 4x4 vehicle, followed by a scenic drive towards the desert. Upon reaching the desert, enjoy an exciting dune bashing experience across the golden sand dunes, followed by a photo stop at a picturesque desert viewpoint to capture memorable photographs.\n\nContinue the experience with a visit to a traditional desert camp, where you can relax and enjoy the authentic Arabian ambience. At the camp, you may experience traditional activities such as camel riding, henna painting, and Arabic coffee and dates, while also having the opportunity to dress in traditional Arabic attire for photographs.\n\nAs the evening progresses, enjoy a delicious BBQ dinner featuring a selection of grilled meats, salads, appetizers, and traditional Arabic dishes. The dinner is accompanied by refreshing beverages and a variety of entertainment performances, creating a memorable desert evening.\n\nAfter dinner and the entertainment, relax under the desert sky before being transferred back to your hotel/residence in the same private 4x4 vehicle. The safari concludes with a comfortable drop-off at your accommodation, marking the end of your private Deluxe Desert Safari experience.",
        meals: "Breakfast, BBQ dinner",
        stay: "Overnight, Dubai",
      },
      {
        day: 4,
        title: "Miracle Garden and Global Village",
        description:
          "Enjoy a visit to Dubai Miracle Garden with admission tickets for 2 persons, including a private two-way transfer between your hotel and the garden for a comfortable and convenient experience. You will also have a Global Village Any Day Ticket for 2 persons, along with a private one-way transfer from your hotel to Global Village, where you can explore the vibrant pavilions, enjoy entertainment, shopping, and dining at your own pace.",
        meals: "Breakfast only",
        stay: "Overnight, Dubai",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "After breakfast, check out from the hotel and complete the check-out formalities. Meet the driver in the hotel lobby and proceed for your private departure transfer to Dubai International Airport. Enjoy the comfortable drive to the airport while taking in the final views of Dubai. Upon arrival at the airport, the driver will drop you at the designated departure terminal. Proceed with check-in and security formalities for your onward flight, marking the end of your memorable Dubai journey.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "004766",
    travelWindow: "November 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      { destination: "Dubai", hotel: "Citymax Hotel Bur Dubai or similar", nights: 4, meals: "Breakfast" },
    ],
    priceRows: [
      { label: "Per adult", amount: 55000 },
      { label: "Visa cost", amount: 8000 },
    ],
    metaTitle: "Fascinating Dubai - 5 Days / 4 Nights",
    metaDescription:
      "Dubai in five days from ₹55,000 per adult - a creek dhow dinner cruise, the Burj Khalifa and Dubai Frame, a desert safari with BBQ, the Miracle Garden and Global Village. Land only.",
  },
  // 004947 DUBAI 2A 3N4D NOVEMBER 2026.pdf
  {
    slug: "dubai-the-city-of-dreams-4d3n",
    title: "Dubai - The City of Dreams",
    summary:
      "Experience the dazzling city of Dubai, featuring iconic landmarks, breathtaking skyline views, vibrant shopping destinations, cultural experiences, and the spectacular Dubai Miracle Garden. Enjoy unforgettable adventures including a Desert Safari with BBQ Dinner, Dubai Creek Cruise, Burj Khalifa, Global Village, and Sharjah City Tour for a perfect blend of luxury, culture, and adventure.",
    priceNote:
      "Land cost shown per adult, based on 1 room; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "dubai",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 50599,
    heroImage: d("dubai"),
    highlights: ["Dhow Cruise", "Miracle Garden", "Sharjah City", "Desert Safari"],
    inclusions: [
      "3 nights' accommodation in the above-mentioned hotel",
      "Breakfast as per the itinerary (except on arrival day)",
      "All entry tickets as per the itinerary",
      "Meet & greet at the airport",
      "All transfers and tours on PVT & SIC vehicle",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "TCS",
      "Visa",
      "Travel insurance",
      "Tour guide",
      "Early check-in & late check-out",
      "Check-in time in hotel is after 1400/1500 hours and check-out is before 1100/1200 hours",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Personal expenses, room service, special orders, and alcoholic/non-alcoholic beverages",
      "Any extra excursion or sightseeing beyond the itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai & Creek Dinner Cruise",
        description:
          "Upon arrival at Dubai International Airport, you will be warmly greeted by our representative and transferred to the hotel for check-in and relaxation.\n\nIn the evening, proceed for the Dubai Creek Cruise with Dinner with Seat in Coach transfer (SIC), where you can enjoy a relaxing cruise along the historic Dubai Creek while admiring the illuminated city views and enjoying a sumptuous dinner.\n\nAfter the cruise, return to the hotel for an overnight stay in Dubai.",
        meals: "Dinner",
        stay: "Overnight, Dubai Hotel",
      },
      {
        day: 2,
        title: "Dubai City Tour, Burj Khalifa & Global Village (Transfer SIC)",
        description:
          "After breakfast, proceed for an accompanied Half-Day Dubai City Tour (SIC), covering some of Dubai's iconic landmarks and attractions while learning about the city's history and modern development.\n\nAfter the city tour, visit Dubai Mall, one of the world's largest shopping and entertainment destinations, where you will have time to explore the mall and its attractions. Continue to the iconic Burj Khalifa, where you will enjoy non-prime hours entry to the 124th-floor observation deck and take in breathtaking panoramic views of Dubai's skyline.\n\nIn the evening, proceed to Global Village with entry included, where you can explore international pavilions, cultural experiences, entertainment, shopping, and local cuisines from around the world. After enjoying the vibrant atmosphere of Global Village, return to the hotel for an overnight stay in Dubai.",
        meals: "Breakfast",
        stay: "Overnight, Dubai Hotel",
      },
      {
        day: 3,
        title: "Miracle Garden & Desert Safari with BBQ Dinner",
        description:
          "After breakfast, proceed to Dubai Miracle Garden (private transfer) accompanied by a Malayalam-speaking guide, where you can admire the stunning floral displays, colourful themed gardens, and beautifully designed flower installations.\n\nIn the afternoon, get ready for an exciting Desert Safari experience (SIC) in 5 Land Cruiser vehicles, featuring thrilling dune bashing across the golden desert sands. Continue to the desert camp to enjoy traditional Arabian experiences, entertainment, and a delicious BBQ dinner. After the safari and dinner, return to the hotel for an overnight stay in Dubai.",
        meals: "Breakfast & Dinner",
        stay: "Overnight, Dubai Hotel",
      },
      {
        day: 4,
        title: "Abu Dhabi City Tour & Departure",
        description:
          "After breakfast at the hotel, check out and proceed for a full-day Abu Dhabi city tour in a private 7-seater vehicle. Visit the iconic Sheikh Zayed Grand Mosque, one of the most magnificent landmarks in Abu Dhabi, and explore its stunning architecture and beautiful interiors.\n\nContinue the city sightseeing covering the major attractions and landmarks of Abu Dhabi. After completing the sightseeing, proceed to Abu Dhabi International Airport for your departure flight. End of the tour with wonderful memories of the UAE.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004947",
    travelWindow: "November 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      { destination: "Bur Dubai", hotel: "Hotel City Max or similar", nights: 3, meals: "Breakfast" },
    ],
    priceRows: [
      { label: "Land part per adult", amount: 50599 },
      { label: "Visa cost per person", amount: 8100 },
    ],
    metaTitle: "Dubai - The City of Dreams - 4 Days / 3 Nights",
    metaDescription:
      "Dubai in four days from ₹50,599 per adult - a creek dinner cruise, the Burj Khalifa, Global Village, the Miracle Garden, a desert safari with BBQ and an Abu Dhabi city tour. Land only.",
  },
  // THAILAND 3N4D JAN.pdf
  {
    slug: "charm-of-pattaya-bangkok-4d3n",
    title: "Charm of Pattaya & Bangkok",
    summary:
      "Four days across Thailand's vibrant coast and capital - enjoy Tiger Topia, Coral Island, Pattaya's Floating Market and Alcazar Show before exploring Bangkok's iconic temples and Safari World & Marine Park. A family-friendly holiday blending wildlife, culture and entertainment with private transfers and selected shared experiences.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 2 travellers sharing 1 room; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "thailand",
    category: "family",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 26800,
    heroImage: x("pattaya"),
    highlights: ["Floating Market", "Coral Island", "Safari World"],
    inclusions: [
      "3 nights' accommodation at the above-mentioned hotels",
      "Daily breakfast at hotels",
      "Meet & greet at the airport",
      "Sightseeing as per the above-mentioned itinerary",
      "All entry tickets",
      "All tours and transfers on private/SIC vehicles",
      "Transfers between DMK Airport - Pattaya Hotel - Bangkok Hotel - DMK Airport by private vehicle",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "TCS",
      "Lunch & dinner (except where noted)",
      "Early check-in or late check-out (standard check-in after 1400/1500 hrs, check-out before 1100/1200 hrs)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok - Tiger Topia + Alcazar Show",
        description:
          "On arrival at Bangkok Airport, you'll be warmly welcomed and transferred to the hotel to freshen up and have breakfast. En route, visit Tiger Topia to experience the exciting Tiger Show and Crocodile Show. After the visit, return to the hotel or continue with leisure activities as per your schedule. In the evening, proceed to the famous Alcazar Cabaret Show. Enjoy round-trip private SUV transfers and admission tickets included for a comfortable and hassle-free experience before returning to the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Pattaya",
      },
      {
        day: 2,
        title: "Coral Island Tour",
        description:
          "After breakfast, a half-day speedboat excursion (shared/SIC basis) to Coral Island (Koh Larn) - known for its clear water, white sand and optional water sports such as parasailing, jet-skiing, sea walking and banana boat rides (extra cost). Relax on the beach or swim in the turquoise shallows, with lunch served during the tour. In the afternoon, visit Pattaya Floating Market.",
        meals: "Breakfast, Lunch",
        stay: "Overnight, Pattaya",
      },
      {
        day: 3,
        title: "Transfer to Bangkok",
        description:
          "After breakfast at the hotel, depart for Safari World, Bangkok's renowned wildlife attraction. Enjoy a scenic drive to the park before entering the Safari Park, where you will experience an exciting safari through open habitats and observe a variety of animals such as giraffes, zebras, lions, tigers, and other wildlife roaming freely in a natural environment. Continue to the Marine Park, where you can explore fascinating animal exhibits and enjoy entertaining live shows featuring dolphins, sea lions, orangutans, birds, and other trained animals (subject to the daily show schedule). During your visit, savour a delicious buffet lunch at one of the park's restaurants. After lunch, spend more time exploring the park, visiting themed attractions, and watching any remaining shows. In the late afternoon, depart Safari World and return to your hotel in Bangkok with wonderful memories of a fun-filled day amidst wildlife and family-friendly entertainment.",
        meals: "Breakfast only",
        stay: "Overnight, Bangkok",
      },
      {
        day: 4,
        title: "Bangkok City & Temple Tour - Departure",
        description:
          "After breakfast, a private-sedan city and temple tour: the Golden Buddha at Wat Traimit, home to the world's largest solid gold Buddha statue at roughly 5.5 tonnes, followed by Wat Pho - the Temple of the Reclining Buddha, its 46-metre gold-leaf statue among Bangkok's oldest and most significant, and the birthplace of traditional Thai massage.\n\nThe tour concludes with your transfer to Bangkok Airport for departure.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "004867",
    travelWindow: "January 2027",
    travellers: "5 adults",
    rooms: 2,
    stays: [
      { destination: "Pattaya", hotel: "Golden Beach Hotel or similar", nights: 2, meals: "Breakfast" },
      { destination: "Bangkok", hotel: "Seasons Siam Hotel or similar", nights: 1, meals: "Breakfast" },
    ],
    priceRows: [{ label: "Per adult", amount: 26800 }],
    metaTitle: "Charm of Pattaya & Bangkok - 4 Days / 3 Nights",
    metaDescription:
      "Pattaya and Bangkok in four days from ₹26,800 per adult - Tiger Topia, the Alcazar show, Coral Island, the floating market, Safari World and Bangkok's temples. Land only.",
  },

  // 004163 - 2D 1N - VARKALA - MAY - 1 ADULT.pdf
  {
    slug: "explore-varkala-2d1n",
    title: "Explore Varkala",
    summary:
      "Two days on the Varkala coast - the cliff, Papanasam Beach and the Janardhana Swamy Temple, then Jatayu Earth's Center and the mangrove forests on the way out.",
    priceNote:
      "Total package cost for 1 adult. The package price offered is valid for 2 days only and may change thereafter. Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply. Vehicle will run only till the point it is allowed in a particular destination; if the guest wants to travel/visit beyond that point, local transport will have to be arranged by the guest. Vehicle is used strictly as per the itinerary and not for disposal. The sightseeing mentioned in the itinerary will definitely be covered as planned; however, the exact timings and days of the sightseeing will be confirmed only one day prior to departure through the confirmation voucher.",
    destinationSlug: "kerala",
    category: "customized",
    type: "customized",
    durationDays: 2,
    durationNights: 1,
    priceFrom: 15900,
    heroImage: d("kerala"),
    highlights: [
      "Varkala Cliff and the Arabian Sea views",
      "Papanasam Beach and the Janardhana Swamy Temple",
      "Jatayu Earth's Center (Jatayupara)",
      "The mangrove forests near Varkala",
    ],
    inclusions: [
      "01 night accommodation in above mentioned hotel",
      "Day 2 breakfast",
      "Sightseeing as per the above mentioned itinerary",
      "All tours and transfers on private sedan car",
      "Railway station / bus stand pick-up & drop",
      "GST",
    ],
    exclusions: [
      "Round trip air fare",
      "Lunch & dinner not mentioned in the itinerary",
      "All entry tickets",
      "Early check-in at hotel, late check-out at hotel",
      "The check-in time in hotel is after 1400/1500 hours and check-out is before 1100/1200 hours",
      "Other meals not mentioned, laundry, telephone calls, incidentals",
      "Any extra excursion or sightseeing apart from suggested tour itinerary",
      "Any personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Varkala Sightseeing",
        description:
          "Upon your arrival at the railway station or bus stand, our representative will warmly receive you and assist with your transfer to Varkala. Begin your sightseeing tour by visiting the famous Varkala Cliff, known for its breathtaking views of the Arabian Sea, vibrant cafés, and relaxing atmosphere. You can also explore nearby attractions such as Papanasam Beach, Janardhana Swamy Temple, and the scenic coastline.\n\nAfter enjoying the sightseeing tour, proceed to the hotel for check-in and relax for the rest of the day. Overnight stay at the hotel in Varkala.",
        meals: "No meals",
        stay: "Overnight, Varkala",
      },
      {
        day: 2,
        title: "Jatayupara & Mangrove Forest Sightseeing",
        description:
          "After breakfast, check out from the hotel and proceed for a sightseeing tour to Jatayu Earth's Center, popularly known as Jatayupara. Enjoy visiting the world's largest bird sculpture, scenic viewpoints, adventure activities, and the beautiful surroundings of the hilltop destination.\n\nLater, continue your journey to explore the serene mangrove forests near Varkala, where you can enjoy the peaceful backwater atmosphere and natural beauty. After completing the sightseeing tour, you will be dropped off at the railway station or bus stand for your onward journey with wonderful memories of the trip.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004163",
    travelWindow: "May 2026",
    travellers: "1 adult",
    rooms: 1,
    stays: [
      {
        destination: "Varkala",
        hotel: "Clafouti Beach Resort or similar",
        nights: 1,
        meals: "Breakfast",
      },
    ],
    priceRows: [{ label: "Total (1 adult)", amount: 15900 }],
    bookingPolicy:
      "Tour: 50% at the time of confirmation, 50% at 30 days prior to departure date. Air: 100% at the time of confirmation.",
    cancellationPolicy:
      "Tour: 50% before 30 days of travel date, 100% within 30 days of travel date. Air: As per airline policy.",
    metaTitle: "Explore Varkala - 2 Days / 1 Night",
    metaDescription:
      "Varkala in two days - the cliff, Papanasam Beach and the Janardhana Swamy Temple, then Jatayu Earth's Center and the mangrove forests. Private sedan, railway pick-up and drop.",
  },
  // 004676 MANALI 2A NOV 4N 5D.pdf
  {
    slug: "fascinating-delhi-manali-5d4n",
    title: "Fascinating Delhi - Manali",
    summary:
      "Five days between the capital and the Himalayas - an overnight Volvo journey each way, local sightseeing and temples in Manali, the meadows of Solang Valley, and a half-day sweep of Delhi's landmarks before departure. A limited-period summer package, priced for groups of four or more.",
    priceNote:
      "The package price offered is valid for 3 days only and may change thereafter. Vehicle is used strictly as per the itinerary and not for disposal. Vehicle will run only till the point it is allowed in a particular destination; if the guest wants to travel/visit beyond that point, local transport will have to be arranged by the guest.",
    destinationSlug: "delhi-manali",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 14500,
    heroImage: d("delhi-manali"),
    highlights: ["Hadimba Devi Temple", "Solang Valley", "Kullu & Naggar"],
    inclusions: [
      "2 AC semi sleeper Volvo tickets Delhi to Manali",
      "2 nights' accommodation at the above-mentioned hotel in Manali in 1 room",
      "2 nights on Volvo bus (Delhi–Manali–Delhi)",
      "Meal plan (breakfast & dinner) as per the itinerary",
      "Airport/railway station pick-up and drop",
      "All tours and transfers on a private basis",
      "All toll, tax and driver allowance",
      "GST",
    ],
    exclusions: [
      "All entry tickets",
      "Flight fare / train ticket",
      "Early check-in or late check-out (standard check-in 12:00 noon)",
      "Check-in time in hotel is after 1400/1500 hours and check-out is before 1100/1200 hours",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service, special orders, and alcoholic/non-alcoholic beverages",
      "Adventure activities charges",
      "Monument fee / camera fees",
      "In case of road blockage due to landslide or heavy snowfall, the cost of other vehicles will be extra or paid directly by the guest on the spot",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description:
          "Arrive at Delhi airport/railway station. Meet our driver and drive to ISBT Kashmiri Gate (approx. 1 hour). At 7/8pm in the evening, start your journey from Delhi to Manali by overnight A/C Volvo.\n\nSpecial note: Delhi airport to ISBT Kashmiri Gate is approx. 20 km / 1 hour of travel, so please let us know one day before what time you require the cab for pick-up.",
        meals: "None",
        stay: "Overnight Volvo, Delhi to Manali",
      },
      {
        day: 2,
        title: "Arrival in Manali & Local Sightseeing",
        description:
          "Reach Manali Volvo Stand, where our representative will welcome you with a warm smile and transfer you to the hotel (check-in time is 12:00 noon). At 2pm, start the local city tour covering Hadimba Devi Temple, Club House, the Tibetan Monastery and Van Vihar, and explore the Mall Road and IBEX Market of Manali.",
        meals: "Breakfast, Dinner",
        stay: "Overnight, Manali",
      },
      {
        day: 3,
        title: "Excursion to Solang Valley",
        description:
          "Today at 8/9am, enjoy the Solang Valley trip. Solang Valley is a famous picnic spot, where you can enjoy adventure activities like paragliding, cable ride, zip lining, mountain biking and horse riding (at your own cost). Overnight stay at the hotel.",
        meals: "Breakfast, Dinner",
        stay: "Overnight, Manali",
      },
      {
        day: 4,
        title: "Kullu Valley - Naggar - Delhi",
        description:
          "Today at 9am, after breakfast, check out from the hotel and drive to Kullu to enjoy thrilling river rafting and a high-fly paragliding session (at your own expense), and visit the world-famous Pashmina Shawl Factory and dry fruits shop, Vaishno Devi Temple, Naggar Castle and Naggar Art Gallery. Later, return to Manali and at 6/7pm report at the Manali Private Volvo Stand for the return to Delhi.",
        meals: "Breakfast",
        stay: "Overnight Volvo, Manali to Delhi",
      },
      {
        day: 5,
        title: "Morning Arrival in Delhi",
        description:
          "Morning arrival at Delhi ISBT. Meet our driver and drive to Delhi Airport/Railway Station to catch your flight/train home. End of the tour with exotic memories.\n\nNote: In case of road blockage due to landslide or heavy snowfall, the cost of other vehicles will be extra or paid directly by the guest on the spot. All the sightseeing mentioned in the itinerary will be covered if time permits; if not, you may cut down and choose the places that interest you most.",
        meals: "None",
      },
    ],
    referenceNo: "004676",
    travelWindow: "November 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Manali",
        hotel: "Hotel Alpas Manali / Mareena Retreat or similar",
        nights: 2,
        meals: "Breakfast & Dinner",
      },
    ],
    stayNote:
      "2 nights are on an overnight Volvo bus (Delhi–Manali and Manali–Delhi); hotel category is confirmed at time of booking.",
    priceRows: [
      { label: "Per adult", amount: 14500 },
      { label: "Party of 2", amount: 29000 },
    ],
    metaTitle: "Fascinating Delhi - Manali - 5 Days / 4 Nights",
    metaDescription:
      "Delhi and Manali in five days from ₹14,500 per adult - overnight Volvo both ways, Hadimba Devi Temple, Solang Valley, Kullu and Naggar Castle, with breakfast and dinner in Manali.",
  },
  // 004765-5D 4N-SIKKIM DRJEELING-04 ADULTS-FEB 2027.pdf
  {
    slug: "incredible-sikkim-darjeeling-5d4n",
    title: "Incredible Sikkim Darjeeling",
    summary:
      "Five days exploring Sikkim and Darjeeling - scenic Gangtok with an excursion to Tsomgo Lake and New Baba Mandir, followed by cultural sightseeing and a scenic transfer to Darjeeling, where you'll experience Tiger Hill, Batasia Loop, Himalayan monasteries, the Himalayan Mountaineering Institute, Peace Pagoda, and lush tea gardens, with comfortable transfers from and to Bagdogra Airport/NJP.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "darjeeling",
    category: "family",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 16400,
    heroImage: d("darjeeling"),
    highlights: ["Gangtok", "Tsomgo Lake", "Darjeeling"],
    inclusions: [
      "Accommodation: 04 nights' accommodation in the hotel",
      "Number of pax: 04 adults",
      "Number of rooms: 02 double rooms",
      "Meal plan: MAPAI - 04 breakfasts + 04 dinners",
      "Vehicle: All transfers and sightseeing by 01 Innova / Xylo or similar vehicle",
      "Vehicle charges inclusive of driver allowance, parking charges, toll taxes, fuel, and all applicable transportation expenses",
      "Transfers: Airport/railway station pick-up and drop-off as per the itinerary",
      "Sightseeing: All sightseeing and transfers as per the agreed itinerary",
      "GST",
    ],
    exclusions: [
      "Any airfare / train fare",
      "Check-in & check-out time 02:00 noon / 11:00am",
      "Any adventure activities, any personal expenses, etc.",
      "Anything which is not mentioned in the package inclusions",
      "Travel insurance",
      "Any meal other than specified",
      "Any expenditure of a personal nature",
      "Room heater charges",
      "Ropeway, yak ride",
      "Vehicle & permit cost for Nathula Pass",
      "You can also enjoy the joy train ride at your own expense",
      "Any increase in taxes or fuel price, leading to an increase in surface transportation & land arrangements, which may come into effect prior to departure",
      "Entrance tickets",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bagdogra Airport - Transfer to Gangtok",
        description:
          "On arrival at Bagdogra Airport/NJP, meet our representative and proceed by road to Gangtok, enjoying the scenic journey through the beautiful landscapes of Sikkim. Upon arrival in Gangtok, check in to your hotel and take some time to relax and freshen up after the journey. In the evening, the rest of the day is at leisure, allowing you to explore the nearby local markets, streets, and surroundings at your own pace. Later, return to the hotel for a comfortable overnight stay in Gangtok.",
        meals: "Dinner",
        stay: "Overnight, Gangtok",
      },
      {
        day: 2,
        title: "Excursion of New Baba Mandir & Tsomgo Lake",
        description:
          "After breakfast in the morning, proceed for an exciting excursion to Tsomgo Lake and New Baba Mandir. Located at an altitude of approximately 12,210 feet, Tsomgo Lake is around 40 km from Gangtok and takes approximately 2.5 hours to reach by road, depending on weather and road conditions. The scenic journey offers breathtaking views of the Himalayan landscape, winding mountain roads, and beautiful valleys.\n\nUpon arrival, visit the picturesque Tsomgo Lake, a high-altitude glacial lake situated close to Nathula Pass, the historic Indo-China border and a significant part of the ancient Silk Route. The lake remains frozen for a major part of the year and changes its appearance beautifully with the seasons. It is also home to Brahminy ducks and several migratory birds, making it an interesting destination for nature and wildlife enthusiasts.\n\nAfter exploring Tsomgo Lake, continue towards the New Baba Mandir, a revered shrine dedicated to Baba Harbhajan Singh and known for its strong spiritual significance among visitors and Indian Army personnel. Spend some time at the shrine and enjoy the surrounding panoramic views of the Himalayan mountains.\n\nNathula Pass can also be visited as an optional excursion, subject to availability of permits, weather conditions, and prevailing government regulations, and the applicable charges are payable directly. After completing the sightseeing, drive back to Gangtok and return to the hotel. Spend the evening at leisure, relax at the hotel, and enjoy an overnight stay in Gangtok.\n\nNote for Nathula Pass: In case of a slide for any reason, Tsomgo Lake is closed, so we will provide alternate sightseeing at Gangtok. The Nathula Pass visit will be on a direct payment basis because it depends on availability of permits from the army and is subject to weather & road conditions. Nathula Pass is closed to visitors on Monday. Documents required for Nathula Pass (only for Indian nationality): Voter ID / Driving Licence / Passport (any one document required for each person), and a passport-size photo of all guests. Birth certificate & Aadhaar card are acceptable for children below 10 years only. Aadhaar card is not acceptable for any kind of permit in Sikkim.",
        meals: "Breakfast, Dinner",
        stay: "Overnight, Gangtok",
      },
      {
        day: 3,
        title: "Gangtok Half-Day Local Sightseeing - Darjeeling (100 km / 03 hrs approx.)",
        description:
          "After breakfast, check out from the hotel and begin your sightseeing tour of Gangtok. Your first visit will be to the Namgyal Institute of Tibetology, a renowned centre dedicated to preserving and promoting Tibetan culture, art, manuscripts, and ancient artefacts. Please note that the institute remains closed on Sundays.\n\nNext, proceed to the sacred Do Drul Chorten Stupa, one of Gangtok's important Buddhist landmarks. The stupa is surrounded by 108 prayer wheels, which devotees traditionally rotate while offering prayers, symbolizing peace, positivity, and spiritual harmony.\n\nLater, enjoy an exciting ride on the Gangtok City Ropeway, offering spectacular panoramic views of Gangtok, the surrounding valleys, and the picturesque Himalayan hills. The ropeway ticket will be at your own cost and is subject to weather and operational conditions.\n\nAfter completing the sightseeing, depart from Gangtok and proceed towards Darjeeling, travelling through the scenic mountain roads and enjoying beautiful views of the surrounding landscapes. Upon arrival in Darjeeling, check in to your hotel and spend the rest of the evening at leisure, relaxing after the journey or exploring the nearby surroundings at your own pace. Overnight stay at the hotel in Darjeeling.",
        meals: "Breakfast, Dinner",
        stay: "Overnight, Darjeeling",
      },
      {
        day: 4,
        title: "Darjeeling Sightseeing",
        description:
          "Start your day early in the morning with a drive to Tiger Hill, the highest point in Darjeeling, to witness the spectacular sunrise over the majestic Himalayan ranges, including breathtaking views of Mount Kanchenjunga. After enjoying the sunrise and panoramic mountain views, proceed to Batasia Loop, an engineering marvel surrounded by beautifully landscaped gardens, where you can admire the scenic views of Darjeeling and the surrounding hills. Continue your visit to the historic Ghoom Monastery, also known as the Yiga Choeling Monastery, one of the oldest Tibetan Buddhist monasteries in Darjeeling, where you can experience its peaceful atmosphere and admire the traditional Buddhist architecture and prayer wheels.\n\nAfter sightseeing, return to your hotel and enjoy a healthy breakfast. Later, proceed for a full-day sightseeing tour of Darjeeling, beginning with a visit to the Padmaja Naidu Himalayan Zoological Park, renowned for its conservation efforts and Himalayan wildlife, followed by the Himalayan Mountaineering Institute, which showcases the history and achievements of mountaineering in the region and remains closed on Thursdays. Continue to a tea garden for an outer view of the famous Darjeeling tea plantations and enjoy the picturesque landscape of neatly arranged tea bushes across the hills. Afterwards, visit the Japanese Peace Pagoda, a serene Buddhist monument offering beautiful views of Darjeeling and the surrounding mountains, and then proceed to Tenzing Rock, named after Tenzing Norgay, the legendary mountaineer who successfully climbed Mount Everest with Sir Edmund Hillary. After completing the day's sightseeing, return to your hotel, relax and enjoy the evening at leisure, followed by an overnight stay at your hotel in Darjeeling.\n\nOptional tour: Joy Ride (Toy Train) - you can book the ticket directly (additional waiting charge applicable).",
        meals: "Breakfast, Dinner",
        stay: "Overnight, Darjeeling",
      },
      {
        day: 5,
        title: "Darjeeling - Departure - Bagdogra Airport",
        description:
          "After breakfast in the morning, check out from the hotel and proceed for your onward journey. Our representative will escort you to Bagdogra Airport or New Jalpaiguri Railway Station (NJP) as per your departure schedule. Upon arrival at the airport/railway station, you will be dropped off for your onward journey. With this, your memorable tour comes to an end, and we bid you farewell with wonderful memories of your trip.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004765",
    travelWindow: "February 2027",
    travellers: "4 adults",
    rooms: 2,
    stays: [
      {
        destination: "Gangtok",
        hotel: "Hotel Prime or similar (3 star)",
        nights: 2,
        meals: "Breakfast",
      },
      {
        destination: "Darjeeling",
        hotel: "Hotel Taksha Boutique or similar (3 star)",
        nights: 2,
        meals: "Breakfast",
      },
    ],
    priceRows: [
      { label: "Per adult (minimum 4 travellers)", amount: 16400 },
      { label: "Minimum booking (4 adults)", amount: 65600 },
    ],
    metaTitle: "Incredible Sikkim Darjeeling - 5 Days / 4 Nights",
    metaDescription:
      "Sikkim and Darjeeling in five days from ₹16,400 per adult - Gangtok, Tsomgo Lake and New Baba Mandir, then Tiger Hill, Batasia Loop and the tea gardens of Darjeeling. Land only.",
  },
  // 004929 DELHI AGRA 2N3D NOV 2026.pdf
  {
    slug: "charm-of-delhi-agra-3d2n",
    title: "Charm of Delhi & Agra",
    summary:
      "Three days across Delhi and Agra - Rajghat, India Gate and Akshardham on arrival, a day trip to the Taj Mahal, Agra Fort and the Baby Taj, and the Red Fort, Qutub Minar and Lotus Temple before you fly.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "golden-triangle",
    category: "honeymoon",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 14499,
    heroImage: d("golden-triangle"),
    highlights: ["Red Fort", "Taj Mahal", "Qutub Minar"],
    inclusions: [
      "2 nights' accommodation at the above-mentioned hotel",
      "Meal plan (breakfast) as per the itinerary, except on arrival day",
      "All tours & transfers by private vehicle",
      "Airport/railway station pick-up and drop",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "All entry tickets",
      "Early check-in or late check-out (standard check-in 12:00pm, check-out 10:00am)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service and special orders",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description:
          "Morning arrival at Delhi airport; meet our driver and drive to the hotel (check-in time as per hotel policy). After freshening up, proceed for Delhi local sightseeing, covering Rajghat, India Gate, Akshardham Temple and Sarojini Market.",
        meals: "None",
        stay: "Overnight, Delhi",
      },
      {
        day: 2,
        title: "Delhi Sightseeing - Drive to Agra",
        description:
          "After breakfast at the hotel, visit the world-famous monument of love, the Taj Mahal, and Agra Fort. The Taj Mahal was built by the Mughal emperor Shah Jehan as a memorial for his beloved wife Mumtaz Mahal; this beautiful monument is built in white marble with inlay work. Agra Fort was built by the Mughal emperor Akbar in 1565 AD. You will also visit Itmad-ud-Daulla's Tomb, popularly known as the Baby Taj Mahal. Later, drive back to Delhi.",
        meals: "Breakfast only",
        stay: "Overnight, Delhi",
      },
      {
        day: 3,
        title: "Delhi - Departure",
        description:
          "After breakfast, check out of the hotel and visit Delhi's local sightseeing, covering the Red Fort, Rashtrapati Bhavan and Parliament House (outside), Qutub Minar, Lotus Temple and Humayun's Tomb. Later, drop at Delhi Airport/Railway Station to catch your flight home. End of the tour.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "004929",
    travelWindow: "November 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Delhi",
        hotel: "Hotel Sun Star Grand or similar",
        nights: 2,
        meals: "Breakfast",
      },
    ],
    priceRows: [
      { label: "Per adult", amount: 14499 },
      { label: "2 adults", amount: 28998 },
    ],
    metaTitle: "Charm of Delhi & Agra - 3 Days / 2 Nights",
    metaDescription:
      "Delhi and Agra in three days from ₹14,499 per adult - India Gate and Akshardham, the Taj Mahal and Agra Fort, then the Red Fort, Qutub Minar and Lotus Temple. Land only.",
  },
  // 004931 GOA 2N3D 5A October 2026..pdf
  {
    slug: "goa-3d2n",
    title: "Goa",
    summary:
      "Three days across Goa's two coasts - a beach-hopping tour of the north from Aguada Fort to Baga, then Old Goa's churches, temples and a spice garden in the south.",
    priceNote:
      "Land cost shown per adult; excludes train fare. Price is valid for a limited period and may change thereafter.",
    destinationSlug: "goa",
    category: "family",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 4999,
    heroImage: d("goa"),
    highlights: ["North Goa Beaches", "Old Goa Churches", "Spice Gardens"],
    inclusions: [
      "2 nights' accommodation at the above-mentioned hotel",
      "2 rooms (with 1 extra bed)",
      "2 breakfasts (except on arrival day)",
      "Meal plan as per the itinerary",
      "Railway station pick-up and drop",
      "All tours and transfers by private sedan",
      "GST",
    ],
    exclusions: [
      "Round-trip train fare",
      "All entry tickets",
      "Early check-in or late check-out (standard check-in after 1400/1500 hrs, check-out before 1100/1200 hrs)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival - North Goa Sightseeing",
        description:
          "After arriving at Goa Airport, the day opens at Aguada Fort, a 17th-century Portuguese fort with panoramic views of the Arabian Sea, then continues beach-hopping through Sinquerim (with optional water sports at your own cost), Candolim, Calangute, and Baga at sunset, with a stop for street food and a beachside drink.\n\nThe day wraps up at Anjuna Beach's flea market (if open) or a stroll along its rocky coastline, and Snow Park for some indoor snow fun, before returning to the hotel.",
        meals: "None",
        stay: "Overnight, Goa",
      },
      {
        day: 2,
        title: "South Goa Sightseeing",
        description:
          "After breakfast, explore Old Goa's churches - the Basilica of Bom Jesus, resting place of St. Francis Xavier, and Se Cathedral - followed by the Hindu temples of Shri Manguesh and Shri Balaji.\n\nA guided spice garden tour and lunch follow, then on to Panjim's Our Lady of the Immaculate Conception Church, before winding down at Miramar Beach for sunset over the Arabian Sea and the return to your hotel.",
        meals: "Breakfast only",
        stay: "Overnight, Goa",
      },
      {
        day: 3,
        title: "Departure",
        description:
          "After breakfast, check out as per hotel policy, with free time for a final beach walk or some shopping before the transfer to the airport for departure.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "004931",
    travelWindow: "October 2026",
    travellers: "5 adults",
    rooms: 2,
    stays: [
      {
        destination: "Goa",
        hotel: "Resort Village Royale or similar (2 star option)",
        nights: 2,
        meals: "Breakfast",
      },
      {
        destination: "Goa",
        hotel: "W S Beach Resort or similar (3 star option)",
        nights: 2,
        meals: "Breakfast",
      },
    ],
    priceRows: [
      { label: "Per adult, 2 star hotel", amount: 4999 },
      { label: "Per adult, 3 star hotel", amount: 5999 },
    ],
    metaTitle: "Goa - 3 Days / 2 Nights",
    metaDescription:
      "Goa in three days from ₹4,999 per adult - Aguada Fort and the North Goa beaches to Baga, then Old Goa's churches, a spice garden and sunset at Miramar. Train fare extra.",
  },
  // 004944 RAJASTHAN 4N5D 2A  NOVEMBER 2026.pdf
  {
    slug: "charm-of-rajasthan-5d4n",
    title: "Charm of Rajasthan",
    summary:
      "Arrive in Jaipur and explore the vibrant Pink City for two days, followed by a journey to Jaisalmer for an unforgettable desert camp experience with a camel safari and cultural evening. Continue to Udaipur, the City of Lakes, for sightseeing and leisure before concluding the trip with departure from Udaipur.",
    priceNote:
      "The offered package price is valid for 3 days only and may change thereafter.",
    destinationSlug: "rajasthan",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 20499,
    heroImage: d("rajasthan"),
    highlights: ["Pink City", "Jal Mahal", "Desert Camp", "Fateh Sagar Lake"],
    inclusions: [
      "04 nights' accommodation at the above-mentioned hotels",
      "2 nights stay in Jaipur",
      "1 night stay in Jaisalmer desert camp",
      "1 night stay in Udaipur",
      "Daily breakfast (except on arrival day)",
      "All tours and transfers on a private basis",
      "Airport/railway station pick-up and drop",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare / train ticket",
      "All entry tickets",
      "Early check-in or late check-out (standard check-in 12:00pm, check-out 10:00am)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Alcoholic and non-alcoholic beverages",
      "Personal expenses, room service and special orders",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur - Local Sightseeing",
        description:
          "Upon your arrival at Jaipur Airport or Railway Station, you will be warmly received and transferred to your hotel for check-in. After some time to relax and refresh, begin your exploration of the Pink City with a visit to the magnificent City Palace, a beautiful blend of Rajput and Mughal architecture that continues to serve as the residence of Jaipur's royal family. Continue to the nearby Jantar Mantar, a UNESCO World Heritage Site featuring impressive astronomical instruments built in the 18th century. Later, stop at the iconic Hawa Mahal to admire its intricate façade and capture memorable photographs. In the evening, enjoy leisure time exploring the vibrant markets of Johari Bazaar and Bapu Bazaar, where you can shop for traditional jewellery, handicrafts, textiles, and souvenirs. Return to the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Jaipur",
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        description:
          "After breakfast at the hotel, proceed for a full-day sightseeing tour of Jaipur, the vibrant Pink City. Begin your day with a visit to the majestic Amber Fort, one of Rajasthan's most celebrated hill forts, renowned for its grand courtyards, intricate mirror work, and panoramic views of the surrounding Aravalli Hills.\n\nEn route, make a brief stop at the picturesque Panna Meena ka Kund, an ancient stepwell famous for its striking symmetrical architecture. Continue to the beautiful Jal Mahal, gracefully situated in the middle of Man Sagar Lake, where you can enjoy a photo stop and admire the palace from the lakeside.\n\nIn the afternoon, proceed to Jaigarh Fort, if time permits, known for its impressive fortifications and the famous Jaivana Cannon, regarded as one of the largest wheeled cannons in the world. Later, continue to Nahargarh Fort, perched high in the Aravalli Hills and offering spectacular panoramic views of Jaipur city. Enjoy a memorable sunset view from Nahargarh Fort, as the golden evening light spreads across the Pink City. After sunset, return to the hotel and relax after a wonderful day of Jaipur sightseeing.",
        meals: "Breakfast",
        stay: "Overnight, Jaipur",
      },
      {
        day: 3,
        title: "Jaipur - Jaisalmer Desert Camp",
        description:
          "After an early breakfast, check out from your hotel and proceed on a scenic drive to Jaisalmer, popularly known as the \"Golden City\" of Rajasthan. The journey takes you through the changing landscapes of the state, passing traditional villages, open desert stretches, and rustic countryside. En route, stop at suitable restaurants for refreshments and lunch.\n\nUpon arrival in Jaisalmer, continue directly to the famous Desert Camp, located on the outskirts of the city. Check in to your desert camp and unwind amidst the tranquil surroundings of the Thar Desert.\n\nIn the evening, experience the magic of the desert with an exciting camel safari or jeep safari across the golden sand dunes while enjoying the breathtaking sunset. Later, immerse yourself in an authentic Rajasthani cultural evening featuring vibrant folk music, traditional dance performances, and local entertainment around the camp. Relish a delicious traditional Rajasthani dinner under the starlit desert sky before retiring to your comfortable Swiss tent for an unforgettable overnight stay at the desert camp.",
        meals: "Breakfast, Dinner",
        stay: "Overnight, Jaisalmer desert camp",
      },
      {
        day: 4,
        title: "Jaisalmer - Udaipur Transfer",
        description:
          "After an early breakfast, check out from the hotel and embark on a half-day sightseeing tour of Jaisalmer. Begin by exploring the magnificent Jaisalmer Fort, one of the world's few living forts, where local families continue to reside within its ancient sandstone walls. Wander through its narrow lanes lined with temples, traditional homes, cafés, and handicraft shops. Continue your visit to the beautifully carved Patwon Ki Haveli, an architectural masterpiece showcasing intricate sandstone craftsmanship, followed by Nathmal Ki Haveli, another remarkable example of Rajput architecture. Conclude your sightseeing with a visit to the tranquil Gadisar Lake, once the city's primary water source and now a peaceful spot surrounded by temples and cenotaphs.\n\nFollowing lunch, begin your onward journey to Udaipur. Upon arrival late in the evening, check in to your hotel and relax after the long drive.",
        meals: "Breakfast",
        stay: "Overnight, Udaipur",
      },
      {
        day: 5,
        title: "Udaipur Sightseeing + Departure",
        description:
          "After breakfast, visit Saheliyon-ki-Bari, Bagore Ki Haveli and Fateh Sagar Lake, and if time permits visit Sajjangarh / Monsoon Palace for panoramic views of the city before proceeding to Udaipur Airport or railway station for your onward journey.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004944",
    travelWindow: "October 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Jaipur",
        hotel: "Hotel Golden Manor or similar",
        nights: 2,
        meals: "Breakfast",
      },
      {
        destination: "Jaisalmer",
        hotel: "Desert Camp Tent Stay or similar",
        nights: 1,
        meals: "Breakfast, Dinner",
      },
      {
        destination: "Udaipur",
        hotel: "Opulence or similar",
        nights: 1,
        meals: "Breakfast",
      },
    ],
    priceRows: [{ label: "Per adult", amount: 20499 }],
    metaTitle: "Charm of Rajasthan - 5 Days / 4 Nights",
    metaDescription:
      "Rajasthan in five days from ₹20,499 per adult - two days in Jaipur's Pink City, a Jaisalmer desert camp with camel safari and cultural evening, then Udaipur's lakes. Land only.",
  },
  // RAJASTHAN 5N6D 4A  OCT 07 - 2026.pdf
  {
    slug: "charm-of-rajasthan-6d5n",
    title: "Charm of Rajasthan",
    summary:
      "The tour begins in Jaipur, the Pink City, with sightseeing of its magnificent forts, palaces, historical monuments and vibrant local markets. The journey continues to Jodhpur, the Blue City, where guests can explore the majestic Mehrangarh Fort, Jaswant Thada, Umaid Bhawan Palace and the colorful old city. From Jodhpur, the tour proceeds to Udaipur, the City of Lakes, with an optional visit to the beautiful Ranakpur Jain Temple en route. The tour concludes in Udaipur with visits to the City Palace, Lake Pichola, Jagdish Temple, Fateh Sagar Lake and other prominent attractions before departure.",
    priceNote:
      "The offered package price is valid for 5 days only and may change thereafter.",
    destinationSlug: "rajasthan",
    category: "group-tours",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 30500,
    heroImage: d("rajasthan"),
    highlights: ["Jodhpur", "Udaipur", "Jaipur"],
    inclusions: [
      "Accommodation on 4 double sharing basis as per the itinerary",
      "Breakfast and dinner at the hotels mentioned",
      "All transfers, excursions & sightseeing as per the itinerary by private vehicle (Tempo Traveller)",
      "Parking and all transport related expenses including driver services",
      "All toll taxes, parking fees, fuel and driver's allowances",
      "All transport & hotel related taxes",
    ],
    exclusions: [
      "Air fare / train fare & all entry fees at sightseeing spots",
      "Any additional meals other than mentioned in the inclusions",
      "Items of personal nature like portage, tips, laundry, telephone calls, mineral water etc.",
      "Optional activities mentioned in the itinerary",
      "Early check-in charges will be added",
      "5% GST extra",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jodhpur - Local Sightseeing",
        description:
          "Arrival at Jodhpur Airport/Railway Station. Meet and greet by our representative/driver. Proceed to the hotel and complete check-in formalities. After some rest, proceed for Jodhpur sightseeing. Visit Mehrangarh Fort, one of Rajasthan's most magnificent forts, offering panoramic views of the Blue City. Visit Jaswant Thada, a beautiful marble memorial near Mehrangarh Fort. Later, explore Clock Tower and Sardar Market, famous for handicrafts, spices, textiles and local products. Return to the hotel. Overnight stay in Jodhpur.",
        meals: "Dinner",
        stay: "Overnight, Jodhpur",
      },
      {
        day: 2,
        title: "Jodhpur to Udaipur (approx. 250 km)",
        description:
          "Breakfast at the hotel. Check out and proceed towards Udaipur. En route, visit Ranakpur Jain Temple, renowned for its intricate marble architecture and beautifully carved pillars. Continue the journey towards Udaipur. On arrival, check in at the hotel and relax. Evening at leisure. Optional: Enjoy a Lake Pichola boat ride depending on availability and operational timings. Overnight stay in Udaipur.",
        meals: "Breakfast and Dinner",
        stay: "Overnight, Udaipur",
      },
      {
        day: 3,
        title: "Udaipur Local Sightseeing",
        description:
          "Breakfast at the hotel. Proceed for a full-day sightseeing tour of Udaipur. Visit City Palace, a magnificent palace complex overlooking Lake Pichola. Visit Jagdish Temple, an important historic temple in the old city. Visit Saheliyon Ki Bari, known for its gardens, fountains and marble work. Visit Fateh Sagar Lake. Later, explore the local markets of Udaipur for handicrafts and traditional Rajasthani items. Optional: Visit Bagore Ki Haveli and attend the evening cultural show, subject to ticket availability. Return to the hotel. Overnight stay in Udaipur.",
        meals: "Breakfast and Dinner",
        stay: "Overnight, Udaipur",
      },
      {
        day: 4,
        title: "Udaipur to Jaipur (approx. 400 km)",
        description:
          "Breakfast at the hotel. Check out and proceed towards Jaipur. Enjoy the scenic drive through Rajasthan. On arrival in Jaipur, check in at the hotel. After some rest, proceed for an evening visit to Birla Mandir. Later, explore the local markets of Jaipur. You can visit Bapu Bazaar / Johari Bazaar for jewellery, textiles, handicrafts and traditional Rajasthani products. Return to the hotel. Overnight stay in Jaipur.",
        meals: "Breakfast and Dinner",
        stay: "Overnight, Jaipur",
      },
      {
        day: 5,
        title: "Jaipur Full-Day Sightseeing",
        description:
          "Breakfast at the hotel. Proceed for Jaipur sightseeing. Visit Amber Fort, a magnificent hilltop fort showcasing Rajput architecture. En route, stop at Jal Mahal for photographs. Visit City Palace, the historic royal residence in the heart of Jaipur. Visit Jantar Mantar, the UNESCO-listed astronomical observatory. Visit Hawa Mahal and enjoy a photo stop from the outside. Later, proceed for shopping at the famous Jaipur markets. Return to the hotel. Overnight stay in Jaipur.",
        meals: "Breakfast and Dinner",
        stay: "Overnight, Jaipur",
      },
      {
        day: 6,
        title: "Jaipur Departure",
        description:
          "Breakfast at the hotel. Check out as per the hotel's check-out timing. Depending on the departure schedule, enjoy some free time for shopping or optional local sightseeing. Later, proceed for drop at Jaipur Airport/Railway Station. Tour ends with wonderful memories of Rajasthan.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004935",
    travelWindow: "December 2026",
    travellers: "8 travellers",
    rooms: 4,
    stays: [
      {
        destination: "Jaipur",
        hotel: "Foxoso Fiori Hotel or similar",
        nights: 2,
        meals: "Breakfast",
      },
      {
        destination: "Jodhpur",
        hotel: "Sri Ram Empire or similar",
        nights: 1,
        meals: "Breakfast",
      },
      {
        destination: "Udaipur",
        hotel: "Sterling Balicha or similar",
        nights: 2,
        meals: "Breakfast",
      },
    ],
    priceRows: [{ label: "Per adult", amount: 30500 }],
    metaTitle: "Charm of Rajasthan - 6 Days / 5 Nights",
    metaDescription:
      "Rajasthan in six days from ₹30,500 per adult - Mehrangarh Fort in Jodhpur, Ranakpur and the lakes of Udaipur, then Amber Fort and Hawa Mahal in Jaipur, by private Tempo Traveller. Land only.",
  },
  // ANDAMAN - NOVEMBER 28 - Dec 03rd.pdf
  {
    slug: "charm-of-andaman-5d4n",
    title: "Charm of Andaman",
    summary:
      "Begin your Andaman holiday in Port Blair, exploring its historic landmarks, beautiful beaches and the iconic Cellular Jail, followed by the captivating Light & Sound Show in the evening. Continue to Neil Island (Shaheed Dweep), known for its peaceful atmosphere, pristine beaches, turquoise waters and natural rock formations, with visits to Bharatpur Beach, Laxmanpur Beach and the Natural Bridge. Proceed to Havelock Island (Swaraj Dweep), where you can enjoy the spectacular Radhanagar Beach, explore the scenic Kalapathar Beach and experience optional water activities such as snorkelling, scuba diving and sea walking.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 2 travellers sharing 1 room; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "andaman",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 28000,
    heroImage: d("andaman"),
    highlights: [
      "Cellular Jail and the Light & Sound Show",
      "Radhanagar Beach, Havelock Island",
      "Bharatpur Beach, Laxmanpur Beach and the Natural Bridge, Neil Island",
      "Chidiya Tapu, Port Blair",
    ],
    inclusions: [
      "Vehicle: All transfers and sightseeing by Xylo / Scorpio / Marazzo / Ertiga",
      "All sightseeing done by personal AC vehicle",
      "All transfers, driver, entry tickets, ferry tickets, allowances, parking, toll taxes, fuel and all sightseeing (entry fees included) as per the itinerary in an air-conditioned vehicle",
      "Inter-island ferry transfers by private catamaran ferries Makruzz Premium / Nautica Luxury (subject to availability). If tickets are not available in Premium/Luxury class, the class will be changed & rates will be upgraded",
      "The services of vehicles on disposal basis & finishing the sightseeing tour as per the itinerary",
      "GST charges",
    ],
    exclusions: [
      "Round-trip airfare",
      "Lunch & dinner (except where noted)",
      "Early check-in or late check-out (standard check-in after 1400/1500 hrs, check-out before 1100/1200 hrs)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service and special orders",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Port Blair + Cellular Jail + Light & Sound Show",
        description:
          "On arrival at Port Blair, our representative will receive you at the airport and escort you to check in to the hotel / resort. After check-in, in the afternoon proceed to visit Corbyn Cove Beach, a coconut-fringed beach about 8 km from Port Blair city, ideal for swimming, and the National Memorial Cellular Jail, built by the British in 1905 to imprison Indian political freedom fighters. Late evening, witness the enthralling Sound and Light Show at Cellular Jail, where the heroic saga of the Indian freedom struggle is brought alive. Overnight stay at the respective hotel / resort at Port Blair.",
        meals: "None",
        stay: "Overnight, Port Blair",
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island (Swaraj Dweep) - Radhanagar Beach",
        description:
          "In the morning, get transferred from Phoenix Bay Harbour to Havelock Island via ferry from Port Blair. On arrival at Havelock Island, our representative will receive and escort you to the selected hotel. After freshening up, journey towards Radhanagar Beach (Beach No. 7), which Time Magazine rated the finest beach among the best beaches in Asia. It is an ideal place for swimming, sea bathing and basking on the sun-kissed beach. Stay here overnight amongst sandy beach and lush green forest in a comfortable beach resort at Havelock.",
        meals: "Breakfast",
        stay: "Overnight, Havelock Island",
      },
      {
        day: 3,
        title: "Havelock (Swaraj Dweep) - Neil Island (Shaheed Dweep), 2 hours by ferry",
        description:
          "Depart from the hotel in Havelock and board a ferry to Neil Island; on arrival, our representative will take you to your pre-booked hotel. Today's tour covers the beaches of Bharatpur and Laxmanpur. First, we cover Bharatpur Beach, the closest white sand beach to Neil's pier. The reef here is still unexplored and travellers can enjoy snorkelling, glass-bottom boat rides and jet-ski rides. Then we visit the natural rock formation, a natural wonder that looks like a bridge. We then visit Laxmanpur Beach, known for Neil Island's sunset, a wide-open white sand beach. Once finished, we will drop you back at your hotel. Today your stay will be on Neil Island.",
        meals: "Breakfast",
        stay: "Overnight, Neil Island",
      },
      {
        day: 4,
        title: "Neil Island (Shaheed Dweep) - Port Blair, 1 hour by ferry",
        description:
          "After breakfast, head to the Neil Island jetty to embark on the cruise to Port Blair. This cruise will last 01 hour 45 minutes. Upon arrival at the port of Port Blair, transfer to the hotel. Later, spend a half day in Port Blair to visit Chidiya Tapu. After that, back to the hotel and overnight stay at the hotel in Port Blair.",
        meals: "Breakfast only",
        stay: "Overnight, Port Blair",
      },
      {
        day: 5,
        title: "Depart from Andaman Island",
        description:
          "Morning after breakfast, check out and drop at Port Blair Airport for your further journey with wonderful memories.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "004869",
    travelWindow: "November 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Port Blair",
        hotel: "Hotel The King or similar",
        nights: 2,
        meals: "Breakfast",
      },
      {
        destination: "Havelock",
        hotel: "Hotel Radha Krishna or similar",
        nights: 1,
        meals: "Breakfast",
      },
      {
        destination: "Neil Island",
        hotel: "Deep Sea Resort or similar",
        nights: 1,
        meals: "Breakfast",
      },
    ],
    priceRows: [{ label: "Per adult", amount: 28000 }],
    metaTitle: "Charm of Andaman - 5 Days / 4 Nights",
    metaDescription:
      "Andaman in five days from ₹28,000 per adult - Cellular Jail and the Light & Sound Show, Radhanagar Beach on Havelock, and Neil Island's beaches and Natural Bridge, with private catamaran ferries. Land only.",
  },
];

export const packages = entries.map((pkg, i) => ({
  ...pkg,
  featured: FEATURED.includes(pkg.slug),
  order: i + 1,
}));

export default packages;
