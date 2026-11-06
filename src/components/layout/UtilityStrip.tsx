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
    <div className="bg-teal text-white/65">
      <Container size={size}>
        <div className="flex items-center justify-between py-1.5 text-xs gap-4">
          <div className="min-w-0 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {left}
          </div>
          <div className="flex-none">{right}</div>
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
            <Link href={item.href} className="hover:text-ochre">
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
    <div className="flex gap-5">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="hover:text-ochre flex-none">
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
    <div className="flex gap-2.5 sm:gap-3">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className="w-[22px] h-[22px] rounded-full border border-white/30 flex items-center justify-center text-[11px] hover:border-ochre hover:text-ochre flex-none"
        >
          {item.label.slice(0, 2).toUpperCase()}
        </a>
      ))}
    </div>
  );
}
