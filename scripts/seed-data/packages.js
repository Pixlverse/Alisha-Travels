import { DESTINATION_IMAGES, EXTRA_IMAGES } from "./images.js";

/**
 * Package inventory: the client's own confirmed travel proposals.
 *
 * THE INVENTORY IS EXACTLY THREE FOLDERS, at the client's instruction: the
 * proposals in customizedpackage/ (`entries`, below), the limited-period
 * offers in promotionalpackage/ (`promotionalEntries`, further down) and the
 * group tours in fixeddepartures/ (`fixedDepartureEntries`). Older
 * proposals that were here are listed in RETIRED_PACKAGE_SLUGS, and the seed
 * deletes them.
 *
 * Every entry below is transcribed from one of the agency's PDF proposals
 * (the file name is in the comment above it), so the site launches with the
 * trips the client actually sells and the admin does not have to key them in
 * one by one. Where a proposal predates the current template and has no "Trip
 * at a Glance" paragraph or cover highlight line, the summary and highlights
 * were written from its itinerary; everything else is as the PDF has it.
 *
 * Only proposals for a destination that already exists in destinations.js are
 * here. Fixed departures carry their dates in `departures`; later dates can
 * also be added through /admin/ as they are scheduled.
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

/**
 * CUSTOMIZED PROPOSALS carry no price, at the client's instruction: each was
 * quoted for one party, so every one is "Price on request" (`priceFrom: 0`,
 * no priceRows or priceNote - see formatPackagePrice in lib/format.js) and the
 * visitor enquires for a quote of their own.
 */
