"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { pillars } from "@/lib/content/whatWeDo";

export function Pillars() {
  const [activeId, setActiveId] = useState(pillars[0].id);
  const active = pillars.find((p) => p.id === activeId) ?? pillars[0];

  useEffect(() => {
    // One-time sync from a deep link (e.g. /what-we-do#p3) — the URL hash
    // isn't available during server rendering, so it has to happen here.
    const hash = window.location.hash.slice(1);
    if (pillars.some((p) => p.id === hash)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveId(hash);
      document.getElementById("pillars")?.scrollIntoView();
    }
  }, []);

  return (
    <section className="py-[88px]" id="pillars">
      <Container size="prize">
        <SectionHead title="Five Strategic Pillars" align="center" compact />

        <div className="flex gap-2.5 mb-11 flex-wrap justify-center">
          {pillars.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`text-[13px] font-semibold px-5 py-[11px] rounded-full border-[1.5px] border-ink cursor-pointer transition-colors ${
                activeId === p.id ? "bg-ink text-paper" : "bg-transparent text-ink"
              }`}
            >
              {p.tabLabel}
            </button>
          ))}
        </div>

        <div id={active.id} className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12">
          <div>
            <div className="text-[44px] font-extrabold text-blue leading-none">{active.num}</div>
            <h3 className="text-2xl font-bold mt-3">{active.title}</h3>
            <p className="text-sm text-ink-soft mt-3.5 leading-relaxed">
              <b className="text-ink">Goal:</b> {active.goal}
            </p>
          </div>
          <ul className="border-t border-line">
            {active.activities.map((activity) => (
              <li key={activity} className="border-b border-line py-[18px] px-1 text-[15.5px] font-medium">
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
