import { BrandBar } from "@/components/ui/BrandBar";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHead } from "@/components/ui/SectionHead";
import { Container } from "@/components/ui/Container";
import { Nav } from "@/components/layout/Nav";
import {
  UtilityStrip,
  FamilyLinks,
  SocialIcons,
} from "@/components/layout/UtilityStrip";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <BrandBar />

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
          { label: "About", href: "#about" },
          { label: "What We Do", href: "#what-we-do" },
          { label: "Storytellers", href: "#storytellers" },
          { label: "Impact", href: "#mission" },
          { label: "Partners", href: "#partners" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Nominate a Storyteller"
        ctaHref="/prize/2026"
      />

      <main className="flex-1">
        <Container className="py-24">
          <Eyebrow className="text-blue mb-4">Design System</Eyebrow>
          <h1 className="font-display font-bold text-[clamp(38px,6vw,68px)] tracking-tight mb-6">
            Shared components, ready for the real pages.
          </h1>
          <p className="max-w-[560px] text-ink-soft leading-relaxed mb-10">
            Brand bar, utility strip, nav, footer, buttons, and section heads
            are extracted from both the homepage and Storytelling Prize
            designs. Next: build the actual homepage and prize page routes
            with WordPress-backed content.
          </p>
          <div className="flex gap-4 flex-wrap mb-16">
            <Button href="/prize/2026" variant="solid">
              Solid Button
            </Button>
            <Button href="/prize/2026" variant="blue">
              Blue Button
            </Button>
            <Button href="/prize/2026" variant="outline">
              Outline Button
            </Button>
          </div>

          <SectionHead
            eyebrow="Example Section"
            title="Section Head Component"
            description="Used across both the homepage and prize page for consistent section intros."
          />
        </Container>
      </main>

      <Footer
        tagline="To foster a deeper engagement in African arts and culture."
        columns={[
          {
            title: "About",
            links: [
              { label: "Our Story", href: "#" },
              { label: "Vision & Mission", href: "#" },
            ],
          },
          {
            title: "Get Involved",
            links: [
              { label: "Nominate a Storyteller", href: "/prize/2026" },
              { label: "Partner With Us", href: "#" },
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
