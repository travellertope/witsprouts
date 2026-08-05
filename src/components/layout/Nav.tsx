import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export type NavLink = { label: string; href: string };

export function Nav({
  links,
  ctaLabel,
  ctaHref,
  logoHref = "/",
  size = "default",
}: {
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
  logoHref?: string;
  size?: "default" | "prize";
}) {
  return (
    <Container size={size}>
      <nav className="flex items-center justify-between py-5 border-b border-line">
        <Logo href={logoHref} />
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <Button href={ctaHref} variant="solid">
          {ctaLabel}
        </Button>
      </nav>
    </Container>
  );
}
