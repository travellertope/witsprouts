import Link from "next/link";

export function Logo({
  href = "/",
  size = "default",
  className = "",
}: {
  href?: string;
  size?: "default" | "prize";
  className?: string;
}) {
  const mark = size === "prize" ? "w-6 h-6" : "w-[26px] h-[26px]";
  const text = size === "prize" ? "text-[19px]" : "text-[21px]";
  return (
    <Link
      href={href}
      className={`flex items-center gap-2.5 font-extrabold tracking-tight ${text} ${className}`}
    >
      <span className={`chevron-mark bg-blue ${mark}`} />
      WITSPROUTS
    </Link>
  );
}
