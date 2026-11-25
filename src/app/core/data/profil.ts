import { IconName } from '../../shared/icon/icon.component';

/* Toutes les données viennent du CV et du portfolio d’Hélène : ne rien inventer ici. */

export const CONTACT = {
  email: 'helenepagniez51@gmail.com',
  phone: '06 47 00 50 16',
  phoneHref: 'tel:+33647005016',
  linkedin: 'https://www.linkedin.com/in/helene-pagniez',
  cv: 'assets/cv.pdf',
  cvFileName: 'CV_Helene_Pagniez_Assistante_Administrative.pdf',
};

export interface NavItem {
  path: string;
  label: string;
}

export const NAV: NavItem[] = [
  { path: '/home', label: 'Accueil' },
  { path: '/parcours', label: 'Parcours' },
  { path: '/competences', label: 'Compétences' },
  { path: '/passions', label: 'Passions' },
  { path: '/contact', label: 'Contact' },
];

export interface Chapter {
  n: string;
  years: string;
  name: string;
  text: string;
}

export const CHAPTERS: Chapter[] = [
  {
    n: '1',
    years: '2018 — 2021',
    name: 'L’assistanat, dès le départ',
    text: 'Après un premier emploi à Provins, je deviens Attachée de Direction en alternance chez Prysmian.',
  },
  {
    n: '2',
    years: '2021 — 2025',
    name: 'Toujours assistante, de nouveaux outils',
    text: 'Chez GRTgaz, puis chez Guillemot en alternance pendant ma licence : j’enrichis mon assistanat avec le numérique. Un Master vient compléter le tout en 2025.',
  },
  {
    n: '3',
    years: '2026',
    name: 'Mon cœur de métier',
    text: 'Assistante ADV chez ADX Groupe, en charge d’un portefeuille de clients.',
  },
];

export interface Experience {
  title: string;
  period: string;
  company: string;
  place: string;
  /** Durée du poste, affichée à côté de la période. */
  duration: string;
  /** Activité de l’entreprise, affichée à côté de son nom. */
  note?: string;
  current?: boolean;
  missions: string[];
  tags: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: 'Assistante Administration des Ventes',
    period: 'Mai — Juil. 2026 · CDD',
    company: 'ADX Groupe',
    duration: '3 mois',
    place: 'Cesson-Sévigné (35510)',
    note: 'Diagnostics immobiliers (DPE, PPPT…)',
    current: true,
    missions: [
      'Gestion de bout en bout des dossiers DPE et PPPT sur trois secteurs : constitution, contrôle des pièces et mise à jour.',
      'Suivi des échéances, relances et coordination entre les services concernés.',
      'Gestion d’un portefeuille de clients : ≈ 150 dossiers par semaine, dont 60 dossiers Grands Comptes nationaux suivis en parallèle en tant que référente.',
      'Rédaction des procédures internes ayant fiabilisé le traitement des dossiers complexes.',
      'Gestion d’une boîte mail et d’une ligne téléphonique partagées : tri, priorisation et suivi des demandes.',
    ],
    tags: ['Portefeuille de clients', 'Ligne partagée', 'Contrôle de dossiers', 'Échéances & relances', 'Procédures', 'Calypso'],
  },
  {
    title: 'Assistante Marketing Digital',
    period: '2023 — 2024 · Alternance',
    company: 'Guillemot Corporation',
    duration: '1 an',
    place: 'Rennes (35000)',
    note: 'Marques Thrustmaster (accessoires de gaming) et Hercules (accessoires de DJing)',
    missions: [
      'Saisie, contrôle et fiabilisation des données du catalogue produit sur plusieurs sites.',
      'Mise à jour et refonte de pages produits sur Magento.',
      'Optimisation du référencement naturel (SEO).',
      'Création de campagnes SEA sur Google Ads.',
      'Réalisation d’un audit, recommandation d’actions et mise en place.',
      'Suivi des KPI de mes missions.',
    ],
    tags: ['Saisie & fiabilisation', 'Magento', 'SEO', 'Google Ads', 'Suivi des KPI'],
  },
  {
    title: 'Assistante Manager',
    period: 'Nov. — Déc. 2021 · Intérim',
    company: 'GRTgaz',
    duration: '2 mois',
    place: 'Croissy-Beaubourg (77183)',
    note: 'Gestionnaire du réseau de transport de gaz naturel',
    missions: [
      'Analyse de l’organisation documentaire du service et refonte de l’arborescence de classement.',
      'Archivage, transfert et sécurisation des données sur l’espace collaboratif.',
    ],
    tags: ['Classement', 'Archivage', 'Teams / SharePoint'],
  },
  {
    title: 'Attachée de Direction',
    period: '2019 — 2021 · Alternance',
    company: 'Prysmian Group / Silec Cable',
    duration: '2 ans',
    place: 'Montereau-Fault-Yonne (77130)',
    note: 'Fabricant de câbles d’énergie et de télécommunications',
    missions: [
      'Suivi administratif du service au contact quotidien des équipes ; gestion des accès visiteurs et des EPI.',
      'Réservations : salles, hôtels, traiteurs, voitures.',
      'Organisation d’événements, de réunions et de déplacements (logistique, budget).',
      'Création et gestion des procédures : notes de frais, utilisation des salles et du matériel.',
      'Commandes et facturation : suivi des factures, commandes de traiteurs et de consommables.',
      'Conception et analyse d’enquêtes de satisfaction interne et externe ; classement documentaire et archivage.',
    ],
    tags: ['Réservations', 'Notes de frais', 'Procédures', 'Commandes & factures', 'Événements'],
  },
  {
    title: 'Polyvalente',
    period: 'Août 2018 — Août 2019 · Extra et CDD',
    company: 'Aux Vieux Remparts',
    duration: '1 an',
    place: 'Provins (77160)',
    note: 'Groupe The Originals Relais : hôtel, restaurant, bar et boutiques de glaces',
    missions: [
      'Accueil et réception des clients ; gestion d’une caisse et vente.',
      'Gestion autonome d’une boutique (ventes, stocks…) ; contrôle de l’inventaire.',
      'Service du petit-déjeuner (préparation et rangement).',
      'Propreté des locaux et des chambres d’hôtel ; rangement du linge et des matériaux.',
      'Conception de boules de glace.',
    ],
    tags: ['Accueil client', 'Caisse', 'Gestion de boutique', 'Stocks & inventaire'],
  },
];

