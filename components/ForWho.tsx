import { Building2, ShoppingCart, Ship } from "lucide-react";
import SectionHeading from "./SectionHeading";

const TARGETS = [
  {
    icon: Building2,
    title: "PME",
    description:
      "Vous développez des échanges avec le Maroc mais n'avez pas de service logistique dédié en interne.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerçants",
    description:
      "Vous sourcez ou expédiez des produits entre les deux pays et cherchez à fiabiliser vos délais et vos coûts.",
  },
  {
    icon: Ship,
    title: "Importateurs-exportateurs",
    description:
      "Vous gérez déjà des flux réguliers et voulez un relais fiable pour sécuriser un nouveau trafic ou un nouveau partenaire.",
  },
];

export default function ForWho() {
  return (
    <section id="pour-qui" className="bg-navy-50 py-20 sm:py-24">
      <div className="section flex flex-col gap-12">
        <SectionHeading
          kicker="Pour qui"
          title="Conçu pour les entreprises qui échangent avec le Maroc"
          description="Que vous démarriez un premier flux ou cherchiez à sécuriser un trafic existant, nous nous adaptons à votre niveau de maturité logistique."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TARGETS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl bg-white p-7 shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
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
