/**
 * ===========================================================================
 *  GLOBAL VISA PAGES: CLIENT-SUPPLIED COPY
 * ===========================================================================
 *
 * Everything the three visa pages say lives here, so the copy reads as one
 * document and can be corrected without touching layout code. The pages under
 * app/(site)/services/global-visa/ only arrange it.
 *
 * TOURIST VISA has no page of its own yet: its copy is still to come from the
 * client. Until then VISA_PAGES.tourist (lib/content/visa-pages.js) points at
 * the existing database-driven service page. When the new page is built,
 * change that one href and every link on these pages, and the navigation,
 * follows.
 *
 * FLAGS are served from /public/flags/<iso>.png (80px wide, from flagcdn.com)
 * rather than emoji: Windows renders flag emoji as two letters.
 */

export { VISA_PAGES } from "./visa-pages";

/* -------------------------------------------------------------------------- */
/*  Hub: /services/global-visa/                                                */
/* -------------------------------------------------------------------------- */

export const HUB = {
  meta: {
    title: "Global Visa Services - Tourist, UK & Ireland Dependant and UK Settlement Visas",
    description:
      "Visa files for holidays, for families joining someone who works abroad, and for moving to the UK for good. Prepared line by line in Kottayam, Kerala by one person from first call to passport back.",
  },
  hero: {
    eyebrow: "Visa services",
    title: "Global visa services",
    lead: "Visa files for holidays, for families joining someone who works abroad, and for moving to the UK for good. One person prepares your file from the first call to the passport coming back.",
    primary: "Check my visa",
  },
  assurances: [
    {
      icon: "FileCheck",
      title: "Checked line by line",
      text: "Every document read against the embassy's own list before submission, not after a refusal.",
    },
    {
      icon: "CalendarCheck",
      title: "Appointments booked",
      text: "Visa centre slots watched and taken when they open, and rebooked if an earlier one appears.",
    },
    {
      icon: "UserRound",
      title: "One person on your file",
      text: "The same name from your first call to your passport coming back.",
    },
    {
      icon: "ShieldCheck",
      title: "Honest about the file",
      text: "If we think an application is weak, we say so before you pay a fee.",
    },
  ],
  chooser: {
    title: "Choose the visa you need",
    lead: "Three kinds of visa file, each with its own rules and its own page.",
    cards: [
      {
        key: "tourist",
        tag: "Short trips",
        title: "Tourist visa",
        strap: "Holidays, family visits, weddings and pilgrimages.",
        text: "Visitor visas for 197 destinations, from Schengen, the UK and the US to the e-visa countries where the rules change most often.",
        points: [
          "Schengen, UK, US, Canada, Australia",
          "Gulf, Southeast Asia, Africa",
          "Parents visiting children abroad",
        ],
        cta: "Tourist visa",
        flags: ["fr", "gb", "us", "ca", "au", "ae"],
      },
      {
        key: "dependant",
        tag: "Joining a worker",
        title: "UK & Ireland dependant visa",
        strap: "For the spouse, partner and children of someone working in the UK or Ireland.",
        text: "Mostly families of nurses and health professionals from Kerala. UK Health and Care or Skilled Worker dependants, and Ireland Join Family visas.",
        points: [
          "Spouse, partner, children under 18",
          "TB test and biometrics arranged",
          "Eligibility checked first",
        ],
        cta: "Dependant visa",
        flags: ["gb", "ie"],
      },
      {
        key: "settlement",
        tag: "Staying for good",
        title: "UK settlement visa",
        strap: "For joining a British or settled partner, and for indefinite leave to remain.",
        text: "The spouse and partner visa from India, children joining a settled parent, and help with ILR, the permanent right to live in the UK.",
        points: [
          "Spouse, partner, fiancé(e)",
          "Income and English evidence",
          "ILR documents reviewed",
        ],
        cta: "UK settlement",
        flags: ["gb"],
      },
    ],
  },
  situations: {
    title: "What people come to us for",
    lead: "Not a list of visas: these are the situations families arrive with. Tell us yours, even if it isn't here.",
    items: [
      {
        tag: "Holiday",
        title: "A trip abroad",
        text: "Europe, Dubai, Singapore, Japan. The itinerary, bookings and bank file the consulate wants to see.",
        link: "tourist",
      },
      {
        tag: "Family",
        title: "Parents visiting children",
        text: "A son or daughter working in the UK, Ireland, Canada or the Gulf. That's a visitor visa.",
        link: "tourist",
      },
      {
        tag: "Nurses",
        title: "Joining a spouse in the UK or Ireland",
        text: "Husband, wife and children of a nurse or skilled worker on a work visa.",
        link: "dependant",
      },
      {
        tag: "Married",
        title: "Married to a British citizen",
        text: "A spouse or partner visa from India, the first step to settlement.",
        link: "settlement",
      },
      {
        tag: "Refused",
        tone: "warn",
        title: "A past refusal",
        text: "We read the letter with you and tell you honestly what can be fixed.",
        link: "enquiry",
      },
    ],
    footnote:
      "197 tourist destinations, plus UK and Ireland family visas. If there's a visa for it, we can prepare the file.",
  },
  countries: {
    title: "Countries we file most often",
    lead: "The destinations that come across our desk week in, week out. For these we already know the current document list and the questions that get asked.",
    groups: [
      {
        key: "often",
        label: "Filed most often",
        countries: [
          ["al", "Albania"],
          ["am", "Armenia"],
          ["au", "Australia"],
          ["az", "Azerbaijan"],
          ["bd", "Bangladesh"],
          ["bn", "Brunei"],
          ["kh", "Cambodia"],
          ["ca", "Canada"],
          ["cn", "China", "Tourist L / Business M"],
          ["eg", "Egypt"],
          ["et", "Ethiopia"],
          ["ge", "Georgia"],
          ["hk", "Hong Kong"],
          ["in", "India", "for foreign nationals"],
          ["id", "Indonesia"],
          ["iq", "Iraq"],
          ["jp", "Japan"],
          ["jo", "Jordan"],
          ["ke", "Kenya"],
          ["kg", "Kyrgyzstan"],
          ["la", "Laos"],
          ["md", "Moldova"],
          ["ma", "Morocco"],
          ["ng", "Nigeria"],
          ["ru", "Russia"],
          ["sg", "Singapore"],
          ["za", "South Africa"],
          ["kr", "South Korea"],
          ["tw", "Taiwan"],
          ["tz", "Tanzania"],
          ["tn", "Tunisia"],
          ["tr", "Türkiye", "Turkey"],
          ["gb", "United Kingdom"],
          ["us", "United States"],
          ["uz", "Uzbekistan"],
          ["vn", "Vietnam"],
          ["zm", "Zambia"],
        ],
      },
      {
        key: "schengen",
        label: "Schengen visa, filed for each of these countries",
        flag: "eu",
        countries: [
          ["at", "Austria"],
          ["be", "Belgium"],
          ["bg", "Bulgaria"],
          ["hr", "Croatia"],
          ["cz", "Czech Republic"],
          ["dk", "Denmark"],
          ["ee", "Estonia"],
          ["fi", "Finland"],
          ["fr", "France"],
          ["de", "Germany"],
          ["gr", "Greece"],
          ["hu", "Hungary"],
          ["it", "Italy"],
          ["lv", "Latvia"],
          ["li", "Liechtenstein"],
          ["lt", "Lithuania"],
          ["lu", "Luxembourg"],
          ["mt", "Malta"],
          ["nl", "Netherlands"],
          ["no", "Norway"],
          ["pl", "Poland"],
          ["pt", "Portugal"],
          ["ro", "Romania"],
          ["sk", "Slovakia"],
          ["si", "Slovenia"],
          ["es", "Spain"],
          ["se", "Sweden"],
          ["ch", "Switzerland"],
        ],
      },
      {
        key: "rising",
        label: "Also filed regularly, and rising",
        countries: [
          ["nz", "New Zealand"],
          ["ae", "United Arab Emirates"],
          ["sa", "Saudi Arabia"],
          ["qa", "Qatar"],
          ["om", "Oman"],
          ["bh", "Bahrain"],
          ["lk", "Sri Lanka"],
          ["mv", "Maldives"],
          ["my", "Malaysia"],
          ["th", "Thailand"],
          ["np", "Nepal"],
          ["bt", "Bhutan"],
          ["mu", "Mauritius"],
        ],
      },
    ],
  },
  process: {
    title: "What actually happens after you message us",
    lead: "No forms to download and no login. You tell a person what you need, and they do the rest.",
    steps: [
      {
        title: "You tell us the trip",
        text: "Where, when, who is travelling, and any visa you've had or been refused before.",
      },
      {
        title: "We send the list",
        text: "A document list for that embassy and that route, not a generic checklist.",
      },
      {
        title: "We check everything",
        text: "Forms filled and every document checked against your passport, line by line.",
      },
      {
        title: "We book and submit",
        text: "Appointments, biometrics and medical tests booked, and the file submitted.",
      },
      {
        title: "Until it's back",
        text: "Tracked until your passport and decision are in your hand. Fees listed separately.",
      },
    ],
  },
  honesty: {
    title: "What we can do, and what nobody can do",
    paragraphs: [
      "We prepare and submit visa applications: the forms, the documents, the appointment and the covering letter. What we cannot do is decide the outcome. Every visa is granted or refused by the embassy or immigration department on its own rules, and no agency anywhere can promise you one.",
      "What we can do is make sure nothing in your file gives them an easy reason to refuse. We will also tell you, before you pay a fee, if we think the application is weak. For cases that need legal advice, like an appeal or a past refusal for deception, we refer you to a regulated immigration adviser rather than guess.",
    ],
    pullQuote: "No agency anywhere can promise you one.",
  },
  closing: {
    title: "Tell us who's travelling. We'll tell you which visa it is.",
    text: "A trip, a family joining a worker, or a move for good. That's enough to start.",
    primary: "Check my visa",
  },
};