export interface Diploma {
  id: string;
  years: string;
  title: string;
  school: string;
  image: string;
}

export const MASTER: Diploma = {
  id: 'master',
  years: '2024 — 2025',
  title: 'Master Intensif Manager des Stratégies Marketing et Communication',
  school: 'OpenClassrooms',
  image: 'assets/images/certificats/diplome-master.webp',
};

export const DIPLOMAS: Diploma[] = [
  {
    id: 'licence',
    years: '2023 — 2024 · Alternance',
    title: 'Licence Chef de Projet Digital',
    school: 'École 301 / Guillemot Corporation',
    image: 'assets/images/certificats/diplome-chef-projet.webp',
  },
  {
    id: 'dev',
    years: '2021 — 2022',
    title: 'Bachelor 2 Développeuse Web',
    school: 'OpenClassrooms',
    image: 'assets/images/certificats/diplome-dev.webp',
  },
  {
    id: 'assistante',
    years: '2019 — 2021 · Alternance',
    title: 'Bac +2 Attachée de Direction',
    school: 'Pigier — Dammarie-les-Lys',
    image: 'assets/images/certificats/diplome-assistante.webp',
  },
];

export interface Language {
  code: string;
  name: string;
  level: string;
  rank: number; // 1 = notions … 4 = maternelle
}

export const LEVELS = ['Notions', 'Intermédiaire', 'Courant', 'Maternelle'];

export const LANGUAGES: Language[] = [
  { code: 'FR', name: 'Français', level: 'Langue maternelle', rank: 4 },
  { code: 'EN', name: 'Anglais', level: 'Intermédiaire', rank: 2 },
];

export interface SkillGroup {
  icon: IconName;
  title: string;
  short: string[];
  items: { text: string; where: string }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: 'folder-check',
    title: 'Gestion administrative & back office',
    short: ['Constitution et contrôle des pièces de dossiers', 'Saisie et fiabilisation des données', 'Classement, archivage, procédures internes'],
    items: [
      { text: 'Constitution et contrôle des pièces de dossiers', where: 'ADX Groupe' },
      { text: 'Saisie et fiabilisation des données', where: 'ADX Groupe · Guillemot' },
      { text: 'Classement, archivage, arborescence documentaire', where: 'GRTgaz · Prysmian' },
      { text: 'Boîte mail et ligne téléphonique partagées : tri, priorisation, suivi', where: 'ADX Groupe' },
      { text: 'Rédaction de procédures internes', where: 'ADX Groupe · Prysmian' },
    ],
  },
  {
    icon: 'chart',
    title: 'Administration des ventes',
    short: ['Gestion d’un portefeuille de clients, dont 60 Grands Comptes nationaux', 'Suivi des échéances et relances', 'Boîte mail et ligne téléphonique partagées'],
    items: [
      { text: 'Gestion d’un portefeuille de clients, dont 60 dossiers Grands Comptes nationaux', where: 'ADX Groupe' },
      { text: 'Gestion de bout en bout des dossiers DPE et PPPT', where: 'ADX Groupe' },
      { text: 'Suivi des échéances et relances', where: 'ADX Groupe' },
      { text: 'Coordination entre les services concernés', where: 'ADX Groupe' },
      { text: 'Commandes et facturation : suivi des factures, traiteurs, consommables', where: 'Prysmian' },
    ],
  },
  {
    icon: 'calendar',
    title: 'Assistanat de direction',
    short: ['Réservations, réunions, déplacements, événements', 'Création et gestion des notes de frais', 'Commandes et facturation'],
    items: [
      { text: 'Suivi administratif du service au quotidien', where: 'Prysmian · GRTgaz' },
      { text: 'Réservations : salles, hôtels, traiteurs, voitures', where: 'Prysmian' },
      { text: 'Organisation de réunions, déplacements, événements', where: 'Prysmian' },
      { text: 'Création et gestion des notes de frais', where: 'Prysmian' },
      { text: 'Gestion des accès visiteurs et des EPI', where: 'Prysmian' },
      { text: 'Enquêtes de satisfaction interne et externe', where: 'Prysmian' },
      { text: 'Traitement d’informations confidentielles', where: 'Prysmian' },
    ],
  },
];

