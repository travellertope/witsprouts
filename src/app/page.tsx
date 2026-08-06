import { Nav } from "@/components/layout/Nav";
import {
  UtilityStrip,
  FamilyLinks,
  SocialIcons,
} from "@/components/layout/UtilityStrip";
import { Footer } from "@/components/layout/Footer";
import { StatStrip } from "@/components/ui/StatStrip";
import { Hero } from "@/components/home/Hero";
import { PromoRow } from "@/components/home/PromoRow";
import { WhatIs } from "@/components/home/WhatIs";
import { Storytellers } from "@/components/home/Storytellers";
import { Mission } from "@/components/home/Mission";
import { HowWeServe } from "@/components/home/HowWeServe";
import { Moments } from "@/components/home/Moments";
import { News } from "@/components/home/News";
import { PartnersRow } from "@/components/ui/PartnersRow";
import { Newsletter } from "@/components/home/Newsletter";
import { partners } from "@/lib/content/home";

export default function Home() {
  return (
    <>
      <UtilityStrip
        left={
          <FamilyLinks
            links={[
              { label: "Witsprouts Books", href: "https://witsprouts.com/books" },
              { label: "Witsprouts Bookstack", href: "https://bookstack.witsprouts.com" },
              { label: "Storyrat", href: "https://storyrat.witsprouts.com" },
              { label: "The Moveee", href: "https://themoveee.com" },
            ]}
          />
        }
        right={
          <SocialIcons
            items={[
              { label: "Instagram", href: "#" },
              { label: "X", href: "#" },
              { label: "TikTok", href: "#" },
            ]}
          />
        }
      />

      <Nav
        links={[
          { label: "About", href: "/about" },
          { label: "What We Do", href: "/what-we-do" },
          { label: "Storytellers", href: "#storytellers" },
          { label: "Impact", href: "#mission" },
          { label: "Partners", href: "#partners" },
          { label: "Contact", href: "/contact" },
        ]}
        ctaLabel="Nominate a Storyteller"
        ctaHref="/prize/2026"
      />

      <main className="flex-1">
        <Hero />
        <StatStrip
          stats={[
            { num: "₦500K", label: "Storytelling Prize" },
            { num: "6", label: "SDGs Aligned" },
            { num: "3", label: "2025 Partners" },
          ]}
        />
        <PromoRow />
        <WhatIs />
        <Storytellers />
        <Mission />
        <HowWeServe />
        <Moments />
        <News />
        <section className="bg-mist py-24" id="partners">
          <PartnersRow
            partners={partners}
            note="Partners on past editions and programmes — not standing sponsors, but collaborators who've lent their expertise along the way."
          />
        </section>
        <Newsletter />
      </main>

      <Footer
        topDivider
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
            title: "What We Do",
            links: [
              { label: "Arts & Culture Engagement", href: "/what-we-do#p1" },
              { label: "Talent Development", href: "/what-we-do#p2" },
              { label: "Community & Inclusion", href: "/what-we-do#p3" },
              { label: "Sustainable Enterprise", href: "/what-we-do#p5" },
            ],
          },
          {
            title: "Get Involved",
            links: [
              { label: "Nominate a Storyteller", href: "/prize/2026" },
              { label: "Become a Mentor", href: "/get-involved#mentor" },
              { label: "Partner With Us", href: "/get-involved#org" },
              { label: "Volunteer", href: "/get-involved#volunteer" },
            ],
          },
          {
            title: "Witsprouts Family",
            links: [
              { label: "Witsprouts Books", href: "https://witsprouts.com/books" },
              { label: "Witsprouts Bookstack", href: "https://bookstack.witsprouts.com" },
              { label: "Storyrat", href: "https://storyrat.witsprouts.com" },
              { label: "The Moveee", href: "https://themoveee.com" },
            ],
          },
          {
            title: "Contact",
            links: [
              { label: "Get in Touch", href: "/contact" },
              { label: "info@witsprouts.org", href: "mailto:info@witsprouts.org" },
            ],
          },
        ]}
        bottomLeft="© 2026 The Witsprouts Project. All rights reserved."
        bottomLinks={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms", href: "#" },
        ]}
      />
    </>
  );
}
