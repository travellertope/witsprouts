"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export type NavLink = { label: string; href: string; current?: boolean };

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
  const [open, setOpen] = useState(false);

  return (
    <Container size={size}>
      <nav className="flex items-center justify-between py-3.5 border-b border-line gap-4">
        <Logo href={logoHref} size={size} />
        <div className="hidden md:flex gap-7 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 group ${link.current ? "text-blue" : ""}`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 bg-blue transition-all duration-200 group-hover:w-full ${
                  link.current ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button href={ctaHref} variant="solid">
              {ctaLabel}
            </Button>
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 flex-none"
          >
            <span
              className={`block w-5 h-[1.5px] bg-ink transition-transform duration-200 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-b border-line py-3 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-2.5 text-[15px] font-medium ${link.current ? "text-blue" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={ctaHref}
            variant="solid"
            className="sm:hidden mt-3 justify-center"
            onClick={() => setOpen(false)}
          >
            {ctaLabel}
          </Button>
        </div>
      )}
    </Container>
  );
}
