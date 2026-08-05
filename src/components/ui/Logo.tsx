import Link from "next/link";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2.5 font-display font-bold text-xl tracking-tight"
    >
      <span className="logo-mark" />
      WITSPROUTS
    </Link>
  );
}
