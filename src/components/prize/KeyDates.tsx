import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { timeline } from "@/lib/content/prize";

export function KeyDates() {
  return (
    <section className="py-[88px]" id="dates">
      <Container narrow>
        <SectionHead eyebrow="Timeline" title="Key Dates" align="center" compact />
        <div className="timeline max-w-[600px] mx-auto">
          {timeline.map((item, i) => (
            <div
              key={item.title}
              className={`tl-item relative ${item.active ? "active" : ""} ${
                i === timeline.length - 1 ? "pb-0" : "pb-8"
              }`}
            >
              <div className="tl-dot" />
              <div className="text-[10.5px] tracking-[0.05em] uppercase text-blue font-bold">
                {item.tag}
              </div>
              <div className="text-[17px] font-bold mt-1.5">{item.title}</div>
              <div className="text-[13px] text-ink-soft mt-0.5">{item.date}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
