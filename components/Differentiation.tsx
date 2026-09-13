import { Users, MapPinned, Scale, HeadphonesIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

const POINTS = [
  {
    icon: MapPinned,
    title: "Une double culture terrain",
    description:
      "Une connaissance concrète des pratiques de transport et de douane des deux côtés de la Méditerranée, pas seulement de la théorie.",
  },
  {
    icon: Users,
    title: "Un réseau construit sur la confiance",
    description:
      "Des transporteurs et partenaires sélectionnés au fil des collaborations, pas au premier annuaire venu.",
  },
  {
    icon: Scale,
    title: "Aucun conflit d'intérêt",
    description:
      "Sans camions ni flotte à remplir, nous choisissons le transporteur le plus adapté à vous, pas le plus pratique pour nous.",
  },
  {
    icon: HeadphonesIcon,
    title: "Un accompagnement personnalisé",
    description:
      "Un interlocuteur unique qui connaît votre dossier, du premier échange jusqu'à la livraison.",
  },
];

export default function Differentiation() {
  return (
    <section className="bg-navy-900 py-20 sm:py-24">
      <div className="section flex flex-col gap-12">
        <SectionHeading
          kicker="Pourquoi nous"
          title="La proximité d'un réseau, la rigueur d'un accompagnement"
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
