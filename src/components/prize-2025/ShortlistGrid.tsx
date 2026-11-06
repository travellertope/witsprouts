"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { shortlist2025, type Shortlister } from "@/lib/content/prize2025";

function ShortlistCard({ person }: { person: Shortlister }) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = person.bio.split("\n\n");
  const preview = paragraphs[0];
  const hasMore = paragraphs.length > 1;

  return (
    <article className="border border-line flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-mist">
        <Image
          src={person.photo}
          alt={person.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top"
        />
        {person.winner && (
          <div className="absolute top-4 left-4 bg-ochre text-white text-[11px] tracking-[0.07em] uppercase font-bold px-3 py-1.5">
            2025 Winner
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
        <div className="text-[11px] tracking-[0.07em] uppercase font-bold text-ochre mb-2">
          {person.winner ? "2025 Shortlist · Winner" : "2025 Shortlist · Finalist"}
        </div>
        <h2 className="text-[19px] font-bold leading-snug">{person.name}</h2>
        <p className="text-[13px] text-ink-soft mt-0.5 mb-4">{person.role}</p>
        {person.performance && (
          <p className="text-[13px] font-semibold text-ink mb-3 italic">
            &ldquo;{person.performance}&rdquo;
          </p>
        )}
        <div className="text-[13.5px] leading-relaxed text-ink-soft flex-1">
          <p>{preview}</p>
          {hasMore && expanded && (
            <div className="mt-3 space-y-3">
              {paragraphs.slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 self-start text-[12px] tracking-[0.03em] font-bold text-ochre hover:underline"
          >
            {expanded ? "Read less ↑" : "Read more ↓"}
          </button>
        )}
      </div>
    </article>
  );
}

export function ShortlistGrid() {
  return (
    <section className="py-[88px]">
      <Container size="prize">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shortlist2025.map((person) => (
            <ShortlistCard key={person.name} person={person} />
          ))}
        </div>
      </Container>
    </section>
  );
}
