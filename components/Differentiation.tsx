import { MapPinned, Search, TrendingUp, HeadphonesIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

const POINTS = [
  {
    icon: MapPinned,
    title: "Une approche terrain",
    description:
      "Je viens de l'univers du transport et de la logistique. Mon objectif est de partir de votre problème concret, pas de vous vendre une solution standard.",
  },
  {
    icon: Search,
    title: "Une recherche adaptée à votre dossier",
    description:
      "Chaque flux est différent. Le bon prestataire pour une palette Lyon–Casablanca n'est pas forcément le bon pour un produit alimentaire, une urgence ou un conteneur.",
  },
  {
    icon: TrendingUp,
    title: "Un réseau qui se construit et se qualifie",
    description:
      "Je développe progressivement un réseau de professionnels en France et au Maroc en fonction des besoins rencontrés et des collaborations réalisées.",
  },
  {
    icon: HeadphonesIcon,
    title: "Un interlocuteur accessible",
    description:
      "Vous savez avec qui vous échangez et vous pouvez revenir vers la même personne lorsque votre besoin évolue.",
  },
];

export default function Differentiation() {
  return (
    <section className="bg-navy-900 py-20 sm:py-24">
      <div className="section flex flex-col gap-12">
        <SectionHeading
          kicker="Pourquoi moi"
          title="Un interlocuteur pour vous aider à y voir clair"
          light
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {POINTS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300">
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-base font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-navy-200">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
