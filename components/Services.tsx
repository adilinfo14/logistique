import { Compass, Network, FileCheck2, Radar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    icon: Compass,
    title: "Diagnostic logistique de flux",
    description:
      "Nous analysons votre flux France–Maroc (volumes, nature des marchandises, contraintes) et identifions la solution logistique la plus pertinente.",
  },
  {
    icon: Network,
    title: "Recherche & mise en relation transporteurs",
    description:
      "Nous mobilisons notre réseau pour vous mettre en relation avec des transporteurs adaptés à votre trafic — sans engagement de notre part sur le transport.",
  },
  {
    icon: FileCheck2,
    title: "Assistance documentaire import-export",
    description:
      "Nous vous accompagnons dans la préparation et la vérification de vos documents douaniers et commerciaux, pour fluidifier vos passages en douane.",
  },
  {
    icon: Radar,
    title: "Coordination & suivi d'expédition",
    description:
      "Un interlocuteur unique qui coordonne les intervenants et suit votre expédition de bout en bout, jusqu'à la livraison finale.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="section flex flex-col gap-12">
        <SectionHeading
          kicker="Ce que nous faisons"
          title="Un relais logistique, pas un transporteur de plus"
          description="Nous ne possédons ni camions ni entrepôts : notre valeur, c'est de structurer, sécuriser et coordonner vos flux France–Maroc en s'appuyant sur les bons partenaires."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-accent-300 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-navy-900">{title}</h3>
              <p className="text-sm leading-relaxed text-navy-600">{description}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-navy-500">
          Ces prestations ne constituent ni du transport, ni du commissionnaire en douane, ni
          toute autre opération réglementée : nous orientons et coordonnons, les opérateurs
          agréés exécutent.
        </p>
      </div>
    </section>
  );
}
