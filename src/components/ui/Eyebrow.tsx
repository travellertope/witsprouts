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
      className={`font-mono text-[11px] tracking-[0.16em] uppercase font-semibold ${className}`}
    >
      {children}
    </div>
  );
}
