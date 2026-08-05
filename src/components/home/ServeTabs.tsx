"use client";

import { useState } from "react";
import { servePillars } from "@/lib/content/home";

const tabs = [
  { key: "engage", label: "Engage" },
  { key: "develop", label: "Develop" },
  { key: "include", label: "Include" },
  { key: "sustain", label: "Sustain" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export function ServeTabs() {
  const [active, setActive] = useState<TabKey>("engage");

  return (
    <div>
      <div className="flex gap-2.5 mb-10 flex-wrap justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`font-mono text-xs tracking-[0.06em] uppercase font-semibold px-[22px] py-3 rounded-full border-[1.5px] border-ink cursor-pointer transition-colors ${
              active === tab.key ? "bg-ink text-paper" : "bg-transparent text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <ul
          key={tab.key}
          className={`border-t border-ink ${active === tab.key ? "block" : "hidden"}`}
        >
          {servePillars[tab.key].map((item) => (
            <li key={item} className="border-b border-ink">
              <a
                href="#"
                className="flex justify-between items-center py-5 px-1 font-display text-lg font-medium hover:text-blue"
              >
                {item}
                <span className="text-lg">↗</span>
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
