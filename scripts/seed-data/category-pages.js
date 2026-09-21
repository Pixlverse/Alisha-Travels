/**
 * The editorial content above the three package category listings.
 *
 * Every word here is the client's own, supplied page by page. The pages were
 * a heading, a lead and the filtered grid before this; what they wrote is a
 * full argument — why these trips are planned the way they are, what they ask
 * before planning one, and what is handled for you while you are away — so
 * the copy lives in a collection and renders through the same block system
 * the service pages use. See models/CategoryPage.js.
 *
 * `slug` matches PACKAGE_CATEGORIES in lib/site.js. There is no document for
 * "customized" because that content lives on its own service page.
 */

export const categoryPages = [
  /* ------------------------------ GROUP TOURS ---------------------------- */
  {
    slug: "group-tours",
    eyebrow: "Packages",
    title: "Group Tour Packages from Kerala",
    heroLead:
      "Friends, extended families, residents' associations, parish and temple groups, alumni batches. One coordinator deals with the organiser, one plan goes to everyone, and nobody spends weeks chasing people for a headcount.",
    subline:
      "Group holiday packages from Kerala to destinations across India and abroad, arranged by an IATA-accredited agency since 2013.",
    ctaLabel: "Request a group quote",
    secondaryCtaLabel: "Call us",
    assurances: [
      { title: "One coordinator", text: "The organiser deals with one person" },
      { title: "Per-head pricing", text: "Inclusions listed before anyone pays" },
      { title: "Fares and rooms held", text: "While names are still coming in" },
      { title: "Reachable on the trip", text: "One number for the whole group" },
    ],
    intro:
      "Most groups start with an idea and a rough number. We quote a per-head price for a range, say 20 to 30 people, and hold group fares and rooms while names are confirmed. The organiser collects the list; we handle tickets, rooming, transport and the day-by-day plan. When someone drops out or joins late, the change goes through one person, and the revised cost reaches the organiser in writing. Every itinerary is built for the group that is travelling, so customised group tours are the normal case here rather than an extra.",
    blocks: [
      {
        kind: "cards",
        title: "Friends, families, communities and pilgrimages",
        intro:
          "Each kind of group travels differently, so the pace, rooms and budget are planned separately.",
        items: [
          {
            title: "Friends' trips",
            text: "College friends, colleagues and batchmates. Shared rooms, flexible evenings and a budget that works for everyone, not only the organiser.",
          },
          {
            title: "Family reunions",
            text: "Extended families across generations. Rooms close together, a vehicle that seats everyone, and a pace that suits the eldest as well as the youngest.",
          },
          {
            title: "Associations & clubs",
            text: "Residents' associations, clubs, alumni and staff welfare groups. Per-member costing, a clear payment schedule and one document for the committee.",
          },
          {
            title: "Pilgrimage tours",
            text: "Parish, temple and community groups visiting pilgrim centres in India and abroad. Timings planned around services and prayers, with meal needs noted.",
          },
        ],
      },
      {
        kind: "list",
        title: "Group coordination",
        intro:
          "For ten or more travelling together, the work shifts from booking to coordination. We manage the list so the organiser doesn't have to manage everyone.",
        points: [
          "A named coordinator for the organiser, from first quote to return",
          "Per-head costing with inclusions and exclusions listed",
          "Group fares and room blocks held while names are confirmed",
          "Rooming list managed by us, including late changes",
          "A payment schedule agreed at the start, with receipts for every payment",
          "An on-trip contact the group can reach day and night",
        ],
      },
      {
        kind: "list",
        title: "Domestic group tours",
        intro:
          "Where groups from Kerala go most often within India, whether the trip is leisure, a reunion or a pilgrimage.",
        tags: [
          "Munnar",
          "Thekkady",
          "Wayanad",
          "Kanyakumari",
          "Rameswaram",
          "Velankanni",
          "Ooty",
          "Kodaikanal",
          "Goa",
          "Kashmir",
          "Himachal",
          "Rajasthan",
          "Delhi, Agra & Jaipur",
          "Andaman",
        ],
      },
      {
        kind: "list",
        title: "International group tours",
        intro:
          "Overseas group tours from Kerala, with tickets, visas, insurance and forex arranged from the same desk.",
        tags: [
          "Sri Lanka",
          "Thailand",
          "Singapore",
          "Malaysia",
          "Dubai",
          "Bali",
          "Nepal",
          "Bhutan",
          "Vietnam",
          "Egypt",
          "Holy Land pilgrimage",
        ],
      },
      {
        kind: "list",
        title: "Travel & stay",
        intro:
          "Everything the group needs to get there, stay together and get home, booked as one plan.",
        points: [
          "Group air and train tickets, issued in-house",
          "Coaches or tempo travellers with experienced drivers",
          "Room blocks at hotels along the route",
          "Meal plans with vegetarian and non-vegetarian counts",
          "Sightseeing and entry tickets arranged in advance",
          "A printed itinerary for every member",
        ],
      },
      {
        kind: "list",
        title: "Groups we arrange for",
        intro:
          "Any group with a shared plan and one person to speak for it. Group vacation packages are costed the same way for all of them, per head with inclusions listed. A few examples:",
        tags: [
          "College alumni",
          "Residents' associations",
          "Parish groups",
          "Temple committees",
          "Senior citizens' clubs",
          "Staff welfare groups",
          "Office friends",
          "Extended families",
        ],
      },
      {
        kind: "cards",
        title: "Private group, or a fixed departure",
        intro:
          "Two ways to travel as a group, and the right one depends on how many of you there are.",
        items: [
          {
            tag: "Private",
            title: "Private group tours",
            text: "The trip is built for your group alone, around dates and a budget you set. Dates chosen by the group, an itinerary adjusted to suit your members, hotels and meal plans picked for your budget, and only your group on the coach. Pilgrimage, leisure, or a mix of both.",
          },
          {
            tag: "Scheduled",
            title: "Joining a fixed departure",
            text: "For smaller groups, a scheduled departure can cost less. Set dates and a published itinerary, a fixed per-person price, and no group to organise or headcount to confirm. Suited to couples, friends and small families.",
          },
        ],
        linkLabel: "See fixed departures",
        linkHref: "/fixed-departures/",
      },
      {
        kind: "cards",
        title: "Why groups choose Alisha",
        items: [
          {
            title: "An IATA-accredited group tour operator",
            text: "Group air and train tickets are issued by us directly, not resold through a portal.",
          },
          {
            title: "One point of contact",
            text: "A named coordinator who knows the group, from the first quote to the return journey. Not a shared inbox.",
          },
          {
            title: "Costing a committee can check",
            text: "Per-head prices with inclusions and exclusions listed, a payment schedule agreed at the start, and receipts for every payment.",
          },
          {
            title: "Late changes handled",
            text: "Drop-outs and additions go through one person, with the revised cost in writing to the organiser.",
          },
          {
            title: "Reachable outside office hours",
            text: "Trains run late and plans move at night. The phone is picked up.",
          },
          {
            title: "A group travel agency you can walk into",
            text: "An office in Ettumanoor, Kottayam, where a committee can sit down with the plan before anyone pays.",
          },
        ],
      },
    ],
    closingTitle: "Send us the headcount. We'll send a per-head quote.",
    closingText:
      "A rough group size, dates, destination and budget per person is enough to start.",
    metaTitle: "Group Tour Packages from Kerala",
    metaDescription:
      "Group holiday packages from Kerala for friends, families, associations and pilgrimage groups - per-head pricing, group fares held while names are confirmed, one coordinator throughout.",
  },

  /* ---------------------------- FAMILY PACKAGES -------------------------- */
  {
    slug: "family",
    eyebrow: "Packages",
    title: "Family Tour Packages from Kerala",
    heroLead:
      "Grandparents who need a slower pace. A toddler who naps at two. Family holidays rarely fail on the destination; they fail on logistics. We plan the flights, rooms, driving time and daily pace around the people actually travelling.",
    subline:
      "Family holiday packages within Kerala, across India and overseas, planned by an IATA-accredited agency since 2013.",
    ctaLabel: "Plan a family trip",
    secondaryCtaLabel: "Call us",
    assurances: [
      { title: "A pace everyone can keep", text: "Fewer stops, longer breaks" },
      {
        title: "Rooms that fit the family",
        text: "Connecting rooms, extra beds, lift access",
      },
      { title: "One price, in full", text: "Quoted per family before you pay" },
      {
        title: "Reachable during the trip",
        text: "The person who booked, not a call centre",
      },
    ],
    intro:
      "How many are travelling, their ages, and anyone who needs extra care: a grandparent who can't manage long walks, a child with a food allergy, a wheelchair user. Then school holidays, exam dates and how long you can be away. That is usually enough to decide how many days the trip needs, how much driving is reasonable in a day, and which hotels will actually work. Most of the family holiday packages from Kerala we plan start with that conversation, which is why every itinerary is customised. Customised family tour packages cost no more than a fixed one; they simply fit the people going.",
    blocks: [
      {
        kind: "cards",
        title: "Planned around who's coming",
        intro:
          "The same destination works very differently for a two-year-old and a seventy-year-old, so we plan for the family in front of us.",
        items: [
          {
            title: "Young children",
            text: "Shorter drives timed around naps, hotels with cots and space to play, and afternoons left free. Flights chosen for the hour of day, not only the fare.",
          },
          {
            title: "Grandparents",
            text: "Ground-floor or lift-access rooms, wheelchair assistance at airports, and sightseeing without long climbs. Medicines and diet needs noted at booking.",
          },
          {
            title: "Teenagers",
            text: "Something beyond viewpoints: boating, a jungle safari, a short trek or an adventure park, balanced against the rest of the family's pace.",
          },
          {
            title: "Large & joint families",
            text: "Several rooms in one hotel, a vehicle that seats everyone, and one plan shared with every household. Costs can be split by family if needed.",
          },
        ],
      },
      {
        kind: "list",
        title: "Domestic family tour packages",
        intro:
          "Family vacation packages in India, from a weekend in Munnar or Thekkady to a week in Kashmir or Rajasthan. The trip is planned end to end and priced as one booking.",
        points: [
          "Flights or trains booked together, seated as a family where possible",
          "Hotels chosen for families, not only for star rating",
          "A private vehicle sized to the group, with a driver who knows the route",
          "Driving time kept reasonable, with breaks planned in",
          "Meal preferences noted for vegetarians, children and special diets",
          "Free time in every day, not a stop every hour",
        ],
      },
      {
        kind: "list",
        title: "International family tour packages",
        intro:
          "Travelling abroad with children or older parents adds documents and decisions. Our international family tour packages handle them in one place, so nothing is left to the airport counter.",
        points: [
          "International air tickets, issued in-house",
          "Visa documentation for every family member, including children",
          "Passport validity checked before booking",
          "Travel insurance that covers children and senior travellers",
          "Forex and airport transfers",
          "A written itinerary for the whole family",
        ],
      },
      {
        kind: "list",
        title: "Tell us what you need",
        intro:
          "Mention any of these when you enquire and we'll plan them in from the start, rather than requesting them from the hotel later.",
        tags: [
          "Baby cots",
          "Connecting rooms",
          "Extra beds",
          "Ground-floor rooms",
          "Lift access",
          "Wheelchair assistance",
          "Vegetarian meals",
          "Medical needs",
        ],
      },
      {
        kind: "list",
        title: "Family vacation packages for school holidays",
        intro:
          "Many families travel in the same few weeks, around Onam, Christmas and the summer break, when rooms and fares go quickly. For these dates, enquiring early matters more than anything else.",
        points: [
          "Weekend trips within Kerala",
          "Summer holidays in the hills",
          "Festival-season trips planned ahead",
          "Overseas holidays timed to school vacations",
          "Early quotes for peak dates, so you can compare before prices rise",
        ],
      },
      {
        kind: "list",
        title: "During the trip",
        intro: "Once you've left home, one person keeps the plan running.",
        points: [
          "Driver and pickup details sent the day before",
          "Hotel contacts and confirmations in one document",
          "Changes handled by the person who booked",
          "Someone to call if a child is unwell and a day needs to change",
          "Help adding a night or changing a hotel mid-trip",
        ],
      },
      {
        kind: "cards",
        title: "Why families choose Alisha",
        items: [
          {
            title: "IATA accredited since 2013",
            text: "Tickets are issued by us directly, so a delay or a reschedule is handled by the person who booked them.",
          },
          {
            title: "Planned around who is coming",
            text: "Pace, rooms, driving time and transport decided by the ages of the people travelling.",
          },
          {
            title: "One price, quoted per family",
            text: "Hotels, transport, meals and taxes listed in full before you pay, so the cost can be split if several households are coming.",
          },
          {
            title: "A family travel agency you can walk into",
            text: "An office in Ettumanoor, Kottayam, open before the trip and after it.",
          },
          {
            title: "Reachable while you are away",
            text: "A child gets sick, a flight moves, a day has to change. The phone is picked up.",
          },
          {
            title: "Children's visas and insurance from one desk",
            text: "Tickets, visa paperwork for every member, forex and cover for children and senior travellers, arranged together.",
          },
        ],
      },
    ],
    closingTitle: "Tell us who's coming. We'll plan around them.",
    closingText:
      "Number of travellers, their ages, dates and a rough budget is enough to start.",
    metaTitle: "Family Tour Packages from Kerala",
    metaDescription:
      "Family holiday packages from Kerala - planned around the ages of the people travelling, with reasonable driving days, rooms that fit and one price quoted per family.",
  },

  /* -------------------------- HONEYMOON PACKAGES ------------------------- */
  {
    slug: "honeymoon",
    eyebrow: "Packages",
    title: "Honeymoon Packages from Kerala",
    heroLead:
      "You get one honeymoon. It shouldn't feel like a template with two names typed into it. We plan each trip after talking to the couple: how far you want to go, how much you want to see, and how much of the week you'd rather spend doing nothing at all.",
    subline:
      "Domestic and international honeymoon tour packages, planned by an IATA-accredited agency since 2013.",
    ctaLabel: "Plan our honeymoon",
    secondaryCtaLabel: "Call us",
    assurances: [
      { title: "Planned after a conversation", text: "Not picked off a brochure page" },
      {
        title: "Rooms asked for by name",
        text: "View, floor and the quiet side, requested in writing",
      },
      { title: "Time left empty", text: "Free mornings built in, not squeezed out" },
      {
        title: "Reachable while you're away",
        text: "Flights move at night. Someone answers",
      },
    ],
    intro:
      "Most couples come to us once the wedding date is fixed and everything else is still moving. We start with a short conversation (number of nights, how far you want to travel, whether you want to see places or mostly rest) and come back with one or two itineraries, costed in full. We plan around the reception, leave dates and visa appointments, so the trip fits the weeks after the wedding rather than competing with them. Every one of our honeymoon travel packages is built this way. There is no fixed list to pick a number from, and a customised honeymoon package costs no more than a standard one.",
    blocks: [
      {
        kind: "cards",
        title: "Honeymoon destinations from Kerala",
        intro:
          "Hills, beaches, backwaters or abroad. Each suits a different couple, a different season and a different amount of leave. Tell us your dates and we will say which one fits them.",
        items: [
          {
            title: "Hill stations",
            text: "Munnar, Ooty, Kodaikanal, Coorg, Kashmir and Himachal. Cool evenings, plantation stays and resorts where the view does most of the work.",
          },
          {
            title: "Beaches & islands",
            text: "Andaman, Goa, Varkala and Kovalam. Beachfront rooms and slow days, with ferries and transfers timed so you aren't waiting at a jetty.",
          },
          {
            title: "Backwaters",
            text: "Kumarakom and Alappuzha, a short drive from Kottayam when leave is short. Private houseboat nights and lakeside resorts.",
          },
          {
            title: "Overseas",
            text: "Maldives, Bali, Thailand, Mauritius, Sri Lanka and Dubai. Flights, visas, forex and insurance handled together, with the resort chosen first.",
          },
        ],
      },
      {
        kind: "list",
        title: "Domestic honeymoon packages",
        intro:
          "Our domestic honeymoon trip packages run from two nights on the backwaters to a week in the north. Within India, most of what makes a honeymoon work is decided at booking: which room, which car, and how much time sits between one place and the next. We settle those before anything is paid for.",
        points: [
          "Rooms requested by view and location, confirmed in writing by the hotel",
          "A private car and driver for the whole trip, not shared transfers",
          "Flights or trains timed around the reception and your leave",
          "Room decoration or a candlelight dinner only if you ask for it",
          "Late checkout requested on the last day, where the hotel allows it",
          "One number to call from arrival to the drive home",
        ],
      },
      {
        kind: "list",
        title: "International honeymoon packages",
        intro:
          "Our international honeymoon packages carry more paperwork, and more of it has a deadline. We issue tickets directly, so a schedule change is handled by the person who made the booking.",
        points: [
          "International air tickets, issued in-house",
          "Visa documentation and appointment scheduling",
          "Resort and villa bookings, with room categories explained",
          "Travel insurance and forex",
          "Airport, speedboat and seaplane transfers where needed",
          "A written itinerary with every confirmation in one place",
        ],
      },
      {
        kind: "list",
        title: "Honeymoon trip ideas couples ask about",
        intro:
          "The destinations couples raise most often when they come in. Tell us what you want from the week and we will suggest others that fit.",
        tags: [
          "Munnar",
          "Kumarakom",
          "Kashmir",
          "Manali",
          "Andaman",
          "Goa",
          "Maldives",
          "Bali",
          "Thailand",
          "Mauritius",
        ],
      },
      {
        kind: "list",
        title: "Before you travel",
        intro: "A few things that catch couples out, which we check as part of booking.",
        points: [
          "Names on tickets matching passport or ID exactly, especially if a surname is changing",
          "Passport validity against the destination's entry rules",
          "Buffer days between the wedding functions and the flight",
          "What the package includes (meals, transfers, sightseeing) stated before payment",
          "Cancellation terms for each hotel and airline",
        ],
      },
      {
        kind: "list",
        title: "While you're away",
        intro: "Once you've left, the plan should run without either of you managing it.",
        points: [
          "Driver and pickup details sent the day before",
          "Hotel contacts and confirmation numbers in one document",
          "Changes handled by the person who booked the trip",
          "Someone to call if a flight is delayed or rescheduled",
          "Help extending a stay or adding a night",
        ],
      },
      {
        kind: "cards",
        title: "Why couples choose Alisha",
        items: [
          {
            title: "IATA accredited since 2013",
            text: "Your tickets are issued by us directly, so a schedule change is fixed by the person who booked them.",
          },
          {
            title: "Planned, not picked",
            text: "Every honeymoon itinerary is built after talking to the couple. Nothing is chosen off a list.",
          },
          {
            title: "The price, stated in full",
            text: "Hotels, room category, meals, transfers and taxes, all listed before you pay a rupee.",
          },
          {
            title: "An office you can walk into",
            text: "Ettumanoor, Kottayam. Couples come in before the wedding and after the trip.",
          },
          {
            title: "Reachable while you are away",
            text: "Honeymoon flights leave at odd hours and sometimes move. The phone is picked up.",
          },
          {
            title: "Visas and forex from the same desk",
            text: "Tickets, visa paperwork, insurance and currency arranged together, not chased separately.",
          },
        ],
      },
    ],
    closingTitle: "Tell us your dates. We'll come back with a costed plan.",
    closingText: "Travel dates, number of nights and a rough budget is enough to start.",
    metaTitle: "Honeymoon Packages from Kerala",
    metaDescription:
      "Honeymoon packages from Kerala - hill stations, beaches, backwaters and overseas resorts, planned after a conversation with the couple and costed in full before you pay.",
  },
];

export default categoryPages;
