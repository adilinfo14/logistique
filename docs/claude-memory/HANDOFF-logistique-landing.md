# HANDOFF — Landing page « Relais logistique France–Maroc » (site vitrine)

Rédigé le 2026-09-26. Sources : journal de session 2026-09-13 → 2026-09-14, README et `git log` du dépôt local, vérification en lecture seule du VPS IONOS. Aucun secret dans ce document.

## 1. But du projet & contexte

- **Pour qui** : Adil Tsouli Kamal (TKonsulting, Lyon). Il est salarié dans le transport et a des bases en douane et logistique. Il veut tester, sans camions ni infra lourde, une activité de services logistiques entre la France et le Maroc.
- **Objet** : landing page B2B de prospection. Positionnement « votre relais logistique entre la France et le Maroc ». Cibles : PME, e-commerçants, importateurs-exportateurs.
- **Règle métier** : le site ne prétend JAMAIS faire lui-même le transport, ni des opérations réglementées (commissionnaire, représentant en douane). Il fait du diagnostic, de la mise en relation avec des transporteurs, de l'assistance documentaire et de la coordination/suivi. Ne pas casser ce ton dans les textes.
- **CTA principal** : « Étudier mon prochain envoi ». Pas de tarifs affichés, volontairement : après quelques échanges réels, transformer les retours en 2-3 offres vendables.
- **Design** : premium B2B sobre, bleu nuit / blanc / accent turquoise, mobile first, formes arrondies.
- **Projet lié (séparé)** : un « cockpit logistique » (outil interne mono-utilisateur) est servi sur le MÊME domaine (`/login`). Ce n'est pas la landing page, mais il partage le vhost nginx et le lien « Connexion » du header. Voir sections 3 et 5.

## 2. État au 2026-09-26

**LIVRÉ et en ligne**
- Site vitrine : https://logistique.noschoixpourvous.com/ (HTTP 200 vérifié le 2026-09-26). Attention à l'orthographe : le domaine est `noschoixpour**v**ous.com`. Une variante « noschoixpournous » a été écrite par erreur dans une consigne : elle est fausse.
- Sections : Header sticky (avec lien « Connexion » vers `/login`), Hero, fresques France/Maroc, Services (4 cartes), Pour qui, Comment ça marche (4 étapes), Différenciation, Exemples de besoins, formulaire « Étudier mon prochain envoi », FAQ, bouton WhatsApp flottant, Footer. Plus SEO de base (métadonnées, `robots.ts`, `sitemap.ts`).
- Ton et contenu retravaillés le 2026-09-13 (plus humain, moins « IA générique »). Le champ « sens » du formulaire a été remplacé par départ/destination. La route API valide les champs `depart, destination, marchandise, volume, frequence, nom, entreprise, email, telephone`.
- Refonte visuelle du 2026-09-14 : arrondis renforcés, fresques France/Maroc. L'illustration SVG maison (camion, port, grue) a été jugée « trop amateur » et remplacée par une rangée d'icônes Lucide (Route → Stock → Maritime → Port). Adil n'a pas encore confirmé si ce dernier rendu lui convient.
- Le cockpit répond aussi (`/login` HTTP 200).

**INCOMPLET (bloquant avant vraie prospection)**
- `lib/site-config.ts` contient encore des PLACEHOLDERS marqués `TODO` : email (`[e-mail]`), téléphone (`+33 6 00 00 00 00`), WhatsApp (`33600000000`), adresse, LinkedIn vide. Le bouton WhatsApp et les contacts pointent donc vers des faux numéros.
- Le nom de marque « LogiRelais » est provisoire.
- **Le formulaire ne fait qu'un `console.log`** (`app/api/lead/route.ts`). Les leads ne sont ni envoyés ni stockés. Ils apparaissent seulement dans `docker logs logistique`, et disparaissent si le conteneur est recréé.
- Le domaine est un sous-domaine de `noschoixpourvous.com`. Adil a soulevé le manque de crédibilité pour de la prospection à froid. Décision du 2026-09-13 : ne pas acheter de domaine pour l'instant. Si besoin, un `.fr`/`.com` dédié se branche sur la même infra (nouveau A record + nouveau `server_name` nginx).


