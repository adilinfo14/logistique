import { Ship } from "lucide-react";
import { EiffelTowerIcon, MoroccanArchIcon } from "./illustrations";

export default function FranceMarocFresque() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="section flex flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:items-stretch">
        <FresquePanel
          country="France"
          subtitle="Départ ou destination"
          icon={<EiffelTowerIcon className="h-32 w-32 text-white/90 sm:h-40 sm:w-40" />}
          accentClassName="bg-navy-900"
          ribbon
        />

        <div className="flex shrink-0 flex-row items-center gap-2 lg:flex-col lg:gap-3">
          <span className="hidden h-px w-10 bg-navy-200 lg:block lg:h-10 lg:w-px" />
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white shadow-card">
            <Ship className="h-5 w-5" />
          </span>
          <span className="hidden h-px w-10 bg-navy-200 lg:block lg:h-10 lg:w-px" />
        </div>

        <FresquePanel
          country="Maroc"
          subtitle="Départ ou destination"
          icon={<MoroccanArchIcon className="h-32 w-32 text-white/90 sm:h-40 sm:w-40" />}
          accentClassName="bg-navy-800"
          zellige
        />
      </div>
    </section>
  );
}

function FresquePanel({
  country,
  subtitle,
  icon,
  accentClassName,
  ribbon = false,
  zellige = false,
}: {
  country: string;
  subtitle: string;
  icon: React.ReactNode;
  accentClassName: string;
  ribbon?: boolean;
  zellige?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden rounded-[2.5rem] ${accentClassName} px-8 py-10 text-center sm:py-14`}
    >
      {zellige && (
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 18px), repeating-linear-gradient(-45deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 18px)",
            color: "#fff",
          }}
          aria-hidden
        />
      )}
      {!zellige && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.12), transparent 60%)",
          }}
          aria-hidden
        />
      )}

      <div className="relative">{icon}</div>
      <div className="relative flex flex-col gap-1">
        <span className="font-display text-2xl font-bold text-white">{country}</span>
        <span className="text-xs uppercase tracking-[0.16em] text-navy-300">{subtitle}</span>
      </div>

      {ribbon && (
        <div className="absolute inset-x-0 bottom-0 flex h-2">
          <span className="flex-1 bg-[#274b8f]" />
          <span className="flex-1 bg-white" />
          <span className="flex-1 bg-[#c8102e]" />
        </div>
      )}
    </div>
  );
}
