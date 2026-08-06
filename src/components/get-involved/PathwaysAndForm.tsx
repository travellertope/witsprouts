"use client";

import { useState, useEffect, FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { pathways, OpportunityTag } from "@/lib/content/getInvolved";

const tagStyles: Record<OpportunityTag, string> = {
  open: "bg-blue text-white",
  ongoing: "bg-mist text-ink-soft border border-line",
  upcoming: "bg-transparent text-ink-soft border border-line",
};

const tagLabels: Record<OpportunityTag, string> = {
  open: "Open Now",
  ongoing: "Ongoing",
  upcoming: "Upcoming",
};

export function PathwaysAndForm() {
  const [activeId, setActiveId] = useState(pathways[0].id);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const active = pathways.find((p) => p.id === activeId) ?? pathways[0];

  useEffect(() => {
    // One-time sync from a deep link (e.g. /get-involved#mentor) — the URL
    // hash isn't available during server rendering, so it has to happen here.
    const hash = window.location.hash.slice(1);
    if (pathways.some((p) => p.id === hash)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveId(hash);
      document.getElementById("pathways")?.scrollIntoView();
    }
  }, []);

  function goToForm(id: string) {
    setActiveId(id);
    document.getElementById("eoi-form")?.scrollIntoView({ behavior: "smooth" });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("loading");
    const form = new FormData(formEl);
    try {
      const res = await fetch("/api/eoi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.get("firstName"),
          lastName: form.get("lastName"),
          email: form.get("email"),
          pathway: form.get("pathway"),
          message: form.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* PATHWAYS */}
      <section className="py-[88px]" id="pathways">
        <Container size="prize">
          <SectionHead
            title="How Would You Like To Get Involved?"
            align="center"
            compact
          />

          <div className="flex gap-2.5 mb-11 flex-wrap justify-center">
            {pathways.map((p) => (
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

          <div id={active.id} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="text-[13px] text-ink-soft mb-2.5">
                Who it&apos;s for: <b className="text-ink">{active.who}</b>
              </div>
              <h3 className="text-2xl font-bold mb-3.5">{active.title}</h3>
              <p className="text-[15px] leading-loose text-ink-soft mb-6">{active.description}</p>
              <ul className="border-t border-line">
                {active.opportunities.map((opp) => (
                  <li
                    key={opp.name}
                    className="border-b border-line py-4 px-1 flex justify-between items-center gap-3"
                  >
                    <span className="text-[15px] font-semibold">{opp.name}</span>
                    <span
                      className={`text-[10.5px] tracking-[0.05em] uppercase font-bold px-2.5 py-1 rounded-full flex-none ${
                        tagStyles[opp.tag]
                      }`}
                    >
                      {tagLabels[opp.tag]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-paper border border-line p-[26px]">
              <p className="text-sm text-ink-soft leading-relaxed mb-[18px]">
                Use the form below and select &ldquo;{active.title}&rdquo; as your
                pathway. We&apos;ll ask for a couple of extra details specific to
                you.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {active.captureFields.map((field) => (
                  <span
                    key={field}
                    className="text-[11.5px] px-3 py-1.5 border border-line rounded-full text-ink-soft"
                  >
                    {field}
                  </span>
                ))}
              </div>
              <Button variant="solid" onClick={() => goToForm(active.id)}>
                Go to Form ↓
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* EXPRESSION OF INTEREST FORM */}
      <section className="bg-ink text-paper py-24" id="eoi-form">
        <Container size="prize">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-extrabold text-[clamp(28px,3.6vw,40px)] leading-[1.12] tracking-tight">
                Tell Us How You&apos;d Like To Build With Us
              </h2>
              <p className="mt-4 text-[15px] leading-loose text-white/68 max-w-[420px]">
                Pick your pathway below and we&apos;ll route your message to
                the right person on the team — Programmes, Partnerships &amp;
                Communications, or Finance &amp; Operations.
              </p>
            </div>

            {status === "done" ? (
              <div className="border border-white/20 p-10 text-center">
                <div className="text-[11px] tracking-[0.08em] uppercase font-bold text-blue mb-3">
                  Received
                </div>
                <h3 className="text-xl font-bold mb-2">Thank you.</h3>
                <p className="text-white/65 text-sm">
                  We&apos;ll be in touch about how to build together.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <input
                    name="firstName"
                    required
                    type="text"
                    placeholder="First name"
                    className="bg-white/6 border border-white/20 px-4 py-[13px] text-sm text-paper placeholder:text-white/40 w-full"
                  />
                  <input
                    name="lastName"
                    required
                    type="text"
                    placeholder="Last name"
                    className="bg-white/6 border border-white/20 px-4 py-[13px] text-sm text-paper placeholder:text-white/40 w-full"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email address"
                    className="bg-white/6 border border-white/20 px-4 py-[13px] text-sm text-paper placeholder:text-white/40 w-full"
                  />
                  <select
                    name="pathway"
                    required
                    value={activeId}
                    onChange={(e) => setActiveId(e.target.value)}
                    className="bg-white/6 border border-white/20 px-4 py-[13px] text-sm text-white/85 w-full"
                  >
                    {pathways.map((p) => (
                      <option key={p.id} value={p.id} className="text-black">
                        {p.tabLabel}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us a bit about yourself and how you'd like to get involved"
                  className="bg-white/6 border border-white/20 px-4 py-[13px] text-sm text-paper placeholder:text-white/40 w-full mb-[18px] min-h-[100px] resize-y"
                />
                <Button type="submit" variant="blue" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting…" : "Submit"}
                </Button>
                {status === "error" && (
                  <p className="mt-3 text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
                <p className="text-[11px] text-white/40 mt-3.5">
                  By submitting, you agree to be contacted by The Witsprouts
                  Project about your expression of interest. See our{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
