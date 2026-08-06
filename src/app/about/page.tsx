import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { UtilityStrip, Breadcrumb } from "@/components/layout/UtilityStrip";
import { Footer } from "@/components/layout/Footer";
import { FinalCta } from "@/components/ui/FinalCta";
import { Hero } from "@/components/about/Hero";
import { OurStory } from "@/components/about/OurStory";
import { VisionMission } from "@/components/about/VisionMission";
import { AceFramework } from "@/components/about/AceFramework";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <UtilityStrip
        size="prize"
        left={
          <Breadcrumb items={[{ label: "The Witsprouts Project", href: "/" }, { label: "About" }]} />
        }
        right={<div>INFO@WITSPROUTS.ORG</div>}
      />

      <Nav
        size="prize"
        links={[
          { label: "About", href: "/about", current: true },
          { label: "What We Do", href: "/what-we-do" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Partners", href: "/#partners" },
          { label: "Contact", href: "/contact" },
        ]}
        ctaLabel="Get Involved"
        ctaHref="/get-involved"
      />

      <main className="flex-1">
        <Hero />
        <OurStory />
        <VisionMission />
        <AceFramework />
        <FinalCta
          size="prize"
          eyebrow="Get Involved"
          title="Ready To Build Something Lasting?"
          description="Whether you're a creative seeking a platform, an organisation looking to partner, or a funder wanting to invest in African arts — we'd love to hear from you."
          primaryLabel="Get Involved →"
          primaryHref="/get-involved"
          secondaryLabel="Email Us Directly"
          secondaryHref="mailto:info@witsprouts.org"
        />
      </main>

      <Footer
        size="prize"
        tagline="To foster a deeper engagement in African arts and culture."
        columns={[
          {
            title: "About",
            links: [
              { label: "Our Story", href: "/about#story" },
              { label: "Vision & Mission", href: "/about#mission" },
              { label: "The ACE Framework", href: "/about#ace" },
            ],
          },
          {
            title: "Explore",
            links: [
              { label: "What We Do", href: "/what-we-do" },
              { label: "Get Involved", href: "/get-involved" },
              { label: "Partners", href: "/#partners" },
            ],
          },
          {
            title: "Contact",
            links: [
              { label: "info@witsprouts.org", href: "mailto:info@witsprouts.org" },
              { label: "witsprouts.org", href: "/" },
            ],
          },
        ]}
        bottomLeft="© 2026 The Witsprouts Project. All rights reserved."
        bottomRight={<p className="text-xs text-white/45">witsprouts.org/about</p>}
      />
    </>
  );
}
