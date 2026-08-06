import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { UtilityStrip, Breadcrumb } from "@/components/layout/UtilityStrip";
import { Footer } from "@/components/layout/Footer";
import { FinalCta } from "@/components/ui/FinalCta";
import { Hero } from "@/components/prize-hub/Hero";
import { About } from "@/components/prize-hub/About";
import { CurrentEdition } from "@/components/prize-hub/CurrentEdition";
import { Archive } from "@/components/prize-hub/Archive";
import { nominationFormUrl } from "@/lib/content/prize";

export const metadata: Metadata = {
  title: "The Witsprouts Storytelling Prize",
};

export default function PrizeHub() {
  return (
    <>
      <UtilityStrip
        size="prize"
        left={
          <Breadcrumb
            items={[{ label: "The Witsprouts Project", href: "/" }, { label: "Storytelling Prize" }]}
          />
        }
        right={<div>PRIZE@WITSPROUTS.ORG</div>}
      />

      <Nav
        size="prize"
        links={[
          { label: "About the Prize", href: "#about" },
          { label: "Current Edition", href: "#current" },
          { label: "Past Editions", href: "#archive" },
          { label: "Get Involved", href: "/get-involved" },
        ]}
        ctaLabel="Nominate a Storyteller"
        ctaHref="/prize/2026"
      />

      <main className="flex-1">
        <Hero />
        <About />
        <CurrentEdition />
        <Archive />
        <FinalCta
          size="prize"
          eyebrow="Nominations Are Open"
          title="Know A Storyteller Worth Celebrating?"
          description="The current edition is open for nominations now — no theme, every form of storytelling welcome."
          primaryLabel="Nominate Now →"
          primaryHref={nominationFormUrl}
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
            title: "The Prize",
            links: [
              { label: "About", href: "#about" },
              { label: "Current Edition", href: "#current" },
              { label: "Past Editions", href: "#archive" },
            ],
          },
          {
            title: "Editions",
            links: [
              { label: "2026 — Current", href: "/prize/2026" },
              { label: "2025 — Archive", href: "/prize/2025" },
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
        bottomRight={<p className="text-xs text-white/45">witsprouts.org/prize</p>}
      />
    </>
  );
}
