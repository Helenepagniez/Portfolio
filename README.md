<div align="center">
<img height="auto" width="160px" src="./src/assets/images/profile.webp" alt="Portrait d'Hélène Pagniez">

# Hélène Pagniez — Assistante administrative

**Back office · Administration des ventes · Assistanat de direction**

Disponible immédiatement · Rennes de préférence, ouverte à Caen · CDI de préférence

[Voir le portfolio en ligne](https://helenepagniez.github.io/Portfolio/home) · [Me contacter](https://helenepagniez.github.io/Portfolio/contact)

</div>

---

## À propos

Ce portfolio présente mon parcours, mes compétences et ce que je recherche : un poste d'**assistante administrative**, idéalement en back office ou en administration des ventes.

Près de **4 ans d'expérience** sur des postes variés d'assistanat (Prysmian, GRTgaz, Guillemot, ADX Groupe), dont la gestion d'un **portefeuille de clients** de 60 dossiers Grands Comptes nationaux.

<details>
  <summary><strong>Les pages du site</strong></summary>

### Accueil

- Fiche candidate : poste, contrat, lieu, disponibilité, expérience
- Mon expérience en chiffres
- Mon parcours en bref, mes trois métiers de l'assistanat et les secteurs que je connais

### Parcours

- Les trois étapes de mon parcours
- Frise de mes expériences professionnelles, avec missions détaillées
- Formations et diplômes, avec un aperçu de chaque diplôme
- Langues

### Compétences

- Savoir-faire par métier, avec l'entreprise où chaque compétence a été exercée
- Qualités professionnelles
- Outils du quotidien et outils d'organisation

### Mes passions

- L'écriture : [Écris en vain](https://ecri-en-vain.web.app/), l'application d'écriture que j'ai créée en 2026 pour répondre à un besoin que rien sur le marché ne couvrait (elle sera un jour ouverte au public), et mes romans _L'Ascension_ et _Fascination ou Répulsion_
- Les jeux d'énigmes et immersifs
- La pâtisserie

### Contact

- Formulaire de contact (envoi par Formspree)
- E-mail (avec copie en un clic), téléphone, LinkedIn et CV à télécharger

</details>

<details>
  <summary><strong>Technique</strong></summary>

- **Angular 19** : composants autonomes, signaux, nouvelle syntaxe de templates (`@if`, `@for`)
- Petit design system en CSS (`src/styles.css`) : jetons de couleurs (palette prune), police Plus Jakarta Sans, boutons, cartes et animations communs, présenté sur la page [/design-system](https://helenepagniez.github.io/Portfolio/design-system)
- Animations au défilement grâce à la directive `appReveal`
- Icônes en SVG intégrées
- Site adapté au mobile et accessible : navigation au clavier, textes alternatifs, animations réduites si l'appareil le demande
- Hébergement sur **GitHub Pages** (dossier `docs`)

### Où modifier quoi

| Je veux modifier…                         | Fichier                                    |
| ----------------------------------------- | ------------------------------------------ |
| Un texte, une mission, un chiffre, un lien | `src/app/core/data/profil.ts`              |
| Les couleurs, la police, les boutons, les cartes (design system) | `src/styles.css` |
| Le CV téléchargeable                       | `src/assets/cv.pdf`                        |

</details>

<details>
  <summary><strong>Lancer le projet en local</strong></summary>

### Cloner le projet

```bash
git clone https://github.com/Helenepagniez/Portfolio.git
cd Portfolio
```

### Installer les dépendances

```bash
npm install
```

### Lancer l'application

```bash
npx ng serve -o
```

Le site s'ouvre sur http://localhost:4200.

</details>

<details>
  <summary><strong>Mettre en ligne</strong></summary>

```bash
npx ng build --base-href https://Helenepagniez.github.io/Portfolio/
cp docs/index.html docs/404.html
```

Le fichier `404.html` permet d'ouvrir directement n'importe quelle page du site (par exemple `/parcours`).
Il suffit ensuite de commiter et d'envoyer le dossier `docs` sur la branche publiée par GitHub Pages.

</details>
