import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

const title = "LogiRelais | Accompagnement logistique France–Maroc";
const description =
  "Besoin d'organiser une expédition, une importation ou une exportation entre la France et le Maroc ? LogiRelais vous aide à clarifier votre besoin et identifier les bons interlocuteurs.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.brand}`,
  },
  description,
  keywords: [
    "logistique France Maroc",
    "transport France Maroc",
    "import export France Maroc",
    "accompagnement import Maroc",
    "accompagnement export Maroc",
    "transport marchandises Maroc France",
    "transitaire France Maroc",
    "expédition France Maroc",
  ],
  authors: [{ name: siteConfig.brand }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-white font-sans text-navy-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
