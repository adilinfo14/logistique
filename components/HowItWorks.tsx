import { ClipboardList, SearchCheck, FileStack, PackageCheck, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Vous décrivez votre flux",
    description: "Marchandise, volume, fréquence et sens du trafic via notre formulaire ou WhatsApp.",
  },
  {
    icon: SearchCheck,
    title: "Diagnostic personnalisé",
    description: "Nous étudions votre besoin et revenons vers vous sous 48h avec les options possibles.",
  },
  {
    icon: FileStack,
    title: "Mise en relation & documents",
    description: "Transporteur adapté identifié et dossier documentaire import-export préparé avec vous.",
  },
  {
    icon: PackageCheck,
    title: "Suivi jusqu'à livraison",
    description: "Nous coordonnons les intervenants et vous tenons informé jusqu'à réception.",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="bg-white py-20 sm:py-24">
      <div className="section flex flex-col gap-12">
        <SectionHeading
          kicker="Comment ça marche"
          title="Quatre étapes, un seul interlocuteur"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-base font-bold text-accent-300">
                  {i + 1}
                </span>
                <Icon className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-900">{title}</h3>
              <p className="text-sm leading-relaxed text-navy-600">{description}</p>

              {i < STEPS.length - 1 && (
                <ArrowRight className="absolute right-[-28px] top-3 hidden h-5 w-5 text-navy-200 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
