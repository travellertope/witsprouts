import Link from "next/link";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" className="transition-transform duration-200 group-hover:translate-x-1">
      <path d="M1 7h11M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function PromoRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-px bg-line">
      <Link
        href="#storytellers"
        className="group bg-paper p-10 min-h-[220px] flex flex-col justify-between"
      >
        <div>
          <div className="text-xs tracking-[0.08em] uppercase font-bold text-blue">
            2025 Winner
          </div>
          <h3 className="text-2xl font-bold mt-3 max-w-[420px]">
            Rachel Ajisafe — “Haunting Song of Promises”
          </h3>
        </div>
        <span className="mt-5 text-[13px] tracking-[0.02em] font-semibold flex items-center gap-2">
          See Her Story <ArrowIcon />
        </span>
      </Link>
      <Link
        href="/prize/2026"
        className="group bg-ink text-paper p-10 min-h-[220px] flex flex-col justify-between"
      >
        <div>
          <div className="text-xs tracking-[0.08em] uppercase font-bold text-blue">
            2nd Edition · Nominations Open
          </div>
          <h3 className="text-2xl font-bold mt-3 max-w-[420px]">
            The Witsprouts Storytelling Prize 2026 — no theme, every form of
            storytelling welcome.
          </h3>
        </div>
        <span className="mt-5 text-[13px] tracking-[0.02em] font-semibold flex items-center gap-2">
          How to Nominate a Storyteller <ArrowIcon />
        </span>
      </Link>
    </div>
  );
}
