"use client";

import { useState, FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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
    <section className="bg-teal text-paper" id="contact">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] py-20 items-center">
          <div>
            <h2 className="font-bold text-[clamp(26px,3.2vw,36px)] leading-[1.12] tracking-tight">
              Stay Close To The Culture
            </h2>
            <p className="mt-3.5 text-white/65 text-[14.5px] leading-relaxed max-w-[400px]">
              News from The Witsprouts Project — prize updates, programme
              announcements, and stories from across the community.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/witsproutsorg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-xs hover:border-white/60 transition-colors"
              >
                IG
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3.5 mb-3.5">
              <input
                name="firstName"
                required
                type="text"
                placeholder="First name"
                className="bg-white/6 border border-white/20 px-4 py-[13px] text-sm text-paper placeholder:text-white/40"
              />
              <input
                name="lastName"
                required
                type="text"
                placeholder="Last name"
                className="bg-white/6 border border-white/20 px-4 py-[13px] text-sm text-paper placeholder:text-white/40"
              />
            </div>
            <input
              name="email"
              required
              type="email"
              placeholder="Email address"
              className="bg-white/6 border border-white/20 px-4 py-[13px] text-sm text-paper placeholder:text-white/40 w-full mb-[18px]"
            />
            <Button type="submit" variant="blue" disabled={status === "loading"}>
              {status === "loading" ? "Signing Up…" : "Sign Up"}
            </Button>
            {status === "done" && (
              <p className="mt-3 text-sm text-ochre">You&apos;re on the list — thank you.</p>
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