/* -------------------------------------------------------------------------- */
/*  UK & Ireland dependant visa                                                */
/* -------------------------------------------------------------------------- */

export const DEPENDANT = {
  meta: {
    title: "UK & Ireland Dependant Visa Assistance in Kerala",
    description:
      "UK Health and Care Worker and Skilled Worker dependant visas, and Ireland Join Family visas, for spouses, partners and children. Eligibility checked first, files matched to the sponsor's paperwork. Kottayam, Kerala.",
  },
  hero: {
    eyebrow: "Visa services",
    title: "UK & Ireland dependant visa",
    lead: "A dependant visa lets the husband, wife, partner and children of a UK or Ireland work-visa holder live, work and study there for the same length of time. From Kottayam, we give UK and Ireland dependant visa assistance to families across Kerala, preparing each family member's file so it matches the sponsor's paperwork exactly.",
    primary: "Check eligibility",
  },
  assurances: [
    {
      icon: "ShieldCheck",
      title: "Eligibility checked first",
      text: "Some routes have closed. We check the sponsor's visa before you pay anything.",
    },
    {
      icon: "FileCheck",
      title: "Matched to the sponsor",
      text: "Names, dates and permit details checked against the main visa holder's file.",
    },
    {
      icon: "Stethoscope",
      title: "TB test and biometrics",
      text: "Approved clinic and visa centre appointments booked for the whole family.",
    },
    {
      icon: "Baby",
      title: "Children included",
      text: "Each child's birth certificate and application in order, even a newborn's.",
    },
  ],
  whatIs: {
    title: "What is a UK dependant visa?",
    lead: 'An immigration category that lets eligible family members of a primary visa holder (the "main applicant" or "sponsor") live, work and study in the UK for the same length of time as the main applicant. When the main visa is extended, the family extends with it.',
    cards: [
      {
        icon: "HeartHandshake",
        title: "Spouse or civil partner",
        text: "Legally married to, or in a civil partnership with, the main applicant.",
      },
      {
        icon: "Heart",
        title: "Unmarried partner",
        text: "Living with the main applicant in a relationship like marriage for at least two years.",
      },
      {
        icon: "Baby",
        title: "Children under 18",
        text: "The main applicant's children under 18, and older children already in the UK as dependants.",
      },
    ],
    note: "Ireland has a similar route, the Join Family visa, for the spouse, partner and children of Critical Skills and General Employment Permit holders. We handle both.",
  },
  situations: {
    title: "What people come to us for",
    lead: "These are the situations families arrive with. Tell us yours, even if it isn't here.",
    items: [
      {
        tag: "Nurses",
        title: "Spouse of a nurse in the UK",
        text: "The most common file we prepare. Health and Care Worker families pay no health surcharge.",
        flag: "gb",
      },
      {
        tag: "Ireland",
        title: "Joining a Critical Skills permit holder",
        text: "No waiting period. The spouse gets Stamp 1G and can work.",
        flag: "ie",
      },
      {
        tag: "Together",
        title: "The whole family at once",
        text: "Spouse and children applying with, or soon after, the main applicant.",
      },
      {
        tag: "Children",
        title: "Children joining later",
        text: "A child left with grandparents, now joining both parents.",
      },
      {
        tag: "Check first",
        tone: "warn",
        title: "Spouse of a care worker",
        text: "Care workers who applied from 11 March 2024 can't bring family. We check before you pay.",
      },
      {
        tag: "Parents",
        title: "Parents wanting to visit",
        text: "Parents aren't dependants. They apply for a visitor visa.",
        link: "tourist",
      },
    ],
    footnote:
      "UK Health and Care Worker and Skilled Worker dependants, and Ireland Join Family visas. Every family member gets their own file.",
  },
  requirements: {
    title: "UK and Ireland dependant visa requirements",
    lead: "Whether family can join depends on the main visa holder's visa or permit, not on the family. That's the first thing we ask for.",
    countries: [
      {
        flag: "gb",
        name: "United Kingdom",
        rows: [
          {
            label: "Can apply",
            text: "The spouse, civil partner or unmarried partner, and children under 18, of someone on a Health and Care Worker or Skilled Worker visa. Most nurses from Kerala are on the Health and Care Worker visa",
          },
          { label: "When", text: "At the same time as the main applicant, or later" },
          {
            label: "Work and study",
            text: "A dependant partner can work in most jobs, and children can go to school",
          },
        ],
      },
      {
        flag: "ie",
        name: "Ireland",
        rows: [
          {
            label: "Critical Skills Employment Permit",
            text: "Spouse, partner and children can apply straight away",
          },
          {
            label: "General Employment Permit",
            text: "After 12 months on the permit, and only if income meets the minimum for the family size",
          },
          {
            label: "After arrival",
            text: "The spouse registers for stamping and can work without a separate permit. Children aged 16+ also get stamping",
          },
        ],
      },
    ],
    closed: {
      title: "Routes that are closed for now",
      text: "Families of care workers and senior care workers who applied from 11 March 2024 can't apply as dependants. Neither can families of most students: only PhD and research students can still bring dependants.",
    },
  },
  ukDocs: {
    flag: "gb",
    title: "UK dependant visa documentation: what to bring us",
    lead: "An online application linked to the main visa holder's Certificate of Sponsorship, then biometrics at a UK visa centre in India. Every family member, including a baby, has their own application and fee.",
    groups: [
      {
        label: "The applicant",
        items: [
          { title: "Valid passport", note: "And all old passports, if any" },
          {
            title: "Marriage certificate",
            note: "For a spouse. Registered, with names spelt exactly as in both passports",
          },
          { title: "Birth certificate of each child", note: "Naming both parents" },
          {
            title: "TB test and chest X-ray OR TB exemption letter",
            note: "From a UK-approved clinic. Needed for stays of more than six months",
          },
          {
            title: "Police clearance certificate (PCC)",
            note: "For every country lived in for over 12 months in the last 10 years. Not needed under 18",
          },
          { title: "Father's and mother's dates of birth" },
          { title: "Aadhaar card number" },
          {
            title: "Travel history for the last 10 years",
            note: "Country, dates of entry and exit, and purpose",
          },
        ],
      },
      {
        label: "The main visa holder in the UK",
        items: [
          { title: "Certificate of Sponsorship (CoS)" },
          { title: "Passport copy" },
          {
            title: "UK visa or immigration status",
            note: "Visa page, BRP (front and back) or eVisa share code",
          },
          { title: "Employment confirmation letter", note: "If available" },
          {
            title: "Employer maintenance letter OR 28-day bank statement",
            note: "At least £285 for a partner, £315 for the first child and £200 for each additional child, held throughout",
          },
          { title: "UK tenancy agreement OR full UK address with post code" },
        ],
      },
    ],
    note: "Families of Health and Care Worker visa holders don't pay the Immigration Health Surcharge. Other Skilled Worker families pay it for each person, and we list it separately before you apply.",
  },
  ieDocs: {
    flag: "ie",
    title: "Ireland dependant visa (Join Family): what to bring us",
    lead: "A long-stay 'D' visa applied for online through AVATS, with documents submitted at the visa centre and decided by the Irish visa office in New Delhi. It takes much longer than a tourist visa, so don't book flights before the decision.",
    groups: [
      {
        label: "Application",
        items: [
          { title: "Signed and dated AVATS summary form" },
          { title: "Application fee payment" },
          {
            title: "Two colour passport photos",
            note: "Under 6 months old, with your name on the back",
          },
          { title: "Current passport and all previous passports" },
        ],
      },
      {
        label: "Proof of relationship",
        items: [
          { title: "Marriage certificate", note: "For a spouse" },
          { title: "Birth certificate", note: "For each child" },
          { title: "Evidence of civil partnership", note: "Where applicable" },
        ],
      },
      {
        label: "The sponsor in Ireland",
        items: [
          { title: "Sponsor's passport copy and IRP card" },
          {
            title: "Proof of employment",
            note: "Employer letter, contract and recent payslips",
          },
          { title: "If self-employed: Form 11 tax return" },
          {
            title: "Proof of address in Ireland",
            note: "Utility bill, tenancy agreement or mortgage documents",
          },
        ],
      },
      {
        label: "Dependency and finances",
        items: [
          {
            title: "Bank statements for the last 6 months",
            note: "Showing money sent by the sponsor to the applicant",
          },
          { title: "A statement of your circumstances in India" },
        ],
      },
      {
        label: "May also be asked for",
        muted: true,
        items: [
          { title: "Police clearance certificate" },
          { title: "Medical or travel insurance" },
          { title: "Details of any previous visa refusals" },
        ],
      },
    ],
  },
  process: {
    title: "What actually happens after you message us",
    lead: "You tell us who's joining whom. We do the rest.",
    steps: [
      {
        title: "You tell us the sponsor",
        text: "Their visa or permit, employer and when they arrived. That decides if the family can apply.",
      },
      {
        title: "We send each list",
        text: "A document list for every family member, for that route.",
      },
      {
        title: "We match the files",
        text: "Names, dates and addresses checked across passports, certificates and payslips.",
      },
      {
        title: "We book and submit",
        text: "TB test, biometrics and appointments, for the whole family on one day where we can.",
      },
      {
        title: "Until it's back",
        text: "Tracked until every passport is back. Government, surcharge, centre and our fees listed separately.",
      },
    ],
  },
  why: {
    title: "Why the sponsor's file comes first",
    paragraphs: [
      "A dependant application is read side by side with the main visa holder's. If a name is spelt differently on the marriage certificate, or the Certificate of Sponsorship doesn't match the payslips, the family's file stalls, however strong the relationship.",
      "So we start with the sponsor's paperwork, then build every family member's file to match it. And before you pay any fee, we check that the route is open for your family. Some are not.",
    ],
  },
  closing: {
    title: "Tell us the sponsor's visa. We'll tell you if the family can apply.",
    text: "The main visa holder's visa type, their employer and who's joining them is enough to start.",
    primary: "Check eligibility",
  },
};

