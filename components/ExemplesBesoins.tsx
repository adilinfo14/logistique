import { Quote, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const EXEMPLES = [
  {
    citation: "Je dois envoyer trois palettes de Lyon à Casablanca.",
    reponse: "Je vous aide à identifier le mode de transport et les prestataires adaptés.",
  },
  {
    citation: "C'est ma première importation depuis le Maroc.",
    reponse: "Nous reprenons ensemble les différentes étapes et les interlocuteurs à prévoir.",
  },
  {
    citation: "Mon transporteur habituel ne dessert pas cette destination.",
    reponse: "Je recherche d'autres solutions correspondant au flux.",
  },
  {
    citation: "Je ne sais pas si mon dossier documentaire est complet.",
    reponse:
      "Nous identifions les documents nécessaires et le professionnel compétent lorsque l'intervention d'un spécialiste est requise.",
  },
];

export default function ExemplesBesoins() {
  return (
    <section className="bg-navy-50 py-20 sm:py-24">
      <div className="section flex flex-col gap-12">
        <SectionHeading kicker="Concrètement" title="Quelques exemples de besoins" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {EXEMPLES.map(({ citation, reponse }) => (
            <div key={citation} className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card">
              <div className="flex items-start gap-3">
                <Quote className="mt-0.5 h-5 w-5 shrink-0 text-navy-300" />
                <p className="font-display text-base font-semibold italic text-navy-900">
                  « {citation} »
                </p>
              </div>
              <div className="flex items-start gap-3 border-t border-navy-900/8 pt-4">
                <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                <p className="text-sm leading-relaxed text-navy-600">{reponse}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
