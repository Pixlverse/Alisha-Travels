/**
 * ===========================================================================
 *  CLIENT-SUPPLIED COPY — REPRODUCED VERBATIM. DO NOT PARAPHRASE OR SHORTEN.
 * ===========================================================================
 *
 * The nine sections below are the client's own About text, exactly as written.
 * It is kept here rather than inline in the page so it reads as one document
 * and can be edited without touching layout code.
 *
 * Two things a future editor should know before "correcting" anything:
 *
 *  1. The hero says "thirteen years" while sections 1 and 8 say "twelve" /
 *     "more than twelve". That is in the source copy. The company was founded
 *     in 2013, so thirteen is the arithmetic — but this is the client's voice
 *     and their decision to make, not ours. Flagged to them; left as written.
 *
 *  2. The source offered an alternative hero line, "Travel far enough, you
 *     meet yourself." The build brief selects the "Somebody has to handle the
 *     details" line, so that is what ships. The alternative is kept below in
 *     case the client wants to switch.
 */

export const ABOUT_HERO = {
  headline: "Somebody has to handle the details.",
  headlineAccent: "For thirteen years, that's been us.",
  /** Unused alternative from the client's copy, kept for easy switching. */
  alternativeHeadline: "Travel far enough, you meet yourself.",
  subline: "Since 2013 · IATA Accredited · 4.8★ from 532 travellers",
};

