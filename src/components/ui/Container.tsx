import { ReactNode } from "react";

type Size = "default" | "prize" | "narrow";

const widths: Record<Size, string> = {
  default: "max-w-[1240px]",
  prize: "max-w-[1160px]",
  narrow: "max-w-[820px]",
};

export function Container({
  children,
  size = "default",
  narrow = false,
  className = "",
}: {
  children: ReactNode;
  /** Prefer `size`; `narrow` is kept as shorthand for size="narrow". */
  size?: Size;
  narrow?: boolean;
  className?: string;
}) {
  const max = widths[narrow ? "narrow" : size];
  return (
    <div className={`w-full mx-auto ${max} px-8 ${className}`}>{children}</div>
  );
}
