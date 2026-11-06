import { ReactNode } from "react";

export function SectionHead({
  title,
  description,
  align = "left",
  dark = false,
  compact = false,
  className = "",
}: {
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  /** Slightly smaller heading scale, used on the prize page. */
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`max-w-[640px] mb-12 ${
        align === "center" ? "mx-auto text-center" : ""
      } ${className}`}
    >
      <h2
        className={`font-bold tracking-tight leading-[1.12] ${
          compact ? "text-[clamp(26px,3.2vw,38px)]" : "text-[clamp(28px,3.4vw,42px)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3.5 text-base leading-relaxed ${
            dark ? "text-white/65" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
