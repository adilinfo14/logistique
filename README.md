# Relais Logistique — landing page

Landing page Next.js (App Router) + TypeScript + Tailwind pour tester l'activité
de relais logistique France–Maroc. CTA principal : **« Étudier mon prochain envoi »**.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## À faire avant de lancer la prospection

Tout est centralisé dans [`lib/site-config.ts`](./lib/site-config.ts) :

- `whatsappNumber` : numéro WhatsApp réel (format international sans `+`, ex. `33612345678`)
- `phone`, `email`, `address`
- `url` : le nom de domaine réel une fois acheté (utilisé pour le SEO/sitemap)
- `brand` : nom de la marque si "LogiRelais" ne convient pas — c'est un nom provisoire

## Formulaire de contact

Le formulaire (section « Étudier mon prochain envoi ») poste vers
[`app/api/lead/route.ts`](./app/api/lead/route.ts), qui ne fait aujourd'hui
qu'un `console.log`. Avant la mise en prod, brancher un vrai envoi :

- email transactionnel (Resend, Postmark…), ou
- webhook vers un CRM / Airtable / Notion / Google Sheet, ou
- notification Slack/WhatsApp Business API

## Déploiement

Le plus rapide pour démarrer la prospection dès demain : déployer sur
[Vercel](https://vercel.com) (gratuit pour ce trafic) en connectant le repo Git,
puis brancher le nom de domaine.

## Structure

```
app/            routes (page d'accueil, layout, robots/sitemap, API lead)
components/     sections de la page (Hero, Services, ForWho, HowItWorks,
                Differentiation, LeadForm, FAQ, Header, Footer, WhatsAppButton)
lib/            configuration du site (site-config.ts)
```

## Prochaine étape produit

Pas de tarifs affichés pour l'instant — volontaire. Une fois quelques échanges
réels obtenus via ce formulaire, transformer les retours en 2-3 offres
packagées et vendables (voir mémoire projet côté Claude).
