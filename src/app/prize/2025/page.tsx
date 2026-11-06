import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { UtilityStrip, Breadcrumb } from "@/components/layout/UtilityStrip";
import { Footer } from "@/components/layout/Footer";
import { StatStrip } from "@/components/ui/StatStrip";
import { FinalCta } from "@/components/ui/FinalCta";
import { ArchivedBanner } from "@/components/prize-2025/ArchivedBanner";
import { Hero } from "@/components/prize-2025/Hero";
import { Theme } from "@/components/prize-2025/Theme";
import { Judges } from "@/components/prize-2025/Judges";
import { Partners } from "@/components/prize-2025/Partners";
import { WinnerSpotlight } from "@/components/prize-2025/WinnerSpotlight";
import { stats } from "@/lib/content/prize2025";

export const metadata: Metadata = {
  title: "2025 Archive — The Witsprouts Storytelling Prize",
};

export default function Prize2025() {
  return (
    <>
      <ArchivedBanner />

      <UtilityStrip
        size="prize"
        left={
          <Breadcrumb
            items={[
              { label: "The Witsprouts Project", href: "/" },
              { label: "Storytelling Prize", href: "/prize" },
              { label: "2025 Archive" },
            ]}
          />
        }
        right={<div>PRIZE@WITSPROUTS.ORG</div>}
      />

      <Nav
        size="prize"
        links={[
          { label: "The Theme", href: "#theme" },
          { label: "Judges", href: "#judges" },
          { label: "Shortlist", href: "/prize/2025/shortlist" },
          { label: "The Winner", href: "#winner" },
        ]}
        ctaLabel="Current Edition →"
        ctaHref="/prize/2026"
      />

      <main className="flex-1">
        <Hero />
        <StatStrip size="prize" cols={4} stats={stats} />
        <Theme />
        <Judges />
        <Partners />
        <WinnerSpotlight />
        <FinalCta
          size="prize"
          topBorder
          title="See What's Happening In The Current Edition"
          description="Nominations for the 2nd edition are open now — no theme, wider scope, open to all forms of storytelling."
          primaryLabel="Go to the 2026 Prize →"
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
            title: "This Archive",
            links: [
              { label: "The Theme", href: "#theme" },
              { label: "Judges", href: "#judges" },
              { label: "2025 Shortlist", href: "/prize/2025/shortlist" },
              { label: "The Winner", href: "#winner" },
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
        bottomRight={<p className="text-xs text-white/45">witsprouts.org/prize/2025</p>}
      />
    </>
  );
}
