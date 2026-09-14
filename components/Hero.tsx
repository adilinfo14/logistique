import { ArrowRight, MessageCircle, ShieldCheck, Clock3, MapPin } from "lucide-react";
import { whatsappHref } from "@/lib/site-config";
import { LogisticsScene } from "./illustrations";

const TRUST_POINTS = [
  { icon: ShieldCheck, label: "Premier échange sans engagement" },
  { icon: Clock3, label: "Réponse rapide" },
  { icon: MapPin, label: "Accompagnement France ↔ Maroc" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-route-pattern opacity-60" />
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-base font-semibold text-white shadow-card transition-colors hover:bg-accent-600"
            >
              Étudier mon prochain envoi
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
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
          <div className="relative w-full max-w-md rounded-[2.5rem_1.25rem_2.5rem_1.25rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-sm sm:p-7">
            <LogisticsScene className="w-full" />
            <div className="mt-4 flex items-center justify-between px-2 text-xs font-semibold uppercase tracking-wide text-navy-300">
              <span>Port &amp; route</span>
              <span className="text-accent-300">Votre relais, bout en bout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
