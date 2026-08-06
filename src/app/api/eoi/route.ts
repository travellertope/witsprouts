import { NextRequest, NextResponse } from "next/server";

// TODO: route to the right team inbox (Programmes, Partnerships &
// Communications, or Finance & Operations) once an email provider is wired
// up, and/or persist submissions once a storage backend is chosen.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const { firstName, lastName, email, pathway, message } = body as Record<string, unknown>;

  const required = { firstName, lastName, email, pathway, message };
  const missing = Object.entries(required).filter(([, v]) => !v || typeof v !== "string");
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required field(s): ${missing.map(([k]) => k).join(", ")}` },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  console.log("[eoi] submission:", body);

  return NextResponse.json({ ok: true });
}
