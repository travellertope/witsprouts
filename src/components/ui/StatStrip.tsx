import { Container } from "@/components/ui/Container";

export type Stat = { num: string; label: string };

export function StatStrip({
  stats,
  size = "default",
}: {
  stats: Stat[];
  size?: "default" | "prize";
}) {
  return (
    <div className="bg-mist border-b border-line">
      <Container size={size}>
        <div className="grid grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-5 sm:py-[26px] px-2 sm:px-5 text-center border-line ${
                i === 0 ? "" : "border-l"
              }`}
            >
              <div className="text-base sm:text-[22px] font-extrabold">{stat.num}</div>
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
