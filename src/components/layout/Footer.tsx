import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export function Footer({
  tagline,
  columns,
  bottomLeft,
  bottomLinks = [],
  bottomRight,
  size = "default",
  /** Extra divider above the columns block, for pages where the footer
   * sits directly beneath another dark section (e.g. the homepage
   * newsletter band) and needs a visual seam. */
  topDivider = false,
  /** Divider between the columns block and the bottom bar. On most pages
   * this is the footer's only seam; a few (e.g. contact) use topDivider
   * instead and skip this one. */
  bottomDivider = true,
}: {
  tagline: string;
  columns: FooterColumn[];
  bottomLeft: string;
  bottomLinks?: { label: string; href: string }[];
  bottomRight?: ReactNode;
  size?: "default" | "prize";
  topDivider?: boolean;
  bottomDivider?: boolean;
}) {
  const compact = size === "prize";
  return (
    <footer className={`bg-ink text-white/70 ${compact ? "pt-12" : "pt-14"}`}>
      <Container size={size}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(auto-fit,minmax(120px,1fr))] gap-8 pb-11 ${
            bottomDivider ? "border-b border-white/12" : ""
          } ${topDivider ? "border-t pt-12" : ""}`}
        >
          <div>
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="text-[13.5px] text-white/55 leading-relaxed max-w-[260px]">
              {tagline}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11.5px] tracking-[0.05em] uppercase font-bold mb-3.5 text-white/45">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label} className="text-[13.5px]">
                    <a href={link.href} className="hover:text-blue">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-5 flex justify-between items-center flex-wrap gap-3">
          <p className="text-xs text-white/45">{bottomLeft}</p>
          {bottomRight ?? (
            <div className="flex gap-5 text-xs text-white/45">
              {bottomLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-blue">
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}