export const QUALITIES = [
  { name: 'Rigoureuse', proof: 'Chaque pièce d’un dossier est contrôlée avant validation.' },
  { name: 'Organisée', proof: 'Un portefeuille de 60 dossiers Grands Comptes suivis en parallèle.' },
  { name: 'Discrète', proof: 'Habituée aux informations confidentielles d’une direction.' },
  { name: 'Autonome', proof: 'Trois secteurs géographiques gérés seule.' },
  { name: 'Proactive', proof: 'J’écris la procédure quand un traitement manque de fiabilité.' },
  { name: 'À l’écoute', proof: 'Au contact quotidien des équipes, des services et des clients.' },
  { name: 'Polyvalente', proof: 'Industrie, énergie, high-tech, diagnostic immobilier.' },
  { name: 'Adaptable', proof: 'Alternance, intérim, missions courtes : opérationnelle vite.' },
];

export const TOOLS = [
  { name: 'Word', use: 'Courriers, procédures, comptes rendus' },
  { name: 'Excel', use: 'Suivi de dossiers, tableaux de bord' },
  { name: 'Outlook', use: 'Boîte partagée, agendas' },
  { name: 'PowerPoint', use: 'Supports de réunion' },
  { name: 'Calypso', use: 'Logiciel de gestion (ADV)' },
  { name: 'SharePoint', use: 'Classement et archivage' },
  { name: 'Teams', use: 'Espaces collaboratifs' },
  { name: 'Google Workspace', use: 'Docs, Sheets, Drive' },
];

export const TASK_TOOLS = [
  { name: 'Trello', use: 'Tableaux de suivi des tâches' },
  { name: 'Notion', use: 'Notes, procédures, organisation' },
  { name: 'Monday', use: 'Planification et suivi de projets' },
];

export const SECTORS: { icon: IconName; name: string; company: string }[] = [
  { icon: 'house', name: 'Diagnostic immobilier', company: 'ADX Groupe' },
  { icon: 'factory', name: 'Industrie · câbles', company: 'Prysmian Group / Silec Cable' },
  { icon: 'flame', name: 'Énergie · gaz', company: 'GRTgaz' },
  { icon: 'gamepad', name: 'High-tech · gaming & DJing', company: 'Guillemot Corporation (Thrustmaster, Hercules)' },
  { icon: 'bed', name: 'Hôtellerie-restauration', company: 'Aux Vieux Remparts (The Originals Relais)' },
];

export interface Book {
  title: string;
  year: string;
  genres: string;
  cover: string;
  url: string;
  pages: number;
  summary: string;
}

// Le plus récent en premier
export const BOOKS: Book[] = [
  {
    title: 'Fascination ou Répulsion',
    year: '2025',
    genres: 'New romance · Romance contemporaine',
    cover: 'assets/images/livres/fascination.webp',
    url: 'https://www.amazon.fr/dp/B0F9FP49GS',
    pages: 504,
    summary:
      'Elle a renoncé à ses projets et à sa carrière pour Édouard, son amour depuis ses 16 ans. Jusqu’au jour où le dirigeant de son entreprise est remplacé par un homme d’affaires reconnu et très séducteur…',
  },
  {
    title: 'L’Ascension',
    year: '2023',
    genres: 'Romance · Développement personnel · Policier',
    cover: 'assets/images/livres/ascension.webp',
    url: 'https://www.amazon.fr/dp/B0C7T9JQ4B',
    pages: 57,
    summary:
      'Orpheline depuis ses deux ans, Juana grandit auprès de son oncle Miguel dans les favelas. À travers de nombreuses péripéties, elle va chercher à venger la mort de ses parents — et peut-être avouer ses sentiments à son voisin d’enfance.',
  },
];

export const PASTRIES = [
  { name: 'Cheesecake', image: 'assets/images/passions/cheesecake.png' },
  { name: 'Muffins chocolat blanc et framboises', image: 'assets/images/passions/muffins.webp' },
  { name: 'Panna cotta', image: 'assets/images/passions/panna-cotta.webp' },
];
