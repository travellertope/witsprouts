import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FinalCta } from "@/components/ui/FinalCta";
import { Hero } from "@/components/prize-hub/Hero";
import { About } from "@/components/prize-hub/About";
import { CurrentEdition } from "@/components/prize-hub/CurrentEdition";
import { Archive } from "@/components/prize-hub/Archive";

export const metadata: Metadata = {
  title: "The Witsprouts Storytelling Prize",
};

export default function PrizeHub() {
  return (
    <>
      <Nav
        size="prize"
        links={[
          { label: "About", href: "/about" },
          { label: "What We Do", href: "/what-we-do" },
          { label: "Storytelling Prize", href: "/prize", current: true },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Contact", href: "/contact" },
        ]}
        ctaLabel="View the 2026 Edition"
        ctaHref="/prize/2026"
      />

      <main className="flex-1">
        <Hero />
        <About />
        <CurrentEdition />
        <Archive />
        <FinalCta
          size="prize"
          title="Nominations Have Closed"
          description="Thank you to everyone who submitted a nomination for the 2026 edition. The shortlist will be announced in due course."
          primaryLabel="View the 2026 Edition →"
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
