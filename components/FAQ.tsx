"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    question: "Assurez-vous vous-même le transport des marchandises ?",
    answer:
      "Non. Nous ne sommes pas transporteur : nous diagnostiquons votre flux et vous mettons en relation avec des transporteurs adaptés. Le transport physique est toujours réalisé par des opérateurs agréés, jamais par nous.",
  },
  {
    question: "Réalisez-vous les formalités douanières à ma place ?",
    answer:
      "Nous vous assistons dans la préparation et la vérification de vos documents import-export, mais les opérations de dédouanement réglementées relèvent de commissionnaires en douane agréés. Nous vous orientons vers les bons interlocuteurs si nécessaire.",
  },
  {
    question: "Le premier diagnostic est-il vraiment gratuit ?",
    answer:
      "Oui. La première analyse de votre flux (faisabilité, pistes de transporteurs, points d'attention) est offerte et sans engagement.",
  },
  {
    question: "Travaillez-vous avec les petites structures ou seulement les grands comptes ?",
    answer:
      "Nous accompagnons aussi bien des PME et e-commerçants qui démarrent un premier flux que des importateurs-exportateurs avec des trafics réguliers.",
  },
  {
    question: "Sous quel délai ai-je une réponse après ma demande ?",
    answer:
      "Nous revenons vers vous sous 48h ouvrées avec un premier retour concret sur votre demande.",
  },
  {
    question: "Mes informations commerciales restent-elles confidentielles ?",
    answer:
      "Oui. Les informations que vous nous transmettez servent uniquement à traiter votre demande et ne sont jamais partagées ou revendues à des tiers.",
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
