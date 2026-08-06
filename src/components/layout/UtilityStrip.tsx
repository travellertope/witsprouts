import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ReactNode } from "react";

export function UtilityStrip({
  left,
  right,
  size = "default",
}: {
  left: ReactNode;
  right: ReactNode;
  size?: "default" | "prize";
}) {
  return (
    <div className="bg-ink text-white/65">
      <Container size={size}>
        <div className="flex items-center justify-between py-2.5 text-xs flex-col sm:flex-row gap-2 sm:gap-0">
          {left}
          {right}
        </div>
      </Container>
    </div>
  );
}

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <div className="flex items-center">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center">
          {i > 0 && <span className="opacity-40 mx-2">/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-blue">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export function FamilyLinks({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex gap-5 flex-wrap">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="hover:text-blue">
          {link.label}
        </a>
      ))}
    </div>
  );
}

export function SocialIcons({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <div className="flex gap-3">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className="w-[22px] h-[22px] rounded-full border border-white/30 flex items-center justify-center text-[11px] hover:border-blue hover:text-blue"
        >
          {item.label.slice(0, 2).toUpperCase()}
        </a>
      ))}
    </div>
  );
}
