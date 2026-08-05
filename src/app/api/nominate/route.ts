import { NextRequest, NextResponse } from "next/server";

// TODO: forward nominations to email (e.g. Resend) and/or persist them
// once a storage backend is chosen.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const {
    nominatorName,
    nominatorEmail,
    storytellerName,
    storytellerContact,
    medium,
    workLink,
    reason,
  } = body as Record<string, unknown>;

  const required = { nominatorName, nominatorEmail, storytellerName, storytellerContact, medium, workLink, reason };
  const missing = Object.entries(required).filter(([, v]) => !v || typeof v !== "string");
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required field(s): ${missing.map(([k]) => k).join(", ")}` },
      { status: 400 },
    );
  }

  if (typeof nominatorEmail !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nominatorEmail)) {
    return NextResponse.json({ error: "A valid nominator email is required." }, { status: 400 });
  }

  console.log("[nominate] submission:", body);

  return NextResponse.json({ ok: true });
}
