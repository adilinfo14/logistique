import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

const title = "Relais logistique France–Maroc | Diagnostic, transporteurs, suivi";
const description =
  "Diagnostic de vos flux France–Maroc, mise en relation avec des transporteurs adaptés, assistance documentaire import-export et suivi d'expédition. Étudiez votre prochain envoi gratuitement.";

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
    "import export Maroc",
    "transitaire Maroc",
    "diagnostic logistique",
    "douane import export",
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
