import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { BrandBar } from "@/components/ui/BrandBar";

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export function Footer({
  tagline,
  columns,
  bottomLeft,
  bottomLinks = [],
}: {
  tagline: string;
  columns: FooterColumn[];
  bottomLeft: string;
  bottomLinks?: { label: string; href: string }[];
}) {
  return (
    <footer className="bg-paper pt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(auto-fit,minmax(120px,1fr))] gap-8 pb-16 border-b border-line">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-ink-soft leading-relaxed max-w-[240px]">
              {tagline}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] tracking-[0.08em] uppercase mb-[18px] text-ink-soft">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href} className="text-sm">
                    <a href={link.href} className="hover:text-blue">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-6 flex justify-between items-center flex-wrap gap-3">
          <p className="text-xs text-ink-soft">{bottomLeft}</p>
          <div className="flex gap-5 text-xs text-ink-soft">
            {bottomLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-blue">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <BrandBar thick />
    </footer>
  );
}
