import { Compass, Network, FileCheck2, Radar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    icon: Compass,
    title: "Comprendre votre besoin",
    description:
      "Nature de la marchandise, volume, destination, délai, fréquence, contraintes particulières : nous faisons d'abord le point sur votre flux.",
  },
  {
    icon: Network,
    title: "Identifier les bons interlocuteurs",
    description:
      "Transporteur, transitaire, spécialiste douane, stockage ou livraison locale : je recherche les professionnels correspondant à votre besoin.",
  },
  {
    icon: FileCheck2,
    title: "Préparer votre dossier",
    description:
      "Je vous aide à identifier les documents et informations nécessaires pour éviter les mauvaises surprises au moment de l'expédition.",
  },
  {
    icon: Radar,
    title: "Garder une vision claire du dossier",
    description:
      "Lorsque plusieurs intervenants sont nécessaires, je vous aide à suivre les différentes étapes et à savoir qui fait quoi.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="section flex flex-col gap-12">
        <SectionHeading
          kicker="Ma méthode"
          title="Un besoin logistique commence rarement par un camion"
          description="Avant de chercher un transporteur, il faut comprendre ce que vous envoyez, où, dans quelles conditions et avec quels documents. Mon rôle est de vous aider à poser le dossier correctement, puis à identifier les professionnels capables de prendre en charge chaque étape."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 rounded-3xl border border-navy-900/8 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-900 text-accent-300 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-navy-900">{title}</h3>
              <p className="text-sm leading-relaxed text-navy-600">{description}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-navy-500">
          Les opérations de transport, de transit et de dédouanement sont réalisées par les
          professionnels habilités concernés.
        </p>
      </div>
    </section>
  );
}
