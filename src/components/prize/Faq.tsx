"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { faqs } from "@/lib/content/prize";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-[88px]" id="faq">
      <Container narrow>
        <SectionHead title="FAQ" align="center" compact />
        <div>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className={`faq-item border-b border-line ${isOpen ? "open" : ""}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex justify-between items-center w-full text-left py-5 px-1 text-base font-bold bg-transparent border-none cursor-pointer text-ink"
                >
                  {item.q}
                  <span
                    className={`text-xl font-normal ml-4 flex-none transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div className="faq-a-wrap">
                  <div className="faq-a-inner">
                    <p className="px-1 pb-5 text-sm leading-relaxed text-ink-soft max-w-[640px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
