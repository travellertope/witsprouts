// Placeholder content for the 2026 Storytelling Prize page.
// Swap for a WordPress "Prize Edition" query once the CMS is connected.

// The nomination form itself lives on Google Forms. This short URL is set
// up to redirect there (see next.config.ts) so it stays memorable/brandable
// and can be repointed without touching every CTA on the site.
export const nominationFormUrl = "https://www.witsprouts.org/2026prize";

export const nominationsOpen = false;

export const prize2026 = {
  edition: "2nd Edition",
  purse: "₦500,000",
  opensLabel: "Aug 10",
  closesLabel: "Sep 30",
  opensDate: "August 10, 2026",
  closesDate: "September 30, 2026",
};

export type TimelineItem = {
  tag: string;
  title: string;
  date: string;
  active?: boolean;
  href?: string;
};

export const timeline: TimelineItem[] = [
  { tag: "Closed", title: "Nominations Open", date: "August 10, 2026" },
  { tag: "Closed", title: "Nominations Close", date: "September 30, 2026" },
  { tag: "Live Now", title: "Longlist Announced", date: "November 6, 2026", active: true, href: "/prize/2026/longlist" },
  { tag: "Upcoming", title: "Shortlist Announced", date: "November 27, 2026" },
  { tag: "Upcoming", title: "Winner Announced", date: "December 14, 2026" },
];

export const steps = [
  {
    title: "Think of a storyteller",
    body: "Someone doing exceptional work in any oral or multimedia form — or put yourself forward.",
  },
  {
    title: "Fill out the nomination form",
    body: "Head to witsprouts.org/2026prize — it takes you straight to the nomination form.",
  },
  {
    title: "Submit before the deadline",
    body: "Nominations are open from August 10 to September 30, 2026.",
  },
  {
    title: "We review and follow up",
    body: "The Witsprouts Project reviews all nominations and reaches out to shortlisted storytellers directly.",
  },
];

export const faqs = [
  {
    q: "How is the winner chosen?",
    a: "Nominations are reviewed in-house by The Witsprouts Project team, who narrow the pool to a shortlist. The judging panel then makes the final call.",
  },
  {
    q: "What does the winner receive?",
    a: "A cash prize of ₦500,000.",
  },
  {
    q: "Who do I contact with questions?",
    a: "Email prize@witsprouts.org",
  },
];

export const judges2025 = [
  { name: "Jude Idada", role: "Writer, filmmaker · NLNG Nigeria Prize for Literature winner" },
  { name: "Akanbi Taofeek", role: "Playwright & stage director" },
];
