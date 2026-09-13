import { Mail, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 py-14 text-navy-300">
      <div className="section flex flex-col gap-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <span className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500 text-sm font-bold text-navy-950">
                LR
              </span>
              {siteConfig.brand}
            </span>
            <p className="text-sm leading-relaxed text-navy-400">{siteConfig.tagline}.</p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <a href="#contact" className="flex items-center gap-2 font-semibold text-accent-400 hover:text-accent-300">
              Étudier mon prochain envoi
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-navy-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.brand}. Tous droits réservés.
          </p>
          <p>
            {siteConfig.brand} n&apos;effectue aucune opération de transport ni de dédouanement
            réglementée — nous orientons et coordonnons uniquement.
          </p>
        </div>
      </div>
    </footer>
  );
}
