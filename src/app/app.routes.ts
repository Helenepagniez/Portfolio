import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { ParcoursComponent } from './pages/parcours/parcours.component';
import { PassionsComponent } from './pages/passions/passions.component';

const SITE = 'Hélène Pagniez — Assistante administrative';

export const routes: Routes = [
  { path: 'home', component: AccueilComponent, title: SITE },
  { path: 'parcours', component: ParcoursComponent, title: 'Parcours · ' + SITE },
  { path: 'competences', component: CompetencesComponent, title: 'Compétences · ' + SITE },
  { path: 'passions', component: PassionsComponent, title: 'Mes passions · ' + SITE },
  { path: 'contact', component: ContactPageComponent, title: 'Contact · ' + SITE },
  // Anciennes adresses du portfolio
  { path: 'about', redirectTo: '/parcours' },
  { path: 'projets', redirectTo: '/home' },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', redirectTo: '/home' },
];
