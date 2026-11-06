import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PartnersRow } from "@/components/ui/PartnersRow";
import { StatStrip } from "@/components/ui/StatStrip";
import { Hero } from "@/components/prize/Hero";
import { About } from "@/components/prize/About";
import { KeyDates } from "@/components/prize/KeyDates";
import { Spotlight } from "@/components/prize/Spotlight";
import { Faq } from "@/components/prize/Faq";
import { FinalCta } from "@/components/ui/FinalCta";
import { prize2026 } from "@/lib/content/prize";

const partners2025 = [
  { name: "Hill-Top Creative Arts Foundation", tag: "2025 Edition Partner", logo: "/images/partners/hcaf-logo.png" },
  { name: "Orange Poetry", tag: "2025 Edition Partner", logo: "/images/partners/orange-poetry-logo.webp" },
  { name: "The Moveee", tag: "2025 Edition Partner", logo: "/images/partners/moveee-logo.png" },
];

export const metadata: Metadata = {
  title: "The Witsprouts Storytelling Prize — 2nd Edition · Nominations Closed",
};

export default function Prize2026() {
  return (
    <>
      <Nav
        size="prize"
        links={[
          { label: "About", href: "#about" },
          { label: "Key Dates", href: "#dates" },
          { label: "Longlist", href: "/prize/2026/longlist" },
          { label: "2025 Winner", href: "#spotlight" },
          { label: "FAQ", href: "#faq" },
        ]}
        ctaLabel="Questions? Email Us"
        ctaHref="mailto:prize@witsprouts.org"
      />

      <main className="flex-1">
        <Hero />
        <StatStrip
          size="prize"
          stats={[
            { num: prize2026.purse, label: "Prize Purse" },
            { num: prize2026.opensLabel, label: "Nominations Opened" },
            { num: prize2026.closesLabel, label: "Nominations Closed" },
          ]}
        />
        <section className="bg-teal text-paper py-[72px]" id="longlist">
          <div className="max-w-[1160px] mx-auto px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-[11px] tracking-[0.08em] uppercase font-bold text-ochre mb-2">
                Now Live
              </div>
              <h2 className="text-[clamp(22px,2.8vw,30px)] font-bold leading-snug">
                The 2026 Longlist Is Announced
              </h2>
              <p className="mt-2 text-[14.5px] text-white/65 max-w-[480px]">
                Nine storytellers from across Nigeria and the diaspora, nominated for this edition of the prize.
              </p>
            </div>
            <a
              href="/prize/2026/longlist"
              className="flex-none inline-flex items-center gap-2 px-6 py-3 bg-ochre text-white text-[13.5px] font-bold tracking-[0.02em] hover:bg-ochre/90 transition-colors"
            >
              View the Longlist →
            </a>
          </div>
        </section>

        <About />
        <KeyDates />

        <section className="bg-mist py-[88px]">
          <PartnersRow
            partners={partners2025}
            note="The inaugural edition was delivered together with three partnering organisations. These aren't standing sponsors — they're collaborators who partnered on that specific edition."
            narrow
            align="center"
          />
        </section>
        <Spotlight />
        <Faq />
        <FinalCta
          size="prize"
          title="Nominations Have Closed"
          description="Thank you to everyone who submitted a nomination. Nine storytellers have been longlisted — the shortlist follows in due course."
          primaryLabel="View the Longlist →"
          primaryHref="/prize/2026/longlist"
          secondaryLabel="Questions? Email Us"
          secondaryHref="mailto:prize@witsprouts.org"
        />
      </main>

      <Footer
        size="prize"
        tagline="An initiative of The Witsprouts Project. To foster a deeper engagement in African arts and culture."
        columns={[
          {
            title: "The Prize",
            links: [
              { label: "About", href: "#about" },
              { label: "Key Dates", href: "#dates" },
              { label: "2026 Longlist", href: "/prize/2026/longlist" },
              { label: "FAQ", href: "#faq" },
            ],
          },
          {
            title: "Archive",
            links: [
              { label: "Storytelling Prize Hub", href: "/prize" },
              { label: "2025 Edition Hub", href: "/prize/2025" },
              { label: "2025 Judges", href: "/prize/2025#judges" },
              { label: "2025 Winner", href: "/prize/2025#winner" },
            ],
          },
          {
            title: "Contact",
            links: [
              { label: "prize@witsprouts.org", href: "mailto:prize@witsprouts.org" },
              { label: "witsprouts.org", href: "/" },
            ],
          },
        ]}
        bottomLeft="© 2026 The Witsprouts Project. All rights reserved."
        bottomRight={<p className="text-xs text-white/45">witsprouts.org/prize/2026</p>}
      />
    </>
  );
}
