import { Building2, ShoppingCart, Ship, Globe2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const TARGETS = [
  {
    icon: Building2,
    title: "PME et TPE",
    description:
      "Vous devez envoyer ou recevoir des marchandises entre la France et le Maroc sans disposer d'une équipe logistique dédiée.",
  },
  {
    icon: ShoppingCart,
    title: "Entrepreneurs et e-commerçants",
    description:
      "Vous démarrez vos premiers flux et avez besoin de comprendre comment organiser correctement une expédition.",
  },
  {
    icon: Ship,
    title: "Importateurs et exportateurs",
    description:
      "Vous avez déjà une activité et cherchez un nouvel interlocuteur, un nouvel axe ou une solution pour un besoin particulier.",
  },
  {
    icon: Globe2,
    title: "Entreprises qui testent le marché marocain ou français",
    description:
      "Vous avez une première opération à réaliser et souhaitez sécuriser les étapes avant de vous engager.",
  },
];

export default function ForWho() {
  return (
    <section id="pour-qui" className="bg-navy-50 py-20 sm:py-24">
      <div className="section flex flex-col gap-12">
        <SectionHeading
          kicker="Pour qui"
          title="Vous échangez avec le Maroc et la logistique n'est pas votre métier ?"
          description="C'est précisément là que je peux intervenir."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TARGETS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-3xl bg-white p-7 shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-semibold text-navy-900">{title}</h3>
              <p className="text-sm leading-relaxed text-navy-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
