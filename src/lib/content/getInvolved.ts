// Placeholder content for the Get Involved page.
// Swap for a WordPress query once the CMS is connected.

export type OpportunityTag = "open" | "ongoing" | "upcoming";

export type Opportunity = {
  name: string;
  tag: OpportunityTag;
};

export type Pathway = {
  id: string;
  tabLabel: string;
  who: string;
  title: string;
  description: string;
  opportunities: Opportunity[];
  captureFields: string[];
};

export const pathways: Pathway[] = [
  {
    id: "creative",
    tabLabel: "Creative / Artist",
    who: "Writers, visual artists, filmmakers, musicians, and performers.",
    title: "Creative / Artist",
    description:
      "If you're an emerging creative, Witsprouts is built for you — platforms, training, and community, especially if formal access has been out of reach.",
    opportunities: [
      { name: "Storytelling Prize", tag: "open" },
      { name: "Workshop / Masterclass Cohort", tag: "ongoing" },
      { name: "Creative Residency", tag: "upcoming" },
    ],
    captureFields: ["Discipline", "Programme interest"],
  },
  {
    id: "mentor",
    tabLabel: "Mentor / Practitioner",
    who: "Established professionals across literature, film, music, visual arts, and cultural management.",
    title: "Mentor / Practitioner",
    description:
      "Share your craft and experience with the next generation. The Mentorship Programme pairs you directly with an emerging creative in your field.",
    opportunities: [
      { name: "Mentorship Programme", tag: "open" },
      { name: "Guest Masterclass Facilitation", tag: "ongoing" },
    ],
    captureFields: ["Field", "Years of practice", "Portfolio / CV link"],
  },
  {
    id: "org",
    tabLabel: "Organisation / Funder",
    who: "Corporates, foundations, NGOs, and development institutions.",
    title: "Organisation / Funder",
    description:
      "Invest in African arts and culture through sponsorship, grant funding, or co-branded programming aligned to the SDGs.",
    opportunities: [
      { name: "Corporate CSR Partnerships", tag: "open" },
      { name: "Grant & Philanthropic Partnerships", tag: "ongoing" },
      { name: "Co-Programming With NGOs", tag: "ongoing" },
    ],
    captureFields: ["Organisation type", "Partnership interest", "Message"],
  },
  {
    id: "media",
    tabLabel: "Media Partner",
    who: "Publishers, broadcasters, literary journals, and digital platforms.",
    title: "Media Partner",
    description:
      "Help amplify underrepresented African voices — partner with us on the Publishing & Media Initiative or our advocacy campaigns.",
    opportunities: [
      { name: "Publishing & Media Initiative", tag: "ongoing" },
      { name: "Advocacy Campaign Amplification", tag: "ongoing" },
    ],
    captureFields: ["Media type", "Platform name"],
  },
  {
    id: "volunteer",
    tabLabel: "Volunteer",
    who: "General public, students, and local supporters.",
    title: "Volunteer",
    description:
      "Lend your time at community events, the Annual Arts Festival, and day-to-day programme delivery.",
    opportunities: [
      { name: "Event Volunteering", tag: "ongoing" },
      { name: "Annual Arts Festival Volunteering", tag: "upcoming" },
    ],
    captureFields: ["Location", "Area of interest", "Availability"],
  },
  {
    id: "diaspora",
    tabLabel: "Diaspora",
    who: "Africans abroad who want to invest in home.",
    title: "Diaspora",
    description:
      "Support from the diaspora — financial, network, or advocacy — helps Witsprouts reach further, faster.",
    opportunities: [
      { name: "Diaspora Giving Circle", tag: "open" },
      { name: "International Advocacy & Network Intros", tag: "ongoing" },
    ],
    captureFields: ["Country", "Mode of contribution"],
  },
];
