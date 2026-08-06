"use client";

import { useState, FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";

const fieldClass =
  "w-full bg-paper border border-line px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft/60 focus:outline-none focus:border-blue transition-colors";
const labelClass = "block text-[11px] tracking-[0.05em] uppercase font-bold text-ink-soft mb-2";

export function NominationForm() {
  const [selfNominate, setSelfNominate] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const form = new FormData(e.currentTarget);
    const payload = {
      nominatorName: form.get("nominatorName"),
      nominatorEmail: form.get("nominatorEmail"),
      selfNominate,
      storytellerName: selfNominate ? form.get("nominatorName") : form.get("storytellerName"),
      storytellerContact: form.get("storytellerContact"),
      medium: form.get("medium"),
      workLink: form.get("workLink"),
      reason: form.get("reason"),
    };

    try {
      const res = await fetch("/api/nominate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Request failed");
      }
      setStatus("done");
      setSelfNominate(false);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <section className="py-[88px]" id="nominate-form">
        <Container narrow>
          <div className="text-center border border-line p-12">
            <div className="text-[11px] tracking-[0.08em] uppercase font-bold text-blue mb-3">
              Nomination Received
            </div>
            <h2 className="text-2xl font-extrabold mb-3">Thank you.</h2>
            <p className="text-ink-soft max-w-[440px] mx-auto">
              We&apos;ve received the nomination and will follow up with
              shortlisted storytellers directly. Nominations close September
              30, 2026.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-[88px]" id="nominate-form">
      <Container narrow>
        <SectionHead
          eyebrow="Submit A Nomination"
          title="Nominate A Storyteller"
          align="center"
          compact
          description="Fill this out for someone else, or for yourself — nominations close September 30, 2026."
        />

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="flex items-center gap-2.5 text-sm font-medium mb-2">
            <input
              type="checkbox"
              checked={selfNominate}
              onChange={(e) => setSelfNominate(e.target.checked)}
              className="w-4 h-4 accent-blue"
            />
            I&apos;m nominating myself
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass} htmlFor="nominatorName">
                Your Name
              </label>
              <input id="nominatorName" name="nominatorName" required className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="nominatorEmail">
                Your Email
              </label>
              <input
                id="nominatorEmail"
                name="nominatorEmail"
                type="email"
                required
                className={fieldClass}
              />
            </div>
          </div>

          {!selfNominate && (
            <div>
              <label className={labelClass} htmlFor="storytellerName">
                Storyteller&apos;s Name
              </label>
              <input
                id="storytellerName"
                name="storytellerName"
                required={!selfNominate}
                className={fieldClass}
              />
            </div>
          )}

          <div>
            <label className={labelClass} htmlFor="storytellerContact">
              Storyteller&apos;s Email or Social Handle
            </label>
            <input
              id="storytellerContact"
              name="storytellerContact"
              required
              className={fieldClass}
              placeholder="@handle or email address"
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="medium">
              Form Of Storytelling
            </label>
            <select id="medium" name="medium" required className={fieldClass}>
              <option value="">Select one…</option>
              <option value="oral-performance">Oral performance / spoken word</option>
              <option value="podcast">Podcast</option>
              <option value="animation">Animation</option>
              <option value="audio-drama">Audio drama</option>
              <option value="video">Video / theatrical performance</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="workLink">
              Link To Their Work
            </label>
            <input
              id="workLink"
              name="workLink"
              type="url"
              required
              className={fieldClass}
              placeholder="https://…"
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="reason">
              Why Do They Deserve To Be Nominated?
            </label>
            <textarea
              id="reason"
              name="reason"
              required
              rows={5}
              className={fieldClass}
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-600">{errorMsg}</p>
          )}

          <Button type="submit" variant="blue" disabled={status === "loading"}>
            {status === "loading" ? "Submitting…" : "Submit Nomination →"}
          </Button>
        </form>
      </Container>
    </section>
  );
}
