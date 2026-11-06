import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/get-involved/Hero";
import { PathwaysAndForm } from "@/components/get-involved/PathwaysAndForm";

export const metadata: Metadata = {
  title: "Get Involved",
};

export default function GetInvolved() {
  return (
    <>
      <Nav
        size="prize"
        links={[
          { label: "About", href: "/about" },
          { label: "What We Do", href: "/what-we-do" },
          { label: "Storytelling Prize", href: "/prize" },
          { label: "Get Involved", href: "/get-involved", current: true },
          { label: "Contact", href: "/contact" },
        ]}
        ctaLabel="Find Your Pathway"
        ctaHref="#pathways"
      />

      <main className="flex-1">
        <Hero />
        <PathwaysAndForm />
      </main>

      <Footer
        size="prize"
        tagline="To foster a deeper engagement in African arts and culture."
        columns={[
          {
            title: "Pathways",
            links: [
              { label: "Creative / Artist", href: "#creative" },
              { label: "Organisation / Funder", href: "#org" },
              { label: "Volunteer", href: "#volunteer" },
              { label: "Diaspora", href: "#diaspora" },
            ],
          },
          {
            title: "Explore",
            links: [
              { label: "About", href: "/about" },
              { label: "What We Do", href: "/what-we-do" },
              { label: "Storytelling Prize", href: "/prize" },
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
        bottomRight={<p className="text-xs text-white/45">witsprouts.org/get-involved</p>}
      />
    </>
  );
}
