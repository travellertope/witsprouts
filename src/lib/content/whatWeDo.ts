// Placeholder content for the What We Do page.
// Swap for a WordPress query once the CMS is connected.

export type Pillar = {
  id: string;
  tabLabel: string;
  num: string;
  title: string;
  goal: string;
  activities: string[];
};

export const pillars: Pillar[] = [
  {
    id: "p1",
    tabLabel: "01 · Engage",
    num: "01",
    title: "Arts & Culture Engagement",
    goal: "Increase broad participation in arts and cultural activities across communities.",
    activities: [
      "Organise community art events, storytelling sessions, and exhibitions",
      "Launch media campaigns that promote African arts, heritage, and contemporary culture",
      "Create digital platforms for wider, democratised access to cultural content",
      "Develop the Witsprouts Annual Arts Festival as a flagship visibility event",
    ],
  },
  {
    id: "p2",
    tabLabel: "02 · Develop",
    num: "02",
    title: "Creative Expression & Talent Development",
    goal: "Provide platforms, resources, and structured support for creatives to grow and showcase their work.",
    activities: [
      "Host workshops, masterclasses, and structured training programmes",
      "Provide publishing, performance, and exhibition opportunities",
      "Run mentorship programmes pairing emerging creatives with established practitioners",
      "Develop the Witsprouts Creative Residency for intensive talent development",
    ],
  },
  {
    id: "p3",
    tabLabel: "03 · Include",
    num: "03",
    title: "Community Cohesion & Inclusion",
    goal: "Use arts to strengthen social bonds, promote inclusion, and celebrate diversity.",
    activities: [
      "Organise inclusive, community-based collaborative art projects",
      "Facilitate cross-community storytelling initiatives that bridge social divides",
      "Create safe spaces for dialogue and healing through the arts",
      "Partner with community leaders to embed arts in local development conversations",
    ],
  },
  {
    id: "p4",
    tabLabel: "04 · Amplify",
    num: "04",
    title: "Amplifying Marginalised Voices",
    goal: "Ensure underrepresented communities are seen, heard, and valued.",
    activities: [
      "Develop storytelling and documentary projects centred on marginalised communities",
      "Publish and promote works from underrepresented creatives",
      "Partner with grassroots organisations for community-led content creation",
      "Build a dedicated bursary/scholarship fund for creatives from low-income backgrounds",
    ],
  },
  {
    id: "p5",
    tabLabel: "05 · Sustain",
    num: "05",
    title: "Sustainable Creative Enterprise",
    goal: "Build financially viable, scalable creative initiatives and strengthen impact through strategic alliances.",
    activities: [
      "Develop revenue-generating projects across publishing, events, and media",
      "Actively pursue grants, sponsorships, and diversified funding partnerships",
      "Equip creatives to monetise their work through business and financial literacy training",
      "Partner with cultural institutions, NGOs, government bodies, and creative platforms",
    ],
  },
];

export type Programme = {
  num: string;
  title: string;
  description: string;
};

export const programmes: Programme[] = [
  {
    num: "01",
    title: "Witsprouts Storytelling Prize",
    description:
      "An annual prize celebrating outstanding storytelling through oral traditions, open to creatives across Nigeria and, from the 2nd edition, the wider diaspora.",
  },
  {
    num: "02",
    title: "Community Arts Events & Exhibitions",
    description:
      "Regular community-facing events — art exhibitions, cultural showcases, and open-mic storytelling sessions — bringing arts into everyday public life.",
  },
  {
    num: "03",
    title: "Creative Workshops & Masterclasses",
    description:
      "Structured skills-building sessions covering writing, visual arts, digital media, performance, and arts entrepreneurship — in-person and online.",
  },
  {
    num: "04",
    title: "Witsprouts Mentorship Programme",
    description:
      "A structured mentorship initiative connecting emerging creatives with experienced practitioners across literature, film, music, visual arts, and cultural management.",
  },
  {
    num: "05",
    title: "Publishing & Media Initiative",
    description:
      "A platform for amplifying underrepresented voices through published anthologies, digital content series, and multimedia storytelling projects.",
  },
  {
    num: "06",
    title: "Witsprouts Creative Residency",
    description:
      "An intensive residency offering selected creatives dedicated time, space, resources, and mentorship to develop a significant creative project.",
  },
  {
    num: "07",
    title: "Arts & Culture Advocacy Campaign",
    description:
      "A sustained media and public advocacy campaign championing the value of arts and culture in education, community development, and economic growth.",
  },
  {
    num: "08",
    title: "Creative Enterprise & Livelihoods Programme",
    description:
      "A practical programme equipping creatives with business skills, financial literacy, and income diversification strategies for sustainable careers.",
  },
];