/* -------------------------------------------------------------------------- */
/*  UK settlement visa                                                         */
/* -------------------------------------------------------------------------- */

export const SETTLEMENT = {
  meta: {
    title: "UK Settlement Visa & ILR Assistance in Kerala",
    description:
      "UK spouse and partner visas from India, children joining a settled parent, and indefinite leave to remain (ILR). Income, English and relationship evidence checked before you pay the fee. Kottayam, Kerala.",
  },
  hero: {
    eyebrow: "Visa services",
    title: "UK settlement visa",
    lead: "UK settlement, formally Indefinite Leave to Remain (ILR), lets a person live, work and study in the UK permanently, with no time limit. From Kottayam, we give UK settlement visa assistance to families across Kerala, from the first partner visa in India to the ILR application.",
    primary: "Check my case",
  },
  assurances: [
    {
      icon: "FileText",
      title: "Evidence to the rules",
      text: "Payslips, statements and letters in the exact form and period the rules set.",
    },
    {
      icon: "HeartHandshake",
      title: "Relationship file in order",
      text: "Photographs, visits and messages arranged as a record over time.",
    },
    {
      icon: "Languages",
      title: "English and TB test booked",
      text: "Approved test centres and UK-approved clinics only.",
    },
    {
      icon: "ShieldCheck",
      title: "Honest about the file",
      text: "If the income or evidence falls short, we tell you before you apply.",
    },
  ],
  whatIs: {
    title: "What is UK settlement?",
    lead: "An immigration status, formally known as Indefinite Leave to Remain (ILR) or permanent settlement, that lets a person live, work and study in the United Kingdom permanently, without any time restrictions.",
    cards: [
      {
        icon: "House",
        title: "Live permanently",
        text: "No expiry date on your right to stay, as long as you don't spend long periods outside the UK.",
      },
      {
        icon: "Briefcase",
        title: "Work and study freely",
        text: "Any job, any employer, any course. No sponsor and no visa conditions.",
      },
      {
        icon: "Landmark",
        title: "The step before citizenship",
        text: "ILR is usually needed before you can apply to become a British citizen.",
      },
    ],
  },
  situations: {
    title: "What people come to us for",
    lead: "Settlement comes at the end of a qualifying period on another visa. These are the situations families arrive with.",
    items: [
      {
        tag: "Married",
        title: "Married to a British citizen",
        text: "A spouse visa from India: the first step on a five-year route to settlement.",
      },
      {
        tag: "Engaged",
        title: "Getting married in the UK",
        text: "A fiancé(e) visa gives six months to marry, then you switch to the partner route.",
      },
      {
        tag: "Five years",
        title: "Five years on a work visa",
        text: "Health and Care or Skilled Worker families applying for ILR together.",
      },
      {
        tag: "Children",
        title: "Children of a settled parent",
        text: "Children under 18 joining a parent who is British or has ILR.",
      },
      {
        tag: "Income",
        tone: "warn",
        title: "Income close to £29,000",
        text: "Salary, savings or both. We check the numbers before you pay the fee.",
      },
      {
        tag: "Extension",
        title: "Extending after 2.5 years",
        text: "The second partner visa, with the A2 English test.",
      },
    ],
    footnote:
      "From the first partner visa in India to indefinite leave to remain. One person on your file at every step.",
  },
  road: {
    title: "The road to settlement",
    lead: "Nobody applies for ILR from India on day one. These are the two routes we handle most.",
    routes: [
      {
        title: "Joining a British or settled partner",
        text: "Your husband, wife or partner is a British citizen or has ILR. You apply from India for a spouse or partner visa. It's granted for 2 years 9 months, extended once, and after five years in total you apply for ILR.",
        note: "Children under 18 apply alongside you.",
        stops: [
          { when: "From India", label: "Spouse or partner visa", detail: "2 years 9 months" },
          { when: "In the UK", label: "Extension", detail: "Extended once" },
          { when: "Year 5", label: "ILR", detail: "Settlement", goal: true },
        ],
      },
      {
        title: "After years on a work visa",
        text: "You or your spouse are in the UK on a Health and Care Worker or Skilled Worker visa, with the family as dependants. Under the current rules, the whole family can apply for ILR together after five years.",
        note: "ILR is applied for from inside the UK. We prepare and review the documents with you remotely.",
        stops: [
          { when: "Start", label: "Work visa", detail: "Family as dependants" },
          { when: "Years 1 to 5", label: "Qualifying period", detail: "In the UK" },
          { when: "Year 5", label: "ILR together", detail: "Whole family", goal: true },
        ],
      },
    ],
  },
  docs: {
    flag: "gb",
    title: "UK settlement visa documentation: what to bring us",
    lead: "For the spouse or partner visa, the file has two halves, the sponsor's in the UK and the applicant's in India, and both have to tell the same story.",
    groups: [
      {
        label: "From the sponsor in the UK",
        items: [
          {
            title: "Signed invitation letter to the Entry Clearance Officer",
            note: "About the applicant: full name, address, phone, your relationship, the purpose and length of stay, where they will live and who will support them. About the sponsor: full name, address, email, phone, job title, employer and immigration status",
          },
          {
            title: "Proof of accommodation",
            note: "Tenancy agreement, mortgage statement or utility bills",
          },
          {
            title: "Employment details",
            note: "Employer letter and employment contract. See what the letter must say below",
          },
          {
            title: "Passport copy",
            note: "Front page, back page and visa or status page",
          },
          { title: "Payslips for the last 6 months" },
          { title: "P60", note: "The end-of-year tax certificate" },
          {
            title: "Bank statements for the last 6 months",
            note: "Showing the same salary as the payslips",
          },
        ],
      },
      {
        label: "From the applicant in India",
        items: [
          { title: "Original passport, and old passports if any" },
          {
            title: "Photograph",
            note: "White background, up to the shoulders, face about 70% of the photo, with space around the face",
          },
          { title: "Covering letter" },
          { title: "Original marriage certificate" },
          { title: "Marriage photographs" },
          { title: "TB test certificate and police clearance certificate" },
          {
            title: "English: approved test OR degree taught in English",
            note: "IELTS for UKVI or another Home Office-approved test, or a degree certificate with English as the medium of instruction. See the English requirement below",
          },
          { title: "Original birth certificate", note: "If the applicant is a child" },
        ],
      },
    ],
    employerLetter: {
      label: "What the employer letter must confirm",
      items: [
        "On company headed paper, dated and signed",
        "That the sponsor works there, and their job title",
        "How long they have worked there",
        "Type of contract: permanent, fixed term and so on",
        "Salary before tax and National Insurance",
        "How long they have been paid that salary",
        "That the payslips provided are genuine",
      ],
    },
  },
  money: {
    title: "UK settlement visa requirements: money and English",
    lead: "The two places settlement files most often fall short.",
    financial: {
      title: "The financial requirement",
      stats: [
        { value: "£29,000", label: "Currently the minimum income a year before tax, with no extra amount for children" },
        { value: "£88,500", label: "Savings alone: about this much, held for the required period" },
      ],
      rows: [
        {
          label: "What counts",
          text: "Salary, self-employment income, pension, rent or dividends, and cash savings above £16,000",
        },
        {
          label: "Proof of salary",
          text: "6 months of payslips, matching bank statements, and an employer letter on headed paper. Salary normally needs to have been earned for at least 6 months",
        },
        {
          label: "Certain benefits",
          text: "Like Carer's Allowance or Disability Living Allowance, mean a different test applies: enough money to support the family without public funds",
        },
        {
          label: "If the income isn't met",
          text: "A longer 10-year route may still be possible. We'll tell you honestly which applies",
        },
      ],
    },
    english: {
      title: "The English requirement",
      ladder: [
        { level: "A1", when: "First visa", text: "An approved test at CEFR level A1 in speaking and listening, or a degree taught in English" },
        { level: "A2", when: "After 2.5 years", text: "A test when you extend" },
        { level: "Higher", when: "At ILR", text: "A higher level, plus the Life in the UK test" },
      ],
      rows: [
        {
          label: "No test needed",
          text: "Children, people over 65, people with a condition that prevents it, and nationals of majority English-speaking countries",
        },
        {
          label: "Degrees from India",
          text: "Need an Ecctis certificate (formerly UK NARIC) confirming the degree equals a UK bachelor's or higher and was taught in English. A UK degree needs only the certificate",
        },
      ],
    },
    note: "Couples first granted under the older £18,600 rule, before 11 April 2024, may still extend on that rule. We check which rule applies to you.",
  },
  ilr: {
    title: "Indefinite leave to remain",
    covers: {
      title: "What ILR support covers",
      items: [
        "A check of your qualifying period and time outside the UK, before you pay the fee",
        "Life in the UK test and English requirement, booked where needed",
        "Employer letters, payslips and sponsorship details for work-route families",
        "Relationship evidence for partner-route applicants",
        "A full review of the form and documents before submission",
      ],
    },
    before: {
      title: "Before you apply",
      items: [
        "A missing month of payslips can sink a strong case",
        "Bank statements must match payslips, figure for figure",
        "Use only an approved English test. Others aren't accepted",
        "Declare every past refusal and overstay, for both partners",
        "For ILR, count your days outside the UK before you apply",
      ],
    },
    changing: {
      title: "The settlement rules are changing",
      text: 'The UK Government has consulted on an "earned settlement" system that would extend the usual qualifying period from five years to ten, and has announced a higher English level for settlement from March 2027. As of September 2026 the ten-year rule is not in force. We check the rules on the day you apply.',
    },
  },
  process: {
    title: "What actually happens after you message us",
    lead: "You tell us where you are on the road to settlement. We do the rest.",
    steps: [
      {
        title: "You tell us your case",
        text: "Your partner's status, their income, when you married, and any past visas.",
      },
      {
        title: "We check the numbers",
        text: "Income, savings and English checked against the rules before any fee.",
      },
      {
        title: "We build both halves",
        text: "The sponsor's documents from the UK, yours from India, matched line by line.",
      },
      {
        title: "We book and submit",
        text: "English test, TB test and biometrics booked, and the application submitted.",
      },
      {
        title: "Until it's back",
        text: "Tracked until the decision. Government fee, surcharge and our fee listed separately.",
      },
    ],
  },
  why: {
    title: "Why settlement files take longer",
    paragraphs: [
      "A settlement application is judged on years of evidence, not weeks. The relationship, the income, the English and the accommodation each have to be proved, and they have to agree with each other.",
      "We prepare these files slowly and carefully, because a refusal here costs far more than a lost holiday. If an application is refused, many family refusals carry a right of appeal with strict deadlines. For an appeal, we refer you to a regulated immigration adviser straight away.",
    ],
  },
  closing: {
    title: "Tell us about your partner's status. We'll tell you if the file is ready.",
    text: "Your partner's status in the UK, their income and when you married is enough to start.",
    primary: "Check my case",
  },
};
