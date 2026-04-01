# L11 — Concevoir une image OG avec branding

**Severity:** Low  
**Effort:** 1–2 heures (design)  
**File:** `public/og-image.jpg`

## Problème

L'image OG actuelle est une photo sans texte ni logo visible. Quand le site est partagé sur LinkedIn, Slack ou WhatsApp, la preview ne montre pas de branding identifiable — c'est une opportunité de conversion manquée.

## Spec recommandée

- Dimensions : 1200×630 px
- Fond : `#12122e` (couleur brand dark)
- Logo Roget Concept en haut à gauche
- Nom "François Roget" en blanc, gras, grande taille
- Sous-titre : "Senior Full Stack Developer & Architect"
- Accent teal `#00dbcb`
- Optionnel : photo portrait en arrière-plan (opacité réduite)

## Variantes

Créer une version FR avec "Développeur Full Stack Senior & Architecte" pour `og-image-fr.jpg`, et déclarer chaque variante dans `[locale]/layout.tsx`.
