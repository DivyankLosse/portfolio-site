import { NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "chinmaykhewale2005@gmail.com";

// Resend's shared sender. Works with no domain setup; swap for an address on
// your own verified domain once you have one.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

const LIMITS = { name: 100, email: 200, message: 5000 };

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  const clean = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };

  if (!clean.name || !clean.email || !clean.message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  if (!isEmail(clean.email)) {
    return NextResponse.json({ error: "That email address does not look valid." }, { status: 400 });
  }

  // ponytail: length caps only, no rate limiter. Add one (Upstash, or Vercel's
  // firewall rules) if the form starts attracting bots.
  if (
    clean.name.length > LIMITS.name ||
    clean.email.length > LIMITS.email ||
    clean.message.length > LIMITS.message
  ) {
    return NextResponse.json({ error: "That message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No mail provider configured. Say so plainly so the UI can offer the
    // mailto fallback, rather than reporting a success that never happened.
    return NextResponse.json({ error: "Email delivery is not configured." }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: clean.email,
        subject: `Portfolio enquiry from ${clean.name}`,
        text: `From: ${clean.name} <${clean.email}>\n\n${clean.message}`,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", res.status, await res.text());
      return NextResponse.json({ error: "Could not send the message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Could not send the message." }, { status: 502 });
  }
}
