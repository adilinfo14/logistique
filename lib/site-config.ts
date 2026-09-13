// Centralise toutes les infos de contact et de marque.
// À MODIFIER avant mise en ligne : numéro WhatsApp, email, ville, SIREN.

export const siteConfig = {
  brand: "LogiRelais",
  tagline: "Votre relais logistique entre la France et le Maroc",
  url: "https://www.logirelais.fr", // TODO: remplacer par le domaine réel
  email: "contact@logirelais.fr", // TODO
  phone: "+33 6 00 00 00 00", // TODO
  // Numéro WhatsApp au format international, sans "+" ni espaces (ex: 33612345678)
  whatsappNumber: "33600000000", // TODO
  whatsappDefaultMessage:
    "Bonjour, je souhaite faire analyser un flux de marchandises entre la France et le Maroc.",
  address: "France & Maroc", // TODO: préciser les villes si besoin (ex: Lyon / Casablanca)
  linkedin: "", // TODO: URL LinkedIn si disponible
};

export const whatsappHref = (message?: string) => {
  const text = encodeURIComponent(message ?? siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
};
