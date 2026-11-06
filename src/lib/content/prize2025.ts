// Static content for the 2025 Storytelling Prize archive (/prize/2025).
// This edition has concluded, so — unlike the current edition — this data
// won't need a WordPress query; it's frozen exactly as it happened.

export const stats = [
  { num: "₦500,000", label: "Prize Purse" },
  { num: "3", label: "Finalists" },
  { num: "2", label: "Judges" },
  { num: "Nigeria", label: "Eligibility" },
];

export const steps = [
  "Entrants recorded a 5–10 minute video narrating an original story built around the theme, brought to life with voice modulation, facial expression, gesture, choreography, and music.",
  "Videos were posted to entrants' own Instagram profiles, tagging @witsproutsorg and @witsprouts, using the hashtag #WitsproutsStorytellingPrize, and following both accounts.",
  "Round one was a public call for video submissions, open to all eligible entrants.",
  "Round two narrowed the field to a shortlist of finalists, who submitted a second story privately for final judging by the panel.",
];

export const judges = [
  {
    name: "Jude Idada",
    role: "Award-winning writer and filmmaker, and winner of the NLNG-sponsored Nigeria Prize for Literature — one of the continent's most prestigious literary honours.",
    photo: "/images/people/jude-idada.jpg",
  },
  {
    name: "Akanbi Taofeek",
    role: "Acclaimed playwright and stage director, known for deeply immersive theatrical works that bring text and performance into close conversation.",
    photo: "/images/people/akanbi-taofeek.jpg",
  },
];

export const partners = [
  { name: "Hill-Top Creative Arts Foundation", tag: "2025 Edition Partner" },
  { name: "Orange Poetry", tag: "2025 Edition Partner" },
  { name: "The Moveee", tag: "2025 Edition Partner" },
];

export const partnerQuote = {
  quote:
    "Not only is the Witsprouts Storytelling Prize a competition, it's a cultural intervention. In an age where oral cultures are disintegrating at pace under the weight of digital modernity, HCAF is proud to be a part of reaffirming the authority of voice, memory, and body to gather people together across time and space.",
  cite: "Ibraheem Uthman, Administrative Secretary, HCAF",
};

export const finalists = [
  { name: "Rachel Ajisafe", winner: true },
  { name: "Debbie Ajom", winner: false },
  { name: "Keesh Rowland", winner: false },
];

export type Shortlister = {
  name: string;
  role: string;
  photo: string;
  winner: boolean;
  performance?: string;
  bio: string;
};

export const shortlist2025: Shortlister[] = [
  {
    name: "Debbie Ajom",
    role: "Storyteller",
    photo: "/images/people/debbie-ajom.jpg",
    winner: false,
    bio: "Debbie Ajom was shortlisted for the inaugural Witsprouts Storytelling Prize 2025, recognised for her compelling oral storytelling voice and her ability to draw audiences into vivid, emotionally resonant narratives.",
  },
  {
    name: "Keesh Rowland",
    role: "Storyteller",
    photo: "/images/people/keesh-rowland.jpg",
    winner: false,
    bio: "Keesh Rowland was shortlisted for the inaugural Witsprouts Storytelling Prize 2025, standing out for the depth and craft he brings to oral and multimedia storytelling.",
  },
  {
    name: "Rachel Ajisafe",
    role: "Storyteller",
    photo: "/images/people/rachel-ajisafe.jpg",
    winner: true,
    performance: "Haunting Song of Promises",
    bio: "Rachel Ajisafe won the inaugural Witsprouts Storytelling Prize 2025 for her oral performance rooted in the cultural heritage of Sango, delivered with energy, passion, and poetic flair. She received ₦500,000 as the inaugural prize winner.",
  },
];

export const winnerQuotes = [
  {
    quote:
      "A natural storyteller with a poetic flair — she moved beyond mere recitation to create a performance that truly embodied the spirit of African storytelling.",
    cite: "Jude Idada & Akanbi Taofeek, Judges",
  },
  {
    quote:
      "Rachel Ajisafe's victory is a testament to the enduring power and relevance of African oral storytelling in the modern age. She embodies our mission to connect the wisdom of our ancestors with the creativity of the next generation.",
    cite: "Tope Akintayo, Director, The Witsprouts Project",
  },
];
