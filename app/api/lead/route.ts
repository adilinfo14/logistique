import { NextResponse } from "next/server";

// Stub de réception du formulaire "Étudier mon prochain envoi".
// TODO avant mise en prod : brancher un vrai envoi (email transactionnel,
// webhook CRM, Airtable, Notion, Google Sheet…) à la place du simple log.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Corps de requête invalide" }, { status: 400 });
  }

  const required = ["depart", "destination", "marchandise", "volume", "frequence", "nom", "entreprise", "email", "telephone"];
  const missing = required.filter((key) => !body[key]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Champs manquants : ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  // eslint-disable-next-line no-console
  console.log("[lead] Nouvelle demande de diagnostic :", body);

  return NextResponse.json({ ok: true });
}
