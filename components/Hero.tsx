import { ArrowRight, MessageCircle, ShieldCheck, Clock3, MapPin } from "lucide-react";
import { whatsappHref } from "@/lib/site-config";

const TRUST_POINTS = [
  { icon: ShieldCheck, label: "Premier échange sans engagement" },
  { icon: Clock3, label: "Réponse rapide" },
  { icon: MapPin, label: "Accompagnement France ↔ Maroc" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-40" />
      <div
        className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-accent-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] h-[360px] w-[360px] rounded-full bg-navy-500/30 blur-3xl"
        aria-hidden
      />

      <div className="section relative flex flex-col gap-12 py-20 sm:py-24 lg:flex-row lg:items-center lg:py-28">
        <div className="flex flex-1 flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
            France ⇄ Maroc
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            Vous avez un flux entre la France et le Maroc ?
            <br />
            Je vous aide à trouver la bonne façon de le gérer.
          </h1>

          <p className="max-w-xl text-lg text-navy-200 sm:text-xl">
            Transport, documents, douane, interlocuteurs : je vous aide à clarifier votre besoin,
            identifier les bons professionnels et avancer avec une solution adaptée à votre
            situation.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3.5 text-base font-semibold text-white shadow-card transition-colors hover:bg-accent-600"
            >
              Étudier mon prochain envoi
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" />
              Me parler de mon besoin sur WhatsApp
            </a>
          </div>

          <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-2.5">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                <dt className="text-sm text-navy-200">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <RouteDiagram />
        </div>
      </div>
    </section>
  );
}

function RouteDiagram() {
  return (
    <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
      <div className="flex items-center justify-between">
        <CityBadge label="France" sub="Départ" />
        <CityBadge label="Maroc" sub="Arrivée" align="right" />
      </div>

      <div className="relative my-8 h-px w-full bg-white/15">
        <div className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent-400" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent-400 bg-navy-900" />
        <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent-400" />
        <span className="absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide text-accent-300">
          Votre relais
        </span>
      </div>

      <div className="space-y-3">
        {[
          "Diagnostic de votre flux",
          "Transporteur adapté identifié",
          "Documents import-export prêts",
          "Suivi jusqu'à livraison",
        ].map((step, i) => (
          <div key={step} className="flex items-center gap-3 rounded-lg bg-white/5 px-3.5 py-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-xs font-bold text-accent-300">
              {i + 1}
            </span>
            <span className="text-sm text-navy-100">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CityBadge({
  label,
  sub,
  align = "left",
}: {
  label: string;
  sub: string;
  align?: "left" | "right";
}) {
  return (
    <div className={`flex flex-col ${align === "right" ? "items-end text-right" : "items-start"}`}>
      <span className="text-xs uppercase tracking-wide text-navy-300">{sub}</span>
      <span className="font-display text-lg font-bold text-white">{label}</span>
    </div>
  );
}
