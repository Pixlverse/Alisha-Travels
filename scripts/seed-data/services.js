/**
 * Services.
 *
 * There are FOURTEEN service documents here, one per real URL. Two notes on that
 * number, because it has moved twice:
 *
 *   - "Fixed Departure Tours" is not one of them. The nav specification listed
 *     it as a service, but it points at /fixed-departures/ rather than a page
 *     of its own, so no dead /services/fixed-departure-tours/ page exists.
 *   - Three of the ten (customised, educational and adventure tours) are
 *     presented under PACKAGES rather than Services and are filtered out of
 *     the Services listings — see SERVICES_PRESENTED_AS_PACKAGES in
 *     lib/site.js. Their pages are unchanged and still live at /services/.
 *
 * `order` follows the client's own priority: air tickets, the global tourist
 * visa and MICE & corporate travel first, in that order, then everything else
 * behind them. The three trip types presented under Packages sort last.
 *
 * The legacy site's tenth service, "Worldwide Tourist Visa", was dropped by the
 * client's SEO revision ("Travel Guide and Visa & Attestation removed") and is
 * deliberately not seeded. Visa work is still described inside the individual
 * destination pages and the customised-tours service.
 *
 * `icon` is a lucide-react icon name, resolved by components/site/ServiceIcon.js.
 */

