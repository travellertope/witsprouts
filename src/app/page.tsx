import { Nav } from "@/components/layout/Nav";
import {
  UtilityStrip,
  FamilyLinks,
  SocialIcons,
} from "@/components/layout/UtilityStrip";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PromoRow } from "@/components/home/PromoRow";
import { WhatIs } from "@/components/home/WhatIs";
import { Storytellers } from "@/components/home/Storytellers";
import { Mission } from "@/components/home/Mission";
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
          { label: "Storytelling Prize", href: "/prize" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Contact", href: "/contact" },
        ]}
        ctaLabel="Storytelling Prize"
        ctaHref="/prize/2026"
      />

      <main className="flex-1">
        <Hero />
        <PromoRow />
        <WhatIs />
        <Storytellers />
        <Mission />
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
              { label: "Get in Touch", href: "/contact" },
            ],
          },
          {
            title: "What We Do",
            links: [
              { label: "Arts & Culture Engagement", href: "/what-we-do#p1" },
              { label: "Talent Development", href: "/what-we-do#p2" },
              { label: "Community & Inclusion", href: "/what-we-do#p3" },
              { label: "Amplifying Marginalised Voices", href: "/what-we-do#p4" },
            ],
          },
          {
            title: "Get Involved",
            links: [
              { label: "Storytelling Prize", href: "/prize" },
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
