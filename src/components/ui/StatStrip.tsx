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
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-[26px] px-5 text-center border-line ${
                i === 0
                  ? "border-t-0 sm:border-l-0"
                  : "border-t sm:border-t-0 sm:border-l"
              }`}
            >
              <div className="text-[22px] font-extrabold">{stat.num}</div>
              <div className="text-[11.5px] text-ink-soft mt-1 uppercase tracking-[0.05em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
