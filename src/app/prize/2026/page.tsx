import type { Metadata } from "next";
import { BrandBar } from "@/components/ui/BrandBar";
import { Nav } from "@/components/layout/Nav";
import { UtilityStrip, Breadcrumb } from "@/components/layout/UtilityStrip";
import { Footer } from "@/components/layout/Footer";
import { PartnersRow } from "@/components/ui/PartnersRow";
import { Hero } from "@/components/prize/Hero";
import { About } from "@/components/prize/About";
import { WhatsNew } from "@/components/prize/WhatsNew";
import { Eligibility } from "@/components/prize/Eligibility";
import { HowToNominate } from "@/components/prize/HowToNominate";
import { NominationForm } from "@/components/prize/NominationForm";
import { KeyDates } from "@/components/prize/KeyDates";
import { Judges } from "@/components/prize/Judges";
import { Spotlight } from "@/components/prize/Spotlight";
import { Faq } from "@/components/prize/Faq";
import { FinalCta } from "@/components/prize/FinalCta";

const partners2025 = [
  { name: "Hill-Top Creative Arts Foundation", tag: "2025 Edition Partner" },
  { name: "Orange Poetry", tag: "2025 Edition Partner" },
  { name: "The Moveee", tag: "2025 Edition Partner" },
];

export const metadata: Metadata = {
  title: "The Witsprouts Storytelling Prize — 2nd Edition · Nominations Open",
};

export default function Prize2026() {
  return (
    <>
      <BrandBar />

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
          { label: "About", href: "#about" },
          { label: "What's New", href: "#whats-new" },
          { label: "How to Nominate", href: "#nominate" },
          { label: "Key Dates", href: "#dates" },
          { label: "2025 Winner", href: "#spotlight" },
          { label: "FAQ", href: "#faq" },
        ]}
        ctaLabel="Nominate a Storyteller"
        ctaHref="#nominate-form"
      />

      <main className="flex-1">
        <Hero />
        <About />
        <WhatsNew />
        <Eligibility />
        <HowToNominate />
        <NominationForm />
        <KeyDates />
        <section className="bg-mist py-24">
          <PartnersRow
            partners={partners2025}
            note="The inaugural edition was delivered together with three partnering organisations. These aren't standing sponsors — they're collaborators who partnered on that specific edition."
            narrow
          />
        </section>
        <Judges />
        <Spotlight />
        <Faq />
        <FinalCta />
      </main>

      <Footer
        size="prize"
        tagline="An initiative of The Witsprouts Project. To foster a deeper engagement in African arts and culture."
        columns={[
          {
            title: "The Prize",
            links: [
              { label: "About", href: "#about" },
              { label: "How to Nominate", href: "#nominate" },
              { label: "Key Dates", href: "#dates" },
              { label: "FAQ", href: "#faq" },
            ],
          },
          {
            title: "Archive",
            links: [
              { label: "2025 Edition Hub", href: "/prize/2025" },
              { label: "2025 Judges", href: "/prize/2025/judges" },
              { label: "2025 Winner", href: "#spotlight" },
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
        bottomRight={<p className="text-xs text-ink-soft">witsprouts.org/prize/2026</p>}
      />
    </>
  );
}