- **Dépôt GitHub PUBLIC** : https://github.com/adilinfo14/logistique.git, branche `main`. Le dernier commit local est identique à `origin/main` et au VPS : `10bd531` (2026-09-14). Le dépôt ne doit contenir aucun secret ni vrai contact personnel (il est public).
- **Copie locale** : `C:\Users\Utilisateur\OneDrive\Dev Logistique France Maroc\relais-logistique` (le dossier parent contient aussi `cockpit-logistique`, autre projet).
- **Stack** : Next.js 14.2 (App Router), React 18, TypeScript, Tailwind 3, `lucide-react`. `output: "standalone"` dans `next.config.mjs`. Aucune base de données.
- **Fichiers clés** : `lib/site-config.ts` (marque, contacts, WhatsApp, `cockpitUrl: "/login"`), `app/api/lead/route.ts` (stub formulaire), `components/*` (une section par fichier), `app/layout.tsx` (métadonnées SEO).
- **VPS IONOS** `[IP-VPS]` (accès SSH root avec la clé d'Adil) :
  - code : `/home/ubuntu/logistique` (clone git du dépôt) ;
  - conteneur Docker `logistique` (image `logistique:latest`), `127.0.0.1:3100 -> 3000`, restart policy `always` ;
  - Dockerfile multi-stage `node:22-alpine` (deps → builder → runner, utilisateur non-root `nextjs`, `node server.js`) ;
  - nginx : `/etc/nginx/sites-enabled/00-logistique` (préfixe `00-` pour passer avant le vhost catch-all `confia`).
- **Routage nginx du vhost `logistique.noschoixpourvous.com`** :
  - `/` va au site vitrine (3100) ;
  - `/login|dashboard|dossiers|prestataires|reseau|prospection|knowledge|parametres|aide` va au cockpit (3101) ;
  - `/cockpit-assets/` va au cockpit (assets, `assetPrefix` dédié pour ne pas entrer en collision avec `/_next/` du site) ;
  - `/auth/v1/` (GoTrue 9999) et `/rest/v1/` (PostgREST 3111) : backend du cockpit.
- **Cockpit (hors périmètre, pour mémoire)** : conteneurs `cockpit-logistique` (3101), `cockpit_postgrest`, `cockpit_gotrue`, `cockpit_postgres` ; code `/home/ubuntu/cockpit-logistique` et `/home/ubuntu/cockpit-backend` (docker-compose, SQL de migration). ATTENTION : le cockpit n'est PAS dans un dépôt git (ni en local ni sur le VPS) et aucun cron de sauvegarde de sa base n'a été trouvé. À traiter dans un HANDOFF dédié.
- **DNS / HTTPS** : Cloudflare, zone `noschoixpourvous.com`, enregistrement **A** `logistique` -> `[IP-VPS]`, proxied (nuage orange). HTTPS terminé par Cloudflare, pas de certbot. Ce n'est PAS un Tunnel Cloudflare (contrairement aux services du homelab).

## 4. Exploitation

Développement local (Node 22 recommandé) :
```bash
cd "C:\Users\Utilisateur\OneDrive\Dev Logistique France Maroc\relais-logistique"
npm install
npm run dev        # http://localhost:3000 (le 3000 était pris par BasketVision : utiliser -p 3001 si besoin)
npm run build      # vérifie TypeScript + lint avant de pousser
```

Déploiement (le VPS build depuis git, pas de registre d'images) :
```bash
git push origin main
ssh root@[IP-VPS]
cd /home/ubuntu/logistique && git pull
docker build -t logistique .
docker rm -f logistique
docker run -d --name logistique --restart always -p 127.0.0.1:3100:3000 logistique:latest
```
La commande `docker run` exacte d'origine n'a pas été relue : les options ci-dessus sont déduites de `docker inspect` (port, restart policy). À vérifier qu'aucune variable d'environnement n'est nécessaire (le code n'en utilise pas).

Vérifications :
```bash
docker ps | grep logistique
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3100/
curl -s -o /dev/null -w "%{http_code}\n" https://logistique.noschoixpourvous.com/
docker logs --tail 50 logistique          # c'est ici que tombent les leads du formulaire (console.log)
nginx -t && systemctl reload nginx         # après modification du vhost
```
Test du formulaire (crée une fausse ligne dans les logs, sans conséquence) :
```bash
curl -s -X POST https://logistique.noschoixpourvous.com/api/lead -H 'Content-Type: application/json' \
  -d '{"depart":"Lyon","destination":"Casablanca","marchandise":"test","volume":"1","frequence":"ponctuel","nom":"Test","entreprise":"Test","email":"[e-mail]","telephone":"0"}'
```
Sauvegarde : rien à sauvegarder côté serveur (site statique/stateless). La source de vérité est GitHub.

## 5. Décisions clés & pièges rencontrés

- **DNS : A record Cloudflare, pas Tunnel.** Adil avait d'abord créé une route Tunnel (écran « homelab ») vers `127.0.0.1:3100`. Erreur : elle visait le homelab, pas le VPS. Les sites sur IONOS (talesens, movies, tkonsulting, ftms) utilisent un A record classique proxied. Ne pas mélanger les deux mécanismes.
- **Dockerfile** : `public/` doit exister dans le dépôt, sinon le `COPY` échoue. C'est pourquoi `public/.gitkeep` a été ajouté (commit `3c9bdd9`).
- **Port** : 3100 côté VPS (le 3000 local est souvent pris par BasketVision).
- **Cohabitation site + cockpit sur le même domaine** : les deux apps Next.js utilisent `/_next/`. Le cockpit est donc servi avec un `assetPrefix` dédié (`/cockpit-assets/`). Ne pas ajouter de route du cockpit sans mettre à jour la regex nginx. Ne pas ajouter au site vitrine une page dont le chemin est dans la regex (`/aide`, `/dossiers`, etc.) : elle serait interceptée par le cockpit.
- **Piège middleware** : un utilisateur connecté qui revisitait `/login` était redirigé vers `/`, qui est désormais la page du site vitrine. Corrigé côté cockpit (redirection vers `/dashboard`).
- **Illustrations** : le rendu SVG « dessiné à la main » a été rejeté. Rester sur des icônes propres (Lucide) plutôt que des dessins maison.
- **Ton** : éviter le « nous » incohérent (fondateur seul) et le ton générique. Toujours rester dans le rôle d'intermédiaire, jamais de transporteur.
- **Dépôt public** : ne jamais y mettre de vrais numéros, mots de passe de comptes du cockpit ou clés.

## 6. Reste à faire / idées (par priorité)

1. **Remplacer les placeholders** de `lib/site-config.ts` (email, téléphone, WhatsApp, adresse, LinkedIn). Sans cela, la prospection ne peut pas démarrer. Décider si ces contacts, réels, peuvent figurer dans un dépôt public (sinon : variables d'environnement ou dépôt privé).
2. **Brancher le formulaire** dans `app/api/lead/route.ts` : email transactionnel (Resend/Postmark), ou webhook vers un CRM/Airtable/Google Sheet, ou notification. Aujourd'hui les leads sont perdus. Il faudra sans doute passer les clés en variables d'environnement via `docker run -e` (secrets hors dépôt).
3. **Choisir le nom de marque définitif** (« LogiRelais » est provisoire). Éventuellement acheter un domaine dédié.
4. Faire valider par Adil le dernier rendu du Hero (icônes Lucide), puis ajuster.
5. Ajouter de l'analytics (mesure de la prospection) : non fait.
6. Après quelques échanges réels : définir 2-3 offres packagées et vendables, et éventuellement afficher des tarifs.
7. Versionner et sauvegarder le cockpit (git privé + dump régulier de `cockpit_postgres`) : hors périmètre de la landing, mais risque de perte de données réel.
8. Mettre à jour le README du dépôt : il recommande Vercel, alors que la prod est en réalité sur le VPS IONOS, et il ne mentionne ni le Docker ni le cockpit.

## 7. Reprendre avec Claude

À coller dans une nouvelle session :
> Je reprends le projet « landing page services logistiques France–Maroc » (site vitrine Next.js 14 + TS + Tailwind). Dépôt public github.com/adilinfo14/logistique (branche main), copie locale `C:\Users\Utilisateur\OneDrive\Dev Logistique France Maroc\relais-logistique`. Déployé sur le VPS IONOS [IP-VPS] dans `/home/ubuntu/logistique` (conteneur Docker `logistique` sur 127.0.0.1:3100, vhost nginx `/etc/nginx/sites-enabled/00-logistique`), domaine https://logistique.noschoixpourvous.com (A record Cloudflare proxied, pas de Tunnel). Le même domaine sert aussi un « cockpit » interne (conteneur `cockpit-logistique`, routes `/login`, `/dashboard`…), projet séparé non versionné. Lis d'abord le HANDOFF `logistique-landing.md`. Priorité : (1) remplacer les placeholders de `lib/site-config.ts`, (2) brancher le formulaire `app/api/lead/route.ts` à un vrai envoi (email/CRM), (3) redéployer avec `git pull && docker build && docker run`. Ne jamais prétendre que le service fait du transport ou des opérations réglementées. Réponds en français, agis sans poser de questions de clarification, aucun secret dans le dépôt (il est public).

## 8. Références

- Aucun fichier mémoire dédié n'existe pour ce projet. Contexte général : `MEMORY.md` (règle de langue, rituel de déploiement, hébergement IONOS `project_confia_ovh.md`, Cloudflare Tunnel `project_confia_cloudflare_tunnel.md` pour le contraste avec le A record).
- Journal source : `s6_ecbfc701_logistique.md` (2026-09-13 → 2026-09-14).
- Autre HANDOFF à créer : « cockpit logistique » (Supabase auto-hébergé GoTrue/PostgREST/Postgres, matching par règles sans IA, 20 prestataires fictifs de démo). Comptes de démo : identifiants dans le journal, à redéfinir (voir la note de sécurité).
