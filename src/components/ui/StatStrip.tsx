import { Container } from "@/components/ui/Container";

export type Stat = { num: string; label: string };

function borderClasses(cols: 3 | 4, i: number) {
  if (cols === 3) {
    // Always 3-across, even on mobile.
    return i === 0 ? "" : "border-l border-line";
  }
  // 4 stats: 2x2 on mobile, 4-across from sm up.
  const mobileLeft = i % 2 === 1 ? "border-l" : "";
  const mobileTop = i >= 2 ? "border-t" : "";
  const desktopLeft = i === 0 ? "sm:border-l-0" : "sm:border-l";
  return `${mobileLeft} ${mobileTop} ${desktopLeft} sm:border-t-0 border-line`;
}

export function StatStrip({
  stats,
  size = "default",
  cols = 3,
}: {
  stats: Stat[];
  size?: "default" | "prize";
  cols?: 3 | 4;
}) {
  return (
    <div className="bg-mist border-b border-line">
      <Container size={size}>
        <div className={`grid ${cols === 3 ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-4"}`}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-5 sm:py-[26px] px-2 sm:px-5 text-center ${borderClasses(cols, i)}`}
            >
              <div className="text-base sm:text-[22px] font-bold">{stat.num}</div>
              <div className="text-[9.5px] sm:text-[11.5px] text-ink-soft mt-1 uppercase tracking-[0.03em] sm:tracking-[0.05em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
