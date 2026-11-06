import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FinalCta } from "@/components/ui/FinalCta";
import { LonglistHero } from "@/components/prize-2026/LonglistHero";
import { NomineeGrid } from "@/components/prize-2026/NomineeGrid";

export const metadata: Metadata = {
  title: "The 2026 Longlist — Witsprouts Storytelling Prize",
  description:
    "Nine storytellers from across Nigeria and the diaspora, nominated for the 2nd edition of the Witsprouts Storytelling Prize.",
};

export default function Longlist2026() {
  return (
    <>
      <Nav
        size="prize"
        links={[
          { label: "About", href: "/prize/2026#about" },
          { label: "Key Dates", href: "/prize/2026#dates" },
          { label: "2025 Winner", href: "/prize/2026#spotlight" },
          { label: "FAQ", href: "/prize/2026#faq" },
        ]}
        ctaLabel="2026 Edition →"
        ctaHref="/prize/2026"
      />

      <main className="flex-1">
        <LonglistHero />
        <NomineeGrid />
        <FinalCta
          size="prize"
          topBorder
          title="The Shortlist Is Coming"
          description="The Witsprouts Project team is reviewing all nominations. The shortlist will be announced in due course."
          primaryLabel="Back to the 2026 Edition →"
          primaryHref="/prize/2026"
          secondaryLabel="Questions? Email Us"
          secondaryHref="mailto:prize@witsprouts.org"
        />
      </main>

      <Footer
        size="prize"
        topDivider
        bottomDivider={false}
        tagline="An initiative of The Witsprouts Project. To foster a deeper engagement in African arts and culture."
        columns={[
          {
            title: "2026 Prize",
            links: [
              { label: "About", href: "/prize/2026#about" },
              { label: "Key Dates", href: "/prize/2026#dates" },
              { label: "2026 Longlist", href: "/prize/2026/longlist" },
              { label: "FAQ", href: "/prize/2026#faq" },
            ],
          },
          {
            title: "Archive",
            links: [
              { label: "Storytelling Prize Hub", href: "/prize" },
              { label: "2025 Edition", href: "/prize/2025" },
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
        bottomRight={<p className="text-xs text-white/45">witsprouts.org/prize/2026/longlist</p>}
      />
    </>
  );
}
