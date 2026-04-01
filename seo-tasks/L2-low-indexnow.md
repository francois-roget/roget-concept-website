# L2 — Implémenter IndexNow

**Severity:** Low  
**Effort:** 30 minutes  

## Problème

IndexNow permet de notifier instantanément Bing, Yandex et Naver lors de chaque mise à jour de contenu, sans attendre le prochain cycle de crawl. Non implémenté actuellement.

Pour un site de 4 pages avec des mises à jour rares, l'impact est faible — mais le setup est simple et une fois en place, il bénéficie à chaque déploiement futur.

## Fix

1. Générer une clé IndexNow (une chaîne alphanumérique unique)
2. Héberger `public/<clé>.txt` avec la clé comme contenu
3. Ajouter un appel `POST` à `https://api.indexnow.org/indexnow` dans un Vercel deploy hook ou une GitHub Action de post-déploiement :
   ```json
   {
     "host": "www.roget-concept.be",
     "key": "<clé>",
     "urlList": [
       "https://www.roget-concept.be/en",
       "https://www.roget-concept.be/fr"
     ]
   }
   ```
