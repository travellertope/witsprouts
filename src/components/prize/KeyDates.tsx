import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { timeline } from "@/lib/content/prize";

export function KeyDates() {
  return (
    <section className="py-[88px]" id="dates">
      <Container size="prize">
        <SectionHead title="Key Dates" align="center" compact />

        {/* Horizontal scrollable timeline */}
        <div className="overflow-x-auto pb-3 -mx-2 px-2"
          style={{ scrollbarWidth: "thin", scrollbarColor: "var(--line) transparent" }}
        >
          <div className="flex min-w-max relative">
            {/* Connecting line running through dot centres */}
            <div
              className="absolute top-[6px] left-[6px] right-[6px] h-[2px] bg-line"
              aria-hidden="true"
            />

            {timeline.map((item, i) => {
              const isPast = item.tag === "Closed";
              const isActive = !!item.active;
              const isLast = i === timeline.length - 1;

              const dotClass = isActive
                ? "border-blue bg-blue"
                : isPast
                ? "border-line bg-line"
                : "border-line bg-paper";

              const tagClass = isActive
                ? "text-blue"
                : "text-ink-soft";

              const content = (
                <div className={`relative z-[1] flex-none ${isLast ? "w-auto min-w-[160px]" : "w-[220px]"}`}>
                  {/* Dot */}
                  <div
                    className={`w-[14px] h-[14px] rounded-full border-[2.5px] mb-4 ${dotClass}`}
                  />
                  {/* Tag */}
                  <div className={`text-[10.5px] tracking-[0.07em] uppercase font-bold ${tagClass}`}>
                    {item.tag}
                  </div>
                  {/* Title */}
                  <div className={`text-[16px] font-bold mt-1.5 leading-snug pr-4 ${isPast ? "text-ink-soft" : "text-ink"}`}>
                    {item.title}
                  </div>
                  {/* Date */}
                  <div className="text-[13px] text-ink-soft mt-1">{item.date}</div>
                  {/* Longlist link */}
                  {item.href && (
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 mt-2.5 text-[12px] font-bold tracking-[0.02em] text-blue hover:underline"
                    >
                      View Longlist →
                    </Link>
                  )}
                </div>
              );

              return <div key={item.title}>{content}</div>;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