export const ABOUT_SECTIONS = {
  opening: {
    number: 1,
    eyebrow: "Opening",
    heading: "Every journey starts long before the airport.",
    lede: "It starts with a thought.",
    questions:
      "Where should we go? Can we do it within our budget? Will the children manage the flight? What documents do we need? And what happens if something changes when we're already out there?",
    body: [
      "For some, it is a honeymoon they've been saving two years for. For others, a family finally taking a holiday together. A first international trip. A business delegation of a hundred people. A parent's flight home. A reunion with someone living thousands of kilometres away.",
      "The destinations differ. The reasons differ. But every journey reaches the same point eventually, when the excitement has to become a plan, and somebody has to take responsibility for the details.",
    ],
    close: "For more than twelve years, that has been our job.",
  },

  story: {
    number: 2,
    eyebrow: "Our Story",
    heading: "One man, one desk, and a refusal to leave people guessing.",
    body: [
      "Ramzi Mohammed Ali founded Alisha Tours & Travels in 2013 with a conviction that sounds obvious until a travel agent has let you down: a traveller should never have to chase anyone. Not for an update. Not for a document. Not for the truth about a price.",
      "He had watched too many people hand over their savings and their passports and then be left to wonder. Wonder whether anything was actually moving. Wonder why the fare had quietly changed. Wonder who would answer the phone if a connection collapsed at 2 a.m. in a terminal far from home.",
      "Alisha was built as the answer to that wondering.",
      "One desk became a team. One office became a name that gets passed around family WhatsApp groups from the Gulf to North America, and a first point of contact for travellers arriving in Kerala from the other direction. What has not changed is the original arrangement: when you hand us your trip, you hand us the worry along with it. Keeping it is our job, not yours.",
    ],
  },

  visionMission: {
    number: 3,
    eyebrow: "Vision & Mission",
    /**
     * OURS, NOT THE CLIENT'S. Their section 3 is just the two statements with
     * no heading of its own, but every other section here has an <h2> and a
     * section without one is an accessibility gap. Deliberately plain so it
     * does not read as their voice — safe to replace if they supply a line.
     */
    heading: "What we are for.",
    mission:
      "To carry the weight of every journey so our travellers don't have to. We plan honestly, price transparently, answer when called, and stay with each traveller from the first question to the last boarding pass.",
    vision:
      "To be the travel company people recommend without hesitation, the name a family abroad gives to a friend, the agency a company returns to for its next conference, and the reason a first-time flyer books a second trip before the first one is over.",
  },

  team: {
    number: 4,
    eyebrow: "The Team",
    heading: "Read our reviews and you'll notice something.",
    lede: 'People don\'t thank "the agency." They thank Junaid. They thank Ben. They thank SriSankar. They thank Aditya.',
    /** Rendered as highlighted chips; the sentence above is the copy itself. */
    names: ["Junaid", "Ben", "SriSankar", "Aditya"],
    body: [
      "Across 532 Google reviews, our travellers keep naming the individual who looked after them. The one who rebuilt an itinerary around a toddler's nap times, who found seats at impossible notice, who answered the phone from Srinagar, who checked in mid-trip just to confirm the hotel was right.",
      "That is not an accident. It is the whole design.",
      "You are not a booking reference passed between departments here. You get a person, and you keep that person from the first enquiry to the message you send us from the departure gate. They learn your budget, your parents' knee trouble, your daughter's exam dates, your director's approval deadline. When something needs solving at an awkward hour, you already have their number, wherever in the world you happen to be standing.",
    ],
  },

  iata: {
    number: 5,
    eyebrow: "IATA Accreditation",
    heading: "A credential matters for what it means at 2 a.m.",
    body: [
      "We are an IATA-accredited travel agency. That is the global standard for the industry, and earning it takes financial scrutiny, professional certification and a track record airlines are willing to stake their name on.",
      "Here is what it means on the day it actually matters.",
      "Your ticket is issued by us, directly. When a schedule shifts or a plan changes at the last minute, you are not thirtieth in a queue on a booking portal's helpline, explaining yourself to a stranger who has never heard of you. You reach someone who already has your file open and the authority to fix it.",
    ],
    close: "That is the difference. Not the certificate. The phone call.",
  },

  whatWeDo: {
    number: 6,
    eyebrow: "What We Do",
    heading: "No two journeys are really the same.",
    body: [
      "A honeymoon shouldn't feel like a family holiday. A senior traveller needs a different pace from a group of friends. A corporate trip has different priorities from a weekend escape. Someone flying for the first time needs far more guidance than someone who has crossed the world twenty times.",
      "So we listen first, then build around your destination, budget, timing and the people travelling with you.",
    ],
    /**
     * Each summary is the client's copy verbatim. `href` points at the real
     * page for that service — the brief requires every one to link through.
     * "Fixed Departure Tours" goes to the departures calendar, not a service
     * page, matching the navigation specification.
     */
    services: [
      {
        title: "Customized tour packages",
        href: "/services/customized-tour-packages/",
        icon: "Compass",
        body: "Holidays designed around your pace, your budget and your travelling companions. Honeymoons, family trips, milestone birthdays, long-overdue reunions. Nothing off the shelf, and nothing padded to hit a price.",
      },
      {
        title: "Fixed departure tours",
        href: "/fixed-departures/",
        icon: "Ticket",
        body: "Curated group departures on set dates at set prices, with itineraries already tested. Couples, senior travellers and women's groups travel with us often, and first-time flyers tell us it is the easiest way to start.",
      },
      {
        title: "MICE & corporate travel",
        href: "/services/mice-corporate-travel/",
        icon: "Briefcase",
        body: "Conferences, incentive trips, dealer meets and offsites. We have delivered single events for groups of over a hundred, with one coordinator from the first quote to the last boarding pass.",
      },
      {
        title: "Air ticket booking",
        href: "/services/air-ticket-booking/",
        icon: "Plane",
        body: "IATA direct-issue ticketing on domestic and international routes. Straight pricing, fast reissues, and real help when a schedule moves.",
      },
      {
        title: "Hotel booking",
        href: "/services/hotel-booking/",
        icon: "BedDouble",
        body: "Rooms we would put our own families in, matched to your budget through a worldwide network of partners rather than to whatever pays the best commission.",
      },
      {
        title: "Certificate attestation",
        href: "/services/certificate-attestation/",
        icon: "FileCheck",
        body: "Education, employment and personal documents authenticated for use abroad. We know the sequence of notaries, ministries and embassies by heart, because we have walked it thousands of times.",
      },
    ],
    close:
      "Travel insurance, adventure tours and educational tours are handled in-house too, so a single trip never needs a second agency.",
    ctaLabel: "Explore all services",
    ctaHref: "/services/",
  },

  reach: {
    number: 7,
    eyebrow: "Reach",
    heading: "Kerala is home. The world is the map.",
    lede: "We are based in Kerala. Our travellers are not.",
    body: [
      "They book from the Gulf, from Europe, from North America, and from Australia- families abroad arranging holidays for themselves, or flights and care for parents back home. They book from other Indian cities. And they arrive in Kerala from the opposite direction, wanting to see the place we live in properly.",
    ],
    /**
     * The client's copy lists these destinations in prose. We render the same
     * names as links to their real pages — the sentence is preserved, the
     * names simply become navigable.
     */
    destinationsIntro: "Where they go is just as varied:",
    internationalNames: [
      "Dubai",
      "Singapore",
      "Thailand",
      "the Maldives",
      "Malaysia",
      "Bali",
      "Vietnam",
      "Azerbaijan",
      "Europe",
      "Bhutan",
      "Nepal",
    ],
    domesticIntro: "Closer to home:",
    domesticNames: [
      "Kerala",
      "Kashmir and Srinagar",
      "Ladakh",
      "Andaman",
      "Goa",
      "Rajasthan",
      "Darjeeling",
      "Hyderabad",
    ],
    bodyAfter: [
      "We don't sell a destination we haven't sent people to and heard back from. When we say a particular Thekkady property is worth the extra hour on the road, or that Nigeen Lake suits a family with a small child better than Dal, or that Gulmarg deserves a full day rather than a stop, that comes from travellers who went ahead of you and told us the truth on their return.",
      "Distance changes nothing about the service. Someone who has never sat across a desk from us gets the same named person, the same follow-up, and the same phone answered at an odd hour as the client who walks into the office on a Tuesday morning.",
    ],
    ctaLabel: "Browse destinations",
    ctaHref: "/destinations/",
  },

  proof: {
    number: 8,
    eyebrow: "Proof",
    heading: "4.8★ from 532 reviews.",
    body: [
      "A rating is only a number until you know what sits behind it. Every one of those reviews is someone who trusted us with a flight, a honeymoon, a family holiday, a corporate movement or a document that their job abroad depended on.",
      "Twelve years. Thousands of departures. Corporate groups of a hundred and more. A 4.8 on Google and 4.9 on JustDial, earned one traveller at a time.",
    ],
    close:
      "Trust is not something a company can write about itself. It has to be given by people who had nothing to gain by saying so.",
    ctaLabel: "Read the reviews",
    ctaHref: "/reviews/",
  },

  closing: {
    number: 9,
    eyebrow: "Closing",
    heading: "We measure success differently.",
    body: [
      "Bookings matter. Growth matters. But the moment we actually work for is smaller than either.",
      "It's the message that lands at midnight from an airport somewhere, photo attached, three words: we made it. It's the call that says everything went smoothly. It's the stranger who arrives saying a friend told them to come to us.",
    ],
    close: "Tell us where you want to go. We'll work out the rest.",
    ctaLabel: "Plan My Trip",
  },
};
