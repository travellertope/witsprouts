import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { UtilityStrip, Breadcrumb } from "@/components/layout/UtilityStrip";
import { Footer } from "@/components/layout/Footer";
import { FinalCta } from "@/components/ui/FinalCta";
import { Hero } from "@/components/what-we-do/Hero";
import { Pillars } from "@/components/what-we-do/Pillars";
import { Programmes } from "@/components/what-we-do/Programmes";

export const metadata: Metadata = {
  title: "What We Do",
};

export default function WhatWeDo() {
  return (
    <>
      <UtilityStrip
        size="prize"
        left={
          <Breadcrumb
            items={[{ label: "The Witsprouts Project", href: "/" }, { label: "What We Do" }]}
          />
        }
        right={<div>INFO@WITSPROUTS.ORG</div>}
      />

      <Nav
        size="prize"
        links={[
          { label: "About", href: "/about" },
          { label: "What We Do", href: "/what-we-do", current: true },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Partners", href: "/#partners" },
          { label: "Contact", href: "/#contact" },
        ]}
        ctaLabel="Get Involved"
        ctaHref="/get-involved"
      />

      <main className="flex-1">
        <Hero />
        <Pillars />
        <Programmes />
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
            title: "Pillars",
            links: [
              { label: "Engage", href: "#p1" },
              { label: "Develop", href: "#p2" },
              { label: "Include", href: "#p3" },
              { label: "Amplify", href: "#p4" },
              { label: "Sustain", href: "#p5" },
            ],
          },
          {
            title: "Explore",
            links: [
              { label: "About", href: "/about" },
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
        bottomRight={<p className="text-xs text-white/45">witsprouts.org/what-we-do</p>}
      />
    </>
  );
}
