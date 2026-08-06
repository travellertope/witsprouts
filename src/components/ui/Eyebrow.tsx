import { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-xs tracking-[0.1em] uppercase font-bold text-ink-soft ${className}`}
    >
      {children}
    </div>
  );
}