const entries = [
  // 004577 - 6D 5N - BHUTAN - NOV - 2 ADULTS.pdf
  {
    slug: "magical-bhutan-a-himalayan-adventure-6d5n",
    title: "Magical Bhutan - A Himalayan Adventure",
    summary:
      "Discover the enchanting beauty of Bhutan, exploring its majestic Himalayan landscapes, ancient monasteries, vibrant culture, and peaceful valleys. Experience the charm of Paro, Thimphu, and Punakha while enjoying Bhutan's unique traditions, breathtaking scenery, and warm hospitality.",
    destinationSlug: "bhutan",
    category: "honeymoon",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 0,
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
      "Bhutan in six days - by road from Bagdogra through Phuentsholing to Thimphu and Paro, with Kuensel Phodrang, Tashichho Dzong and the Tiger's Nest. Land only.",
  },
  // 004682 BALI 4N 5D 3A NOV.pdf
  {
    slug: "fascinating-bali-5d4n",
    title: "Fascinating Bali",
    summary:
      "Five days in Bali - Padang Padang Beach and the Uluwatu sunset, a full day on Nusa Penida's west coast, and Kintamani's volcano views with a coffee plantation, Tegalalang and the jungle swing.",
    destinationSlug: "bali",
    category: "family",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 0,
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
    metaTitle: "Fascinating Bali - 5 Days / 4 Nights",
    metaDescription:
      "Bali in five days - Padang Padang and the Uluwatu sunset, a full day on Nusa Penida, and Kintamani with the jungle swing. Land only.",
  },
  // 004752 VIETNAM 3N4D 2A NOV 2026.pdf
  {
    slug: "fascinating-vietnam-4d3n",
    title: "Fascinating Vietnam",
    summary:
      "Four days in Hanoi - explore the capital's historic landmarks, Old Quarter and Train Street, discover the scenic beauty of Ninh Binh, and enjoy a day cruise through the spectacular Halong Bay.",
    destinationSlug: "vietnam",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 0,
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
    metaTitle: "Fascinating Vietnam - 4 Days / 3 Nights",
    metaDescription:
      "Vietnam in four days - a Hanoi city tour with the Old Quarter and Train Street, Ninh Binh's Trang An and Mua Cave, and a Halong Bay day cruise. Land only.",
  },
  // 4N5D VIETNAM  2A NOV.pdf
  {
    slug: "vietnam-halong-day-cruise-5d4n",
    title: "Fascinating Vietnam",
    summary:
      "Five days in Vietnam - the capital's Old Quarter and Train Street, a day cruise through Halong Bay, and Ninh Binh with the Hoa Lu ancient capital.",
    destinationSlug: "vietnam",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 0,
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
    metaTitle: "Fascinating Vietnam - 5 Days / 4 Nights",
    metaDescription:
      "Vietnam in five days - Hanoi's Old Quarter and Train Street, Hoa Lu and Tam Coc at Ninh Binh, and a night aboard a Halong Bay cruise. Land only.",
  },
  // 004946 MALAYSIA 2A 3N4D JANUARY 2027.pdf
  {
    slug: "charm-of-malaysia-4d3n",
    title: "Charm of Malaysia",
    summary:
      "Four days across Kuala Lumpur - Putrajaya's modern skyline, the golden statue and limestone caves at Batu, a cable-car ride into the hills at Genting, and the city's own landmarks.",
    destinationSlug: "malaysia",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 0,
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
    metaTitle: "Charm of Malaysia - 4 Days / 3 Nights",
    metaDescription:
      "Kuala Lumpur in four days - Putrajaya, Batu Caves, the Genting Skyway cable car, the KL city tour and the KLCC Aquarium. Land only.",
  },
  // 004947 DUBAI 2A 3N4D NOVEMBER 2026.pdf
  {
    slug: "dubai-the-city-of-dreams-4d3n",
    title: "Dubai - The City of Dreams",
    summary:
      "Experience the dazzling city of Dubai, featuring iconic landmarks, breathtaking skyline views, vibrant shopping destinations, cultural experiences, and the spectacular Dubai Miracle Garden. Enjoy unforgettable adventures including a Desert Safari with BBQ Dinner, Dubai Creek Cruise, Burj Khalifa, Global Village, and Sharjah City Tour for a perfect blend of luxury, culture, and adventure.",
    destinationSlug: "dubai",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 0,
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
    metaTitle: "Dubai - The City of Dreams - 4 Days / 3 Nights",
    metaDescription:
      "Dubai in four days - a creek dinner cruise, the Burj Khalifa, Global Village, the Miracle Garden, a desert safari with BBQ and an Abu Dhabi city tour. Land only.",
  },
  // THAILAND 3N4D JAN.pdf
  {
    slug: "charm-of-pattaya-bangkok-4d3n",
    title: "Charm of Pattaya & Bangkok",
    summary:
      "Four days across Thailand's vibrant coast and capital - enjoy Tiger Topia, Coral Island, Pattaya's Floating Market and Alcazar Show before exploring Bangkok's iconic temples and Safari World & Marine Park. A family-friendly holiday blending wildlife, culture and entertainment with private transfers and selected shared experiences.",
    destinationSlug: "thailand",
    category: "family",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 0,
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
    metaTitle: "Charm of Pattaya & Bangkok - 4 Days / 3 Nights",
    metaDescription:
      "Pattaya and Bangkok in four days - Tiger Topia, the Alcazar show, Coral Island, the floating market, Safari World and Bangkok's temples. Land only.",
  },

  // 004676 MANALI 2A NOV 4N 5D.pdf
  {
    slug: "fascinating-delhi-manali-5d4n",
    title: "Fascinating Delhi - Manali",
    summary:
      "Five days between the capital and the Himalayas - an overnight Volvo journey each way, local sightseeing and temples in Manali, the meadows of Solang Valley, and a half-day sweep of Delhi's landmarks before departure. A limited-period summer package, priced for groups of four or more.",
    destinationSlug: "delhi-manali",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 0,
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
    metaTitle: "Fascinating Delhi - Manali - 5 Days / 4 Nights",
    metaDescription:
      "Delhi and Manali in five days - overnight Volvo both ways, Hadimba Devi Temple, Solang Valley, Kullu and Naggar Castle, with breakfast and dinner in Manali.",
  },
  // 004929 DELHI AGRA 2N3D NOV 2026.pdf
  {
    slug: "charm-of-delhi-agra-3d2n",
    title: "Charm of Delhi & Agra",
    summary:
      "Three days across Delhi and Agra - Rajghat, India Gate and Akshardham on arrival, a day trip to the Taj Mahal, Agra Fort and the Baby Taj, and the Red Fort, Qutub Minar and Lotus Temple before you fly.",
    destinationSlug: "golden-triangle",
    category: "honeymoon",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 0,
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
    metaTitle: "Charm of Delhi & Agra - 3 Days / 2 Nights",
    metaDescription:
      "Delhi and Agra in three days - India Gate and Akshardham, the Taj Mahal and Agra Fort, then the Red Fort, Qutub Minar and Lotus Temple. Land only.",
  },
  // 004931 GOA 2N3D 5A October 2026..pdf
  {
    slug: "goa-3d2n",
    title: "Goa",
    summary:
      "Three days across Goa's two coasts - a beach-hopping tour of the north from Aguada Fort to Baga, then Old Goa's churches, temples and a spice garden in the south.",
    destinationSlug: "goa",
    category: "family",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 0,
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
    metaTitle: "Goa - 3 Days / 2 Nights",
    metaDescription:
      "Goa in three days - Aguada Fort and the North Goa beaches to Baga, then Old Goa's churches, a spice garden and sunset at Miramar. Train fare extra.",
  },
  // 004944 RAJASTHAN 4N5D 2A  NOVEMBER 2026.pdf
  {
    slug: "charm-of-rajasthan-5d4n",
    title: "Charm of Rajasthan",
    summary:
      "Arrive in Jaipur and explore the vibrant Pink City for two days, followed by a journey to Jaisalmer for an unforgettable desert camp experience with a camel safari and cultural evening. Continue to Udaipur, the City of Lakes, for sightseeing and leisure before concluding the trip with departure from Udaipur.",
    destinationSlug: "rajasthan",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 0,
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
    metaTitle: "Charm of Rajasthan - 5 Days / 4 Nights",
    metaDescription:
      "Rajasthan in five days - two days in Jaipur's Pink City, a Jaisalmer desert camp with camel safari and cultural evening, then Udaipur's lakes. Land only.",
  },
  // 004011 KUL LGK PACKAGE 2 ADULTS.pdf
  {
    slug: "charm-of-langkawi-malaysia-5d4n",
    title: "Charm of Langkawi & Malaysia",
    summary:
      "Five days from Langkawi to Kuala Lumpur - Eagle Square and Pantai Cenang, island hopping and the SkyCab and Sky Bridge, then Putrajaya, Batu Caves, the Genting Skyway and a Kuala Lumpur city tour, with return flights included.",
    destinationSlug: "malaysia",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 0,
    heroImage: x("kualaLumpur"),
    highlights: [
      "Langkawi Island Hopping",
      "Langkawi SkyCab and Sky Bridge",
      "Putrajaya",
      "Batu Caves and Genting Highlands",
      "Kuala Lumpur City Tour",
    ],
    inclusions: [
      "Round trip air fare",
      "04 nights' accommodation in above-mentioned hotels",
      "01 double room",
      "04 breakfasts (complimentary from hotel - should adhere to hotel timing) (except on arrival day)",
      "Meet & greet at the airport",
      "Sightseeing as per the above-mentioned itinerary",
      "All entry tickets as per the itinerary",
      "Private vehicle (except island hopping boat ride)",
      "GST",
    ],
    exclusions: [
      "TCS",
      "Early check-in at hotel, late check-out at hotel",
      "Check-in time in hotel is after 1400/1500 hours and check-out is before 1100/1200 hours",
      "Meal plan mentioned as per itinerary",
      "Any extra excursion or sightseeing apart from suggested tour itinerary",
      "Any personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
      "Other meals not mentioned, laundry, telephone calls, incidentals",
    ],
    itinerary: [
      {
        day: 1,
        title: "Langkawi Arrival",
        description:
          "Meet and greet at the airport, followed by transfer to the hotel for check-in (standard check-in time is 3:00 PM; guests may relax in the hotel lobby until rooms are ready). In the evening, proceed for a tour to Eagle Square and Pantai Cenang, where you can enjoy scenic views, local attractions, and a relaxing seaside atmosphere.",
        meals: "None",
        stay: "Overnight, Langkawi",
      },
      {
        day: 2,
        title: "Full Day Island Tour",
        description:
          "Your day will be dedicated to an exciting full-day island tour in Langkawi, combining natural beauty with thrilling attractions. You will begin with an island hopping boat ride (SIC) where you will explore some of Langkawi's most scenic islands, including Dayang Bunting Island, famous for its unique freshwater lake surrounded by lush greenery. Guests who wish to access the lake are required to pay the conservation fee directly (RM 20 per adult and RM 10 per child). The island hopping experience also offers opportunities to enjoy picturesque views, spot wildlife, and relax amidst nature.\n\nAfter the boat tour, you will proceed to the Oriental Village, a popular attraction located at the base of Gunung Mat Cincang. Here, you will enjoy multiple included attractions such as the Langkawi SkyCab, which takes you on a breathtaking ride up the mountain with stunning panoramic views. At the top, you will visit the iconic Langkawi Sky Bridge, a remarkable suspended bridge offering spectacular views of the surrounding islands and rainforest. You will also experience the SkyGlide, providing easy access between the cable car station and the Sky Bridge.\n\nThe tour further includes immersive attractions such as SkyDome, SkyRex, and the 3D Art Museum Langkawi, where you can enjoy fun, interactive exhibits and capture memorable photos. After a full day of exploration and adventure, you will return to your hotel.",
        meals: "Breakfast",
        stay: "Overnight, Langkawi",
      },
      {
        day: 3,
        title: "Transfer to Kuala Lumpur",
        description:
          "Check out from Langkawi hotel and transfer to the airport for your onward flight to Kuala Lumpur. Upon arrival, meet and greet at the airport, followed by a tour to Putrajaya, known for its beautiful architecture and scenic landscapes.\n\nLater, proceed to the hotel for check-in (standard check-in time is 3:00 PM; guests may wait in the lobby until rooms are ready). In the evening, enjoy a 2-hour tour to Bukit Bintang, a vibrant area for shopping, dining, and lively city vibes.",
        meals: "Breakfast",
        stay: "Overnight, Kuala Lumpur",
      },
      {
        day: 4,
        title: "Genting Highlands + Batu Caves + Cable Car",
        description:
          "Your day will begin with a visit to the iconic Batu Caves, where you can explore the sacred temple set within towering limestone caves and admire the impressive golden statue at the entrance. You will have time to climb the colorful steps and take in the cultural and spiritual atmosphere of this popular attraction.\n\nAfterward, you will proceed towards the cool highlands of Genting Highlands, known for its scenic views, entertainment, and refreshing climate. To reach the top, you will enjoy a ride on the Genting Skyway, with 2-way cable car tickets included. The ride offers breathtaking panoramic views of the lush rainforest below and surrounding mountains.\n\nUpon arrival, you will have free time to explore the attractions, shopping outlets, and entertainment options available at Genting Highlands before returning via the cable car and heading back to your hotel.",
        meals: "Breakfast",
        stay: "Overnight, Kuala Lumpur",
      },
      {
        day: 5,
        title: "Kuala Lumpur City Tour - Departure",
        description:
          "After breakfast, check out from the hotel and proceed for a Kuala Lumpur city tour, including entry to KLCC Aquarium. The tour covers key attractions such as a photo stop at the Petronas Twin Towers, National Mosque, National Monument, KL Tower photo stop, Independence Square, and the King's Palace. After the tour, transfer to the airport for departure.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004011",
    travelWindow: "August 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Langkawi",
        hotel: "HIG / De Baron or similar",
        nights: 2,
        meals: "Breakfast",
      },
      {
        destination: "Kuala Lumpur",
        hotel: "Metrostar or Howard Johnson or similar",
        nights: 2,
        meals: "Breakfast",
      },
    ],
    stayNote:
      "Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply.",
    metaTitle: "Charm of Langkawi & Malaysia - 5 Days / 4 Nights",
    metaDescription:
      "Langkawi and Kuala Lumpur in five days - island hopping, the SkyCab and Sky Bridge, Batu Caves and the Genting Skyway. Flights included.",
  },
  // 004149 - 5D 4N - THAILAND - SEP - 9 ADULTS.pdf
  {
    slug: "charm-of-thailand-5d4n",
    title: "Charm of Thailand",
    summary:
      "Five days across Thailand - a Phuket city tour and Tiger Kingdom, a big-boat day to the Phi Phi Islands, the Emerald Pool and Krabi Hot Springs on the way to Krabi, then Bangkok's Amphawa Floating Market, the Maeklong Railway Market and Safari World.",
    destinationSlug: "thailand",
    category: "group-tours",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 0,
    heroImage: x("phuket"),
    highlights: ["Phuket", "Krabi", "Bangkok"],
    inclusions: [
      "04 nights stay in 3 double sharing & 1 triple sharing room on above mentioned hotels in Phuket, Krabi & Bangkok",
      "Daily Breakfast (Except on Arrival Day)",
      "Lunch @ Phi Phi Island, Emerald Pool, Safari World",
      "Meet & Greet at the airport",
      "Sightseeing as per the above mentioned itinerary",
      "All entry tickets as per the Itinerary",
      "All tours and transfers on private & SIC basis",
      "Transfers between Phuket Airport - Phuket Hotel - Krabi Hotel - Phuket Airport by PVT Van",
      "GST",
    ],
    exclusions: [
      "Roundtrip Airfare",
      "TCS",
      "Lunch & Dinner not mentioned in the itinerary",
      "Phi Phi Island, Emerald Pool - National Park Fee",
      "Early Check in at hotel, late Check-out at hotel",
      "Check in time in Hotel is after 1400/1500 hours and check out is before 1100/1200 hours",
      "Other meals not mentioned, laundry, telephone calls, incidentals",
      "Any extra excursion or sightseeing apart from suggested tour itinerary",
      "Any personal expenses, room service and special orders",
      "Alcoholic and nonalcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival + Phuket City Tour + Tiger Kingdom",
        description:
          "Upon arrival at Phuket International Airport, meet and greet with our representative and proceed for your transfer by private van. En route, enjoy a brief Phuket city tour covering some of the popular viewpoints and local attractions of the island. Later, visit Tiger Kingdom Phuket for a walk-around experience and photo opportunities from outside the enclosures.\n\nAfter the tour, proceed to the hotel and complete the check-in formalities. The rest of the day is free for leisure. You can explore the lively atmosphere of Patong Beach, which is located approximately 10-15 minutes walking distance from the hotel. Enjoy the beach, nearby cafés, shopping areas, and vibrant nightlife at your own pace. Overnight stay at the hotel in Phuket.",
        meals: "None",
        stay: "Overnight, Phuket",
      },
      {
        day: 2,
        title: "Phi Phi Island Full-Day Tour with Lunch (Big Boat, SIC Basis)",
        description:
          "After breakfast, you will transfer to the pier to board a big boat for a full-day excursion to the stunning Phi Phi Islands. Your journey will take you across crystal-clear waters to Maya Bay, famously featured in the movie The Beach, where you can admire its white sand and dramatic limestone cliffs (entry conditions may vary). You will stop at Monkey Beach, where playful monkeys can often be seen along the shore.\n\nA buffet lunch will be served on Phi Phi Don, where you can relax, swim, or explore the island before heading back to Phuket by evening.\n\n(Note: National Park fee is excluded and payable separately 400 Thai Baht per person)",
        meals: "Breakfast & Lunch",
        stay: "Overnight, Phuket",
      },
      {
        day: 3,
        title: "Phuket to Krabi Transfer",
        description:
          "After breakfast, check out from the hotel in Phuket and proceed towards Krabi by private van. En route, visit the famous Emerald Pool, known for its crystal-clear natural water surrounded by lush rainforest. Later, continue to the relaxing Krabi Hot Springs, where you can enjoy the naturally warm mineral water amidst a peaceful tropical setting. Enjoy lunch during the tour and then continue your journey to Krabi.\n\nUpon arrival, proceed to the hotel and complete the check-in formalities. The evening is free for leisure. Guests can enjoy easy beach access located approximately 10 minutes from the hotel and relax by the beautiful coastline at their own pace. Overnight stay at the hotel in Krabi.",
        meals: "Breakfast & Lunch",
        stay: "Overnight, Krabi",
      },
      {
        day: 4,
        title: "Flight to Bangkok + Amphawa Floating Market",
        description:
          "After breakfast, check out from the hotel in Krabi and proceed to Krabi International Airport for your flight to Bangkok. Upon arrival at Don Mueang International Airport, meet our representative and continue your sightseeing tour by private van.\n\nVisit the famous Amphawa Floating Market, one of Thailand's most popular traditional floating markets, where you can experience local culture, riverside shopping, and authentic Thai street food. Later, proceed to the unique Maeklong Railway Market, also known as the Risky Market, where vendors quickly move their stalls away as the train passes directly through the market tracks.\n\nAfter the tour, proceed to the hotel in Bangkok and complete the check-in formalities. The rest of the evening is free for leisure. Guests can relax at the hotel or explore the nearby shopping areas and nightlife of Bangkok at their own pace. Overnight stay at the hotel in Bangkok.",
        meals: "Breakfast",
        stay: "Overnight, Bangkok",
      },
      {
        day: 5,
        title: "Safari World and Marine Park - Bangkok Departure",
        description:
          "After breakfast, check out from the hotel in Bangkok and proceed for an exciting visit to Safari World Bangkok by private van. Enjoy a fun-filled day exploring both the Safari Park and Marine Park, where you can witness a variety of wildlife, animal shows, dolphin performances, and entertaining attractions suitable for all age groups.\n\nEnjoy lunch during the tour before continuing your journey to the airport. After completing the sightseeing, proceed to Don Mueang International Airport for your departure flight with wonderful memories of your Thailand vacation. End of Services - Have a Pleasant Journey!",
        meals: "Breakfast & Dinner",
      },
    ],
    referenceNo: "004149",
    travelWindow: "August 2026",
    travellers: "9 adults",
    rooms: 4,
    stays: [
      { destination: "Phuket", hotel: "Ashlee Plaza Hotel & Spa or similar", nights: 2, meals: "Breakfast" },
      { destination: "Krabi", hotel: "Sunda Resort or similar", nights: 1, meals: "Breakfast" },
      { destination: "Bangkok", hotel: "Seasons Siam or similar", nights: 1, meals: "Breakfast" },
    ],
    stayNote:
      "Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply. Vehicle will run only till the point it is allowed in a particular destination; if the guest wants to travel/visit beyond that point, local transport will have to be arranged by the guest. Vehicle is used strictly as per the itinerary and not for disposal. The sightseeing mentioned in the itinerary will definitely be covered as planned; however, the exact timings and days of the sightseeing will be confirmed only one day prior to departure through the confirmation voucher, as the schedule may be adjusted to ensure smooth and efficient transportation.",
    bookingPolicy:
      "Tour: 50% at the time of confirmation, 50% at 30 days prior to departure date. Air: 100% at the time of confirmation.",
    cancellationPolicy:
      "Tour: 50% before 30 days of travel date, 100% within 30 days of travel date. Air: As per airline policy.",
    metaTitle: "Charm of Thailand - 5 Days / 4 Nights",
    metaDescription:
      "Phuket, Krabi and Bangkok in five days - a Phi Phi Islands day trip, the Emerald Pool, Amphawa Floating Market and Safari World. Land only.",
  },
  // 004645 HYDERABAD 3A AUG 2N 3D.pdf
  {
    slug: "charm-of-hyderabad-3d2n",
    title: "Charm of Hyderabad",
    summary:
      "Three days Hyderabad - temples and lakeside parks, a full day at the world's largest film studio complex, Hyderabad's Mughal-era heritage, and a visit to Nehru Charminar before departure.",
    destinationSlug: "hyderabad",
    category: "family",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 0,
    heroImage: d("hyderabad"),
    highlights: ["Birla Mandir", "Ramoji Film City", "Charminar"],
    inclusions: [
      "2 nights' A/C room accommodation",
      "Daily Breakfast except on arrival day",
      "Airport Pick-up and drop",
      "Ramoji Film City entry ticket",
      "All local sightseeing entry tickets as per the itinerary",
      "Ramoji Film Entry Tickets",
      "Sedan car for sightseeing as per the itinerary",
      "Toll, parking and driver allowance",
      "GST",
    ],
    exclusions: [
      "Round Trip Airfare",
      "Early check-in or late check-out (standard check-in 12:00pm, check-out 10:00am)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Other sightseeing Entry Tickets",
      "Personal expenses, room service, special orders, and alcoholic/non-alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Local Sightseeing",
        description:
          "On arrival at Hyderabad Airport, transfer to your hotel to check in and freshen up.\n\nThe city tour covers Birla Mandir, NTR Gardens, the 125-foot bronze Statue of Dr. B.R. Ambedkar, Lumbini Park and Hussain Sagar Lake, ending with the evening Laser Show before returning to the hotel.",
        meals: "Breakfast",
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
      { destination: "Hyderabad", hotel: "Hotel Central Park or similar", nights: 2, meals: "Breakfast" },
    ],
    metaTitle: "Charm of Hyderabad - 3 Days / 2 Nights",
    metaDescription:
      "Hyderabad in three days - Birla Mandir and Hussain Sagar, a full day at Ramoji Film City, then Charminar and Golconda Fort. Land only.",
  },
  // 004946 MALAYSIA 4A 2N3D JANUARY 2027.pdf
  {
    slug: "charm-of-malaysia-3d2n",
    title: "Charm of Malaysia",
    summary:
      "Three days across Kuala Lumpur - Putrajaya's modern skyline, the golden statue and limestone caves at Batu, a cable-car ride into the hills at Genting, and the city's own landmarks.",
    destinationSlug: "malaysia",
    category: "family",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 0,
    heroImage: x("kualaLumpur"),
    highlights: ["Putrajaya", "Batu Caves", "Genting Highlands"],
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
        title: "Arrival - Putrajaya Tour",
        description:
          "Upon arrival at Kuala Lumpur International Airport, you will be met and greeted by our representative and transferred to your hotel in Kuala Lumpur, with a visit to Putrajaya en route. Upon arrival at the hotel, you will proceed with check-in. Standard hotel check-in applies, and guests may have to wait in the hotel lobby until the room is ready.\n\nIn the evening, enjoy a 2-hour tour of Bukit Bintang, one of Kuala Lumpur's most vibrant shopping and entertainment districts. After the tour, return to the hotel for an overnight stay in Kuala Lumpur.",
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
        title: "Kuala Lumpur City Tour + Departure",
        description:
          "After breakfast, embark on a half-day Kuala Lumpur city tour lasting approximately 4 hours. The tour includes photo stops at the iconic Petronas Twin Towers and KL Tower, visits to the National Mosque, National Monument, Independence Square, the King's Palace, and a Chocolate Outlet.\n\nYour tour also includes entry to the KL Tower Observatory Deck & KLCC Aquarium, where entry tickets are included; then you will be transferred to Kuala Lumpur International Airport for your onward flight, marking the end of your memorable Malaysia trip.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "004946",
    travelWindow: "January 2027",
    travellers: "4 adults",
    rooms: 2,
    stays: [
      { destination: "Kuala Lumpur", hotel: "Howard Johnson or similar", nights: 2, meals: "Breakfast" },
    ],
    metaTitle: "Charm of Malaysia - 3 Days / 2 Nights",
    metaDescription:
      "Kuala Lumpur in three days - Putrajaya, Batu Caves, the Genting Skyway cable car, the KL city tour and the KLCC Aquarium. Land only.",
  },
  // 004579 - 4D 3N - GEORGIA - OCT - 2 ADULTS.pdf
  {
    slug: "incredible-georgia-4d3n",
    title: "Incredible Georgia",
    summary:
      "Explore the vibrant city of Tbilisi, followed by the scenic mountain landscapes of Gudauri and the breathtaking beauty of Kazbegi. Experience Georgia's stunning Caucasus Mountains, picturesque valleys, and charming mountain towns on this memorable journey.",
    destinationSlug: "georgia",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 0,
    heroImage: d("georgia"),
    highlights: ["Tbilisi", "Gudauri", "Kazbegi"],
    inclusions: [
      "3 nights' accommodation at the above-mentioned hotel",
      "Daily breakfast (except on arrival day)",
      "Meal plan as per the itinerary",
      "All tours & transfers on PVT Vehicle",
      "All sightseeing entry tickets as per the itinerary",
      "Cableway",
      "GST",
    ],
    exclusions: [
      "Round-trip air fare",
      "TCS",
      "Georgia Visa",
      "Lunch & Dinner",
      "Insurance",
      "Guide charges",
      "Early check-in or late check-out (standard check-in after 1400/1500 hrs, check-out before 1100/1200 hrs)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tbilisi - Transfer to Hotel",
        description:
          "Upon arrival at Tbilisi International Airport, meet and greet by our representative and receive assistance with your transfer to the hotel. Proceed to the hotel and complete the check-in formalities as per the hotel's standard check-in policy.\n\nAfter check-in, spend the rest of the day at leisure to relax and recover from the journey, or explore the nearby surroundings at your own pace. Overnight stay at the hotel in Tbilisi.",
        meals: "None",
        stay: "Overnight, Tbilisi",
      },
      {
        day: 2,
        title: "Tbilisi City Tour",
        description:
          "After breakfast at the hotel, proceed for a full-day sightseeing tour of Tbilisi, the charming capital city of Georgia. Begin with a visit to the historic Narikala Fortress, offering beautiful panoramic views of the city, followed by a walk through Abanotubani, the famous old town known for its traditional sulfur baths and charming streets.\n\nContinue to the Mother of Georgia Monument, one of Tbilisi's most recognizable landmarks, and visit the magnificent Sameba Cathedral, also known as the Holy Trinity Cathedral of Tbilisi. Later, drive along Rustaveli Avenue, the city's main boulevard, and visit Freedom Square, an important landmark surrounded by historic buildings and lively city attractions.\n\nProceed to the picturesque Bridge of Peace, a modern architectural landmark spanning the Mtkvari River. Enjoy a scenic Cableway Ride offering wonderful aerial views of Tbilisi's Old Town, river, and surrounding hills. After completing the sightseeing, return to the hotel and spend the evening at leisure. Overnight stay at the hotel in Tbilisi.",
        meals: "Breakfast",
        stay: "Overnight, Tbilisi",
      },
      {
        day: 3,
        title: "Mountains Tour: Gudauri & Kazbegi",
        description:
          "After breakfast at the hotel, proceed for a scenic full-day mountain excursion to Gudauri and Kazbegi, passing through some of Georgia's most spectacular landscapes. Begin with a photo stop at the beautiful Zhinvali Reservoir, surrounded by lush green mountains, and continue to the historic Ananuri Fortress, a picturesque medieval complex overlooking the reservoir. Proceed towards Pasanauri, a charming mountain town known for its scenic surroundings and traditional Georgian atmosphere. Continue the journey through the breathtaking Caucasus Mountains to the Russia-Georgia Friendship Monument, located near Gudauri, where you can enjoy panoramic views of the surrounding valleys and mountains.\n\nLater, explore Gudauri, one of Georgia's most popular mountain resorts, and continue towards Kazbegi (Stepantsminda), a picturesque town surrounded by dramatic Caucasus peaks. Guests may optionally visit the iconic Gergeti Trinity Church, dramatically situated on a hilltop with stunning views of Mount Kazbek and the surrounding mountains (subject to weather and road conditions; additional charges may apply).\n\nAfter enjoying the scenic mountain landscapes and sightseeing, proceed back to Tbilisi and return to the hotel. Overnight stay at the hotel in Tbilisi.",
        meals: "Breakfast",
        stay: "Overnight, Tbilisi",
      },
      {
        day: 4,
        title: "Check Out & Airport Drop / Departure",
        description:
          "After breakfast at the hotel, enjoy some free time at leisure for relaxation or last-minute shopping, subject to the departure schedule. Complete the hotel check-out formalities as per the hotel's policy and proceed for your scheduled transfer to Tbilisi International Airport. Arrive at the airport in time to complete the check-in and departure formalities for your onward journey, marking the end of your memorable Georgia tour.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004579",
    travelWindow: "October 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Tbilisi",
        hotel: "Old Wall Hotel or similar",
        nights: 3,
        meals: "Breakfast",
      },
    ],
    metaTitle: "Incredible Georgia - 4 Days / 3 Nights",
    metaDescription:
      "Georgia in four days - Tbilisi's Narikala Fortress and cableway, then Ananuri, Gudauri and Kazbegi in the Caucasus. Land only.",
  },
  // 004588 - 4D 3N - ALBANIA - NOV - 5 ADULTS, 3 CHILDREN.pdf
  {
    slug: "albania-the-pulse-of-tirana-4d3n",
    title: "Albania - The Pulse of Tirana",
    summary:
      "Explore Tirana, Albania, discovering its vibrant city life, historic landmarks, colourful streets, cultural attractions, and beautiful surrounding landscapes.",
    destinationSlug: "albania",
    category: "family",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 0,
    heroImage: d("albania"),
    highlights: ["Tirana", "Lezha and Shkoder"],
    inclusions: [
      "Accommodation: 02 Double & 01 Triple Rooms",
      "Breakfast as per the itinerary (Except on arrival day)",
      "All entry tickets as per the itinerary",
      "Meet & Greet at the airport",
      "Service Itinerary (Sightseeing/Excursion/Tickets on SIC Sharing basis. Client has to reach starting point on his own)",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "TCS",
      "Lunch & Dinner",
      "Tour Guide",
      "Early check in & Late check-out",
      "Check in time in Hotel is after 1400/1500 hours and check out is before 1100/1200 hours",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Personal expenses, room service, special orders, and alcoholic/non-alcoholic beverages",
      "Any extra excursion or sightseeing beyond the itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tirana",
        description:
          "Upon arrival at Tirana International Airport, meet our representative who will assist you with the arrival formalities and transfer you to your hotel in Tirana on a private basis using 02 vehicles.\n\nUpon arrival at the hotel, complete the check-in formalities as per the hotel's policy and relax at the hotel. The rest of the day is free at leisure to explore the surroundings or unwind after your journey. Overnight stay at the hotel in Tirana.",
        meals: "No meals",
        stay: "Overnight, Tirana",
      },
      {
        day: 2,
        title: "Tirana Walking Tour - 02 Hours",
        description:
          "After breakfast, proceed for a 02-hour guided walking tour of Tirana, exploring the city's main landmarks and cultural highlights on foot.\n\nVisit Skanderbeg Square, the heart of Tirana, and admire important attractions such as the Et'hem Bey Mosque, Clock Tower, National History Museum (exterior), and Bunk'Art surroundings. Stroll through the lively streets and discover the city's colourful architecture, local atmosphere, and historical heritage. After the walking tour, return to the hotel and enjoy the rest of the day at leisure. Overnight stay at the hotel in Tirana.",
        meals: "Breakfast",
        stay: "Overnight, Tirana",
      },
      {
        day: 3,
        title: "Full-Day Lezha & Shkoder Tour - SIC Basis",
        description:
          "After breakfast, proceed for a full-day SIC (Seat-in-Coach) excursion to Lezha and Shkoder, two historic destinations in northern Albania.\n\nBegin with a visit to Lezha, known for its rich historical heritage, where you can explore the Lezha Castle and enjoy panoramic views of the surrounding landscape. Continue to Shkoder, one of Albania's oldest cities, and visit the impressive Rozafa Castle, offering beautiful views over Lake Shkoder and the surrounding areas. Explore the city centre and its main landmarks while experiencing the local culture and atmosphere. After completing the sightseeing, return to Tirana by SIC transfer. Overnight stay at the hotel in Tirana.",
        meals: "Breakfast",
        stay: "Overnight, Tirana",
      },
      {
        day: 4,
        title: "Departure from Tirana",
        description:
          "After breakfast, check out from the hotel as per the hotel's check-out policy. Later, proceed for your private transfer from the hotel to Tirana International Airport using 02 vehicles, allowing sufficient time for airport formalities and your onward flight. Upon arrival at the airport, complete the check-in and security procedures for your departure. End of the tour with wonderful memories of Albania.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004588",
    travelWindow: "November 2026",
    travellers: "5 adults, 3 children",
    rooms: 3,
    stays: [
      {
        destination: "Tirana",
        hotel: "Hotel Te Stela Resort or similar",
        nights: 3,
        meals: "Breakfast",
      },
    ],
    stayNote:
      "Hotel category is confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    metaTitle: "Albania - The Pulse of Tirana - 4 Days / 3 Nights",
    metaDescription:
      "Albania in four days - a guided walk around Tirana's Skanderbeg Square, then Lezha Castle and Shkoder's Rozafa Castle. Land only.",
  },
  // LAKSHADWEEP 15A OCT 3N 4D.pdf
  {
    slug: "charm-of-lakshadweep-4d3n",
    title: "Charm of Lakshadweep",
    summary:
      "Four days on Agatti Island - lagoon beaches and jetty views, a full day of water sports and beach activities, and a glass-bottom boat excursion to Kalpetti Island with the chance of spotting sea turtles. Three accommodation tiers are quoted below.",
    destinationSlug: "lakshadweep",
    category: "group-tours",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 0,
    heroImage: d("lakshadweep"),
    highlights: ["Agatti Island", "Water Sports", "Kalpetti Island"],
    inclusions: [
      "3 nights' accommodation at the above-mentioned property",
      "Entry permit and documentation charges",
      "3 breakfasts, 3 lunches, 3 dinners (veg/non-veg)",
      "Agatti Island and Kalpetti Island sightseeing",
      "Agatti-Kalpetti inter-island boat charge",
      "Kayaking, shore snorkelling and glass-bottom boat",
      "Tour guide",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "Early check-in or late check-out (standard check-in 11:00am, check-out 9:00am)",
      "Scuba diving and other optional water activities",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
      "Bangaram or Thinnakara Island visits",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Agatti",
        description:
          "On arrival at Agatti Airport, you'll be welcomed and escorted to your accommodation for check-in and some rest.\n\nThe afternoon covers local sightseeing: the history and marine life of Lakshadweep, the scenic Lagoon Beach and Hamdan Beach, and the Eastern, Floating and Western Jetties for lagoon views.",
        meals: "Lunch, Dinner",
        stay: "Overnight, Agatti Island",
      },
      {
        day: 2,
        title: "Water Activities",
        description:
          "A day at leisure for water sports and beach activities: optional scuba diving among the coral reefs, shore snorkelling, kayaking through the calm lagoon, and optional speed boating or banana boat rides.",
        meals: "Breakfast, Lunch, Dinner",
        stay: "Overnight, Agatti Island",
      },
      {
        day: 3,
        title: "Visit Kalpetti Island",
        description:
          "The day opens with a glass-bottom boat ride over the coral reefs and marine life, followed by a visit to Kalpetti Island - a small, scenic island known for its pristine beaches - with the chance to spot sea turtles along the way.",
        meals: "Breakfast, Lunch, Dinner",
        stay: "Overnight, Agatti Island",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "After breakfast, check out and transfer to Agatti Airport for your onward journey home.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "004866",
    travelWindow: "October 2026",
    travellers: "15 adults",
    rooms: 7,
    stays: [
      {
        destination: "Lakshadweep",
        hotel: "Beach Cottage (option 1)",
        nights: 3,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        destination: "Lakshadweep",
        hotel: "Beach Homestay (option 2)",
        nights: 3,
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        destination: "Lakshadweep",
        hotel: "Homestay (option 3)",
        nights: 3,
        meals: "Breakfast, Lunch, Dinner",
      },
    ],
    stayNote:
      "Each accommodation tier is priced separately on the Investment page - the itinerary and inclusions are the same regardless of which you choose.",
    metaTitle: "Charm of Lakshadweep - 4 Days / 3 Nights",
    metaDescription:
      "Lakshadweep in four days - Agatti's lagoon beaches and jetties, a day of water sports, and a glass-bottom boat trip to Kalpetti Island. Land only.",
  },
  // 001337 - 6D 5N - CHINA - APR 07 - 4 ADULTS.pdf
  {
    slug: "charm-of-china-6d5n-001337",
    title: "Charm of China",
    summary:
      "Six days from Beijing to Shanghai - Tiananmen Square, the Forbidden City and the Temple of Heaven, the Mutianyu Great Wall by cable car and a hutong walk, the Summer Palace, then a bullet train south for Yuyuan Garden, the Bund, Shanghai Tower and the Former French Concession, with an English-speaking guide throughout.",
    destinationSlug: "china",
    category: "family",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 0,
    heroImage: d("china"),
    highlights: ["Forbidden City", "Mutianyu Great Wall", "Summer Palace", "The Bund", "Shanghai Tower"],
    inclusions: [
      "English speaking tour guide",
      "Entrance fees",
      "Private transfers between airports, railway stations, hotels and scenic spots, unless otherwise stated",
      "Flights or trains as specified in the itinerary",
      "Meals as specified in the itinerary",
      "Hotels as specified in the itinerary",
      "Service charge and government taxes (Except European countries)",
    ],
    exclusions: [
      "International travel expenses from home to destination or back",
      "Visa Fees",
      "Excess Baggage Charges",
      "Personal Expenses",
      "Gratuities, Tips to Guides or Drivers",
      "Insurance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Beijing",
        description:
          "Arrival at Beijing Airport. Our representative will pick you from Airport and drop you in the above mentioned Hotel. Free for leisure.",
        stay: "Overnight, Beijing",
      },
      {
        day: 2,
        title: "Tiananmen Square, The Forbidden City, Temple of Heaven",
        description:
          "Tiananmen Square (30 minutes): Tian'anmen Square is the largest city square in the centre of Beijing, named after the Tiananmen (literally, Gate of Heavenly Peace) which sits to its north, separating it from the Forbidden City. It has great cultural significance as it was the site of several key events in Chinese history. As the world's largest city square and enduring symbol of China's national pride, it is surrounded by many imposing buildings including the Heavenly Gate (entry to the Forbidden City), Museums, government buildings and Chairman Mao's Mausoleum.\n\nThe Forbidden City (3 hours): The Forbidden City, in the very heart of Beijing, was home to 24 emperors during the Ming (1368-1644) and Qing (1644-1911) dynasties. It is the largest and best preserved ancient imperial architectural complex in the world, featuring a great square, halls and gates, in contrast to intricate halls, gardens, courtyards and living quarters. The exhibitions, both permanent and temporary, are important treasures of ancient China. You will be walking for about 2 hours (2 kilometers). The walks in the Forbidden City are graded moderate.\n\nTemple of Heaven (1.5 hours): Built in 1420 during the Ming dynasty, the Temple of Heaven is a complex of Taoist buildings where emperors of the Ming and Qing dynasties visited for annual ceremonies to pray for good harvests. The park of the temple of Heaven is full of life. In the morning lots of local elderly people meet there to sing, exercise, and do tai chi. The park covers an area of 273 hectares in the south of Central Beijing. You will be walking for about 1-1½ hour (1½ kilometers) there. The walk is graded easy. Lunch is at a popular local restaurant recommended by your guide - typical Beijing dishes include shredded pork in Beijing sauce, noodles with soybean paste, Mongolian hot pot, Beijing roast duck and donkey burger.",
        meals: "Breakfast, Lunch",
        stay: "Overnight, Beijing",
      },
      {
        day: 3,
        title: "The Mutianyu Great Wall (with round way cable car), Hutong Walking Tour in Dongcheng District",
        description:
          "The Mutianyu Great Wall (with round way cable car) (2 hours): The Mutianyu section of the Great Wall is ranked top on TripAdvisor among all the Great Wall sections, for its picturesque scenery and beautifully-restored architecture. This is the most child-friendly section, with various ways of visiting. It is about 1.5 hours' drive from downtown Beijing. A 2½-kilometer section was fully restored in 1986.\n\nIn order to save time for you, we arrange a round-trip cable car to ascend and descend the Wall, instead of spending about 40 minutes climbing steps. At the Wall, you have free time to walk around, after your guide does some introductions. The cable car ascends to and descends from tower 14. Hike \"the most beautiful and interesting part of the Great Wall\" - between the 14th and 23rd watch towers - acknowledged by hikers as \"the golden route\". It normally takes about 2 hours to complete the hike. Then descend and take a bus to transfer back to our vehicle. Tips: Compared with the Badaling section, walking sticks may be desirable for Mutianyu section, especially for people who don't have strong legs or steady balance.\n\nHutong Walking Tour in Dongcheng District (1 hour): Hutongs are a maze of historic alleyways with traditional single-story courtyard houses, which are now fast disappearing. They are a remnant of the old Beijing. In this tour, you will walk through the narrow alleys, as well as visit a local family to discover the traditional lifestyle and how these unique residential houses and culture are protected. You can also ascend the Bell Tower to have a bird's-eye view of the hutong area. The total walking distance in this tour is about 800 meters. Lunch is at a popular local restaurant recommended by your guide.",
        meals: "Breakfast, Lunch",
        stay: "Overnight, Beijing",
      },
      {
        day: 4,
        title: "Summer Palace with the Garden of Virtue and Harmony, Hotel to Train station Transfer (Beijing), Train station to Hotel Transfer (Shanghai)",
        description:
          "Transport: Train No. G15 (Beijing Nan (south) Railway Station - Shanghai Hongqiao Railway Station) Dep 14:00 - Arr 18:32 (second-class).\n\nSummer Palace with the Garden of Virtue and Harmony: The palace is about 12 kilometers northwest of the city center and is equally as famous as the Forbidden City, the Summer Palace is called 'Yiheyuan' (Garden of Nurtured Harmony) in Chinese. It is the best preserved and the largest imperial gardens in China and one of Beijing's premier attractions. The Garden of Virtue and Harmony was built as a theater for the Empress Dowager. Its construction began in the 17th year of Emperor Guangxu's reign (1891) and lasted for five years. The three-storey theater stage is the biggest and best-preserved wooden stage of delicate design and magnificent structure, and is therefore of much scientific and artistic value. Famous opera singers of the day performed for the Empress Dowager at the theater, which was regarded as the \"Cradle of Beijing Opera\". The Empress Dowager granted special permission for some of the princes, dukes and cabinet ministers also to watch the Beijing opera at the theater.\n\nLunch is at a popular local restaurant recommended by your guide, before the transfer to the station for the afternoon train to Shanghai and a transfer to your hotel on arrival.",
        meals: "Breakfast, Lunch",
        stay: "Overnight, Shanghai",
      },
      {
        day: 5,
        title: "Yuyuan Garden, The Bund, Shanghai Tower (including 118th Floor Observation Deck), Former French Concession Precinct",
        description:
          "Yuyuan Garden (1 hour): Yuyuan Garden is located in the center of Shanghai old quarters. It was a private garden built in 1559 during the Ming Dynasty, with typical Chinese classic architecture and style. The complex covers an area of 2 hectares, with rockeries, pavilions, ponds and corridors. Yuyuan Garden is surrounded by a busy market place, where visitors can find everything from popular local snacks, handicrafts, antiques and souvenirs to some famous time-honored restaurants. Tips: It will be most crowded during the Chinese holiday, when many Chinese people travel at these times. There are many hawkers at the entrance of Yuyuan Market. If you don't want to buy anything, the most effective way to deal with them is simply ignore them.\n\nThe Bund (40 minutes): This 1.5-kilometer-long embankment runs along the western bank of Huangpu River. On its west side it is the \"architecture gallery\" with 52 well-preserved old European style buildings. Once the major trading and commercial center of old Shanghai, the Bund has now taken on new vitality, with futuristic developments, chic restaurants, top end shops and bars offer plenty to see and do - and by night it's magic! Tips: Mornings in the Bund are foggy. The best time to visit the Bund is in the afternoon or evening. Lights will be turned off at 22:00. Shanghai Tower (including 118th Floor Observation Deck) (1 hour): It is the world's second-tallest building, with 128 stories or 632 meters (2,073 feet) tall and is a premier Shanghai tourist highlight - 123 floors above ground and 5 below ground, with the world's highest observation deck (561 meters) and the world's fastest elevators.\n\nFormer French Concession Precinct (1 hour): The former French concession covers the area including Huaihai Road, Fuxing Road, Huashan Road, Ruijin Road, Yandang Road, Taikang Road and Sinan Road. A walking tour in the former French concession will take you to important historical buildings and countless French colonial style buildings. Most buildings are over 100 years old. On clear, warm days, the shadows of the Chenar trees add a romantic feeling. At night, café, bars and restaurants lure their customers with coffee fragrance. Lunch is at a popular local restaurant - typical Shanghai dishes include xiaolongbao (steamed buns), braised pork in brown sauce and duck stuffed with the eight treasures.",
        meals: "Breakfast, Lunch",
        stay: "Overnight, Shanghai",
      },
      {
        day: 6,
        title: "Departure",
        description: "After breakfast, we will drop you to Shanghai airport for departure.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "001337",
    travelWindow: "April 2025",
    travellers: "4 adults",
    rooms: 2,
    stays: [
      { destination: "Beijing", hotel: "Qianyuan Hotel (Comfy Room) or similar (option 1, 3 star)", nights: 3, meals: "Breakfast & Lunch" },
      { destination: "Shanghai", hotel: "Holiday Inn Express Shanghai Putuo or similar (option 1, 3 star)", nights: 2, meals: "Breakfast & Lunch" },
      { destination: "Beijing", hotel: "SSAW Garden Hotel (Comfy Room) or similar (option 2, 4 star)", nights: 3, meals: "Breakfast & Lunch" },
      { destination: "Shanghai", hotel: "Sunrise On The Bund Hotel or similar (option 2, 4 star)", nights: 2, meals: "Breakfast & Lunch" },
    ],
    bookingPolicy:
      "Tour: 50% at the time of confirmation. Remaining 50% due 30 days prior to departure. Air: 100% at the time of confirmation.",
    cancellationPolicy:
      "Tour: 50% charge before 30 days of travel date. 100% charge within 30 days of travel date. Air: as per airline policy.",
    metaTitle: "Charm of China - 6 Days / 5 Nights",
    metaDescription:
      "Beijing and Shanghai in six days - the Forbidden City, the Great Wall, the Summer Palace, the Bund and Shanghai Tower. Built around your dates; price on request.",
  },
  // 002409 - 5D 4N - KENYA - SEP - 2 ADULTS.pdf
  {
    slug: "charm-of-kenya-5d4n",
    title: "Charm of Kenya",
    summary:
      "Five days on safari in Kenya - a night in Nairobi, two nights in the Maasai Mara with unlimited game drives in an exclusive 4x4 Land Cruiser, and a night by Lake Naivasha with Hell's Gate and Crescent Island close at hand.",
    destinationSlug: "kenya",
    category: "honeymoon",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 0,
    heroImage: d("kenya"),
    highlights: ["Maasai Mara", "Lake Naivasha", "Hell's Gate National Park", "Nairobi"],
    inclusions: [
      "01-night accommodation at Dusit Princess Hotel Residence on a bed and breakfast basis",
      "02 nights' accommodation at Maisha Mara Camp or Muthu Keekorok Lodge on a full board basis",
      "01 night at Lake Naivasha Country Club on a full-board basis",
      "05 days Exclusive use of a 4*4 Land cruiser",
      "Unlimited game drives",
      "Services of English-speaking driver guide",
      "Complimentary bottled water while in the vehicle",
    ],
    exclusions: [
      "Roundtrip Air fare",
      "Late departure after 2 pm (includes lunch & game drive). Guests must vacate their tent by 10 am",
      "Visit to a Masai village to be booked and paid for in advance",
      "Balloon Safaris; price on request - USD 480",
      "Masai Mara National Reserve fees will be charged additionally; currently $100 per adult per day and USD 50 Per child",
      "Community fee at Maasai Mara National Reserve at USD 80 per person per stay",
      "Boat rides at Lake Naivasha per person",
      "Entrance Park fee at Hells Gate National Reserve at USD 20 per adult and USD 15 per child respectively",
      "The geothermal fee is not included",
      "Additional meals; packed lunch and extra Lunch",
      "International flights",
      "Travel insurance, Inoculations and personal insurance",
      "ETA visa",
      "Tips, optional activities, and excursions",
      "Items of personal nature i.e., telephone, internet usage, laundry, alcoholic and non-alcoholic beverages, etc.",
      "Additional sightseeing or deviation from the itinerary on arrival",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Nairobi",
        description:
          "Arrive at JKIA after your flight. Our representative will meet you after you disembark off your flights, and pass through immigration and customs formalities to transfer you to your hotel.\n\nOvernight at Dusit Princess Hotel Residences.",
        meals: "None",
        stay: "Overnight, Nairobi",
      },
      {
        day: 2,
        title: "Nairobi - Maasai Mara",
        description:
          "Maasai Mara National Reserve is an area of preserved savannah wilderness in southwestern Kenya, along the Tanzanian border. Its animals include lions, cheetahs, elephants, zebras, and hippos. Wildebeest traverses its plains during their annual migration. The landscape has grassy plains and rolling hills and is crossed by the Mara and Talek rivers. The area nearby is dotted with villages (enkangs) of Maasai people. This Park is famous for its spectacular wildebeest migration, is also part of the vast Serengeti plains, and is a home for the BIG 5.\n\nYou will arrive in time for lunch and have a few minutes of leisure before you proceed to have the evening game drive. The enormous landscape of the Mara and its concentration of many wilds makes it fit to be the climax of your safari.\n\nOvernight at Maisha Mara Camp/ Muthu Keekorok Lodge on a full board basis.",
        meals: "Breakfast, Lunch, Dinner",
        stay: "Overnight, Maasai Mara",
      },
      {
        day: 3,
        title: "Maasai Mara - Full Day",
        description:
          "After Breakfast explore the Maasai Mara National Reserve. A full day at Maasai Mara promises an immersive safari experience amidst the breathtaking landscapes and diverse wildlife. Start your day before sunrise for a thrilling morning game drive or balloon safari (at an extra cost). Witness the awakening of the savannah and the predators beginning their day. Enjoy a packed breakfast at a scenic spot within the reserve, surrounded by the sounds of the wild. (To be requested the night before)\n\nIn the afternoon take a cultural detour to a nearby Maasai village to learn about their traditions, customs, and daily life. (The cost is separate and is paid directly to the Maasais). Head back to the lodge or have a picnic lunch at a designated spot within the reserve. Spend the early afternoon relaxing at the lodge or opt for additional activities such as a nature walk. Venture out for another game drive in the late afternoon. This time provides a different perspective, with the chance to spot nocturnal animals beginning their activities.\n\nWitness the spectacular Mara sunset while sipping sundowner drinks at a picturesque location. Return to the lodge for a well-deserved dinner, sharing stories and experiences from the day with fellow travelers. Overnight at Maisha Mara Camp/ Muthu Keekorok Lodge on a full board basis.",
        meals: "Breakfast, Lunch, Dinner",
        stay: "Overnight, Maasai Mara",
      },
      {
        day: 4,
        title: "Maasai Mara - Naivasha",
        description:
          "After breakfast check out and head to Naivasha. Get to the hotel in time for lunch. After lunch, you can choose to relax at the hotel or head to Hell's Gate National Park. You can hike or cycle through the stunning landscapes, including the Hell's Gate Gorge. Don't miss the geothermal hot springs.\n\nRelax in the geothermal hot springs around Lake Naivasha, such as those in Hell's Gate National Park. It's a great way to unwind and soothe your muscles. Visit Crescent Island, a private sanctuary on the lake. It's a great place for walking safaris among the wildlife, including zebras, giraffes, and wildebeests.\n\nOvernight at Lake Naivasha Country Club on a full board basis.",
        meals: "Breakfast, Lunch, Dinner",
        stay: "Overnight, Naivasha",
      },
      {
        day: 5,
        title: "Naivasha - Nairobi",
        description:
          "After breakfast, our driver will then pick you up and head to Nairobi for your flight home depending on your flight timings. You can choose to do a Nairobi Excursion as you wait for your flights or stay at the airport and have lunch as you wait for your flight.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "002409",
    travelWindow: "September 2025",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      { destination: "Nairobi", hotel: "Dusit Princess Hotel Residences (Deluxe)", nights: 1, meals: "Breakfast" },
      {
        destination: "Maasai Mara Reserve",
        hotel: "Maisha Mara Camp / Muthu Keekorok Lodge or similar",
        nights: 2,
        meals: "Full board",
      },
      { destination: "Naivasha", hotel: "Lake Naivasha Country Club or similar", nights: 1, meals: "Full board" },
    ],
    stayNote:
      "Accommodation is subject to availability at the time of booking. Proof of identification i.e., passport or ID is required at the camp during check-in & at the park gate. If there is any reduction/increase in the number of travelers, a different quote may apply. All special requests like interconnecting rooms, rooms next to each other or on the same floor, early check-in or late check-out will be strictly subject to availability at the time of arrival and complete discretion of hotel management, and hence not guaranteed.",
    metaTitle: "Charm of Kenya - 5 Days / 4 Nights",
    metaDescription:
      "Kenya in five days - Nairobi, Maasai Mara game drives in a private 4x4 Land Cruiser and Lake Naivasha. Built around your dates; price on request.",
  },
  // 002884 - 5D 4N - MAURITIUS -JAN 2026 - 02 ADULTS + 1 CHILD.pdf
  {
    slug: "charm-of-mauritius-5d4n",
    title: "Charm of Mauritius",
    summary:
      "Five days in Mauritius with breakfast and dinner daily - a full-day Ile Aux Cerf tour by speed boat, then full-day tours of the island's north and south.",
    destinationSlug: "mauritius",
    category: "family",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 0,
    heroImage: d("mauritius"),
    highlights: ["Ile Aux Cerf", "North Mauritius", "South Mauritius"],
    inclusions: [
      "04 nights accommodation in above mentioned hotel",
      "Breakfast and Dinner",
      "Meet & Greet at the airport",
      "Sightseeing as per the above mentioned itinerary",
      "All entry tickets as per the Itinerary",
      "All tours and transfers on private & SIC basis",
      "Transfers from Airport to hotel and return",
      "GST",
    ],
    exclusions: [
      "Round Trip Air Fare",
      "Early Check in at hotel, late Check-out at hotel",
      "Check in time in Hotel is after 1400/1500 hours and check out is before 1100/1200 hours",
      "Visa",
      "Other meals not mentioned, laundry, telephone calls, incidentals",
      "Any extra excursion or sightseeing apart from suggested tour itinerary",
      "Any personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival",
        description: "Arrival at Airport. Pick up from Airport and drop at hotel. Night stay at Mauritius Hotel.",
        meals: "Dinner",
        stay: "Overnight, Mauritius",
      },
      {
        day: 2,
        title: "Full Day Ile Aux Cerf Tour",
        description:
          "Breakfast at Hotel. Full Day Ile Aux Cerf Tour with speed boat transfer. Drop at hotel. Night stay at Mauritius Hotel.",
        meals: "Breakfast & Dinner",
        stay: "Overnight, Mauritius",
      },
      {
        day: 3,
        title: "Full Day North Tour",
        description: "Breakfast at Hotel. Full Day North Tour. Drop at Hotel. Night stay at Mauritius Hotel.",
        meals: "Breakfast & Dinner",
        stay: "Overnight, Mauritius",
      },
      {
        day: 4,
        title: "Full Day South Tour",
        description: "Breakfast at Hotel. Full Day South Tour. Drop at Hotel. Overnight stay at Mauritius.",
        meals: "Breakfast & Dinner",
        stay: "Overnight, Mauritius",
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast at Hotel. Drop at Mauritius airport for departure.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "002884",
    travelWindow: "January 2026",
    travellers: "2 adults + 1 child",
    rooms: 1,
    stays: [
      {
        destination: "Mauritius",
        hotel: "Ocean's Creek Beach Hotel or similar (option 1)",
        nights: 4,
        meals: "Breakfast & Dinner",
      },
      {
        destination: "Mauritius",
        hotel: "Laguna Beach Hotel & Spa or similar (option 2)",
        nights: 4,
        meals: "Breakfast & Dinner",
      },
    ],
    stayNote:
      "Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply. Exchange rate fluctuations at the time of full payment will be applicable and may result in price adjustments. A charge of EUR 3 per person, per day will be levied for all guests aged 12 years and above; this fee will be collected at the property during check-in, as per local regulations.",
    bookingPolicy:
      "Tour: 50% at the time of confirmation, 50% at 30 days prior to departure date. Air: 100% at the time of confirmation.",
    cancellationPolicy:
      "Tour: 50% before 30 days of travel date, 100% within 30 days of travel date. Air: As per airline policy.",
    metaTitle: "Charm of Mauritius - 5 Days / 4 Nights",
    metaDescription:
      "Mauritius in five days - an Ile Aux Cerf speed boat day, full-day North and South tours, breakfast and dinner daily. Built around your dates; price on request.",
  },
  // 002888-4D 3N- ARMENIA- DEC- 02 ADULTS.pdf
  {
    slug: "charm-of-armenia-4d3n",
    title: "Charm of Armenia",
    summary:
      "Four days based in Yerevan - a city tour of the Armenian capital, a day out to Tsaghkadzor and Lake Sevan, then the Garni temple, Geghard monastery and the Symphony of Stones.",
    destinationSlug: "armenia",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 0,
    heroImage: d("armenia"),
    highlights: ["Yerevan", "Tsaghkadzor", "Lake Sevan", "Garni", "Geghard"],
    inclusions: [
      "3 Nights' accommodation in Yerevan in selected category Hotel",
      "Daily Breakfast at your Hotel",
      "Round Airport Transfers",
      "All Tours & Transfers on Private Basis",
      "Entrance fees",
      "English speaking driver service (not professional guide)",
      "24 Hours Emergency Assistance",
      "Local Taxes & Charges",
      "Armenian visa",
      "GST",
    ],
    exclusions: [
      "Round Trip Air Fare",
      "Early Check in at hotel, late Check-out at hotel",
      "Check in time in Hotel is after 1400/1500 hours and check out is before 1100/1200 hours",
      "Other meals not mentioned, laundry, telephone calls, incidentals",
      "Any extra excursion or sightseeing apart from suggested tour itinerary",
      "Any personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Yerevan - City Tour",
        description:
          "Pick up from the airport and city tour in Yerevan. Drop at the hotel and overnight stay at the hotel.",
        meals: "None",
        stay: "Overnight, Yerevan",
      },
      {
        day: 2,
        title: "Yerevan, Tsaghkadzor & Lake Sevan",
        description:
          "Breakfast at the hotel. Visit Yerevan, Tsaghkadzor and Lake Sevan. Drop at the hotel and overnight stay at the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Yerevan",
      },
      {
        day: 3,
        title: "Garni, Geghard & Symphony of Stones",
        description:
          "Breakfast at the hotel. Visit Garni, Geghard and the Symphony of Stones. Drop at the hotel and overnight stay at the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Yerevan",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Breakfast at the hotel. Check out from the hotel and transfer to the airport for departure.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "002888",
    travelWindow: "December 2025",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      { destination: "Yerevan", hotel: "Primer Hotel or similar", nights: 3, meals: "Breakfast" },
    ],
    stayNote:
      "Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply. Exchange rate fluctuations at the time of full payment will be applicable and may result in price adjustments.",
    bookingPolicy:
      "Tour: 50% at the time of confirmation, 50% at 30 days prior to departure date. Air: 100% at the time of confirmation.",
    cancellationPolicy:
      "Tour: 50% before 30 days of travel date, 100% within 30 days of travel date. Air: As per airline policy.",
    metaTitle: "Charm of Armenia - 4 Days / 3 Nights",
    metaDescription:
      "Armenia in four days - a Yerevan city tour, Tsaghkadzor and Lake Sevan, then Garni, Geghard and the Symphony of Stones. Built around your dates; price on request.",
  },
  // 002918- 4D 3N- KAZAKHSTAN- 16 DEC- 02 ADULTS.pdf
  {
    slug: "charm-of-kazakhstan-4d3n",
    title: "Charm of Kazakhstan",
    summary:
      "Four days in and around Almaty - an evening on Arbat Street, Shymbulak and Kok Tobe Hill, a day out to Kolsai Lake, Charyn Canyon and Moon Canyon, and a city tour on the way to the airport.",
    destinationSlug: "kazakhstan",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 0,
    heroImage: d("kazakhstan"),
    highlights: ["Almaty", "Shymbulak", "Kok Tobe Hill", "Kolsai Lake", "Charyn Canyon"],
    inclusions: [
      "03 nights accommodation in above mentioned hotel",
      "Daily Breakfast (Except on Arrival Day)",
      "Meet & Greet at the airport",
      "Sightseeing as per the above mentioned itinerary",
      "All entry tickets as per the Itinerary",
      "All tours and transfers on private basis",
      "GST",
    ],
    exclusions: [
      "Round trip Airfare",
      "Visa",
      "Early Check in at hotel, late Check-out at hotel",
      "Check in time in Hotel is after 1400/1500 hours and check out is before 1100/1200 hours",
      "Other meals not mentioned, laundry, telephone calls, incidentals",
      "Any extra excursion or sightseeing apart from suggested tour itinerary",
      "Any personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Almaty - Arbat Street",
        description:
          "Arrival at Almaty Airport. Pick up from the airport and drop at the hotel. Evening Arbat Street strolling. Night stay at the hotel.",
        meals: "None",
        stay: "Overnight, Almaty",
      },
      {
        day: 2,
        title: "Shymbulak & Kok Tobe Hill",
        description:
          "Breakfast at the hotel. Visit Shymbulak and Kok Tobe Hill. Drop at the hotel and night stay at the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Almaty",
      },
      {
        day: 3,
        title: "Kolsai Lake, Charyn Canyon & Moon Canyon",
        description:
          "Breakfast at the hotel. Visit Kolsai Lake and Charyn Canyon + Moon Canyon. Drop at the hotel and night stay at the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Almaty",
      },
      {
        day: 4,
        title: "Almaty City Tour - Departure",
        description:
          "Breakfast at the hotel. Check out from the hotel. Visit Ascension Cathedral + Panfilov Park + Zelyony Bazaar + Rahat Chocolate Factory. Drop at the airport for departure.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "002918",
    travelWindow: "December 2025",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      { destination: "Almaty", hotel: "Regardal or similar", nights: 3, meals: "Breakfast" },
    ],
    stayNote:
      "Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply. Exchange rate fluctuations at the time of full payment will be applicable and may result in price adjustments.",
    metaTitle: "Charm of Kazakhstan - 4 Days / 3 Nights",
    metaDescription:
      "Almaty in four days - Arbat Street, Shymbulak and Kok Tobe, Kolsai Lake and Charyn Canyon, and a city tour. Built around your dates; price on request.",
  },
  // 002996 TURKEY.docx
  {
    slug: "turkey-6d5n",
    title: "Turkey",
    summary:
      "Six days across Turkey - three nights in Istanbul for the Sultanahmet sights and a cruise to the Princes' Islands, then a flight to Cappadocia for the Red Tour of its valleys and fairy chimneys.",
    destinationSlug: "turkey",
    category: "honeymoon",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 0,
    heroImage: d("turkey"),
    highlights: ["Istanbul", "Princes' Islands", "Cappadocia"],
    inclusions: [
      "05 nights' accommodation in the above mentioned hotels",
      "Assistance upon arrival & departure",
      "All tours are on SIC Basis & English Speaking",
      "Airport Transfers are on Private Basis",
      "Hotel Taxes",
      "Entrance Fee",
      "FD Princess Island tour with Lunch",
      "FD Istanbul City tour with lunch",
      "FD Cappadocia Red Tour with lunch",
      "GST",
    ],
    exclusions: [
      "Roundtrip Air fare",
      "Turkey Tourist Visa",
      "Domestic Ticket",
      "Hot Air Balloon",
      "Personal Tips",
      "Early Check in at hotel, late checkout at hotel",
      "Other meals not mentioned",
      "Laundry, telephone calls and incidentals",
      "Any personal expenses, room service and special orders. Alcoholic and nonalcoholic beverages",
      "Any extra excursion apart from the itinerary",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Istanbul Arrival",
        description:
          "Arrival at Istanbul or SAW Airport, transfer to the hotel. Check in & free time. Overnight in Istanbul.",
        meals: "None",
        stay: "Overnight, Istanbul",
      },
      {
        day: 2,
        title: "Full Day Istanbul City Tour",
        description:
          "After breakfast, full-day Istanbul city tour with lunch.\n\nSightseeing: Sultanahmet area, Blue Mosque, Hagia Sophia Mosque, Hippodrome, Obelisk, Topkapi Palace and Grand Bazaar.",
        meals: "Breakfast, Lunch",
        stay: "Overnight, Istanbul",
      },
      {
        day: 3,
        title: "Full Day Princes' Islands Tour",
        description:
          "After breakfast, full-day Princes' Islands tour with lunch.\n\nCruise on the Marmara Sea to go to Heybeliada for a sightseeing tour and soon after that, we meet in the ferry again to go to the biggest island (Büyükada). While you are cruising to Büyükada, you will have lunch in the boat as open buffet. Followed by lunch we will reach the island and you will have your free time to enjoy it. Return to Istanbul by ferry and transfer back to the hotel.",
        meals: "Breakfast, Lunch",
        stay: "Overnight, Istanbul",
      },
      {
        day: 4,
        title: "Transfer to Cappadocia",
        description:
          "After breakfast, transfer to the airport for departure to ASR or Nevsehir Airport. On arrival at the airport, transfer to the hotel by private car. Check in & free time. Overnight in Cappadocia.",
        meals: "Breakfast",
        stay: "Overnight, Cappadocia",
      },
      {
        day: 5,
        title: "Cappadocia Red Tour",
        description:
          "After breakfast, full-day Cappadocia Red Tour with lunch. Our vehicle and guide will pick you up from your hotel. Our first stop is Pigeon Valley, which is home to countless pigeons in natural pigeon houses. These pigeons contribute to the livelihood of the local people with the fertilizers they provide for vineyards. Then we will visit Uçhisar Castle, where you will have time to take photos. Our tour continues with Göreme Panorama, where you can enjoy the breathtaking view of the fairy chimneys and rock formations that define the silhouette of Cappadocia.\n\nNext, we will visit the Onyx Workshop and learn about the craftsmanship involved in making jewelry and ornaments from onyx, a natural stone found abundantly in the volcanic region of Cappadocia. We will then visit Paşabağ (Zelve) Open Air Museum, where you can discover churches, chapels, and monasteries dating from the 10th to the 13th centuries AD, carved into fairy chimneys and adorned with frescoes on their walls. Afterward, we will head towards Avanos, where we will visit a pottery workshop and witness demonstrations of traditional pottery-making techniques dating back to the Hittite period.\n\nFinally, we will visit Devrent Valley, where the unusual rock formations and small fairy chimneys create a lunar landscape due to their strange appearance. At the end of the tour, the vehicle will drop you off at the hotel. Optional hot air balloon.",
        meals: "Breakfast, Lunch",
        stay: "Overnight, Cappadocia",
      },
      {
        day: 6,
        title: "Departure",
        description: "After breakfast, transfer to the airport for departure.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "002996",
    travelWindow: "November 2025",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Istanbul (Taksim)",
        hotel: "The Central Palace Hotel or similar",
        nights: 3,
        meals: "Breakfast",
      },
      {
        destination: "Cappadocia",
        hotel: "Alfa Cave Hotel, Stone Room with Jacuzzi or similar",
        nights: 2,
        meals: "Breakfast",
      },
    ],
    stayNote:
      "Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply. Exchange rate fluctuations at the time of full payment will be applicable and may result in price adjustments.",
    bookingPolicy:
      "Tour: 50% at the time of confirmation, 50% at 30 days prior to departure date. Air: 100% at the time of confirmation.",
    cancellationPolicy:
      "Tour: 50% before 30 days of travel date, 100% within 30 days of travel date. Air: As per airline policy.",
    metaTitle: "Turkey - 6 Days / 5 Nights",
    metaDescription:
      "Turkey in six days - Istanbul's Blue Mosque and Hagia Sophia, a Princes' Islands cruise, then Cappadocia's Red Tour. Built around your dates; price on request.",
  },
  // 003044 - 5D 4N - CHINA - JAN - 2 ADULTS, 1 CHILD.pdf
  {
    slug: "charm-of-china-5d4n-003044",
    title: "Charm of China",
    summary:
      "Five days in Beijing with a family room throughout - the Forbidden City, Tiananmen Square and the Temple of Heaven, a hutong tour, the Mutianyu Great Wall by cable car and the 798 Art District, then the Summer Palace by boat, Xiushui Street and Nanluoguxiang, with an English-speaking guide and private transfers.",
    destinationSlug: "china",
    category: "family",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 0,
    heroImage: d("china"),
    highlights: ["Forbidden City", "Temple of Heaven", "Mutianyu Great Wall", "Summer Palace", "Nanluoguxiang"],
    inclusions: [
      "04 nights accommodation in above mentioned hotel",
      "Daily Breakfast except on arrival day",
      "Meet & Greet at the airport",
      "Sightseeing as per the above mentioned itinerary",
      "English speaking tour guide",
      "Entrance fees",
      "Private transfers between airports, railway stations, hotels and scenic spots, unless otherwise stated. (Luggage Quantity Reminder: Each traveler is allowed to carry 1 suitcase. If you have more than 1 large suitcase per traveler, please consult your travel advisor to confirm any additional charges that may apply.)",
      "Service charge and government taxes (Except European countries)",
      "All tours and transfers on private",
      "GST",
    ],
    exclusions: [
      "Round Trip Air Fare",
      "Early Check in at hotel, late Check-out at hotel",
      "Check in time in Hotel is after 1400/1500 hours and check out is before 1100/1200 hours",
      "Other meals not mentioned, laundry, telephone calls, incidentals",
      "Any extra excursion or sightseeing apart from suggested tour itinerary",
      "Any personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
      "Gratuities, Tips to Guides or Drivers",
      "Insurance",
      "Visa",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Beijing",
        description: "Arrival in Beijing. Pick up from Airport. Transfer to Hotel. Night stay at Beijing Hotel.",
        stay: "Overnight, Beijing",
      },
      {
        day: 2,
        title: "The Forbidden City, Tiananmen Square, Temple of Heaven",
        description:
          "Breakfast at Hotel. The Forbidden City, Tiananmen Square, Temple of Heaven. Drop at Hotel. Night stay at Beijing Hotel.",
        meals: "Breakfast",
        stay: "Overnight, Beijing",
      },
      {
        day: 3,
        title: "Hutong Tour, The Mutianyu Great Wall, 798 Art District",
        description:
          "Breakfast at Hotel. Hutong Tour in Xicheng District, The Mutianyu Great Wall (with round way cable car), 798 Art District. Drop at Hotel. Night stay at Beijing Hotel.",
        meals: "Breakfast",
        stay: "Overnight, Beijing",
      },
      {
        day: 4,
        title: "Summer Palace, Xiushui Street, The Southern Gong and Drum Lane",
        description:
          "Breakfast at Hotel. Summer Palace with Boat Ride and the Garden of Virtue and Harmony, Xiushui Street, The Southern Gong and Drum Lane (Nanluoguxiang). Drop at Beijing Hotel.",
        meals: "Breakfast",
        stay: "Overnight, Beijing",
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast at Hotel. Drop at Airport. Departure.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "003044",
    travelWindow: "January 2026",
    travellers: "2 adults + 1 child",
    rooms: 1,
    stays: [
      { destination: "Beijing", hotel: "Novotel Peace (Family Room) or similar", nights: 4, meals: "Breakfast" },
    ],
    metaTitle: "Charm of China - 5 Days / 4 Nights",
    metaDescription:
      "Beijing in five days - the Forbidden City, the Temple of Heaven, the Mutianyu Great Wall and the Summer Palace. Built around your dates; price on request.",
  },
  // 003239 - 3D 2N - PONDICHERRY - APR - 4 ADULTS.pdf
  {
    slug: "charm-of-pondicherry-3d2n",
    title: "Charm of Pondicherry",
    summary:
      "Three days in Pondicherry by private vehicle, from the railway station to Auroville, the Aurobindo Ashram, White Town and its beaches.",
    destinationSlug: "pondicherry",
    category: "family",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 0,
    heroImage: d("pondicherry"),
    highlights: ["Auroville", "Aurobindo Ashram", "White Town", "Paradise Beach", "Rock Beach"],
    inclusions: [
      "02 nights' accommodation on above mentioned hotel",
      "Meal plan (Breakfast) as per the itinerary (except on arrival day)",
      "All tours & transfers by PVT Vehicle",
      "Railway Station Pick up & Airport Drop",
      "GST",
    ],
    exclusions: [
      "Round trip Air Fare/ Train Fare",
      "Lunch & Dinner",
      "Early Check in at hotel, late Check-out at hotel",
      "Check-in : 12:00 PM, Check-out : 10:00 AM",
      "Other meals not mentioned, laundry, telephone calls, incidentals",
      "Any extra excursion or sightseeing apart from suggested tour itinerary",
      "Any personal expenses, room service and special orders.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Pondicherry - Half Day Sightseeing",
        description:
          "Arrival at Pondicherry Railway Station. Pick up and drop at Hotel. Hotel Check In as per the Hotel Policy. Half Day Pondicherry Sightseeing. Drop at Hotel. Overnight stay at Pondicherry Hotel.",
        meals: "No meals",
        stay: "Overnight, Pondicherry",
      },
      {
        day: 2,
        title: "Pondicherry Full Day Sightseeing",
        description:
          "Breakfast at Hotel. Pondicherry Full Day Sightseeing. Drop at Hotel. Overnight stay at Pondicherry Hotel.\n\nSightseeing places & suggestions: Auroville, Pondicherry boat house & Paradise beach, Manakula vinayak temple, Aurobindo Ashram, Pondicherry Museum, Pondy Light house & Pondy Marina beach, Rock beach, White town visit, Sacred heart Church.\n\nNote: All the sightseeing mentioned in the itinerary will be covered if time permits. If not, you may cut down and choose the places that interest you most. First day last day Sightseeing will cover depending on the arrival & departure timings.",
        meals: "Breakfast",
        stay: "Overnight, Pondicherry",
      },
      {
        day: 3,
        title: "Half Day Sightseeing - Departure",
        description:
          "Breakfast at Hotel. Pondicherry Half Day Sightseeing. Drop at Railway Station. Departure with sweet memories.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "003239",
    travelWindow: "April 2026",
    travellers: "4 adults",
    rooms: 2,
    stays: [
      { destination: "Pondicherry", hotel: "Hotel Jayaram or similar", nights: 2, meals: "Breakfast" },
    ],
    stayNote:
      "Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply.",
    metaTitle: "Charm of Pondicherry - 3 Days / 2 Nights",
    metaDescription:
      "Pondicherry in three days - Auroville, the Aurobindo Ashram, White Town, Paradise Beach and Rock Beach by private car. Built around your dates; price on request.",
  },
  // 003887 HONGKONG MACAU 4N 5D 7A APRIL.docx
  {
    slug: "macau-hong-kong-5d4n",
    title: "Macau Hong Kong",
    summary:
      "Five days across the Pearl River Delta - over the Hong Kong-Zhuhai-Macau Bridge for a night in Macau and its city tour, then the ferry to Hong Kong for Victoria Peak and the Symphony of Lights, a full day at Disneyland and the Ngong Ping 360 cable car to the Big Buddha.",
    destinationSlug: "hong-kong",
    category: "group-tours",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 0,
    heroImage: d("hong-kong"),
    highlights: ["Macau", "Victoria Peak", "Hong Kong Disneyland", "Ngong Ping 360", "Big Buddha"],
    inclusions: [
      "04 night Accommodation on above mentioned Hotels",
      "01 night in Macau, 03 night in Hong Kong",
      "All Entry Tickets",
      "GST",
    ],
    exclusions: [
      "Roundtrip Airfare",
      "Early Check in at hotel, late checkout at hotel",
      "Laundry, telephone calls and incidentals",
      "Any personal expenses, room service and special orders. Alcoholic and nonalcoholic beverages",
      "Any extra excursion apart from the itinerary",
      "These rates are not valid for blackout dates in Hong Kong like: Easter Day, Eid-Ul-Fitr, and Festival Dates",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Hong Kong",
        description:
          "Arrive in Hong Kong and take direct bus from HKIA to Macau Border via HZMB Bridge. Arrive in Macau and clear immigration. Pick up from Macau Border and drop to hotel one way private transfer using 1 coach. Check in to the hotel (1500 hrs standard check in time). Overnight at the hotel.",
        stay: "Overnight, Macau",
      },
      {
        day: 2,
        title: "Macau City Tour, Macau Ferry Terminal to Hong Kong Terminal, Victoria Peak",
        description:
          "Breakfast at the hotel, Check out from hotel (1100 hrs standard check out time). Pick up from hotel and leave for Macau city tour covering Ruins of St. Paul, Ana Cha Temple, Fortress, Lover Lane, Golden Lotus, Fisherman's Wharf - PVT Basis - 4 Hrs - 1 coach (No Macau Tower).\n\nDrop to Macau Ferry Terminal. Direct Ferry from Macau Ferry Terminal to Hong Kong Terminal - Economy Class. Pick up from Hong Kong Ferry Terminal and leave for half day city tour of Hong Kong using 1 van hired for 5 Hrs. Victoria Peak Tram ride one way. Madame Tussauds, Avenue of Stars, Clock Tower, Enjoy the famous Symphony of Light Show. Drop to the hotel and check in (1500 hrs standard check in time). Overnight at the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Hong Kong",
      },
      {
        day: 3,
        title: "Full Day Visit to Disneyland",
        description:
          "Breakfast at the hotel, Full day visit to Disneyland one way private transfer 1 van. Disneyland 1 day pass - Regular Pass Day. Pick up from Disneyland and drop to hotel one way private transfer using 1 van. Overnight at the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Hong Kong",
      },
      {
        day: 4,
        title: "Full Day Visit to Ngong Ping 360",
        description:
          "Breakfast at the hotel, Full day visit to Ngong Ping 360 one way private transfer 1 van. Ngong Ping 360 - Standard Cable Car - Roundtrip, Big Buddha Statue, Po Lin Monastery. Pick up from Ngong Ping and drop to hotel one way private transfer using 1 van. Overnight at the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Hong Kong",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Breakfast at the hotel, Check out from hotel (1100 hrs standard check out time). Pick up from hotel and drop to HKIA one way private transfer using 2 vans.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "003887",
    travelWindow: "April 2026",
    travellers: "7 adults",
    rooms: 3,
    stays: [
      { destination: "Macau", hotel: "Regency Art Macau or similar (3 star)", nights: 1, meals: "Breakfast" },
      { destination: "Hong Kong", hotel: "Harbour Plaza Metropolis or similar", nights: 3, meals: "Breakfast" },
    ],
    metaTitle: "Macau Hong Kong - 5 Days / 4 Nights",
    metaDescription:
      "Macau and Hong Kong in five days - a Macau city tour, Victoria Peak, Symphony of Lights, Disneyland and Ngong Ping 360. Built around your dates; price on request.",
  },
  // 003952 6D 5N JAPAN APRIL 3 ADULTS.pdf
  {
    slug: "charm-of-japan-6d5n",
    title: "Charm of Japan",
    summary:
      "Six days between Tokyo and Kyoto - Sensoji, Meiji Jingu, Tokyo Skytree and a sushi-making lunch with a private guide, then the bullet train to Kyoto for Arashiyama's bamboo grove, the Golden Pavilion, Kiyomizudera, Heian Shrine and Nijo Castle.",
    destinationSlug: "japan",
    category: "family",
    type: "customized",
    durationDays: 6,
    durationNights: 5,
    priceFrom: 0,
    heroImage: d("japan"),
    highlights: ["Tokyo", "Tokyo Skytree", "Arashiyama Bamboo Grove", "Kinkakuji", "Kyoto"],
    inclusions: [
      "English speaking tour guide",
      "Entrance fees",
      "Private transfers between airports, railway stations, hotels and scenic spots, unless otherwise stated. (Luggage Quantity Reminder: Each traveler is allowed to carry 1 suitcase. If you have more than 1 large suitcase per traveler, please consult your travel advisor to confirm any additional charges that may apply.)",
      "Meals as specified in the itinerary",
      "Hotels as specified in the itinerary",
    ],
    exclusions: [
      "International travel expenses from home to destination or back",
      "Visa Fees",
      "Excess Baggage Charges",
      "Personal Expenses",
      "Gratuities, Tips to Guides or Drivers",
      "Insurance",
      "Taxes (e.g. from hotel, local government etc.)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Tokyo",
        description:
          "One way private transfer between hotel and Airport in Tokyo (driver only): Upon your arrival in Tokyo, your private driver will pick you up at the airport and transfer you to the hotel.\n\nNote: 1 suitcase per person. Please confirm surcharge with your travel advisor if you have more than 1 big luggage per person.",
        stay: "Overnight, Tokyo",
      },
      {
        day: 2,
        title: "Tokyo",
        description:
          "A day city tour via public transportation with a private guide. Sensoji Asakusa: Tokyo's oldest temple, Sensoji contains a sacred statue of Kannon, the goddess of mercy. Surrounded by imposing gates, a five-story pagoda, and the vibrant stalls of Nakamise Dori, Sensoji is a must-see destination during your trip in Japan. Also a lively marketplace (Nakamise-dori Street), holy smoke and fortunes at Tokyo's most iconic temple.\n\nMeiji Jingu Shrine: Meiji Jingu Shrine grounds offer walking paths that are great for a relaxing stroll. At the middle of the forest, Meiji Jingu's buildings also have an air of tranquility distinct from the surrounding city. You can take part in typical Shinto activities, such as making offerings at the main hall, buying charms and amulets or writing out one's wish on an ema. On Sunday mornings you are likely to see a traditional wedding procession (or two) through the courtyard - the bride in a white kimono and hood and the groom in his formal black robe, walking together under a big red parasol, with Shinto priests leading the way and the rest of the wedding party trailing behind. Shrines, big or small, can get interesting on festival days. Meiji Jingu Shrine is located inside Yoyogi Park, we suggest you bring some snacks so that after the visit at the shrine you can have a small picnic in the park along with the locals.\n\nTokyo Skytree: Towering above the capital's skyline, Tokyo Skytree soars 634 meters high and gives incredible, panoramic views of Tokyo. On a clear day, you can't quite see infinity, but it's one of the few spots you can see Mt. Fuji from Tokyo. Sushi-making Experience with lunch: Take a closer look at the fascinating world of sushi, extending from the ocean to your plate, during the sushi-making class. Learn how fish is caught and distributed, then turn your attention to sushi-making, where you'll prepare nigiri sushi with the help of a sushi master. Finish your experience by enjoying your creations for lunch. Due to high demand, the specific arrangements will be subject to the actual situation. This is not a private activity; there could be some other travelers doing the activity together with you.",
        meals: "Breakfast, Lunch",
        stay: "Overnight, Tokyo",
      },
      {
        day: 3,
        title: "Tokyo to Kyoto",
        description:
          "Tokyo to Kyoto by Bullet Train in Standard Class (2 h 21 minutes; ticket only, no transfer or guiding). Make your own way to the station, using your ticket to board the Shinkansen bullet train.\n\nOn arrival at Kyoto Station, make your own way to your hotel. The rest of the day is free for your leisure.",
        meals: "Breakfast",
        stay: "Overnight, Kyoto",
      },
      {
        day: 4,
        title: "Kyoto",
        description:
          "A day city tour via public transportation with a private guide. Arashiyama: Arashiyama is a nationally designated Historic Site and Place of Scenic Beauty. It also refers to the mountain across the Ōi River, which forms a backdrop to the district. Arashiyama is incredibly beautiful in autumn. You can enjoy it in a variety of ways, there's the Sagano train, Hozugawa River Boat Ride or walk through the bamboo grove. Tenryuji and Jojakukoji temples are also nearby and are also very tranquil and beautiful.\n\nNonomiya Shrine: Amidst the beautiful bamboo forest in Arashiyama, Kyoto, lies a small shrine called Nonomiya-Jinja. The shrine was formerly known as a temporary sanctuary for princesses. Back in the early days, emperors often sent their unmarried daughters to serve as high priestesses at the Grand Shrine of Ise. Nonomiya-Jinja was the place where those princesses first spent one to three years of their lives to undergo purification before they were taken in a procession at Ise Shrine. Bamboo Grove: The Arashiyama Bamboo Grove is one of Kyoto's most iconic sights, and a walk through it will be one of your most lasting impressions of this city. Located in the village of Sagano on the west side of the city, the path through the Arashiyama bamboo grove is short yet immersive. There's something almost magical about the light dappling on the forest floor.\n\nKinkakuji Temple (Golden Pavilion): Kinkakuji (Golden Pavilion) is a Zen temple in northern Kyoto whose top two floors are completely covered in gold leaf. Formally known as Rokuonji, the temple was the retirement villa of the shogun Ashikaga Yoshimitsu, and according to his will it became a Zen temple of the Rinzai sect after his death in 1408. Kinkakuji is an impressive structure built overlooking a large pond, and is the only building left of Yoshimitsu's former retirement complex. It has burned down numerous times throughout its history including twice during the Onin War, a civil war that destroyed much of Kyoto; and once again more recently in 1950 when it was set on fire by a fanatic monk.",
        meals: "Breakfast",
        stay: "Overnight, Kyoto",
      },
      {
        day: 5,
        title: "Kyoto",
        description:
          "A day city tour via public transportation with a private guide. Pure Water Temple: Situated atop a small mountain on the east side of Kyoto, Pure Water Temple (Kiyomizudera in Japanese) offers a commanding view of the city. The temple's stage, supported by massive pillars, is one of the most famous images of Japan. But Kiyomizudera offers more than just a pretty view, with the experience of visiting beginning long before you reach the temple itself. Ninenzaka and Sannenzaka: Ninen-zaka Slope and Sannen-zaka Slope are iconic streets of Kyoto City, which represent Japan's good old days. Once you get there, you can't help taking pictures of this nostalgic and dreamy scenery. These two slopes are the approach to the famous Kiyomizudera Temple and also one of the main attractions of the city for the beautiful scenery.\n\nHeian Shrine: Built to commemorate the 1,100th anniversary of Kyoto's reign as the capital of Japan, Heian-jingu Shrine's most recognizable feature is its towering red torii gate. With its vibrant colors and immaculate grounds, the shrine is an iconic symbol of Kyoto and a major tourist attraction. Nijo Castle: Nijo Castle in Kyoto is one of the seven Historic Monuments of Ancient Kyoto which have been designated by UNESCO as a World Heritage Site. This massive site consists of several major parts including two concentric rings (Kuruwa) of fortifications, the Ninomaru Palace, the ruins of the Honmaru Palace and some beautifully-structured gardens.",
        meals: "Breakfast",
        stay: "Overnight, Kyoto",
      },
      {
        day: 6,
        title: "Kyoto to Tokyo to Departure City",
        description:
          "Make your own way to Kyoto Station, using your ticket to board the Shinkansen bullet train. Kyoto to Tokyo by Bullet Train in Standard Class (2 h 21 minutes), then Tokyo to Narita Airport by train in Standard Class (58 minutes) for your departure. Tickets only; no transfer or guiding.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "003952",
    travelWindow: "April 2026",
    travellers: "3 adults",
    rooms: 1,
    stays: [
      { destination: "Tokyo", hotel: "Mitsui Garden Hotel Shiodome Italia-Gai or similar (3 star, triple room)", nights: 2, meals: "Breakfast" },
      { destination: "Kyoto", hotel: "Hotel Gracery Kyoto Sanjo or similar (3 star, triple room)", nights: 3, meals: "Breakfast" },
    ],
    metaTitle: "Charm of Japan - 6 Days / 5 Nights",
    metaDescription:
      "Tokyo and Kyoto in six days - Sensoji, Tokyo Skytree, a sushi class, the bullet train, Arashiyama, the Golden Pavilion and Kiyomizudera. Price on request.",
  },
  // 003952 7D 6N EUROPE APRIL 3 ADULTS.pdf
  {
    slug: "a-piece-of-europe-7d6n",
    title: "A Piece of Europe",
    summary:
      "A seven-day escorted coach tour of Central and Eastern Europe (Europamundo) - Vienna and Grinzing, Budapest on the Danube, Bratislava, Prague's Castle District and Old Town, then Pilsen and Rothenburg on the way to Frankfurt.",
    destinationSlug: "europe",
    category: "family",
    type: "customized",
    durationDays: 7,
    durationNights: 6,
    priceFrom: 0,
    heroImage: d("europe"),
    highlights: ["Vienna", "Budapest", "Bratislava", "Prague", "Rothenburg"],
    inclusions: [
      "Europamundo General Services: Travel by bus with English speaking guide, basic travel insurance, hotel and breakfast buffet.",
      "Includes arrival transfer",
      "City tour in: Vienna, Budapest, Prague",
      "Boat: Danube River in Budapest, Vltava River in Prague",
      "Evening transfer: Grinzing district in Vienna, Old Town Square in Prague",
      "Ticket admission: Prague Castle",
    ],
    exclusions: [
      "Round trip Air Fare",
      "Early Check in at hotel, late Check-out at hotel",
      "Check in time in Hotel is after 1400/1500 hours and check out is before 1100/1200 hours",
      "Any extra excursion or sightseeing apart from suggested tour itinerary",
      "Any personal expenses, room service and special orders.",
      "Alcoholic and non-alcoholic beverages",
      "Other meals not mentioned, laundry, telephone calls, incidentals",
      "TCS",
    ],
    itinerary: [
      {
        day: 1,
        title: "Vienna",
        description:
          "Welcome to Europamundo! We'll transfer you to the hotel and you'll have some free time. In the afternoon, you'll find information about the start of your tour on the boards located at the hotel reception.\n\nImportant - Check-in: Please note that hotel check-in time is usually at 03:00 p.m. If you require earlier room availability, consider booking an additional night at the beginning of your trip. Additional Nights: If you requested additional nights, your room will be ready upon arrival at the hotel, but your trip guide will only contact you when the included activities begin. At the reception, you will find an information board with our staff's telephone number and hours of assistance. Until then, you have free time to enjoy at your leisure. The hotel staff can assist you with any information you need.\n\nOptional Activities: During your trip, your guide may offer optional activities. If these activities are available on the Europamundo app or through your \"My Trip\" link, we strongly recommend booking them as early as possible to ensure availability. Waiting until the last minute may result in missed opportunities due to limited tickets, bus seats, or other factors. Note: The schedules provided in this itinerary are indicative. The guide may adjust them as needed to enhance the trip experience.",
        meals: "None",
        stay: "Overnight, Vienna",
      },
      {
        day: 2,
        title: "Vienna",
        description:
          "09:00 a.m. - We'll start with a panoramic tour of Vienna, lasting about two and a half hours, with a local guide. During the tour, we'll see the Ringstrasse, the main boulevard of Vienna, the Opera, the exterior of the Hofburg Palace, Prater Park, the Belvedere, and Schönbrunn Palace.\n\n07:00 p.m. - In the evening, we'll include a transfer to the Grinzing district, an old wine-growing village now part of the city, known for its traditional taverns. Enjoy free time to dine in the area. 09:30 p.m. - Return to the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Vienna",
      },
      {
        day: 3,
        title: "Vienna - Budapest",
        description:
          "Total distance covered: 245 km. Scenery: We'll travel through the beautiful Pannonian Basin to the Hungarian capital. Note: The currency of Hungary is the Forint. It is advisable to pay in local currency during your stay. If the group is very small, we may take the train.\n\n08:30 a.m. - Departure from Vienna, following the course of the Danube to Hungary. The trip to the capital will take just under three hours. 11:30 a.m. - Budapest. We'll first visit Váci utca, one of the main pedestrian areas and probably the most famous and lively commercial street in the center of Budapest. Free time.\n\n02:30 p.m. - After lunch, we'll kick off our exploration of Budapest with a boat trip on the Danube River. The views of the city and its parliament from the river are breathtaking. Afterwards, we'll embark on a three-hour guided tour of the \"Queen of the Danube,\" where we'll see the many bridges over the Danube, the district of Pest with its bustling commercial activity, Buda's Old Town, and the Fisherman's Bastion. After the tour, you'll have free time to continue exploring the city before we return to the hotel. In the evening, we'll offer an optional outing to a Magyar show, with dinner included.",
        meals: "Breakfast",
        stay: "Overnight, Budapest",
      },
      {
        day: 4,
        title: "Budapest - Bratislava - Prague",
        description:
          "Total distance covered: 530 km.\n\n08:00 a.m. - Departure from Budapest. 10:30 a.m. - Bratislava, the capital of Slovakia, located along the Danube with a charming historic center. You'll have time to explore the city and enjoy lunch. 01:30 p.m. - Departure from Bratislava as we continue our journey to the Czech Republic.\n\n06:30 p.m. - Prague. Arrival in the beautiful Czech capital. We'll provide a transfer to the Old Town Square, a lively area brimming with energy and tourist activities. It's a fantastic place to get familiar with Prague. You'll find numerous restaurants offering a variety of cuisines, including Czech, Chinese, Indian, and Italian. Return to the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Prague",
      },
      {
        day: 5,
        title: "Prague",
        description:
          "07:45 a.m. - We'll begin our city tour with a local guide, lasting approximately three and a half hours. On foot, we'll explore the Castle District, the oldest part of Prague, featuring the citadel with its churches and palaces. From here, you'll enjoy panoramic views of the \"City of 100 Spires.\" We'll continue our walk to the Lesser Town, the city's Baroque jewel known as Malá Strana, crossing the Vltava River on the famous Charles Bridge, an architectural and sculptural masterpiece. We'll admire the beautiful cityscape and enter the Old Town of Prague with its renowned Old Town Square, one of the most beautiful in central Europe, featuring the Church of Our Lady before Týn and the famous Town Hall with its astronomical clock and chimes. The tour will include admission to Prague Castle, built in the 9th century and the former residence of the kings of Bohemia.\n\nAfter the city tour, you'll enjoy a cruise along the Vltava River. The afternoon is free for you to continue exploring the city. In the evening, you'll have some time to spend in the historic city center, where you'll have the opportunity to enjoy cuisines from around the world.",
        meals: "Breakfast",
        stay: "Overnight, Prague",
      },
      {
        day: 6,
        title: "Prague - Pilsen - Rothenburg - Frankfurt",
        description:
          "Total distance covered: 555 km. Scenery: Forests and hills in Czech Republic, pleasant landscapes in Germany.\n\n07:30 a.m. - Departure from Prague. 09:00 a.m. - Pilsen. Time to visit this city in western Bohemia, renowned for its beers. Enjoy a walk through its historic center, where you'll find its breweries, the Great Square, the cathedral, the Plague Column, and a Renaissance-era town hall. 10:00 a.m. - Departure from Pilsen. We'll travel to Germany to explore one of the stops on the famous Romantic Road.\n\n01:30 p.m. - Rothenburg. This fairytale-like city is considered one of the most beautiful towns in the country. Enjoy a stroll through its medieval old town and have lunch. 03:30 p.m. - Departure from Rothenburg. 06:00 p.m. - Frankfurt. We'll cross the wide, modern avenues that showcase the financial district. Later, you'll have free time in the historic city center, where you'll find a wide variety of restaurants offering Indian, Asian, Italian, and international cuisines. Transfer to the hotel.",
        meals: "Breakfast",
        stay: "Overnight, Frankfurt",
      },
      {
        day: 7,
        title: "Frankfurt",
        description:
          "After breakfast, our journey will come to an end, leaving you with wonderful lasting memories.\n\nNote: Please be aware that the hotel check-out time is usually 10:00 a.m. You can leave your luggage in reception upon check-out, allowing you to explore the city without carrying your bags. You can retrieve your luggage at your convenience later in the day. If you require additional time to use your room, we recommend booking an extra night at the end of your tour.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "003952",
    travelWindow: "April 2026",
    travellers: "3 adults",
    rooms: 1,
    stays: [
      { destination: "Vienna", hotel: "Rainers Hotel Vienna (4 star)", nights: 2, meals: "Breakfast" },
      { destination: "Budapest", hotel: "Radisson Budapest Budapart (4 star)", nights: 1, meals: "Breakfast" },
      { destination: "Prague", hotel: "Panorama Hotel Prague (4 star, option 1)", nights: 2, meals: "Breakfast" },
      { destination: "Prague", hotel: "Olympik Congress (4 star, option 2)", nights: 2, meals: "Breakfast" },
      { destination: "Frankfurt", hotel: "Ibis Frankfurt City Messe (3 star, option 1)", nights: 1, meals: "Breakfast" },
      { destination: "Frankfurt", hotel: "Crowne Plaza Frankfurt Congress (4 star, option 2)", nights: 1, meals: "Breakfast" },
    ],
    stayNote:
      "These are the tour operator's planned hotels. Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply. Exchange rate fluctuations at the time of full payment will be applicable and may result in price adjustments.",
    metaTitle: "A Piece of Europe - 7 Days / 6 Nights",
    metaDescription:
      "Central Europe in seven days - Vienna, Budapest, Bratislava, Prague Castle, Pilsen and Rothenburg to Frankfurt. Built around your dates; price on request.",
  },
  // 004414 EGYPT 3N4D 2A OCT 2026.......pdf
  {
    slug: "fascinating-egypt-4d3n",
    title: "Fascinating Egypt",
    summary:
      "Experience the timeless wonders of Egypt with a captivating journey through Cairo and Alexandria. Explore the magnificent Giza Pyramids and Sphinx, discover Egypt's fascinating ancient treasures at the Grand Egyptian Museum. Enjoy a full-day excursion to the historic Mediterranean city of Alexandria, visiting its remarkable ancient landmarks and cultural attractions. The journey is complemented by a memorable dinner cruise on the Nile, offering a perfect blend of history, culture, and Egyptian hospitality.",
    destinationSlug: "egypt",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 0,
    heroImage: d("egypt"),
    highlights: ["Nile Cruise", "Alexandria", "Grand Egyptian Museum"],
    inclusions: [
      "Accommodation in Cairo for 03 Nights on Bed & Breakfast Basis.",
      "Tour in Cairo for 01 Day as mentioned at the above itinerary.",
      "Tour in Alexandria for 01 Day as mentioned at the above itinerary.",
      "Private English-speaking Egyptologist in Cairo & Alexandria.",
      "Transfer Cairo / Alexandria / Cairo by A/C Private vehicle.",
      "Visa Charge",
      "Meet & assist at Cairo International Airport plus transfer to hotel by air-conditioned new model Van.",
      "Transfer to Cairo International airport on your final departure.",
      "A Bottle of Mineral Water to each person.",
      "Entrance fees to the above-mentioned sites as mentioned in the itinerary.",
      "Service charges and all taxes.",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "TCS",
      "Early check-in or late check-out",
      "Laundry, telephone calls and incidentals",
      "Personal expenses, room service, special orders, and alcoholic/non-alcoholic beverages",
      "Lunch, Dinner",
      "Entrance inside any of the pyramids will be with extra fees (Tickets can be booked on the Spot): 1st Great Pyramid 35.00 USD$ - 2nd Pyramid OR 3rd Pyramid 15.00 USD$",
      "Tipping USD$ 07.00 per person per day to be collected upon arrival (Cover Porters, Ground Staff, Drivers, during the tour & exclude tipping to your tour guide).",
      "Any extra excursion beyond the itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo & Nile Dinner Cruise",
        description:
          "After your flight arrives at Cairo International Airport, Egypt representative will be waiting for you in the international arrival hall holding a sign with your name to meet & greet you before the passport control and finish all formalities with you, transfer to your hotel, check-in @ 15:00 PM, where we spend the night.\n\nIn the evening transfer to Dinner Cruise on the magic Nile River where you can enjoy watching real Belly Dancer and watching Folklore show.",
        meals: "Dinner",
        stay: "Overnight, Cairo",
      },
      {
        day: 2,
        title: "Cairo Day at Leisure",
        description:
          "Enjoy a relaxed morning with breakfast at the hotel. The rest of the day is free at leisure to explore Cairo independently, relax at the hotel, or enjoy optional activities.",
        meals: "Breakfast",
        stay: "Overnight, Cairo",
      },
      {
        day: 3,
        title: "Alexandria Day Tour",
        description:
          "After an early breakfast, you will travel by new model vehicle to Alexandria, your guide will lead you through the highlights of Alexandria, including visits to the Catacombs of Kom El-Shokafa, Qaitbay Citadel, then visit the ancient Library of Alexandria, the world's most famous library of Classical antiquity. The building is extraordinary, not only for its priceless collection of Classical literature, but also for its incredible architecture.\n\nSee Pompey Pillar from outside and visit El-Mursi Abu Abbas Mosque. At the end of your tour transfer back to your hotel, where we spend the night.",
        meals: "Breakfast",
        stay: "Overnight, Cairo",
      },
      {
        day: 4,
        title: "Cairo Day Tour - Pyramids of Giza, Grand Egyptian Museum - Departure",
        description:
          "After Breakfast at hotel, visit the Pyramids of Giza and the magnificent monolith of the Sphinx; the Great Pyramid of Cheops, Chephren and Mykerinus listed as one of the Seven Wonders of the World, the whole complex a UNESCO World Heritage site, as are the ruins around the Old Kingdom capital. Our next discovery, visit the Grand Egyptian Museum.\n\nAt the end of your tour, Egypt representative will accompany you to Cairo International Airport for your departure.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004414",
    travelWindow: "October 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Cairo",
        hotel: "Soluxe Cairo Hotel (Pyramids view as per availability) or similar",
        nights: 3,
        meals: "Breakfast",
      },
    ],
    stayNote:
      "Hotel category is confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    metaTitle: "Fascinating Egypt - 4 Days / 3 Nights",
    metaDescription:
      "Egypt in four days - a Nile dinner cruise, Alexandria's catacombs and library, the Pyramids of Giza and the Grand Egyptian Museum. Price on request.",
  },
  // 004470-4D 3N-MALDIVES-JULY-02 ADULTS.pdf
  {
    slug: "charm-of-maldives-4d3n",
    title: "Charm of Maldives",
    summary:
      "Three nights at Villa Nautica Paradise Island in the Maldives on full board, with round-trip speed boat transfers from the airport - all in a beach villa, or two nights in a beach villa and one in a water villa.",
    destinationSlug: "maldives",
    category: "honeymoon",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 0,
    heroImage: d("maldives"),
    highlights: ["Villa Nautica Paradise Island", "Beach Villa", "Water Villa"],
    inclusions: [
      "3N Beach Villa (option 1)",
      "2N Beach Villa + 1N Water Villa (option 2)",
      "Breakfast, Lunch & Dinner",
      "Round trip Airport transfers on Speed Boat",
      "All taxes including Green Tax",
    ],
    exclusions: [],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Maldives",
        description:
          "On arrival at the airport, transfer by speed boat to Villa Nautica Paradise Island and check in to your villa.",
        meals: "Lunch, Dinner",
        stay: "Overnight, Maldives",
      },
      {
        day: 2,
        title: "Day at Leisure",
        description: "A day at leisure at the resort.",
        meals: "Breakfast, Lunch, Dinner",
        stay: "Overnight, Maldives",
      },
      {
        day: 3,
        title: "Day at Leisure",
        description: "A day at leisure at the resort.",
        meals: "Breakfast, Lunch, Dinner",
        stay: "Overnight, Maldives",
      },
      {
        day: 4,
        title: "Departure",
        description: "After breakfast, check out and transfer by speed boat to the airport for departure.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "004470",
    travelWindow: "July 2026",
    travellers: "2 adults",
    rooms: 1,
    stays: [
      {
        destination: "Maldives",
        hotel: "Villa Nautica Paradise Island or similar (option 1: 3N Beach Villa)",
        nights: 3,
        meals: "Breakfast, Lunch & Dinner",
      },
      {
        destination: "Maldives",
        hotel: "Villa Nautica Paradise Island or similar (option 2: 2N Beach Villa + 1N Water Villa)",
        nights: 3,
        meals: "Breakfast, Lunch & Dinner",
      },
    ],
    stayNote:
      "Hotel availability will be reconfirmed at the time of booking; if not available, alternate properties will be offered and rate fluctuations may apply. Exchange rate fluctuations at the time of full payment will be applicable and may result in price adjustments.",
    bookingPolicy:
      "Tour: 50% at the time of confirmation, 50% at 30 days prior to departure date. Air: 100% at the time of confirmation.",
    cancellationPolicy:
      "Tour: 50% before 30 days of travel date, 100% within 30 days of travel date. Air: As per airline policy.",
    metaTitle: "Charm of Maldives - 4 Days / 3 Nights",
    metaDescription:
      "The Maldives in four days - three nights at Villa Nautica Paradise Island on full board, beach or water villa, with speed boat transfers. Price on request.",
  },
  // 004777-4D 3N-HONG KONG-02 ADULT+1 INFANT-OCT 2026.docx
  {
    slug: "charm-of-hong-kong-4d3n",
    title: "Charm of Hong Kong",
    summary:
      "Four days in Hong Kong, starting with a private airport transfer to your hotel, followed by a half-day city tour covering the Peak Tram, Madame Tussauds, Avenue of Stars, Clock Tower, and Night Market. The next few days include private transfers and visits to Disneyland and Ocean Park, followed by hotel check-out and a private transfer to Hong Kong Airport.",
    destinationSlug: "hong-kong",
    category: "family",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 0,
    heroImage: d("hong-kong"),
    highlights: ["Madame Tussauds", "Disneyland", "Ocean Park"],
    inclusions: [
      "3 nights' accommodation at the above-mentioned hotels",
      "Double sharing basis room",
      "Daily breakfast (except on arrival day)",
      "Meet & greet at the airport",
      "Sightseeing as per the above-mentioned itinerary",
      "All entry tickets",
      "All tours and transfers on private/SIC vehicles",
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
        title: "Arrival in Hong Kong, clear immigration",
        description:
          "Upon arrival at Hong Kong International Airport, you will be met and transferred privately to your hotel by van for check-in at 1500 hrs.\n\nLater, proceed for a 5-hour private half-day city tour covering the one-way Peak Tram ride, Madame Tussauds, Avenue of Stars, Clock Tower, and the vibrant Night Market, after which you will be dropped back at the hotel for an overnight stay.",
        meals: "None",
        stay: "Overnight, Hong Kong",
      },
      {
        day: 2,
        title: "Full Day Disneyland",
        description:
          "After breakfast at the hotel, proceed by private van for a full-day visit to Hong Kong Disneyland, where you can enjoy the park's attractions, themed areas, rides, entertainment, and shows with a regular 1-day admission pass.\n\nIn the evening, meet your private transfer at Disneyland for a comfortable return journey to the hotel, followed by an overnight stay.",
        meals: "Breakfast",
        stay: "Overnight, Hong Kong",
      },
      {
        day: 3,
        title: "Visit Ocean Park",
        description:
          "After breakfast at the hotel, proceed by private van for a full-day visit to Ocean Park Hong Kong with a 1-day admission pass, enjoying its exciting rides, attractions, marine exhibits, and entertainment.\n\nIn the evening, after completing the visit, return to the hotel by private van and relax for the remainder of the evening, followed by an overnight stay.",
        meals: "Breakfast only",
        stay: "Overnight, Hong Kong",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "After breakfast at the hotel, complete the check-out formalities by 1100 hrs and prepare for departure. You will then be picked up from the hotel by a private van and transferred comfortably to Hong Kong International Airport for your onward journey.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "004777",
    travelWindow: "October 2026",
    travellers: "2 adults + 1 infant",
    rooms: 1,
    stays: [
      { destination: "Hong Kong", hotel: "Regal Kowloon", nights: 3, meals: "Breakfast" },
    ],
    stayNote:
      "Hotel categories are confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    metaTitle: "Charm of Hong Kong - 4 Days / 3 Nights",
    metaDescription:
      "Hong Kong in four days - the Peak Tram, Madame Tussauds and Avenue of Stars, a full day at Disneyland and Ocean Park. Built around your dates; price on request.",
  },
];

/**
 * PROMOTIONAL PACKAGES - the client's limited-period offers, one per PDF in
 * promotionalpackage/. These, and only these, are `featured`: that flag is
 * what puts a package in the homepage "Promotional packages" tab (and first on
 * /packages/), so a customer proposal above can never land there by accident.
 *
 * They are deliberately on NO occasion shelf: `category: "customized"` keeps
 * them off /packages/honeymoon/, /family/ and /group-tours/, which list the
 * customer proposals. `offerEndsOn` drives the "Offer ends" badge, which drops
 * off by itself once the date passes. Slugs carry "-offer" so they never
 * collide with a proposal for the same trip.
 *
 * Next season: edit prices and `offerEndsOn` here (or in /admin/), or swap the
 * entries for the new PDFs, and re-run the seed.
 */
const promotionalEntries = [
  // GOA PROMOTION PACKAGE 4A JULY-SEP 2026.pdf
  {
    slug: "goa-offer-3d2n",
    title: "Goa",
    summary:
      "Three days across Goa's two coasts - a beach-hopping tour of the north from Aguada Fort to Baga, then Old Goa's churches, temples and a spice garden in the south.",
    priceNote:
      "Land cost shown per adult; excludes train fare. Price is valid for a limited period and may change thereafter.",
    destinationSlug: "goa",
    category: "customized",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 2999,
    heroImage: d("goa"),
    highlights: ["North Goa Beaches", "Old Goa Churches", "Spice Gardens"],
    inclusions: [
      "2 nights' accommodation at the above-mentioned hotel",
      "1 room",
      "2 breakfasts (except on arrival day)",
      "Meal plan as per the itinerary",
      "Airport / Railway station pick-up and drop",
      "All tours and transfers by SIC",
      "GST",
    ],
    exclusions: [
      "Round-trip train fare / Air Fare",
      "All entry tickets",
      "Lunch",
      "Early check-in or late check-out (standard check-in after 1400/1500 hrs, check-out before 1100/1200 hrs)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Goa",
        description:
          "Upon your arrival at Goa Airport or the railway station, our representative will greet you and assist you with your transfer to the hotel. After reaching the hotel, complete the check-in formalities and settle into your room.\n\nThe remainder of the day is at your leisure - you may choose to relax after your journey, enjoy the hotel's amenities, or explore the nearby beaches, cafés, and local markets at your own pace. Return to the hotel for an overnight stay in Goa.",
        meals: "Dinner",
        stay: "Overnight, Goa",
      },
      {
        day: 2,
        title: "North Goa Sightseeing",
        description:
          "Start your morning early with breakfast at your hotel, then visit Baga Beach, which is one of the most famous beaches in Goa. You can enjoy the lively atmosphere, beach shacks, water sports, and beautiful sea views. Next, proceed to Calangute Beach, often called the \"Queen of Beaches.\" This beach is very popular among tourists and offers shopping stalls, restaurants, and water activities.\n\nAfter that, visit Anjuna Beach, known for its scenic beauty, rocky shoreline, and vibrant flea market. Continue your beach tour with a visit to Candolim Beach, a quieter and more relaxed beach where you can enjoy peaceful views of the Arabian Sea.\n\nLater in the evening, visit Fort Aguada, a historic Portuguese fort built in the 17th century. From the fort, you can enjoy a spectacular sunset and panoramic views of the sea. After completing the sightseeing for the day, return to the hotel and relax.",
        meals: "Breakfast & Dinner",
        stay: "Overnight, Goa",
      },
      {
        day: 3,
        title: "South Goa - Departure",
        description:
          "Start your morning early with breakfast at your hotel and check out from the hotel, then drive toward Old Goa to explore its historic churches, beginning with the majestic Basilica of Bom Jesus, which houses the remains of St. Francis Xavier, followed by Se Cathedral to admire its Portuguese architecture. After visiting the churches, head to Shri Manguesh Temple, one of Goa's most famous Hindu temples, and spend some time appreciating its beautiful architecture and serene surroundings. Next, visit Shri Balaji Temple, known for its peaceful ambiance and vibrant spiritual atmosphere.\n\nAround midday, enjoy a guided tour at a Spice Garden, where you can learn about local spices, herbs, and traditional Goan farming practices, followed by lunch at the garden or a nearby restaurant.\n\nAfter lunch, drive to Panjim and visit the Our Lady of the Immaculate Conception Church, an iconic landmark with its striking white façade and picturesque steps. In the late afternoon, relax at Miramar Beach, stroll along the shoreline, and watch the sunset over the Arabian Sea. Then proceed for a timely drop at the Airport / Railway Station for departure, concluding your memorable 3-day trip to Goa.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "",
    travelWindow: "July - September 2026",
    travellers: "Minimum 4 adults",
    rooms: 1,
    stays: [
      {
        destination: "Goa",
        hotel: "Resort Village Royal or similar (option 1)",
        nights: 2,
        meals: "Breakfast & Dinner",
      },
      {
        destination: "Goa",
        hotel: "W S Beach Resort or similar (option 2)",
        nights: 2,
        meals: "Breakfast & Dinner",
      },
    ],
    stayNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    priceRows: [
      { label: "Per adult, hotel option 1", amount: 2999 },
      { label: "Per adult, hotel option 2", amount: 3999 },
    ],
    offerEndsOn: "2026-09-30",
    metaTitle: "Goa - 3 Days / 2 Nights",
    metaDescription:
      "Goa in three days from ₹2,999 per adult - Baga, Calangute and Fort Aguada in the north, then Old Goa's churches, a spice garden and sunset at Miramar. Land only.",
  },
  // GOLDEN  TRIANGLE PROMOTION PACKAGE JULT-SEP 2026.pdf
  {
    slug: "charm-of-delhi-agra-jaipur-offer-4d3n",
    title: "Charm of Delhi, Agra & Jaipur",
    summary:
      "India's classic Golden Triangle in four days - Delhi's monuments and temples, the Taj Mahal at Agra, and the Pink City's palaces at Jaipur. A limited-period summer package, priced for groups of four or more.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "golden-triangle",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 11999,
    heroImage: d("golden-triangle"),
    highlights: ["Red Fort", "Taj Mahal", "Hawa Mahal"],
    inclusions: [
      "3 nights' accommodation at the above-mentioned hotels",
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
          "On arrival at Delhi Airport or Railway Station, transfer to your hotel, then set out for an afternoon of sightseeing: the Red Fort - the Mughal seat of power for nearly 200 years, built by Shah Jahan - Raj Ghat, Mahatma Gandhi's memorial, and the iconic India Gate.\n\nThe evening brings a visit to the striking Swaminarayan Akshardham temple complex before returning to your hotel.",
        meals: "None",
        stay: "Overnight, Delhi",
      },
      {
        day: 2,
        title: "Delhi Sightseeing - Drive to Agra",
        description:
          "After breakfast, drive past Rashtrapati Bhavan and Parliament House, then continue to the Indira Gandhi Memorial Museum, the Lotus Temple, the historic Qutub Minar, and Humayun's Tomb.\n\nAfterwards, the drive continues to Agra, with check-in at your hotel on arrival.",
        meals: "Breakfast only",
        stay: "Overnight, Agra",
      },
      {
        day: 3,
        title: "Agra - Transfer to Jaipur",
        description:
          "After breakfast, visit the Taj Mahal - Shah Jahan's eternal tribute to Mumtaz Mahal, and one of the world's most recognisable monuments - before the drive on to Jaipur, checking in to your hotel on arrival.",
        meals: "Breakfast only",
        stay: "Overnight, Jaipur",
      },
      {
        day: 4,
        title: "Jaipur Sightseeing & Departure",
        description:
          "After breakfast, sightseeing in Jaipur: a drive past the Hawa Mahal, a visit to the royal City Palace (still partly home to the royal family), and on to the historic Jantar Mantar, the Albert Hall Museum, and the peaceful Birla Mandir, before transferring to the airport for departure.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "",
    travelWindow: "July - September 2026",
    travellers: "Minimum 4 adults",
    rooms: 2,
    stays: [
      { destination: "Delhi", hotel: "Hotel Sun Star Grand or similar", nights: 1, meals: "Breakfast" },
      { destination: "Agra", hotel: "Hotel Ten Square or similar", nights: 1, meals: "Breakfast" },
      { destination: "Jaipur", hotel: "Hotel Gandharva or similar", nights: 1, meals: "Breakfast" },
    ],
    stayNote:
      "Hotel categories are confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    priceRows: [
      { label: "Per adult, minimum 4 travellers", amount: 11999 },
      { label: "Minimum booking, 4 adults (total)", amount: 47996 },
    ],
    offerEndsOn: "2026-09-30",
    metaTitle: "Charm of Delhi, Agra & Jaipur - 4 Days / 3 Nights",
    metaDescription:
      "Delhi, Agra and Jaipur in four days from ₹11,999 per adult - the Red Fort and Akshardham, the Taj Mahal, then Hawa Mahal and the City Palace. Land only.",
  },
  // RAJASTHAN PROMOTION PACKAGE JULY-SEP.pdf
  {
    slug: "charm-of-jaipur-ajmer-udaipur-offer-4d3n",
    title: "Charm of Jaipur, Ajmer & Udaipur",
    summary:
      "Four days across royal Rajasthan - the Pink City's palaces and forts, the spiritual heart of Ajmer, and the lakes and palaces of Udaipur. A limited-period package, priced for groups of four or more.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "rajasthan",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 8999,
    heroImage: d("rajasthan"),
    highlights: ["Hawa Mahal", "Ajmer Sharif", "City of Lakes"],
    inclusions: [
      "3 nights' accommodation at the above-mentioned hotels",
      "Daily breakfast (except on arrival day)",
      "All tours and transfers on a private basis",
      "Airport pick-up and drop",
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
        title: "Arrival in Jaipur - Local Sightseeing",
        description:
          "On arrival at Jaipur Airport or Railway Station, begin exploring the Pink City: the five-storey Hawa Mahal, its 953 windows once letting royal women watch street life unseen, and the City Palace, blending Mughal and Rajput architecture with museums of royal artefacts.\n\nThe evening is free to browse Jaipur's markets for handicrafts, textiles and jewellery, before transferring to your hotel.",
        meals: "None",
        stay: "Overnight, Jaipur",
      },
      {
        day: 2,
        title: "Jaipur Sightseeing - Transfer to Ajmer",
        description:
          "After breakfast, a full day covering Amber Fort overlooking Maota Lake, with its Sheesh Mahal (Mirror Palace); the marble Birla Mandir; the UNESCO-listed Jantar Mantar observatory with the world's largest stone sundial; and the Albert Hall Museum, Rajasthan's oldest.\n\nIn the afternoon, drive to Ajmer, a city of spiritual heritage, and check in to your hotel.",
        meals: "Breakfast only",
        stay: "Overnight, Ajmer",
      },
      {
        day: 3,
        title: "Ajmer Sightseeing - Transfer to Udaipur",
        description:
          "After breakfast, visit the revered Ajmer Sharif Dargah, shrine of the Sufi saint Khwaja Moinuddin Chishti; Adhai Din Ka Jhonpra, known for its Indo-Islamic architecture; the marble-pavilioned Ana Sagar Lake; and the gold-detailed Nasiyan Jain Temple.\n\nFrom there, drive to Udaipur - the City of Lakes - with the evening free at leisure.",
        meals: "Breakfast only",
        stay: "Overnight, Udaipur",
      },
      {
        day: 4,
        title: "Udaipur Sightseeing & Departure",
        description:
          "After breakfast, visit Lake Pichola (with an optional boat ride at your own expense), the grand City Palace with its balconies and museums, and the intricately carved Jagdish Temple, before transferring to Maharana Pratap Airport for your departure.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "",
    travelWindow: "July - September 2026",
    travellers: "Minimum 4 adults",
    rooms: 2,
    stays: [
      { destination: "Jaipur", hotel: "Hotel Gandharva or similar", nights: 1, meals: "Breakfast" },
      { destination: "Ajmer", hotel: "Hotel Ambassador or similar", nights: 1, meals: "Breakfast" },
      { destination: "Udaipur", hotel: "Hotel Opulence or similar", nights: 1, meals: "Breakfast" },
    ],
    stayNote:
      "Hotel categories are confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    priceRows: [
      { label: "Per adult, minimum 4 travellers", amount: 8999 },
      { label: "Minimum booking, 4 adults (total)", amount: 35996 },
    ],
    offerEndsOn: "2026-09-30",
    metaTitle: "Charm of Jaipur, Ajmer & Udaipur - 4 Days / 3 Nights",
    metaDescription:
      "Jaipur, Ajmer and Udaipur in four days from ₹8,999 per adult - Hawa Mahal and Amber Fort, Ajmer Sharif Dargah, then Lake Pichola and the City Palace. Land only.",
  },
  // HYDERABAD PROMOTION PACKAGE JULY - SEP 2026 (1).pdf
  {
    slug: "charm-of-hyderabad-offer-3d2n",
    title: "Charm of Hyderabad",
    summary:
      "Three days in the City of Pearls - temples and lakeside parks, a full day at the world's largest film studio complex, and a heritage tour through Charminar and Golconda Fort. A limited-period summer package, priced for groups of four or more.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "hyderabad",
    category: "customized",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 7999,
    heroImage: d("hyderabad"),
    highlights: ["Ramoji Film City", "Charminar", "Golconda Fort"],
    inclusions: [
      "2 nights' accommodation at the above-mentioned hotel",
      "Breakfast (except on arrival day)",
      "Sightseeing as per the above-mentioned itinerary",
      "Ramoji Film City entry ticket",
      "All tours and transfers on a private basis",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "Other entry tickets (monuments, park, mobile/camera fees)",
      "Early check-in or late check-out (standard check-in after 1400/1500 hrs, check-out before 1100/1200 hrs)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service and special orders",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival - City Sightseeing",
        description:
          "On arrival at Rajiv Gandhi International Airport or Hyderabad Deccan Railway Station, transfer to your hotel to check in and relax.\n\nThe afternoon takes in the hilltop Birla Mandir with its panoramic city views, NTR Gardens, a drive past the Telangana Secretariat, and the towering Statue of Equality of Dr. B.R. Ambedkar, before Lumbini Park beside Hussain Sagar Lake and the evening laser show over the water.",
        meals: "None",
        stay: "Overnight, Hyderabad",
      },
      {
        day: 2,
        title: "Full Day at Ramoji Film City",
        description:
          "After breakfast, a full day at Ramoji Film City - the world's largest integrated film studio complex, spanning thousands of acres of movie sets, themed gardens, live shows and amusement rides, with the whole day free to explore at your own pace.",
        meals: "Breakfast only",
        stay: "Overnight, Hyderabad",
      },
      {
        day: 3,
        title: "Heritage Tour & Departure",
        description:
          "After breakfast and check-out, a heritage tour taking in the Salar Jung Museum's vast collection of art and artefacts, the iconic 1591 Charminar and its surrounding markets, the historic Mecca Masjid, and Golconda Fort, known for its architecture and acoustic design - before transferring to the airport for departure.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "",
    travelWindow: "July - September 2026",
    travellers: "Minimum 4 adults",
    rooms: 2,
    stays: [
      { destination: "Hyderabad", hotel: "Hotel Central Park or similar", nights: 2, meals: "Breakfast" },
    ],
    stayNote:
      "Hotel category is confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    priceRows: [
      { label: "Per adult, minimum 4 travellers", amount: 7999 },
      { label: "Minimum booking, 4 adults (total)", amount: 31996 },
    ],
    offerEndsOn: "2026-09-30",
    metaTitle: "Charm of Hyderabad - 3 Days / 2 Nights",
    metaDescription:
      "Hyderabad in three days from ₹7,999 per adult - Birla Mandir and Hussain Sagar, a full day at Ramoji Film City, then Charminar and Golconda Fort. Land only.",
  },
  // SRINAGAR PROMOTION PACKAGE JULY-SEP 2026.pdf
  {
    slug: "charm-of-srinagar-offer-4d3n",
    title: "Charm of Srinagar",
    summary:
      "Four days across the Kashmir valley - Srinagar's Mughal gardens, the meadows of Gulmarg, and the rivers and valleys of Pahalgam. A limited-period package, priced for groups of four or more.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes flights. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "kashmir-srinagar",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 8999,
    heroImage: d("kashmir-srinagar"),
    highlights: ["Mughal Gardens", "Gulmarg", "Pahalgam"],
    inclusions: [
      "3 nights' accommodation on a double-sharing basis at the above-mentioned hotel",
      "Meal plan - breakfast only (except on arrival day)",
      "Sightseeing as per the above-mentioned itinerary",
      "All tours and transfers on a private SUV",
      "Shikara ride",
    ],
    exclusions: [
      "Flight/train ticket",
      "GST",
      "Local union cab in Pahalgam and Gulmarg",
      "Pony ride",
      "Gondola cable car tickets",
      "Early check-in or late check-out",
      "Other meals not mentioned, laundry, telephone calls, incidentals and room service",
      "Extra excursion or sightseeing beyond the suggested itinerary, and special orders",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description:
          "On arrival at Srinagar International Airport, transfer to your hotel to check in, then set out to visit the famous Mughal gardens - Shalimar Bagh, Nishat Bagh and Chashme Shahi - before returning to the hotel for the evening.",
        meals: "None",
        stay: "Overnight, Srinagar",
      },
      {
        day: 2,
        title: "Excursion to Gulmarg",
        description:
          "After breakfast, a full-day excursion to Gulmarg - one of Kashmir's most beautiful hill stations, known for its meadows and mountain views, with the Gulmarg Gondola ride available as an optional activity. Return to your Srinagar hotel in the evening.",
        meals: "Breakfast only",
        stay: "Overnight, Srinagar",
      },
      {
        day: 3,
        title: "Excursion to Pahalgam",
        description:
          "After breakfast, a full-day excursion to Pahalgam - the \"Valley of Shepherds\" - taking in its landscapes, rivers and valleys, before returning to your Srinagar hotel.",
        meals: "Breakfast only",
        stay: "Overnight, Srinagar",
      },
      {
        day: 4,
        title: "Departure from Srinagar",
        description:
          "After breakfast, check out and transfer to Srinagar International Airport for your departure, carrying home memories of Kashmir.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "",
    travelWindow: "March - May 2026",
    travellers: "Minimum 4 adults",
    rooms: 2,
    stays: [
      {
        destination: "Srinagar",
        hotel: "3-star hotel or similar",
        nights: 3,
        meals: "Breakfast",
      },
    ],
    stayNote:
      "Hotel category is confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    priceRows: [
      { label: "Per adult (minimum 4 travellers)", amount: 8999 },
      { label: "Minimum booking (4 adults)", amount: 35996 },
    ],
    offerEndsOn: "2026-05-31",
    metaTitle: "Charm of Srinagar - 4 Days / 3 Nights",
    metaDescription:
      "Srinagar in four days from ₹8,999 per adult - the Mughal gardens, a day in the Gulmarg meadows and a day in Pahalgam, with a Shikara ride. Land only.",
  },
  // DELHI MANALI PROMOTION PACKAGE JULY-SEP 2026 (1).pdf
  {
    slug: "fascinating-delhi-manali-offer-5d4n",
    title: "Fascinating Delhi - Manali",
    summary:
      "Five days between the capital and the Himalayas - an overnight Volvo journey each way, local sightseeing and temples in Manali, the meadows of Solang Valley, and a half-day sweep of Delhi's landmarks before departure. A limited-period summer package, priced for groups of four or more.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes flights. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "delhi-manali",
    category: "customized",
    type: "customized",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 8999,
    heroImage: d("delhi-manali"),
    highlights: ["Manali Valleys", "Solang", "Delhi Heritage"],
    inclusions: [
      "2 nights' accommodation at the above-mentioned hotel in Manali",
      "2 nights on Volvo bus (Delhi-Manali-Delhi)",
      "Meal plan (breakfast & dinner) as per the itinerary",
      "Airport/railway station pick-up and drop",
      "All tours and transfers on a private basis",
      "All toll, tax and driver allowance",
      "GST",
    ],
    exclusions: [
      "All entry tickets",
      "Flight fare",
      "Early check-in or late check-out (standard check-in 12:00 noon)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service, special orders, and alcoholic/non-alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi - Overnight to Manali",
        description:
          "On arrival at Indira Gandhi International Airport, make your own way to the Volvo bus stand to board the overnight bus from Delhi to Manali.",
        meals: "None",
        stay: "Overnight Volvo, Delhi to Manali",
      },
      {
        day: 2,
        title: "Arrival in Manali & Local Sightseeing",
        description:
          "Arrive in Manali in the morning and transfer from the bus stand to your hotel for check-in. The rest of the day covers local sightseeing - Hadimba Devi Temple, Vashisht Temple and its hot springs, Van Vihar National Park, and Mall Road - before returning to the hotel for dinner.",
        meals: "Dinner",
        stay: "Overnight, Manali",
      },
      {
        day: 3,
        title: "Excursion to Solang Valley",
        description:
          "After breakfast, a day excursion to Solang Valley - known for its scenic beauty and adventure activities such as paragliding, skiing and ropeway rides (all optional, at additional cost). Return to your Manali hotel in the evening.",
        meals: "Breakfast, Dinner",
        stay: "Overnight, Manali",
      },
      {
        day: 4,
        title: "Kullu Valley Sightseeing - Overnight to Delhi",
        description:
          "After breakfast, sightseeing through Kullu Valley and along the scenic Naggar Road, before transferring to the Volvo bus stand for the overnight journey back to Delhi.",
        meals: "Breakfast only",
        stay: "Overnight Volvo, Manali to Delhi",
      },
      {
        day: 5,
        title: "Delhi Sightseeing & Departure",
        description:
          "Arrive in Delhi in the morning and transfer from the bus stand for a half-day sightseeing tour covering the capital's major landmarks - India Gate, Lotus Temple, Qutub Minar and Red Fort - before transferring to Indira Gandhi International Airport for departure.",
        meals: "None",
      },
    ],
    referenceNo: "",
    travelWindow: "July - September 2026",
    travellers: "Minimum 4 adults",
    rooms: 2,
    stays: [
      {
        destination: "Manali",
        hotel: "Hotel Grand Plaza or similar",
        nights: 2,
        meals: "Breakfast & Dinner",
      },
    ],
    stayNote:
      "2 nights are on an overnight Volvo bus (Delhi-Manali and Manali-Delhi); hotel category is confirmed at time of booking. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    priceRows: [
      { label: "Per adult (minimum 4 travellers)", amount: 8999 },
      { label: "Minimum booking (4 adults)", amount: 35996 },
    ],
    offerEndsOn: "2026-09-30",
    metaTitle: "Fascinating Delhi - Manali - 5 Days / 4 Nights",
    metaDescription:
      "Delhi and Manali in five days from ₹8,999 per adult - Hadimba Devi Temple, Solang Valley and Kullu, with a Volvo each way and a half day in Delhi. Land only.",
  },
  // DUBAI PROMOTION PACKAGE JULY -SEP.pdf
  {
    slug: "fascinating-dubai-offer-4d3n",
    title: "Fascinating Dubai",
    summary:
      "Four days in Dubai - a creek dhow dinner cruise, the city's iconic skyline and Burj Khalifa, and a desert safari under the stars. A limited-period summer package, priced for groups of four or more.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes airfare and visa. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "dubai",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 26999,
    heroImage: d("dubai"),
    highlights: ["Dhow Cruise", "Burj Khalifa", "Desert Safari"],
    inclusions: [
      "3 nights' accommodation at the above-mentioned hotel",
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
          "On arrival at Dubai International Airport, you'll be warmly welcomed and transferred to your hotel in a private vehicle. After check-in and some time to relax, get ready for a charming evening ahead.\n\nIn the evening, board a Deluxe Dhow Dinner Cruise at Dubai Creek, with two-way private transfers included. Step aboard a traditional wooden dhow, beautifully lit, and sail past illuminated souks, heritage buildings and skyline views where old Dubai's history meets its modern skyline.\n\nOnboard, enjoy a lavish international buffet dinner - vegetarian and non-vegetarian options, with soft beverages - alongside live entertainment including the traditional Tanoura dance. Return to your hotel after the cruise.",
        meals: "Dinner only",
        stay: "Overnight, Dubai",
      },
      {
        day: 2,
        title: "Dubai City Tour & Burj Khalifa Experience",
        description:
          "After breakfast, set off on a half-day Dubai City Tour on a private, driver-cum-guide basis - covering both the historic and modern faces of the city. Drive through the heritage quarter of Al Fahidi, pass the famous Gold and Spice Souks, and stop for photos at the Burj Al Arab and the Jumeirah Mosque, before continuing along the skyscraper-lined Sheikh Zayed Road.\n\nLater, visit the world's tallest building, Burj Khalifa, with access to the 124th-floor observation deck (non-prime hours), for panoramic views across the skyline, desert and coastline. A one-way private transfer back to the hotel is included.",
        meals: "Breakfast only",
        stay: "Overnight, Dubai",
      },
      {
        day: 3,
        title: "Desert Safari with BBQ Dinner",
        description:
          "The morning is free at leisure. In the afternoon, head out on a Standard Desert Safari on a private, two-way basis - a 4x4 ride into the Arabian Desert for dune bashing across golden sand, a beautiful desert sunset, and stops for camel riding, sandboarding and photos in traditional Arabian attire.\n\nAt the desert camp, settle into a Bedouin-style setting for an evening of belly dance, a Tanoura show and fire performances, with a BBQ dinner buffet - vegetarian and non-vegetarian - served under the stars. Return to your hotel after the safari.",
        meals: "Breakfast, BBQ dinner",
        stay: "Overnight, Dubai",
      },
      {
        day: 4,
        title: "Departure from Dubai",
        description:
          "After breakfast at the hotel, check out as per hotel policy and transfer to Dubai International Airport for your onward departure - carrying home unforgettable memories of your Dubai holiday.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "",
    travelWindow: "July - September 2026",
    travellers: "Minimum 4 adults",
    rooms: 2,
    stays: [
      {
        destination: "Dubai",
        hotel: "Gateway Hotel or similar",
        nights: 3,
        meals: "Breakfast",
      },
    ],
    stayNote:
      "Hotel category is confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    priceRows: [
      { label: "Per adult (minimum 4 travellers)", amount: 26999 },
      { label: "Minimum booking (4 adults)", amount: 107996 },
    ],
    offerEndsOn: "2026-09-30",
    metaTitle: "Fascinating Dubai - 4 Days / 3 Nights",
    metaDescription:
      "Dubai in four days from ₹26,999 per adult - a Creek dhow dinner cruise, the city tour and Burj Khalifa, and a desert safari with BBQ dinner. Land only.",
  },
  // SINGAPORE PROMOTION PACKAGE JULY-SEP 2026.pdf
  {
    slug: "charm-of-singapore-offer-3d2n",
    title: "Charm of Singapore",
    summary:
      "Three days in the Lion City - Marina Bay and Chinatown on a guided city tour, then a full day on Sentosa Island with a cable car ride, Madame Tussauds, and the Wings of Time night show. A limited-period package, priced for groups of four or more.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes airfare and visa. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "singapore",
    category: "customized",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 23999,
    heroImage: d("singapore"),
    highlights: ["Marina Bay", "Sentosa Island", "Wings of Time"],
    inclusions: [
      "2 nights' accommodation on a double/twin-sharing basis at the above-mentioned hotel",
      "Meal plan - breakfast, except on arrival day",
      "Sightseeing as per the above-mentioned itinerary",
      "All entry tickets as per the itinerary",
      "All tours and transfers on a private basis",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "Singapore tourist visa",
      "TCS",
      "Early check-in or late check-out",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service and special orders",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Singapore - City Tour",
        description:
          "On arrival at Singapore Changi Airport, you're welcomed by our local representative and taken straight into a city tour: Merlion Park, with its iconic statue and views over Marina Bay and Marina Bay Sands, then through the Central Business District and along Orchard Road.\n\nThe tour concludes in Chinatown, rich with traditional shops, temples and markets, before transferring to your hotel to check in and relax.",
        meals: "None",
        stay: "Overnight, Singapore",
      },
      {
        day: 2,
        title: "Sentosa Island - Cable Car, Madame Tussauds & Wings of Time",
        description:
          "After breakfast, a full day on Sentosa Island, reached by a scenic one-way ride on the Singapore Cable Car with aerial views over the harbour and skyline.\n\nThe visit includes Madame Tussauds Singapore's 4-in-1 experience - the wax museum, the Images of Singapore Live history journey, the Marvel 4D Experience, and the Spirit of Singapore boat ride - followed in the evening by Wings of Time, an outdoor show of lasers, water and fireworks set against the open sea.",
        meals: "Breakfast only",
        stay: "Overnight, Singapore",
      },
      {
        day: 3,
        title: "Leisure & Departure",
        description:
          "The morning is free for leisure - relax at the hotel, browse nearby shopping, or fit in some last-minute sightseeing - before transferring to Singapore Changi Airport for your departure flight.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "",
    travelWindow: "March - May 2026",
    travellers: "Minimum 4 adults",
    rooms: 2,
    stays: [
      {
        destination: "Singapore",
        hotel: "Ibis Styles Albert Street or similar",
        nights: 2,
        meals: "Breakfast",
      },
    ],
    stayNote:
      "Hotel category is confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    priceRows: [
      { label: "Per adult (minimum 4 travellers)", amount: 23999 },
      { label: "Minimum booking (4 adults)", amount: 95996 },
    ],
    offerEndsOn: "2026-05-31",
    metaTitle: "Charm of Singapore - 3 Days / 2 Nights",
    metaDescription:
      "Singapore in three days from ₹23,999 per adult - a Marina Bay and Chinatown city tour, then Sentosa by cable car, Madame Tussauds and Wings of Time. Land only.",
  },
  // BALI PROMOTION PACKAGE JULY - SEP 2026.pdf
  {
    slug: "incredible-bali-offer-4d3n",
    title: "Incredible Bali",
    summary:
      "Four days in Bali - open-water sea walking and a sunset dinner cruise, the volcanic views and rice terraces of Kintamani, and time to swing through the jungle canopy. A limited-period summer package, priced for groups of four or more.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes airfare and on-arrival visa/levy charges. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "bali",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 13999,
    heroImage: d("bali"),
    highlights: ["Water Sports", "Kintamani", "Dinner Cruise"],
    inclusions: [
      "Accommodation at the above-mentioned hotel with breakfast (except arrival day)",
      "Meals as mentioned in the itinerary",
      "A/C SUV vehicle throughout",
      "2 bottles of water (600ml) per adult per day on tour days",
      "Flower garland welcome on arrival at Bali airport",
      "Private airport - hotel transfers as per the itinerary",
      "All transfers and sightseeing on a private A/C vehicle",
      "English-speaking driver (Bali mainland; remote islands such as Nusa Penida/Lembongan/Ceningan may have limited English - a translation app is handy)",
      "GST",
      "All entrance fees and local taxes for the mentioned itinerary",
    ],
    exclusions: [
      "Round-trip airfare",
      "On-arrival visa cost - IDR 500,000 (approx. USD 35), paid directly on arrival",
      "International tourism levy - IDR 150,000, paid directly on arrival",
      "TCS",
      "Early check-in or late check-out",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Personal expenses, room service, special orders, and alcoholic/non-alcoholic beverages",
      "Any extra excursion or sightseeing beyond the itinerary",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali - Transfer to Hotel",
        description:
          "On arrival at Bali International Airport, our driver will meet you and transfer you to your hotel or villa for check-in.\n\nA couple of things worth knowing in advance: pick-up waiting time is up to 2 hours from your flight's actual landing; beyond that, waiting charges apply and are settled directly with the driver. Flights landing before 8:00am or after 7:30pm also attract an additional night-transfer charge - check with our sales team ahead of time if this applies to you. On arrival, do confirm your itinerary and next-day pick-up time directly with your driver.",
        meals: "None",
        stay: "Overnight, Bali",
      },
      {
        day: 2,
        title: "Water Sports - Sea Walker & Phinisi Dinner Cruise",
        description:
          "Pick-up is between 10:30-12:00 from your hotel lobby, heading to the water sports hub at Benoa Beach. The highlight is Sea Walker (20-25 minutes) - walking the seabed in a specialised helmet for a close-up look at marine life, no diving experience needed.\n\nFrom there, it's on to Benoa Harbour (45-60 minutes) for a traditional Phinisi dinner cruise: an international buffet under sail, with welcome drinks, pirate-themed souvenirs, live music, Balinese and belly dance, fire performance, and a DJ set as the sun goes down over the water.\n\nGood to know: bring a spare set of clothes for after the water activity. Sea Walker is included for ages 9 and up (under-12s must be accompanied by a parent); it isn't available for children under 9.",
        meals: "Breakfast & Dinner",
        stay: "Overnight, Bali",
      },
      {
        day: 3,
        title: "Kintamani, Rice Terraces & Bali Jungle Swing",
        description:
          "Pick-up is between 8:00-9:00am. The day takes in Kintamani for views over Lake and Mount Batur, a coffee plantation tasting, and the emerald paddy fields of Tegalalang Rice Terrace, before Tegenungan Waterfall.\n\nThe afternoon is given over to the Bali Jungle Swing - unlimited time on 7 styles of swing (including a couples' swing and a swing bed) and 5 photo nests, plus a local lunch with Balinese coffee and tea included.\n\nUnder-5s ride free of charge (lunch only); for ages 5-9, a parent's signed approval is required and a parent must accompany them on the swings.",
        meals: "Breakfast",
        stay: "Overnight, Bali",
      },
      {
        day: 4,
        title: "Departure from Bali",
        description:
          "Check out by 12:00pm or as per hotel policy, then transfer to Bali International Airport for your onward flight. Please confirm your exact pick-up time with the driver the day before departure.\n\nAs with arrival, flights departing before 10:00am or after 10:00pm attract an additional night-transfer charge - check with our sales team if this applies to you.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "",
    travelWindow: "July - September 2026",
    travellers: "Minimum 4 adults",
    rooms: 2,
    stays: [{ destination: "Kuta", hotel: "Hotel Diamond or similar", nights: 3, meals: "Breakfast" }],
    stayNote:
      "Hotel category is confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    priceRows: [
      { label: "Per adult, minimum 4 travellers", amount: 13999 },
      { label: "Minimum booking, 4 adults", amount: 55996 },
    ],
    offerEndsOn: "2026-09-30",
    metaTitle: "Incredible Bali - 4 Days / 3 Nights",
    metaDescription:
      "Bali in four days from ₹13,999 per adult - Sea Walker at Benoa, a Phinisi dinner cruise, Kintamani, Tegalalang rice terraces and the Bali Jungle Swing. Land only.",
  },
  // MALAYSIA PROMOTION PACKAGE JULY-SEP 2026.pdf
  {
    slug: "charm-of-malaysia-offer-3d2n",
    title: "Charm of Malaysia",
    summary:
      "Three days across Kuala Lumpur - Putrajaya's modern skyline and mosques, the golden statue and limestone caves at Batu, a cable-car ride into the hills at Genting, and the city's landmark towers. A limited-period package, priced for groups of four or more.",
    priceNote:
      "Total package cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "malaysia",
    category: "customized",
    type: "customized",
    durationDays: 3,
    durationNights: 2,
    priceFrom: 15999,
    heroImage: x("kualaLumpur"),
    highlights: ["Putrajaya", "Batu Caves", "Genting Highlands"],
    inclusions: [
      "2 nights' accommodation at the above-mentioned hotel",
      "Daily breakfast (except on arrival day)",
      "Meet & greet at the airport",
      "Sightseeing as per the above-mentioned itinerary",
      "All entry tickets as per the itinerary",
      "All tours & transfers on a private basis",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "TCS",
      "Early check-in or late check-out (standard check-in after 1400/1500 hrs, check-out before 1100/1200 hrs)",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival - Putrajaya Tour - Bukit Bintang",
        description:
          "On arrival at Kuala Lumpur International Airport, our representative will meet and greet you before the transfer to Putrajaya, Malaysia's administrative capital - known for its modern architecture, bridges and lakeside views.\n\nThe tour takes in the pink-hued Putra Mosque beside Putrajaya Lake, a photo stop at the Prime Minister's Office (Perdana Putra), and the striking Seri Wawasan Bridge, before continuing to your hotel for check-in and some time to relax.\n\nIn the evening, a short visit to Bukit Bintang - KL's liveliest shopping and entertainment district, home to Pavilion KL, Berjaya Times Square, and the street-food scene along Jalan Alor.",
        meals: "None",
        stay: "Overnight, Kuala Lumpur",
      },
      {
        day: 2,
        title: "Genting Highlands, Batu Caves & Cable Car",
        description:
          "After breakfast, a full-day excursion to Genting Highlands, about an hour from the city. En route, stop at Batu Caves - one of Malaysia's most important Hindu sites, marked by its towering golden statue of Lord Murugan and a colourful stairway up to the limestone caves.\n\nFrom there, the Awana SkyWay cable car carries you up to Genting Highlands with sweeping views over the rainforest, arriving at Resorts World Genting - home to Skytropolis Indoor Theme Park and SkyAvenue Mall. The peaceful Chin Swee Caves Temple, with its own mountain views, is also worth the visit before the return to Kuala Lumpur in the evening.",
        meals: "Breakfast only",
        stay: "Overnight, Kuala Lumpur",
      },
      {
        day: 3,
        title: "Kuala Lumpur City Tour & Departure",
        description:
          "After breakfast, a half-day city tour of Kuala Lumpur's landmarks: a photo stop at the iconic Petronas Twin Towers, panoramic views from KL Tower, and a look at Istana Negara, the King's official residence.\n\nThe tour continues to the National Mosque of Malaysia and the historic Sultan Abdul Samad Building at Independence Square (Dataran Merdeka), where Malaysia's independence was declared - before the transfer to Kuala Lumpur International Airport for your departure flight.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "",
    travelWindow: "March - May 2026",
    travellers: "Minimum 4 adults",
    rooms: 2,
    stays: [{ destination: "Kuala Lumpur", hotel: "Howard Johnson or similar", nights: 2, meals: "Breakfast" }],
    stayNote:
      "Hotel category is confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    priceRows: [
      { label: "Per adult, minimum 4 travellers", amount: 15999 },
      { label: "Minimum booking, 4 adults", amount: 63996 },
    ],
    offerEndsOn: "2026-05-31",
    metaTitle: "Charm of Malaysia - 3 Days / 2 Nights",
    metaDescription:
      "Kuala Lumpur in three days from ₹15,999 per adult - Putrajaya, Batu Caves, the Awana SkyWay to Genting Highlands and the KL city tour. Land only.",
  },
  // VIETNAM PROMOTION PACKAGE JULY - SEP 2026.pdf
  {
    slug: "fascinating-vietnam-offer-4d3n",
    title: "Fascinating Vietnam",
    summary:
      "Four days between Vietnam's capital and its most famous bay - Hanoi's Old Quarter and French colonial landmarks, then an overnight cruise among the limestone karsts of Halong Bay. A limited-period summer package, priced for groups of four or more.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes flights and visa. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "vietnam",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 23999,
    heroImage: d("vietnam"),
    highlights: ["Hanoi City Tour", "Halong Bay Cruise"],
    inclusions: [
      "All transportation with A/C as mentioned",
      "Accommodation in double/twin/triple room with daily breakfast",
      "English-speaking guide at sightseeing time",
      "Meals as mentioned in the itinerary (B for breakfast)",
      "Complimentary mineral water on tour (1 bottle / pax / day)",
      "All sightseeing tickets",
      "Halong Bay boat trip with full meal",
      "GST",
    ],
    exclusions: [
      "International & domestic flight tickets",
      "Vietnam tourist visa",
      "TCS",
      "Personal expenses - laundry, telephone, drinks, and other services not specified in the itinerary",
      "Meals not specified in the itinerary",
      "Vietnam visa approval letter on arrival, USD 5/pax",
      "Compulsory tipping for guides and drivers, USD 5-10/pax/day",
      "Travel insurance (strongly recommended)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Hanoi Arrival - City Tour",
        description:
          "Welcome to Hanoi. From the airport, it's around 35 minutes to the city centre and your hotel check-in.\n\nThe tour opens at the Ho Chi Minh Mausoleum (viewed from outside), with Ho Chi Minh's house on stilts next door and the One Pillar Pagoda - founded in 1049 and still a defining symbol of the city - close by. From there, on to Hoan Kiem Lake and the French Quarter, exploring the Old Quarter by electric car, with a stop for Hanoi's famous egg coffee.\n\nStandard hotel check-in is 2:00pm; early check-in is subject to availability.",
        meals: "None",
        stay: "Overnight, Hanoi",
      },
      {
        day: 2,
        title: "Hanoi - Halong Bay, Cruise",
        description:
          "Morning pick-up at 8:00am for the roughly 3.5-hour drive to Halong Bay, arriving around 11:30am to check in aboard your cruise after a welcome drink. Lunch is served on board as you begin cruising - \"Descending Dragon Bay\" in legend, and a UNESCO World Heritage site whose 2,000-odd limestone islets date back some 500 million years.\n\nEnjoy the bay at sunset, dinner on board, and optional night fishing around 9:00pm, before an overnight stay on the water.\n\nGood to know: the Hanoi-Halong-Hanoi transfer is a shared limousine bus for groups of 1-9; groups of 10 or more travel by private transfer.",
        meals: "Breakfast, Lunch & Dinner",
        stay: "Overnight on cruise",
      },
      {
        day: 3,
        title: "Halong Bay - Hanoi",
        description:
          "An early start to take in the bay at dawn, followed by breakfast and a cruise past Man-Head Islet and Tortoise Island, continuing into Bai Tu Long Bay - known as \"The Little Dragon Bowing to His Mother.\"\n\nCheck out and have lunch on board while heading back to shore, then disembark and transfer to Hanoi for hotel check-in, with the evening free at leisure.",
        meals: "Breakfast & Brunch",
        stay: "Overnight, Hanoi",
      },
      {
        day: 4,
        title: "Departure from Hanoi",
        description:
          "After breakfast, the morning is free to relax or shop for souvenirs before your transfer to the airport for the flight home.",
        meals: "Breakfast",
      },
    ],
    referenceNo: "",
    travelWindow: "July - September 2026",
    travellers: "Minimum 4 adults",
    rooms: 2,
    stays: [
      { destination: "Hanoi", hotel: "TK123 or similar", nights: 2, meals: "Breakfast" },
      { destination: "Halong Bay", hotel: "Le Journey Premium Cruise or similar", nights: 1, meals: "Breakfast" },
    ],
    stayNote:
      "Hotel and cruise categories are confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    priceRows: [
      { label: "Per adult, minimum 4 travellers", amount: 23999 },
      { label: "Minimum booking, 4 adults", amount: 95996 },
    ],
    offerEndsOn: "2026-09-30",
    metaTitle: "Fascinating Vietnam - 4 Days / 3 Nights",
    metaDescription:
      "Hanoi and Halong Bay in four days from ₹23,999 per adult - the Old Quarter by electric car, egg coffee and an overnight Halong Bay cruise. Land only.",
  },
  // THAILAND PROMOTION PACKAGE JULY-SEP 2026 (1).pdf
  {
    slug: "charm-of-pattaya-bangkok-offer-4d3n",
    title: "Charm of Pattaya & Bangkok",
    summary:
      "Four days across Thailand's east coast and capital - Pattaya's floating market and Coral Island, then Bangkok's golden temples and the Grand Palace quarter. A limited-period summer package, priced for groups of four or more.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "thailand",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 15999,
    heroImage: d("thailand"),
    highlights: ["Floating Market", "Coral Island", "Grand Palace"],
    inclusions: [
      "3 nights' accommodation at the above-mentioned hotels",
      "Daily breakfast (except on arrival day)",
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
        title: "Arrival in Pattaya - Floating Market",
        description:
          "On arrival at Suvarnabhumi Airport, you'll be warmly welcomed and transferred to your hotel in Pattaya for check-in and a chance to freshen up.\n\nAfterwards, visit the vibrant Pattaya Floating Market - wooden houses, local handicrafts, boat vendors and street food come together for a colourful, photo-ready introduction to Thai culture, before returning to your hotel.",
        meals: "None",
        stay: "Overnight, Pattaya",
      },
      {
        day: 2,
        title: "Coral Island Tour",
        description:
          "After breakfast, a half-day speedboat excursion (shared/SIC basis) to Coral Island (Koh Larn) - known for its clear water, white sand and optional water sports such as parasailing, jet-skiing, sea walking and banana boat rides (extra cost).\n\nRelax on the beach or swim in the turquoise shallows, with lunch served during the tour, before returning to your Pattaya hotel.",
        meals: "Breakfast, Lunch",
        stay: "Overnight, Pattaya",
      },
      {
        day: 3,
        title: "Transfer to Bangkok",
        description:
          "After breakfast, check out and travel by road to Bangkok - roughly a two-hour journey depending on traffic - then check in at your Bangkok hotel.\n\nThe rest of the day is free for leisure: browse nearby shopping areas, explore local markets, or treat yourself to a traditional Thai massage (additional cost).",
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
    referenceNo: "",
    travelWindow: "July - September 2026",
    travellers: "Minimum 4 adults",
    rooms: 2,
    stays: [
      {
        destination: "Pattaya",
        hotel: "Golden Beach Hotel or similar",
        nights: 2,
        meals: "Breakfast",
      },
      {
        destination: "Bangkok",
        hotel: "Seasons Siam Hotel or similar",
        nights: 1,
        meals: "Breakfast",
      },
    ],
    stayNote:
      "Hotel categories are confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    priceRows: [
      { label: "Per adult, minimum 4 travellers", amount: 15999 },
      { label: "Minimum booking, 4 adults (total)", amount: 63996 },
    ],
    offerEndsOn: "2026-09-30",
    metaTitle: "Charm of Pattaya & Bangkok - 4 Days / 3 Nights",
    metaDescription:
      "Pattaya and Bangkok in four days from ₹15,999 per adult - Pattaya Floating Market, Coral Island by speedboat, and Wat Traimit and Wat Pho. Land only.",
  },
  // PHUKET & KRABI PROMOTION PACKAGE JULY - SEP 2026.pdf
  {
    slug: "charm-of-phuket-krabi-offer-4d3n",
    title: "Charm of Phuket & Krabi",
    summary:
      "Four days across Thailand's Andaman coast - Phuket's Tiger Kingdom, a full day cruising the turquoise waters of Phi Phi, and the limestone cliffs and temples of Krabi. A limited-period summer package, priced for groups of four or more.",
    priceNote:
      "Land cost shown per adult, based on a minimum of 4 travellers sharing 2 rooms; excludes airfare. Quoted rates are not valid on surcharged dates - public holidays, festivals or peak season - when additional charges will apply.",
    destinationSlug: "thailand",
    category: "customized",
    type: "customized",
    durationDays: 4,
    durationNights: 3,
    priceFrom: 19999,
    heroImage: x("phuket"),
    highlights: ["Phi Phi Islands", "Tiger Kingdom", "Krabi City"],
    inclusions: [
      "3 nights' stay in a double-sharing room at the above-mentioned hotels in Phuket & Krabi",
      "Daily breakfast (except on arrival day)",
      "Meet & greet at the airport",
      "Sightseeing as per the above-mentioned itinerary",
      "All entry tickets as per the itinerary",
      "All tours and transfers on a private and SIC (shared) basis",
      "Transfers between Phuket Airport - Phuket Hotel - Krabi Hotel - Krabi Airport by private vehicle",
      "GST",
    ],
    exclusions: [
      "Round-trip airfare",
      "TCS",
      "Early check-in or late check-out (standard check-in after 1400/1500 hrs, check-out before 1100/1200 hrs)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "National Park fee on Phi Phi Island",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Phuket - Tiger Kingdom",
        description:
          "On arrival at Phuket International Airport, you'll be welcomed by our local representative and transferred by private van to explore the island.\n\nEn route, a stop at Tiger Kingdom Phuket - a walk-around visit (no tiger interaction) where you can observe these animals up close and learn about their care and conservation. From there, transfer to your hotel for check-in, with the rest of the day free to relax.",
        meals: "Breakfast only",
        stay: "Overnight, Phuket",
      },
      {
        day: 2,
        title: "Full-Day Phi Phi Islands Tour",
        description:
          "After breakfast, a full-day excursion by big boat (shared/SIC basis) to the Phi Phi Islands - famous for crystal-clear turquoise water, dramatic limestone cliffs and white sand.\n\nThe day takes in Maya Bay, Pileh Lagoon's emerald waters for swimming, and a boat's-eye view of Viking Cave, plus snorkelling among the coral. Lunch is served at a local restaurant on Phi Phi Don Island before the return transfer to your Phuket hotel. (National Park fee is payable locally, not included.)",
        meals: "Breakfast, Lunch",
        stay: "Overnight, Phuket",
      },
      {
        day: 3,
        title: "Transfer to Krabi - Krabi City Tour",
        description:
          "After breakfast, check out and transfer from Phuket to Krabi by private van along the coastal highway.\n\nThe Krabi city tour covers Tiger Cave Temple - its cave shrine reached by a 1,200-step staircase to a panoramic viewpoint - followed by riverside Krabi Town and the limestone-framed Ao Nang Beach, before checking in to your Krabi hotel.",
        meals: "Breakfast only",
        stay: "Overnight, Krabi",
      },
      {
        day: 4,
        title: "Departure from Krabi",
        description:
          "After breakfast, check out and transfer to Krabi Airport for your onward journey - taking home memories of Thailand's tropical islands, turquoise waters and limestone cliffs.",
        meals: "Breakfast only",
      },
    ],
    referenceNo: "",
    travelWindow: "July - September 2026",
    travellers: "Minimum 4 adults",
    rooms: 2,
    stays: [
      {
        destination: "Phuket",
        hotel: "Sunshine Patong or similar",
        nights: 2,
        meals: "Breakfast",
      },
      {
        destination: "Krabi",
        hotel: "Sunda Resort or similar",
        nights: 1,
        meals: "Breakfast",
      },
    ],
    stayNote:
      "Hotel categories are confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered. Rate is not valid on surcharged dates such as holidays, festivals or peak seasons.",
    priceRows: [
      { label: "Per adult, minimum 4 travellers", amount: 19999 },
      { label: "Minimum booking, 4 adults (total)", amount: 79996 },
    ],
    offerEndsOn: "2026-09-30",
    metaTitle: "Charm of Phuket & Krabi - 4 Days / 3 Nights",
    metaDescription:
      "Phuket and Krabi in four days from ₹19,999 per adult - Tiger Kingdom, a full-day Phi Phi Islands cruise, and Krabi's Tiger Cave Temple and Ao Nang. Land only.",
  },
];

/**
 * FIXED DEPARTURES - escorted group tours on a set date, one per PDF in
 * fixeddepartures/. Each carries its dated `departures`, which the seed writes
 * to the Departure collection; that is what lists the trip on
 * /fixed-departures/ and puts the date badge on its card. Further dates for
 * the same tour go in its `departures` array (or in /admin/).
 */
const fixedDepartureEntries = [
  // PATTAYA BANGKOK 5D 4N DEPARTURE .pdf
  {
    slug: "pattaya-bangkok-group-departure-5d4n",
    title: "Pattaya & Bangkok Group Departure",
    summary:
      "An escorted group tour from Kochi with a Malayalee tour manager: three nights in Pattaya and one in Bangkok, with return flights, all meals, Tiger Topia, Coral Island by speedboat, the Alcazar Show, Nong Nooch Village, Safari World & Marine Park and a Bangkok city and shopping tour.",
    priceNote:
      "Per adult, including return flights from Kochi with 20 kg baggage, all meals and GST. TCS extra.",
    destinationSlug: "thailand",
    category: "group-tours",
    type: "fixed-departure",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 59800,
    heroImage: x("pattaya"),
    highlights: [
      "Fresh-up on Arrival Day",
      "Tiger Show",
      "Crocodile Show",
      "Photo with Tiger",
      "Alcazar Show",
      "Coral Island",
      "Nong Nooch Village",
      "Safari World and Marine Park",
      "Floating Market",
      "Golden Buddha",
      "Marble Temple",
      "Bangkok City Tour",
      "Shopping Tour",
    ],
    inclusions: [
      "Round-trip airfare with 20kg luggage",
      "4 nights' accommodation at the above-mentioned hotel",
      "Fresh-up on the arrival day",
      "5 Breakfast, 5 Lunch, 5 Dinner",
      "Meet & greet at the airport",
      "500 ml water bottles daily",
      "Full-time English-speaking guide",
      "Malayalee Tour Manager from Alisha Tours and Travels",
      "Sightseeing and entry tickets as per the above-mentioned itinerary",
      "All tours and transfers on private disposal coach",
      "GST",
    ],
    exclusions: [
      "TCS",
      "Early check-in or late check-out (standard check-in after 1400/1500 hrs, check-out before 1100/1200 hrs)",
      "Other meals not mentioned, laundry, telephone calls and incidentals",
      "Any extra excursion or sightseeing beyond the suggested itinerary",
      "Personal expenses, room service and special orders",
      "Alcoholic and non-alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok",
        description:
          "Upon arrival at Suvarnabhumi International Airport, meet your English-speaking guide and transfer to Princeton Bangkok for a fresh-up and breakfast.\n\nAfter breakfast, proceed to Pattaya by private coach. En route, visit Tiger Topia to enjoy the crocodile show and tiger show, followed by a memorable photo session with the tiger. Continue to the Floating Market and enjoy a traditional rowing boat ride.\n\nAfter sightseeing, proceed to Pattaya and check in to the hotel. Overnight stay in Pattaya.",
        meals: "Breakfast, Lunch & Dinner",
        stay: "Overnight, Pattaya",
      },
      {
        day: 2,
        title: "Coral Island Tour with Speed Boat & Alcazar Show",
        description:
          "After breakfast at the hotel, proceed for the Coral Island Tour by speedboat and enjoy the beautiful island surroundings.\n\nLunch will be provided during the tour. In the evening, return to Pattaya and enjoy the spectacular Alcazar Show. After the show, return to the hotel for an overnight stay in Pattaya.",
        meals: "Breakfast, Lunch & Dinner",
        stay: "Overnight, Pattaya",
      },
      {
        day: 3,
        title: "Nong Nooch Village Sightseeing",
        description:
          "After breakfast, proceed to Nong Nooch Tropical Garden and explore its beautiful gardens and attractions.\n\nEnjoy the entertaining cultural and traditional Nong Nooch Village for sightseeing tour around the garden. Lunch will be provided during the tour. After completing the sightseeing, return to the hotel and spend the evening at leisure. Overnight stay in Pattaya.",
        meals: "Breakfast, Lunch & Dinner",
        stay: "Overnight, Pattaya",
      },
      {
        day: 4,
        title: "Pattaya - Bangkok City Tour",
        description:
          "After breakfast, check out from the Pattaya hotel and transfer to Bangkok by private coach.\n\nUpon arrival in Bangkok, proceed for a city tour covering the Golden Buddha Temple and Marble Temple. Later, enjoy a shopping tour at popular shopping areas in Bangkok. After shopping, check in to the hotel and enjoy an overnight stay in Bangkok.",
        meals: "Breakfast, Lunch & Dinner",
        stay: "Overnight, Bangkok",
      },
      {
        day: 5,
        title: "Safari World & Marine Park - Departure",
        description:
          "After breakfast, check out from the hotel and proceed to Safari World and Marine Park, where you can enjoy the various wildlife attractions and entertaining shows. Lunch will be provided during the tour.\n\nLater, proceed for the final shopping tour and dinner before transferring to Suvarnabhumi International Airport for your departure flight, marking the end of your memorable Thailand holiday.",
        meals: "Breakfast, Lunch & Dinner",
      },
    ],
    referenceNo: "",
    travelWindow: "28 January - 3 February 2027",
    travellers: "Group departure",
    stays: [
      { destination: "Pattaya", hotel: "Golden Beach Hotel or similar (3 star)", nights: 3, meals: "Breakfast, Lunch & Dinner" },
      { destination: "Bangkok", hotel: "Princeton Bangkok Hotel or similar (3 star)", nights: 1, meals: "Breakfast, Lunch & Dinner" },
    ],
    priceRows: [
      { label: "Per adult", amount: 59800 },
      { label: "Per child with bed", amount: 58000 },
      { label: "Per child without bed", amount: 54700 },
    ],
    // The PDF's own table, stricter than the standard 50% / 100% policy.
    cancellationPolicy:
      "Cancellation fee on the nett tour price, per person: 100% within 20 days of departure, 75% between 20 and 30 days, 50% between 30 and 60 days, and no charge 60 days or more before departure.",
    departures: [
      {
        departureDate: "2027-01-28",
        returnDate: "2027-02-03",
        price: 59800,
        boardingCity: "Kochi",
        notes:
          "Flights: IX-476 Kochi 22:15 - Bangkok 03:55 (+1) on 28 Jan 2027; IX-475 Bangkok 04:55 - Kochi 07:40 on 3 Feb 2027.",
      },
    ],
    metaTitle: "Pattaya & Bangkok Group Departure - 5 Days / 4 Nights",
    metaDescription:
      "Escorted Pattaya and Bangkok group tour from Kochi on 28 Jan 2027, from ₹59,800 per adult with flights and all meals - Coral Island, Alcazar Show, Safari World.",
  },
  // Songkran Festival - April package (client's note: hotels and inclusions)
  //
  // PROVISIONAL. The note gives no date, price or day-by-day plan. The client
  // asked for it live regardless, so it runs on 12 April 2027 (Songkran is 13-15
  // April) and `priceFrom: 0` shows "Price on request" everywhere. Replace
  // both, and add priceRows and the itinerary, when the PDF arrives.
  {
    slug: "songkran-festival-thailand-5d4n",
    title: "Songkran Festival - Thailand's Biggest Water Festival",
    summary:
      "Pattaya and Bangkok over Songkran, Thailand's new-year water festival: three nights in Pattaya and one in Bangkok with Tiger Topia, Coral Island by speedboat, the Alcazar Show, Nong Nooch Village, Safari World & Marine Park, a Bangkok city tour and a Chao Phraya dinner cruise.",
    destinationSlug: "thailand",
    category: "group-tours",
    type: "fixed-departure",
    durationDays: 5,
    durationNights: 4,
    priceFrom: 0,
    heroImage: d("thailand"),
    highlights: [
      "Songkran Water Festival",
      "Chao Phraya Dinner Cruise",
      "Coral Island",
      "Alcazar Show",
      "Safari World and Marine Park",
    ],
    inclusions: [
      "04 nights stay with breakfast at the above-mentioned hotel",
      "Fresh-up room with breakfast @ Princeton hotel",
      "Tiger Topia with crocodile show + tiger show + photo session with tiger",
      "Nong Nooch Village with show + sightseeing bus + lunch",
      "Alcazar show",
      "Coral Island tour with lunch via speedboat",
      "Floating market with rowing boat",
      "Safari World and Marine Park with lunch",
      "BKK city tour (Golden Buddha temple and Marble temple)",
      "Shopping tour",
      "Chao Phraya dinner cruise",
      "1 lunch and 3 dinners @ Pattaya Indian restaurant",
      "1 lunch and 1 dinner @ BKK Indian restaurant",
      "500ml water bottles daily",
      "Full time English speaking guide",
      "All tours and transfers on PVT disposal coach",
    ],
    travelWindow: "April 2027",
    travellers: "Group departure",
    stays: [
      { destination: "Pattaya", hotel: "Golden Beach Hotel (Superior room)", nights: 3, meals: "Breakfast" },
      { destination: "Bangkok", hotel: "Princeton Hotel (Superior room)", nights: 1, meals: "Breakfast" },
    ],
    departures: [{ departureDate: "2027-04-12", returnDate: "2027-04-16", price: 0 }],
    metaTitle: "Songkran Festival Thailand - 5 Days / 4 Nights",
    metaDescription:
      "Pattaya and Bangkok over Songkran, Thailand's water festival - Coral Island, Alcazar Show, Safari World and a Chao Phraya dinner cruise.",
  },
];

/**
 * Packages that were in this file and have been taken off the site: the
 * client asked for the inventory to be exactly the proposals in
 * customizedpackage/ and the offers in promotionalpackage/. Re-running the
 * seed deletes these (and their departures) from the database, because an
 * upsert alone would leave them live.
 */
export const RETIRED_PACKAGE_SLUGS = [
  "charm-of-leh-ladakh-6d5n",
  "goa-hampi-6d5n",
  "bhutan-5d4n",
  "charm-of-nepal-7d6n",
  "switzerland-6d5n",
  "switzerland-italy-7d6n",
  "incredible-bali-6d5n",
  "charm-of-singapore-5d4n",
  "charm-of-singapore-4d3n",
  "charm-of-phu-quoc-4d3n",
  "fascinating-vietnam-5d4n",
  "charm-of-malaysia-langkawi-5d4n",
  "fascinating-dubai-5d4n",
  "explore-varkala-2d1n",
  "incredible-sikkim-darjeeling-5d4n",
  "charm-of-rajasthan-6d5n",
  "charm-of-andaman-5d4n",
];

export const packages = [
  ...promotionalEntries.map((pkg) => ({ ...pkg, featured: true })),
  // Explicitly false, so re-seeding also takes the flag OFF any proposal that
  // was featured before (several were, which put customer proposals in the
  // promotional tab).
  ...entries.map((pkg) => ({ ...pkg, featured: false })),
  ...fixedDepartureEntries.map((pkg) => ({ ...pkg, featured: false })),
].map((pkg, i) => ({ ...pkg, order: i + 1 }));

export default packages;