export const services = [
  {
    slug: "air-ticket-booking",
    title: "Air ticket booking",
    icon: "Plane",
    order: 1,
    shortDescription:
      "IATA direct-issue ticketing on domestic and international routes, with real help when a schedule moves.",
    heroLead:
      "We are an IATA-accredited flight booking agency in Kerala. Your ticket is issued directly by us, not resold through a portal, so when a schedule moves, you reach someone who already has your file open.",
    ctaLabel: "Get a fare",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      { title: "Issued directly", text: "Your ticket sits with us, not a reseller" },
      { title: "Reissues in-house", text: "Date changes handled by your own planner" },
      { title: "Quoted fare is the fare", text: "No number that shifts at payment" },
      {
        title: "Answered when it matters",
        text: "Schedules move at inconvenient hours. The phone is picked up",
      },
    ],
    blocks: [
      {
        kind: "cards",
        title: "What people come to us for",
        intro:
          "Not a list of routes. These are the situations travellers arrive with. Tell us yours even if it isn't here.",
        linkLabel: "Start an enquiry",
        linkHref: "/contact/",
        items: [
          {
            tag: "Gulf",
            title: "Joining tickets",
            text: "Visa in hand, date fixed, needs issuing today.",
          },
          {
            tag: "Family",
            title: "Parents flying alone",
            text: "Wheelchair, meals and seating confirmed with the airline, not just noted on the booking.",
          },
          {
            tag: "Urgent",
            title: "Last-minute travel",
            text: "Bereavement, medical, a visa that came through late.",
          },
          {
            tag: "Changes",
            title: "Reissues and date changes",
            text: "Handled by the person who booked it, not a helpline.",
          },
          {
            tag: "Groups",
            title: "Ten or more travelling together",
            text: "One coordinator, one fare, one payment.",
          },
          {
            tag: "Abroad",
            title: "Booking from another country",
            text: "You don't need to be in India, or awake at the same time as us.",
          },
        ],
        footnote:
          "Every airline and every route on sale in India. If you can fly it, we can ticket it, tell us where and when.",
      },
      {
        kind: "steps",
        title: "What actually happens after you message us",
        intro:
          "There is no search box and no login. You tell a person where you're going, and they do the rest.",
        items: [
          {
            title: "You send the route",
            text: "Where, roughly when, how many. WhatsApp, a call, or the form. Exact dates can come later.",
          },
          {
            title: "We come back with fares",
            text: "Options across airlines, with the rules stated: what's changeable, what's refundable, what the baggage is.",
          },
          {
            title: "You pick one",
            text: "UPI, card, EMI or bank transfer. The fare you were quoted is the fare you pay.",
          },
          {
            title: "We issue it ourselves",
            text: "Not resold through a portal. The ticket sits with us, and reaches you on email and WhatsApp.",
          },
          {
            title: "And after that",
            text: "Date changes, reissues and refunds, handled by the same person who booked it.",
          },
        ],
      },
      {
        kind: "prose",
        title: "Why direct issue matters",
        body:
          "When a portal sells you a ticket, they hold the reservation and you hold a reference number. If a flight is rescheduled, you join a helpline queue and explain yourself to someone seeing your trip for the first time.\n\nOur tickets sit with us. A reissue, a date change, a missed connection at an odd hour — you call the person who booked it, and they can act on the file without asking anyone's permission.",
      },
    ],
    closingTitle: "Tell us your dates. We'll come back with a fare.",
    closingText: "One planner from your first message to your boarding pass.",
    closingPrimaryLabel: "Get a fare",
    closingPrimaryType: "enquiry",
    closingSecondaryLabel: "WhatsApp us",
    closingSecondaryType: "whatsapp",
    metaTitle: "Air Ticket Booking",
    metaDescription:
      "IATA-accredited air ticket booking for domestic and international routes from Kerala, with group fares, fast reissues and real support when schedules change.",
  },
  {
    slug: "hotel-booking",
    title: "Hotel booking",
    icon: "BedDouble",
    order: 7,
    shortDescription:
      "Hotels, resorts and homestays booked directly with the property, in India and overseas.",
    heroLead:
      "We book hotels, resorts and homestays across India and overseas. A night in Kochi or two weeks in the Maldives. The reservation is made with the property itself, not bought through a portal, so there is a name at the hotel who knows your booking and a person here who knows your trip.",
    ctaLabel: "Get options",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      { title: "Booked with the property", text: "Your reservation sits with the hotel, not a reseller" },
      {
        title: "Requests agreed, not noted",
        text: "Connecting rooms and early check-in confirmed before you pay",
      },
      {
        title: "The quoted rate is the rate",
        text: "Taxes and meal plan named upfront, not added at the desk",
      },
      {
        title: "Answered when it matters",
        text: "A problem at reception at 11pm. The phone is picked up",
      },
    ],
    blocks: [
      {
        kind: "cards",
        title: "What people come to us for",
        intro:
          "Not a list of hotels, these are the situations travellers arrive with. Tell us yours even if it isn't here.",
        linkLabel: "Start an enquiry",
        linkHref: "/contact/",
        items: [
          {
            tag: "Visa",
            title: "A booking the consulate will accept",
            text: "Confirmed reservation for your visa file, dated to match the application.",
          },
          {
            tag: "Family",
            title: "Rooms that fit everyone",
            text: "Connecting rooms, an extra bed, a cot. Agreed with the hotel, not typed into a notes box.",
          },
          {
            tag: "Honeymoon",
            title: "The first trip together",
            text: "Which resort, which room category, and what the photos aren't showing you.",
          },
          {
            tag: "Elders",
            title: "Travelling with parents",
            text: "Ground floor, lift access, a short walk from where you're actually going.",
          },
          {
            tag: "Groups",
            title: "Ten rooms or more",
            text: "One rate, one coordinator, one check-in.",
          },
          {
            tag: "Work",
            title: "Business and repeat stays",
            text: "Near the venue, invoiced properly, booked the same day if needed.",
          },
          {
            tag: "Last minute",
            title: "Arriving tonight",
            text: "A room found and confirmed while you're still on the road.",
          },
          {
            tag: "Abroad",
            title: "Booking from the Gulf",
            text: "For parents visiting, or a trip home. You don't need to be in India to arrange it.",
          },
        ],
        footnote:
          "Every property we can reach, domestic or international. Budget room to overwater villa — tell us the destination and the dates.",
      },
      {
        kind: "steps",
        title: "What actually happens after you message us",
        intro:
          "No filters and no fifty open tabs. You tell a person where you're going and what matters to you, and they do the rest.",
        items: [
          {
            title: "You tell us where and when",
            text: "Destination, dates, how many of you, roughly what you want to spend. WhatsApp, a call, or the form.",
          },
          {
            title: "We come back with options",
            text: "Three or four properties, with the area, the room category, and what the rate actually includes.",
          },
          {
            title: "You pick one",
            text: "We check the details with the hotel before anything is paid: room type, meal plan, cancellation date.",
          },
          {
            title: "We book it with the property",
            text: "Confirmation from the hotel itself, reaching you on email and WhatsApp.",
          },
          {
            title: "And after that",
            text: "Date changes, extensions, or a problem at check-in, handled by the person who booked it.",
          },
        ],
      },
      {
        kind: "prose",
        title: "Why booking with the property matters",
        body:
          "A portal sells you a voucher. The hotel receives a prepaid line item and a guest name, and little else. If the room isn't what the photos showed, or the property says it is overbooked, the front desk sends you to a helpline and the helpline sends you back to the front desk.\n\nWe book with the property directly. Your requests are agreed with someone at the hotel before you pay, rather than left in a notes field nobody reads. And if something is wrong at check-in, you call the person who made the booking and they call the hotel — while you are still standing there.",
      },
    ],
    closingTitle: "Tell us where and when. We'll come back with options.",
    closingText: "One planner from your first message to your check-out.",
    closingPrimaryLabel: "Get options",
    closingPrimaryType: "enquiry",
    closingSecondaryLabel: "WhatsApp us",
    closingSecondaryType: "whatsapp",
    metaTitle: "Hotel Booking in Kerala | Domestic & International | Alisha Tours & Travels",
    metaDescription:
      "Hotels, resorts and homestays booked directly with the property, in India and overseas. Family, group, corporate and visa bookings. Call +91 95629 21818.",
  },
  {
    slug: "travel-insurance",
    title: "Travel insurance",
    icon: "ShieldCheck",
    order: 8,
    shortDescription:
      "Cover that actually pays out — medical, baggage, cancellation and visa-mandated policies.",
    heroHeading: "Travel Insurance Services for Domestic & International Trips",
    heroLead:
      "We provide travel insurance services for trips within India and abroad: holidays, family visits, study, business travel and group tours. Every recommendation is built around two questions: does the cover fit the trip you are actually taking, and do you know what it will not pay for before you buy it?",
    ctaLabel: "Get plan options",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      {
        title: "Matched to the trip",
        text: "Destination, dates and travellers set the cover, not a default plan.",
      },
      {
        title: "Exclusions stated plainly",
        text: "What the policy won't pay for, explained before you buy.",
      },
      {
        title: "Checked against your visa",
        text: "Cover in the form the embassy asks for, where one is required.",
      },
      {
        title: "Claim steps in hand",
        text: "The insurer's helpline and document list, before you fly.",
      },
    ],
    blocks: [
      {
        kind: "prose",
        title: "What is travel insurance?",
        body:
          "Travel insurance is a short-term policy that pays for specific losses during a trip: emergency medical treatment, cancelled bookings, lost baggage or delays up to the limits in the policy. It covers only your travel dates, and only the events the policy wording lists.",
      },
      {
        kind: "prose",
        title: "Why travel insurance matters",
        body:
          "A hospital bill in Kerala and a hospital bill in New York are not the same bill. Many Indian health policies offer limited or no cover abroad, and most travel bookings are paid in advance with only partial refunds if plans change. Travel insurance exists for the gap between those facts and a trip that does not go to plan.\n\nIt is not a guarantee that every expense will be paid. Every policy has limits and exclusions, and every claim is decided by the insurer against the policy wording. We tell you this before you buy, not after.",
      },
      {
        kind: "cards",
        title: "What travel insurance can cover",
        intro: "Cover varies by insurer and plan. These are the benefits most plans are built around.",
        items: [
          {
            title: "Medical emergencies",
            text: "Treatment and hospitalisation for illness or injury during the trip, with evacuation on some plans.",
          },
          {
            title: "Cancellation & interruption",
            text: "Non-refundable costs if you cancel or cut the trip short for a reason the policy lists.",
          },
          {
            title: "Delays & missed connections",
            text: "A payout or expenses when a flight is delayed beyond a set number of hours.",
          },
          {
            title: "Baggage & passport",
            text: "Loss or delay of checked baggage, and help replacing a lost passport abroad.",
          },
        ],
      },
      {
        kind: "cards",
        title: "Travel insurance for international trips",
        intro:
          "For trips abroad, medical cover is the part of international travel insurance that matters most. In the US, Canada, the UK and much of Europe, a short hospital stay can cost more than the trip itself.",
        items: [
          {
            title: "Holidays & families",
            text: "Individual policies or a family floater, depending on ages and the plan.",
          },
          {
            title: "Senior citizens",
            text: "Premiums rise with age and some plans cap the entry age, so options are worth comparing closely.",
          },
          {
            title: "Students abroad",
            text: "Longer policies with study interruption cover. Some universities set their own minimum.",
          },
          {
            title: "Frequent travellers",
            text: "Annual multi-trip plans can be simpler than a new policy for every journey.",
          },
        ],
        footnote:
          "On visas and timing: Schengen visas require travel medical insurance meeting a minimum cover amount, and some other countries set their own rules. International policies usually have to be bought before you leave India.",
      },
      {
        kind: "list",
        title: "Choosing the right travel insurance",
        intro: "The right plan depends on the trip, not the premium.",
        columns: [
          {
            title: "What we ask you",
            points: [
              "Destination and travel dates",
              "The age of each traveller",
              "Any existing medical conditions",
              "What has been prepaid, and what is refundable",
              "Planned activities such as trekking or diving",
            ],
          },
          {
            title: "What we check in the policy",
            points: [
              "Sum insured against costs at the destination",
              "Deductibles and sub-limits",
              "Exclusions",
              "Cashless hospitals at the destination",
              "Documents needed for a claim",
            ],
          },
        ],
        footnote:
          "For trips within India, accident, cancellation and baggage cover is often enough. For international travel, medical cover comes first.",
      },
      {
        kind: "cards",
        title: "Assistance with travel insurance",
        items: [
          {
            title: "Before you travel",
            text: "We set out suitable plan options, explain what each covers and excludes, and arrange the policy including a certificate for your visa file where needed.",
          },
          {
            title: "If you need to claim",
            text: "In an emergency abroad, call the insurer's 24-hour helpline printed on your policy. For anything else, call us, and we will tell you which documents the insurer will ask for. Claim decisions are made by the insurer, not by us.",
          },
        ],
      },
      {
        kind: "cards",
        title: "Why choose Alisha for travel insurance services in Kerala?",
        items: [
          {
            title: "IATA accredited since 2013",
            text: "Where we issue your tickets, policy dates are matched to them.",
          },
          {
            title: "One point of contact",
            text: "The person who arranged your policy is the person you call.",
          },
          {
            title: "Domestic and international",
            text: "Including students abroad, senior citizens and group tours.",
          },
        ],
      },
    ],
    closingTitle: "Plan your trip with greater confidence",
    closingText:
      "Send us your destination, travel dates, the age of each traveller and any medical conditions. We will come back with plan options and a plain explanation of what each covers and what it does not.",
    closingPrimaryLabel: "Call +91 95629 21818",
    closingPrimaryType: "phone",
    closingSecondaryLabel: "Email us",
    closingSecondaryType: "email",
    disclaimer:
      "Insurance is the subject matter of solicitation. Travel insurance policies are issued by [insurer name(s)]. Benefits, limits and exclusions are subject to the terms and conditions of the policy issued. Please read the policy wording carefully before purchase.",
    metaTitle: "Travel Insurance Services for Domestic & International Trips",
    metaDescription:
      "Travel insurance for trips in India and abroad — medical, cancellation, baggage and Schengen-compliant cover, with the exclusions explained before you buy.",
  },
  {
    slug: "customized-tour-packages",
    title: "Customized tour packages",
    icon: "Compass",
    order: 12,
    shortDescription:
      "Holidays built around your pace, your budget and the people travelling with you. Nothing off the shelf.",
    heroHeading: "Customised Tour Packages for Personalised Travel",
    heroLead:
      "We build tour packages around the people travelling on your dates, your budget, your pace and the things you actually want to see. Domestic or international, two of you or forty.\n\nTell us the budget, and we will tell you what it buys, rather than sending an itinerary you then have to cut.",
    ctaLabel: "Start planning",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      { title: "Planned to your budget", text: "We say what it buys before we plan the trip." },
      {
        title: "Inclusions in writing",
        text: "Exclusions and any TCS stated before you pay.",
      },
      { title: "Your dates, your pace", text: "Built to your leave, not to a departure calendar." },
      { title: "One planner", text: "First message to your return." },
    ],
    blocks: [
      {
        kind: "prose",
        title: "What is a customized tour package?",
        body:
          "A customized tour package is a holiday built to your requirements rather than sold from a fixed brochure. You choose the destination, duration, dates, standard of accommodation and the activities, and the operator assembles flights, hotels, transfers and sightseeing around that. Unlike a fixed departure, it runs on your dates with only your party travelling.",
      },
      {
        kind: "prose",
        title: "Travel plans built around you",
        body:
          "Fixed packages exist because they are easy to sell in volume, not because they suit anybody in particular. They assume everyone wakes at the same hour, walks at the same speed and wants the same four sights.\n\nA trip built around you starts from different questions. How many days can you actually take? Is anyone travelling who needs a slower morning? Is this the trip where you want the better hotel, or the trip where you would rather spend the money on the flights?",
      },
      {
        kind: "list",
        title: "Choose your destination, duration & experiences",
        intro: "The parts you decide. Tell us as much or as little as you have settled on.",
        points: [
          "Destination — one place or several, or tell us the region and let us suggest.",
          "Duration and dates — built to your leave, not to a departure calendar.",
          "Pace — how many sights a day, and how many days with nothing scheduled.",
          "Accommodation — budget, mid-range or premium, and which nights are worth spending more on.",
          "Activities and sightseeing — included, optional, or left open.",
          "Transport — private vehicle, shared transfers, rail or internal flights.",
          "Budget — fixed at the start, with inclusions and exclusions written down.",
        ],
      },
      {
        kind: "cards",
        title: "Domestic & international customized tours",
        items: [
          {
            title: "Kerala",
            text: "Backwaters, hill stations, wildlife and heritage, in any combination and duration. The place we know best.",
          },
          {
            title: "Across India",
            text: "Golden Triangle, Rajasthan, Kashmir, Ladakh, Himachal, Goa, the North East, and pilgrimage circuits.",
          },
          {
            title: "International",
            text: "Dubai and the UAE, Singapore, Malaysia, Thailand, Vietnam, Bali, Maldives, Sri Lanka, Azerbaijan and Europe.",
          },
        ],
        footnote:
          "On overseas packages: visas, forex and travel insurance are handled alongside the booking, and any TCS applicable on the payment is set out upfront rather than at the end.",
      },
      {
        kind: "cards",
        title: "Family & couple holidays",
        items: [
          {
            title: "Families",
            text: "The logistics decide whether a family holiday works, not the destination. Room configurations that fit everyone, a pace that suits both a grandparent and a six-year-old, and meals that happen when children need them rather than when the itinerary says.",
          },
          {
            title: "Couples and honeymoons",
            text: "Quiet properties over busy ones, unhurried mornings, and a schedule light enough to change. If it is a honeymoon, tell us — the hotel will treat the booking differently.",
          },
        ],
      },
      {
        kind: "cards",
        title: "Group & private tours",
        items: [
          {
            title: "Private tours",
            text: "Only your party travels. Your own vehicle, your own guide, and an itinerary that can change on the morning. Costs more per head, and for most families is the difference between a good trip and a managed one.",
          },
          {
            title: "Shared transfers and seat-in-coach",
            text: "A coach with other travellers, on a fixed route and timing. Cheaper, and perfectly fine for some destinations. We tell you which of the two a quote is based on, because that difference is often the whole reason two quotes look different.",
          },
          {
            title: "Larger groups",
            text: "Friends, extended family, neighbourhood and community groups. One coordinator, one plan, one payment.",
          },
        ],
      },
      {
        kind: "steps",
        title: "How our customized tour planning works",
        intro:
          "No search box and no fixed departure calendar. You tell a person what you have in mind, and a draft comes back.",
        items: [
          {
            title: "Tell us the shape of the trip",
            text: "Destination or just a rough idea, dates, how many of you, and a budget. WhatsApp, a call or the form.",
          },
          {
            title: "We send a draft itinerary",
            text: "Day by day, with the hotels named, the inclusions listed and the exclusions stated plainly.",
          },
          {
            title: "You change it",
            text: "Move a day, swap a hotel, cut a sight, add a rest day. The draft is a starting point, not a proposal to accept or decline.",
          },
          {
            title: "We book and confirm",
            text: "Tickets, vouchers and a written itinerary, and one number to call for the length of the trip.",
          },
        ],
      },
      {
        kind: "cards",
        title: "Why choose Alisha?",
        items: [
          {
            title: "We plan to your budget",
            text: "And say plainly what it will and will not cover, before the planning starts.",
          },
          {
            title: "Inclusions in writing",
            text: "Exclusions and any TCS on overseas packages stated before you pay, not at the end.",
          },
          {
            title: "One planner throughout",
            text: "The person who drafted the itinerary is the person you call from the road.",
          },
          /*
            The "IATA accredited since 2013" card is deliberately NOT here, at
            the client's instruction: accreditation is what lets us issue a
            ticket, and it has no bearing on how well a tour is planned. It
            stays on the services where it decides something — air tickets and
            corporate travel.
          */
          {
            title: "Itineraries since 2013",
            text: "Honest advice on which destinations suit which kind of trip, and which do not.",
          },
          {
            title: "Based in Kottayam",
            text: "For travellers in central Kerala, a planning meeting can happen in person.",
          },
        ],
      },
    ],
    closingTitle: "Start planning",
    closingText:
      "Tell us where you are thinking of going, roughly when, and how many of you. A draft itinerary follows.",
    closingPrimaryLabel: "Call +91 95629 21818",
    closingPrimaryType: "phone",
    closingSecondaryLabel: "WhatsApp us",
    closingSecondaryType: "whatsapp",
    metaTitle: "Customised Tour Packages for Personalised Travel",
    metaDescription:
      "Custom-built holiday packages on your dates, your budget and your pace — domestic and international, with inclusions, exclusions and any TCS stated upfront.",
  },
  {
    /*
      ADDED at the client's instruction, and the only service on this site whose
      copy is NOT theirs. They removed "Worldwide Tourist Visa" during the SEO
      revision and have now asked for it back, without supplying text.
      Everything below is deliberately short, factual and free of claims about
      turnaround, success rates or approval — nothing an embassy decides can be
      promised on a travel agency's website. REPLACE IT with their own copy
      before launch; the page renders the standard layout until then.
    */
    slug: "global-tourist-visa",
    title: "Global tourist visa",
    icon: "Stamp",
    order: 2,
    shortDescription:
      "Tourist visa documentation and appointments, prepared and checked before anything is submitted.",
    longDescription:
      "A tourist visa is refused far more often for paperwork than for anything about the traveller: a bank statement that does not cover the stay, an itinerary that does not match the dates, a hotel booking that was never confirmed, a photograph in the wrong dimensions. We assemble the file in the form the consulate asks for and check it before it goes in.\n\nWhere a destination requires proof of travel and accommodation, those come from the same office that books them, dated to match the application. Where cover is mandatory — Schengen applications set a minimum sum insured — the policy is issued to meet it.\n\nThe decision belongs to the embassy or consulate, and nobody outside it can promise an outcome. What we can tell you is what your file needs, what the appointment will involve, and where the delay is if the wait gets long.",
    points: [
      "Document checklist prepared for the specific destination",
      "Application forms completed and reviewed before submission",
      "Appointment booking and, where required, biometrics scheduling",
      "Confirmed flight and hotel bookings, dated to match the application",
      "Travel insurance meeting the destination's minimum cover",
    ],
    ctaLabel: "Ask about a visa",
    ctaType: "enquiry",
    metaTitle: "Global Tourist Visa Assistance",
    metaDescription:
      "Tourist visa documentation, appointments and supporting bookings prepared by an IATA-accredited agency in Kerala, checked before submission.",
  },
  /*
    TRAIN & BUS TICKETS, CAB RENTAL, CRUISE HOLIDAYS AND PASSPORT SERVICES.

    These four shipped with DRAFTED copy — ours, written in the client's voice
    while we waited for theirs. Every word below is now the client's own,
    supplied page by page, and the drafts are gone. Immigration services is
    the one that is still ours; its note says so.
  */
  {
    slug: "train-bus-tickets",
    title: "Train & bus ticket booking services",
    icon: "TrainFront",
    order: 4,
    shortDescription:
      "Rail and road legs booked as part of the trip, so the arrival and the onward connection agree.",
    heroLead:
      "Not every journey needs a flight. We book the rail and road legs as part of the trip you are already planning — so the arrival time, the hotel check-in and the onward connection agree with one another, instead of being three bookings made at three different times by three different people.",
    ctaLabel: "Get the options",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      {
        title: "Booked around your connection",
        text: "The train that meets your flight, not the one that leaves first",
      },
      {
        title: "Waitlists watched to the chart",
        text: "You are told either way, in time to change the plan",
      },
      {
        title: "Group travel on one reference",
        text: "Twenty travellers, one coordinator, one payment",
      },
      {
        title: "Answered when plans move",
        text: "A cancelled service at 6am. The phone is picked up.",
      },
    ],
    blocks: [
      {
        kind: "cards",
        title: "What people come to us for",
        intro:
          "Not a list of routes — these are the situations travellers arrive with. Tell us yours even if it isn't here.",
        linkLabel: "Start an enquiry",
        linkHref: "/contact/",
        items: [
          {
            tag: "Connections",
            title: "Connecting transportation that connects",
            text: "Landing at Kochi at 11pm and needing to be in Bengaluru by morning. The connection is checked against the flight before anything is booked.",
          },
          {
            tag: "Pilgrimage",
            title: "Sabarimala, Velankanni, Tirupati",
            text: "Season travel where seats disappear months ahead, and where the return date matters as much as the outbound one.",
          },
          {
            tag: "Groups",
            title: "Group travel arrangements",
            text: "Group transportation for twenty: seats in the same coach where the quota allows, one booking reference and one payment instead of twenty confirmations.",
          },
          {
            tag: "Tour legs",
            title: "Domestic travel arrangements inside a package",
            text: "The intercity legs of a tour, timed with the hotels and the cab so nobody is left standing at a bus stand with luggage.",
          },
          {
            tag: "Waitlist",
            title: "Confirmed, or told early",
            text: "A waitlisted ticket is watched to the chart. If it is not going to clear, you hear it while there is still time to do something about it.",
          },
          {
            tag: "Elders",
            title: "Lower berth, short platform walk",
            text: "Requested where the quota allows, boarding point chosen for the shorter walk, and said plainly when it cannot be promised.",
          },
        ],
        footnote:
          "Train ticket booking services across Kerala — Indian Railways, KSRTC and the private operators. Intercity travel, pilgrimage season travel and domestic travel arrangements for families and groups. Tell us the route and the date.",
      },
      {
        kind: "steps",
        title: "What actually happens after you message us",
        intro:
          "No app, no login, no thirty open tabs. You tell a person where you are going and they work out how you get there.",
        items: [
          {
            title: "You tell us the route",
            text: "Where from, where to, when, and how many of you. WhatsApp, a call or the form. Exact times can come later.",
          },
          {
            title: "We check what actually runs",
            text: "Trains and buses on that route, with the arrival time set next to your onward plan — not simply the cheapest departure.",
          },
          {
            title: "You pick one",
            text: "Class, berth preference, operator. What is refundable and what is not, stated before you pay anything.",
          },
          {
            title: "We book it",
            text: "The ticket reaches you on email and WhatsApp, with the PNR and the boarding point, not just a confirmation screen.",
          },
          {
            title: "And after that",
            text: "Waitlists watched, cancellations processed, and an alternative found if the service is withdrawn.",
          },
        ],
      },
      {
        kind: "prose",
        title: "Why a booking agency beats a booking app",
        body:
          "An app will sell you a seat on any service with availability. It does not know that your flight lands at 11pm, that the last connecting bus left at nine, or that the return you booked falls on the morning of a visa appointment that has since moved.\n\nWe book the leg after looking at the rest of the trip. If the timing does not work, you are told before the money is spent — and if the railways cancel the service a week later, the person who booked it is the person who finds you another one.",
      },
      {
        kind: "list",
        title: "Travel planning alongside hotel and tour bookings",
        intro: "Booked through the same desk, so nothing has to be organised twice.",
        tags: [
          "Hotel booking",
          "Customised tour packages",
          "Cab rental",
          "Air tickets",
          "Travel insurance",
          "Tourist visa assistance",
        ],
      },
    ],
    closingTitle: "Tell us the route and the date. We'll come back with what runs.",
    closingText: "One planner from your first message to your arrival.",
    closingPrimaryLabel: "Get the options",
    closingPrimaryType: "enquiry",
    closingSecondaryLabel: "WhatsApp us",
    closingSecondaryType: "whatsapp",
    metaTitle: "Train & Bus Ticket Booking Services in Kerala",
    metaDescription:
      "Train and bus ticket booking across Kerala — Indian Railways, KSRTC and private operators, booked around your flight, your hotel and the rest of the trip.",
  },
  {
    slug: "cab-rental",
    title: "Cab rental & car rental services",
    icon: "Car",
    order: 5,
    shortDescription:
      "Airport transfers, sightseeing days and outstation runs, fixed alongside the rest of the itinerary.",
    heroLead:
      "Cab rental in Kerala, arranged around the trip rather than sold by the kilometre. A cab is the part nobody thinks about until they are standing outside an airport at two in the morning with four suitcases — so we fix the airport transfers, the sightseeing days and the outstation runs alongside your itinerary, with the driver's number in your hand before you land.",
    ctaLabel: "Get a quote",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      {
        title: "The driver's number, in advance",
        text: "Not a booking ID and a support chat window",
      },
      {
        title: "The quoted fare is the fare",
        text: "Toll, parking and driver allowance named upfront",
      },
      {
        title: "Vehicle matched to the luggage",
        text: "Four people with six bags is not a sedan",
      },
      { title: "Answered at odd hours", text: "Flights land at 3am. So do the calls we take." },
    ],
    blocks: [
      {
        kind: "cards",
        title: "What people come to us for",
        intro:
          "Not a list of vehicles — these are the situations travellers arrive with. Tell us yours even if it isn't here.",
        linkLabel: "Start an enquiry",
        linkHref: "/contact/",
        items: [
          {
            tag: "Airport",
            title: "Airport transfers at 2am",
            text: "Airport cab booking for Kochi, Trivandrum and Calicut. A driver waiting with your name and a number you already have, and a pickup that moves when the flight does.",
          },
          {
            tag: "Sightseeing",
            title: "Sightseeing transportation",
            text: "Cab rental for sightseeing through Munnar, Thekkady and Alleppey — one vehicle and one driver for the days you are out, not a fresh negotiation at every stop.",
          },
          {
            tag: "Outstation",
            title: "Outstation cab services",
            text: "Outstation travel from Kerala to Bengaluru or Coimbatore, one-way or round trip, with the return leg and the driver's rest inside the quote rather than added to it.",
          },
          {
            tag: "Transfers",
            title: "Point-to-point transfers",
            text: "Station to hotel, hotel to port, one town to the next. Local cab rentals for the single legs that otherwise get sorted out on the pavement.",
          },
          {
            tag: "Groups",
            title: "Group transportation",
            text: "Twelve and their luggage: a tempo traveller or a set of cars, costed both ways so you can see which actually suits the route.",
          },
          {
            tag: "Elders",
            title: "A driver who will wait",
            text: "Slow boarding, a stop when it is needed and a route with fewer hours in one stretch. Told to the driver in advance, not on the day.",
          },
        ],
        footnote:
          "Car rental in Kerala, airport and local transfers, and outstation travel across South India. Sedan to tempo traveller, for a single transfer or for a fortnight. Call it a cab, a taxi or a car rental — the arrangement is the same. Tell us the route and how many of you.",
      },
      {
        kind: "steps",
        title: "What actually happens after you message us",
        intro:
          "You tell a person where you need to be and when. They work out the vehicle, the route and what it costs.",
        items: [
          {
            title: "Tell us the journey",
            text: "Pickup point, dates, how many travelling and how much luggage. WhatsApp, a call or the form.",
          },
          {
            title: "We come back with the vehicle and the fare",
            text: "With what is included stated before you pay: toll, parking, permit, driver allowance, night charge.",
          },
          {
            title: "You confirm",
            text: "Advance or on arrival, whichever suits. Cancellation terms named.",
          },
          {
            title: "Driver details reach you",
            text: "Name, number and vehicle, before the day of travel rather than on the morning of it.",
          },
          {
            title: "And after that",
            text: "A delayed flight, a changed plan, an extra stop. One number, and it is answered.",
          },
        ],
      },
      {
        kind: "prose",
        title: "Why the fare is the part to check",
        body:
          "The number an aggregator shows you is rarely the number you pay. Toll, parking, permit for crossing a state line, driver allowance and the night charge are added at the destination, when arguing about them is the last thing you want to do.\n\nWe state the inclusions before you book. If a route needs an interstate permit or a second driver, that is in the quote you agree to — not a conversation at the end of a long day.",
      },
      {
        kind: "list",
        title: "Arrange it with the rest of the trip",
        intro: "Booked through the same desk, so nothing has to be organised twice.",
        tags: [
          "Hotel booking",
          "Customised tour packages",
          "Air tickets",
          "Train & bus tickets",
          "Cruise holidays",
          "Travel insurance",
        ],
      },
    ],
    closingTitle: "Tell us where you're travelling. We'll arrange the vehicle.",
    closingText: "One planner from your first message to your last drop-off.",
    closingPrimaryLabel: "Get a quote",
    closingPrimaryType: "enquiry",
    closingSecondaryLabel: "WhatsApp us",
    closingSecondaryType: "whatsapp",
    metaTitle: "Cab Rental & Car Rental Services in Kerala",
    metaDescription:
      "Cab rental in Kerala — airport transfers at Kochi, Trivandrum and Calicut, sightseeing days and outstation runs, with toll, parking and driver allowance named in the quote.",
  },
  {
    slug: "cruise-holidays",
    title: "Cruise holidays & cruise packages",
    icon: "Ship",
    order: 6,
    shortDescription:
      "The cabin, and everything around it — the flight the day before, the port hotel, the visas each port needs.",
    heroLead:
      "Cruise packages from Kerala, planned around the sailing date rather than sold off a brochure. A cruise is the one holiday where being late is not recoverable — the ship sails. So we book the cabin and everything around it: the flight that lands the day before, the hotel in the port city, the visas the itinerary quietly needs, and the transfer that puts you at the terminal with hours to spare rather than minutes.",
    ctaLabel: "Get sailing options",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      {
        title: "Flights that land the day before",
        text: "Never on the morning of the sailing",
      },
      {
        title: "Visas checked for every port",
        text: "One itinerary can touch three visa regimes",
      },
      { title: "Cabin category explained", text: "What the deck plan is not showing you" },
      { title: "One planner for the whole trip", text: "Cruise, flights, hotel and transfer" },
    ],
    blocks: [
      {
        kind: "cards",
        title: "What people come to us for",
        intro:
          "Not a list of ships — these are the trips travellers arrive wanting. Tell us yours even if it isn't here.",
        linkLabel: "Start an enquiry",
        linkHref: "/contact/",
        items: [
          {
            tag: "Honeymoon",
            title: "Customised cruise holidays",
            text: "Which sailing, which deck, and which dates are not full of school holidays. What the balcony is worth, and when it is not.",
          },
          {
            tag: "Family",
            title: "Three generations on one ship",
            text: "Connecting cabins, dining times that suit everyone, and what there is to do for a five-year-old and a seventy-year-old on the same afternoon.",
          },
          {
            tag: "First cruise",
            title: "Cruise package selection",
            text: "What the fare covers and what it quietly does not — drinks, shore excursions, gratuities, wifi — before you are on board finding out.",
          },
          {
            tag: "Gulf",
            title: "International cruise packages",
            text: "Sailing from Dubai: flights from Kochi, the UAE visa and a night in the city before boarding, arranged as one trip rather than four bookings.",
          },
          {
            tag: "Around the sailing",
            title: "Pre- and post-cruise travel planning",
            text: "The night before at the port city and the days after it, so the cruise is the middle of the holiday rather than all of it.",
          },
          {
            tag: "Visas",
            title: "Ports that need their own visa",
            text: "A Mediterranean itinerary can call at three countries with three sets of rules. Checked before you book, not after the deposit is paid.",
          },
        ],
        footnote:
          "Cruise holidays from Kerala: domestic sailings from Mumbai and Chennai, Gulf departures from Dubai and Abu Dhabi, and Mediterranean, Northern European, Alaskan, Caribbean and Southeast Asian itineraries. Tell us roughly when and who is travelling, and we will come back with sailings that fit.",
      },
      {
        kind: "steps",
        title: "How cruise holiday planning works",
        intro:
          "You tell a person what kind of holiday you want it to be. They find the sailing and build the trip around it.",
        items: [
          {
            title: "Tell us about the trip",
            text: "Who is travelling, roughly when, and what you want the holiday to feel like. Exact dates can come later.",
          },
          {
            title: "We come back with sailings",
            text: "Two or three, with the cabin categories, what the fare includes and what it does not.",
          },
          {
            title: "You pick one",
            text: "Deposit, balance date and cancellation terms stated before anything is paid.",
          },
          {
            title: "We build the trip around it",
            text: "Flights landing a day early, the port hotel, the visas each port calls for, and the transfer to the terminal.",
          },
          {
            title: "And after that",
            text: "Document deadlines, changes, and one number that is answered while you are travelling.",
          },
        ],
      },
      {
        kind: "prose",
        title: "Why the day before matters",
        body:
          "Almost every cruise that goes wrong goes wrong at embarkation. A connecting flight that was delayed, a visa for a port nobody checked, a transfer booked to the wrong terminal. The ship does not wait, and a missed sailing is rarely covered when the flight was booked separately from the cruise.\n\nSo we build in the night before. It costs a hotel room and it removes the one risk that can end a holiday before it starts — and because the flights, the visas and the cruise are booked by the same person, there is nobody to point at when something has to move.",
      },
      {
        kind: "list",
        title: "Arrange it with the rest of the trip",
        intro: "Booked through the same desk, so nothing has to be organised twice.",
        tags: [
          "Air tickets",
          "Hotel booking",
          "Tourist visa assistance",
          "Cab rental",
          "Travel insurance",
          "Customised tour packages",
        ],
      },
    ],
    closingTitle: "Tell us when you want to sail. We'll come back with options.",
    closingText: "One planner from your first message to the gangway.",
    closingPrimaryLabel: "Get sailing options",
    closingPrimaryType: "enquiry",
    closingSecondaryLabel: "WhatsApp us",
    closingSecondaryType: "whatsapp",
    metaTitle: "Cruise Holidays & Cruise Packages from Kerala",
    metaDescription:
      "Cruise packages from Kerala — domestic, Gulf and international sailings, with the flight the day before, the port hotel, the visas each port needs and the transfer to the terminal.",
  },
  {
    slug: "passport-services",
    title: "Passport services & assistance",
    icon: "BookUser",
    order: 9,
    shortDescription:
      "Applications prepared and checked against your documents before an appointment is booked.",
    heroLead:
      "Passport application assistance in Kottayam, for applicants across Kerala. Applications are held up far more often by a mismatched address or a missing annexure than by anything serious — so we fill the form with your documents in front of us, tell you what is missing before an appointment is booked, and are clear about where our part ends: the Passport Office issues the passport, not us.",
    ctaLabel: "Get your document list",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      { title: "Documents checked first", text: "Before the appointment, not at the counter" },
      {
        title: "Address proof that matches",
        text: "The commonest reason a file comes back",
      },
      {
        title: "Appointment slot watched",
        text: "Taken when it opens at a Kendra you can reach",
      },
      { title: "Plain about the limits", text: "Verification and issue belong to the PSK" },
    ],
    blocks: [
      {
        kind: "prose",
        title: "What we do, and what we are not",
        body:
          "We are not agents of the Passport Seva Kendra and we have no influence over police verification or the issuing decision. Anybody who tells you otherwise is selling something that does not exist.\n\nWhat we do is prepare the application so it does not come back for a correction: the right scheme, the right annexure, documents that agree with one another, and an appointment on a date you can actually attend. The government fee is paid in your name on the Passport Seva portal. Our fee is separate, and stated before you start.",
      },
      {
        kind: "cards",
        title: "What people come to us for",
        intro:
          "Not a list of forms — these are the situations applicants arrive with. Tell us yours even if it isn't here.",
        linkLabel: "Start an enquiry",
        linkHref: "/contact/",
        items: [
          {
            tag: "Fresh",
            title: "New passport application assistance",
            text: "Birth proof, address proof and the annexure that fits your situation, sorted out before anything is submitted.",
          },
          {
            tag: "Renewal",
            title: "Passport renewal assistance",
            text: "Most countries want validity running well past your return date. Renewing early stops it becoming a visa problem later.",
          },
          {
            tag: "Reissue",
            title: "Reissue-related guidance",
            text: "Lost or damaged: the police report, the affidavit and the form that goes with them, in the order the Kendra expects to see them.",
          },
          {
            tag: "Minors",
            title: "A passport for a child",
            text: "Consent from both parents, the right annexure, and what to do when one parent is working abroad and cannot attend.",
          },
          {
            tag: "Changes",
            title: "Name or address changed",
            text: "After a marriage or a move. Documentation guidance on what the Kendra will actually accept as proof, and what it will send back.",
          },
          {
            tag: "Urgent",
            title: "Travelling in ten days",
            text: "Whether Tatkal applies to your case at all, and whether it will genuinely be faster — sometimes it is not.",
          },
        ],
        footnote:
          "Passport services in Kerala: fresh applications, renewals, reissues and changes of particulars. Applicants across Kottayam, Ernakulam, Idukki, Alappuzha and Pathanamthitta, and families applying from the Gulf on behalf of someone here.",
      },
      {
        kind: "steps",
        title: "Support with passport-related procedures",
        intro:
          "Most of the work happens before an appointment is booked, which is the part that decides whether you make one visit or three.",
        items: [
          {
            title: "Tell us what you need",
            text: "New, renewal, reissue, or a change of details. And when you need to travel, if you do.",
          },
          {
            title: "We list your documents",
            text: "For your scheme and your situation, not a generic checklist copied off a website.",
          },
          {
            title: "You gather them, we check them",
            text: "Line by line against your existing papers, while a correction still costs nothing.",
          },
          {
            title: "Form filled, appointment booked",
            text: "Filled against the documents in front of us, and a slot taken at a Seva Kendra you can actually get to.",
          },
          {
            title: "You attend, we stay reachable",
            text: "The Kendra visit is yours to attend in person. Questions before and after come back to us.",
          },
        ],
      },
      {
        kind: "prose",
        title: "Why the form is the part that goes wrong",
        body:
          "The online form is unforgiving. A name spelled one way on a school certificate and another on an electricity bill, an address the proof does not support, the wrong annexure for your marital status — each one means a second visit, or a file sitting on hold while you work out what happened.\n\nNone of that is difficult to avoid. It just has to be checked by somebody who has seen it go wrong before, with your documents on the desk, before the appointment is booked rather than after you have taken a day off to attend one.",
      },
      {
        kind: "list",
        title: "Planning to travel abroad?",
        intro: "Booked through the same desk, so nothing has to be organised twice.",
        tags: [
          "Tourist visa assistance",
          "Immigration documentation",
          "Certificate attestation",
          "Air tickets",
          "Hotel booking",
          "Travel insurance",
        ],
      },
    ],
    closingTitle: "Tell us what you're applying for. We'll send the document list.",
    closingText: "One person on your file, from the first call to the passport in your hand.",
    closingPrimaryLabel: "Get your document list",
    closingPrimaryType: "enquiry",
    closingSecondaryLabel: "WhatsApp us",
    closingSecondaryType: "whatsapp",
    metaTitle: "Passport Services & Application Assistance in Kottayam",
    metaDescription:
      "Passport application assistance in Kottayam — fresh applications, renewals, reissues and changes of particulars, with documents checked and the Seva Kendra appointment booked.",
  },
  {
    slug: "immigration-services",
    title: "Immigration services",
    icon: "PlaneTakeoff",
    order: 10,
    shortDescription:
      "Documentation support for study, work and family applications, prepared and checked.",
    heroLead:
      "Moving abroad to study, work or join family runs on paperwork, and the paperwork is where applications fail. We prepare and check the documents an application needs, and we are straight with you about which parts of the process are ours to influence and which are not.",
    ctaLabel: "Ask about an application",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      { title: "Documents prepared properly", text: "Attested, translated and ordered as the mission asks" },
      { title: "Appointments and biometrics", text: "Booked, with what to carry set out beforehand" },
      { title: "Nothing promised for you", text: "The decision is the authority's, and we say so" },
      { title: "One named person", text: "Who keeps the file and answers about it" },
    ],
    blocks: [
      {
        kind: "list",
        title: "What we help with",
        points: [
          "Document checklists for study, work, visit and family applications",
          "Certificate attestation, apostille and translation, handled in-house",
          "Application forms completed and reviewed before anything is submitted",
          "Appointment and biometrics booking, with the document list confirmed",
          "Flight and accommodation bookings dated to match the application",
          "Travel and medical insurance that meets the destination's minimum cover",
        ],
      },
      {
        kind: "prose",
        title: "Where the line is",
        body:
          "Immigration decisions belong to the government of the country you are applying to. No agency can guarantee a visa, a permit or a timeline, and anybody quoting you a success rate is describing their own marketing rather than your case.\n\nWe also do not offer legal advice or represent anyone before an immigration authority. Where a case needs a licensed immigration lawyer or a registered consultant, we will say so rather than take the file. What we do is the documentation and the bookings around it, which is the part that is genuinely ours to get right.",
      },
    ],
    closingTitle: "Tell us where you are going and why.",
    closingText:
      "We will tell you what the file needs, what we can prepare, and where you will need somebody else.",
    closingPrimaryLabel: "Ask about an application",
    closingPrimaryType: "enquiry",
    closingSecondaryLabel: "Call the office",
    closingSecondaryType: "phone",
    metaTitle: "Immigration Documentation Services in Kerala",
    metaDescription:
      "Documentation support for study, work and family applications from Kerala — checklists, attestation, forms, appointments and the bookings an application needs.",
  },
  {
    slug: "mice-corporate-travel",
    title: "MICE & corporate travel",
    icon: "Briefcase",
    order: 3,
    shortDescription:
      "Corporate travel management, MICE events and business travel for organisations that move people regularly.",
    heroHeading: "MICE & Corporate Travel Services",
    heroLead:
      "We manage travel for organisations that move people regularly: staff, clients, delegates and event attendees. We operate as an outsourced travel desk: a single point of contact, consolidated invoicing, and a team that works within your approval process and cost ceilings rather than around them.\n\nAn IATA-accredited agency since 2013, working with companies across Kerala on routine business travel and one-off events.",
    ctaLabel: "Request a proposal",
    ctaType: "enquiry",
    secondaryCtaLabel: "Call the corporate desk",
    secondaryCtaType: "phone",
    assurances: [
      { title: "One account manager", text: "Not a shared inbox or a ticketing queue" },
      {
        title: "Invoicing finance accepts",
        text: "GST-compliant, consolidated, split by cost centre",
      },
      { title: "Policy applied at booking", text: "Fewer exceptions to approve after the fact" },
      { title: "Reachable when it matters", text: "Flights move at night. Someone answers" },
    ],
    blocks: [
      {
        kind: "prose",
        title: "What is MICE?",
        body:
          "MICE stands for Meetings, Incentives, Conferences and Exhibitions. It is the segment of business travel built around company events rather than individual trips. It covers anything from a two-day sales meeting to an overseas incentive trip for top performers, and usually involves group air travel, blocked accommodation, venue hire and on-ground coordination across several days.",
      },
      {
        kind: "cards",
        title: "Meetings, Incentives, Conferences & Events",
        intro: "Each of the four carries a different operational load, and we scope them separately.",
        items: [
          {
            title: "Meetings",
            text: "Offsites, board meetings, regional sales meetings and training programmes. Venue, accommodation, transport and meals arranged as one booking.",
          },
          {
            title: "Incentives",
            text: "Performance and channel-partner trips, domestic and international. Itineraries designed to be worth winning, with the budget fixed in advance.",
          },
          {
            title: "Conferences",
            text: "Delegate travel from multiple origin cities, blocked accommodation, registration handling and speaker logistics.",
          },
          {
            title: "Exhibitions",
            text: "Travel for booth staff and visiting teams to trade fairs in India and abroad, including visa documentation and equipment-related requirements.",
          },
        ],
      },
      {
        kind: "list",
        title: "Corporate Travel Management",
        intro:
          "For organisations with recurring travel, we function as your travel desk. Requests reach one named manager who already knows your grade-wise entitlements, preferred carriers and approval chain.",
        points: [
          "A named account manager and a documented escalation contact",
          "Travel policy applied at the point of booking, not audited afterwards",
          "Consolidated monthly invoicing with GST, split by department or cost centre",
          "Spend reporting for finance and internal review",
          "Credit terms available subject to agreement",
          "An out-of-hours contact for travellers in transit",
        ],
      },
      {
        kind: "list",
        title: "Business Travel Arrangements",
        intro:
          "The per-trip execution behind the account. Our tickets are issued directly rather than resold through a portal, so a schedule change or reissue is handled by the person who made the booking.",
        points: [
          "Domestic and international air tickets, issued in-house",
          "Hotel bookings near the venue, office or client site",
          "Business visa documentation and appointment scheduling",
          "Travel insurance and forex",
          "Airport transfers and intercity ground transport",
          "A written itinerary the traveller can carry",
        ],
      },
      {
        kind: "list",
        title: "Corporate Group Travel",
        intro:
          "For ten or more travelling together, the work shifts from booking to coordination. We hold group fares while headcount is confirmed, block rooms at a negotiated rate, and manage the rooming list and arrival sequence so a group is not held up at a reception desk.",
        tagsLabel: "Common cases",
        tags: [
          "Team offsites",
          "Plant and site visits",
          "Client delegations",
          "Training cohorts",
          "Channel-partner groups",
        ],
      },
      {
        kind: "list",
        title: "Employee & Client Travel",
        intro: "Travel that supports the business but sits outside the usual trip pattern.",
        points: [
          "New joiners relocating, including family travel and initial accommodation",
          "Candidate and interview travel",
          "Client hosting, site visits and inbound delegations",
          "Auditor, consultant and vendor visits",
          "Employees deputed on long assignments",
        ],
      },
      {
        kind: "list",
        title: "Event and Accommodation Coordination",
        intro: "On-ground delivery for events, whether or not we arranged the travel.",
        points: [
          "Venue sourcing and rate negotiation",
          "Room blocks with hold dates, so headcount can firm up without losing the rate",
          "Banquet, F&B and conference hall arrangements",
          "Coordinated transfers between hotel and venue",
          "Delegate manifest and registration support",
          "A coordinator on site for the duration of the event",
        ],
      },
      {
        kind: "cards",
        title: "Why businesses choose Alisha",
        items: [
          {
            title: "IATA accredited since 2013",
            text: "Tickets are issued directly by us, not resold through a portal.",
          },
          {
            title: "One point of contact",
            text: "A named manager who knows the account, not a shared inbox.",
          },
          {
            title: "Invoicing finance accepts",
            text: "GST-compliant and consolidated, split by cost centre where needed.",
          },
          {
            title: "Policy applied at booking",
            text: "Entitlements checked before issue, so there is less to approve later.",
          },
          {
            title: "Reachable outside office hours",
            text: "Schedules move at inconvenient times. The phone is picked up.",
          },
          {
            title: "Events and travel from one supplier",
            text: "No handover between an event agency and a travel agent.",
          },
          {
            title: "350-passenger groups managed",
            text: "The largest single movement we have run, start to finish, on one plan and one point of contact.",
          },
        ],
      },
    ],
    closingTitle: "Send us the brief. We'll come back with a costed proposal.",
    closingText: "Headcount, dates, destination and budget is enough to start.",
    closingPrimaryLabel: "Call the corporate desk",
    closingPrimaryType: "phone",
    closingSecondaryLabel: "Email the brief",
    closingSecondaryType: "email",
    metaTitle: "Corporate Travel & MICE Services in Kerala | Alisha Tours & Travels",
    metaDescription:
      "Corporate travel management, MICE events and business travel for companies in Kerala and across India. Consolidated GST invoicing, one account manager. Call +91 95629 21818.",
  },
  {
    slug: "educational-tours",
    title: "Educational tours",
    icon: "GraduationCap",
    order: 13,
    shortDescription:
      "School and college trips built around a curriculum, with the supervision ratios and paperwork schools actually need.",
    heroHeading: "Educational Tours for Schools, Colleges & Student Groups",
    heroLead:
      "We plan educational tours for schools, colleges and student groups: day trips, study tours, industrial visits and international programmes. Every tour is built around the two things the teacher organising it is answerable for: that the academic purpose is served, and that every student comes home safely.\n\nBased in Ettumanoor, Kottayam. Working with institutions across Kerala since 2013.",
    ctaLabel: "Request a quote",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      {
        title: "Safety stated in writing",
        text: "Supervision, transport and accommodation set out in the proposal.",
      },
      { title: "One coordinator", text: "From the first meeting to the group's return." },
      { title: "Per-student costing", text: "A clear figure you can circulate to parents." },
      { title: "Reachable on tour", text: "A number that is answered, not an office line." },
    ],
    blocks: [
      {
        kind: "prose",
        title: "What is an educational tour?",
        body:
          "An educational tour is a supervised trip in which the destination itself is the teaching material: a factory floor, a science centre, a historic site, or an ecosystem. Unlike a holiday, it is planned around a curriculum objective, runs to a fixed supervision ratio, and requires documented parental consent and institutional approval.",
      },
      {
        kind: "prose",
        title: "Learning beyond the classroom",
        body:
          "A production line explained in a lecture, and a production line seen running are not the same lesson. Our work is the part around the learning: moving a large group, keeping it together, returning it intact. So accompanying staff can teach rather than count heads.",
      },
      {
        kind: "list",
        title: "Educational tour planning",
        intro:
          "Planning starts with the academic purpose, not the destination. Tell us the subject, the year group and what the trip is meant to achieve.",
        points: [
          "Sites matched to the subject and year group",
          "Pacing and travel times built for the age group",
          "Scheduled around examinations and the academic calendar",
          "Per-student cost fixed upfront, inclusions stated plainly",
          "A draft itinerary for staff approval before anything is booked",
        ],
      },
      {
        kind: "cards",
        title: "Domestic & international educational tours",
        items: [
          {
            title: "Kerala",
            text: "Backwaters and ecosystems at Alleppey and Kumarakom, plantations at Munnar and Thekkady, wildlife at Wayanad and Periyar, heritage at Kochi. Workable within a school week.",
          },
          {
            title: "Across India",
            text: "Bangalore and Mysore for science and technology, Hyderabad for Ramoji, Delhi–Agra–Jaipur for history, Mumbai and Pune for industry.",
          },
          {
            title: "Industrial visits",
            text: "Factory, plant, and campus visits for engineering, management, and polytechnic groups, arranged according to the department's requirements.",
          },
          {
            title: "International",
            text: "Singapore and Malaysia are the most requested school programmes. Dubai, Thailand, Sri Lanka and Nepal are also regularly arranged.",
          },
        ],
        footnote:
          "On international tours: student passports, group visas and parental consent documentation are handled by us, and we flag the deadlines early. This is what most often delays a school tour.",
      },
      {
        kind: "list",
        title: "Group travel for students",
        intro:
          "Twenty students to two hundred and more. Past a certain size, this stops being booking and becomes crowd management.",
        points: [
          "Sub-groups, each with a named member of staff",
          "Headcounts recorded at every boarding and entry point",
          "Student ID cards with the coordinator's number and accommodation details",
          "Separate arrangements for boys and girls, staff accommodated alongside",
          "A documented procedure for a student separated from the group",
          "The nearest hospital identified at each overnight stop before departure",
        ],
      },
      {
        kind: "list",
        title: "Planning & coordination",
        intro: "The administrative work between an approved plan and a departing bus.",
        points: [
          "Parental consent and medical declaration formats, ready to circulate",
          "An itinerary pack for parents, with contact numbers",
          "Permission and intimation letters for institutional requirements",
          "A pre-departure briefing for accompanying staff",
          "One coordinator reachable throughout the tour, not an office line",
        ],
      },
      {
        kind: "cards",
        title: "Accommodation & transport",
        items: [
          {
            title: "Accommodation",
            text: "Multi-sharing or dormitory rooms by group size, boys and girls on separate floors, staff rooms adjacent. We use properties that have taken student groups before.",
          },
          {
            title: "Meals",
            text: "Meals run to the itinerary rather than the hotel's timings, vegetarian as standard, allergies and dietary restrictions collected in advance.",
          },
          {
            title: "Transportation",
            text: "Buses with valid permits and current fitness certification, driven by drivers experienced with student groups. Extended night driving is avoided on long-distance legs.",
          },
          {
            title: "On board",
            text: "A first-aid kit travels with every vehicle. Rail and air group bookings are arranged where the distance calls for it.",
          },
        ],
      },
      {
        kind: "cards",
        title: "Why choose Alisha for educational tours?",
        items: [
          {
            title: "IATA accredited since 2013",
            text: "Air ticketing for international tours is issued directly by us.",
          },
          {
            title: "One coordinator throughout",
            text: "The person who planned the tour is the person you call from the road.",
          },
          {
            title: "Per-student costing",
            text: "A clear figure with inclusions listed, suitable for circulating to parents.",
          },
          {
            title: "Safety arrangements in writing",
            text: "Set out in the proposal before you commit, not described verbally.",
          },
          {
            title: "Domestic and international",
            text: "Including passports, group visas and consent documentation.",
          },
          {
            title: "Based in Kottayam",
            text: "For institutions in central Kerala, a planning meeting can happen in person.",
          },
        ],
      },
    ],
    closingTitle: "Request a quote for your institution",
    closingText:
      "Send us the year group, student numbers, preferred dates and the academic purpose, and we will come back with a costed itinerary you can take to management.",
    closingPrimaryLabel: "Call +91 95629 21818",
    closingPrimaryType: "phone",
    closingSecondaryLabel: "Email us",
    closingSecondaryType: "email",
    metaTitle: "Educational Tours for Schools, Colleges & Student Groups",
    metaDescription:
      "Educational tours for Kerala schools and colleges — study tours, industrial visits and international programmes, with per-student costing and safety in writing.",
  },
  {
    slug: "adventure-tours",
    title: "Adventure tours",
    icon: "Mountain",
    order: 14,
    shortDescription:
      "Treks, dives and high-altitude road trips, run with operators whose safety record we have actually checked.",
    heroHeading: "Adventure Tour Packages for Unforgettable Experiences",
    heroLead:
      "We plan adventure tours for travellers who want more than a sightseeing itinerary: trekking, rafting, diving, paragliding and desert crossings, in India and overseas. Every trip is built around three things people usually find out too late: the season, the fitness it actually needs, and whether the insurance covers the activity.",
    ctaLabel: "Plan your adventure",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      { title: "Season checked first", text: "The wrong month is how most adventure trips fail." },
      {
        title: "Insurance that covers it",
        text: "Not a standard policy that excludes it in the fine print.",
      },
      {
        title: "Vetted operators",
        text: "Licensed, and used by us before. Not the cheapest on the day.",
      },
      { title: "One planner", text: "First message to your return." },
    ],
    blocks: [
      {
        kind: "prose",
        title: "What does an adventure tour package include?",
        body:
          "An adventure tour package covers travel, accommodation and one or more guided activities, such as trekking, rafting, diving or similar, arranged through licensed local operators. Unlike a standard holiday, it is fixed to a seasonal window, carries a fitness or age requirement, and needs travel insurance that specifically covers adventure activities, since most standard policies exclude them.",
      },
      {
        kind: "prose",
        title: "Explore beyond the usual",
        body:
          "Some trips are measured by what you saw. Others are measured by what you did. If the second sounds more like your holiday, this is the page.\n\nWe are not an activity operator, and we do not pretend to be. We plan the trip, book through operators we have used before, and make sure the parts around the activity — the flights, the acclimatisation days, the transfer to a trailhead at four in the morning — actually work.",
      },
      {
        kind: "cards",
        title: "Activities & experiences",
        items: [
          {
            title: "On water",
            text: "White-water rafting, kayaking, scuba diving, snorkelling, surfing and coastal water sports.",
          },
          {
            title: "On the mountain",
            text: "Trekking and camping, rock climbing, rappelling, mountain biking and winter skiing.",
          },
          {
            title: "In the air",
            text: "Paragliding, zip-lining, bungee jumping and hot-air ballooning.",
          },
          {
            title: "On land",
            text: "Desert and dune safaris, jeep and wildlife safaris, caving and off-road trails.",
          },
        ],
      },
      {
        kind: "cards",
        title: "Domestic & international adventure tours",
        items: [
          {
            title: "Kerala",
            text: "Trekking at Munnar, Wayanad and Vagamon, bamboo rafting at Periyar, backwater kayaking, and paragliding at Vagamon. Short enough for a long weekend.",
          },
          {
            title: "Across India",
            text: "Rafting and bungee at Rishikesh, Ladakh by road and by bike, Himachal treks and Bir Billing paragliding, scuba in the Andamans, water sports in Goa, desert safari in Rajasthan, caving in Meghalaya.",
          },
          {
            title: "International",
            text: "Trekking in Nepal and Bhutan, diving in Thailand and the Maldives, volcano and jungle trails in Bali and Vietnam, desert and skydiving in Dubai.",
          },
        ],
      },
      {
        kind: "list",
        title: "Adventure travel for groups",
        intro:
          "Most adventure trips are group trips, and groups rarely arrive at the same fitness level.",
        points: [
          "Friends and colleagues — one plan, one payment, nobody chasing anybody for a number.",
          "Corporate offsites — activities scaled so the whole team can take part, not just the fit half.",
          "College groups — supervised, with operators told the age range in advance.",
          "Families — a lower-intensity option running alongside the main activity.",
        ],
      },
      {
        kind: "list",
        title: "Planning your adventure trip",
        intro: "The parts that decide whether an adventure trip works.",
        points: [
          "Season. Rafting stops for the monsoon, Himalayan passes close, dive sites have visibility months. We plan to the window and tell you early if it doesn't meet your leave dates.",
          "Fitness and age. Stated upfront, so nobody is turned away at the start point.",
          "Insurance. Cover that includes what you are actually doing.",
          "Operators. Licensed, with equipment and guide ratios confirmed.",
          "The trip around the activity. Acclimatisation days, early transfers, a rest day where it's needed.",
        ],
      },
      {
        kind: "cards",
        title: "Why choose Alisha?",
        items: [
          {
            title: "Season before sale",
            text: "We tell you whether the month works before we sell you the trip. The wrong window is the most common way an adventure trip fails.",
          },
          {
            title: "Insurance that covers the activity",
            text: "Not a standard policy that excludes trekking, diving or paragliding in the fine print.",
          },
          {
            title: "Vetted operators",
            text: "Licensed operators we have worked with, not whoever is cheapest on the day.",
          },
          {
            title: "One planner",
            text: "The person who planned the trip is the person you call from the road.",
          },
          {
            title: "IATA accredited since 2013",
            text: "International flights issued directly by us, not resold through a portal.",
          },
          {
            title: "Based in Kottayam",
            text: "Close enough to plan a Kerala trip in person, set up to plan the rest from here.",
          },
        ],
      },
    ],
    closingTitle: "Plan your adventure",
    closingText:
      "Tell us what you want to do, roughly when, and how many of you. We will tell you honestly whether the season works.",
    closingPrimaryLabel: "Call +91 95629 21818",
    closingPrimaryType: "phone",
    closingSecondaryLabel: "WhatsApp us",
    closingSecondaryType: "whatsapp",
    metaTitle: "Adventure Tour Packages for Unforgettable Experiences",
    metaDescription:
      "Adventure tours from Kerala — trekking, rafting, diving, paragliding and desert safaris, planned to the season with licensed operators and cover that fits.",
  },
  {
    slug: "certificate-attestation",
    title: "Certificate attestation",
    icon: "FileCheck",
    order: 11,
    shortDescription:
      "Education, employment and personal documents authenticated for use abroad — we know the sequence by heart.",
    heroHeading: "Certificate Attestation Services",
    heroLead:
      "We coordinate certificate attestation for documents going abroad: educational certificates, personal records and commercial documents. Every file is built around two things you are relying on: that the document goes through the route the receiving country actually accepts, and that you know where your originals are at every stage.",
    ctaLabel: "Start your attestation",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      {
        title: "Route confirmed first",
        text: "Apostille or embassy attestation, checked for your destination.",
      },
      {
        title: "Documents checked upfront",
        text: "Mismatches and missing papers caught before submission, not after.",
      },
      { title: "Status at every stage", text: "You know which office your file is with." },
      {
        title: "One point of contact",
        text: "The person who takes your documents answers your calls.",
      },
    ],
    blocks: [
      {
        kind: "prose",
        title: "What is certificate attestation?",
        body:
          "Certificate attestation is the process of having a document verified by a chain of authorities so that it is accepted as genuine in another country. For documents issued in India, this usually means state-level authentication, then the Ministry of External Affairs (MEA), then the embassy of the destination country. For countries in the Hague Apostille Convention, an MEA apostille replaces the embassy step.\n\nAttestation confirms that a document is genuine. It does not translate the document, and it does not decide how the receiving authority will use it.",
      },
      {
        kind: "prose",
        title: "Documents that may require attestation",
        body:
          "Attestation is needed when a document issued in India has to be accepted officially abroad for a work visa, university admission, a family visa, professional registration or a legal matter.\n\nWhich state-level authority attests it depends on the type of document: educational certificates go through the state education department, personal documents through the Home Department, and commercial documents through a Chamber of Commerce. Our document attestation services cover all three.",
      },
      {
        kind: "list",
        title: "Educational certificate attestation",
        intro:
          "Needed for employment visas, higher studies and professional licensing abroad. For certificates issued in Kerala, state authentication is handled through NORKA Roots.",
        points: [
          "Degree, diploma and postgraduate certificates",
          "Mark lists and semester grade cards",
          "SSLC and Plus Two certificates",
          "Professional certificates, such as nursing and engineering",
        ],
        footnote:
          "Some countries and employers also require university verification before attestation, which adds time. We check this at the start.",
      },
      {
        kind: "cards",
        title: "Personal & other documents",
        items: [
          {
            title: "Birth & marriage certificates",
            text: "For family visas, dependant sponsorship and school admission abroad.",
          },
          {
            title: "Police clearance certificate",
            text: "Often requested for employment and residence visas.",
          },
          {
            title: "Affidavits & power of attorney",
            text: "Usually notarised before state attestation.",
          },
          {
            title: "Commercial documents",
            text: "Company registration, invoices and certificates of origin, attested through a Chamber of Commerce before the MEA.",
          },
        ],
        footnote:
          "On documents from other states: state authentication is done by the state that issued the document. A degree from a university in Tamil Nadu, for example, is authenticated in Tamil Nadu, not Kerala.",
      },
      {
        kind: "cards",
        title: "Attestation for overseas employment & travel",
        intro:
          "Where the document is going decides the route. Certificate attestation for abroad jobs usually covers your qualifications and, for many roles, a police clearance certificate. Family and dependent visas typically need birth and marriage certificates.",
        items: [
          {
            title: "Apostille countries",
            text: "For countries in the Hague Apostille Convention, the MEA issues an apostille, a sticker with a unique ID that the receiving authority can verify. No embassy step is needed.",
          },
          {
            title: "Embassy attestation countries",
            text: "For countries outside the Convention, including several in the Gulf, MEA attestation is followed by that country's embassy or consulate in India, and often by its foreign ministry after you arrive.",
          },
        ],
        footnote:
          "On timing: attestation passes through several government offices, each with its own processing time. Start before your visa process needs the documents, not when it asks for them.",
      },
      {
        kind: "steps",
        title: "The certificate attestation process",
        items: [
          {
            title: "Confirm the route",
            text: "We check the destination, the purpose and each document to decide between apostille and embassy attestation.",
          },
          {
            title: "Check the documents",
            text: "Originals, copies and passport details are checked for mismatches that would cause a rejection.",
          },
          {
            title: "State authentication",
            text: "By the education department, Home Department or Chamber of Commerce, depending on the document. Some documents need notarisation first.",
          },
          {
            title: "MEA attestation or apostille",
            text: "The Ministry of External Affairs attests or apostilles the document.",
          },
          {
            title: "Embassy attestation",
            text: "Only for countries outside the Apostille Convention.",
          },
        ],
        footnote:
          "Some countries require a further attestation by their foreign ministry after you arrive. We tell you in advance if yours does.",
      },
      {
        kind: "cards",
        title: "Why choose Alisha?",
        items: [
          {
            title: "IATA accredited since 2013",
            text: "Attestation, visas and flight tickets handled by one team.",
          },
          {
            title: "One point of contact",
            text: "The person who takes your documents is the person you call for updates.",
          },
          {
            title: "Straight answers on timing",
            text: "We tell you which stages depend on government offices, rather than promising a date.",
          },
        ],
      },
    ],
    closingTitle: "Get assistance with your documents",
    closingText:
      "Send us the list of documents, the country they are going to and the purpose: job, study or family visa. We will tell you the route, the stages involved and what to prepare.",
    closingPrimaryLabel: "Call +91 95629 21818",
    closingPrimaryType: "phone",
    closingSecondaryLabel: "Email us",
    closingSecondaryType: "email",
    disclaimer:
      "Attestation and apostille are issued by the relevant state authorities, the Ministry of External Affairs and foreign embassies. Alisha Tours & Travels assists with documentation and submission and is not an attesting authority. Requirements, fees and processing times are set by these authorities and may change.",
    metaTitle: "Certificate Attestation Services",
    metaDescription:
      "Certificate attestation in Kerala — educational, personal and commercial documents through NORKA, the Home Department, MEA and embassies, plus apostille.",
  },
];

export default services;
