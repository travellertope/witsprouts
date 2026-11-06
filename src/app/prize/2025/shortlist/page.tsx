import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHead } from "@/components/ui/SectionHead";
import { Container } from "@/components/ui/Container";
import { FinalCta } from "@/components/ui/FinalCta";
import { ArchivedBanner } from "@/components/prize-2025/ArchivedBanner";
import { ShortlistGrid } from "@/components/prize-2025/ShortlistGrid";

export const metadata: Metadata = {
  title: "2025 Shortlist — The Witsprouts Storytelling Prize",
  description:
    "Three finalists shortlisted for the inaugural Witsprouts Storytelling Prize 2025, including the winner Rachel Ajisafe.",
};

export default function Shortlist2025() {
  return (
    <>
      <ArchivedBanner />

      <Nav
        size="prize"
        links={[
          { label: "The Theme", href: "/prize/2025#theme" },
          { label: "Judges", href: "/prize/2025#judges" },
          { label: "Shortlist", href: "/prize/2025/shortlist" },
          { label: "The Winner", href: "/prize/2025#winner" },
        ]}
        ctaLabel="Current Edition →"
        ctaHref="/prize/2026"
      />

      <main className="flex-1">
        <section className="bg-teal text-paper py-[80px]">
          <Container size="prize">
            <div className="text-[11px] tracking-[0.08em] uppercase font-bold text-ochre mb-4">
              2025 Inaugural Edition · Archive
            </div>
            <h1 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight max-w-[640px]">
              The 2025 Shortlist
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-white/65 max-w-[560px]">
              Three storytellers were shortlisted for the inaugural Witsprouts
              Storytelling Prize. The winner was selected by a panel of two
              independent judges.
            </p>
          </Container>
        </section>

        <ShortlistGrid />

        <FinalCta
          size="prize"
          topBorder
          title="See the Full 2025 Archive"
          description="Revisit the inaugural edition — the theme, how it worked, the judges, and more."
          primaryLabel="2025 Edition Archive →"
          primaryHref="/prize/2025"
          secondaryLabel="Current Edition (2026) →"
          secondaryHref="/prize/2026"
        />
      </main>

      <Footer
        size="prize"
        topDivider
        bottomDivider={false}
        tagline="An initiative of The Witsprouts Project. To foster a deeper engagement in African arts and culture."
        columns={[
          {
            title: "2025 Archive",
            links: [
              { label: "2025 Edition Hub", href: "/prize/2025" },
              { label: "2025 Shortlist", href: "/prize/2025/shortlist" },
              { label: "The Theme", href: "/prize/2025#theme" },
              { label: "Judges", href: "/prize/2025#judges" },
              { label: "The Winner", href: "/prize/2025#winner" },
            ],
          },
          {
            title: "Prize",
            links: [
              { label: "Storytelling Prize Hub", href: "/prize" },
              { label: "Current Edition (2026)", href: "/prize/2026" },
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
        bottomRight={<p className="text-xs text-white/45">witsprouts.org/prize/2025/shortlist</p>}
      />
    </>
  );
}
