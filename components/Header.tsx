"use client";

import { useState } from "react";
import { Menu, X, ArrowRight, LogIn } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/5 bg-white/90 backdrop-blur-md">
      <div className="section flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-navy-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-navy-900 text-sm font-bold text-accent-300">
            LR
          </span>
          {siteConfig.brand}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-700 transition-colors hover:text-accent-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.cockpitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 transition-colors hover:text-navy-800"
          >
            <LogIn className="h-4 w-4" />
            Connexion
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white shadow-card transition-colors hover:bg-accent-600"
          >
            Étudier mon prochain envoi
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-navy-900 lg:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-900/5 bg-white lg:hidden">
          <div className="section flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-navy-800 hover:bg-navy-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-4 py-3 text-base font-semibold text-white"
            >
              Étudier mon prochain envoi
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.cockpitUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium text-navy-500"
            >
              <LogIn className="h-4 w-4" />
              Connexion
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
