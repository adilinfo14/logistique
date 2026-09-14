"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, ArrowRight, BadgeCheck } from "lucide-react";

const CE_QUE_JE_REGARDE = [
  "La faisabilité de votre flux",
  "Les professionnels qu'il faudra probablement solliciter",
  "Les principales étapes",
  "Les points à vérifier avant de lancer l'expédition",
];

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-navy-50 py-20 sm:py-24">
      <div className="section grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
            <BadgeCheck className="h-3.5 w-3.5" />
            Premier échange offert
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Vous avez une opération France–Maroc en préparation ?
          </h2>
          <p className="max-w-md text-base leading-relaxed text-navy-600 sm:text-lg">
            Décrivez-moi simplement votre besoin. Je regarde avec vous :
          </p>

          <ul className="flex flex-col gap-3">
            {CE_QUE_JE_REGARDE.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-navy-800">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-500" />
                {item}
              </li>
            ))}
          </ul>

          <p className="max-w-md text-sm leading-relaxed text-navy-500">
            L&apos;objectif est d&apos;abord de comprendre votre dossier et de voir si je peux
            réellement vous être utile.
          </p>
        </div>

        <div className="rounded-[2rem] border border-navy-900/8 bg-white p-6 shadow-card sm:p-8">
          {status === "success" ? (
            <SuccessState onReset={() => setStatus("idle")} />
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Ville / pays de départ" htmlFor="depart">
                  <input
                    id="depart"
                    name="depart"
                    required
                    placeholder="Ex : Lyon, France"
                    className={inputClass}
                  />
                </Field>
                <Field label="Ville / pays de destination" htmlFor="destination">
                  <input
                    id="destination"
                    name="destination"
                    required
                    placeholder="Ex : Casablanca, Maroc"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Type de marchandise" htmlFor="marchandise">
                  <input
                    id="marchandise"
                    name="marchandise"
                    required
                    placeholder="Ex : pièces automobiles, textile…"
                    className={inputClass}
                  />
                </Field>
                <Field label="Volume approximatif" htmlFor="volume">
                  <input
                    id="volume"
                    name="volume"
                    required
                    placeholder="Ex : 2 palettes"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Poids approximatif" htmlFor="poids">
                  <input id="poids" name="poids" placeholder="Ex : 300 kg" className={inputClass} />
                </Field>
                <Field label="Date souhaitée" htmlFor="date_souhaitee">
                  <input id="date_souhaitee" name="date_souhaitee" type="date" className={inputClass} />
                </Field>
              </div>

              <Field label="Flux ponctuel ou régulier" htmlFor="frequence">
                <select id="frequence" name="frequence" required className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Sélectionnez…
                  </option>
                  <option value="ponctuel">Ponctuel</option>
                  <option value="regulier">Régulier</option>
                </select>
              </Field>

              <Field label="Décrivez simplement ce que vous cherchez à faire" htmlFor="description">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Exemple : Je dois envoyer deux palettes de matériel depuis Lyon vers Casablanca avant le 15 octobre et je ne sais pas encore quel type de transport choisir."
                  className={inputClass}
                />
              </Field>

              <div className="h-px w-full bg-navy-900/8" />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Nom" htmlFor="nom">
                  <input id="nom" name="nom" required autoComplete="name" className={inputClass} />
                </Field>
                <Field label="Société" htmlFor="entreprise">
                  <input id="entreprise" name="entreprise" required autoComplete="organization" className={inputClass} />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Téléphone / WhatsApp" htmlFor="telephone">
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-base font-semibold text-white shadow-card transition-colors hover:bg-accent-600 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    Étudier mon prochain envoi
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                  Une erreur est survenue. Vous pouvez aussi m&apos;écrire directement sur WhatsApp.
                </p>
              )}

              <p className="text-xs text-navy-400">
                Vos données servent uniquement à traiter votre demande et ne sont jamais revendues.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-navy-900/12 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-navy-800">
        {label}
      </label>
      {children}
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-start gap-4 py-8">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600">
        <CheckCircle2 className="h-6 w-6" />
      </span>
      <h3 className="font-display text-xl font-semibold text-navy-900">Demande bien reçue</h3>
      <p className="text-sm leading-relaxed text-navy-600">
        Merci, je reviens vers vous rapidement pour un premier échange sur votre dossier.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="text-sm font-semibold text-accent-600 hover:text-accent-700"
      >
        Envoyer une autre demande
      </button>
    </div>
  );
}
