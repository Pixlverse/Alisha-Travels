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

];

/** One country by slug, or undefined. */
export function getCountry(slug) {
  return COUNTRIES.find((country) => country.slug === slug);
}
