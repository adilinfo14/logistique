"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    question: "Est-ce que vous êtes transporteur ?",
    answer:
      "Non. Je vous aide à analyser votre besoin et à identifier les professionnels adaptés. Le transport est réalisé directement par les opérateurs habilités.",
  },
  {
    question: "Pouvez-vous m'aider si c'est ma première importation ou exportation ?",
    answer:
      "Oui. C'est même l'un des cas où cet accompagnement peut être le plus utile : nous reprenons les différentes étapes ensemble.",
  },
  {
    question: "Pouvez-vous trouver un transporteur pour moi ?",
    answer:
      "Je peux rechercher dans mon réseau et auprès de professionnels correspondant aux caractéristiques de votre flux.",
  },
  {
    question: "Pouvez-vous effectuer mon dédouanement ?",
    answer:
      "Les opérations réglementées de dédouanement sont réalisées par les professionnels habilités. Je peux en revanche vous aider à identifier le bon interlocuteur et à préparer votre dossier avec lui.",
  },
  {
    question: "Travaillez-vous uniquement avec des flux importants ?",
    answer:
      "Non. Les besoins ponctuels, premiers envois et petits volumes peuvent également être étudiés.",
  },
  {
    question: "Combien coûte votre accompagnement ?",
    answer:
      "Le premier échange permet d'abord d'évaluer le besoin. Si un accompagnement est nécessaire, son périmètre et son tarif sont définis avant de commencer.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="section flex flex-col gap-12">
        <SectionHeading kicker="Questions fréquentes" title="Ce que vous devez savoir avant de démarrer" />

        <div className="mx-auto flex w-full max-w-3xl flex-col divide-y divide-navy-900/8 rounded-2xl border border-navy-900/8">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-navy-900 sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-navy-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-navy-600 sm:px-6">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
