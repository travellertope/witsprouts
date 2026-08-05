import { ReactNode } from "react";

export function Container({
  children,
  narrow = false,
  className = "",
}: {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  const max = narrow ? "max-w-[820px]" : "max-w-[1240px]";
  return (
    <div className={`mx-auto ${max} px-8 ${className}`}>{children}</div>
  );
}
