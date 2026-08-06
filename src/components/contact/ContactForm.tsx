"use client";

import { useState, FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const locations = [
  { tag: "Hub City", name: "Lagos, Nigeria" },
  { tag: "Hub City", name: "Abuja, Nigeria" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("loading");
    const form = new FormData(formEl);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          reason: form.get("reason"),
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
    <section className="bg-ink text-paper py-24" id="contact-form">
      <Container size="prize">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <div>
            <Eyebrow className="text-white/55 mb-3.5">Where We Work</Eyebrow>
            <h2 className="font-extrabold text-[clamp(28px,3.6vw,40px)] leading-[1.12] tracking-tight">
              Based In Lagos &amp; Abuja
            </h2>
            <p className="mt-4 text-[15px] leading-loose text-white/68 max-w-[420px]">
              Operating across Nigeria today, with our sights set on West
              Africa and the wider diaspora next.
            </p>
            <ul className="mt-8 border-t border-white/15">
              {locations.map((loc) => (
                <li key={loc.name} className="border-b border-white/15 py-4">
                  <div className="text-[10.5px] tracking-[0.05em] uppercase font-bold text-blue">
                    {loc.tag}
                  </div>
                  <div className="text-[15px] font-semibold mt-1">{loc.name}</div>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-7">
              {["Instagram", "X", "TikTok"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-[34px] h-[34px] rounded-full border border-white/30 flex items-center justify-center text-xs hover:border-blue hover:text-blue"
                >
                  {label.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {status === "done" ? (
            <div className="border border-white/20 p-10 text-center">
              <div className="text-[11px] tracking-[0.08em] uppercase font-bold text-blue mb-3">
                Message Sent
              </div>
              <h3 className="text-xl font-bold mb-2">Thank you.</h3>
              <p className="text-white/65 text-sm">
                We&apos;ve received your message and will route it to the
                right person on the team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Name"
                  className="bg-white/6 border border-white/20 px-4 py-[13px] text-sm text-paper placeholder:text-white/40 w-full"
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
                  className="bg-white/6 border border-white/20 px-4 py-[13px] text-sm text-paper placeholder:text-white/40 w-full"
                />
              </div>
              <select
                name="reason"
                required
                defaultValue=""
                className="bg-white/6 border border-white/20 px-4 py-[13px] text-sm text-white/85 w-full mb-3.5"
              >
                <option value="" disabled>
                  Reason for contact
                </option>
                <option value="general" className="text-black">
                  General enquiry
                </option>
                <option value="partnership" className="text-black">
                  Partnership
                </option>
                <option value="media" className="text-black">
                  Media
                </option>
                <option value="volunteering" className="text-black">
                  Volunteering
                </option>
                <option value="other" className="text-black">
                  Other
                </option>
              </select>
              <textarea
                name="message"
                required
                placeholder="Your message"
                className="bg-white/6 border border-white/20 px-4 py-[13px] text-sm text-paper placeholder:text-white/40 w-full mb-[18px] min-h-[120px] resize-y"
              />
              <Button type="submit" variant="blue" disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Send Message"}
              </Button>
              {status === "error" && (
                <p className="mt-3 text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
              <p className="text-[11px] text-white/40 mt-3.5">
                Submissions are routed by reason to the relevant lead —
                Programmes, Partnerships &amp; Communications, or Finance &amp;
                Operations — so you&apos;re not stuck in a shared inbox.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
