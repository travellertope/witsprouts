// Placeholder content matching the shape future WordPress queries will return.
// Swap these arrays for WPGraphQL/REST fetches once the CMS is connected.

export type Person = {
  initials: string;
  tag: string;
  name: string;
  role: string;
  photoUrl?: string;
};

export const storytellers: Person[] = [
  { initials: "RA", tag: "2025 Prize Winner", name: "Rachel Ajisafe", role: "Storyteller" },
  { initials: "DA", tag: "2025 Finalist", name: "Debbie Ajom", role: "Storyteller" },
  { initials: "KR", tag: "2025 Finalist", name: "Keesh Rowland", role: "Storyteller" },
  { initials: "JI", tag: "2025 Judge", name: "Jude Idada", role: "Writer & Filmmaker" },
];

export type Moment = {
  title: string;
  meta: string;
  thumbnail: string;
};

export const moments: Moment[] = [
  {
    title: "Rachel Ajisafe's Winning Performance — “Haunting Song of Promises”",
    meta: "2025 Prize · Oct 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=500&q=80&auto=format&fit=crop",
  },
  {
    title: "Hill-Top Creative Arts Foundation Joins The 2025 Storytelling Prize",
    meta: "2025 Prize · May 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=500&q=80&auto=format&fit=crop",
  },
  {
    title: "Inside The 2025 Prize: Three Finalists, Two Rounds, One Winner",
    meta: "2025 Prize · Oct 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&q=80&auto=format&fit=crop",
  },
  {
    title: "Nominations Open For The 2026 Storytelling Prize",
    meta: "2026 Prize · Aug 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=500&q=80&auto=format&fit=crop",
  },
];

export type NewsItem = {
  title: string;
  date: string;
  thumbnail: string;
  href: string;
};

export const news: NewsItem[] = [
  {
    title: "Witsprouts Opens Nominations For The 2nd Edition Of The Storytelling Prize",
    date: "Aug 3, 2026",
    thumbnail:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Rachel Ajisafe Wins ₦500,000 Inaugural Witsprouts Storytelling Prize",
    date: "Oct 9, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Witsprouts Launches Storytelling Prize To Revive Oral Narratives Across Generations",
    date: "May 9, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400&q=80&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "The Witsprouts Project Calls For Submissions To Inaugural Storytelling Prize",
    date: "Mar 22, 2025",
    thumbnail:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=400&q=80&auto=format&fit=crop",
    href: "#",
  },
];

export type Partner = {
  name: string;
  tag: string;
};

export const partners: Partner[] = [
  { name: "Hill-Top Creative Arts Foundation", tag: "2025 Storytelling Prize Partner" },
  { name: "Orange Poetry", tag: "2025 Storytelling Prize Partner" },
  { name: "The Moveee", tag: "2025 Storytelling Prize Partner" },
];

export const servePillars = {
  engage: [
    "Community Arts Events & Exhibitions",
    "The Witsprouts Annual Arts Festival",
    "Media Campaigns For African Arts & Heritage",
    "Digital Culture Platforms",
  ],
  develop: [
    "Creative Workshops & Masterclasses",
    "The Witsprouts Mentorship Programme",
    "The Witsprouts Creative Residency",
    "Publishing & Media Initiative",
  ],
  include: [
    "Cross-Community Storytelling Initiatives",
    "Safe Spaces For Dialogue & Healing",
    "Bursary & Scholarship Fund",
    "Amplifying Marginalised Voices",
  ],
  sustain: [
    "Creative Enterprise & Livelihoods Programme",
    "Grants & Sponsorship Partnerships",
    "Business & Financial Literacy Training",
    "Strategic Alliances & Institutional Partners",
  ],
} satisfies Record<string, string[]>;
