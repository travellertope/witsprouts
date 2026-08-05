"use client";

import { useState, FormEvent } from "react";
import { Container } from "@/components/ui/Container";

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("loading");
    const form = new FormData(formEl);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.get("firstName"),
          lastName: form.get("lastName"),
          email: form.get("email"),
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
    <section className="bg-ink text-paper" id="contact">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] py-[88px] items-center">
          <div>
            <h2 className="font-display font-bold text-[clamp(28px,3.4vw,38px)] leading-[1.08] tracking-tight">
              Stay Close To The Culture
            </h2>
            <p className="mt-4 text-white/68 text-[15px] leading-relaxed max-w-[400px]">
              News from The Witsprouts Project — prize updates, programme
              announcements, and stories from across the community.
            </p>
            <div className="flex gap-3 mt-[26px]">
              {["Instagram", "X", "TikTok"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-[34px] h-[34px] rounded-full border border-white/30 flex items-center justify-center text-[13px]"
                >
                  {label.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3.5 mb-3.5">
              <input
                name="firstName"
                required
                type="text"
                placeholder="First name"
                className="bg-white/6 border border-white/20 rounded-sm px-4 py-3.5 text-sm text-paper placeholder:text-white/40"
              />
              <input
                name="lastName"
                required
                type="text"
                placeholder="Last name"
                className="bg-white/6 border border-white/20 rounded-sm px-4 py-3.5 text-sm text-paper placeholder:text-white/40"
              />
            </div>
            <input
              name="email"
              required
              type="email"
              placeholder="Email address"
              className="bg-white/6 border border-white/20 rounded-sm px-4 py-3.5 text-sm text-paper placeholder:text-white/40 w-full mb-[18px]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] uppercase font-semibold px-6 py-3.5 rounded-full border-[1.5px] border-blue bg-blue text-paper transition-all hover:bg-blue-deep hover:border-blue-deep disabled:opacity-60"
            >
              {status === "loading" ? "Signing Up…" : "Sign Up"}
            </button>
            {status === "done" && (
              <p className="mt-3 text-sm text-blue">You&apos;re on the list — thank you.</p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
            <p className="text-[11px] text-white/40 mt-3.5">
              By signing up, you agree to receive emails from The Witsprouts
              Project. See our <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
