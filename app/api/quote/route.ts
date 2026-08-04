import { NextResponse } from "next/server";

type QuotePayload = {
  nom?: unknown;
  email?: unknown;
  tel?: unknown;
  service?: unknown;
  volume?: unknown;
  message?: unknown;
  website?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return NextResponse.json({ error: "payload too large" }, { status: 413 });
  }

  let payload: QuotePayload;
  try {
    payload = (await req.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  // Champ invisible : les robots le remplissent souvent. On leur répond sans envoyer d'e-mail.
  if (text(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const data = {
    nom: text(payload.nom),
    email: text(payload.email),
    tel: text(payload.tel),
    service: text(payload.service),
    volume: text(payload.volume),
    message: text(payload.message),
  };

  const invalid =
    !data.nom ||
    data.nom.length > 120 ||
    !EMAIL_PATTERN.test(data.email) ||
    data.email.length > 254 ||
    !data.service ||
    data.service.length > 120 ||
    data.tel.length > 40 ||
    data.volume.length > 120 ||
    !data.message ||
    data.message.length > 5_000;

  if (invalid) {
    return NextResponse.json({ error: "invalid fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || "Assist'Ann <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Resend is not configured: RESEND_API_KEY and RESEND_TO_EMAIL are required.");
    return NextResponse.json({ error: "email service unavailable" }, { status: 500 });
  }

  const emailText = [
    "Nouvelle demande de devis depuis assistann.com",
    "",
    `Nom : ${data.nom}`,
    `E-mail : ${data.email}`,
    `Téléphone : ${data.tel || "Non renseigné"}`,
    `Service : ${data.service}`,
    `Volume : ${data.volume || "Non renseigné"}`,
    "",
    "Message :",
    data.message,
  ].join("\n");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Nouvelle demande de devis — ${data.nom.replace(/[\r\n]+/g, " ")}`,
        text: emailText,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("Resend rejected the quote email:", resendResponse.status, resendError);
      return NextResponse.json({ error: "email send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unable to reach Resend:", error);
    return NextResponse.json({ error: "email send failed" }, { status: 502 });
  }
}
