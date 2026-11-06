import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/contact/Hero";
import { QuickReach } from "@/components/contact/QuickReach";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Nav
        size="prize"
        links={[
          { label: "About", href: "/about" },
          { label: "What We Do", href: "/what-we-do" },
          { label: "Storytelling Prize", href: "/prize" },
          { label: "Get Involved", href: "/get-involved" },
          { label: "Contact", href: "/contact", current: true },
        ]}
        ctaLabel="Send a Message"
        ctaHref="#contact-form"
      />

      <main className="flex-1">
        <Hero />
        <QuickReach />
        <ContactForm />
      </main>

      <Footer
        size="prize"
        topDivider
        bottomDivider={false}
        tagline="To foster a deeper engagement in African arts and culture."
        columns={[
          {
            title: "Explore",
            links: [
              { label: "About", href: "/about" },
              { label: "What We Do", href: "/what-we-do" },
              { label: "Storytelling Prize", href: "/prize" },
              { label: "Get Involved", href: "/get-involved" },
              { label: "Partners", href: "/#partners" },
            ],
          },
          {
            title: "Contact",
            links: [
              { label: "info@witsprouts.org", href: "mailto:info@witsprouts.org" },
              { label: "prize@witsprouts.org", href: "mailto:prize@witsprouts.org" },
              { label: "witsprouts.org", href: "/" },
            ],
          },
        ]}
        bottomLeft="© 2026 The Witsprouts Project. All rights reserved."
        bottomRight={<p className="text-xs text-white/45">witsprouts.org/contact</p>}
      />
    </>
  );
}
