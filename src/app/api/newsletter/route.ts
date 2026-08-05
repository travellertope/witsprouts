import { NextRequest, NextResponse } from "next/server";

// TODO: once an email provider is chosen (e.g. Resend), forward signups
// there or to an ESP list instead of just logging them.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (
    !body ||
    typeof body.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
  ) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  const { firstName, lastName, email } = body as {
    firstName?: string;
    lastName?: string;
    email: string;
  };

  console.log("[newsletter] signup:", { firstName, lastName, email });

  return NextResponse.json({ ok: true });
}
