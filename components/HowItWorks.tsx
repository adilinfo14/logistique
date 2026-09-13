import { ClipboardList, SearchCheck, Users, PackageCheck, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Vous m'expliquez ce que vous devez faire",
    description:
      "Par exemple : « J'ai deux palettes de pièces automobiles à envoyer de Lyon à Casablanca. » ou « Je souhaite importer des produits marocains en France et je ne sais pas comment organiser le transport. »",
  },
  {
    icon: SearchCheck,
    title: "Je regarde avec vous les contraintes du dossier",
    description: "Marchandise, volume, délais, départ, destination, documents disponibles et éventuelles contraintes particulières.",
  },
  {
    icon: Users,
    title: "J'identifie les interlocuteurs nécessaires",
    description: "Selon le dossier : transporteur, transitaire, douane, stockage, livraison locale ou autre spécialiste.",
  },
  {
    icon: PackageCheck,
    title: "Vous disposez d'une solution claire pour avancer",
    description: "Vous savez quels professionnels solliciter, quels documents préparer et quelles étapes suivre.",
  },
];

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="bg-white py-20 sm:py-24">
      <div className="section flex flex-col gap-12">
        <SectionHeading
          kicker="Comment ça marche"
          title="Vous me décrivez votre besoin. On commence par là."
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
