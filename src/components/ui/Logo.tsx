import Link from "next/link";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2.5 font-display font-bold text-xl tracking-tight"
    >
      <span
        className="chevron-mark w-[26px] h-[26px]"
        style={{ background: "linear-gradient(135deg, var(--blue), var(--navy))" }}
      />
      WITSPROUTS
    </Link>
  );
}
