import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { timeline } from "@/lib/content/prize";

export function KeyDates() {
  return (
    <section className="py-24" id="dates">
      <Container narrow>
        <SectionHead eyebrow="Timeline" title="Key Dates" align="center" />
        <div className="timeline max-w-[640px] mx-auto">
          {timeline.map((item, i) => (
            <div
              key={item.title}
              className={`tl-item relative ${item.active ? "active" : ""} ${
                i === timeline.length - 1 ? "pb-0" : "pb-9"
              }`}
            >
              <div className="tl-dot" />
              <div className="font-mono text-[10px] tracking-[0.06em] uppercase text-blue font-bold">
                {item.tag}
              </div>
              <div className="font-display text-lg font-semibold mt-1.5">{item.title}</div>
              <div className="text-[13.5px] text-ink-soft mt-0.5">{item.date}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
