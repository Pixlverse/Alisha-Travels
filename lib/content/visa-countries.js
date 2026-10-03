/**
 * Country tourist visa pages - /services/global-visa/tourist-visa/<slug>/.
 *
 * Transcribed word for word from the client's own page for each country;
 * only the layout on the site is new (see the route's page.js). The labels on
 * the four fact tiles vary by country (Route, Stay, Validity, Visa fee…) and
 * are kept as the client wrote them.
 *
 * Server-only in practice: the page route imports it. Client components that
 * only need to know whether a country HAS a page use ./visa-country-pages.js.
 * Add a country here and a line there.
 */

export const COUNTRIES = [
  // Albania tourist visa page.pdf
  {
    slug: "albania",
    code: "al",
    name: "Albania",
    title: "Albania tourist visa",
    region: "Rest of Europe",
    heroHeading: "e-Visa (Type C), or no visa with a used Schengen, UK or US visa",
    heroLead:
      "Albania is one of the few places where the visa you already hold may be the only one you need. We check that first. If you do need the e-Visa, we prepare it so it's approved the first time, not after a request for more documents.",
    facts: [
      { label: "Route", value: "e-Visa, online", note: "Or visa-free with a qualifying visa" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "Up to 15 working days", note: "Allow longer in summer" },
      { label: "Start", value: "4 weeks before", note: "Earlier if Albania is part of a Balkans trip" },
    ],
    intro: {
      title: "Do you need an Albania visa at all?",
      body:
        "Indian passport holders can usually enter Albania without a separate visa if they hold a valid, multiple-entry Schengen, UK or US visa that has already been used to enter the country that issued it. A visa you've never travelled on is often refused at the border. A UAE residence permit can also qualify.\n\nEveryone else applies for the Albania e-Visa (Type C, short stay) online before travelling. It's printed and carried with the passport. Rules for Albania have changed more than once in recent years, so we confirm the current position for your passport before you book anything.",
    },
    documents: {
      title: "Albania tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport with at least 6 months validity and minimum 3 blank pages + all old passports, if any",
            "2 scanned recent colour photographs (as per photo specification)",
            "Visa application forms: completed and signed",
            "Personal covering letter: explaining purpose of travel to the country",
            "Original bank statement: stamped & updated for the last 3 months, with bank seal",
            "Air tickets: proof of return flight tickets from and back to your home country",
            "Hotel reservation: proof of accommodation for your entire stay",
            "Travel itinerary: day-wise plan outlining all elements of the trip",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Albania trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "An unused visa", text: "A new Schengen visa you haven't travelled on yet may not get you into Albania. Plan the Schengen country first." },
        { tag: "Common", title: "Single entry, already spent", text: "A single-entry Schengen visa used on the way in doesn't help once you've left the area." },
        { tag: "Common", title: "The rest of the Balkans assumed", text: "Montenegro, North Macedonia and Kosovo each have their own rule. One trip can need three answers." },
        { tag: "Common", title: "An itinerary that doesn't match the bookings", text: "The dates in the covering letter, the hotels and the flights have to agree exactly." },
        { tag: "Common", title: "Insurance below the minimum", text: "Cheap policies often fall short of the required cover. We check the certificate, not the brochure." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Albania application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Which countries, roughly when, and what visas you already hold." },
        { title: "We check the route", text: "Visa-free on your current visa, or the e-Visa. We tell you which." },
        { title: "We send the list", text: "Only what the e-Visa needs for your trip, nothing extra." },
        { title: "We file the e-Visa", text: "Forms filled and checked against your passport, line by line." },
        { title: "Until it's issued", text: "Tracked until the e-Visa is in your inbox, then printed for you." },
      ],
    },
    alongside: ["Greece", "Italy", "Montenegro", "North Macedonia", "Georgia", "Türkiye (Turkey)"],
    closing: "Tell us when you're going to Albania. We'll send the document list.",
    metaTitle: "Albania Tourist Visa from Kerala",
    metaDescription:
      "Albania tourist visa for Indian passport holders - the e-Visa (Type C), or no visa with a used Schengen, UK or US visa. We check your route first and prepare the e-Visa so it's approved the first time.",
  },
  // Armenia tourist visa page.pdf
  {
    slug: "armenia",
    code: "am",
    name: "Armenia",
    title: "Armenia tourist visa",
    region: "Caucasus",
    heroHeading: "e-Visa for 21 or 120 days, or visa on arrival",
    heroLead:
      "Armenia is one of the easier approvals for an Indian passport when the application is complete. The mistakes are small ones: the wrong validity, a photo that doesn't pass, a Georgia leg nobody checked. We prepare the whole trip, not just the visa.",
    facts: [
      { label: "Route", value: "e-Visa, online", note: "Visa on arrival also available" },
      { label: "Validity", value: "21 or 120 days", note: "Choose by the length of your trip" },
      { label: "Processing", value: "About 3 working days", note: "Apply at least a week ahead" },
      { label: "Often paired with", value: "Georgia", note: "Separate visa, separate file" },
    ],
    intro: {
      title: "e-Visa or visa on arrival?",
      body:
        "Indian passport holders can get an Armenia e-Visa online before travelling, valid for 21 days or 120 days, or a visa on arrival at Yerevan airport. We recommend the e-Visa: you land with the answer already in your hand, and there's nothing to argue about at the counter.\n\nIf you hold a valid visa or residence permit from the US, UK, Schengen area, Canada, Australia, Japan or a GCC country, the rules can be easier still. Tell us what you hold and we'll confirm what applies.",
    },
    documents: {
      title: "Armenia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "A valid Indian passport with at least six months validity",
            "Recent passport-size photos",
            "A completed visa application form",
            "Flight tickets (return or onward)",
            "Proof of hotel booking or accommodation details",
            "Bank statements or proof of financial stability",
            "Travel insurance (recommended)",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Armenia trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "21 days chosen for a longer stay", text: "The shorter e-Visa can't be stretched. Pick the validity that covers the whole trip, with a margin." },
        { tag: "Common", title: "Georgia assumed to be covered", text: "Armenia and Georgia are separate countries with separate rules. Most Caucasus trips need both answered." },
        { tag: "Common", title: "A photo that fails the portal", text: "The e-Visa photo has its own specification. A rejected upload costs days." },
        { tag: "Common", title: "Azerbaijan on the same trip", text: "There's no open land crossing between Armenia and Azerbaijan. Route through Georgia, or fly." },
        { tag: "Common", title: "Passport too close to expiry", text: "Six months from your travel dates, not from today." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Armenia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, cities, and whether Georgia is part of it." },
        { title: "We pick the route", text: "21-day or 120-day e-Visa, or another option if your visas allow." },
        { title: "We send the list", text: "Short, specific, and checked against your passport." },
        { title: "We file the e-Visa", text: "Photo, form and bookings uploaded and cross-checked." },
        { title: "Until it's issued", text: "The e-Visa emailed and printed, with a copy on your phone." },
      ],
    },
    alongside: ["Georgia", "Azerbaijan", "Uzbekistan", "Kyrgyzstan", "Türkiye (Turkey)", "Russia"],
    closing: "Tell us when you're going to Armenia. We'll send the document list.",
    metaTitle: "Armenia Tourist Visa from Kerala",
    metaDescription:
      "Armenia tourist visa for Indian passport holders - the e-Visa for 21 or 120 days, or visa on arrival. We pick the right validity, check your photo and passport, and plan the Georgia leg too.",
  },
  // Australia tourist visa page.pdf
  {
    slug: "australia",
    code: "au",
    name: "Australia",
    title: "Australia tourist visa",
    region: "Oceania",
    heroHeading: "Visitor visa (subclass 600), tourist stream",
    heroLead:
      "Australia doesn't refuse visitors for wanting a holiday. It refuses files that don't show why you'll come home. We build the Australia visitor visa application around that one question, from Kerala, with every document agreeing with every other.",
    facts: [
      { label: "Route", value: "Online application", note: "Lodged in ImmiAccount; no embassy visit" },
      { label: "Stay", value: "Up to 3, 6 or 12 months", note: "The officer decides; ask for what you need" },
      { label: "Processing", value: "A few weeks", note: "Varies by season and how complete the file is" },
      { label: "Start", value: "6–8 weeks before", note: "Longer for school holidays and December" },
    ],
    intro: {
      title: "Tourist visa or visitor visa? It's the same application",
      body:
        "People search for both, and both mean the same thing: the Visitor visa (subclass 600), tourist stream. It covers holidays, sightseeing and visiting family or friends in Australia. It does not allow work.\n\nParents visiting a son or daughter who lives in Australia apply in the same stream, usually with an invitation letter and proof of the child's status there. If you are planning a longer family stay, tell us early: the length you ask for changes what the file needs to show.",
    },
    documents: {
      title: "Australia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Copies of old and new passports, valid for at least 6 months",
            "Duly filled online application form",
            "Family register and composition form (if applicable)",
            "1 recent colour photograph, 35 × 45 mm, white background (JPEG), without specs",
            "Covering letter signed by the applicant. For self-employed/business, the letter should be on the company's letterhead",
            "In case of sponsor: proof of sponsorship and a letter from the sponsor, financial documents, and a copy of the sponsor's photo ID (e.g. passport, Aadhaar card or driving licence)",
            "Tax records in one single PDF",
            "Bank statement for the last 3 months, including the bank's address and telephone number and the account holder's name and address, with the bank's stamp and signature, along with proof of sufficient funds, in a single PDF",
            "Credit card statements",
            "Term deposit receipts",
            "Last 3 months' salary slips in a single PDF",
            "Confirmed flight tickets and hotel voucher",
            "National identity card issued by the country that issued the passport is mandatory (Aadhaar card / PAN card / voter ID / resident card, in PDF)",
            "Marriage certificate (if spouse's name is not added in the passport)",
            "Employer-approved leave certificate",
            "Pension statements for the last 3 months (if retired), proof of regular income generated by ownership of property or business",
          ],
        },
        {
          title: "Minor applicants",
          items: [
            "NOC from school/university",
            "Copy of birth certificate",
            "Sponsorship letter & expenses, parents' marriage certificate",
            "Parental authorisation (if minor is travelling alone)",
            "Form 1229 - consent form if a child is under 18 years of age",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Australia files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Ties to home left to the officer to guess", text: "A job, a business, property, family here. The covering letter has to say it, and the documents have to prove it." },
        { tag: "Common", title: "Money that appears just before applying", text: "A large deposit in the last few weeks reads as borrowed. We look at your statements before you lodge, not after." },
        { tag: "Common", title: "Parents' files without the child's side", text: "Your son or daughter's visa or citizenship, address and invitation letter belong in the same application." },
        { tag: "Common", title: "A missing Form 1229", text: "A child travelling with one parent, or with grandparents, needs written consent from the parent who isn't going." },
        { tag: "Common", title: "An undeclared refusal", text: "Any past refusal, for any country. Australia asks, and a hidden one is treated far more seriously than an old one." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Australia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Who's going, roughly when, and whether you're visiting family. WhatsApp is fine." },
        { title: "We send the list", text: "Built for your situation: employed, business, retired or sponsored." },
        { title: "We check and lodge", text: "Every PDF read against the form, then lodged in ImmiAccount." },
        { title: "We answer requests", text: "If the officer asks for more, we reply fast, in the same order." },
        { title: "Until it's decided", text: "Tracked until the grant letter is in your inbox." },
      ],
    },
    alongside: ["New Zealand", "Singapore", "Malaysia", "Japan", "United Kingdom", "Canada"],
    closing: "Tell us when you're going to Australia. We'll send the document list.",
    metaTitle: "Australia Tourist Visa from Kerala",
    metaDescription:
      "Australia tourist visa (Visitor visa subclass 600, tourist stream) for Indian passport holders - a file built from Kerala around the one question the officer asks: why you'll come home.",
  },
  // Azerbaijan tourist visa page.pdf
  {
    slug: "azerbaijan",
    code: "az",
    name: "Azerbaijan",
    title: "Azerbaijan e-Visa",
    region: "Caucasus",
    heroHeading: "ASAN tourist e-Visa, 30 days, single entry",
    heroLead:
      "Most people searching for an Azerbaijan e-Visa are looking for the right website. There are dozens of look-alikes that charge more for the same visa. We apply on the official ASAN portal, check every detail against your passport, and send you the e-Visa to print.",
    facts: [
      { label: "Route", value: "ASAN e-Visa, online", note: "No embassy visit or biometrics" },
      { label: "Stay", value: "Up to 30 days", note: "Single entry" },
      { label: "Processing", value: "3 working days", note: "Urgent option: about 3 hours" },
      { label: "Valid for", value: "90 days from issue", note: "Enter any time in that window" },
    ],
    intro: {
      title: "The official Azerbaijan e-Visa, and the look-alikes",
      body:
        "The official Azerbaijan tourist e-Visa is issued through the ASAN Visa system at evisa.gov.az. Many other sites use \"Azerbaijan e visa\" in their name and add their own charges on top. Some are simply agents; a few don't deliver at all.\n\nIf you apply yourself, use the official portal and check the spelling of every field. If you'd rather not, we apply there for you and our fee is shown separately from the government fee, so you can see exactly what you're paying for.",
    },
    documents: {
      title: "Azerbaijan tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Front and back colour scan copies of new & old passports",
            "Valid passport with a validity of more than three months",
            "Confirmed hotel voucher and itinerary",
            "Invitation letter from the inviting company",
            "Return flight tickets (optional)",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Azerbaijan trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A look-alike website", text: "Paying three times the fee for the same e-Visa, or for nothing at all. Check the address is evisa.gov.az." },
        { tag: "Common", title: "One wrong letter in a name", text: "The e-Visa must match the passport exactly. A typo means a new application and a new fee." },
        { tag: "Common", title: "Staying longer than 10 days without registering", text: "Registration with the migration service is required. Hotels usually do it; private stays don't." },
        { tag: "Common", title: "Armenia on the same route", text: "There's no open land crossing between the two. We plan the route before the visas." },
        { tag: "Common", title: "Passport validity counted from the wrong date", text: "It's three months beyond the e-Visa's expiry, not beyond your trip." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Azerbaijan application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates and who's travelling. A passport photo on WhatsApp is enough to start." },
        { title: "We check the passport", text: "Validity, spelling and photo, before anything is paid." },
        { title: "We apply on ASAN", text: "On the official portal, standard or urgent as you need." },
        { title: "We check the e-Visa", text: "Every field compared against the passport when it arrives." },
        { title: "Before you fly", text: "Printed copy, hotel registration checked for stays over 10 days." },
      ],
    },
    alongside: ["Georgia", "Armenia", "Uzbekistan", "Kyrgyzstan", "Türkiye (Turkey)", "Russia"],
    closing: "Tell us when you're going to Azerbaijan. We'll send the document list.",
    metaTitle: "Azerbaijan Tourist Visa from Kerala",
    metaDescription:
      "Azerbaijan e-Visa for Indian passport holders - the official ASAN tourist e-Visa, 30 days, single entry. We apply on the official portal, not a look-alike, and check every detail against your passport.",
  },
  // Bangladesh tourist visa page.pdf
  {
    slug: "bangladesh",
    code: "bd",
    name: "Bangladesh",
    title: "Bangladesh tourist visa",
    region: "South Asia",
    heroHeading: "Embassy application, online form plus submission",
    heroLead:
      "Bangladesh is close, but its visa isn't an e-Visa. It's a paper file: an online form, printed and signed, submitted with originals. We prepare it complete, tell you which mission covers your address, and confirm current processing before you book.",
    facts: [
      { label: "Route", value: "Visa required", note: "Online form, then submission in person" },
      { label: "Visa fee", value: "Waived for Indians", note: "Service charges still apply" },
      { label: "Processing", value: "About 5–10 working days", note: "Can change at short notice" },
      { label: "Start", value: "3–4 weeks before", note: "Longer around festivals" },
    ],
    intro: {
      title: "How the Bangladesh visa works for an Indian passport",
      body:
        "Indian passport holders need a visa for Bangladesh. The form is filled online at the official Bangladesh visa portal, printed, signed, and submitted with your documents and passport at the Bangladesh mission or visa centre that covers your state. The government visa fee is waived for Indian citizens under a bilateral arrangement.\n\nProcessing and appointment availability for Bangladesh have changed several times since 2024. We confirm the current position, and the right place to submit from Kerala, before you pay anything.",
    },
    documents: {
      title: "Bangladesh tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Filled-in prescribed visa application form",
            "Original passport (minimum 6 months valid) with photocopy",
            "2 recent passport-size colour photographs (white background mandatory)",
            "Proof of residence (Aadhaar card, voter ID, ration card, driving licence or PAN card)",
            "Copy of old passport (if any)",
            "For professionals: proof of profession and \"No Objection Certificate\" from competent authority",
            "If visitor(s) will stay at a Bangladeshi national's residence: copy of that person's ID proof",
            "Copy of professional ID proof",
            "Copy of latest electricity bill",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Bangladesh files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Treating it like an e-Visa", text: "It's a paper submission with originals. Scans alone won't do." },
        { tag: "Common", title: "The wrong mission", text: "Applications go to the mission that covers your address. We tell you which one before you travel for it." },
        { tag: "Common", title: "An NOC that's missing or vague", text: "Professionals and government employees need one, on letterhead, naming the dates." },
        { tag: "Common", title: "A host without ID", text: "If you're staying with family or friends, their national ID copy belongs in the file." },
        { tag: "Common", title: "Photos at the wrong size", text: "Passport-size, white background, recent. Old photos are a common reason to come back." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Bangladesh application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Where in Bangladesh, roughly when, and who you're staying with." },
        { title: "We confirm the route", text: "Current processing, and which mission covers your address." },
        { title: "We fill the form", text: "Online, printed and checked against your passport, line by line." },
        { title: "We submit", text: "Originals in the right order, with photocopies alongside." },
        { title: "Until it's back", text: "Tracked until your passport is in your hand." },
      ],
    },
    alongside: ["Nepal", "Bhutan", "Sri Lanka", "Maldives", "Thailand", "Malaysia"],
    closing: "Tell us when you're going to Bangladesh. We'll send the document list.",
    metaTitle: "Bangladesh Tourist Visa from Kerala",
    metaDescription:
      "Bangladesh tourist visa for Indian passport holders - an online form plus a paper submission with originals. We prepare the file complete, tell you which mission covers your address and confirm current processing.",
  },
  // Brunei tourist visa page.pdf
  {
    slug: "brunei",
    code: "bn",
    name: "Brunei",
    title: "Brunei tourist visa",
    region: "South-East Asia",
    heroLead:
      "Brunei has no visa on arrival and no e-Visa for an Indian passport. It's a paper file, sent with your original passport to the High Commission in New Delhi. We prepare it complete and track it until the passport is back in your hand.",
    facts: [
      { label: "Route", value: "Visa required", note: "Paper file via the High Commission, New Delhi" },
      { label: "Stay", value: "Set on the visa", note: "Ask for the days your itinerary needs" },
      { label: "Processing", value: "About 5 working days", note: "From receipt at the High Commission" },
      { label: "Start", value: "3–4 weeks before", note: "Allow for the passport's journey both ways" },
    ],
    intro: {
      title: "Can you get a Brunei visa on arrival?",
      body:
        "Not on an Indian passport. Brunei issues the visa before you travel, through the High Commission of Brunei Darussalam in New Delhi, on a paper application with your original passport. There is no visa on arrival and no official e-Visa for Indian citizens. Sites offering an \"online Brunei visa\" are agents, not the government.\n\nMost travellers add Brunei to a Malaysia or Singapore trip. Each country on the route has its own rule, so tell us the whole plan and we confirm every leg, and the current position for Brunei, before you book anything.",
    },
    documents: {
      title: "Brunei tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport with at least 6 months validity and minimum 3 blank pages + all old passports, if any",
            "2 scanned recent colour photographs (as per photo specification)",
            "Visa application forms: completed and signed",
            "Personal covering letter: explaining purpose of travel to the country",
            "Original bank statement: stamped & updated for the last 3 months, with bank seal",
            "Air tickets: proof of return flight tickets from and back to your home country",
            "Hotel reservation: proof of accommodation for your entire stay",
            "Travel itinerary: day-wise plan outlining all elements of the trip",
            "Travel insurance: covering the entire duration of the trip",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Brunei trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Expecting a visa on arrival", text: "There isn't one for Indian passports. Without the visa in hand, the airline won't board you." },
        { tag: "Common", title: "Flights booked before the passport is back", text: "Your original passport goes to New Delhi. Leave room for it to come home before you fly." },
        { tag: "Common", title: "Insurance that stops short", text: "The policy has to cover the whole trip, from the day you leave to the day you're home." },
        { tag: "Common", title: "An itinerary that doesn't match the bookings", text: "The dates in the covering letter, the hotels and the flights have to agree exactly." },
        { tag: "Common", title: "A bank statement without the seal", text: "Stamped and signed by the branch, and updated. A plain printout isn't enough." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Brunei application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, and whether Brunei is part of a Malaysia or Singapore trip." },
        { title: "We send the list", text: "Only what Brunei needs for your trip, nothing extra." },
        { title: "We check the file", text: "Every document read against the form and the itinerary." },
        { title: "We submit in New Delhi", text: "The file and original passport lodged with the High Commission." },
        { title: "Until it's back", text: "Tracked until your passport is in your hand, visa inside." },
      ],
    },
    closing: "Tell us when you're going to Brunei. We'll send the document list.",
    metaTitle: "Brunei Tourist Visa from Kerala",
    metaDescription:
      "Brunei tourist visa for Indian passport holders - no visa on arrival and no e-Visa, so it's a paper file sent with your original passport to the High Commission in New Delhi. We prepare it complete and track it back.",
  },
  // Cambodia tourist visa page.pdf
  {
    slug: "cambodia",
    code: "kh",
    name: "Cambodia",
    title: "Cambodia tourist visa",
    region: "South-East Asia",
    heroLead:
      "Cambodia is one of the simplest visas an Indian passport can get: a passport scan and a photo. What usually goes wrong is the website, not the file. We apply on the official e-Visa portal and send you the visa to print before you fly.",
    facts: [
      { label: "Route", value: "e-Visa, online", note: "Visa on arrival also available" },
      { label: "Stay", value: "Up to 30 days", note: "Single entry" },
      { label: "Processing", value: "About 3 working days", note: "Apply at least a week ahead" },
      { label: "Valid for", value: "3 months from issue", note: "Enter any time in that window" },
    ],
    intro: {
      title: "e-Visa or visa on arrival?",
      body:
        "Indian passport holders can apply for a Cambodia e-Visa online before travelling, or get a tourist visa on arrival at the international airports and main land borders. Both give a single entry and a stay of up to 30 days. We recommend the e-Visa: no queue, no US dollars in cash, and the answer is in your hand before you board.\n\nThe official e-Visa is issued at evisa.gov.kh. Other sites use \"Cambodia e-Visa\" in their name and add their own charges on top. If you'd rather not apply yourself, we apply there for you and our fee is shown separately from the government fee.",
    },
    documents: {
      title: "Cambodia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [{ title: "Documents", items: ["Passport scan copy", "Recent photograph"] }],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Cambodia trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A look-alike website", text: "Paying more for the same e-Visa, or for nothing at all. Check the address is evisa.gov.kh." },
        { tag: "Common", title: "Passport too close to expiry", text: "Six months from the day you arrive, not from the day you apply." },
        { tag: "Common", title: "A photo that fails the portal", text: "The e-Visa photo has its own specification. A rejected upload costs days." },
        { tag: "Common", title: "Thailand or Vietnam assumed", text: "A Cambodia visa covers Cambodia only. Every border on the route needs its own answer." },
        { tag: "Common", title: "Staying past 30 days", text: "Overstay is charged for every extra day when you leave. Extend inside Cambodia before day 30." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Cambodia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, and whether Thailand or Vietnam is part of it." },
        { title: "We check the passport", text: "Validity and photo, before anything is paid." },
        { title: "We apply online", text: "On the official e-Visa portal, nowhere else." },
        { title: "We check the e-Visa", text: "Every field compared against the passport when it arrives." },
        { title: "Before you fly", text: "Printed copy, and anything else needed on arrival sorted." },
      ],
    },
    closing: "Tell us when you're going to Cambodia. We'll send the document list.",
    metaTitle: "Cambodia Tourist Visa from Kerala",
    metaDescription:
      "Cambodia tourist visa for Indian passport holders - an e-Visa online or visa on arrival, 30 days, single entry. We apply on the official evisa.gov.kh portal and send you the visa to print before you fly.",
  },

  // Canada_tourist_visa_page.pdf
  {
    slug: "canada",
    code: "ca",
    name: "Canada",
    title: "Canada visitor visa",
    region: "North America",
    heroLead:
      "Canada decides visitor visas on the file, usually without an interview. The file is long: your money, your work, your family, and often your sponsor's side too. We build it from Kerala so every document tells the same story, then take you through biometrics.",
    facts: [
      { label: "Route", value: "Online application", note: "Biometrics at VFS Chennai or Bengaluru" },
      { label: "Stay", value: "Up to 6 months a visit", note: "The border officer decides" },
      { label: "Processing", value: "Weeks to months", note: "Starts after biometrics; changes weekly" },
      { label: "Start", value: "3–4 months before", note: "Longer for summer and December" },
    ],
    intro: {
      title: "With a sponsor, or without one?",
      body: "Most Canada visitor files from Kerala are family visits: parents going to a son or daughter, relatives travelling for a wedding or a new baby. Those files carry a second set of documents from the person in Canada: an invitation letter, their status there, their income and their address.\n\nTravelling as a tourist with no one inviting you? The sponsor documents drop out, and a hotel booking and a day-by-day itinerary take their place. Everything asked of you stays the same, so tell us early which kind of trip it is.",
    },
    documents: {
      title: "Canada visitor visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "From the applicant",
          items: [
            "Original passport with minimum 6 months validity",
            "Old passports (if any)",
            "Photos: 3.5 × 4.5 cm, white background, 80% face close-up (3 nos)",
            "Bank statements: 6 months, updated, with sufficient funds, bank seal and sign",
            "Income tax returns: last 3 years (if applicable)",
            "If retired: retirement papers, pension-receiving bank statement, etc.",
            "If employed: employment and leave sanction letter, last 6 months' salary slips",
            "If self-employed: company registration certificate, 3 months' company bank statement and 3 years' company IT papers",
            "Fixed deposit copies (if any)",
            "Property documents with notarised English translation (if any)",
            "Asset value certificate from a chartered accountant",
          ],
        },
        {
          title: "From the sponsor in Canada",
          items: [
            "Invitation letter from Canada. For Chennai VFS, address it to The Visa Officer, Canadian High Commission, Chennai. For Bengaluru VFS, to The Visa Officer, Consulate General of Canada, Bengaluru. For New Delhi VFS, to The Visa Officer, Consulate General of Canada, New Delhi.",
            "Passport copy + Permanent Resident card copy. If the sponsor is a Canadian citizen: OCI card copy or cancelled Indian passport copy",
            "Employment letter",
            "Salary slips: last 6 months",
            "Bank statements: 6 months, updated, with sufficient balance",
            "Notice of Assessment: last 3 years",
            "Latest month's utility bill (address proof)",
            "Tenancy agreement",
          ],
        },
        {
          title: "Details for the application form",
          items: [
            "Education: highest qualification, year of passing, institution name",
            "Job or business details",
            "Family information form (must be filled in by the applicant)",
          ],
        },
        {
          title: "Travelling without a sponsor",
          items: [
            "Hotel accommodation for the entire stay",
            "Travel itinerary: day-wise plan of the trip",
          ],
        },
        {
          title: "Good to know",
          items: [
            "Biometrics are given in person at VFS, with a prior appointment. The closest centres are Chennai and Bengaluru",
            "The visa office may ask for additional documents, or for you to attend in person, while processing",
            "It may also call for a medical, done at KIMS Trivandrum or ND Diagnostics, Kochi",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Canada files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "An invitation letter to the wrong office",
          text: "Chennai, Bengaluru and New Delhi files each go to their own office. Match the letter to your VFS.",
        },
        {
          tag: "Common",
          title: "Money that appears just before applying",
          text: "Six months of statements are read as a whole. A large recent deposit reads as borrowed.",
        },
        {
          tag: "Common",
          title: "A sponsor whose papers don't agree",
          text: "The address on the letter, the utility bill and the tenancy agreement have to be the same.",
        },
        {
          tag: "Common",
          title: "Property papers left untranslated",
          text: "Deeds need a notarised English translation, and the CA's certificate should value them.",
        },
        {
          tag: "Common",
          title: "Biometrics left too late",
          text: "Nothing is processed until they're given. Book VFS as soon as the instruction letter arrives.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Canada application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Who's going, who's inviting, and roughly when." },
        { title: "We send two lists", text: "One for you, one for your sponsor in Canada." },
        { title: "We check and lodge", text: "Forms filled, every document read, then lodged online." },
        { title: "Biometrics at VFS", text: "Chennai or Bengaluru, with the appointment booked for you." },
        {
          title: "Until it's decided",
          text: "Requests for documents or a medical answered fast, tracked to the decision.",
        },
      ],
    },
    closing: "Tell us when you're going to Canada. We'll send the document list.",
    metaTitle: "Canada Visitor Visa from Kerala",
    metaDescription:
      "Canada visitor visa from Kerala - the applicant's and the sponsor's documents built into one consistent file, lodged online, with biometrics at VFS Chennai or Bengaluru.",
  },
  // China_tourist_visa_page.pdf
  {
    slug: "china",
    code: "cn",
    name: "China",
    title: "China tourist visa",
    region: "East Asia",
    heroLead:
      "China has no e-Visa and no visa on arrival for an Indian passport. It's an online form, then a paper file with your original passport at the Chinese visa centre. Most files that come back do so because of the bank statement, so we check that first.",
    facts: [
      { label: "Route", value: "Visa required", note: "Online form, then submission at the visa centre" },
      { label: "Stay", value: "Set on the visa", note: "Usually 30 days a visit" },
      { label: "Processing", value: "About 45 days", note: "After submission; express costs extra" },
      { label: "Start", value: "2 months before", note: "The bank balance has to be in place for 6 months" },
    ],
    intro: {
      title: "What China looks for in your bank statement",
      body: "China reads the last 6 months, not just today's balance. We ask for ₹1,00,000 per traveller, held through all 6 months: ₹2,00,000 for two people. Money deposited just before applying doesn't count.\n\nEvery page needs the bank's seal and signature. If the statement shows your name shortened or abbreviated, the bank has to confirm in writing that the account is yours, and you'll need an affidavit saying the same. Tell us early if your statement uses a short name.",
    },
    documents: {
      title: "China tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport, plus old passports",
            "2 photographs, white background",
            "Hotel booking in China, with seal and sign",
            "Flight tickets, both ways",
            "Itinerary for the whole trip",
          ],
        },
        {
          title: "Bank statement",
          items: [
            "Last 6 months, with bank seal and sign on every page",
            "₹1,00,000 per person, maintained for all 6 months",
            "For 2 people, ₹2,00,000 maintained for 6 months",
            "If the statement shows a short name: a confirmation letter from the bank, and an affidavit",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where China files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "A balance that arrived last month",
          text: "The ₹1,00,000 has to be there across all 6 months, not topped up just before applying.",
        },
        {
          tag: "Common",
          title: "One page without the seal",
          text: "Seal and signature on every page. A single unsealed page can send the file back.",
        },
        {
          tag: "Common",
          title: "A short name on the statement",
          text: "\"K. Thomas\" isn't \"Kurian Thomas\". Bank letter and affidavit, or it won't be accepted.",
        },
        {
          tag: "Common",
          title: "A hotel booking without seal and sign",
          text: "China asks for the booking to be stamped and signed, not only an online confirmation.",
        },
        {
          tag: "Common",
          title: "Old passports left at home",
          text: "Previous passports are part of the file. Bring every one you've held.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your China application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, cities, and how many are travelling." },
        { title: "We check the statement", text: "Balance, seal and name, before anything else." },
        { title: "We fill the form", text: "Online, then printed and checked against your passport." },
        { title: "We submit", text: "Originals lodged at the Chinese visa centre." },
        { title: "Until it's back", text: "Tracked until your passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to China. We'll send the document list.",
    metaTitle: "China Tourist Visa from Kerala",
    metaDescription:
      "China tourist visa from Kerala - no e-Visa or visa on arrival for Indian passports, so we check the 6-month bank statement first, then file the online form and paper application at the Chinese visa centre.",
  },
  // Egypt tourist visa page.pdf
  {
    slug: "egypt",
    code: "eg",
    name: "Egypt",
    title: "Egypt tourist visa",
    region: "North Africa",
    heroLead:
      "For most Indian travellers, Egypt is an e-Visa: a passport copy, a photo and your travel date. We apply on the official portal and send you the visa to print before you fly.",
    facts: [
      { label: "Route", value: "e-Visa, online", note: "No embassy visit" },
      { label: "Stay", value: "Up to 30 days", note: "Single or multiple entry" },
      { label: "Processing", value: "About 5–7 working days", note: "Apply at least 2 weeks ahead" },
      { label: "Start", value: "2–3 weeks before", note: "Earlier for December and Ramadan" },
    ],
    intro: {
      title: "e-Visa or visa on arrival?",
      body: "Egypt's visa on arrival is only open to some Indian passport holders, for example those with a valid US, UK or Schengen visa. Everyone else should arrive with an e-Visa, applied for online before travel.\n\nThe official e-Visa is issued at visa2egypt.gov.eg. Other sites use \"Egypt e-Visa\" in their name and add their own charges. We apply on the official portal, and confirm the current rules for your passport before you book.",
    },
    documents: {
      title: "Egypt tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        { title: "Documents", items: ["Passport copy", "Photograph"] },
        { title: "Information needed", items: ["Travel date"] },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Egypt trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "Counting on a visa on arrival",
          text: "It depends on what other visas you hold. Without one, the airline may not board you.",
        },
        {
          tag: "Common",
          title: "A look-alike website",
          text: "Paying more for the same e-Visa, or for nothing. Check the address is visa2egypt.gov.eg.",
        },
        {
          tag: "Common",
          title: "Passport too close to expiry",
          text: "Six months from the day you arrive, not from the day you apply.",
        },
        {
          tag: "Common",
          title: "The wrong travel date",
          text: "The e-Visa is tied to your dates. Book flights first, then apply.",
        },
        {
          tag: "Common",
          title: "Applying the week before",
          text: "Processing can take longer than expected. Two weeks ahead is safer.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Egypt application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Travel date, and who's going." },
        { title: "We check the passport", text: "Validity and photo, before anything is paid." },
        { title: "We apply online", text: "On the official e-Visa portal, nowhere else." },
        { title: "We check the e-Visa", text: "Every field compared against the passport when it arrives." },
        { title: "Before you fly", text: "Printed copy in hand, ready for immigration." },
      ],
    },
    closing: "Tell us when you're going to Egypt. We'll send the document list.",
    metaTitle: "Egypt Tourist Visa from Kerala",
    metaDescription:
      "Egypt e-Visa from Kerala - a passport copy, a photo and your travel date. We apply on the official portal, visa2egypt.gov.eg, and send you the visa to print before you fly.",
  },
  // Ethiopia tourist visa page.pdf
  {
    slug: "ethiopia",
    code: "et",
    name: "Ethiopia",
    title: "Ethiopia tourist visa",
    region: "East Africa",
    heroLead:
      "Ethiopia issues tourist e-Visas online for Indian passports. The file is short, but the photo, the accommodation and the flight plan all have to match. We apply on the official portal and send you the visa before you fly.",
    facts: [
      { label: "Route", value: "e-Visa, online", note: "For arrival at Addis Ababa Bole airport" },
      { label: "Stay", value: "30 or 90 days", note: "Choose when you apply" },
      { label: "Processing", value: "About 3 working days", note: "Allow up to a week" },
      { label: "Start", value: "2–3 weeks before", note: "Longer if an invitation letter is needed" },
    ],
    intro: {
      title: "Where the Ethiopia e-Visa works",
      body: "The tourist e-Visa is used when you fly into Addis Ababa Bole International Airport. If you plan to enter by land or through another airport, tell us first: that route needs a different answer.\n\nAlso check whether you need a yellow fever vaccination certificate. It's required if you arrive from, or transit through, a country with yellow fever risk. We check this against your route when we plan the file.",
    },
    documents: {
      title: "Ethiopia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Valid passport: at least 6 months from the date of entry",
            "Photograph: recent, passport-sized, as per Ethiopia visa photo specifications",
            "Completed application form, with all details filled in",
            "Supporting documents, depending on visa type: invitation letter, enrolment letter or employment contract",
            "Proof of accommodation: hotel bookings or a letter from the host",
            "Travel itinerary: flight bookings and travel plans",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Ethiopia trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "Entering somewhere other than Bole",
          text: "The tourist e-Visa is for arrival at Addis Ababa. Land borders need their own plan.",
        },
        {
          tag: "Common",
          title: "A photo that fails the portal",
          text: "Ethiopia has its own photo specification. A rejected upload costs days.",
        },
        {
          tag: "Common",
          title: "No yellow fever certificate",
          text: "Required if your route touches a yellow fever risk country, including transit.",
        },
        {
          tag: "Common",
          title: "A host letter without details",
          text: "The host's name, address and contact number, and the dates you'll stay.",
        },
        {
          tag: "Common",
          title: "Passport too close to expiry",
          text: "Six months from the day you enter, not from the day you apply.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Ethiopia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, route, and where you're staying." },
        { title: "We check the file", text: "Passport, photo and bookings, before anything is paid." },
        { title: "We apply online", text: "On the official e-Visa portal." },
        { title: "We check the e-Visa", text: "Every field compared against the passport when it arrives." },
        { title: "Before you fly", text: "Printed copy, and yellow fever card if your route needs it." },
      ],
    },
    closing: "Tell us when you're going to Ethiopia. We'll send the document list.",
    metaTitle: "Ethiopia Tourist Visa from Kerala",
    metaDescription:
      "Ethiopia tourist e-Visa from Kerala - a short file where the photo, accommodation and flight plan all have to match. We apply on the official portal and check the yellow fever rule for your route.",
  },
  // Georgia tourist visa page.pdf
  {
    slug: "georgia",
    code: "ge",
    name: "Georgia",
    title: "Georgia tourist visa",
    region: "Caucasus",
    heroLead:
      "Georgia's e-Visa is fully online, but it's strict. The bank statement has to be the original online PDF, and the photo has to meet an exact specification. We check both before we apply on the official portal.",
    facts: [
      { label: "Route", value: "e-Visa, online", note: "No embassy visit" },
      { label: "Stay", value: "Up to 30 days", note: "Within the visa's validity" },
      { label: "Processing", value: "At least 5 working days", note: "Longer from June to August" },
      { label: "Start", value: "3–4 weeks before", note: "More in the summer peak" },
    ],
    intro: {
      title: "The photo and the statement decide most Georgia files",
      body: "The bank statement must be the online PDF downloaded from your bank's app or website for the last 6 months, not a scan of a printed statement. The balance should comfortably cover your flights, hotel and spending.\n\nThe photo is where most refusals start. It must be a digital photo, 472 × 591 pixels, taken in the last 6 months, on a white background, with no border, both ears visible and no glare on glasses. The visa may be rejected if the photo is not as per specification.\n\nAlready hold a valid US, UK or Schengen visa or residence permit? You may be able to enter Georgia without a visa. Tell us what you hold and we'll check.",
    },
    documents: {
      title: "Georgia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Clear scanned copy of passport first and last page, in PDF format",
            "Online bank statement for the last 6 months: the PDF downloaded from your bank's app or website, not a scanned copy. Healthy balance to cover air fare, hotel and other expenses",
            "Scanned copies of other countries' visas stamped in your passport (old and new passports)",
            "Personal cover letter: on company letterhead if you own a business, otherwise on plain paper",
            "Proof of business, if you own a business",
            "For minors: birth certificate as well",
          ],
        },
        {
          title: "Photograph (JPEG)",
          items: [
            "Digital photo, 472 × 591 pixels; if scanned, 4 × 5 cm at 300 DPI",
            "Clear, recent: taken in the last 6 months",
            "White background, no border or frame",
            "Full face, front view, eyes open, both ears visible",
            "No head covering (except for religious reasons)",
            "If wearing glasses: no glare, both eyes clearly visible",
            "The visa may be rejected if the photo is not as per specification",
          ],
        },
        {
          title: "Aadhaar linkage (optional)",
          items: [
            "Aadhaar card number",
            "The OTP sent to the Aadhaar holder's mobile when we enter it on the portal",
          ],
        },
        { title: "Information needed", items: ["Intended date of arrival in Georgia"] },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Georgia files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "A scanned bank statement",
          text: "Georgia wants the online PDF from your bank's app or website. A scan of a printout gets refused.",
        },
        {
          tag: "Common",
          title: "A photo off by a detail",
          text: "Wrong size, off-white background, an ear hidden, glare on glasses. Each one can refuse the visa.",
        },
        {
          tag: "Common",
          title: "Other visas left out",
          text: "Scans of every visa stamped in your old and new passports belong in the file.",
        },
        {
          tag: "Common",
          title: "No cover letter",
          text: "Business owners on letterhead, with proof of business. Everyone else on plain paper.",
        },
        {
          tag: "Common",
          title: "Applying in the summer rush",
          text: "June to August takes longer. Apply early if you travel then.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Georgia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Arrival date, and who's going." },
        { title: "We check the photo", text: "Against Georgia's specification, before anything else." },
        { title: "We check the file", text: "Statement, passport and visas, page by page." },
        { title: "We apply online", text: "On the official e-Visa portal, with Aadhaar OTP if you choose." },
        { title: "Before you fly", text: "e-Visa checked and printed, ready for immigration." },
      ],
    },
    closing: "Tell us when you're going to Georgia. We'll send the document list.",
    metaTitle: "Georgia Tourist Visa from Kerala",
    metaDescription:
      "Georgia e-Visa from Kerala - fully online but strict. We check the online PDF bank statement and the exact photo specification before we apply on the official portal.",
  },
  // Hong_Kong_tourist_visa_page.pdf
  {
    slug: "hong-kong",
    code: "hk",
    name: "Hong Kong",
    title: "Hong Kong tourist visa",
    region: "East Asia",
    heroLead:
      "Indian passports don't need a visa for a short Hong Kong holiday. They need Pre-arrival Registration: an online form on the Immigration Department's website, completed before you fly. We fill it in and send you the slip to print and sign.",
    facts: [
      { label: "Route", value: "Pre-arrival Registration", note: "Online, before you travel" },
      { label: "Stay", value: "Up to 14 days", note: "Each visit" },
      { label: "Processing", value: "Usually instant", note: "Result shown online" },
      { label: "Valid for", value: "6 months", note: "Multiple visits in that time" },
    ],
    intro: {
      title: "Visa or Pre-arrival Registration?",
      body: "For stays of up to 14 days, Indian passport holders visit Hong Kong visa-free once they have completed Pre-arrival Registration (PAR) on the Hong Kong Immigration Department's website. The government charges no fee. The registration is valid for 6 months and covers several visits in that time.\n\nYou must print the notification slip on plain A4 paper, sign it, and show it with the same passport at check-in and at immigration. Without it you can be refused boarding. If the registration isn't successful, or you plan to stay longer than 14 days, you need an entry visa instead. We tell you which applies before you book.",
    },
    documents: {
      title: "Hong Kong tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Passport copy",
            "Photo",
            "Bank statement (only if asked): Not needed in every case. If you are working, it is your salary account statement.",
            "Ticket itinerary",
            "Hotel accommodation",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Hong Kong trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "Flying without the printed slip",
          text: "The signed A4 slip and the same passport are checked at boarding. A phone screenshot isn't enough.",
        },
        {
          tag: "Common",
          title: "A new passport after registering",
          text: "The registration is tied to the passport you used. A new passport needs a new registration.",
        },
        {
          tag: "Common",
          title: "Staying past 14 days",
          text: "Longer stays need an entry visa, applied for in advance.",
        },
        {
          tag: "Common",
          title: "Paying a look-alike website",
          text: "The government charges nothing. Other sites charge for the same form.",
        },
        {
          tag: "Common",
          title: "Assuming it covers mainland China",
          text: "Hong Kong and mainland China have separate rules. China needs its own visa.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Hong Kong application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, and whether Macau or China is part of it." },
        { title: "We check the passport", text: "Six months' validity, before anything else." },
        { title: "We register online", text: "On the Immigration Department's website." },
        { title: "We send the slip", text: "Ready to print on A4 and sign." },
        { title: "Before you fly", text: "Slip, passport, ticket and hotel booking together." },
      ],
    },
    closing: "Tell us when you're going to Hong Kong. We'll send the document list.",
    metaTitle: "Hong Kong Tourist Visa from Kerala",
    metaDescription:
      "Hong Kong for Indian passports - no visa for stays up to 14 days, but Pre-arrival Registration is required. We complete it on the Immigration Department's website and send you the slip to print and sign.",
  },
  // Indonesia_tourist_visa_page.pdf
  {
    slug: "indonesia",
    code: "id",
    name: "Indonesia",
    title: "Indonesia tourist visa",
    region: "South-East Asia",
    heroLead:
      "Indian passports need a visa for Indonesia, but it's one of the easiest: an e-Visa on Arrival, applied for online before you fly. Four documents, and we apply on the official immigration portal so you land in Bali with the visa already approved.",
    facts: [
      { label: "Route", value: "e-Visa on Arrival", note: "Online, before you fly" },
      { label: "Stay", value: "Up to 30 days", note: "Extendable once, inside Indonesia" },
      { label: "Processing", value: "Approved on payment", note: "Usually within minutes" },
      { label: "Start", value: "A few days before", note: "Book flights and hotel first" },
    ],
    intro: {
      title: "e-VOA, or visa on arrival at the airport?",
      body: "Indian passport holders can apply for the e-Visa on Arrival (e-VOA) online before travel, or buy a visa on arrival at the airport. Both give 30 days, extendable once. We recommend applying online: you skip the airport queue, and the visa is approved right after payment.\n\nThe official portal is evisa.imigrasi.go.id. Other sites charge extra for the same visa. Going to Bali? There is also a separate Bali tourist levy, paid online or on arrival.",
    },
    documents: {
      title: "Indonesia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: ["Passport copy", "Photo", "Ticket copy", "Hotel accommodation"],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Indonesia trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "Passport too close to expiry",
          text: "Six months from the day you arrive. Airlines check this before boarding.",
        },
        {
          tag: "Common",
          title: "A look-alike website",
          text: "Paying more for the same e-VOA. The official address ends in imigrasi.go.id.",
        },
        {
          tag: "Common",
          title: "No return ticket",
          text: "A ticket out of Indonesia is part of the file. A one-way booking can be refused.",
        },
        {
          tag: "Common",
          title: "Forgetting the Bali levy",
          text: "It's separate from the visa. Pay it before you land to save time.",
        },
        {
          tag: "Common",
          title: "Staying past 30 days",
          text: "Overstay is charged per day at the airport. Extend before day 30.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Indonesia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, and whether it's Bali, Jakarta or both." },
        { title: "We check the passport", text: "Validity and photo, before anything is paid." },
        { title: "We apply online", text: "On the official immigration portal." },
        { title: "We check the e-VOA", text: "Every field compared against the passport." },
        { title: "Before you fly", text: "e-VOA and Bali levy sorted, copies printed." },
      ],
    },
    closing: "Tell us when you're going to Indonesia. We'll send the document list.",
    metaTitle: "Indonesia Tourist Visa from Kerala",
    metaDescription:
      "Indonesia e-Visa on Arrival from Kerala - four documents, applied for online on the official immigration portal so you land in Bali with the visa already approved.",
  },

  // Iraq tourist visa page.pdf
  {
    slug: "iraq",
    code: "iq",
    name: "Iraq",
    title: "Iraq tourist visa",
    region: "Middle East",
    heroLead: "Indian passports need a visa before travelling to Iraq; visa on arrival has been stopped. Most of our Iraq files are pilgrimages to Karbala and Najaf. We prepare the e-Visa file, and check your route and the Indian government's travel advisory before you book.",
    facts: [
      {
        label: "Route",
        value: "e-Visa, online",
        note: "Approved before you fly",
      },
      {
        label: "Stay",
        value: "Up to 30 days",
        note: "Each visit",
      },
      {
        label: "Processing",
        value: "About 3–5 working days",
        note: "Longer around Arbaeen and Muharram",
      },
      {
        label: "Start",
        value: "3–4 weeks before",
        note: "6–8 weeks for pilgrimage season",
      },
    ],
    intro: {
      title: "Before you plan an Iraq trip",
      body: "Indian passport holders apply for an Iraq e-Visa online and travel with the approval in hand. Visa on arrival is no longer available for Indian citizens.\n\nThe Kurdistan Region (Erbil, Sulaymaniyah, Duhok) has its own entry rules, and India's Ministry of External Affairs advises against travel to some provinces. Send us every city on your route and we check them all before anything is booked.",
    },
    documents: {
      title: "Iraq tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Indian passport valid for 6+ months, with blank pages",
            "Iraq visa application form, fully filled online",
            "Passport photographs as per Iraq visa photo specifications: 35 × 45 mm, white background, 70–80% face",
            "Proof of accommodation: hotel booking or invitation",
            "Travel itinerary with booked flights; internal travel may need bus tickets booked online",
            "Bank statements showing sufficient funds",
            "Travel insurance (highly recommended)",
            "Copy of prepaid roaming SIM or local connectivity documentation",
            "For student, employment or business visas: acceptance or employment letter, sponsor details, approval letter, etc.",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Iraq trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "Expecting a visa on arrival",
          text: "It's no longer available for Indian passports. Without the e-Visa, the airline won't board you.",
        },
        {
          tag: "Common",
          title: "A route into the Kurdistan Region",
          text: "Erbil, Sulaymaniyah and Duhok follow separate rules. Check before you book.",
        },
        {
          tag: "Common",
          title: "Pilgrimage season left too late",
          text: "Arbaeen and Muharram bring huge demand. Apply weeks ahead, not days.",
        },
        {
          tag: "Common",
          title: "Internal travel not planned",
          text: "Bus tickets between cities may need booking online in advance. Add them to the itinerary.",
        },
        {
          tag: "Common",
          title: "A photo off specification",
          text: "35 × 45 mm, white background, face filling 70–80% of the frame.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Iraq application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, every city, and whether it's a pilgrimage group.",
        },
        {
          title: "We check the route",
          text: "Against current entry rules and travel advisories.",
        },
        {
          title: "We fill the form",
          text: "Online, checked against your passport line by line.",
        },
        {
          title: "We apply",
          text: "With every supporting document attached.",
        },
        {
          title: "Before you fly",
          text: "e-Visa checked and printed, with insurance and SIM sorted.",
        },
      ],
    },
    closing: "Tell us when you're going to Iraq. We'll send the document list.",
    metaTitle: "Iraq Tourist Visa from Kerala",
    metaDescription: "Iraq e-Visa for Indian passports from Kerala - visa on arrival has stopped, so we prepare the e-Visa file for Karbala and Najaf pilgrimages and check your route against the travel advisory before you book.",
  },
  // Japan tourist visa page.pdf
  {
    slug: "japan",
    code: "jp",
    name: "Japan",
    title: "Japan tourist visa",
    region: "East Asia",
    heroLead: "Japan's visa file is neat and exact: every copy on A4, an itinerary with hotels and contacts, and your income shown clearly. We prepare it to that standard from Kerala and submit it through the visa application centre, with your passport tracked until it's back.",
    facts: [
      {
        label: "Route",
        value: "Visa required",
        note: "Submitted through the visa application centre",
      },
      {
        label: "Stay",
        value: "Up to 15–30 days",
        note: "Single entry, set on the visa",
      },
      {
        label: "Processing",
        value: "About 5–10 working days",
        note: "From submission",
      },
      {
        label: "Start",
        value: "4–6 weeks before",
        note: "Longer for cherry blossom and autumn",
      },
    ],
    intro: {
      title: "What Japan expects from a tourist file",
      body: "Japan asks for a day-by-day itinerary that includes where you'll stay and how to contact you, alongside your flight or cruise schedule. It must agree with your hotel bookings exactly.\n\nYour latest Income Tax Return shows how you're paying for the trip. If you don't have one, the last 6 months' bank statement takes its place. Students and dependents need a parent's or spouse's consent and their ITR or statement.\n\nDocuments submitted are not returned, except the passport. The embassy may ask for an interview or more documents depending on your circumstances.",
    },
    documents: {
      title: "Japan tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Valid passport with more than two blank pages, plus old passports, if any",
            "Photocopy of the bio-data page of the current passport (first and last page)",
            "Visa application form, completely filled and signed",
            "One photograph taken within the last 6 months: passport size, white background, printed on good quality paper",
            "Covering letter (if any special explanation is needed)",
            "Document showing the flight / cruise schedule to and from Japan",
            "Itinerary in Japan, including hotel information and contact details while in Japan",
            "Latest Income Tax Return (if not available, bank statement for the last 6 months)",
          ],
        },
        {
          title: "Students and dependents",
          items: [
            "Consent from parents / spouse",
            "Latest Income Tax Return of parents / spouse (if not available, bank statement for the last 6 months)",
            "Proof of relationship if accompanied by a dependent: passport copy, marriage certificate, birth certificate",
          ],
        },
        {
          title: "Good to know",
          items: [
            "All photocopies should be on A4 size only",
            "The embassy may ask for an interview or additional documents depending on your circumstances",
            "Documents submitted will not be returned (except the passport)",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Japan files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "Copies on the wrong paper",
          text: "Every photocopy on A4. Anything else can be sent back.",
        },
        {
          tag: "Common",
          title: "An itinerary without contacts",
          text: "Japan wants hotel names, addresses and a phone number for each night.",
        },
        {
          tag: "Common",
          title: "A photo printed at home",
          text: "Good quality photo paper, white background, taken in the last 6 months.",
        },
        {
          tag: "Common",
          title: "Dependents without consent",
          text: "Students and dependents need a signed consent and the sponsor's ITR.",
        },
        {
          tag: "Common",
          title: "Originals you wanted back",
          text: "Only the passport comes back. Submit copies of anything you need to keep.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Japan application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, cities, and who's travelling.",
        },
        {
          title: "We build the itinerary",
          text: "Day by day, with hotels and contacts.",
        },
        {
          title: "We check the file",
          text: "Every page on A4, every date matching.",
        },
        {
          title: "We submit",
          text: "At the visa application centre, with originals.",
        },
        {
          title: "Until it's back",
          text: "Tracked until your passport is in your hand.",
        },
      ],
    },
    closing: "Tell us when you're going to Japan. We'll send the document list.",
    metaTitle: "Japan Tourist Visa from Kerala",
    metaDescription: "Japan tourist visa from Kerala - every copy on A4, a day-by-day itinerary with hotels and contacts, and your income shown clearly, submitted through the visa application centre and tracked until your passport is back.",
  },
  // Jordan tourist visa page.pdf
  {
    slug: "jordan",
    code: "jo",
    name: "Jordan",
    title: "Jordan tourist visa",
    region: "Middle East",
    heroLead: "Petra, Wadi Rum and the Dead Sea make Jordan an easy trip to plan and a careful visa to file. We prepare the application with your cover letter, finances and bookings all telling the same story, and confirm the best route for your passport before you book.",
    facts: [
      {
        label: "Route",
        value: "Visa before travel",
        note: "Online or through the embassy",
      },
      {
        label: "Stay",
        value: "Up to 30 days",
        note: "Single entry",
      },
      {
        label: "Processing",
        value: "About 3–5 working days",
        note: "Allow longer in peak season",
      },
      {
        label: "Start",
        value: "3–4 weeks before",
        note: "Earlier for group tours",
      },
    ],
    intro: {
      title: "Visa before you go, or the Jordan Pass?",
      body: "Depending on your route and how long you stay, Indian travellers may be able to get a visa on arrival or use the Jordan Pass, which includes Petra and other sites and can cover the visa fee. The rules for Indian passports change, so we confirm the current position before you book.\n\nWhere a visa is needed in advance, the file below is what Jordan asks for. The cover letter matters most: purpose, day-by-day plan, and your ties to India.",
    },
    documents: {
      title: "Jordan tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Passport valid 6+ months beyond intended stay, with 2 blank pages",
            "Recent biometric photograph (35 × 45 mm, white background)",
            "Completed tourist visa application form for Jordan",
            "Confirmed round-trip flight itinerary and accommodation proof",
            "Bank statements (3–6 months) and last 2 years' ITR",
            "Employer NOC or business registration proof",
            "Travel medical insurance for the trip duration",
            "Cover letter explaining purpose, itinerary and ties to India",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Jordan files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "A cover letter that says nothing",
          text: "Purpose, itinerary and why you'll return. A single line isn't a cover letter.",
        },
        {
          tag: "Common",
          title: "An NOC without dates",
          text: "The employer letter should name your leave dates and say you're returning to work.",
        },
        {
          tag: "Common",
          title: "Insurance that stops short",
          text: "The policy has to cover the whole trip, first day to last.",
        },
        {
          tag: "Common",
          title: "Crossing from Israel without checking",
          text: "Some border crossings don't issue visas. Check the route before you book.",
        },
        {
          tag: "Common",
          title: "Money that appears just before applying",
          text: "Bank statements are read as a whole. A sudden large deposit raises questions.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Jordan application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, and whether it's a group tour or independent.",
        },
        {
          title: "We confirm the route",
          text: "Visa in advance, on arrival, or Jordan Pass.",
        },
        {
          title: "We write the cover letter",
          text: "With you, matching every other document.",
        },
        {
          title: "We apply",
          text: "Form filled and every document checked.",
        },
        {
          title: "Before you fly",
          text: "Visa, insurance and bookings printed together.",
        },
      ],
    },
    closing: "Tell us when you're going to Jordan. We'll send the document list.",
    metaTitle: "Jordan Tourist Visa from Kerala",
    metaDescription: "Jordan tourist visa from Kerala for Petra, Wadi Rum and the Dead Sea - your cover letter, finances and bookings prepared to tell the same story, with the best route for your passport confirmed before you book.",
  },
  // Kenya tourist visa page.pdf
  {
    slug: "kenya",
    code: "ke",
    name: "Kenya",
    title: "Kenya tourist visa",
    region: "East Africa",
    heroLead: "Kenya replaced its visas with an Electronic Travel Authorisation. It's online and quick, but it needs the whole trip in place first: flights, where you're staying, and proof you can pay for it. We apply on the official portal and send you the approval before you fly.",
    facts: [
      {
        label: "Route",
        value: "eTA, online",
        note: "Electronic Travel Authorisation",
      },
      {
        label: "Stay",
        value: "Up to 90 days",
        note: "Set by the officer on arrival",
      },
      {
        label: "Processing",
        value: "Usually within 3 working days",
        note: "Apply at least 2 weeks ahead",
      },
      {
        label: "Start",
        value: "2–3 weeks before",
        note: "Once flights and safari are booked",
      },
    ],
    intro: {
      title: "Visa or eTA?",
      body: "Kenya no longer issues ordinary tourist visas to most travellers. Indian passport holders apply for an Electronic Travel Authorisation (eTA) online before travel, and show the approval at check-in and immigration.\n\nThe official portal is etakenya.go.ke. Look-alike sites charge more for the same eTA. If you're staying with a host, their letter and ID copy go in the application, so ask them early.",
    },
    documents: {
      title: "Kenya tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Passport: valid for at least 6 months from the date of arrival in Kenya, with at least one blank page",
            "Photograph: recent passport-type photo or digital selfie with a clear background",
            "Contact details: valid email address and active mobile number",
            "Travel itinerary: arrival and departure flight bookings, and a plan of places to visit",
            "Proof of accommodation: hotel booking confirmations, or an invitation letter from your host in Kenya with their ID / passport copy",
            "Financial proof: bank statements or other documents showing sufficient funds for your stay (often requested during the application)",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Kenya trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "Applying before the trip is booked",
          text: "The eTA asks for flights and accommodation. Book those first.",
        },
        {
          tag: "Common",
          title: "A look-alike website",
          text: "The official address is etakenya.go.ke. Other sites add their own charges.",
        },
        {
          tag: "Common",
          title: "A host letter without ID",
          text: "An invitation letter needs the host's ID or passport copy with it.",
        },
        {
          tag: "Common",
          title: "A selfie that fails the portal",
          text: "Plain background, face straight on, no glare. A rejected photo costs days.",
        },
        {
          tag: "Common",
          title: "Yellow fever not checked",
          text: "Some routes into Kenya need a yellow fever certificate. We check yours.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Kenya application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, safari plans, and where you're staying.",
        },
        {
          title: "We check the file",
          text: "Passport, photo and bookings, before anything is paid.",
        },
        {
          title: "We apply online",
          text: "On the official eTA portal.",
        },
        {
          title: "We check the eTA",
          text: "Every field compared against the passport.",
        },
        {
          title: "Before you fly",
          text: "eTA printed, with yellow fever card if needed.",
        },
      ],
    },
    closing: "Tell us when you're going to Kenya. We'll send the document list.",
    metaTitle: "Kenya Tourist Visa from Kerala",
    metaDescription: "Kenya eTA for Indian passports from Kerala - Kenya replaced its visas with an Electronic Travel Authorisation, so we check your flights, stay and funds, apply on the official portal and send you the approval before you fly.",
  },
  // Kyrgyzstan tourist visa page.pdf
  {
    slug: "kyrgyzstan",
    code: "kg",
    name: "Kyrgyzstan",
    title: "Kyrgyzstan tourist visa",
    region: "Central Asia",
    heroLead: "Kyrgyzstan issues tourist e-Visas online for Indian passports, and the approved visa arrives by email. The file is short, and we make sure every scan is clear and every name matches before we apply.",
    facts: [
      {
        label: "Route",
        value: "e-Visa, online",
        note: "Approved visa sent by email",
      },
      {
        label: "Stay",
        value: "Up to 30 days",
        note: "Single or multiple entry",
      },
      {
        label: "Processing",
        value: "About 1–5 working days",
        note: "Faster options available",
      },
      {
        label: "Start",
        value: "2–4 weeks before",
        note: "Longer for June to September",
      },
    ],
    intro: {
      title: "How the Kyrgyzstan e-Visa works",
      body: "Indian passport holders apply for a Kyrgyzstan e-Visa on the official government portal. The approval is emailed to you as a document to print and carry.\n\nSome applications also need a letter of invitation from a registered Kyrgyz tour operator. We check whether yours does and arrange it if needed. If you hold certain US, UK or Schengen visas, you may be able to enter without a visa for a short stay. Tell us what you hold.",
    },
    documents: {
      title: "Kyrgyzstan tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Valid passport: Indian passport with at least 6 months validity from the date of arrival, plus a scanned copy of the bio-data page",
            "Photograph: recent passport-size colour photograph in JPEG/JPG format",
            "Travel itinerary: confirmed return or onward flight booking details",
            "Accommodation: hotel reservation or confirmed proof of stay for the entire duration",
            "Proof of funds: recent bank statement (last 3 months) showing sufficient financial means",
            "Email address: valid email to receive the approved e-Visa",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Kyrgyzstan trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "A blurry passport scan",
          text: "Every corner and line readable. A poor scan is the commonest reason for refusal.",
        },
        {
          tag: "Common",
          title: "Names that don't match",
          text: "Name on the form, the ticket and the passport must be identical.",
        },
        {
          tag: "Common",
          title: "A missing invitation letter",
          text: "Where it's needed, the application stops without it.",
        },
        {
          tag: "Common",
          title: "An email you don't check",
          text: "The e-Visa arrives by email. Use an address you read every day.",
        },
        {
          tag: "Common",
          title: "A stay not fully covered",
          text: "Hotel bookings should cover every night you're there.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Kyrgyzstan application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, and whether Kazakhstan or Uzbekistan is included.",
        },
        {
          title: "We check the scans",
          text: "Passport and photo, against the portal's rules.",
        },
        {
          title: "We apply online",
          text: "On the official e-Visa portal.",
        },
        {
          title: "We check the e-Visa",
          text: "Every field compared against the passport.",
        },
        {
          title: "Before you fly",
          text: "e-Visa printed with your bookings.",
        },
      ],
    },
    closing: "Tell us when you're going to Kyrgyzstan. We'll send the document list.",
    metaTitle: "Kyrgyzstan Tourist Visa from Kerala",
    metaDescription: "Kyrgyzstan e-Visa for Indian passports from Kerala - applied online with the approved visa sent by email, with every scan checked and every name matched before we apply.",
  },
  // South Korea tourist visa page.pdf
  {
    slug: "south-korea",
    code: "kr",
    name: "South Korea",
    title: "South Korea tourist visa",
    region: "East Asia",
    heroLead: "South Korea looks closely at your income: a year of salary slips, two years of tax returns and a stamped bank statement. We prepare that file from Kerala, fill in the online form, and submit it through the Korea visa application centre.",
    facts: [
      {
        label: "Route",
        value: "Visa required",
        note: "Online form, then submission at the visa centre",
      },
      {
        label: "Stay",
        value: "Up to 90 days",
        note: "Set on the visa",
      },
      {
        label: "Processing",
        value: "About 10 working days",
        note: "From submission",
      },
      {
        label: "Start",
        value: "4–6 weeks before",
        note: "Longer for spring and autumn",
      },
    ],
    intro: {
      title: "Employed or running a business?",
      body: "Salaried applicants show employment proof, a year of salary slips and two years of ITR. If you can't submit an ITR, a letter explaining why is required.\n\nBusiness owners add 3 years of company ITR (or personal ITR for a proprietor), the company registration and a business profile in the embassy's format. Everyone includes a health condition form. K-ETA isn't available on an Indian passport, so every Indian traveller needs a visa.",
    },
    documents: {
      title: "South Korea tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport with more than 6 months validity",
            "2 recently taken passport-size colour photographs",
            "Online visa application form, duly filled by the applicant",
            "Health condition form",
            "Recent bank statement for the last 6 months: original, or photocopy with the bank's stamp and sign by bank authority",
          ],
        },
        {
          title: "If employed",
          items: [
            "Occupation proof or employment proof",
            "Salary slips for 1 year",
            "Photocopy of ITR for the last 2 years (if you can't submit an ITR, a letter of explanation giving the reason)",
          ],
        },
        {
          title: "If you own a business",
          items: [
            "3 years' company ITR (for a proprietor, 3 years' personal ITR)",
            "Company registration copy",
            "Business profile details, in the prescribed format only",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where South Korea files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "A bank statement without the stamp",
          text: "Original, or a copy stamped and signed by the bank. A plain printout isn't enough.",
        },
        {
          tag: "Common",
          title: "A missing ITR with no explanation",
          text: "No ITR is acceptable only with a letter explaining why.",
        },
        {
          tag: "Common",
          title: "Business profile in the wrong format",
          text: "Korea has its own format for this. A company brochure doesn't replace it.",
        },
        {
          tag: "Common",
          title: "Paying for a K-ETA",
          text: "K-ETA isn't available on Indian passports. Any site offering one is a scam.",
        },
        {
          tag: "Common",
          title: "The health form left out",
          text: "Every applicant includes it, whatever their age.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your South Korea application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, and whether you're employed or run a business.",
        },
        {
          title: "We send the list",
          text: "Only what applies to you, with the business profile format.",
        },
        {
          title: "We fill the form",
          text: "Online, checked against your passport.",
        },
        {
          title: "We submit",
          text: "At the Korea visa application centre.",
        },
        {
          title: "Until it's back",
          text: "Tracked until your passport is in your hand.",
        },
      ],
    },
    closing: "Tell us when you're going to South Korea. We'll send the document list.",
    metaTitle: "South Korea Tourist Visa from Kerala",
    metaDescription: "South Korea tourist visa from Kerala - a year of salary slips, two years of tax returns and a stamped bank statement, prepared into one file, the online form filled and submitted through the Korea visa application centre.",
  },
  // UK tourist visa page.pdf
  {
    slug: "united-kingdom",
    code: "gb",
    name: "United Kingdom",
    title: "UK tourist visa",
    region: "UK & Ireland",
    heroLead: "The UK decides visitor visas on paper, usually without an interview. It asks one question: will you come home? We build the Standard Visitor file around that from Kerala, with your money, your work and your sponsor's papers all telling the same story.",
    facts: [
      {
        label: "Route",
        value: "Online application",
        note: "Biometrics at a VFS centre, including Kochi",
      },
      {
        label: "Stay",
        value: "Up to 6 months a visit",
        note: "Standard Visitor visa",
      },
      {
        label: "Processing",
        value: "About 3 weeks",
        note: "From biometrics; priority costs extra",
      },
      {
        label: "Start",
        value: "6–8 weeks before",
        note: "Longer for summer and December",
      },
    ],
    intro: {
      title: "Visiting family, or travelling as a tourist?",
      body: "Most UK visitor files from Kerala are family visits: parents going to a son or daughter, relatives travelling for a graduation or a new baby. Those files carry a second set of documents from the person in the UK: an invitation and sponsorship letter, their status there, their income and their address.\n\nTravelling as a tourist with no one inviting you? The sponsor documents drop out, and hotel accommodation and a tour itinerary take their place. Everything asked of you stays the same.\n\nThe UK now issues digital eVisas instead of a sticker in the passport. You still give biometrics in person at VFS, and we set up the online account that holds the visa.",
    },
    documents: {
      title: "UK tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "From the applicant",
          items: [
            "Passport with at least 6 months validity",
            "Proof of funds: fixed deposits / bank statements for 6 months",
            "Proof of assets",
            "If married: NOC from husband (female applicants)",
            "If employed: employer letter, IT copies for the last 3 years, pay slips for 6 months, leave sanction letter",
            "If self-employed: proof of business, IT copies for the last 3 years",
            "If retired: proof of retirement",
          ],
        },
        {
          title: "From the sponsor in the UK",
          items: [
            "Sponsorship & declaration / invitation letter",
            "Tenancy agreement / land registry copy / council tax bill copy / mortgage deed copy",
            "Work permit copy (not required if a British citizen)",
            "Bank statements",
            "Salary slips for 6 months",
            "Employer's letter (not required if a British citizen)",
            "Passport copy: all relevant pages, including visa stamped pages and extensions, if any",
          ],
        },
        {
          title: "Travelling without a sponsor",
          items: [
            "Hotel accommodation for the entire stay",
            "Tour itinerary",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where UK files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "Money that appears just before applying",
          text: "Six months of statements are read as a whole. A large recent deposit reads as borrowed.",
        },
        {
          tag: "Common",
          title: "Leave that isn't sanctioned",
          text: "A letter saying you work there isn't enough. It has to say you're allowed to go, and when.",
        },
        {
          tag: "Common",
          title: "A sponsor's address that doesn't match",
          text: "The letter, the tenancy or council tax bill and the passport pages have to agree.",
        },
        {
          tag: "Common",
          title: "Missing visa pages from the sponsor",
          text: "Every page with a UK visa or extension belongs in the file, not just the photo page.",
        },
        {
          tag: "Common",
          title: "Biometrics booked too late",
          text: "Processing starts after biometrics. Book as soon as the application is paid.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your UK application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Who's going, who's inviting, and roughly when.",
        },
        {
          title: "We send two lists",
          text: "One for you, one for your sponsor in the UK.",
        },
        {
          title: "We check and apply",
          text: "Every document read, then the form filled online.",
        },
        {
          title: "Biometrics at VFS",
          text: "Kochi or your nearest centre, appointment booked for you.",
        },
        {
          title: "Until it's decided",
          text: "Tracked to the decision, and the eVisa checked.",
        },
      ],
    },
    closing: "Tell us when you're going to the UK. We'll send the document list.",
    metaTitle: "United Kingdom Tourist Visa from Kerala",
    metaDescription: "UK Standard Visitor visa from Kerala - decided on paper, usually without an interview, so we build your file around one question: will you come home? Your money, your work and your sponsor's papers all telling the same story, with biometrics at VFS Kochi.",
  },

  // Laos_tourist_visa_page.pdf
  {
    slug: "laos",
    code: "la",
    name: "Laos",
    title: "Laos tourist visa",
    region: "South-East Asia",
    heroLead: "Indian passports need a visa for Laos, and there are two ways to get one: an eVisa applied for online before you fly, or a visa on arrival at the main airports and border bridges. Both give 30 days. We apply for the eVisa so you land with it already approved.",
    facts: [
      { label: "Route", value: "eVisa or on arrival", note: "Online, or at the port of entry" },
      { label: "Stay", value: "Up to 30 days", note: "Extendable inside Laos" },
      { label: "Processing", value: "A few working days", note: "eVisa sent by email" },
      { label: "Start", value: "2–3 weeks before", note: "Book flights and hotel first" },
    ],
    intro: {
      title: "eVisa, or visa on arrival?",
      body: "Indian passport holders can apply for the eVisa online before travel, or take a visa on arrival. Both give 30 days, extendable at the provincial immigration office inside Laos. An approved eVisa stays valid for 180 days from issue, so you can apply well ahead.\n\nThe eVisa is only accepted at certain entry points: the Vientiane, Luang Prabang and Pakse airports, the Thai–Lao Friendship Bridges and Boten. Crossing overland from Thailand or Vietnam? Tell us where, because not every border post accepts it. The official portal is laoevisa.gov.la; other sites charge extra for the same visa.",
    },
    documents: {
      title: "Laos tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport with at least 6 months' validity from arrival, and two blank pages side by side",
            "2 recent colour photographs, taken within the last 6 months",
            "Visa application form, completed and signed (online for the eVisa, at the port for visa on arrival)",
            "Return or onward ticket, confirmed",
            "Hotel booking for the stay, or an invitation letter from your host in Laos",
            "Bank statement: Recent, or enough cash to cover your stay",
            "Travel insurance: Recommended, covering health for the whole trip",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Laos trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Two blank pages that aren't together", text: "The pages have to face each other. Scattered blank pages can be refused at the counter." },
        { tag: "Common", title: "The wrong border crossing", text: "The eVisa works only at listed entry points. Check yours before you apply." },
        { tag: "Common", title: "A look-alike website", text: "Paying more for the same eVisa. The official address ends in gov.la." },
        { tag: "Common", title: "No ticket out", text: "A return or onward booking is part of the file. A one-way trip can be questioned." },
        { tag: "Common", title: "Passport too close to expiry", text: "Six months from the day you arrive. Airlines check this before boarding." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Laos application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, and where you'll enter Laos." },
        { title: "We check the passport", text: "Validity and blank pages, before anything is paid." },
        { title: "We apply online", text: "On the official eVisa portal." },
        { title: "We check the eVisa", text: "Every field compared against the passport." },
        { title: "Before you fly", text: "eVisa printed, with ticket and hotel booking." },
      ],
    },
    closing: "Tell us when you're going to Laos. We'll send the document list.",
    metaTitle: "Laos Tourist Visa from Kerala",
    metaDescription: "Laos tourist visa for Indian passports - an eVisa online or a visa on arrival, both for 30 days. We apply for the eVisa so you land with it already approved.",
  },
  // Moldova_tourist_visa_page.pdf
  {
    slug: "moldova",
    code: "md",
    name: "Moldova",
    title: "Moldova tourist visa",
    region: "Eastern Europe",
    heroLead: "Indian passports need a visa for Moldova, applied for online as an e-Visa. If you already hold a valid multiple-entry Schengen, US or UK visa, you may not need one at all, so that's the first thing we check.",
    facts: [
      { label: "Route", value: "e-Visa", note: "Online, sent as a PDF by email" },
      { label: "Stay", value: "Set on the visa", note: "Short stays only" },
      { label: "Processing", value: "10–20 working days", note: "Longer in high season" },
      { label: "Start", value: "1 month before", note: "Earlier for summer" },
    ],
    intro: {
      title: "Do you need a Moldova visa at all?",
      body: "Indian travellers holding a valid multiple-entry Schengen, US or UK visa may enter Moldova without a Moldovan visa. It has to stay valid for the whole trip, and a single-entry Schengen visa that's already been used doesn't count.\n\nEveryone else applies for the e-Visa on the official portal, evisa.gov.md. Two rules decide most files: money of at least €30 a day (and never under €300 for a stay shorter than 10 days), and travel insurance of at least €30,000 covering every day you're there.",
    },
    documents: {
      title: "Moldova tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "From every applicant",
          items: [
            "Original passport with at least 6 months' validity and 3 blank pages, plus all old passports",
            "2 recent colour photographs, scanned",
            "Visa application form, completed and signed",
            "Covering letter explaining the purpose of the trip",
            "Proof of funds: At least €30 a day, and not under €300 for a stay shorter than 10 days: cash, card or travellers' cheques",
            "Return air tickets, from and back to India",
            "Hotel booking for the entire stay",
            "Travel insurance: minimum €30,000, valid for the whole stay",
          ],
        },
        {
          title: "Your work",
          items: [
            "Employed: Leave sanction letter with company seal, and last 3 months' salary slips",
            "Self-employed: Registration licence, MOA or partnership deed; company bank statement for 6 months, stamped; company income tax returns for 3 years",
            "Retired: Pension book or pension statement",
            "Student: ID card from the school, college or institute",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Birth certificate showing both parents' names",
            "Letter of consent (NOC), legalised",
            "Travelling with one parent: Consent legalised by the other parent",
            "Travelling alone or without either parent: Notarised consent from both parents",
            "Death certificate, if one or both parents have died",
            "ID proof of both parents",
          ],
        },
        {
          title: "Visiting friends or family",
          items: [
            "Invitation letter: your relationship, the purpose of the visit, and that they cover your housing and expenses",
            "Inviter's passport or residence permit",
            "Inviter's utility bill as address proof",
          ],
        },
        {
          title: "If someone else is paying",
          items: [
            "Sponsorship letter: visitors' names, purpose, relationship, length of stay and dates",
            "Sponsor's passport or residence permit",
            "Sponsor's utility bill as address proof",
            "Sponsor's bank statement and pay slips",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Moldova files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Funds under €30 a day", text: "The amount is checked against your dates. A short trip still needs at least €300." },
        { tag: "Common", title: "Insurance that falls short", text: "Under €30,000, or ending a day before you fly home, sends the file back." },
        { tag: "Common", title: "A child's consent letter not legalised", text: "A plain signed letter isn't enough. The other parent's consent has to be legalised." },
        { tag: "Common", title: "A Schengen visa that runs out mid-trip", text: "Entry on another visa only works if it's valid for the whole stay." },
        { tag: "Common", title: "Applying too late", text: "10 to 20 working days, and more in summer. Apply at least a month ahead." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Moldova application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and any visas you already hold." },
        { title: "We check your visas", text: "Schengen, US or UK first; you may not need a Moldova visa." },
        { title: "We check money and cover", text: "€30 a day and €30,000 insurance, before the form." },
        { title: "We apply online", text: "On the official e-Visa portal." },
        { title: "Until it's decided", text: "Tracked until the e-Visa arrives by email." },
      ],
    },
    closing: "Tell us when you're going to Moldova. We'll send the document list.",
    metaTitle: "Moldova Tourist Visa from Kerala",
    metaDescription: "Moldova e-Visa for Indian passports, applied for online - or no visa at all with a valid multiple-entry Schengen, US or UK visa. We check that first, then the funds and insurance.",
  },
  // Morocco_tourist_visa_page.pdf
  {
    slug: "morocco",
    code: "ma",
    name: "Morocco",
    title: "Morocco tourist visa",
    region: "North Africa",
    heroLead: "Indian passports need a visa for Morocco. Most holidays go on an e-Visa applied for online; some files, such as family visits, go to the embassy in New Delhi on paper. Either way the bank statement and proof of your job carry the file, so we check those first.",
    facts: [
      { label: "Route", value: "e-Visa or embassy", note: "Online, or a paper file to New Delhi" },
      { label: "Stay", value: "Up to 30 days", note: "On the e-Visa; embassy visas vary" },
      { label: "Processing", value: "24–72 hours", note: "e-Visa estimate; embassy takes longer" },
      { label: "Start", value: "1 month before", note: "Longer for an embassy file" },
    ],
    intro: {
      title: "e-Visa, or a visa from the embassy?",
      body: "Indian nationals can apply for Morocco's e-Visa online, on the government's acces-maroc.ma platform. The embassy estimates 24 to 72 hours to process it, and it gives 30 days.\n\nVisiting family, or a trip the e-Visa doesn't cover? The file goes to the Embassy of Morocco in New Delhi with the documents below, several of them as originals. We tell you which route fits before you pay any fee.",
    },
    documents: {
      title: "Morocco tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "From the applicant",
          items: [
            "Visa application form, typed: Your own phone number and email are mandatory, even when we submit it",
            "Original passport, at least 3 months' validity from submission, with 1 blank page: Plus a copy of the first and last page",
            "2 photos: 4 × 3 cm, white background, recent, face clearly visible",
            "Original covering letter: who you are, your work and the purpose of the trip",
            "Confirmed flight tickets",
            "Original bank statement: last 3 months, updated, stamped and signed by the bank",
            "Travel insurance",
            "Copy of birth certificate",
            "Copy of PAN or Aadhaar card",
          ],
        },
        {
          title: "Where you'll stay",
          items: [
            "Hotel booking from an authorised travel agency, or a recommendation from the Ministry of Tourism or the Moroccan National Tourist Office",
            "Visiting family: invitation letter, legalised: Apostille or Ministry of External Affairs stamp, with a guarantee to cover medical care and repatriation",
          ],
        },
        {
          title: "Proof of occupation (originals)",
          items: [
            "Salaried: NOC or leave sanction letter on company letterhead, signed and stamped",
            "Self-employed: Proof of business ownership, and a covering letter on company letterhead",
            "Student: Bonafide letter from the institution, signed and stamped",
          ],
        },
        {
          title: "If someone else is paying",
          items: [
            "Sponsor's original bank statement",
            "Sponsor's letter saying they will bear your expenses",
            "Sponsor's occupation proof, as above",
            "Your own bank statement: Not needed when you are sponsored",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Morocco files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Our number on the form instead of yours", text: "Morocco wants the applicant's own phone and email, even when an agent submits." },
        { tag: "Common", title: "An invitation letter that isn't legalised", text: "Family visits need an apostille or MEA stamp, and the medical and repatriation guarantee." },
        { tag: "Common", title: "Copies where originals are asked", text: "Covering letter, bank statement and NOC go in as originals." },
        { tag: "Common", title: "A statement without the bank's stamp", text: "Three months, updated, stamped and signed. A printout from net banking won't do." },
        { tag: "Common", title: "Passport pages left out", text: "Copies of the first and last page go in with the original passport." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Morocco application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and whether it's a family visit." },
        { title: "We pick the route", text: "e-Visa or embassy, before any fee is paid." },
        { title: "We check the file", text: "Bank statement and job proof first." },
        { title: "We lodge it", text: "Online, or originals to the embassy." },
        { title: "Until it's decided", text: "Tracked until the visa is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Morocco. We'll send the document list.",
    metaTitle: "Morocco Tourist Visa from Kerala",
    metaDescription: "Morocco tourist visa for Indian passports - an e-Visa online for most holidays, or a paper file to the embassy in New Delhi for family visits. We check the bank statement and job proof first.",
  },
  // Russia_tourist_visa_page.pdf
  {
    slug: "russia",
    code: "ru",
    name: "Russia",
    title: "Russia tourist visa",
    region: "Europe & Asia",
    heroLead: "Indian passports can visit Russia on the unified e-Visa, applied for fully online. No embassy visit and no paper file, but the form asks for a lot about your family, your work and your past travel. We collect those details from you once and fill the form ourselves.",
    facts: [
      { label: "Route", value: "Unified e-Visa", note: "Online, no embassy visit" },
      { label: "Stay", value: "Up to 30 days", note: "Single entry" },
      { label: "Processing", value: "A few days", note: "Apply at least 4 days before" },
      { label: "Start", value: "3–6 weeks before", note: "No earlier than 45 days out" },
    ],
    intro: {
      title: "What the Russia e-Visa form asks for",
      body: "The e-Visa is single entry and lets you stay up to 30 days. It stays valid for 120 days from issue, and you can apply from 45 days before the trip up to about 4 days before. The official portal is evisa.kdmid.ru.\n\nThe form wants your parents' and spouse's names exactly as in the passport, your employer's full contact details, your education, and every country you've visited with arrival and departure dates. Gather these before you start. And check your airport: the e-Visa only works at designated entry points.",
    },
    documents: {
      title: "Russia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Family",
          items: [
            "Father's, mother's and spouse's names: Exactly as written in the passport",
            "Father's date of birth",
            "Mother's date of birth",
            "Spouse's date of birth",
          ],
        },
        {
          title: "Work",
          items: ["Occupation", "Company name", "Company address", "Company email", "Company phone number"],
        },
        {
          title: "Education",
          items: ["Highest qualification", "College name", "Place"],
        },
        {
          title: "Travel history",
          items: [
            "Countries visited before: With arrival and departure dates for each trip",
            "Passport scan and a recent photo, for the upload",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Russia applications go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Names spelt differently from the passport", text: "Parents' and spouse's names have to match the passport exactly, letter for letter." },
        { tag: "Common", title: "Travel dates guessed", text: "Past trips need real arrival and departure dates. Check your old passport stamps." },
        { tag: "Common", title: "Applying too early or too late", text: "More than 45 days out isn't allowed; under 4 days is too late." },
        { tag: "Common", title: "An airport that isn't on the list", text: "The e-Visa only works at designated entry points. Check before you book." },
        { tag: "Common", title: "Staying past 30 days", text: "The e-Visa is single entry and can't be stretched. Plan the trip inside 30 days." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Russia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, cities, and your arrival airport." },
        { title: "You send your details", text: "Family, work, education and past travel, once." },
        { title: "We fill the form", text: "On the official e-Visa portal." },
        { title: "We check it", text: "Every name and date against your passport." },
        { title: "Before you fly", text: "e-Visa printed and ready at the counter." },
      ],
    },
    closing: "Tell us when you're going to Russia. We'll send the document list.",
    metaTitle: "Russia Tourist Visa from Kerala",
    metaDescription: "Russia unified e-Visa for Indian passports, applied for fully online - single entry, up to 30 days. We collect your family, work and travel details once and fill the form ourselves.",
  },
  // Singapore_tourist_visa_page.pdf
  {
    slug: "singapore",
    code: "sg",
    name: "Singapore",
    title: "Singapore tourist visa",
    region: "South-East Asia",
    heroLead: "Indian passports need a visa for Singapore. It's an e-Visa, lodged through an authorised agent, and usually decided in three working days. The photo and the bank balance decide most files, so we check those first.",
    facts: [
      { label: "Route", value: "e-Visa", note: "Through an authorised agent" },
      { label: "Stay", value: "Set on arrival", note: "Usually up to 30 days a visit" },
      { label: "Processing", value: "3 working days", note: "Excluding the day of submission" },
      { label: "Start", value: "Within 30 days of travel", note: "Not earlier" },
    ],
    intro: {
      title: "What Singapore looks for",
      body: "Singapore wants ₹1,00,000 per person in the bank, shown across the last 6 months. Salaried applicants add 3 months' salary slips; business owners send 3 months' statements with a GST or MSME certificate.\n\nThe photo is strict: 2 × 2 inches, white background, face covering 80% of the frame, no borders, no cap or glasses, and teeth not showing. You have to be in India when we apply, and the application can't go in more than 30 days before you arrive.",
    },
    documents: {
      title: "Singapore tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Passport copy",
            "Photo: 2 × 2 inches, white background; 80% face coverage, no borders, no cap or glasses, teeth not showing",
            "Bank statement: last 6 months, minimum ₹1,00,000 per person",
            "Salary slips: last 3 months",
            "Email ID and contact number",
            "Visited Singapore before? Copy of the entry and exit stamp pages",
          ],
        },
        {
          title: "Business owners",
          items: ["Bank statement: last 3 months", "GST or MSME certificate"],
        },
        {
          title: "Families",
          items: [
            "Husband and wife: Marriage certificate",
            "Children: Birth certificate, and school or college ID card copy",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Singapore files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A photo that shows teeth", text: "Or glasses, a cap, a border, or a face too small in the frame. Any one sends it back." },
        { tag: "Common", title: "Balance under ₹1,00,000 per person", text: "Two travellers need ₹2,00,000. The statement has to cover 6 months." },
        { tag: "Common", title: "Applying from outside India", text: "You have to be in India when the application goes in." },
        { tag: "Common", title: "Applying too early", text: "Singapore only takes applications within 30 days of arrival." },
        { tag: "Common", title: "Old Singapore stamps left out", text: "If you've been before, the entry and exit pages go in with the file." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Singapore application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, and who's travelling." },
        { title: "We check photo and bank", text: "Before anything else goes in." },
        { title: "We lodge it", text: "As an authorised agent, online." },
        { title: "Usually 3 working days", text: "We track it and tell you the moment it's out." },
        { title: "Before you fly", text: "e-Visa printed and checked against the passport." },
      ],
    },
    closing: "Tell us when you're going to Singapore. We'll send the document list.",
    metaTitle: "Singapore Tourist Visa from Kerala",
    metaDescription: "Singapore e-Visa for Indian passports, lodged through an authorised agent and usually decided in three working days. We check the photo and the bank balance first.",
  },
  // South_Africa_tourist_visa_page.pdf
  {
    slug: "south-africa",
    code: "za",
    name: "South Africa",
    title: "South Africa tourist visa",
    region: "Africa",
    heroLead: "South Africa's visa is a paper file, lodged in person at a VFS centre, and it asks for more originals than most. Bank letterheads, a signed NOC and a verifiable hotel booking carry the file, so we build those with you before you go to VFS.",
    facts: [
      { label: "Route", value: "Visa at VFS", note: "Form DHA-84, lodged in person" },
      { label: "Stay", value: "Set on the visa", note: "Up to 90 days for tourism" },
      { label: "Processing", value: "Varies by centre", note: "Allow several weeks" },
      { label: "Start", value: "6–8 weeks before", note: "Longer in peak season" },
    ],
    intro: {
      title: "Originals, letterheads and signatures",
      body: "The bank statement has to be the original, on the bank's letterhead, stamped and signed, covering the last 3 months. Passbooks, e-statements and net-banking printouts are not accepted. The NOC, covering letter and hotel booking all need a name, designation, physical address, contact details and a signature.\n\nThe form (DHA-84) is filled in black ink and block letters, and your signature must match the passport. South Africa has also opened an online ETA for some Indian travellers at a few airports. Ask us whether it fits your trip before you start the paper file.",
    },
    documents: {
      title: "South Africa tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Passport, valid 30 days past departure, with 2 blank visa pages; old passports too: mandatory in Mumbai, Pune, Ahmedabad, Goa and Bengaluru",
            "Copies of passport bio-data pages: photo page and address/parents page",
            "Visa form 11 (DHA-84): Black ink, block letters, signed to match the passport",
            "2 photos: 35 × 45 mm, not older than 30 days",
            "Bank statement: original, last 3 months; on bank letterhead, stamped and signed; balance of R3,000 or equivalent in INR",
            "Flight ticket or reservation",
            "Day-to-day itinerary for the stay",
          ],
        },
        {
          title: "Letters (originals)",
          items: [
            "NOC for leave: From employer, school or university: name, passport number and trip dates, signed with designation and contact details",
            "Covering letter, signed by you: Names, passport numbers, trip dates, and who is paying for the trip",
          ],
        },
        {
          title: "Hotel",
          items: [
            "Verifiable hotel booking: Hotel name, stay dates, physical address, contact details, and the authorised signatory's name, designation and signature",
          ],
        },
        {
          title: "Family and health",
          items: [
            "Married couples: Notarised marriage certificate; carry the original to VFS",
            "Children under 18: Notarised birth certificate and parental consent affidavit",
            "Yellow fever certificate: If you'll travel through or stay in the yellow fever belt",
          ],
        },
        {
          title: "Group tours",
          items: [
            "Letter from the South African tour company: Naming its partner agency, listing every tourist, signed",
            "Tour itinerary signed by the South African host company",
            "Applies to: Mumbai, Pune, Ahmedabad, Goa and Bengaluru",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where South Africa files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A net-banking statement", text: "Only the original on bank letterhead, stamped and signed. Printouts and passbooks are refused." },
        { tag: "Common", title: "A hotel booking that can't be verified", text: "It needs the address, contact details and an authorised signature, not just a booking email." },
        { tag: "Common", title: "A signature that doesn't match", text: "The DHA-84 signature has to match the one in your passport." },
        { tag: "Common", title: "A covering letter that skips who pays", text: "It has to say clearly who bears the cost of the trip." },
        { tag: "Common", title: "Photos older than a month", text: "South Africa wants photos taken within the last 30 days." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your South Africa application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and whether it's a group tour." },
        { title: "We check the route", text: "ETA or paper file, before any fee." },
        { title: "We build the letters", text: "NOC, covering letter and hotel booking with you." },
        { title: "You lodge at VFS", text: "With originals, checked and in order." },
        { title: "Until it's decided", text: "Tracked until the passport is back." },
      ],
    },
    closing: "Tell us when you're going to South Africa. We'll send the document list.",
    metaTitle: "South Africa Tourist Visa from Kerala",
    metaDescription: "South Africa tourist visa for Indian passports - a paper file lodged in person at VFS, with more originals than most. We build the bank letterheads, NOC and hotel booking with you first.",
  },
  // Taiwan_tourist_visa_page (1).pdf
  {
    slug: "taiwan",
    code: "tw",
    name: "Taiwan",
    title: "Taiwan tourist visa",
    region: "East Asia",
    heroLead:
      "Indian passports need a visa for Taiwan. Most travellers file a visitor visa at the Taipei Economic and Cultural Center, which for Kerala is the office in Chennai. If you already hold a US, UK, Schengen, Japan or similar visa, a free online travel authorisation may be enough, so that's the first thing we check.",
    facts: [
      { label: "Route", value: "Visitor visa at TECC", note: "Online form, then a paper file" },
      { label: "Stay", value: "Up to 60 days", note: "Set on the visa" },
      { label: "Processing", value: "About 5 working days", note: "At TECC Chennai; express costs extra" },
      { label: "Start", value: "3–4 weeks before", note: "Longer in peak season" },
    ],
    intro: {
      title: "Do you need a paper visa at all?",
      body:
        "Hold a valid, or recently expired, visa or residence permit from the US, UK, Canada, Australia, Japan, South Korea, New Zealand or a Schengen country? You may qualify for Taiwan's Travel Authorization Certificate (TAC): free, online, and good for stays of up to 14 days.\n\nEveryone else applies for a visitor visa: the form is filled online and printed, then lodged with the file at the TECC in Chennai. Bank statements need the bank's seal and signature, and your old passports go in with the current one.",
    },
    documents: {
      title: "Taiwan tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport, valid 6 months from entry, with 2 blank pages. Plus all old passports",
            "2 recent photos: 35 × 45 mm, white background",
            "Visa application form, completed online and printed",
            "Covering letter: purpose of the visit, your designation, and how long you'll stay",
            "Day-wise travel itinerary, tentative",
            "Confirmed hotel bookings, or an invitation letter from your host",
            "Confirmed return air tickets",
            "Bank statement: last 3 months. Personal account, with the bank's seal and signature",
          ],
        },
        {
          title: "Salaried",
          items: ["Salary slips", "Income tax returns", "Employment letter or leave sanction letter"],
        },
        {
          title: "Self-employed",
          items: ["Business registration documents", "Income tax returns"],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Taiwan files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Old passports left at home", text: "Previous passports are part of the file. Bring every one you've held." },
        { tag: "Common", title: "A statement without the bank's seal", text: "Seal and signature are needed. A net-banking printout won't do." },
        { tag: "Common", title: "A covering letter without your designation", text: "It has to say who you are, what you do, and why you're going." },
        { tag: "Common", title: "Missing the free TAC", text: "With a US, UK, Schengen or Japan visa, you may not need the paper visa at all." },
        { tag: "Common", title: "An itinerary that doesn't match the bookings", text: "Day-wise plans, hotels and flights should tell the same story." },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Taiwan application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and any visas you already hold." },
        { title: "We pick the route", text: "Free TAC if you qualify; otherwise the visitor visa." },
        { title: "We fill the form", text: "Online, printed and checked against your passport." },
        { title: "We lodge it", text: "The full file at TECC Chennai." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Taiwan. We'll send the document list.",
    metaTitle: "Taiwan Tourist Visa from Kerala",
    metaDescription:
      "Taiwan visitor visa from Kerala, filed at TECC Chennai - or the free online Travel Authorization Certificate if you hold a US, UK, Schengen or Japan visa. We check which applies first.",
  },
  // Tanzania_tourist_visa_page.pdf
  {
    slug: "tanzania",
    code: "tz",
    name: "Tanzania",
    title: "Tanzania tourist visa",
    region: "East Africa",
    heroLead:
      "Indian passports need a visa for Tanzania, and the easiest way is the eVisa, applied for online before you fly. It covers Zanzibar, the safari parks and Kilimanjaro. We apply for it so you land with the visa already approved.",
    facts: [
      { label: "Route", value: "eVisa", note: "Online; visa on arrival also possible" },
      { label: "Stay", value: "Up to 90 days", note: "Ordinary (tourist) visa" },
      { label: "Processing", value: "Up to 10 days", note: "From submission" },
      { label: "Start", value: "3–4 weeks before", note: "Leave room for a query" },
    ],
    intro: {
      title: "Apply online before you fly",
      body:
        "Indian passport holders can take the ordinary visa online, valid for up to 90 days. Immigration says applications are processed within ten days, so don't leave it to the last week. The official portal is visa.immigration.go.tz; other sites charge extra for the same visa.\n\nThe photo upload is strict: colour, plain background, full face from hair to chin, JPG under 500 KB. And if you're flying in through a yellow fever country, such as a stop in Kenya or Ethiopia, carry the vaccination certificate.",
    },
    documents: {
      title: "Tanzania tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport with at least 6 months' validity from entry, and 2–3 blank pages",
            "Visa application form, completed and signed (online)",
            "Photograph: recent, colour, white background. Under 500 KB, JPG, for the upload",
            "Confirmed return ticket, or proof of onward travel",
            "Hotel bookings for the entire stay, or an invitation letter from your host in Tanzania",
            "Bank statement. Usually the last 3 months, showing enough to cover the trip",
            "Yellow fever vaccination certificate. If arriving from, or transiting through, a yellow fever country",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Tanzania trips go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A photo over 500 KB", text: "The upload fails or the photo gets rejected. Keep it a small JPG." },
        { tag: "Common", title: "No yellow fever card", text: "A transit through Nairobi or Addis Ababa can be enough for it to be asked at the airport." },
        { tag: "Common", title: "A look-alike website", text: "Paying more for the same eVisa. The official address ends in go.tz." },
        { tag: "Common", title: "Hotel bookings with gaps", text: "The bookings, or the host letter, have to cover every night." },
        { tag: "Common", title: "Applying the week before", text: "Processing can take up to ten days. Apply three weeks out." },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Tanzania application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, and whether it's Zanzibar, safari or both." },
        { title: "We check the passport", text: "Validity, pages and photo, before anything is paid." },
        { title: "We apply online", text: "On the official Tanzania eVisa portal." },
        { title: "We check the grant", text: "Every field compared against the passport." },
        { title: "Before you fly", text: "eVisa printed, yellow fever card if needed." },
      ],
    },
    closing: "Tell us when you're going to Tanzania. We'll send the document list.",
    metaTitle: "Tanzania Tourist Visa from Kerala",
    metaDescription:
      "Tanzania eVisa from Kerala for Zanzibar, the safari parks and Kilimanjaro - applied on the official portal, with the photo, bookings and yellow fever card checked before you fly.",
  },
  // Tunisia_tourist_visa_page (1).pdf
  {
    slug: "tunisia",
    code: "tn",
    name: "Tunisia",
    title: "Tunisia tourist visa",
    region: "North Africa",
    heroLead:
      "Indian passports need a visa for Tunisia, and there is no e-Visa: it's a paper file for the Embassy of Tunisia in New Delhi. The bank statement, the hotel booking and your covering letter carry the file, so we check those first.",
    facts: [
      { label: "Route", value: "Embassy visa", note: "Paper file, Embassy of Tunisia, New Delhi" },
      { label: "Stay", value: "Up to 90 days", note: "Set on the visa" },
      { label: "Processing", value: "Several weeks", note: "Allow 4–6 weeks" },
      { label: "Start", value: "6 weeks before", note: "Longer if someone is inviting you" },
    ],
    intro: {
      title: "A paper file, with originals",
      body:
        "Tunisia has no working e-Visa yet, so the file goes to the embassy in New Delhi. Bank statements go in as originals, covering the last 3 to 6 months, and the covering letter has to explain the exact purpose and length of the trip.\n\nStaying with family or friends? The invitation has to be certified by a Tunisian municipality, and the embassy often wants the inviting person to email or fax it directly. Start that early; it's the slowest part of the file.",
    },
    documents: {
      title: "Tunisia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport, valid 6 months from arrival, with 2 blank pages. Plus photocopies of the front, last and used pages",
            "Visa application form, filled in and signed",
            "2–3 recent colour photographs, taken within the last 3 months",
            "Covering letter: the exact purpose and length of the visit",
            "Confirmed return flight booking",
            "Original bank statements: last 3 to 6 months, showing enough balance",
            "Proof of employment. Employment certificate, or a covering letter on company letterhead with the official seal",
          ],
        },
        {
          title: "Where you'll stay",
          items: [
            "Confirmed hotel booking from an authorised agency",
            "Or an invitation letter. Certified by a Tunisian municipality; often sent to the embassy directly by the host",
          ],
        },
        {
          title: "Children under 18",
          items: ["Notarized consent letter from the parents"],
        },
        {
          title: "Business visits",
          items: [
            "Original invitation. Certified by a Tunisian municipality or Chamber of Commerce, emailed or faxed to the embassy by the inviting company",
            "Endorsement or recommendation letter from an Indian business organisation",
            "Stays over 90 days, business or official trips. Always go through the embassy, with the full file above",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Tunisia files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "An invitation that isn't certified", text: "A plain letter from family isn't enough. It needs the municipality's certification." },
        { tag: "Common", title: "Copies of the bank statement", text: "The embassy wants the original statements, not printouts." },
        { tag: "Common", title: "Passport pages not copied", text: "Front, last and every used page go in as photocopies." },
        { tag: "Common", title: "A vague covering letter", text: "It has to state the exact purpose and dates of the visit." },
        { tag: "Common", title: "Photos older than 3 months", text: "Tunisia wants recent photos. Take new ones for the file." },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Tunisia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and where you'll stay." },
        { title: "We check the file", text: "Bank statement and covering letter first." },
        { title: "We sort the invitation", text: "If you're staying with someone, we start it early." },
        { title: "We lodge it", text: "The full file at the Embassy of Tunisia." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Tunisia. We'll send the document list.",
    metaTitle: "Tunisia Tourist Visa from Kerala",
    metaDescription:
      "Tunisia tourist visa from Kerala - a paper file for the Embassy of Tunisia in New Delhi, with original bank statements, a certified invitation where needed and the covering letter checked first.",
  },
  // turkey-visitor-visa (1).pdf
  {
    slug: "turkey",
    code: "tr",
    name: "Türkiye",
    title: "Turkey visitor visa",
    region: "Europe",
    heroLead:
      "Most travellers from Kerala need a sticker visa for Türkiye, applied for on paper with a handwritten form. The consulate reads your money, your work and your signature across every page. We build the file from Kerala so every document tells the same story, then get you to your submission appointment.",
    facts: [
      { label: "Route", value: "Sticker visa", note: "Handwritten form, submitted in person with an appointment" },
      { label: "Stay", value: "Set on the visa", note: "Days allowed and entries are printed on the sticker" },
      { label: "Processing", value: "About 2–3 weeks", note: "Counted in working days from submission; changes by season" },
      { label: "Start", value: "4–6 weeks before", note: "Longer for April–June and the autumn months" },
    ],
    intro: {
      title: "Already holding a US, UK or Schengen visa?",
      body:
        "Indian passport holders with a valid visa or residence permit from the US, the UK, Ireland or a Schengen country can usually apply for a Türkiye e-Visa online instead. No handwritten form, no submission appointment, and the answer comes much faster. Send us a photo of that visa and we'll tell you if it qualifies.\n\nEveryone else goes through the sticker visa, and that's what the list below is for. Most Kerala files are holidays: couples, families and groups touring Istanbul and Cappadocia. If someone in Türkiye is inviting you, add their invitation letter and tell us early which kind of trip it is.",
    },
    documents: {
      title: "Turkey visitor visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application form before submission.",
      groups: [
        {
          title: "From the applicant",
          items: [
            "Visa application form: filled by hand in blue or black ink, in block letters, with one biometric photo affixed. Signed by the applicant, or by a parent or legal guardian for minors",
            "Original passport valid for at least 6 months from arrival in Türkiye, with at least 2 full blank pages",
            "Old passports (if any)",
            "Photos: 2 biometric photos, 2.5 × 2.5 inch, white background, taken in the last 6 months, full face with no shadow and no spectacles",
            "Covering letter: your full travel plan, the purpose of the trip, who is travelling with you and who is paying",
            "Invitation letter from the host in Türkiye (if someone is inviting you)",
            "Local address proof, if your passport was issued outside the consulate's jurisdiction",
            "Your signature must match across the form, the passport and every document",
          ],
        },
        {
          title: "Money and income",
          items: [
            "Personal bank statement: last 6 months, with the bank's stamp and signature on every page",
            "Minimum balance of ₹1 lakh per person travelling",
            "Statements updated to within the last 15 days",
            "Closing balance shown clearly. If it isn't on the statement, a bank balance certificate",
            "Income tax returns: last 3 years. Not filing? Explain why in the covering letter",
          ],
        },
        {
          title: "Your work: if employed",
          items: [
            "Last 3 months' salary slips on letterhead, with original signature and seal",
            "Salary account statement: last 6 months, stamped and signed by the bank on every page",
            "Form 16",
          ],
        },
        {
          title: "Your work: if employer, proprietor, partner or director",
          items: [
            "Company registration documents showing your name and the company's name, with MEA attestation",
            "GST or Udyam registration, MEA attested. If you have neither, a written explanation",
          ],
        },
        {
          title: "If you're not in regular work: if retired",
          items: [
            "Retirement documents and income proof, original or attested copies",
            "Personal bank statement: last 3 months, attested by the bank, with ₹1 lakh per person",
          ],
        },
        {
          title: "If you're not in regular work: if freelancing",
          items: [
            "Contract documents and a leave or cover letter as applicable",
            "Proof of regular income, and 3 months' personal bank statement with ₹1 lakh per person",
          ],
        },
        {
          title: "If you're not in regular work: if not working",
          items: ["Source of income explained in the covering letter, with proof of that income"],
        },
        {
          title: "Good to know",
          items: [
            "Applications from Kerala fall under the Turkish Consulate General in Mumbai, and are submitted in person at the authorised visa application centre, with a prior appointment",
            "There's no visa on arrival for Indian passport holders. Airlines won't board you without a visa",
            "Travel insurance covering the whole stay is usually asked for",
            "If your travel date is very close, a faster premium service may be the only way to be accepted",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Turkey files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Signatures that don't match", text: "The form, the passport and the covering letter are compared. A signature that changes from page to page raises questions." },
        { tag: "Common", title: "Statements that stop too early", text: "Bank statements have to run to within the last 15 days, with the closing balance visible and the bank's stamp on every page." },
        { tag: "Common", title: "A balance below ₹1 lakh a head", text: "A family of four needs the balance for four. A large recent deposit to reach it reads as borrowed." },
        { tag: "Common", title: "Business papers without attestation", text: "Registration and GST documents need MEA attestation. Photocopies alone are sent back." },
        { tag: "Common", title: "Silence where there's no ITR", text: "Not filing returns can be fine. Not explaining it in the covering letter usually isn't." },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Turkey application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Who's going, roughly when, and any visa you already hold." },
        { title: "We send the list", text: "Built for your work: employed, business, retired or freelance." },
        { title: "We check every page", text: "Form ready for your signature, covering letter drafted, documents read." },
        { title: "Submission", text: "At the visa application centre, with the appointment booked for you." },
        { title: "Until it's decided", text: "Queries answered fast, tracked until your passport is back." },
      ],
    },
    closing: "Tell us when you're going to Turkey. We'll send the document list.",
    metaTitle: "Türkiye Tourist Visa from Kerala",
    metaDescription:
      "Turkey (Türkiye) sticker visa from Kerala - handwritten form, bank statements and covering letter checked page by page, then your submission appointment booked. Or the e-Visa if you hold a US, UK or Schengen visa.",
  },
  // usa-visitor-visa (1).pdf
  {
    slug: "united-states",
    code: "us",
    name: "United States",
    title: "USA visitor visa (B1/B2)",
    region: "North America",
    heroLead:
      "A US visitor visa is decided in a short interview with a consular officer. Most answers take a few minutes, and the officer mainly wants to know one thing: will you come back to India? We prepare your DS-160, book your biometrics and interview, and get your documents ready so they back up what you say at the window.",
    facts: [
      { label: "Route", value: "DS-160 + interview", note: "Online form, biometrics at the OFC, then an interview" },
      { label: "Stay", value: "Decided at entry", note: "The officer at the US airport sets how long you can stay" },
      { label: "Wait", value: "Months, not weeks", note: "Interview slots in India are booked far ahead; the dates move often" },
      { label: "Start", value: "As early as possible", note: "Book the interview before you book flights" },
    ],
    intro: {
      title: "Held a US visa before?",
      body:
        "If your earlier B1/B2 visa was issued for full validity and expired less than 12 months ago, you may be able to renew without an interview (the \"dropbox\"). Apply at least a week before it reaches 12 months since expiry, so there's time to book the slot. The rules on who qualifies have narrowed and change often. Send us a photo of your old visa and we'll check before we book anything.\n\nEveryone else attends an in-person interview, and that's what the list below is for. Most Kerala files are family visits, holidays and trips to see children studying or working in the US. The officer asks why you're going, who's paying and what brings you home. Your documents should answer the same questions.",
    },
    documents: {
      title: "USA visitor visa requirements",
      lead: "The documents we ask for. The officer may not ask to see them all, but you carry every one to the interview.",
      groups: [
        {
          title: "From the applicant",
          items: [
            "Original passport valid for at least 6 months beyond your stay in the United States, with at least 2 blank pages",
            "All old passports",
            "DS-160 confirmation page",
            "Appointment confirmation for the OFC and the interview",
            "Photo: 2 × 2 inch, white background, taken recently. Both a digital copy (uploaded with the DS-160) and a printed copy",
            "Travel itinerary explaining the trip: where you'll go, for how long, and where you'll stay",
          ],
        },
        {
          title: "Money and income",
          items: [
            "Bank statement: last 6 months, with enough balance for the trip, updated and attested by the bank",
            "Income tax returns or Form 16: last 3 years",
            "Other investments, optional but useful: fixed deposits, share certificates, property papers",
          ],
        },
        {
          title: "Money and income: if someone else is paying",
          items: ["Sponsorship letter, the sponsor's ID proof and their updated bank statement"],
        },
        {
          title: "Your work: if employed",
          items: ["Leave sanctioned certificate from your employer", "Last 3 months' salary slips", "Company visiting card"],
        },
        {
          title: "Your work: if self-employed",
          items: [
            "Business registration proof",
            "Company's updated bank statement",
            "Company income tax returns: last 3 years",
            "Visiting card",
          ],
        },
        {
          title: "Your work: if retired",
          items: ["Pension statement"],
        },
        {
          title: "Depending on the trip: visiting family or friends",
          items: [
            "Invitation letter from the host",
            "Copy of the host's passport or US residence permit, and their address proof",
          ],
        },
        {
          title: "Depending on the trip: students and minors",
          items: [
            "School or college ID card (if a student)",
            "Minor travelling without parents: No Objection Certificate from the parents and their ID proof",
          ],
        },
        {
          title: "Depending on the trip: business visit",
          items: ["Invitation letter from the US company, and a covering letter from your Indian company"],
        },
        {
          title: "Good to know",
          items: [
            "Kerala falls under the US Consulate General in Chennai. You can choose another city if its dates are earlier",
            "You must go in person twice: once to the Offsite Facilitation Center (OFC) for fingerprints and photo, then to the Embassy or Consulate for the interview, usually a day or two later",
            "Phones and bags aren't allowed inside the consulate",
            "If approved, the consulate keeps your passport to print the visa and returns it through the courier or OFC",
          ],
        },
      ],
      note: "US rules on interviews, waivers and appointment dates change often. We confirm the current process for your passport before you pay the visa fee.",
    },
    pitfalls: {
      title: "Where USA files go wrong",
      lead: "What we see most often in applicants who come to us after a refusal.",
      items: [
        { tag: "Common", title: "A DS-160 that doesn't match the answers", text: "The officer has your form on screen. If what you say at the window differs from it, even on small things, trust goes quickly." },
        { tag: "Common", title: "No clear reason to come back", text: "Most refusals are under section 214(b): the officer wasn't convinced of your ties to India. Job, family, property and past travel all count." },
        { tag: "Common", title: "Money that appeared last month", text: "A large recent deposit in an otherwise quiet account reads as borrowed. Six months of steady history says more than the final balance." },
        { tag: "Common", title: "Vague trip plans", text: "\"Visiting and seeing places\" isn't an answer. Know your dates, who you'll stay with and roughly what you'll do." },
        { tag: "Common", title: "Reading from documents", text: "Officers want short, direct answers from you. Offer a paper only when asked for it." },
      ],
      refused: {
        title: "Already refused?",
        text: "Tell us what was asked and what you answered. We'll be honest about what's changed and whether it's worth reapplying now.",
      },
    },
    process: {
      title: "How your USA application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Who's going, why, roughly when, and any US visa you've had before." },
        { title: "We fill the DS-160", text: "With you, answer by answer, so it matches your documents." },
        { title: "Fee and booking", text: "Visa fee paid, OFC and interview dates booked in the city that suits you." },
        { title: "Interview preparation", text: "Documents arranged in order, and the likely questions talked through." },
        { title: "Until it's decided", text: "Tracked until your passport is back with the visa." },
      ],
    },
    closing: "Tell us when you're going to the USA. We'll send the document list.",
    metaTitle: "USA Visitor Visa from Kerala",
    metaDescription:
      "USA B1/B2 visitor visa from Kerala - DS-160 filled with you, OFC and interview booked, and your documents arranged to back up what you say at the window. Dropbox renewals checked first.",
  },
  // Austria_tourist_visa_page.pdf
  {
    slug: "austria",
    code: "at",
    name: "Austria",
    title: "Austria tourist visa",
    region: "Central Europe",
    heroLead: "Indian passports need a Schengen visa for Austria. The file is lodged at VFS Global with your fingerprints, and it's checked closely: the insurance, the hotel addresses and six months of stamped bank statements. We check those before anything else.",
    facts: [
      {
        label: "Route",
        value: "Schengen visa via VFS",
        note: "Biometrics taken in person",
      },
      {
        label: "Stay",
        value: "Up to 90 days",
        note: "In any 180-day period",
      },
      {
        label: "Processing",
        value: "About 15 days",
        note: "Longer in the summer season",
      },
      {
        label: "Start",
        value: "6–8 weeks before",
        note: "You can apply up to 6 months ahead",
      },
    ],
    intro: {
      title: "One visa, the whole Schengen area",
      body: "An Austrian visa is a Schengen visa: it covers travel across the Schengen countries for up to 90 days in any 180. Apply to Austria if it's your main destination, or your first entry when the time is split evenly.\n\nThe file is lodged in person at VFS Global, where your fingerprints and photo are taken. Insurance of at least €30,000, hotel addresses in full and 6 months of stamped bank statements are where files are checked hardest.",
    },
    documents: {
      title: "Austria tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport, valid 3 months beyond your return, with 2 blank pages. Issued within the last 10 years, plus all old passports",
            "Visa application form, completely filled and signed. For children under 18, both parents or the legal guardian sign, with copies of their passports attached",
            "Travel insurance declaration form",
            "2 recent photos: 35 × 45 mm, white or plain light background. Not older than 6 months; 36 mm from forehead to chin; no head covering for men",
            "Travel and health insurance: one copy of the policy. Valid for all Schengen states, with at least €30,000 medical cover",
            "Complete travel plan. If you're visiting more than one country",
            "Air ticket reservation, including the return flight. With the reservation details",
            "Hotel reservation confirmed by the hotel, for the whole trip. Or other proof of accommodation",
            "Car rental reservation, if you have one",
          ],
        },
        {
          title: "Hotel details on the form",
          items: [
            "Full name of the hotel or hostel",
            "Street, building name or number, and city",
            "Email address, and telephone number with city code",
          ],
        },
        {
          title: "Financial means",
          items: [
            "Original bank statement: last 6 months. Stamped by the bank, showing your regular monthly income and current balance",
            "No regular salary on the statement? Add other proof of regular income, such as payslips for the last 6 months",
          ],
        },
        {
          title: "Employment letter",
          items: [
            "Purpose of the visit",
            "Your salary and date of employment",
            "Length of contract, position held, and whether it is renewable",
            "Attested by the Chamber of Commerce",
          ],
        },
        {
          title: "Self-employed and others",
          items: [
            "Self-employed: valid original trade licence, one copy, with translation",
            "Sponsor different from your employer? A no-objection letter from the sponsor named in your residence permit",
            "Private or domestic staff: a letter from the sponsor and a copy of the job contract",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Austria files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "Hotel addresses left incomplete",
          text: "The form needs the full address, email and phone of every hotel. A name alone gets queried.",
        },
        {
          tag: "Common",
          title: "Insurance below €30,000",
          text: "Cover has to reach €30,000 for medical costs and apply across all Schengen states.",
        },
        {
          tag: "Common",
          title: "A statement without the bank's stamp",
          text: "Six months, original, stamped, with the current balance. A net-banking printout won't do.",
        },
        {
          tag: "Common",
          title: "Photos that miss the size",
          text: "The face has to measure 36 mm, forehead to chin. Photos made for other countries often don't.",
        },
        {
          tag: "Common",
          title: "One parent signing for a child",
          text: "Both parents or the legal guardian sign, and copies of their passports go in.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Austria application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, who's going, and which countries you'll see.",
        },
        {
          title: "We check the file",
          text: "Insurance, hotel addresses and bank statements first.",
        },
        {
          title: "We fill the form",
          text: "Every hotel address in full, checked against the bookings.",
        },
        {
          title: "You give biometrics",
          text: "Fingerprints and photo at VFS, and the file is lodged.",
        },
        {
          title: "Until it's back",
          text: "Tracked until the passport is in your hand.",
        },
      ],
    },
    closing: "Tell us when you're going to Austria. We'll send the document list.",
    metaTitle: "Austria Tourist Visa from Kerala",
    metaDescription: "Austria tourist visa from Kerala - a Schengen visa lodged at VFS Global with your fingerprints, with the insurance, full hotel addresses and six months of stamped bank statements checked first.",
  },
  // Belgium_tourist_visa_page.pdf
  {
    slug: "belgium",
    code: "be",
    name: "Belgium",
    title: "Belgium tourist visa",
    region: "Western Europe",
    heroLead: "Indian passports need a Schengen visa for Belgium. The file is lodged at the visa application centre with your fingerprints. Belgium sets a daily funds minimum and wants a day-by-day itinerary, so the bank statement and cover letter are what we check first.",
    facts: [
      {
        label: "Route",
        value: "Schengen visa",
        note: "Biometrics at the visa centre",
      },
      {
        label: "Stay",
        value: "Up to 90 days",
        note: "In any 180-day period",
      },
      {
        label: "Processing",
        value: "About 15 days",
        note: "Longer in the summer season",
      },
      {
        label: "Start",
        value: "6–8 weeks before",
        note: "You can apply up to 6 months ahead",
      },
    ],
    intro: {
      title: "Funds, counted by the day",
      body: "Belgium asks you to show at least €95 per day if you're staying in a hotel, or €45 per day with family or friends. Your last 6 months of bank statements have to cover that for the whole trip.\n\nThe cover letter needs the exact purpose, how long you'll stay, and a daily itinerary. It's a Schengen visa, good for up to 90 days in any 180, so apply to Belgium when it's your main destination.",
    },
    documents: {
      title: "Belgium tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Passport, valid 3 months past your departure, with 2 blank pages. Issued within the last 10 years; add copies of previous visas and old passports",
            "Schengen visa application form, fully completed and signed",
            "2 recent colour photos: 35 × 45 mm. White or light grey background",
            "Cover letter. The exact purpose, how long you'll stay, and a day-by-day itinerary",
            "Flight itinerary. Round-trip reservations or confirmed bookings",
            "Proof of accommodation. Confirmed hotel bookings, a rental agreement, or a formal invitation from a host in Belgium",
            "Travel medical insurance. At least €30,000 for emergencies and repatriation, valid across the Schengen area",
            "Bank statements: last 6 months. Showing enough balance for the whole trip",
          ],
        },
        {
          title: "Employed",
          items: [
            "Salary slips: last 3 months",
            "Copy of your employment ID",
            "Leave sanction letter from your employer",
          ],
        },
        {
          title: "Self-employed",
          items: [
            "Company registration documents",
            "Business bank statements",
          ],
        },
        {
          title: "Tax proof",
          items: [
            "Income tax returns or Form 16 for the last 3 years",
          ],
        },
        {
          title: "Funds per day",
          items: [
            "Staying in a hotel. At least €95 per day",
            "Staying with family or friends. At least €45 per day",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Belgium files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "A balance short of the daily minimum",
          text: "€95 a day in a hotel, €45 with family. A 10-day hotel trip needs €950 a head.",
        },
        {
          tag: "Common",
          title: "A cover letter without a daily plan",
          text: "Belgium wants the itinerary day by day, not just the travel dates.",
        },
        {
          tag: "Common",
          title: "Old passports left out",
          text: "Copies of previous visas and passports belong in the file.",
        },
        {
          tag: "Common",
          title: "Insurance that misses repatriation",
          text: "Cover must include repatriation, reach €30,000 and apply across the Schengen area.",
        },
        {
          tag: "Common",
          title: "No leave sanction letter",
          text: "Salaried applicants need the leave letter as well as salary slips.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Belgium application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, who's going, and where you'll stay.",
        },
        {
          title: "We check the funds",
          text: "Statements against the €95 or €45 daily minimum.",
        },
        {
          title: "We write the letter",
          text: "Purpose, duration and a day-by-day plan.",
        },
        {
          title: "You give biometrics",
          text: "Fingerprints and photo at the visa centre.",
        },
        {
          title: "Until it's back",
          text: "Tracked until the passport is in your hand.",
        },
      ],
    },
    closing: "Tell us when you're going to Belgium. We'll send the document list.",
    metaTitle: "Belgium Tourist Visa from Kerala",
    metaDescription: "Belgium tourist visa from Kerala - a Schengen visa with a daily funds minimum of €95 in a hotel or €45 with family, and a day-by-day cover letter we check before you file.",
  },
  // Bulgaria_tourist_visa_page.pdf
  {
    slug: "bulgaria",
    code: "bg",
    name: "Bulgaria",
    title: "Bulgaria tourist visa",
    region: "Eastern Europe",
    heroLead: "Indian passports need a Schengen visa for Bulgaria. The form is signed in two places, the photo rules are strict, and you must show at least €50 for each day of your stay. We check the form, the photo and the funds first.",
    facts: [
      {
        label: "Route",
        value: "Schengen visa",
        note: "Biometrics at the visa centre",
      },
      {
        label: "Stay",
        value: "Up to 90 days",
        note: "In any 180-day period",
      },
      {
        label: "Processing",
        value: "About 15 days",
        note: "Longer in the summer season",
      },
      {
        label: "Start",
        value: "6–8 weeks before",
        note: "You can apply up to 6 months ahead",
      },
    ],
    intro: {
      title: "Signed twice, funded daily",
      body: "Fill the form in English or Bulgarian and sign it in two places: field 37 and the last field. For children under 18, the parents or guardian sign.\n\nYou'll need at least €50 per day of your stay, and never less than €500 in total, or proof of prepaid tourist services. Three months of bank statements and three years of tax returns back it up.",
    },
    documents: {
      title: "Bulgaria tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Application form in English or Bulgarian. Signed in person in two places: field 37 and the last field",
            "Passport, valid 3 months after you leave Bulgaria. Issued within 10 years, 2 empty pages back to back, no handwritten changes to the data page",
            "Copy of the current passport. Data pages, and every page with visas or travel stamps",
            "Previous passports. Originals, or proof of loss",
            "1 recent colour photo: 3.5 × 4.5 cm. Light background, face filling 70–80% of the photo",
            "Travel medical insurance. Valid for Bulgaria for the whole stay, at least €30,000",
            "Cover letter. Purpose of the trip, with the itinerary and each location for the length of your stay",
            "Return ticket or confirmed booking. Air, road or sea",
            "Proof of accommodation. Hotel booking confirmed in your name, private accommodation, or a title deed or lease",
            "Proof of residence, if applicable. Not an Indian national? A copy of your Indian residence permit or return visa",
          ],
        },
        {
          title: "Salaried",
          items: [
            "Letter on company letterhead: your position and years of service",
            "Grant of leave",
            "Salary certificate for the last 3 months",
          ],
        },
        {
          title: "Self-employed",
          items: [
            "Visa request letter on company letterhead",
            "Company registration or ownership papers",
          ],
        },
        {
          title: "Student",
          items: [
            "Leave letter from your school or university",
            "Copy of your valid student ID",
          ],
        },
        {
          title: "Funds",
          items: [
            "At least €50 per day of stay. Minimum €500 in total, or proof of prepaid tourist services",
            "Bank statement: last 3 months. Savings and current accounts, if you have both",
            "Income tax returns: last 3 years. ITR-V acknowledgement; personal and company, if applicable",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Bulgaria files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "A form signed only once",
          text: "Bulgaria wants two signatures: field 37 and the last field.",
        },
        {
          tag: "Common",
          title: "A photo that breaks the rules",
          text: "No dark glasses, no head covering unless for religious reasons, no cut-out amateur photos.",
        },
        {
          tag: "Common",
          title: "Funds under the minimum",
          text: "€50 a day, never under €500. A 7-day trip needs €500; a 14-day trip, €700.",
        },
        {
          tag: "Common",
          title: "A data page with handwritten changes",
          text: "Any alteration to the data page makes the passport unusable for the visa.",
        },
        {
          tag: "Common",
          title: "Old passports missing",
          text: "Bring the originals, or proof that they were lost.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Bulgaria application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, who's going, and where you'll stay.",
        },
        {
          title: "We check the form",
          text: "Both signatures, in English or Bulgarian throughout.",
        },
        {
          title: "We check the photo",
          text: "Size, background and face against Bulgaria's rules.",
        },
        {
          title: "You give biometrics",
          text: "Fingerprints and photo at the visa centre.",
        },
        {
          title: "Until it's back",
          text: "Tracked until the passport is in your hand.",
        },
      ],
    },
    closing: "Tell us when you're going to Bulgaria. We'll send the document list.",
    metaTitle: "Bulgaria Tourist Visa from Kerala",
    metaDescription: "Bulgaria tourist visa from Kerala - a Schengen visa with a form signed in two places, strict photo rules and at least €50 a day in funds, all checked before you file.",
  },
  // Croatia_tourist_visa_page.pdf
  {
    slug: "croatia",
    code: "hr",
    name: "Croatia",
    title: "Croatia tourist visa",
    region: "Southern Europe",
    heroLead: "Indian passports need a Schengen visa for Croatia. The funds are checked closely: bank statements signed and stamped, three years of tax returns, and your credit card and forex records. If someone in Croatia is hosting you, a notarized letter of guarantee carries the file.",
    facts: [
      {
        label: "Route",
        value: "Schengen visa",
        note: "Biometrics at the visa centre",
      },
      {
        label: "Stay",
        value: "Up to 90 days",
        note: "In any 180-day period",
      },
      {
        label: "Processing",
        value: "About 15 days",
        note: "Longer in the summer season",
      },
      {
        label: "Start",
        value: "6–8 weeks before",
        note: "You can apply up to 6 months ahead",
      },
    ],
    intro: {
      title: "Funds, and who's hosting you",
      body: "Croatia looks hard at money: three months of original bank statements, signed and stamped by the bank, three years of tax returns, a credit card with three months of statements, and a passport endorsement or receipt for foreign exchange bought.\n\nStaying with someone? A letter of guarantee certified by a public notary in Croatia, with the guarantor's proof of income, shows why you're going and where you'll stay. You get a copy to show at the border.",
    },
    documents: {
      title: "Croatia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Visa application form. Filled online, then printed and signed",
            "Passport, issued within the last 10 years. Valid 3 months beyond the visa, with 2 empty pages back to back",
            "2 photographs. To the Schengen photo specification",
            "Travel health insurance. At least €30,000, covering urgent medical care, hospitalisation and repatriation",
            "Cover letter. Purpose, itinerary, each location and how long you'll stay in Croatia",
            "Return travel reservation. Air, bus or boat; car registration and driving licence if you drive",
            "Onward travel, if going to a third country. Tickets or itinerary for that leg",
            "Accommodation. Hotel booking, private stay, title deed or lease; or provided by your guarantor",
            "Proof of residence. Not an Indian national? A copy of your stay permit",
          ],
        },
        {
          title: "Salaried",
          items: [
            "Letter on company letterhead: your position and years of service",
            "Grant of leave",
            "Salary certificate for the last 3 months",
          ],
        },
        {
          title: "Self-employed or student",
          items: [
            "Self-employed: visa request letter on company letterhead, with company registration papers",
            "Student: leave letter from your school or university, and a copy of your valid ID",
          ],
        },
        {
          title: "Funds",
          items: [
            "Bank statements: last 3 months, originals. Savings and current accounts, signed and stamped by an authorised bank official",
            "Income tax returns: last 3 years, personal and company as applicable",
            "Copy of your international credit card, with 3 months of statements",
            "Passport endorsement or receipt for foreign exchange bought",
          ],
        },
        {
          title: "Letter of guarantee",
          items: [
            "Certified by a public notary in Croatia. Original, or a copy if the original is with the Ministry of Foreign and European Affairs",
            "Guarantor's proof of income: pay or pension slips for 3 months, or bank funds",
            "The guarantor can also provide your accommodation",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Birth certificate",
            "Travelling without a parent or guardian? A notarized consent with the guardian's details, the purpose, dates and length of stay, and their signature",
          ],
        },
        {
          title: "Family of Croatian or EEA citizens",
          items: [
            "Birth or marriage certificate from the register",
            "Copy of the Croatian or EEA citizen's ID card",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Croatia files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "Statements without signature and stamp",
          text: "Originals, signed and stamped by an authorised bank official. Printouts come back.",
        },
        {
          tag: "Common",
          title: "No forex proof",
          text: "Croatia asks for the passport endorsement or purchase receipt. Keep it from the moneychanger.",
        },
        {
          tag: "Common",
          title: "A guarantee not notarized in Croatia",
          text: "It has to be certified by a public notary in Croatia, with the guarantor's income proof.",
        },
        {
          tag: "Common",
          title: "A minor travelling without consent",
          text: "Without a parent, a child needs a notarized consent with dates, purpose and signature.",
        },
        {
          tag: "Common",
          title: "No proof of the way home",
          text: "A return reservation, or car papers and licence if driving, shows you'll go back.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Croatia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, who's going, and who's hosting you, if anyone.",
        },
        {
          title: "We check the funds",
          text: "Statements, tax returns, card and forex records.",
        },
        {
          title: "We check the guarantee",
          text: "Notary certification and the guarantor's income proof.",
        },
        {
          title: "You give biometrics",
          text: "Fingerprints and photo at the visa centre.",
        },
        {
          title: "Until it's back",
          text: "Tracked until the passport is in your hand.",
        },
      ],
    },
    closing: "Tell us when you're going to Croatia. We'll send the document list.",
    metaTitle: "Croatia Tourist Visa from Kerala",
    metaDescription: "Croatia tourist visa from Kerala - a Schengen visa where funds are checked closely: stamped statements, tax returns, card and forex records, or a notarized letter of guarantee.",
  },
  // Czech_Republic_tourist_visa_page.pdf
  {
    slug: "czech-republic",
    code: "cz",
    name: "Czechia",
    title: "Czech Republic tourist visa",
    region: "Central Europe",
    heroLead: "Indian passports need a Schengen visa for the Czech Republic. The file is lodged with your fingerprints at the visa application centre, and it's checked closely: a signed cover letter, three months of stamped bank statements, and two years of tax returns. We check those first.",
    facts: [
      {
        label: "Route",
        value: "Schengen visa",
        note: "Biometrics at the visa centre",
      },
      {
        label: "Stay",
        value: "Up to 90 days",
        note: "In any 180-day period",
      },
      {
        label: "Processing",
        value: "About 15 days",
        note: "Longer in the summer season",
      },
      {
        label: "Start",
        value: "6–8 weeks before",
        note: "You can apply up to 6 months ahead",
      },
    ],
    intro: {
      title: "A letter that names everyone",
      body: "The cover letter is signed by you and covers the purpose and length of the trip, the names and passport numbers of everyone travelling with you, and how you'll travel and where you'll stay. Going to several Schengen countries? Show lodging in each.\n\nMoney is shown with an original bank statement for the last three months, stamped and signed by the bank, and your income tax acknowledgements for the last two assessment years. If someone sponsors the trip, theirs go in too.",
    },
    documents: {
      title: "Czech Republic tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Application form, completely filled and signed",
            "Passport issued within the last 10 years. Valid 3 months beyond your return, with 2 empty pages",
            "Passport copies. Bio-data page, the last page, and Schengen entry and exit stamps from old passports if you have them",
            "Cover letter, signed. Purpose, duration, names and passport numbers of those travelling with you, transport and accommodation",
            "Marriage certificate, if married. If the passport doesn't show your marital status; ration card copy if applicable",
            "2 recent colour photos, high definition. White background, face covering at least 80% of the frame, to ICAO specification; not older than 6 months",
            "Proof of transport and itinerary",
            "Proof of lodging. Hotel reservations, a holiday home or campus residence; for several Schengen states, lodging in each",
            "Travel medical insurance. Valid for all Schengen countries, at least €30,000",
            "Bank statement: last 3 months, original. Stamped and signed by the bank; yours, and your sponsor's if applicable",
            "Income tax return acknowledgement. Last 2 assessment years; yours, and your sponsor's if applicable",
          ],
        },
        {
          title: "Employed",
          items: [
            "Pay slips: last 3 months",
            "Employment contract",
            "Employer's approval of your leave",
          ],
        },
        {
          title: "Company owner or self-employed",
          items: [
            "Certificate of company registration",
            "GST registration",
            "Business bank account statement. With income tax returns, barcode verifiable",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension statements: last 3 months",
            "Proof of regular income from property or business",
          ],
        },
        {
          title: "Pupil or student",
          items: [
            "Certificate of enrolment from your school or university",
            "Copy of your student ID card",
          ],
        },
        {
          title: "Sponsored trips",
          items: [
            "Staying with a host? Proof of sponsorship or private accommodation on the national form, or an official invitation verified by the Alien Police Service",
            "Paid for by a parent, guardian or anyone else? Their written consent, certified by a public notary",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Travelling with one parent. Notarized consent from the other parent or guardian, unless one has sole custody",
            "Copies of both parents' passports. Or the birth certificate and copies of the parents' ID cards",
          ],
        },
        {
          title: "Tourism",
          items: [
            "Travel agency certificate confirming an organised trip, or other proof of your travel plans",
          ],
        },
        {
          title: "Visiting family or friends",
          items: [
            "Invitation from your host. Their address, contact details and the dates of your stay",
            "Proof of their legal residence: passport, national ID or residence permit",
            "Proof of the relationship, if visiting relatives",
          ],
        },
        {
          title: "Business trips",
          items: [
            "Invitation from the company you're visiting. Plus a cover letter from your employer",
            "Both letters confirm who you are, the purpose, and the dates and place of stay",
          ],
        },
        {
          title: "Cultural, sports or religious events",
          items: [
            "Invitation, entry tickets, enrolment or programme",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Czech files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "A cover letter missing names",
          text: "Everyone travelling with you, with passport numbers, has to be in the signed letter.",
        },
        {
          tag: "Common",
          title: "Photos with a small face",
          text: "The face must fill at least 80% of the frame. Standard studio photos often don't.",
        },
        {
          tag: "Common",
          title: "Lodging for one country only",
          text: "Several Schengen countries means proof of lodging in each of them.",
        },
        {
          tag: "Common",
          title: "A sponsor without notarized consent",
          text: "If a parent or anyone else pays, their consent must be certified by a public notary.",
        },
        {
          tag: "Common",
          title: "Old Schengen stamps left out",
          text: "Copies of entry and exit stamps from previous passports belong in the file.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Czech application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, who's going, and where you'll stay.",
        },
        {
          title: "We write the letter",
          text: "Purpose, dates, everyone travelling and where you'll stay.",
        },
        {
          title: "We check the funds",
          text: "Statements and tax acknowledgements, and your sponsor's if any.",
        },
        {
          title: "You give biometrics",
          text: "Fingerprints and photo at the visa centre.",
        },
        {
          title: "Until it's back",
          text: "Tracked until the passport is in your hand.",
        },
      ],
    },
    closing: "Tell us when you're going to the Czech Republic. We'll send the document list.",
    metaTitle: "Czechia Tourist Visa from Kerala",
    metaDescription: "Czech Republic tourist visa from Kerala - a Schengen visa with a signed cover letter naming everyone travelling, three months of stamped bank statements and two years of tax returns.",
  },
  // Denmark_tourist_visa_page.pdf
  {
    slug: "denmark",
    code: "dk",
    name: "Denmark",
    title: "Denmark tourist visa",
    region: "Northern Europe",
    heroLead: "Indian passports need a Schengen visa for Denmark. The form is filled and the fee paid online on Denmark's own portal, then the file is lodged with your fingerprints. Denmark sets a daily funds minimum in kroner, so the bank statement is what we check first.",
    facts: [
      {
        label: "Route",
        value: "Schengen visa",
        note: "Biometrics at the visa centre",
      },
      {
        label: "Stay",
        value: "Up to 90 days",
        note: "In any 180-day period",
      },
      {
        label: "Processing",
        value: "About 15 days",
        note: "Longer in the summer season",
      },
      {
        label: "Start",
        value: "6–8 weeks before",
        note: "You can apply up to 6 months ahead",
      },
    ],
    intro: {
      title: "Funds, counted in kroner",
      body: "You must have at least DKK 500 per day if you're staying in a hotel, or DKK 350 per day in a private home, plus enough for the trip home. Every applicant gives their own bank statement for the last three months, even when someone else is paying.\n\nThe form is filled on applyvisa.um.dk, printed and signed, and the fee receipt is printed from the same site. The Embassy recommends you don't buy flight tickets until the visa is approved; a reservation is enough.",
    },
    documents: {
      title: "Denmark tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Application form from applyvisa.um.dk. Completely filled online, printed and signed",
            "Visa fee payment receipt, printed from applyvisa.um.dk",
            "1 recent colour photo: 3.5 × 4.5 cm. Less than 6 months old, with good resemblance",
            "Passport, valid 3 months beyond your stay in Schengen. With at least 2 blank pages; other travel documents need 6 months",
            "Copies of Schengen visas and entry and exit stamps from previous passports",
            "Cover letter. Purpose, duration, names of those travelling with you, transport and accommodation",
            "Travel medical insurance. Valid for all Schengen countries, at least €30,000",
            "Travel plans. Travel agency certificate for an organised trip, or another document showing your plans",
            "Return flight reservation. For several Schengen states: intra-Schengen flights, train itinerary or car rental; for a cruise, the ticket and payment receipt",
            "Proof of accommodation. Hotel bookings or accommodation guarantees for the whole stay",
            "Marriage certificate, if travelling with your spouse. If the passport doesn't show your marital status; ration card copy if applicable",
          ],
        },
        {
          title: "Funds",
          items: [
            "Original personal bank statement: last 3 months. In your name, stamped and signed by the bank; needed from every applicant",
            "At least DKK 500 per day in a hotel. Or DKK 350 per day in a private home, plus the trip home",
            "Income tax return acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Photocopy of the birth certificate",
            "Travelling with one parent. Notarized consent from the other parent or guardian, unless one has sole custody",
            "Travelling alone. Notarized consent from both parents or guardians",
            "Copies of both parents' passports. Or their ID documents, with signature and photo",
          ],
        },
        {
          title: "Employed",
          items: [
            "Payslips: last 3 months",
            "Employment contract",
            "Holiday approval or leave letter from your employer",
          ],
        },
        {
          title: "Company owner or self-employed",
          items: [
            "Certificate of company registration. Including the GST registration number, for companies in India",
          ],
        },
        {
          title: "Sponsored",
          items: [
            "Proof of sponsorship",
            "Letter from the sponsor",
            "Copy of the sponsor's photo ID: passport, Aadhaar or driving licence",
          ],
        },
        {
          title: "Retired or student",
          items: [
            "Retired: pension statements for the last 3 months, and proof of regular income from property or business",
            "Student: certificate from the school or university where you are enrolled",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Denmark files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "A balance short of the daily minimum",
          text: "DKK 500 a day in a hotel, DKK 350 in a private home. A 10-day hotel stay needs DKK 5,000.",
        },
        {
          tag: "Common",
          title: "Tickets bought before approval",
          text: "The Embassy advises against it. A reservation is enough for the file.",
        },
        {
          tag: "Common",
          title: "No statement because someone else pays",
          text: "Every applicant gives their own bank statement, sponsored or not.",
        },
        {
          tag: "Common",
          title: "Intra-Schengen travel left out",
          text: "Seeing Sweden or Norway too? Show the flight, train or car rental for that leg.",
        },
        {
          tag: "Common",
          title: "A form not printed and signed",
          text: "Filled online is not the end: print it, sign it, and add the printed fee receipt.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Denmark application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, who's going, and where you'll stay.",
        },
        {
          title: "We check the funds",
          text: "Statements against the DKK 500 or DKK 350 daily minimum.",
        },
        {
          title: "We fill the form",
          text: "On applyvisa.um.dk, printed and signed, fee paid.",
        },
        {
          title: "You give biometrics",
          text: "Fingerprints and photo at the visa centre.",
        },
        {
          title: "Until it's back",
          text: "Tracked until the passport is in your hand.",
        },
      ],
    },
    closing: "Tell us when you're going to Denmark. We'll send the document list.",
    metaTitle: "Denmark Tourist Visa from Kerala",
    metaDescription: "Denmark tourist visa from Kerala - a Schengen visa applied on applyvisa.um.dk, with a daily funds minimum of DKK 500 in a hotel or DKK 350 in a private home.",
  },
  // Estonia_tourist_visa_page.pdf
  {
    slug: "estonia",
    code: "ee",
    name: "Estonia",
    title: "Estonia tourist visa",
    region: "Northern Europe",
    heroLead: "Indian passports need a Schengen visa for Estonia. The file is lodged with your fingerprints at the visa application centre, and every financial document has to be an original on A4, stamped and signed by the bank. We check the originals and your employer's letter first.",
    facts: [
      {
        label: "Route",
        value: "Schengen visa",
        note: "Biometrics at the visa centre",
      },
      {
        label: "Stay",
        value: "Up to 90 days",
        note: "In any 180-day period",
      },
      {
        label: "Processing",
        value: "About 15 days",
        note: "Longer in the summer season",
      },
      {
        label: "Start",
        value: "6–8 weeks before",
        note: "You can apply up to 6 months ahead",
      },
    ],
    intro: {
      title: "Originals, stamped by the bank",
      body: "Every financial document has to be an original on A4, with the bank's stamp and signature. That covers your last 3 months of personal statements, and your salary account too if you're employed. Add your ITR acknowledgement for the last 2 assessment years.\n\nYour employer writes an introduction letter on letterhead, signed and stamped, with your position, years of service and a no-objection statement for the trip. Don't buy tickets before the visa: a return flight itinerary is enough.",
    },
    documents: {
      title: "Estonia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Passport issued within the last 10 years. Valid 3 months after your return, with 2 empty pages",
            "Old passports. If lost, an FIR or proof of cancellation",
            "Passport copies: the bio-data page and the last page",
            "Application form, signed twice. For a minor, signed twice by the legal guardian, with proof of custody",
            "1 photo: 35 × 45 mm, colour, white background. Not older than 6 months, with no software corrections",
            "Cover letter. Name, passport number and travel date as on the ticket, with your travel plan and dates",
            "Travel health insurance. Valid in Schengen, at least €30,000 for the whole stay",
            "Proof of accommodation for the whole stay in the Schengen area",
            "Return flight itinerary. Please don't buy tickets before the visa is issued",
            "Introduction letter from your employer. On letterhead, signed and stamped by HR: position, length of service, no-objection statement, and the dates and purpose of the trip",
          ],
        },
        {
          title: "Financial status",
          items: [
            "Originals only, on A4. With the bank's stamp and signature",
            "Personal bank statements: last 3 months",
            "ITR acknowledgement page: last 2 assessment years",
          ],
        },
        {
          title: "Employed",
          items: [
            "Salary slips: last 3 months",
            "Salary account statements: last 3 months",
          ],
        },
        {
          title: "Self-employed or company owner",
          items: [
            "Business registration certificate, partnership deed, or proof of proprietorship or ownership",
            "Personal and business bank statements: last 3 months",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension account statement: last 3 months",
            "Proof of regular income from property or business",
          ],
        },
        {
          title: "Student or unemployed",
          items: [
            "Parents' or guardians' personal bank statements: last 3 months",
            "Students: copy of your college ID card, and an introduction letter from the school, college or university",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Not travelling with both parents. Notarized consent from the non-travelling parent or guardian",
            "Travelling alone. Notarized consent from both parents or the legal guardian",
            "In all cases: copies of both parents' or the guardian's passports",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Estonia files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        {
          tag: "Common",
          title: "Printouts instead of originals",
          text: "Every financial document must be an original on A4, stamped and signed by the bank.",
        },
        {
          tag: "Common",
          title: "A form signed only once",
          text: "Estonia wants two signatures from the applicant, or from the guardian for a minor.",
        },
        {
          tag: "Common",
          title: "An old passport lost with no FIR",
          text: "Bring every old passport, or an FIR or proof of cancellation.",
        },
        {
          tag: "Common",
          title: "A photo that was retouched",
          text: "Estonia asks for no software corrections. Plain, recent, white background.",
        },
        {
          tag: "Common",
          title: "A letter without the no-objection line",
          text: "Your employer must state position, service and no objection to the trip.",
        },
      ],
      refused: {
        title: "Already refused?",
        text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply.",
      },
    },
    process: {
      title: "How your Estonia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        {
          title: "You send the trip",
          text: "Dates, who's going, and where you'll stay.",
        },
        {
          title: "We check the originals",
          text: "Statements on A4, with the bank's stamp and signature.",
        },
        {
          title: "We check the letters",
          text: "Your cover letter and your employer's introduction letter.",
        },
        {
          title: "You give biometrics",
          text: "Fingerprints and photo at the visa centre.",
        },
        {
          title: "Until it's back",
          text: "Tracked until the passport is in your hand.",
        },
      ],
    },
    closing: "Tell us when you're going to Estonia. We'll send the document list.",
    metaTitle: "Estonia Tourist Visa from Kerala",
    metaDescription: "Estonia tourist visa from Kerala - a Schengen visa where every financial document must be an original on A4, stamped by the bank, with an introduction letter from your employer.",
  },
  // Finland_tourist_visa_page.pdf
  {
    slug: "finland",
    code: "fi",
    name: "Finland",
    title: "Finland tourist visa",
    region: "Northern Europe",
    heroLead: "Indian passports need a Schengen visa for Finland. The file is lodged with your fingerprints at the visa application centre, and the employment letter is read closely: salary, years of service and exact leave dates. We check that letter first.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Biometrics at the visa centre" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 days", note: "Longer in the summer season" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "An employment letter with everything in it",
      body: "Finland wants the letter on official letterhead, stamped and dated, with the company's address, email and phone. It's signed by a named officer, and states your position, salary, years of employment and the exact dates of your leave.\n\nBring every passport with Schengen visas issued in the last 59 months, not just the current one. Your travel plan should cover every destination, including other Schengen states and third countries on the way.",
    },
    documents: {
      title: "Finland tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Visa application form, with a photograph",
            "Passport, valid 3 months after the trip. Issued within the last 10 years, with 2 blank pages",
            "Other passports. Any other valid passport, and old ones with Schengen visas from the last 59 months",
            "Travel medical insurance. Valid across Schengen, at least €30,000",
            "Free-form cover letter from the applicant",
            "Travel plan covering every destination. Round-trip flight reservations, including other Schengen states and third countries",
            "Proof of accommodation for the whole stay in the Schengen area",
            "Bank statements: last 3 months",
            "ITR-V verification form: last 2 years",
            "Salary slips: last 3 months",
          ],
        },
        {
          title: "Employment letter",
          items: [
            "On official letterhead, stamped and dated. With the company address, email and phone number",
            "Signed by a named officer. Their name, position and signature",
            "States your details. Name, position, salary and years of employment",
            "Approves your leave. Exact dates, and your position after the leave",
          ],
        },
        {
          title: "Other applicants",
          items: [
            "Self-employed. Company GST registration",
            "Not working. Proof of any income; if married, your spouse's employment certificate, income proof and the marriage certificate",
            "Student. Proof of enrolment at your school or institute, on letterhead with the same details",
            "Retired. Proof of pension or other financial support",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Birth certificate, or court decision of custody (notarized)",
            "Passport and ID copies of the custodians, both parents if applicable",
            "Not travelling with a parent or guardian? Notarized permission to travel from the guardians",
          ],
        },
        {
          title: "Not an Indian citizen?",
          items: [
            "Valid Indian residence permit. Unless permanent, valid 3 months after you leave Schengen",
            "Afghan applicants: a copy of the national ID card",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Finland files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A letter without leave dates", text: "Finland wants the exact dates of absence, and your position after the leave." },
        { tag: "Common", title: "An unsigned or undated letter", text: "It needs the officer's name, position and signature, a stamp and a date." },
        { tag: "Common", title: "Old Schengen passports left at home", text: "Any passport with a Schengen visa from the last 59 months goes in." },
        { tag: "Common", title: "A plan that skips a country", text: "Stopping in another Schengen state or a third country? It has to be in the plan." },
        { tag: "Common", title: "No proof of a spouse's income", text: "Not working and married? Your spouse's employment and income proof carry the file." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Finland application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and every place you'll visit." },
        { title: "We check the letter", text: "Every line Finland asks for, before it is signed." },
        { title: "We build the plan", text: "Flights, stays and every stop on the way." },
        { title: "You give biometrics", text: "Fingerprints and photo at the visa centre." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Finland. We'll send the document list.",
    metaTitle: "Finland Tourist Visa from Kerala",
    metaDescription: "Finland tourist visa from Kerala: a Schengen visa lodged with biometrics at the visa centre. We check the employment letter, old Schengen passports and the full travel plan before your file goes in.",
  },
  // France_tourist_visa_page.pdf
  {
    slug: "france",
    code: "fr",
    name: "France",
    title: "France tourist visa",
    region: "Western Europe",
    heroLead: "Indian passports need a Schengen visa for France. The file is lodged with your fingerprints at the visa application centre, and it has to tell one story: the cover letter, the day-wise plan, the bookings and who is paying. We check that those match first.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Biometrics at the visa centre" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 days", note: "Longer in the summer season" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "One trip, told the same way",
      body: "The cover letter states the purpose, travel dates, a detailed itinerary, who is paying, and that you'll return home afterwards. The day-wise plan, flights and hotels have to agree with it, city by city.\n\nShow what brings you home: your job, business, family, and property papers if you have them. Bank statements for the last 3 to 6 months and your income tax returns show the trip is affordable.",
    },
    documents: {
      title: "France tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Visa application form, completed and signed",
            "Visa appointment confirmation",
            "Original passport, issued within the last 10 years. Valid 3 months after you leave the Schengen area, with 2 blank visa pages",
            "Copies of previous visas, if any",
            "2 recent biometric photos. Passport size, to Schengen specifications",
            "Cover letter. Purpose, travel dates, detailed itinerary, who is paying, and your return home",
            "Round-trip flight booking. Or a travel itinerary",
            "Accommodation proof. Hotel reservations for the whole stay, or an invitation and proof of accommodation from family or friends",
            "Schengen travel medical insurance. At least €30,000, valid throughout the Schengen area",
            "Day-wise travel plan. Cities to be visited, and transport between them if available",
          ],
        },
        {
          title: "Financial documents",
          items: [
            "Bank statements: last 3–6 months",
            "Income tax returns (ITR)",
            "Salary slips: last 3 months, if employed",
            "Proof of other savings or investments, if any",
          ],
        },
        {
          title: "Proof of ties to India",
          items: [
            "Employment",
            "Business ownership",
            "Family ties",
            "Property documents. Optional, but they strengthen the file",
          ],
        },
        {
          title: "Employed",
          items: [
            "Employment letter",
            "Leave approval or NOC",
            "Salary slips",
          ],
        },
        {
          title: "Self-employed",
          items: [
            "Business registration",
            "GST or company documents",
            "Business bank statements",
          ],
        },
        {
          title: "Student or retired",
          items: [
            "Student: bonafide certificate, and leave permission or NOC from your institution",
            "Retired: pension documents, if applicable",
          ],
        },
        {
          title: "If applicable",
          items: [
            "Invitation letter from your host in France",
            "Sponsor letter, with the sponsor's financial documents",
            "Marriage certificate, for a spouse",
            "Birth certificate, for minors",
            "Consent letter for minors travelling without both parents",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where France files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A cover letter that doesn't say who pays", text: "France asks who is funding the trip. If it's a sponsor, their papers go in too." },
        { tag: "Common", title: "A plan that doesn't match the bookings", text: "Day-wise cities, flights and hotels should tell the same story." },
        { tag: "Common", title: "Nothing to show you will return", text: "Job, business, family or property: show what brings you back to India." },
        { tag: "Common", title: "A leave letter missing", text: "Salaried applicants need leave approval or an NOC, not just salary slips." },
        { tag: "Common", title: "Photos made for another country", text: "France wants biometric photos to Schengen specifications." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your France application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and the cities you'll see." },
        { title: "We build the plan", text: "A day-wise itinerary that matches the bookings." },
        { title: "We write the letter", text: "Purpose, dates, who's paying, and your return." },
        { title: "You give biometrics", text: "Fingerprints and photo at the visa centre." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to France. We'll send the document list.",
    metaTitle: "France Tourist Visa from Kerala",
    metaDescription: "France tourist visa from Kerala: a Schengen visa lodged with biometrics at the visa centre. We make the cover letter, day-wise plan, bookings and proof of funds tell one story before you apply.",
  },
  // Germany_tourist_visa_page.pdf
  {
    slug: "germany",
    code: "de",
    name: "Germany",
    title: "Germany tourist visa",
    region: "Central Europe",
    heroLead: "Indian passports need a Schengen visa for Germany. The form is filled on VIDEX, printed with its barcodes and lodged at VFS with your fingerprints. Incomplete files can be refused without a request for more, so we check every page before it goes in.",
    facts: [
      { label: "Route", value: "Schengen visa via VFS", note: "Form filled on VIDEX, lodged in person" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 working days", note: "Plus up to 2 days to reach the mission" },
      { label: "Start", value: "6–8 weeks before", note: "No later than 15 working days ahead" },
    ],
    intro: {
      title: "Complete, or refused",
      body: "The German mission is not obliged to ask for missing documents before refusing, so the file has to be complete on the day. Everything must be in German or English; anything else needs a proper translation or it counts as missing.\n\nApply no earlier than 6 months and no later than 15 working days before you travel. Processing takes up to 15 working days once the file reaches the mission. A booked ticket doesn't speed it up, so a reservation is enough.",
    },
    documents: {
      title: "Germany tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Schengen application form from VIDEX, signed. Print and submit every page, including the barcodes",
            "Signed declaration of true and complete information",
            "Signed declaration of travel with valid medical insurance",
            "Passport issued within the last 10 years. Valid 3 months after your return, 2 empty pages, no observations on the data page",
            "Copy of the biometric and address pages of the passport",
            "1 biometric photo: 35 × 45 mm, white background. Face covering 70–80%, not older than 6 months",
            "Cover letter and detailed itinerary. With proof of transport; or a travel agency certificate for an organised trip",
            "Flight reservation",
            "Proof of accommodation. Hotel, holiday home or campus residence; in each Member State you visit",
            "Staying with family or friends? Host's signed confirmation, proof of address, and a copy of their passport or German ID",
            "Travel medical insurance. All Schengen countries, the whole trip, at least €30,000; Indian policies only from approved insurers",
          ],
        },
        {
          title: "Employed",
          items: [
            "Pay slips: last 3 months",
            "Employment contract",
            "Leave sanction letter from your company",
            "Bank statements: last 3 months. Stamped by the bank; separate pages that run on, no passbook copies",
            "ITR acknowledgement for 2 assessment years, or Form 16",
          ],
        },
        {
          title: "Company owner or self-employed",
          items: [
            "Certificate of company registration. With the GST registration number",
            "ITR acknowledgement for 2 assessment years, or Form 16",
            "Bank statements: last 3 months. Stamped by the bank; separate pages that run on, no passbook copies",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension statements: last 3 months, and/or proof of income from property or business",
            "Bank statements: last 3 months. Stamped by the bank; separate pages that run on, no passbook copies",
          ],
        },
        {
          title: "Student or unemployed",
          items: [
            "Student: enrolment certificate and a no-objection certificate from your school or university",
            "Bank statements: last 3 months. For university students and the unemployed; stamped by the bank; separate pages that run on, no passbook copies",
          ],
        },
        {
          title: "Sponsored by someone in India",
          items: [
            "Sponsor letter with the sponsor's passport copy",
            "Sponsor's bank statements: last 3 months. Stamped by the bank; separate pages that run on, no passbook copies",
            "Spouse: marriage certificate. Parent: birth certificate",
            "Sponsored by an Indian company? Also the company's ITR acknowledgements for the last 3 years, latest first",
          ],
        },
        {
          title: "Sponsored from Germany or the EU",
          items: [
            "Sponsor letter with the sponsor's passport copy. And their German residence permit, if not a German citizen",
            "Verpflichtungserklärung (formal obligation letter), if provided",
            "Spouse: marriage certificate. Parent: birth certificate",
            "Sponsored by a company in Germany? Sponsor letter with the signatory's passport copy and residence permit if applicable",
          ],
        },
        {
          title: "Civil status",
          items: [
            "Single: nothing more",
            "Marriage certificate, if married",
            "Divorce or custody decree, if applicable",
            "Children's birth certificates, if applicable",
            "Spouse's death certificate, if applicable",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Form and both declarations signed by both parents",
            "Birth certificate, and both parents' passport copies (biometric and address pages)",
            "A parent not applying with the child. A copy of that parent's visa",
            "Only one parent applying. Proof of sole custody, or the other parent's notarized authorization with passport copy",
            "Travelling alone. Notarized consent from both parents or guardians",
          ],
        },
        {
          title: "Applying through us",
          items: [
            "Signed authorization letter for the travel agent or representative",
            "Copy of the passport of the person submitting the application",
          ],
        },
        {
          title: "Fingerprints",
          items: [
            "Given for a Schengen visa in the last 59 months? Note the month and year on the checklist",
            "Fingerprints are taken again if you apply in person",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Germany files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Pages or barcodes missing from the form", text: "Print and submit every page of the VIDEX form, barcodes included." },
        { tag: "Common", title: "Passbook copies as statements", text: "Germany wants stamped bank statements, pages separated. Passbooks are not accepted." },
        { tag: "Common", title: "Insurance from a non-approved company", text: "German missions accept Indian travel insurance only from approved insurers." },
        { tag: "Common", title: "Documents with no translation", text: "Anything not in German or English needs a translation, or it counts as missing." },
        { tag: "Common", title: "Applying too close to travel", text: "The file must go in at least 15 working days before you fly. Earlier is safer." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Germany application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "We fill VIDEX", text: "Printed in full, barcodes and both declarations included." },
        { title: "We check the file", text: "Statements, insurer and translations, page by page." },
        { title: "You give biometrics", text: "Fingerprints and photo at VFS, file lodged." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Germany. We'll send the document list.",
    metaTitle: "Germany Tourist Visa from Kerala",
    metaDescription: "Germany tourist visa from Kerala: a Schengen visa filled on VIDEX and lodged at VFS with biometrics. We check every page, statement, insurer and translation, because incomplete files can be refused outright.",
  },
  // Uzbekistan_tourist_visa_page.pdf
  {
    slug: "uzbekistan",
    code: "uz",
    name: "Uzbekistan",
    title: "Uzbekistan tourist visa",
    region: "Central Asia",
    heroLead: "Indian passports need a visa for Uzbekistan, and it's an e-Visa: no embassy visit and no paper file. It's usually issued within a few working days and emailed to you. The photo and the passport scan carry the application, so we check those first.",
    facts: [
      { label: "Route", value: "e-Visa online", note: "Official portal, emailed to you" },
      { label: "Stay", value: "Up to 30 days", note: "Set on the e-Visa" },
      { label: "Processing", value: "About 3 working days", note: "Longer around public holidays" },
      { label: "Start", value: "2–3 weeks before", note: "Longer in peak season" },
    ],
    intro: {
      title: "An e-Visa, done online",
      body: "Uzbekistan issues tourist visas to Indian passports as an e-Visa. The form is filled online, the photo and passport scan are uploaded with it, and the visa arrives by email. There's no visa on arrival, so it has to be approved before you fly.\n\nApply only on the official government portal. Look-alike sites charge extra, and some never file anything. Print the e-Visa and carry it with your passport; the airline and the border officer may both ask for it.",
    },
    documents: {
      title: "Uzbekistan tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport before the application goes in.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport, valid at least 6 months beyond your departure, with 1 blank page. Some guidance says 3 months; we work to 6 so there's no question at the border",
            "Digital photograph: recent, in colour, passport size, white background",
            "Scanned passport copy. A clear scan of the bio page, every corner visible",
            "Travel details: confirmed return flight itinerary. Asked for on some applications; we keep it ready either way",
            "Proof of accommodation: hotel bookings. For every night of the stay",
          ],
        },
        {
          title: "At the border",
          items: [
            "Printed copy of your e-Visa",
            "Return ticket and hotel bookings, in case they're asked for",
            "Hotel registration slips. Hotels register you with the authorities; keep the slips until you leave",
          ],
        },
        {
          title: "Good to know",
          items: [
            "There's no visa on arrival for Indian passport holders",
            "Apply only on the official portal, e-visa.gov.uz",
            "Your name must match the passport exactly, in spelling and order",
          ],
        },
      ],
      note: "Rules change with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Uzbekistan files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A photo that gets rejected", text: "Selfies, shadows or a coloured background get sent back. Plain white, face straight on." },
        { tag: "Common", title: "A blurred passport scan", text: "Every letter of the bio page, including the two lines at the bottom, has to be readable." },
        { tag: "Common", title: "Applying on a look-alike site", text: "Unofficial sites charge more, and some never file the application at all." },
        { tag: "Common", title: "A passport close to expiry", text: "Short validity can mean a refusal, or trouble at the airline counter. Renew first if in doubt." },
        { tag: "Common", title: "Registration slips thrown away", text: "Keep every hotel slip until you leave. They can be asked for on the way out." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Uzbekistan application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and where you'll stay." },
        { title: "We check the scans", text: "Photo and passport scan, before anything is uploaded." },
        { title: "We fill the form", text: "On the official portal, checked against your passport." },
        { title: "We track it", text: "Until the approval arrives by email." },
        { title: "You travel", text: "e-Visa printed and carried with your passport." },
      ],
    },
    closing: "Tell us when you're going to Uzbekistan. We'll send the document list.",
    metaTitle: "Uzbekistan Tourist Visa from Kerala",
    metaDescription: "Uzbekistan tourist visa from Kerala: an e-Visa filed on the official portal and emailed in about 3 working days. We check your photo and passport scan first, so the application isn't sent back.",
  },
  // Vietnam_tourist_visa_page.pdf
  {
    slug: "vietnam",
    code: "vn",
    name: "Vietnam",
    title: "Vietnam tourist visa",
    region: "Southeast Asia",
    heroLead: "Indian passports need a visa for Vietnam, and most travellers use the e-Visa: fully online, with no embassy visit and no paper file. It covers stays of up to 90 days. Your passport details and entry dates have to be exactly right, so we check those first.",
    facts: [
      { label: "Route", value: "e-Visa online", note: "Official portal, no embassy visit" },
      { label: "Stay", value: "Up to 90 days", note: "Single or multiple entry" },
      { label: "Processing", value: "About 3–5 working days", note: "Longer around Vietnamese holidays" },
      { label: "Start", value: "2 weeks before", note: "Earlier around Lunar New Year" },
    ],
    intro: {
      title: "Five things, filled in exactly",
      body: "The Vietnam e-Visa needs very little: a passport copy, a photo, your travel dates, where you'll stay, and a contact number. What matters is that every detail matches your passport. A mistake usually can't be corrected once it's filed, which means a fresh application.\n\nThe e-Visa is valid from the entry date you give, so you can't arrive before it. Print a copy to carry with your passport; airlines in India check it at the counter.",
    },
    documents: {
      title: "Vietnam tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport before the application goes in.",
      groups: [
        {
          title: "Documents",
          items: [
            "Passport copy: a clear scan of the bio page. Passport valid 6 months beyond arrival, with 2 blank pages",
            "Photo: recent, 4 × 6 cm, white background. Face straight on, no glasses",
            "Travel date. Arrival and departure, as they'll be on your tickets",
            "Hotel accommodation. Name and address of where you'll stay, at least the first night",
            "Contact number. A mobile number and email we can reach while the e-Visa is processed",
          ],
        },
        {
          title: "Single or multiple entry?",
          items: [
            "Single entry: one visit, the usual choice for a holiday",
            "Multiple entry: if you'll leave and come back, say for Cambodia or Laos",
          ],
        },
        {
          title: "Good to know",
          items: [
            "Carry a printed copy of the e-Visa with your passport",
            "Hold your return or onward ticket; airlines can ask for it",
            "Apply only on the official portal, evisa.gov.vn",
          ],
        },
      ],
      note: "Rules change with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Vietnam files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A name typed differently", text: "Order and spelling must match the passport. A mismatch usually means a new application." },
        { tag: "Common", title: "Arriving before the start date", text: "The e-Visa starts on the date you gave. Arrive a day early and you can't enter." },
        { tag: "Common", title: "Single entry for a two-country trip", text: "Going on to Cambodia and back? That needs multiple entry, chosen at the start." },
        { tag: "Common", title: "A photo that gets rejected", text: "Glasses, shadows or a busy background get sent back. Plain white, face straight on." },
        { tag: "Common", title: "Applying on a look-alike site", text: "Unofficial sites charge more and add delays. The official portal is evisa.gov.vn." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Vietnam application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and where you'll stay first." },
        { title: "We check the details", text: "Names, passport numbers and dates, against the passport." },
        { title: "We file it", text: "On the official portal, with the photo and scan." },
        { title: "We track it", text: "Until the e-Visa is issued, usually in a few working days." },
        { title: "You travel", text: "e-Visa printed, with a copy on your phone." },
      ],
    },
    closing: "Tell us when you're going to Vietnam. We'll send the document list.",
    metaTitle: "Vietnam Tourist Visa from Kerala",
    metaDescription: "Vietnam tourist visa from Kerala: an e-Visa for stays of up to 90 days, filed on the official portal in about 3-5 working days. We check names, passport details and entry dates so nothing needs refiling.",
  },
  // Zambia_tourist_visa_page.pdf
  {
    slug: "zambia",
    code: "zm",
    name: "Zambia",
    title: "Zambia tourist visa",
    region: "Southern Africa",
    heroLead: "Indian passports need a visa for Zambia, applied for online as an e-Visa. Print the approval letter and carry it; the visa is stamped in when you land. The bank statement, cover letter and yellow fever card carry the file, so we check those first.",
    facts: [
      { label: "Route", value: "e-Visa online", note: "Approval letter printed for arrival" },
      { label: "Stay", value: "Set on arrival", note: "Plan your dates before you apply" },
      { label: "Processing", value: "Several working days", note: "Allow 1–2 weeks" },
      { label: "Start", value: "3–4 weeks before", note: "Yellow fever shot at least 10 days ahead" },
    ],
    intro: {
      title: "Two papers carry the file",
      body: "Zambia's e-Visa is filed online with a passport scan, a photo, your return tickets and hotel booking. Add 3 months of bank statements and a signed cover letter explaining your itinerary and why you're going.\n\nCarry a Yellow Fever Vaccination Certificate. It's often asked for, and India can ask for it when you fly home. The vaccine has to be taken at least 10 days before you travel, so book it first.",
    },
    documents: {
      title: "Zambia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport before the application goes in.",
      groups: [
        {
          title: "Documents",
          items: [
            "Passport, valid 6 months past your entry date. With at least 2 blank pages",
            "Photograph: recent, passport size, white background",
            "Confirmed return or onward flight tickets",
            "Hotel booking confirmation. Or your host's address and details",
            "Bank statements: last 3 months",
            "Cover letter. Your travel itinerary and the purpose of the trip, signed",
            "Yellow Fever Vaccination Certificate. Often required; taken at least 10 days before travel",
          ],
        },
        {
          title: "Your cover letter",
          items: [
            "Who you are and what you do",
            "Where you'll go, day by day, and where you'll stay",
            "Who is paying for the trip",
          ],
        },
        {
          title: "Good to know",
          items: [
            "Print the approval letter; the visa is stamped in when you land",
            "Crossing to Zimbabwe at Victoria Falls needs its own visa, so tell us if it's in the plan",
            "Keep the yellow fever card in your hand luggage",
          ],
        },
      ],
      note: "Rules change with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Zambia files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "No yellow fever certificate", text: "It's often checked, going and coming back. Get the vaccine at least 10 days before you fly." },
        { tag: "Common", title: "A cover letter that says nothing", text: "It has to explain the itinerary and the purpose. “Tourism” on its own isn't enough." },
        { tag: "Common", title: "Statements that don't fit the trip", text: "Three months, with a balance that can plausibly pay for the trip you describe." },
        { tag: "Common", title: "Approval letter left at home", text: "The visa is stamped in on arrival. Without the printed letter, expect delays at the counter." },
        { tag: "Common", title: "A Victoria Falls day trip not planned", text: "Stepping across to Zimbabwe needs a visa too. Plan it before you go, not at the bridge." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Zambia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and where you'll stay." },
        { title: "We check the file", text: "Bank statement, cover letter and the yellow fever card first." },
        { title: "We write the letter", text: "A cover letter that matches your itinerary and bookings." },
        { title: "We file it", text: "The e-Visa application, on the official portal." },
        { title: "You travel", text: "Approval letter printed and carried with your passport." },
      ],
    },
    closing: "Tell us when you're going to Zambia. We'll send the document list.",
    metaTitle: "Zambia Tourist Visa from Kerala",
    metaDescription: "Zambia tourist visa from Kerala: an e-Visa applied for online, with the approval letter stamped in on arrival. We check your bank statement, cover letter and yellow fever certificate before it's filed.",
  },
  // Greece_tourist_visa_page.pdf
  {
    slug: "greece",
    code: "gr",
    name: "Greece",
    title: "Greece tourist visa",
    region: "Southern Europe",
    heroLead: "Indian passports need a Schengen visa for Greece. The file is lodged with your fingerprints at the visa application centre. Greece wants original, bank-stamped statements, and for couples, proof of marriage in the passport or an apostilled certificate. We check both first.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Biometrics at the visa centre" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 days", note: "Longer in the summer season" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "Married? Show it the way Greece asks",
      body: "Travelling with your spouse? The spouse's name should be endorsed in both passports. If it isn't, Greece wants the original marriage certificate with an MEA apostille. The apostille takes time to arrange, so start it early.\n\nYour bank statement must be an original showing 3 months of movements, stamped and signed by the bank. Add your ITR acknowledgement for the last 2 assessment years, attested. Travel insurance must come from an Indian insurer on the approved list.",
    },
    documents: {
      title: "Greece tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Schengen visa application form, fully filled in and signed",
            "1 recent colour photo, white background. Passport size, to ICAO specifications",
            "Passport issued within the last 10 years. Valid 3 months after the visa ends, with at least 2 blank pages",
            "Copies of the first and last passport pages. Plus copies of every visa and stamp in it",
            "Previous passport, if any",
            "Cover letter. The details of your visit: purpose, dates and plan",
            "Return flight reservation. Visiting more Schengen states? The intra-Schengen flight, train itinerary or car rental too",
            "Proof of accommodation. Hotel, holiday home or campus residence; in each Member State you visit",
            "Staying with family or friends? Proof of sponsorship and/or private accommodation from your host, on Greece's national form if asked",
            "Travel medical insurance. All Schengen countries, the whole trip, at least €30,000, including repatriation; Indian policies only from approved insurers",
            "Travel agency certificate for an organised trip. Or any other document showing your travel plans",
          ],
        },
        {
          title: "Employed",
          items: [
            "Pay slips: last 3 months",
            "Employment contract",
            "Employer's statement approving your leave",
            "Original bank statements: last 3 months. Showing movements; stamped and signed by the bank",
            "ITR acknowledgement: last 2 assessment years, attested",
          ],
        },
        {
          title: "Company owner or self-employed",
          items: [
            "Certificate of company registration",
            "Original bank statements: last 3 months. Showing movements; stamped and signed by the bank",
            "ITR acknowledgement: last 2 assessment years, attested",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension statements: last 3 months",
            "Proof of regular income from property or business, if any",
            "Original bank statements: last 3 months. Showing movements; stamped and signed by the bank",
            "ITR acknowledgement: last 2 assessment years, attested",
          ],
        },
        {
          title: "Sponsored, or visiting family and friends",
          items: [
            "Proof of sponsorship and/or private accommodation. On Greece's national form, completed by your sponsor or host",
            "Visiting relatives? A certificate proving the family relationship",
          ],
        },
        {
          title: "Married",
          items: [
            "Spouse travelling with you. Spouse's name endorsed in both passports; otherwise the original marriage certificate, apostilled by the MEA",
            "Marriage certificate. If you're married and the passport doesn't show it",
            "Ration card copy, if applicable",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Copies of both parents' passports. If not applicable, the child's birth certificate and copies of the parents' ID cards",
            "Travelling with one parent. Notarized consent from the other parent or guardian, unless one parent has sole custody",
            "The other parent already holds a valid visa. Their notarized consent is still required",
            "Travelling alone. Notarized consent from both parents or guardians",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Greece files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A marriage with no endorsement or apostille", text: "Spouse's name missing from the passports? Greece wants the original certificate, apostilled by the MEA." },
        { tag: "Common", title: "Printouts instead of original statements", text: "The statement has to be an original showing 3 months of movements, stamped and signed by the bank." },
        { tag: "Common", title: "Insurance from a non-approved company", text: "Greece accepts Indian travel insurance only from approved insurers." },
        { tag: "Common", title: "No consent because a parent has a visa", text: "A child travelling with one parent still needs the other parent's notarized consent." },
        { tag: "Common", title: "Only the photo page copied", text: "Copy the first and last pages, plus every visa and stamp in the passport." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Greece application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "Marriage proof first", text: "Endorsed in both passports, or an apostilled certificate." },
        { title: "We check the file", text: "Original statements, insurer and every visa copy." },
        { title: "You give biometrics", text: "Fingerprints and photo at the visa centre." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Greece. We'll send the document list.",
    metaTitle: "Greece Tourist Visa from Kerala",
    metaDescription: "Greece tourist visa from Kerala: a Schengen visa lodged with biometrics at the visa centre. We check the original bank-stamped statements and, for couples, the passport endorsement or MEA-apostilled marriage certificate first.",
  },
  // Hungary_tourist_visa_page.pdf
  {
    slug: "hungary",
    code: "hu",
    name: "Hungary",
    title: "Hungary tourist visa",
    region: "Central Europe",
    heroLead: "Indian passports need a Schengen visa for Hungary. The file is lodged with your fingerprints at the visa application centre. Hungary wants 6 months of original bank statements in English, and an official English translation of your work and study papers. We check both first.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Biometrics at the visa centre" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 days", note: "Longer in the summer season" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "In English, or it doesn't count",
      body: "Your employment letter or proof of business, the company's registration certificate and a student's enrolment letter each need an official English translation. The bank statement is an original covering the last 6 months, in English.\n\nThe application form must carry the full address of your hotel or host. Staying in a rented flat? Add the landlord's approval and a copy of their passport or ID. A flight reservation is enough; no confirmed booking is needed.",
    },
    documents: {
      title: "Hungary tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Passport issued within the last 10 years. Valid 3 months after the visa expires, with 2 blank pages without stamps",
            "Copies of previous Schengen or other visas, if any",
            "Application form, completed and signed. With the full address of your hotel or host written in",
            "1 recent passport-size photo. Not older than 6 months, plain white background, without glasses",
            "Travel insurance. All Schengen countries, at least €30,000",
            "Round-trip flight reservation. No confirmed booking needed",
            "Hotel booking or proof of accommodation",
            "Staying with your host or in a rented apartment? The landlord's approval and a copy of the landlord's passport or ID",
            "Proof of family and financial ties to India",
            "Original bank statements: last 6 months. In English",
          ],
        },
        {
          title: "Employed",
          items: [
            "Employment letter. With an official English translation",
            "Original bank statements: last 6 months. In English",
          ],
        },
        {
          title: "Company owner or self-employed",
          items: [
            "Proof of business ownership. With an official English translation",
            "Company's certificate of registration. With an official English translation",
            "Original bank statements: last 6 months. In English",
          ],
        },
        {
          title: "Student",
          items: [
            "Letter of enrolment from your school or university. With an official English translation",
            "Original bank statements: last 6 months. In English; from whoever is paying for the trip",
          ],
        },
        {
          title: "Someone else is paying",
          items: [
            "Signed letter of guarantee. Covering all costs of the trip",
            "Signed copy of their passport or ID",
          ],
        },
        {
          title: "Invited by family or a friend in Hungary",
          items: [
            "Official invitation letter, preferred. From the Directorate-General for Aliens Policing",
            "Or, instead of the official letter: your host's passport or ID, and their Hungarian residence permit or address card",
            "Host renting their home? Lease contract, the landlord's approval letter, and the landlord's passport or ID copy",
            "Host studying in Hungary? University ID, active student status, or letter of acceptance or award",
          ],
        },
        {
          title: "Invited by a Hungarian citizen",
          items: [
            "Official invitation letter. From the Directorate-General for Aliens Policing",
            "Your host's passport or ID",
            "Proof of accommodation. Or the lease contract, the landlord's approval letter and the landlord's passport or ID copy",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Application form signed by both parents or legal representatives",
            "Copies of the parents' passports or ID",
            "Travelling with one parent. Signed, legalised authorization from the other parent",
            "Travelling alone. Signed, legalised authorization from both parents",
          ],
        },
        {
          title: "Not an Indian citizen?",
          items: [
            "Legal Indian residence permit. Valid at least 1 month after you return",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Hungary files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Papers with no English translation", text: "Employment, business and study papers need an official English translation." },
        { tag: "Common", title: "Only 3 months of statements", text: "Hungary asks for 6 months: original, and in English." },
        { tag: "Common", title: "No address on the form", text: "The full address of your hotel or host has to be written in the application." },
        { tag: "Common", title: "A rented flat with no landlord papers", text: "Staying in rented accommodation? The landlord's approval and ID copy go in too." },
        { tag: "Common", title: "A photo with glasses", text: "Plain white background, no glasses, and not older than 6 months." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Hungary application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and where you'll stay." },
        { title: "Translations first", text: "Work, business and study papers, in official English." },
        { title: "We fill the form", text: "With the full address of your hotel or host." },
        { title: "You give biometrics", text: "Fingerprints and photo at the visa centre." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Hungary. We'll send the document list.",
    metaTitle: "Hungary Tourist Visa from Kerala",
    metaDescription: "Hungary tourist visa from Kerala: a Schengen visa lodged with biometrics at the visa centre. We check the 6 months of original bank statements in English and the official English translations of your work and study papers first.",
  },
  // Iceland_tourist_visa_page.pdf
  {
    slug: "iceland",
    code: "is",
    name: "Iceland",
    title: "Iceland tourist visa",
    region: "Northern Europe",
    heroLead: "Indian passports need a Schengen visa for Iceland. You fill in the online form first, then submit in person at VFS. The file has to show enough money for every day of the trip, and if anything is missing, you get 5 days to email it to the Embassy. So we check both before the appointment.",
    facts: [
      { label: "Route", value: "Schengen visa via VFS", note: "Online form, then in person" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 days", note: "From when the Embassy receives it" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "Money for every day, and five days to fill a gap",
      body: "Your bank statements must show at least 8,000 ISK for every day of the trip if you're staying in a hotel, or 4,000 ISK a day if someone else is covering your stay. Every applicant brings their own statement, even when sponsored.\n\nYour file goes from VFS to the Embassy of Iceland in New Delhi. If VFS marks a document as missing, you have 5 calendar days to email it to the Embassy, as PDF only, with your name as in the passport in the subject line. Miss it and the visa is decided without it. Keep an eye on your spam folder, and be ready for an interview call.",
    },
    documents: {
      title: "Iceland tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport. Issued within the last 10 years, valid 3 months after you leave the Schengen area, with at least 2 blank pages",
            "Copies of Schengen stamps from previous passports. If you have them",
            "Schengen visa application, printed and signed",
            "1 passport photo: 35 × 45 mm. White background, not older than 6 months",
            "Confirmation of the online application. Submitted on visa.government.is; shown to VFS staff",
            "Cover letter. Purpose, duration, who's travelling with you, transport and accommodation",
            "Round-trip flight reservation. With the PNR number and the traveller's name",
            "Visiting several Schengen states? The intra-Schengen flight, train itinerary or car rental too",
            "Proof of accommodation. Hotel, holiday home or campus residence; in each Schengen country you visit",
            "Staying with family or friends? Proof of sponsorship and/or private accommodation from your host",
            "Travel medical insurance policy. Not just the insurance card; all Schengen countries, at least €30,000, all risks including evacuation, covering your arrival and departure dates",
          ],
        },
        {
          title: "Proof of funds, for everyone",
          items: [
            "Original personal bank statements: last 3 months. In your name, showing movements, every page stamped and signed by the bank",
            "Enough for every day of the trip. 8,000 ISK a day in a hotel, or 4,000 ISK a day if a third party covers the stay",
            "Sponsor paying? Their statement, with a signed sponsorship letter and a signed copy of their passport",
            "ITR acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Employed",
          items: [
            "Pay slips: last 3 months",
            "Employment contract",
            "Leave letter from your employer. Approving your holiday",
          ],
        },
        {
          title: "Self-employed or company owner",
          items: [
            "Company registration certificate. With the GST registration number, for a company registered in India",
            "Business bank account statement",
            "Income tax return. With a verifiable barcode",
          ],
        },
        {
          title: "Sponsored",
          items: [
            "Proof of sponsorship and a letter from the sponsor",
            "Copy of the sponsor's photo ID. Passport or residence permit card",
            "Sponsored by your spouse? Your marriage certificate",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension statements: last 3 months",
            "Proof of regular income. From property or a business you own",
          ],
        },
        {
          title: "Student",
          items: [
            "Certificate from your school, college or university. Confirming you're enrolled",
          ],
        },
        {
          title: "Visiting family or friends in Iceland",
          items: [
            "Invitation Letter for visitors. Filled in online by your host on island.is",
            "Guarantee form for visits. The sponsorship form, also on island.is",
            "Proof of family relationship. If you're visiting close relatives",
            "Visiting your spouse? Marriage certificate or proof of cohabitation",
          ],
        },
        {
          title: "Business visit",
          items: [
            "Signed invitation from the company in Iceland. With the inviting party's contact details",
            "Cover letter from your employer",
            "Both letters confirm the basics: your identity, the purpose (meetings, conferences, training or events), and the dates and place of stay",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Travelling with one parent. Notarized consent from the other parent or guardian; or a court order or other proof of sole custody",
            "Travelling alone. Notarized consent from both parents or guardians with custody",
            "Copies of both parents' passports. Or their photo ID cards; failing that, the child's birth certificate with the parents' ID copies",
          ],
        },
      ],
      note: "Consulates change their lists with little notice, and the Embassy may ask for more documents or an interview. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Iceland files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Too little money for the trip", text: "Iceland counts it per day: 8,000 ISK for every day in a hotel." },
        { tag: "Common", title: "No own statement when sponsored", text: "Every applicant brings their own bank statement, sponsor or not." },
        { tag: "Common", title: "An insurance card, not the policy", text: "The policy has to show the cover, the area and your travel dates." },
        { tag: "Common", title: "Missing the 5-day email", text: "Missing documents must reach the Embassy within 5 days, or the visa is decided without them." },
        { tag: "Common", title: "A flight booking without a PNR", text: "The reservation needs the PNR number and your name on it." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Iceland application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "The online form", text: "Filled in on Iceland's portal, and the confirmation printed." },
        { title: "We check the file", text: "Money per day, insurance policy and flight PNR." },
        { title: "You give biometrics", text: "Fingerprints and photo at VFS." },
        { title: "Until it's back", text: "Any Embassy request answered in time, and tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Iceland. We'll send the document list.",
    metaTitle: "Iceland Tourist Visa from Kerala",
    metaDescription: "Iceland tourist visa from Kerala: a Schengen visa filed online, then lodged in person at VFS. We check the money for every day of the trip, the insurance policy and the flight PNR before the appointment.",
  },
  // Italy_tourist_visa_page.pdf
  {
    slug: "italy",
    code: "it",
    name: "Italy",
    title: "Italy tourist visa",
    region: "Southern Europe",
    heroLead: "Indian passports need a Schengen visa for Italy. Originals are shown when you submit, and the money side goes deep: 3 years of income tax returns with barcode and challans, and 6 months of stamped bank statements. We check those first.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Biometrics at the visa centre" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 days", note: "Longer in the summer season" },
      { label: "Start", value: "6–8 weeks before", note: "No later than 15 days ahead" },
    ],
    intro: {
      title: "Three years of tax, six months of bank",
      body: "Italy asks for your ITR with barcode and the income tax challan receipts for the last 3 years, salary slips for 3 months, and 6 months of personal bank statements. The statement is an original stamped by the bank, or an online print stamped and signed by the branch manager.\n\nBring the original of every document, with a copy, to the submission. Visiting family in Italy? Italian certificates come from the ANPR portal with a QR code, and Indian documents must be apostilled.",
    },
    documents: {
      title: "Italy tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Application form, fully completed and signed",
            "1 recent passport-size photo. White background",
            "Passport issued within the last 10 years. Valid 3 months after your stay, with at least 2 blank pages",
            "Copy of your passport and previous Schengen visas",
            "Cover letter",
            "Originals of every document. Shown at submission, with a copy of each",
            "Travel itinerary with dates. Mention every other country the trip covers",
            "Return flight reservation or ticket",
            "Confirmed hotel bookings",
            "Overseas medical insurance. At least €30,000 for emergency hospital care and repatriation",
            "Credit card copy with a statement of the credit limit. Suggested, if you have one",
          ],
        },
        {
          title: "Financial means",
          items: [
            "Salary slips or certificates: last 3 months",
            "ITR with barcode: last 3 years",
            "Income tax challan receipts: last 3 years",
            "Personal bank statements: last 6 months. Original, stamped by the bank; or an online print stamped and signed by the branch manager",
          ],
        },
        {
          title: "Employed",
          items: [
            "Original approval letter from your company. On company letterhead",
            "Pay slips: latest 3 months",
            "Income tax returns: latest 3 years",
          ],
        },
        {
          title: "Self-employed",
          items: [
            "Full business certificate of incorporation",
            "Business bank statements: last 3 months",
            "Income tax returns: latest 3 years",
          ],
        },
        {
          title: "Student",
          items: [
            "Original letter from your school. Dated within 30 days of submission",
            "The letter states: your full name, the school's full name, address and phone number, signed by the Head of Department",
          ],
        },
        {
          title: "Sponsored from Italy",
          items: [
            "Bank guarantee (fidejussione bancaria). Original and 1 photocopy, from your sponsor in Italy, covering your expenses for the whole stay",
            "Your personal bank statements, with it",
            "The original guarantee comes back with your passport",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Application signed by both parents, with copies of their IDs",
            "Travelling with both parents. Birth certificate",
            "Travelling with one parent. Original consent letter from the other parent, legalized through the Italian Embassy, Consulate or Municipality where they live; birth certificate, original and copy",
            "Travelling alone. Original consent letter from both parents, legalized the same way; parents living in India sign it at the Consulate",
            "A parent has passed away. Death certificate, original and copy, with an English translation",
          ],
        },
        {
          title: "Visiting family: from your host",
          items: [
            "Invitation letter, filled in and signed by the host. Proving the family relationship and the accommodation; the signature must match their ID or passport",
            "Host is an EU national or Indian citizen. ID or passport copy, including the signature page",
            "Host is a non-EU citizen. Passport copy including the signature page, and their Italian residence permit",
            "Italian certificates, from the ANPR portal with a QR code. Birth certificate with parents' names, marriage certificate, Stato civile and Stato di famiglia",
            "Host sponsoring you? Original fidejussione issued by an Italian financial institution",
          ],
        },
        {
          title: "Visiting family: from you",
          items: [
            "Indian documents, apostilled",
            "Bank statements: last 6 months. With transactions, updated within 1 month of submission; name as on the passport; positive balance; no business accounts",
            "Health insurance certificate. At least €30,000; stamped and signed by the insurer",
            "Round-trip flight ticket",
            "Proof you will return. Employment contract or employer's declaration, proof of study, your children's school, or caregiving at home",
            "Minor travelling alone? Both parents are called to the Embassy to sign the consent letter",
          ],
        },
      ],
      note: "Consulates change their lists with little notice, and the embassy may ask for an interview or more documents. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Italy files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "ITR without barcode or challans", text: "Italy wants 3 years of returns with barcode, plus the challan receipts." },
        { tag: "Common", title: "An online statement nobody signed", text: "A printed online statement needs the branch manager's stamp and signature." },
        { tag: "Common", title: "A student letter that's too old", text: "It must be dated within 30 days of submission and signed by the Head of Department." },
        { tag: "Common", title: "A consent letter that isn't legalized", text: "A child's consent letter goes through the Italian Embassy, Consulate or Municipality." },
        { tag: "Common", title: "Family papers without a QR code", text: "Italian certificates come from the ANPR portal; Indian ones need an apostille." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Italy application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and every country on the way." },
        { title: "We check the money", text: "ITR, challans and 6 months of statements." },
        { title: "We gather originals", text: "Every document, with a copy of each." },
        { title: "You give biometrics", text: "Fingerprints and photo at the visa centre." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Italy. We'll send the document list.",
    metaTitle: "Italy Tourist Visa from Kerala",
    metaDescription: "Italy tourist visa from Kerala: a Schengen visa lodged with biometrics, originals shown at submission. We check the 3 years of ITR with barcode and challans and the 6 months of stamped bank statements first.",
  },
  // Latvia_tourist_visa_page.pdf
  {
    slug: "latvia",
    code: "lv",
    name: "Latvia",
    title: "Latvia tourist visa",
    region: "Northern Europe",
    heroLead: "Indian passports need a Schengen visa for Latvia. Unlike most Schengen countries, Latvia wants paid tickets and prepaid hotels booked directly with the hotel, not reservations. So we check the rest of the file before you pay for anything.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Biometrics at the visa centre" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 days", note: "Longer in the summer season" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "Paid bookings, not reservations",
      body: "Latvia asks for confirmed round-trip tickets with proof of payment, and confirmed, prepaid hotels with payment details, booked directly with the hotel. Bookings made through booking platforms are not accepted. The visa fee is non-refundable, so we make sure the rest of the file is ready before you pay.\n\nYour travel insurance must cover the whole stay plus 15 extra days, the \"period of grace\", with at least €30,000 for urgent care, emergency hospital treatment and repatriation. It can be bought in India, elsewhere, or by the person inviting you.",
    },
    documents: {
      title: "Latvia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Visa application form. Completed online, printed and signed",
            "2 photos: 35 × 45 mm, white background. Taken in the last 6 months",
            "Passport issued within the last 10 years. Valid 3 months after you leave Latvia or the Schengen area, with at least 2 blank pages",
            "Copies of the passport's identification pages. And the pages with previously issued visas",
            "Travel plan. A document showing what you plan to do on the trip",
            "Round-trip tickets, confirmed. With proof of payment",
            "Hotels, confirmed and prepaid. With payment details, directly from the hotels; booking platforms are not accepted",
            "Travel medical insurance. All Schengen countries, the whole stay plus 15 days, at least €30,000, including urgent care, hospital treatment and repatriation",
            "Original bank statements: last 3 months. Showing movements, stamped and signed by the bank, with a bank certificate",
          ],
        },
        {
          title: "Employed",
          items: [
            "Salary slips: last 3 months",
            "Original bank statements: last 3 months. Stamped and signed by the bank, with a bank certificate",
          ],
        },
        {
          title: "Company owner or self-employed",
          items: [
            "Certificate of company registration",
            "Original bank statements: last 3 months. Stamped and signed by the bank, with a bank certificate",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension statements: last 3 months",
            "Proof of regular income from a business you own, if any",
          ],
        },
        {
          title: "Sponsored",
          items: [
            "Sponsor's bank statements: last 3 months",
            "Sponsor's salary slips, or their business registration certificate",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Travelling with one parent. Notarized consent from the other parent or guardian, unless one parent has sole custody",
            "Copies of the parents' ID cards",
          ],
        },
        {
          title: "Good to know",
          items: [
            "The visa fee is non-refundable. Whatever the decision",
            "The Embassy of Latvia in New Delhi may ask for more. We keep you posted if it does",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Latvia files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A reservation instead of a paid ticket", text: "Latvia wants confirmed tickets with proof of payment." },
        { tag: "Common", title: "A hotel booked through an app", text: "Booking platforms aren't accepted. Confirm and prepay directly with the hotel." },
        { tag: "Common", title: "Insurance that ends on the return date", text: "It has to cover 15 days beyond the end of your stay." },
        { tag: "Common", title: "A statement without the bank certificate", text: "Original, stamped and signed by the bank, with a bank certificate." },
        { tag: "Common", title: "Only one photo", text: "Latvia asks for 2 photos, 35 × 45 mm, taken in the last 6 months." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Latvia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "We check the file", text: "Before you pay for tickets or hotels." },
        { title: "Paid, direct bookings", text: "Tickets with proof of payment, hotels booked with the hotel." },
        { title: "You give biometrics", text: "Fingerprints and photo at the visa centre." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Latvia. We'll send the document list.",
    metaTitle: "Latvia Tourist Visa from Kerala",
    metaDescription: "Latvia tourist visa from Kerala: a Schengen visa lodged with biometrics, with paid tickets and hotels prepaid directly, not reservations. We check the rest of the file before you pay for anything.",
  },
  // Liechtenstein_tourist_visa_page.pdf
  {
    slug: "liechtenstein",
    code: "li",
    name: "Liechtenstein",
    title: "Liechtenstein tourist visa",
    region: "Central Europe",
    heroLead: "Indian passports need a Schengen visa for Liechtenstein. The list is short, but strict: photos exactly to specification, and a passport valid for 6 months with 3 blank pages. We check both before anything else.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Biometrics at the visa centre" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 days", note: "Longer in the summer season" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "Photos are where files stop",
      body: "The government is very strict on photographs. You need 2 recent colour photos on a white background with a matt finish, exactly to specification. Glossy prints, or photos made for another country, are the usual problem.\n\nYour passport must be valid for at least 6 months with 3 blank pages, more than most Schengen countries ask for. Bring every old passport too. The money side is an original bank statement for the last 6 months with the bank's seal, and ITR or Form 16 for 3 years.",
    },
    documents: {
      title: "Liechtenstein tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport. At least 6 months validity, with at least 3 blank pages",
            "All old passports, if any",
            "Visa application form, completed and signed",
            "Personal cover letter. Explaining the purpose of your trip",
            "Return flight tickets. From and back to your home country",
            "Hotel reservation. Proof of accommodation for your entire stay",
            "Day-wise travel itinerary. Outlining every element of the trip",
            "Travel insurance. At least €30,000, valid for the entire stay",
          ],
        },
        {
          title: "Financial documents",
          items: [
            "Original bank statement: last 6 months. Stamped and updated, with the bank's seal",
            "Income tax returns or Form 16: last 3 years",
          ],
        },
        {
          title: "Photos",
          items: [
            "2 recent colour photographs",
            "White background, matt finish. Not glossy",
            "Exactly to the photo specification. Checked strictly; we check yours before submission",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Liechtenstein files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Glossy or off-spec photos", text: "Colour, white background, matt finish, and exactly to specification." },
        { tag: "Common", title: "A passport with only 3 months left", text: "Liechtenstein wants 6 months of validity and 3 blank pages." },
        { tag: "Common", title: "Old passports left at home", text: "Every old passport goes in with the current one." },
        { tag: "Common", title: "Only 3 months of statements", text: "The statement covers 6 months, stamped and sealed by the bank." },
        { tag: "Common", title: "An itinerary that's just flights", text: "The plan is day-wise and covers every part of the trip." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Liechtenstein application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "Photos to spec", text: "Matt, white background, checked before anything else." },
        { title: "We build the plan", text: "A day-wise itinerary that matches the bookings." },
        { title: "You give biometrics", text: "Fingerprints and photo at the visa centre." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Liechtenstein. We'll send the document list.",
    metaTitle: "Liechtenstein Tourist Visa from Kerala",
    metaDescription: "Liechtenstein tourist visa from Kerala: a Schengen visa lodged with biometrics at the visa centre. The list is short but strict, so we check the matt photos and the 6-month passport with 3 blank pages before anything else.",
  },
  // Lithuania_tourist_visa_page.pdf
  {
    slug: "lithuania",
    code: "lt",
    name: "Lithuania",
    title: "Lithuania tourist visa",
    region: "Northern Europe",
    heroLead: "Indian passports need a Schengen visa for Lithuania. The form is filled on the MIGRIS portal, and anyone hosting or sponsoring you files their invitation there too. Incomplete files can be refused without a request for more, so we check every page before it goes in.",
    facts: [
      { label: "Route", value: "Schengen visa via VFS", note: "Form filled on MIGRIS, lodged in person" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 calendar days", note: "Plus up to 2 working days to reach the embassy" },
      { label: "Start", value: "6–8 weeks before", note: "No later than 15 working days ahead" },
    ],
    intro: {
      title: "Everything runs through MIGRIS",
      body: "The application form is completed on Lithuania's online migration portal, MIGRIS. If a host or sponsor is covering your stay or costs, they submit an invitation letter on MIGRIS and its number goes in your file. Affidavits are not accepted as evidence.\n\nThe embassy is not obliged to ask for missing documents before refusing. Apply no earlier than 6 months and no later than 15 working days before you travel. Processing takes 15 calendar days once the file reaches the embassy. A booked ticket doesn't speed it up, so a reservation is enough.",
    },
    documents: {
      title: "Lithuania tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Schengen application form from MIGRIS, signed",
            "2 photos: 35 × 45 mm, colour, white background. High definition, not older than 6 months, face covering at least 80%",
            "Passport issued within the last 10 years. Valid 3 months after your return, with at least 2 empty pages",
            "Copies of the biodata page and the last page of the passport. Plus Schengen entry and exit stamps from previous passports, if available",
            "Cover letter, signed. Purpose, duration, who's travelling with you, transport and accommodation",
            "Flight reservations to and from the Schengen area. Visiting several Schengen states? The intra-Schengen flight, train itinerary or car rental too",
            "Proof of accommodation. Hotel, holiday home or campus residence; in each Member State you visit",
            "Staying with family or friends? The number of their MIGRIS invitation letter, which must state the accommodation",
            "Travel medical insurance. Approved Indian insurers only; all Schengen countries, at least €30,000, covering your arrival and departure dates",
            "Travel agency certificate for an organised trip. Or another document showing your travel plans",
          ],
        },
        {
          title: "Employed",
          items: [
            "Pay slips: last 3 months",
            "Employment contract",
            "Employer's statement approving your leave",
            "Original bank statements: last 3 months. Showing movements; stamped and signed by the bank",
            "ITR acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Company owner or self-employed",
          items: [
            "Certificate of company registration. Including the GST registration number",
            "Business bank account statement",
            "Income tax return. Barcode verifiable",
            "Original personal bank statements: last 3 months. Showing movements; stamped and signed by the bank",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension statements: last 3 months, and/or proof of income from property or business",
            "Original bank statements: last 3 months. Showing movements; stamped and signed by the bank",
            "ITR acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Student",
          items: [
            "Certificates from the institution where you're enrolled",
            "Someone else paying? See the sponsored card",
          ],
        },
        {
          title: "Sponsored",
          items: [
            "MIGRIS invitation letter number. Filed by your sponsor, stating the sponsorship and/or accommodation",
            "No affidavits. Lithuania doesn't accept them as evidence",
          ],
        },
        {
          title: "Visiting family or friends",
          items: [
            "MIGRIS invitation letter from your host. With their address, contact details and your period of stay",
            "Proof of your host's legal residence. Passport or national ID copy, or residence permit",
          ],
        },
        {
          title: "Family of a Lithuanian citizen",
          items: [
            "Marriage or birth certificate, notarized. Or a notarized court decision of custody",
            "Married in Lithuania. Marriage certificate, or an extract from the Lithuanian population register (Gyventojų registras)",
            "Married in India or elsewhere. Notarized marriage certificate and the population register extract",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Travelling with one parent. Notarized consent from the other parent or guardian; or a court order or other proof of sole custody",
            "Travelling alone. Notarized consent from both parents or guardians",
            "ID copies of the parents or guardians. With signature and photograph",
          ],
        },
        {
          title: "Not an Indian citizen?",
          items: [
            "Your temporary or permanent Indian residence permit",
          ],
        },
        {
          title: "Good to know",
          items: [
            "Your passport stays with the embassy. For the whole time the application is processed",
            "The embassy may ask for more, or call you for an interview",
            "Visa fees are not refunded if the visa is refused",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Lithuania files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "An invitation that isn't on MIGRIS", text: "A host or sponsor files the letter on MIGRIS, and its number goes in your file." },
        { tag: "Common", title: "An affidavit as proof", text: "Lithuania doesn't accept affidavits as evidence. Use the actual document." },
        { tag: "Common", title: "Insurance from a non-approved company", text: "Only approved Indian insurers, and the policy must cover the arrival and departure dates." },
        { tag: "Common", title: "Registration without the GST number", text: "Company owners need the certificate with GST, and a barcode-verifiable ITR." },
        { tag: "Common", title: "Applying too close to travel", text: "The file must go in at least 15 working days before you fly. Earlier is safer." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Lithuania application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "We fill MIGRIS", text: "The form, and your host's invitation number if you have one." },
        { title: "We check the file", text: "Insurer, GST number and statements, page by page." },
        { title: "You give biometrics", text: "Fingerprints and photo at VFS, file lodged." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Lithuania. We'll send the document list.",
    metaTitle: "Lithuania Tourist Visa from Kerala",
    metaDescription: "Lithuania tourist visa from Kerala: a Schengen visa filled on MIGRIS and lodged at VFS with biometrics. We check the MIGRIS invitation, insurer, GST number and statements page by page, because incomplete files can be refused outright.",
  },
  // Luxembourg_tourist_visa_page.pdf
  {
    slug: "luxembourg",
    code: "lu",
    name: "Luxembourg",
    title: "Luxembourg tourist visa",
    region: "Western Europe",
    heroLead: "Indian passports need a Schengen visa for Luxembourg. Apply too close to travel and the file can be returned unprocessed, and the bank proof has to be original letters from your branch. We plan the timing and check the letters first.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Biometrics at the visa centre" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 days", note: "Up to 45 days if more checks are needed" },
      { label: "Start", value: "6–8 weeks before", note: "Less than 15 days' notice can be inadmissible" },
    ],
    intro: {
      title: "Short notice isn't slow. It's returned.",
      body: "Standard processing is 15 days from when the embassy receives the file. Leave less time than that and the application may be inadmissible: the passport comes back without the application being processed. Extra checks can stretch it to 45 days.\n\nThe bank proof is two original letters from your bank: your account status for the last 3 months, with the branch manager's name and signature, and your credit card limit. Every document goes in on A4.",
    },
    documents: {
      title: "Luxembourg tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Application form, filled in, dated and signed",
            "1 recent colour photo, white background. Pasted on the form, not stapled; under 6 months old, unedited, no filter",
            "Passport valid 3 months after your return. With at least 2 blank pages, plus 1 copy of the data page",
            "Copies of Schengen visas from the last 5 years, if any",
            "Every document on A4 paper",
            "Complete travel programme. Itinerary, dates and the places you'll visit",
            "Transport reservation. A paid ticket isn't needed; include the connecting flight, train or bus to Luxembourg, or say if you'll drive",
            "Hotel booking",
            "Travel medical insurance. All Schengen countries, the whole stay, at least €30,000 for accident, urgent care, hospital treatment and repatriation",
            "Multiple-entry visa? A signed declaration that your insurance will cover later journeys",
          ],
        },
        {
          title: "Financial means",
          items: [
            "Original letter from your bank: account status, last 3 months. With the branch manager's name and signature",
            "Original letter from your bank stating your credit card limit",
            "Income tax returns: at least 2 years. Proof of income tax paid",
          ],
        },
        {
          title: "Employed",
          items: [
            "Original covering letter on company letterhead. Your position, length of service, and confirmation that leave has been granted",
            "Salary slips: last 3 months",
            "Employment contract",
          ],
        },
        {
          title: "Self-employed",
          items: [
            "Excerpt from the company register. Or GST registration, or a similar document",
            "Original covering letter on business letterhead. Your position and length of service",
          ],
        },
        {
          title: "Retired or student",
          items: [
            "Retired: pension slips, last 3 months",
            "Student: original letter from your school, on letterhead. Confirming your enrolment and that leave has been granted",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Travelling with one parent. Notarized consent from the other parent or guardian",
            "Travelling alone. Notarized consent from both parents or guardians with custody",
            "ID copies of the parents with custody. Bearing their signatures",
          ],
        },
        {
          title: "Applying by courier",
          items: [
            "Signed declaration for the courier sticker. Confirming the name and address on it are correct; you're responsible for the address",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Luxembourg files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Applying with under 15 days to spare", text: "The file can be inadmissible, and the passport returned unprocessed." },
        { tag: "Common", title: "A photo stapled on, or edited", text: "Paste it on the form. Under 6 months old, no edits and no filter." },
        { tag: "Common", title: "A printout instead of a bank letter", text: "Luxembourg wants an original letter with the branch manager's name and signature." },
        { tag: "Common", title: "No credit card limit letter", text: "A separate original letter from your bank states the limit." },
        { tag: "Common", title: "No connection to Luxembourg in the plan", text: "Show the flight, train or bus into Luxembourg, or say you're driving." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Luxembourg application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "We plan the route", text: "Including the last leg into Luxembourg." },
        { title: "We check the file", text: "Bank letters, photo and A4 pages." },
        { title: "You give biometrics", text: "Fingerprints and photo at the visa centre." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Luxembourg. We'll send the document list.",
    metaTitle: "Luxembourg Tourist Visa from Kerala",
    metaDescription: "Luxembourg tourist visa from Kerala: a Schengen visa lodged with biometrics at the visa centre. We plan the timing so the file isn't returned unprocessed, and check the original bank letters and A4 pages first.",
  },
  // Malta_tourist_visa_page.pdf
  {
    slug: "malta",
    code: "mt",
    name: "Malta",
    title: "Malta tourist visa",
    region: "Southern Europe",
    heroLead: "Indian passports need a Schengen visa for Malta. If anything is missing, you get 5 days to send it through VFS before the file can be refused outright. So we make sure nothing is missing on the day it goes in.",
    facts: [
      { label: "Route", value: "Schengen visa via VFS", note: "Submitted in person" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 days", note: "Longer in the summer season" },
      { label: "Start", value: "6–8 weeks before", note: "No later than 15 days ahead" },
    ],
    intro: {
      title: "Five days to fill a gap",
      body: "If the High Commission finds something missing, there's a 5-day limit to submit it through VFS. Miss it and the file can be refused outright. Everything goes in in person, originals with A4 copies, and nothing printed back-to-back.\n\nStaying with family or friends in Malta? Your host fills in a Declaration of Proof, witnessed by a Maltese public notary, with their ID, proof of residence and proof of income. Travel insurance must come from one of the 16 Schengen-recognised insurers in India.",
    },
    documents: {
      title: "Malta tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Application form, filled in and signed",
            "1 recent colour photo: 35 × 45 mm, white background. Don't staple it to the form",
            "Passport issued within the last 10 years. Valid 3 months after your stay, with at least 3 blank pages",
            "Original and copy of the biodata page and last page. Plus Schengen entry and exit stamps from previous passports, if available",
            "Aadhaar card, with a photocopy",
            "Cover letter. Purpose, duration, who's travelling with you, transport and accommodation",
            "Return flight reservation. Visiting several Schengen states? The intra-Schengen flight, train itinerary or car rental too",
            "Travel agency certificate for an organised trip. Or another document showing your travel plans",
            "Confirmed hotel booking. In each Member State you visit",
            "Travel medical insurance. From one of the 16 Schengen-recognised insurers in India; all Schengen countries, at least €30,000, covering your arrival and departure dates",
            "Printed single-sided. No back-to-back pages; A4 copies alongside any originals you want back",
          ],
        },
        {
          title: "Employed",
          items: [
            "Original bank statements: last 3 months. Showing movements; stamped and signed by the bank",
            "Pay slips: last 3 months",
            "Employment contract",
            "Employer's statement approving your leave",
            "ITR acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Company owner or self-employed",
          items: [
            "Original bank statements: last 3 months. Showing movements; stamped and signed by the bank",
            "Certificate of company registration. Including the GST registration number",
            "Business bank account statement",
            "ITR acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Sponsored",
          items: [
            "Your original bank statements: last 3 months. Showing movements; stamped and signed by the bank",
            "Proof of sponsorship and/or private accommodation. On Malta's national form, if applicable",
            "Your ITR acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension statements: last 3 months",
            "And/or proof of regular income from property or business",
          ],
        },
        {
          title: "Staying with a host in Malta",
          items: [
            "Declaration of Proof, in original. Filled in completely, signed by your host and witnessed by a Maltese public notary",
            "Copy of your host's Malta ID card or passport. And the bio-data page of your passport",
            "Host's proof of residence. Property title deeds, rental agreement or energy bills",
            "Host's proof of income. Salary slip, pension receipt, or an official statement of income",
            "Health insurance for you from your host, if applicable",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Travelling with one parent. Notarized consent from the other parent and a copy of their passport; or a court order or other proof of sole custody",
            "Travelling alone. Notarized consent from both parents or guardians, with copies of their passports",
            "ID copies of the parents or guardians with custody. With signature and photograph, plus passport copies",
          ],
        },
      ],
      note: "Consulates change their lists with little notice, and the High Commission may ask for more documents or an interview. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Malta files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Pages printed back-to-back", text: "Malta wants every document single-sided." },
        { tag: "Common", title: "Missing the 5-day window", text: "Missing documents must reach VFS within 5 days, or the file can be refused outright." },
        { tag: "Common", title: "Insurance from outside the recognised list", text: "Only the 16 Schengen-recognised insurers in India are accepted." },
        { tag: "Common", title: "A host declaration with no Maltese notary", text: "The Declaration of Proof is witnessed by a public notary in Malta, in original." },
        { tag: "Common", title: "Only 2 blank pages", text: "Malta asks for at least 3 blank pages in the passport." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Malta application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and where you'll stay." },
        { title: "Host papers first", text: "The notarized Declaration of Proof, if you're staying with someone." },
        { title: "We check the file", text: "Insurer, blank pages and single-sided copies." },
        { title: "You give biometrics", text: "In person at VFS, originals and copies." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Malta. We'll send the document list.",
    metaTitle: "Malta Tourist Visa from Kerala",
    metaDescription: "Malta tourist visa from Kerala: a Schengen visa submitted in person at VFS. We check the insurer, the blank pages, the single-sided copies and any host's notarized Declaration of Proof, so nothing is missing on the day.",
  },
  // Netherlands_tourist_visa_page.pdf
  {
    slug: "netherlands",
    code: "nl",
    name: "Netherlands",
    title: "Netherlands tourist visa",
    region: "Western Europe",
    heroLead: "Indian passports need a Schengen visa for the Netherlands. Most documents go in as colour copies, and the file has to show two things: that you can pay for the trip, and what ties you to India. We check both first.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Biometrics at the visa centre" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "About 15 days", note: "Longer in the summer season" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "Colour copies, and ties to home",
      body: "Bring the original passport and photo, and a colour copy of almost everything else. The passport must be signed by you, under 10 years old, with 2 blank visa pages, and valid 3 months after you leave the Schengen area.\n\nShow the ties to India that fit your situation: your job and leave letter, your business, your pension or your studies. If none of those apply, being a caregiver, owning property, or having children in school here counts too. A paid ticket isn't needed; a reservation in your name is enough.",
    },
    documents: {
      title: "Netherlands tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Application form, completed",
            "Original passport, signed by you. Under 10 years old, 2 blank visa pages, valid 3 months after you leave the Schengen area",
            "Colour copies of the passport. The biometric data page, the last page, and Schengen stamps from previous passports if you have them",
            "1 colour photo: 35 × 45 mm. No more than 6 months old, white or light-coloured background",
            "Cover letter. Reason for your visit, duration, fellow travellers, transport and accommodation",
            "Travel reservation in your name. To and from the Schengen area, with your travel plans; no paid ticket needed",
            "Joining an organised tour? The booking or reservation for it",
            "Proof of accommodation for the entire trip. Hotel, holiday rental, rented accommodation or campus; in each Schengen country you visit",
            "Proof you can pay for the trip. Personal bank statements for 3 months, stamped and signed by the bank; or ITR for the last 2 tax years",
            "Travel medical insurance in your name. All Schengen countries, the whole stay, at least €30,000, including hospital, emergency care, prescriptions and repatriation",
          ],
        },
        {
          title: "Employed",
          items: [
            "Employment contract",
            "Recent letter from your employer approving your leave",
            "Payslips: last 3 months",
          ],
        },
        {
          title: "Self-employed or company owner",
          items: [
            "Company registration certificate. With the GST registration number, for a company registered in India",
            "Business account bank statements",
            "Income tax return with a verified barcode",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension statements: last 3 months",
            "Other proof of money or property. For example income from a business you own, a house or land",
          ],
        },
        {
          title: "Student",
          items: [
            "Statement from your school, college or university. Confirming you're enrolled",
          ],
        },
        {
          title: "None of these apply?",
          items: [
            "Proof that you're a caregiver in India",
            "Proof that you own a house or other property in India",
            "Proof that your children go to school in India",
          ],
        },
        {
          title: "Not an Indian citizen?",
          items: [
            "Proof of legal residence in India, original and colour copy. An Indian residence permit valid 3 months after you leave the Schengen area, a visa, or a work permit",
            "Not resident where you apply? Show why you can't apply in your country of residence",
          ],
        },
        {
          title: "Children under 18 travelling alone or with one parent",
          items: [
            "Recent extract of the child's birth certificate. Original and colour copy",
            "Travelling with one parent or guardian. Notarized consent from the one not travelling; or the court ruling or official proof of sole custody",
            "Travelling alone. Notarized consent from both parents or guardians",
            "Colour copies of the parents' or guardians' passports. With their photo and signature",
            "A parent already has a valid Schengen visa. A colour copy of their passport's photo page and that visa",
            "A parent or guardian has passed away. A copy of the death certificate",
            "A guardian has been appointed. A copy of the official proof of guardianship",
            "There is a court ruling. A copy of the court's permission for the child to travel",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Netherlands files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "An unsigned passport", text: "The Netherlands requires your signature in the travel document." },
        { tag: "Common", title: "A reservation in someone else's name", text: "The travel booking and the insurance both have to be in your name." },
        { tag: "Common", title: "Insurance that doesn't spell out cover", text: "It must state all Schengen countries, the whole stay and at least €30,000." },
        { tag: "Common", title: "An old leave letter", text: "Employees need the contract and a recent letter approving the leave." },
        { tag: "Common", title: "No ties shown at all", text: "No job or pension? Property, caregiving or children in school still count." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Netherlands application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "We show your ties", text: "Job, business, pension, study or family at home." },
        { title: "We check the file", text: "Signature, colour copies and insurance wording." },
        { title: "You give biometrics", text: "Fingerprints and photo at the visa centre." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to the Netherlands. We'll send the document list.",
    metaTitle: "Netherlands Tourist Visa from Kerala",
    metaDescription: "Netherlands tourist visa from Kerala: a Schengen visa lodged with biometrics, most documents as colour copies. We check your signed passport, insurance wording and the ties to India your file has to show.",
  },
  // Norway_tourist_visa_page.pdf
  {
    slug: "norway",
    code: "no",
    name: "Norway",
    title: "Norway tourist visa",
    region: "Northern Europe",
    heroLead: "Indian passports need a Schengen visa for Norway. The application starts on Norway's online portal, and every applicant answers a questionnaire on family, work, property and past travel. Norway issues the visa for the dates on your flight booking, so we get those dates right first.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Applied on the Application Portal Norway" },
      { label: "Stay", value: "Up to 90 days", note: "Issued for the dates on your flight booking" },
      { label: "Processing", value: "About 15 days", note: "Longer in the summer season" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "Your visa follows your flight booking",
      body: "Norway issues the visa according to the dates on your flight booking: fixed dates, a maximum of 90 days, and the correct number of entries. Don't buy the ticket until the visa is granted. On a cruise or package tour, add the agent's payment confirmation.\n\nEvery applicant prints and answers the C-visa questionnaire: where you're going and why, your work and monthly income, property, past Schengen trips, and every close family member with date of birth and country of residence. All questions are mandatory.",
    },
    documents: {
      title: "Norway tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original current passport and all previous passports. Valid 3 months after travel, issued within the last 10 years, with 2 blank pages",
            "Copies of the biodata page and all used pages",
            "1 passport photo, white background. Not older than 6 months, 35–40 mm",
            "Signed cover letter from the Application Portal Norway. Sent to you by email, or downloaded from the portal",
            "C-visa questionnaire, printed and fully answered",
            "Confirmed round-trip flight booking. Fixed dates, maximum 90 days, correct number of entries; don't buy the ticket until the visa is granted",
            "Travel agency certificate for an organised trip. Travelling independently? A detailed plan and schedule",
            "Cruise or package tour? Payment confirmation from the travel agent",
            "Confirmation of accommodation. In Norway and every other Schengen country you visit",
            "Travel and health insurance. From an approved Indian insurer, covering the whole journey in the Schengen area",
          ],
        },
        {
          title: "Work, study and money",
          items: [
            "Documents of your employment, school or studies",
            "Permission for leave",
            "Proof of income, if any",
            "Copies of your bank accounts: last 6 months",
          ],
        },
        {
          title: "What the questionnaire asks",
          items: [
            "You and your trip. Civil status, countries and cities, purpose, who you'll visit and how you know them; for tourism, the hotel name is enough",
            "Work and property. Where you work, since when, your position and monthly income; any property you own",
            "Past Schengen travel. Where, why, and whether you kept to the rules",
            "Close family and fellow travellers. Spouse, parents, children, brothers and sisters, with dates of birth and countries of residence",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Travelling alone. Consent letter signed by both parents and legalized; original and copy",
            "Travelling with one parent. Consent letter from the other parent, legalized; original and copy",
            "That parent has single custody. Show the original certificate of single custody, and give a copy",
          ],
        },
        {
          title: "Someone representing you",
          items: [
            "Letter granting power of attorney. Optional; on Norway's separate form",
          ],
        },
      ],
      note: "Consulates change their lists with little notice. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Norway files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Buying the ticket too early", text: "Norway says not to buy it until the visa is granted. A confirmed booking is enough." },
        { tag: "Common", title: "Booking dates that don't fit the trip", text: "The visa is issued for the booked dates and entries, so they have to be right." },
        { tag: "Common", title: "Blank questions in the questionnaire", text: "Every question is mandatory, including every close family member." },
        { tag: "Common", title: "Only the current passport", text: "Bring all previous passports, and copies of every used page." },
        { tag: "Common", title: "3 months of bank statements", text: "Norway asks for the last 6 months." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Norway application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and how many entries." },
        { title: "We use the portal", text: "Application, and your signed cover letter." },
        { title: "The questionnaire", text: "Family, work and travel history, every question." },
        { title: "You give biometrics", text: "Fingerprints and photo at the visa centre." },
        { title: "Until it's back", text: "Tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Norway. We'll send the document list.",
    metaTitle: "Norway Tourist Visa from Kerala",
    metaDescription: "Norway tourist visa from Kerala: a Schengen visa started on the Application Portal Norway, with the C-visa questionnaire answered in full. We get the flight booking dates right first, because the visa follows them.",
  },
  // Poland_tourist_visa_page.pdf
  {
    slug: "poland",
    code: "pl",
    name: "Poland",
    title: "Poland tourist visa",
    region: "Central Europe",
    heroLead: "Indian passports need a Schengen visa for Poland. Poland wants the file put together in a fixed order, and it only accepts travel insurance from insurers on the Schengen consulates' approved list. We sort out both before your appointment.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Submitted in person with biometrics" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "15 calendar days", note: "Can be extended to 45 days" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "An approved insurer, and a file in the right order",
      body: "Poland only accepts an original travel insurance certificate from a company on the list of Indian insurers approved by the Schengen consulates. It can't be handwritten, and your name has to be in English letters. It must cover at least €30,000 for the whole stay, including emergency treatment, hospital care and repatriation, including in case of death.\n\nYour documents go in the order on Poland's checklist, starting with the passport and ending with copies. You also need copies of your passport's bio-data page and last page. Poland decides within 15 calendar days, but that can stretch to 45, and the Embassy can ask for more documents or call you for an interview.",
    },
    documents: {
      title: "Poland tourist visa requirements",
      lead: "The documents we ask for, in the order Poland wants them. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport. Issued within the last 10 years, valid 3 months after you leave the Schengen area, with at least 2 blank pages",
            "Visa application form, fully filled in and signed. No blanks. For a child, signed by a parent or legal guardian",
            "1 colour photo: 35 × 45 mm. White background, face filling 70–80% of the photo, not older than 6 months",
            "Signed Poland checklist",
            "Cover letter. Purpose, duration, who's travelling with you, transport and accommodation",
            "Proof of transport and itinerary. Your flight reservations and day-by-day travel plan",
            "Original travel insurance certificate. From an approved Indian insurer; not handwritten; your name in English letters; valid across Schengen for the whole stay; at least €30,000 including repatriation",
            "Proof of accommodation. Hotel, holiday home or campus residence; in each Schengen country you visit",
            "Staying with family or friends? Proof of sponsorship and/or private accommodation from your host",
            "Copies of your current passport. The bio-data page and the last page",
            "Copies of Schengen stamps from previous passports. If you have them",
            "Any other documents that support your trip. Optional, if they help explain it",
          ],
        },
        {
          title: "Proof of funds, for everyone",
          items: [
            "Original personal bank statement: last 3 months. Showing movements, stamped and signed by the bank",
            "ITR acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Tourism",
          items: [
            "Travel agency confirmation of your booked tour. Or another document that shows your travel plans",
          ],
        },
        {
          title: "Employed",
          items: [
            "Pay slips: last 3 months",
            "Employment contract",
            "Leave letter from your employer. Approving your holiday",
          ],
        },
        {
          title: "Self-employed or company owner",
          items: [
            "Company registration certificate. With the GST registration number, for a company registered in India",
            "Business bank account statement",
            "Income tax return. With a verifiable barcode",
          ],
        },
        {
          title: "Sponsored",
          items: [
            "Proof of sponsorship and/or private accommodation. On the destination country's own form, where it has one",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension statements: last 3 months. And/or proof of regular income from property or a business you own",
          ],
        },
        {
          title: "Student",
          items: [
            "Certificate from your school, college or university. Confirming you're enrolled",
          ],
        },
        {
          title: "Visiting family or friends in Poland",
          items: [
            "Invitation from your family member or friend. With their address, contact details and the dates of your stay",
            "Proof they live there legally. A copy of their passport, national ID card or residence permit",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Travelling with one parent. Notarized consent from the other parent or guardian; or a court order or other proof of sole custody",
            "Travelling alone. Notarized consent from both parents or guardians with custody",
            "Copies of the parents' or guardians' ID. With their photo and signature",
          ],
        },
      ],
      note: "Consulates change their lists with little notice, and the Embassy may ask for more documents or an interview. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Poland files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "An insurer that isn't on the list", text: "Poland only accepts insurance from companies the Schengen consulates have approved." },
        { tag: "Common", title: "A handwritten insurance certificate", text: "It has to be the original, printed certificate, with your name in English letters." },
        { tag: "Common", title: "Blanks on the application form", text: "Every field has to be filled in, and the form signed." },
        { tag: "Common", title: "A file out of order", text: "Poland wants the documents in its checklist order, copies at the end." },
        { tag: "Common", title: "No proof of travel plans", text: "Tourists need a tour booking from a travel agency, or a clear itinerary." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Poland application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "Insurance and plan", text: "An approved insurer, and a day-by-day itinerary." },
        { title: "We check the file", text: "Every form field filled in, and documents in Poland's order." },
        { title: "You give biometrics", text: "Fingerprints and photo at the application centre." },
        { title: "Until it's back", text: "Any Embassy request answered, and tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Poland. We'll send the document list.",
    metaTitle: "Poland Tourist Visa from Kerala",
    metaDescription: "Poland tourist visa from Kerala: a Schengen visa submitted in person with biometrics. We put the file in Poland's checklist order and make sure the travel insurance comes from an approved insurer before your appointment.",
  },
  // Portugal_tourist_visa_page.pdf
  {
    slug: "portugal",
    code: "pt",
    name: "Portugal",
    title: "Portugal tourist visa",
    region: "Southern Europe",
    heroLead: "Indian passports need a Schengen visa for Portugal. You submit at VFS, and the Embassy of Portugal in New Delhi decides. Portugal is strict about how the file looks: an exact order, A4 paper, no staples, and a copy of every original. Get those wrong and documents can be counted as missing. So we put the file together with you.",
    facts: [
      { label: "Route", value: "Schengen visa via VFS", note: "Submitted in person with biometrics" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "15 calendar days", note: "Counted from when the Embassy receives it" },
      { label: "Start", value: "At least 1 month before", note: "A booked flight doesn't speed it up" },
    ],
    intro: {
      title: "A tidy file, and a copy of every original",
      body: "Documents go in the exact order on Portugal's checklist, on A4 paper, with nothing stapled. Anything not in English or Portuguese needs a proper translation, or it's treated as missing. Bring a copy of every original: the Embassy keeps originals that come without one.\n\nThe 15 days start only when your file reaches the Embassy, which can take up to 2 working days from VFS, and Embassy holidays don't count. It can take longer if the Embassy wants an interview or checks your bank documents. Documents can't be emailed or posted later unless the Embassy asks, so the file has to be complete on the day.",
    },
    documents: {
      title: "Portugal tourist visa requirements",
      lead: "The documents we ask for, in the order Portugal wants them. Copies are fine unless the list says original. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Schengen visa application form, filled in and signed. All pages, one form per applicant. For a child, signed by a parent or legal guardian",
            "Original passport. Issued within the last 10 years, valid 3 months after you return, with at least 2 blank pages",
            "Passports that aren't accepted. Handwritten passports, ones with remarks on the bio-data page, or manual changes to name, place or date of birth, or sex made after 1 April 2010",
            "Previous passports. All of them, in any condition, held with a rubber band, not stapled. A note if one was lost",
            "Copies of previous Schengen visas. With copies of that passport's bio-data page and last page",
            "Copies of valid UK, USA or Canada visas. If you have them. Going on to another country after Schengen? Get that visa first",
            "Visa refused in the last 2 years? The refusal letter, or a written explanation of why it was refused",
            "2 passport photos: 35–40 mm wide. White background, not older than 6 months, not copied or scanned. One pasted on the form, one clipped to the passport's last page",
            "Original cover letter. Your travel plan, referring to your flights and itinerary",
            "Round-trip flight reservation. With your name and the departure and return dates",
            "Visiting several Schengen states? The intra-Schengen flight, train itinerary or car rental too",
            "Original travel insurance, with the Travel Health Declaration. From the approved list of Indian insurers; at least €30,000 / USD 50,000; covering medical repatriation, urgent care and hospital treatment for the whole stay",
            "Proof of accommodation for the whole stay. Hotel, holiday home, campus residence or package tour, or advance payments",
            "Not Indian, Nepali or Bhutanese? Your residence permit for India, Nepal or Bhutan",
          ],
        },
        {
          title: "Employed",
          items: [
            "Salary slips: last 3 months",
            "Salary account and personal bank statements: last 3 months. Originals, A4, stamped and signed by the bank",
            "ITR-V or acknowledgement: last 2 assessment years",
            "Leave letter from your employer. Approving your holiday",
          ],
        },
        {
          title: "Self-employed or company owner",
          items: [
            "Proof you own the business. Registration certificate, GST registration with annex A & B, partnership deed or proof of proprietorship",
            "Personal and business bank statements: last 3 months. Originals, stamped and signed by the bank",
            "Company and personal ITR-V or acknowledgement. Last 2 assessment years",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension bank statement: last 3 months",
            "Proof of regular income. From property or a business you own",
          ],
        },
        {
          title: "Student or not working",
          items: [
            "Enrolment letter from your college, school or university",
            "No objection certificate from the institution",
            "Parents' bank statements: last 3 months. If the student is under 18",
            "Parents' ITR-V: last 2 years. With a letter confirming they're paying, and copies of their passports",
          ],
        },
        {
          title: "Sponsored or invited by someone in Portugal",
          items: [
            "Original Statement of Responsibility (Termo de Responsabilidade). Filled in and signed by your host, certified by a Portuguese notary or lawyer",
            "Copy of your host's ID. Portuguese ID card or passport, or their Portuguese residence permit",
            "Your host's finances. Portuguese tax declarations (IRS) for 2 years, salary slips and Portuguese bank statements for 3 months",
            "Staying at your host's home? Their property title or rental contract",
          ],
        },
        {
          title: "Host is your spouse or parent",
          items: [
            "Spouse: marriage certificate. With a Hague Apostille",
            "Parent: your birth certificate. With a Hague Apostille",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Birth certificate. With a Hague Apostille",
            "Travelling with one parent. Notarized consent from the other parent or guardian; or a court order or other proof of sole custody",
            "Travelling alone. Notarized consent from both parents or guardians with custody",
            "Copies of the parents' or guardians' ID. With their photo and signature",
          ],
        },
      ],
      note: "Consulates change their lists with little notice, and the Embassy may ask for more documents or an interview. We confirm the current list for your passport before you pay any fee. The visa fee isn't refunded if the visa is refused.",
    },
    pitfalls: {
      title: "Where Portugal files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Stapled or out-of-order papers", text: "Portugal wants A4 sheets in checklist order, with nothing stapled." },
        { tag: "Common", title: "Originals without copies", text: "The Embassy keeps any original you hand in without a copy." },
        { tag: "Common", title: "An insurer that isn't on the list", text: "It has to be an approved Indian insurer, with the original policy and the Travel Health Declaration." },
        { tag: "Common", title: "Documents without translation", text: "Anything not in English or Portuguese without a proper translation counts as missing." },
        { tag: "Common", title: "Certificates without an apostille", text: "Marriage and birth certificates need a Hague Apostille." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Portugal application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "Insurance and papers", text: "An approved insurer, apostilles and translations sorted." },
        { title: "We assemble the file", text: "A4, checklist order, no staples, a copy of every original." },
        { title: "You give biometrics", text: "Fingerprints and photo at VFS." },
        { title: "Until it's back", text: "Any Embassy request answered, and tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Portugal. We'll send the document list.",
    metaTitle: "Portugal Tourist Visa from Kerala",
    metaDescription: "Portugal tourist visa from Kerala: a Schengen visa submitted at VFS and decided by the Embassy in New Delhi. We assemble the file in checklist order on A4, unstapled, with a copy of every original, approved insurance and apostilles.",
  },
  // Romania_tourist_visa_page.pdf
  {
    slug: "romania",
    code: "ro",
    name: "Romania",
    title: "Romania tourist visa",
    region: "Eastern Europe",
    heroLead: "Indian passports need a Schengen visa for Romania. Romania asks for more passport validity than most Schengen countries, and wants clear proof that you'll come back to India. We check both before your appointment.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Submitted in person at your appointment" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Passport", value: "6 months' validity", note: "With at least 2 blank pages" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "Six months on your passport, and proof you'll come home",
      body: "Your passport needs 6 months' validity, more than the 3 months most Schengen countries ask for, and at least 2 blank pages. If it's close, renew it before you apply.\n\nRomania also wants proof of your ties to India: property you own, family who depend on you, or a confirmed job to come back to. Put it alongside a cover letter and itinerary that explain the trip and who's paying. Fingerprints may be skipped if you gave them for a Schengen visa in the last 5 years.",
    },
    documents: {
      title: "Romania tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport. Valid for 6 months, with at least 2 blank pages",
            "Copies of your passport. The first and last pages, and all past Schengen visas",
            "Previous passports. If you have them, or other proof of your travel history",
            "2 passport photos: 35 × 45 mm. White background",
            "Appointment slip. Bring it on the day of your appointment",
            "Consent for biometric data. Fingerprints may be needed, unless you gave them for a Schengen visa in the last 5 years",
            "Cover letter. Your purpose, itinerary and how the trip is paid for",
            "Confirmed round-trip flight reservation",
            "Travel itinerary. Your plans, travel details and financial arrangements",
            "Hotel reservation. For your entire stay in Romania",
            "Travel insurance. At least €30,000 for medical emergencies",
            "Proof of ties to India. Property ownership, family dependents or confirmed employment",
            "Marriage certificate. A copy, if asked for",
          ],
        },
        {
          title: "Proof of funds, for everyone",
          items: [
            "Bank statement. Showing enough balance for the trip",
            "Income tax returns: last 2 years",
          ],
        },
        {
          title: "Employed",
          items: [
            "Employment confirmation letter",
            "Pay slips",
            "NOC from your employer",
          ],
        },
        {
          title: "Self-employed",
          items: [
            "PAN card",
            "Business registration certificate",
            "Bank statements: last 3 months",
          ],
        },
        {
          title: "Retired",
          items: [
            "Proof of pension. Or of income from other sources",
          ],
        },
        {
          title: "Student",
          items: [
            "Enrolment letter from your institution. Not older than 30 days",
          ],
        },
        {
          title: "Sponsored",
          items: [
            "Sponsorship letter",
            "Your sponsor's financial documents",
          ],
        },
        {
          title: "Invited by someone in Romania",
          items: [
            "Formal invitation letter. From your friend, relative or organization in Romania",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Birth certificate",
            "Parental consent. If the child is travelling alone",
          ],
        },
      ],
      note: "Consulates change their lists with little notice, and the Embassy may ask for more documents or an interview. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Romania files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A passport with under 6 months left", text: "Romania wants 6 months' validity, not the 3 many Schengen countries accept." },
        { tag: "Common", title: "No proof of coming back", text: "Show property, dependents or a job waiting for you in India." },
        { tag: "Common", title: "An old enrolment letter", text: "Students need a letter from the institution that's no more than 30 days old." },
        { tag: "Common", title: "A thin cover letter", text: "It should explain the purpose, the itinerary and who pays for the trip." },
        { tag: "Common", title: "Forgetting the appointment slip", text: "Bring it on the day. Without it, you may not be able to submit." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Romania application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "Passport and ties", text: "6 months' validity checked, and proof of your ties to India gathered." },
        { title: "We check the file", text: "Cover letter, itinerary, insurance and funds." },
        { title: "You attend the appointment", text: "With your slip, and fingerprints if needed." },
        { title: "Until it's back", text: "Any Embassy request answered, and tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Romania. We'll send the document list.",
    metaTitle: "Romania Tourist Visa from Kerala",
    metaDescription: "Romania tourist visa from Kerala: a Schengen visa submitted in person at your appointment. Romania wants 6 months of passport validity and clear proof of your ties to India, so we check both first.",
  },
  // Slovakia_tourist_visa_page.pdf
  {
    slug: "slovakia",
    code: "sk",
    name: "Slovakia",
    title: "Slovakia tourist visa",
    region: "Central Europe",
    heroLead: "Indian passports need a Schengen visa for Slovakia. Slovakia follows the common Schengen document list for India, so the paperwork is familiar. What decides the file is how clearly it shows your plan and your money. We check both before your appointment.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Submitted in person with biometrics" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "15 calendar days", note: "Can be extended to 45 days" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "A clear plan, and money that matches it",
      body: "As a tourist, you need a travel agency's confirmation of your booked tour, or another document that clearly shows your travel plans. Your cover letter, flights and hotel bookings should all tell the same story: where you're going, for how long, and with whom.\n\nEvery applicant brings an original bank statement for the last 3 months, stamped and signed by the bank, and ITR acknowledgements for the last 2 assessment years. Then add the documents for your situation: employed, self-employed, sponsored or retired.",
    },
    documents: {
      title: "Slovakia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport. Issued within the last 10 years, valid 3 months after you leave the Schengen area, with at least 2 blank pages",
            "Schengen visa application form, filled in and signed",
            "1 passport photo: 35 × 45 mm. White background, not older than 6 months",
            "Copies of your current passport. The bio-data page and the last page",
            "Copies of Schengen stamps from previous passports. If you have them",
            "Cover letter. Purpose, duration, who's travelling with you, transport and accommodation",
            "Proof of transport and itinerary. Your flight reservations and day-by-day travel plan",
            "Proof of accommodation. Hotel, holiday home or campus residence; in each Schengen country you visit",
            "Staying with family or friends? Proof of sponsorship and/or private accommodation from your host",
            "Travel medical insurance. Valid across Schengen for the whole stay, at least €30,000",
          ],
        },
        {
          title: "Proof of funds, for everyone",
          items: [
            "Original personal bank statement: last 3 months. Showing movements, stamped and signed by the bank",
            "ITR acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Tourism",
          items: [
            "Travel agency confirmation of your booked tour. Or another document that shows your travel plans",
          ],
        },
        {
          title: "Employed",
          items: [
            "Pay slips: last 3 months",
            "Employment contract",
            "Leave letter from your employer. Approving your holiday",
          ],
        },
        {
          title: "Self-employed or company owner",
          items: [
            "Company registration certificate. With the GST registration number, for a company registered in India",
            "Business bank account statement",
            "Income tax return. With a verifiable barcode",
          ],
        },
        {
          title: "Sponsored",
          items: [
            "Proof of sponsorship and/or private accommodation. On Slovakia's own form, where one applies",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension statements: last 3 months. And/or proof of regular income from property or a business you own",
          ],
        },
        {
          title: "Student",
          items: [
            "Certificate from your school, college or university. Confirming you're enrolled",
          ],
        },
        {
          title: "Visiting family or friends in Slovakia",
          items: [
            "Invitation from your family member or friend. With their address, contact details and the dates of your stay",
            "Proof they live there legally. A copy of their passport, national ID card or residence permit",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Travelling with one parent. Notarized consent from the other parent or guardian; or a court order or other proof of sole custody",
            "Travelling alone. Notarized consent from both parents or guardians with custody",
            "Copies of the parents' or guardians' ID. With their photo and signature",
          ],
        },
      ],
      note: "Travelling for business, study, an event, medical treatment or as a seafarer? Each has its own documents; ask us for that list. Consulates change their lists with little notice, and the Embassy may ask for more documents or an interview. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Slovakia files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "No proof of travel plans", text: "Tourists need a tour booking from a travel agency, or a clear itinerary." },
        { tag: "Common", title: "An unsigned bank statement", text: "It has to be the original, stamped and signed by the bank, covering 3 months." },
        { tag: "Common", title: "A cover letter that doesn't match", text: "Dates, places and travellers should match your flights and bookings." },
        { tag: "Common", title: "Missing passport copies", text: "Include copies of the bio-data page and the last page." },
        { tag: "Common", title: "No proof of your host's residence", text: "Visiting family? Include a copy of their passport, ID card or residence permit." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Slovakia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "Your travel plan", text: "Tour booking or itinerary, flights and hotels lined up." },
        { title: "We check the file", text: "Cover letter, bank statement, ITRs and insurance." },
        { title: "You give biometrics", text: "Fingerprints and photo at the application centre." },
        { title: "Until it's back", text: "Any Embassy request answered, and tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Slovakia. We'll send the document list.",
    metaTitle: "Slovakia Tourist Visa from Kerala",
    metaDescription: "Slovakia tourist visa from Kerala: a Schengen visa submitted in person with biometrics. We check that your tour booking, cover letter, stamped bank statement and ITRs show a clear plan and the money to match.",
  },
  // Slovenia_tourist_visa_page.pdf
  {
    slug: "slovenia",
    code: "si",
    name: "Slovenia",
    title: "Slovenia tourist visa",
    region: "Central Europe",
    heroLead: "Indian passports need a Schengen visa for Slovenia. If someone in Slovenia is sponsoring you or hosting you, Slovenia wants a guarantee letter authenticated there, and that takes time to arrange. It also asks for copies of every visa from the last three years. We sort out both before your appointment.",
    facts: [
      { label: "Route", value: "Schengen visa", note: "Submitted in person with biometrics" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "15 calendar days", note: "Can be extended to 45 days" },
      { label: "Start", value: "6–8 weeks before", note: "Earlier if your host needs a guarantee letter" },
    ],
    intro: {
      title: "A guarantee letter from Slovenia, and three years of visas",
      body: "Being sponsored, or staying with family or friends? Your host gets a guarantee letter authenticated by the Administrative Unit in Slovenia. They do this in Slovenia and send it to you, so start early: your file isn't complete without it.\n\nSlovenia also wants copies of all your visas from the last 3 years, not just Schengen ones, along with the relevant passport pages. Bring your travel insurance as an original and a copy. If your passport doesn't show that you're married, add your marriage certificate.",
    },
    documents: {
      title: "Slovenia tourist visa requirements",
      lead: "The documents we ask for. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport. Issued within the last 10 years, valid 3 months after you leave the Schengen area, with at least 2 blank visa pages",
            "Copies of your passport pages. Including all visas from the last 3 years",
            "Visa application form, filled in and signed",
            "1 recent passport photo: 35 × 40 mm",
            "Marriage certificate. If you're married and your passport doesn't show it",
            "Travel insurance: original and copy. From a Schengen-approved insurer; for the whole stay; up to €30,000 covering medical repatriation, first aid and hospital care",
            "Round-trip flight reservation",
            "Visiting several Schengen states? The domestic flight, train itinerary or car rental too",
            "Proof of accommodation. Hotel, holiday home or campus residence; in each Schengen country you visit",
            "Staying with family or friends? Your host's authenticated guarantee letter",
          ],
        },
        {
          title: "Proof of funds, for everyone",
          items: [
            "Original personal bank statement: last 3 months. Showing the turnover, stamped and signed by the bank",
            "ITR acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Tourism",
          items: [
            "Travel agency confirmation of your booked tour. Or another document that shows your travel plans",
          ],
        },
        {
          title: "Employed",
          items: [
            "Pay slips: last 3 months",
            "Employment contract",
            "Leave letter from your employer. Approving your holiday",
          ],
        },
        {
          title: "Self-employed or company owner",
          items: [
            "Company registration certificate",
          ],
        },
        {
          title: "Sponsored or hosted in Slovenia",
          items: [
            "Guarantee letter. Authenticated by the Administrative Unit in Slovenia; arranged by your host there",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension statements: last 3 months",
            "Proof of regular income. From property or a business you own",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Travelling with one parent. Notarized consent from the other parent or guardian, unless one parent has sole custody",
            "Travelling alone. Notarized consent from both parents or guardians with custody",
            "Copies of both parents' passports. Failing that, the child's birth certificate and copies of the parents' ID cards",
          ],
        },
      ],
      note: "Consulates change their lists with little notice, and the Embassy may ask for more documents or an interview. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Slovenia files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "No authenticated guarantee letter", text: "A host's letter has to be authenticated by the Administrative Unit in Slovenia." },
        { tag: "Common", title: "Leaving the guarantee letter too late", text: "Your host arranges it in Slovenia. Ask them to start as soon as you have dates." },
        { tag: "Common", title: "Only Schengen visas copied", text: "Slovenia wants copies of every visa from the last 3 years." },
        { tag: "Common", title: "Insurance without a copy", text: "Bring the original policy and a copy, from a Schengen-approved insurer." },
        { tag: "Common", title: "No proof of marriage", text: "If your passport doesn't show your spouse, add the marriage certificate." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Slovenia application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "Host and insurance", text: "Guarantee letter started early, if needed; approved insurer chosen." },
        { title: "We check the file", text: "3 years of visa copies, bank statement and travel plan." },
        { title: "You give biometrics", text: "Fingerprints and photo at the application centre." },
        { title: "Until it's back", text: "Any Embassy request answered, and tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Slovenia. We'll send the document list.",
    metaTitle: "Slovenia Tourist Visa from Kerala",
    metaDescription: "Slovenia tourist visa from Kerala: a Schengen visa submitted in person with biometrics. We get your host's authenticated guarantee letter started early and copy every visa from the last 3 years before your appointment.",
  },
  // Spain_tourist_visa_page.pdf
  {
    slug: "spain",
    code: "es",
    name: "Spain",
    title: "Spain tourist visa",
    region: "Southern Europe",
    heroLead: "Indian passports need a Schengen visa for Spain. You apply through BLS, not VFS, and only if Spain is your only or main destination. Spain asks for six months of bank statements, twice what most Schengen countries want, and a lean file with nothing extra in it. We get both right before your appointment.",
    facts: [
      { label: "Route", value: "Schengen visa via BLS", note: "Consular fee and BLS fee both paid" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "1–2 working days", note: "Average at the Mumbai Consulate; varies by case" },
      { label: "Start", value: "4–6 weeks before", note: "Don't buy flights until the visa is granted" },
    ],
    intro: {
      title: "Six months of statements, and nothing you don't need",
      body: "Spain wants original bank statements for the last 6 months, stamped and signed by the bank, from you and from your sponsor if you have one. Add your ITR-V or Form 16 for 2 years and a copy of your PAN card.\n\nKeep the file lean: only the documents on the list, printed back to back where you can, and nothing stapled. Sign the form in blue ink. Visiting family or friends? Your host gets an invitation letter from the Spanish National Police, and that takes time. Book refundable flights: Spain advises not buying tickets until the visa is granted.",
    },
    documents: {
      title: "Spain tourist visa requirements",
      lead: "The documents we ask for, and nothing more, because Spain asks you not to add extras. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Schengen visa application form. Fully filled in, including postal address, email and phone; dated and signed in blue ink",
            "1 photo: 35 × 45 mm, pasted on the form. White background, not older than 6 months",
            "Original passport. Issued within the last 10 years, valid 3 months after your stay ends, with at least 2 blank pages. Old passports can be included",
            "Copies of your passport. The bio-data pages at the front and back, and every page with a stamp or visa",
            "Visa refused in the last 2 years? The refusal letter, or a written explanation of why",
            "Proof of address. Showing you live in the area the Consulate covers",
            "Not an Indian national? Your Indian residence permit",
            "Travel insurance. From an approved Indian insurer; at least €30,000 covering medical repatriation, urgent care and hospital treatment; across Schengen for the whole stay",
            "Cover letter. Explaining the purpose of your visit",
            "Round-trip flight booking. Plus any internal travel bookings. A reservation, not a paid ticket",
            "Hotel bookings for your whole stay in Schengen",
            "Staying with family or friends in Spain? An invitation letter issued by the Spanish National Police, instead of hotels",
          ],
        },
        {
          title: "Proof of funds, for everyone",
          items: [
            "Original bank statements: last 6 months. Stamped and signed by the bank",
            "ITR-V or Form 16: last 2 years",
            "Copy of your PAN card",
            "Salary slips: last 3 months. If you're employed",
          ],
        },
        {
          title: "Sponsored",
          items: [
            "Your sponsor's original bank statements: last 6 months. Stamped and signed by the bank",
            "Original signed letter from your sponsor. Saying what they'll pay for, and how much",
            "Proof of your relationship to the sponsor",
          ],
        },
        {
          title: "Other proof of means",
          items: [
            "Property title in Spain. If you own property there",
            "Pension slips. If you're retired",
            "Proof of deposits. Fixed deposits or other savings, where relevant",
          ],
        },
        {
          title: "Visiting family or friends in Spain",
          items: [
            "Invitation letter from your host. Issued through the Spanish National Police in Spain",
            "Family of an EU, EEA or Swiss citizen? Your application gets priority. Tell us, and we'll prepare it that way",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Application form signed by both parents",
            "Applying alone or with one parent. A notarized authorization letter signed by both parents",
            "Proof of the absent parent's signature. A notarized copy of their passport, PAN card or driving licence",
          ],
        },
      ],
      note: "Consulates change their lists with little notice, and the Consulate may contact you later for more information. We confirm the current list for your passport before you pay any fee.",
    },
    pitfalls: {
      title: "Where Spain files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Only 3 months of statements", text: "Spain wants 6 months, from you and from any sponsor." },
        { tag: "Common", title: "Applying to the wrong country", text: "Apply to Spain only if it's your only or main destination." },
        { tag: "Common", title: "A padded file", text: "Extra documents, or stapled ones, work against you. Stick to the list." },
        { tag: "Common", title: "A host letter that isn't from the police", text: "Staying with someone in Spain? Their invitation has to be issued through the National Police." },
        { tag: "Common", title: "Blanks on the form", text: "Postal address, email and phone all have to be filled in, and the form signed in blue ink." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Spain application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "Statements and host letter", text: "6 months from everyone paying; police invitation started if needed." },
        { title: "We check the file", text: "Only what's on the list, unstapled, form signed in blue ink." },
        { title: "You give biometrics", text: "Fingerprints and photo at BLS." },
        { title: "Until it's back", text: "Any Consulate request answered, and tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Spain. We'll send the document list.",
    metaTitle: "Spain Tourist Visa from Kerala",
    metaDescription: "Spain tourist visa from Kerala: a Schengen visa lodged through BLS with biometrics. We check the 6 months of stamped bank statements, keep the file lean with nothing extra, and start any police invitation letter early.",
  },
  // Sweden_tourist_visa_page.pdf
  {
    slug: "sweden",
    code: "se",
    name: "Sweden",
    title: "Sweden tourist visa",
    region: "Northern Europe",
    heroLead: "Indian passports need a Schengen visa for Sweden. You submit at VFS, and the Embassy of Sweden in New Delhi decides. The Embassy starts processing the moment your file is lodged, so it has to be complete on the day: an incomplete file is likely to be refused. We check every page before your appointment.",
    facts: [
      { label: "Route", value: "Schengen visa via VFS", note: "Submitted in person with biometrics" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Processing", value: "15 calendar days", note: "Can be extended to 45 days" },
      { label: "Start", value: "6–8 weeks before", note: "No later than 15 days before you travel" },
    ],
    intro: {
      title: "Complete on the day, and in English or Swedish",
      body: "Sweden treats your file as final once it's lodged. There's no window to send missing papers later, and choosing to submit an incomplete file is likely to lead to a refusal. Apply at least 15 days before your trip starts.\n\nEvery document must be in English or Swedish, translated if needed, with an A4 copy of each one and no staples or pins. Bring all your previous passports, whatever their condition, and attach the signed Sweden checklist to your application, with documents in its order.",
    },
    documents: {
      title: "Sweden tourist visa requirements",
      lead: "The documents we ask for, in the order Sweden wants them. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Signed Sweden document checklist. Ticked off and attached to your application",
            "Original passport. Issued within the last 10 years, valid 3 months after you leave the Schengen area, with at least 2 blank pages",
            "All previous passports. In any condition. A note if one was lost",
            "1 passport photo: 35 × 45 mm. White background, not older than 6 months",
            "Schengen application form, signed",
            "Cover letter. Purpose, duration, who's travelling with you, transport and accommodation",
            "Copies of your passport. The bio-data page, the last page, and Schengen stamps from previous passports",
            "Travel agency confirmation of your booked tour. Or another document that shows your travel plans",
            "Proof of transport and itinerary. Including travel between Schengen countries",
            "Proof of accommodation. Hotel, holiday home or campus residence; in each Schengen country you visit",
            "Staying with family or friends? Proof of sponsorship and/or private accommodation from your host",
            "Travel medical insurance. At least €30,000 or equivalent, valid across Schengen for the whole stay",
          ],
        },
        {
          title: "Proof of funds, for everyone",
          items: [
            "Original bank statements: last 3 months",
            "ITR acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Employed",
          items: [
            "Pay slips: last 3 months",
            "Employment contract",
            "Leave letter from your employer. Approving your holiday",
          ],
        },
        {
          title: "Self-employed or company owner",
          items: [
            "Company registration certificate. With the GST registration number",
            "Business bank account statement",
            "Income tax return. With a verifiable barcode",
          ],
        },
        {
          title: "Sponsored",
          items: [
            "Proof of sponsorship and/or private accommodation. On Sweden's own form, where one applies",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension statements: last 3 months. And/or proof of regular income from property or a business you own",
          ],
        },
        {
          title: "Student",
          items: [
            "Letter from your school or university. Confirming you're enrolled",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Travelling alone. Original consent letter signed by both parents or guardians with custody",
            "Travelling with one parent. Original consent letter from the other parent",
            "Parent has sole custody? A copy of the sole custody certificate",
            "Copies of the parents' or guardians' ID. With their photo and signature",
          ],
        },
      ],
      note: "Consulates change their lists with little notice, and the Embassy may ask for more documents or an interview. We confirm the current list for your passport before you pay any fee. The visa fee isn't refunded if the visa is refused.",
    },
    pitfalls: {
      title: "Where Sweden files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "Submitting an incomplete file", text: "Sweden decides on what's lodged. Going ahead without a document is likely to mean a refusal." },
        { tag: "Common", title: "Documents not translated", text: "Everything has to be in English or Swedish." },
        { tag: "Common", title: "No copies, or stapled papers", text: "An A4 copy of each document, with no staples or pins." },
        { tag: "Common", title: "Old passports left at home", text: "Sweden wants every previous passport, whatever its condition." },
        { tag: "Common", title: "Applying too close to the trip", text: "Apply at least 15 days before you travel, and ideally much earlier." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Sweden application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "Papers and translations", text: "Everything in English or Swedish, old passports gathered." },
        { title: "We assemble the file", text: "A4 copies, no staples, checklist order, nothing missing." },
        { title: "You give biometrics", text: "Fingerprints and photo at VFS." },
        { title: "Until it's back", text: "Any Embassy request answered, and tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Sweden. We'll send the document list.",
    metaTitle: "Sweden Tourist Visa from Kerala",
    metaDescription: "Sweden tourist visa from Kerala: a Schengen visa lodged at VFS with biometrics. Sweden decides on the file as lodged, so we check every page, translation and A4 copy, in checklist order, before your appointment.",
  },
  // Switzerland_tourist_visa_page.pdf
  {
    slug: "switzerland",
    code: "ch",
    name: "Switzerland",
    title: "Switzerland tourist visa",
    region: "Central Europe",
    heroLead: "Indian passports need a Schengen visa for Switzerland. You submit at VFS. Switzerland wants an introduction letter from your employer, accepts only the documents on its list, and has families apply together under one head of family. We put the file together with you so nothing is missing or extra.",
    facts: [
      { label: "Route", value: "Schengen visa via VFS", note: "Submitted in person with biometrics" },
      { label: "Stay", value: "Up to 90 days", note: "In any 180-day period" },
      { label: "Visa fee", value: "€90 per adult", note: "€45 for ages 6–12; free under 6" },
      { label: "Start", value: "6–8 weeks before", note: "You can apply up to 6 months ahead" },
    ],
    intro: {
      title: "A letter from your employer, and one file for the family",
      body: "Employed? Switzerland wants an original introduction letter on company letterhead, signed and stamped by HR or a director. It states your position and years of service, your travel dates and purpose, and that the company has no objection to the trip.\n\nFamilies apply together. Only the head of the family attaches bank statements and ITR, as long as the insurance, flights and hotels name everyone. Documents go in the exact order on the checklist, with nothing stapled, and only listed documents are accepted. Nothing can be emailed to the Embassy afterwards.",
    },
    documents: {
      title: "Switzerland tourist visa requirements",
      lead: "The documents we ask for, in the order Switzerland wants them, and nothing more. We check each one against your passport and application before submission.",
      groups: [
        {
          title: "Documents",
          items: [
            "Original passport. Issued within the last 10 years, valid 3 months after you return, with at least 2 blank pages",
            "Passports that aren't accepted: handwritten passports, or ones with remarks on the bio-data page",
            "1 passport photo: 35–40 mm wide. White background, not older than 6 months, not copied or scanned. Pasted on the form, not stapled or pinned",
            "Visa application form, filled in and signed. With a third-person authorization if someone submits for you",
            "Introduction letter from your employer. Original, on letterhead, signed and stamped by HR or a director; see the Employed card",
            "Travel insurance. From the approved list of Indian insurers; at least €30,000 covering medical repatriation, urgent care and hospital treatment; across Schengen for the whole stay",
            "Applying for a 6-month or 1-year multiple-entry visa? Insurance for the first trip is enough",
            "Flight reservation. With the names of all travellers",
            "Visiting several Schengen states? The intra-Schengen flight, train itinerary or car rental too",
            "Proof of accommodation. Hotel confirmations, package tour or advance payments",
          ],
        },
        {
          title: "Employed",
          items: [
            "Introduction letter. Your position and length of service, travel dates and purpose, and a no-objection statement for the trip",
            "Salary slips: last 3 months",
            "Salary account bank statements: last 3 months. Originals, A4, stamped and signed by the bank",
            "ITR-V or acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Self-employed or company owner",
          items: [
            "Proof you own the business. Registration certificate, GST registration with annex A & B, partnership deed or proof of proprietorship",
            "Personal bank statements: last 3 months. Originals, stamped and signed by the bank",
            "ITR-V or acknowledgement: last 2 assessment years",
          ],
        },
        {
          title: "Retired",
          items: [
            "Pension bank statement: last 3 months. Original, stamped and signed by the bank",
            "Proof of regular income. From property or a business you own",
          ],
        },
        {
          title: "Travelling as a family",
          items: [
            "Apply together, in one submission",
            "Head of family attaches the finances. Bank statements and ITR-V, for everyone",
            "One insurance, flight and hotel booking. Naming every family member, with hotel rooms booked under the head of family",
          ],
        },
        {
          title: "Students over 16",
          items: [
            "Copy of your college ID card",
            "Introduction letter from your school, college or university",
          ],
        },
        {
          title: "Certificate of Identity or Identity Certificate holders",
          items: [
            "Valid Residence Certificate",
            "Valid Return Visa",
          ],
        },
        {
          title: "Children under 18",
          items: [
            "Application form signed by the legal guardian(s). With proof of custody where relevant: divorce papers, death certificate and so on",
            "Not travelling with both parents. Notarized consent from the parent or guardian who isn't travelling",
            "Travelling alone. Notarized consent from both parents or legal guardians",
            "In all cases: a copy of both parents' passports, PAN cards or driving licences",
          ],
        },
      ],
      note: "Consulates change their lists with little notice, and the Embassy may ask for more documents or an interview. We confirm the current list and fees for your passport before you pay anything.",
    },
    pitfalls: {
      title: "Where Switzerland files go wrong",
      lead: "What we see most often in files that come to us after a refusal, or a request for more documents.",
      items: [
        { tag: "Common", title: "A thin employer letter", text: "It needs letterhead, an HR stamp, your role and service, dates, purpose and a no-objection line." },
        { tag: "Common", title: "Extra documents in the file", text: "Switzerland accepts only what's on its checklist." },
        { tag: "Common", title: "A family split across bookings", text: "Insurance, flights and hotels should name every family member." },
        { tag: "Common", title: "Statements without a bank stamp", text: "Originals, on A4, stamped and signed by the bank." },
        { tag: "Common", title: "A stapled photo", text: "The photo is pasted on the form. Stapled or pinned photos aren't accepted." },
      ],
      refused: { title: "Already refused?", text: "Send us the letter. We read it with you and tell you honestly what can be fixed before you reapply." },
    },
    process: {
      title: "How your Switzerland application works with us",
      lead: "No forms to download and no login. You tell a person where you're going, and they do the rest.",
      steps: [
        { title: "You send the trip", text: "Dates, who's going, and who is paying." },
        { title: "Letters and bookings", text: "Employer letter drafted; insurance, flights and hotels naming everyone." },
        { title: "We assemble the file", text: "Checklist order, no staples, nothing extra." },
        { title: "You give biometrics", text: "Fingerprints and photo at VFS, as a family if you're travelling together." },
        { title: "Until it's back", text: "Any Embassy request answered, and tracked until the passport is in your hand." },
      ],
    },
    closing: "Tell us when you're going to Switzerland. We'll send the document list.",
    metaTitle: "Switzerland Tourist Visa from Kerala",
    metaDescription: "Switzerland tourist visa from Kerala: a Schengen visa lodged at VFS with biometrics. We draft the employer introduction letter, file families together under one head of family, and send only what's on Switzerland's checklist.",
  },
];

/** One country by slug, or undefined. */
export function getCountry(slug) {
  return COUNTRIES.find((country) => country.slug === slug);
}
