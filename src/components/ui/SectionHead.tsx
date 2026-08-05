import { ReactNode } from "react";

export function SectionHead({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`max-w-[640px] mb-14 ${
        align === "center" ? "mx-auto text-center" : ""
      } ${className}`}
    >
      <div className="font-mono text-[11px] tracking-[0.16em] uppercase font-semibold text-blue mb-3.5">
        {eyebrow}
      </div>
      <h2 className="font-display font-bold text-[clamp(28px,3.6vw,46px)] leading-[1.08] tracking-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-white/68" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
