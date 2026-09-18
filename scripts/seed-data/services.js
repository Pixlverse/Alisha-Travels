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
    TRAIN & BUS TICKETS — added at the client's instruction ("We can include
    Train and Bus ticket also").

    THE COPY BELOW IS DRAFTED, NOT SUPPLIED. Every other service on this site
    carries the client's own words; this one carries ours, written to match
    their voice and to claim nothing we cannot stand behind — no reservation
    quotas, no tatkal promises, no named operators. It needs their sign-off,
    and anything in it that is wrong about how they actually work should be
    corrected in /admin/ rather than here.
  */
  {
    slug: "train-bus-tickets",
    title: "Train & bus tickets",
    icon: "TrainFront",
    order: 4,
    shortDescription:
      "Rail and road legs booked alongside the rest of the trip, so the connections actually meet.",
    heroLead:
      "Not every journey is a flight. Train reservations and intercity bus seats are booked from the same desk as the rest of your trip, which means the arrival and the onward leg are checked against each other before anything is confirmed.",
    ctaLabel: "Ask about a booking",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      { title: "Booked with the trip", text: "Not a separate errand on a separate app" },
      { title: "Connections checked", text: "Arrival and onward leg compared before booking" },
      { title: "One place to ask", text: "The planner who booked it answers about it" },
      { title: "Groups handled", text: "Seats together, on one payment" },
    ],
    blocks: [
      {
        kind: "cards",
        title: "What we are usually asked for",
        intro:
          "Rail and road work is rarely the whole trip — it is the part that has to line up with the rest of it.",
        items: [
          {
            tag: "Rail",
            title: "Train reservations",
            text: "Reserved seats and berths on Indian Railways, booked for the class and quota that is actually available on your date.",
          },
          {
            tag: "Road",
            title: "Intercity bus seats",
            text: "Sleeper and seater coaches on interstate routes, including the overnight legs some hill itineraries depend on.",
          },
          {
            tag: "Groups",
            title: "Groups travelling together",
            text: "Seats together rather than scattered through the coach, on one booking and one payment.",
          },
          {
            tag: "Transfers",
            title: "Station and stand transfers",
            text: "The car that meets the train, arranged with the arrival time rather than an estimate of it.",
          },
        ],
        footnote:
          "Availability on Indian Railways is decided by the reservation system, not by an agent. We will tell you what is open on your date, and what the realistic alternative is when it is not.",
      },
      {
        kind: "prose",
        title: "Why book a train through us at all",
        body:
          "You can book a train yourself, and on a single straightforward journey you probably should. It is worth asking us when the rail or road leg is part of something larger: a flight landing the same morning, a hotel that has to be held an extra night, a group of twenty who need to arrive together.\n\nThose are the bookings that go wrong in the gaps between them — a connection that looked fine until the arrival terminal was checked, an overnight bus that reaches town four hours before check-in. Booking the legs from one desk is what lets somebody notice that before you have paid for it.",
      },
    ],
    closingTitle: "Tell us the route and the date.",
    closingText: "We will come back with what is available and what it costs.",
    closingPrimaryLabel: "Ask about a booking",
    closingPrimaryType: "enquiry",
    closingSecondaryLabel: "WhatsApp us",
    closingSecondaryType: "whatsapp",
    metaTitle: "Train & Bus Ticket Booking",
    metaDescription:
      "Train reservations and intercity bus tickets booked from Kerala alongside flights, hotels and transfers, with connections checked and groups seated together.",
  },
  /*
    CAB RENTAL, PASSPORT, IMMIGRATION AND CRUISE — added at the client's
    instruction, alongside train and bus tickets.

    THE COPY ON ALL FOUR IS DRAFTED, NOT SUPPLIED, exactly as it is on the
    train and bus page. It is written in their voice and it claims nothing
    that cannot be stood behind — no processing times, no named operators, no
    suggestion that we decide anything an authority decides. Every one of them
    needs the client's sign-off, and the specifics (rates, the cruise lines
    they actually sell, what their immigration desk does and does not handle)
    have to come from them. Edit in /admin/ rather than here.
  */
  {
    slug: "cab-rental",
    title: "Cab rental",
    icon: "Car",
    order: 5,
    shortDescription:
      "Airport transfers, day hire and outstation cars with drivers we have used before.",
    heroLead:
      "A car and a driver for an airport run, a day of sightseeing or a week on the road. The same desk that books the trip books the cars in it, which is what keeps the pickup time matched to the arrival rather than to the scheduled arrival.",
    ctaLabel: "Ask for a quote",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      { title: "Quoted before you travel", text: "Kilometres, tolls and driver allowance stated up front" },
      { title: "Drivers we know", text: "Not whoever the app assigns at 4 a.m." },
      { title: "Matched to the flight", text: "Pickups tracked against the actual arrival" },
      { title: "One bill", text: "Cars invoiced with the rest of the trip, not settled in cash" },
    ],
    blocks: [
      {
        kind: "cards",
        title: "What we are usually asked for",
        items: [
          {
            tag: "Airport",
            title: "Airport pickups and drops",
            text: "Kochi, Trivandrum and Kozhikode, with the driver's number sent ahead and the pickup held if the flight is late.",
          },
          {
            tag: "Day hire",
            title: "A car for the day",
            text: "Eight hours and eighty kilometres is the usual basis; anything beyond it is charged at a rate agreed before you set off.",
          },
          {
            tag: "Outstation",
            title: "Multi-day tours with a driver",
            text: "The whole itinerary in one vehicle, with the driver's accommodation and allowance included in the quote rather than collected on the road.",
          },
          {
            tag: "Groups",
            title: "Tempo travellers and coaches",
            text: "Twelve to forty-nine seats for family movements, school groups and corporate travel.",
          },
        ],
        footnote:
          "Sedans, SUVs and tempo travellers. Tell us the route and the number of people and we will tell you which is the sensible vehicle, not the most expensive one.",
      },
      {
        kind: "prose",
        title: "What the quote includes",
        body:
          "A cab quote from us states the vehicle, the kilometre and hour limits, the rate beyond them, and whether tolls, parking, state permits and the driver's allowance are inside the figure or outside it. Those five lines are where hire charges usually go wrong, and they are the reason a fare quoted on the phone turns into an argument at the end of the trip.\n\nWe do not own the cars. What we do is use the same operators repeatedly, quote you what they have quoted us, and take the call ourselves when something goes wrong at the roadside.",
      },
    ],
    closingTitle: "Tell us the route and the dates.",
    closingText: "We will come back with the vehicle and the figure it costs.",
    closingPrimaryLabel: "Ask for a quote",
    closingPrimaryType: "enquiry",
    closingSecondaryLabel: "WhatsApp us",
    closingSecondaryType: "whatsapp",
    metaTitle: "Cab Rental & Airport Transfers in Kerala",
    metaDescription:
      "Airport transfers, day hire and outstation cars with drivers, booked from Kottayam alongside flights, hotels and tour packages. Tolls and allowances quoted up front.",
  },
  {
    slug: "cruise-holidays",
    title: "Cruise holidays",
    icon: "Ship",
    order: 6,
    shortDescription:
      "Cabins booked, shore excursions planned and the flights either side arranged with them.",
    heroLead:
      "A cruise is the one holiday where the hotel moves overnight. It suits families with a wide age range, first-time international travellers and anyone who would rather unpack once — and it is the trip most often booked without anybody explaining what the fare actually covers.",
    ctaLabel: "Ask about a cruise",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      { title: "The fare, explained", text: "What is in the cabin rate and what is billed on board" },
      { title: "Flights either side", text: "Booked to reach the port with a night in hand" },
      { title: "Cabins chosen, not assigned", text: "Deck, side and position picked for the sailing" },
      { title: "Shore days planned", text: "Excursions booked before they sell out at the desk" },
    ],
    blocks: [
      {
        kind: "cards",
        title: "How cruises are usually booked",
        intro:
          "Cruise itineraries are fixed by the line and published months ahead, so the work is in choosing the sailing, the cabin and what happens on either side of it.",
        items: [
          {
            tag: "Sailing",
            title: "Choosing the sailing",
            text: "The route, the length and the season decide most of the experience. We will say plainly which sailings suit a first cruise and which are better once you know you enjoy them.",
          },
          {
            tag: "Cabin",
            title: "Choosing the cabin",
            text: "Inside, ocean view, balcony or suite, and where on the ship it sits. Deck and position matter more than the category name, particularly for anyone prone to seasickness.",
          },
          {
            tag: "Ports",
            title: "Shore excursions",
            text: "Each port day is a choice between the ship's excursion, an independent tour and a day ashore on your own. We book them ahead, because the popular ones close before sailing.",
          },
          {
            tag: "Either side",
            title: "Flights, hotels and transfers",
            text: "Reaching the port the day before is not caution, it is the difference between a missed sailing and a holiday. Flights, the pre-cruise night and the transfer are booked with the cabin.",
          },
        ],
      },
      {
        kind: "prose",
        title: "What the fare covers, and what it does not",
        body:
          "A cruise fare usually covers the cabin, main dining, most entertainment and getting from port to port. Speciality restaurants, drinks packages, shore excursions, gratuities, spa treatments and Wi-Fi are normally billed on board, and port charges and taxes are often quoted separately from the headline fare.\n\nWe set that out in writing before you pay, with the on-board account explained, so the bill on the last morning is not the first time anybody mentions it.",
      },
      {
        kind: "prose",
        title: "Itineraries",
        body:
          "Every sailing has its own day-by-day itinerary, and we send it as a written plan the same way we send a land tour: the ports, the sea days, the times the ship sails, and what is worth doing at each stop.\n\nTell us the month, the region and how many are travelling, and we will come back with the sailings that fit.",
      },
    ],
    closingTitle: "Thinking about a cruise?",
    closingText:
      "Tell us roughly when and where, and whether this is a first cruise. We will come back with two or three sailings, what each cabin grade costs and what the on-board bill is likely to add.",
    closingPrimaryLabel: "Ask about a cruise",
    closingPrimaryType: "enquiry",
    closingSecondaryLabel: "WhatsApp us",
    closingSecondaryType: "whatsapp",
    metaTitle: "Cruise Holidays & Cruise Bookings from Kerala",
    metaDescription:
      "Cruise holidays booked from Kerala — choosing the sailing and the cabin, shore excursions, and the flights and hotels either side, with the on-board costs explained before you pay.",
  },
  {
    slug: "passport-services",
    title: "Passport services",
    icon: "BookUser",
    order: 9,
    shortDescription:
      "Applications filled, documents checked and Passport Seva appointments booked.",
    heroLead:
      "A passport application is refused or delayed far more often for a mismatched address or a missing document than for anything about the applicant. We prepare the file, check it against what the Passport Seva Kendra asks for, and book the appointment.",
    ctaLabel: "Ask about a passport",
    ctaType: "enquiry",
    secondaryCtaLabel: "WhatsApp us",
    secondaryCtaType: "whatsapp",
    assurances: [
      { title: "Checked before submission", text: "Against the current document list, not last year's" },
      { title: "Appointments booked", text: "At the Kendra that can actually see you soonest" },
      { title: "Fresh, renewal or reissue", text: "Including damaged, lost and name-change cases" },
      { title: "One person on your file", text: "Who knows where the application has reached" },
    ],
    blocks: [
      {
        kind: "list",
        title: "What we help with",
        points: [
          "Fresh passport applications for adults, children and senior citizens",
          "Renewal and reissue, including expiry, exhausted pages and damaged books",
          "Change of name, address or date of birth, with the supporting documents each one needs",
          "Tatkaal applications where the case qualifies, with the verification documents prepared",
          "Police clearance certificates for employment and visa purposes",
          "Appointment booking, form filling and a document check before you go",
        ],
      },
      {
        kind: "prose",
        title: "What we cannot do",
        body:
          "A passport is issued by the Regional Passport Office, and nobody outside it can promise an outcome, a date or a police verification result. Anyone who tells you otherwise is selling something they do not control.\n\nWhat we can do is make sure the file that reaches them is complete and consistent, that the appointment is booked for a date that works, and that you know what happens at each stage — which is where most of the delay and nearly all of the anxiety comes from.",
      },
    ],
    closingTitle: "Tell us what you need the passport for.",
    closingText: "Fresh, renewal or urgent — we will tell you which documents to bring and book the appointment.",
    closingPrimaryLabel: "Ask about a passport",
    closingPrimaryType: "enquiry",
    closingSecondaryLabel: "Call the office",
    closingSecondaryType: "phone",
    metaTitle: "Passport Services in Kottayam, Kerala",
    metaDescription:
      "Passport applications, renewals and reissues prepared and checked in Kottayam, with Passport Seva appointments booked and the document list explained before you go.",
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
