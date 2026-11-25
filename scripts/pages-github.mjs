// Après `ng build`, crée une vraie page HTML pour chaque adresse du site
// (docs/competences/index.html, docs/parcours/index.html, ...).
//
// Sans ça, GitHub Pages répond « 404 » sur /Portfolio/competences : un visiteur
// voit quand même la page (grâce à 404.html), mais LinkedIn et les autres sites
// qui affichent un aperçu de lien refusent l'adresse.
//
// Les adresses sont lues dans src/app/app.routes.ts : une nouvelle page y est
// ajoutée automatiquement.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DOCS = 'docs';
const SITE_URL = 'https://helenepagniez.github.io/Portfolio/';

const index = readFileSync(join(DOCS, 'index.html'), 'utf8');
const routesSource = readFileSync('src/app/app.routes.ts', 'utf8');

const siteTitle = routesSource.match(/const SITE = '([^']+)'/)?.[1];

// { path: 'competences', ..., title: 'Compétences · ' + SITE }
// { path: 'about', redirectTo: '/parcours' }
const routes = [...routesSource.matchAll(/\{\s*path:\s*'([\w-]+)'([^}]*)\}/g)].map(
  ([, path, rest]) => {
    const prefix = rest.match(/title:\s*'([^']*)'\s*\+\s*SITE/)?.[1];
    const title = prefix !== undefined ? prefix + siteTitle : /title:\s*SITE/.test(rest) ? siteTitle : null;
    const redirect = rest.match(/redirectTo:\s*'\/?([\w-]*)'/)?.[1];
    return { path, title, canonical: redirect ?? path };
  },
);

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

for (const { path, title, canonical } of routes) {
  let html = index.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${SITE_URL}${canonical}" />`,
  );
  if (title) html = html.replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`);

  mkdirSync(join(DOCS, path), { recursive: true });
  writeFileSync(join(DOCS, path, 'index.html'), html);
  console.log(`✔ ${DOCS}/${path}/index.html`);
}

// Filet de sécurité pour toute autre adresse.
writeFileSync(join(DOCS, '404.html'), index);
console.log(`✔ ${DOCS}/404.html`);
