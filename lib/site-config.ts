// Centralise toutes les infos de contact et de marque.
// À MODIFIER avant mise en ligne : numéro WhatsApp, email, ville, SIREN.

export const siteConfig = {
  brand: "LogiRelais",
  tagline: "Accompagnement logistique France ↔ Maroc",
  url: "https://logistique.noschoixpourvous.com",
  email: "contact@logirelais.fr", // TODO
  phone: "+33 6 00 00 00 00", // TODO
  // Numéro WhatsApp au format international, sans "+" ni espaces (ex: 33612345678)
  whatsappNumber: "33600000000", // TODO
  whatsappDefaultMessage:
    "Bonjour, je souhaite faire analyser un flux de marchandises entre la France et le Maroc.",
  address: "France & Maroc", // TODO: préciser les villes si besoin (ex: Lyon / Casablanca)
  linkedin: "", // TODO: URL LinkedIn si disponible
  // Accès au cockpit interne (outil de gestion des dossiers/prestataires).
  // TODO: remplacer par l'URL définitive une fois le cockpit déployé de façon permanente
  // (actuellement un tunnel Cloudflare temporaire vers la machine locale — casse si le
  // tunnel ou la machine s'arrête).
  cockpitUrl: "https://consumer-front-rescue-interstate.trycloudflare.com/login",
};

export const whatsappHref = (message?: string) => {
  const text = encodeURIComponent(message ?? siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
};
