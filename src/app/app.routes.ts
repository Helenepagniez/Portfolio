import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Adobe1Component } from './projets/conteneur-adobe/adobe/adobe1/adobe1.component';
import { Adobe10Component } from './projets/conteneur-adobe/adobe/adobe10/adobe10.component';
import { Adobe11Component } from './projets/conteneur-adobe/adobe/adobe11/adobe11.component';
import { Adobe12Component } from './projets/conteneur-adobe/adobe/adobe12/adobe12.component';
import { Adobe13Component } from './projets/conteneur-adobe/adobe/adobe13/adobe13.component';
import { Adobe14Component } from './projets/conteneur-adobe/adobe/adobe14/adobe14.component';
import { Adobe15Component } from './projets/conteneur-adobe/adobe/adobe15/adobe15.component';
import { Adobe16Component } from './projets/conteneur-adobe/adobe/adobe16/adobe16.component';
import { Adobe17Component } from './projets/conteneur-adobe/adobe/adobe17/adobe17.component';
import { Adobe18Component } from './projets/conteneur-adobe/adobe/adobe18/adobe18.component';
import { Adobe19Component } from './projets/conteneur-adobe/adobe/adobe19/adobe19.component';
import { Adobe2Component } from './projets/conteneur-adobe/adobe/adobe2/adobe2.component';
import { Adobe3Component } from './projets/conteneur-adobe/adobe/adobe3/adobe3.component';
import { Adobe4Component } from './projets/conteneur-adobe/adobe/adobe4/adobe4.component';
import { Adobe5Component } from './projets/conteneur-adobe/adobe/adobe5/adobe5.component';
import { Adobe6Component } from './projets/conteneur-adobe/adobe/adobe6/adobe6.component';
import { Adobe7Component } from './projets/conteneur-adobe/adobe/adobe7/adobe7.component';
import { Adobe8Component } from './projets/conteneur-adobe/adobe/adobe8/adobe8.component';
import { Adobe9Component } from './projets/conteneur-adobe/adobe/adobe9/adobe9.component';
import { Article1Component } from './projets/conteneur-articles/articles/article1/article1.component';
import { Article10Component } from './projets/conteneur-articles/articles/article10/article10.component';
import { Article11Component } from './projets/conteneur-articles/articles/article11/article11.component';
import { Article12Component } from './projets/conteneur-articles/articles/article12/article12.component';
import { Article2Component } from './projets/conteneur-articles/articles/article2/article2.component';
import { Article3Component } from './projets/conteneur-articles/articles/article3/article3.component';
import { Article4Component } from './projets/conteneur-articles/articles/article4/article4.component';
import { Article5Component } from './projets/conteneur-articles/articles/article5/article5.component';
import { Article6Component } from './projets/conteneur-articles/articles/article6/article6.component';
import { Article7Component } from './projets/conteneur-articles/articles/article7/article7.component';
import { Article8Component } from './projets/conteneur-articles/articles/article8/article8.component';
import { Article9Component } from './projets/conteneur-articles/articles/article9/article9.component';
import { Defi1Component } from './projets/conteneur-defis-marketing/defis-marketing/defi1/defi1.component';
import { Defi2Component } from './projets/conteneur-defis-marketing/defis-marketing/defi2/defi2.component';
import { Defi3Component } from './projets/conteneur-defis-marketing/defis-marketing/defi3/defi3.component';
import { Defi4Component } from './projets/conteneur-defis-marketing/defis-marketing/defi4/defi4.component';
import { Livre1Component } from './projets/conteneur-livres/livres/livre1/livre1.component';
import { Livre2Component } from './projets/conteneur-livres/livres/livre2/livre2.component';
import { Projet1Component } from './projets/conteneur-projets-master/projets-master/projet1/projet1.component';
import { Projet2Component } from './projets/conteneur-projets-master/projets-master/projet2/projet2.component';
import { Projet3Component } from './projets/conteneur-projets-master/projets-master/projet3/projet3.component';
import { Projet4Component } from './projets/conteneur-projets-master/projets-master/projet4/projet4.component';
import { Projet5Component } from './projets/conteneur-projets-master/projets-master/projet5/projet5.component';
import { Projet6Component } from './projets/conteneur-projets-master/projets-master/projet6/projet6.component';
import { Projet7Component } from './projets/conteneur-projets-master/projets-master/projet7/projet7.component';
import { Projet8Component } from './projets/conteneur-projets-master/projets-master/projet8/projet8.component';
import { ProjetsComponent } from './projets/projets.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projets', component: ProjetsComponent },
  {
    path: 'projets/defis-marketing/1',
    component: Defi1Component,
  },
  {
    path: 'projets/defis-marketing/2',
    component: Defi2Component,
  },
  {
    path: 'projets/defis-marketing/3',
    component: Defi3Component,
  },
  {
    path: 'projets/defis-marketing/4',
    component: Defi4Component,
  },
  { path: 'projets/projets-master/1', component: Projet1Component },
  { path: 'projets/projets-master/2', component: Projet2Component },
  { path: 'projets/projets-master/3', component: Projet3Component },
  { path: 'projets/projets-master/4', component: Projet4Component },
  { path: 'projets/projets-master/5', component: Projet5Component },
  { path: 'projets/projets-master/6', component: Projet6Component },
  { path: 'projets/projets-master/7', component: Projet7Component },
  { path: 'projets/projets-master/8', component: Projet8Component },
  { path: 'projets/livres/1', component: Livre1Component },
  { path: 'projets/livres/2', component: Livre2Component },
  { path: 'projets/adobe/1', component: Adobe1Component },
  { path: 'projets/adobe/2', component: Adobe2Component },
  { path: 'projets/adobe/3', component: Adobe3Component },
  { path: 'projets/adobe/4', component: Adobe4Component },
  { path: 'projets/adobe/5', component: Adobe5Component },
  { path: 'projets/adobe/6', component: Adobe6Component },
  { path: 'projets/adobe/7', component: Adobe7Component },
  { path: 'projets/adobe/8', component: Adobe8Component },
  { path: 'projets/adobe/9', component: Adobe9Component },
  { path: 'projets/adobe/10', component: Adobe10Component },
  { path: 'projets/adobe/11', component: Adobe11Component },
  { path: 'projets/adobe/12', component: Adobe12Component },
  { path: 'projets/adobe/13', component: Adobe13Component },
  { path: 'projets/adobe/14', component: Adobe14Component },
  { path: 'projets/adobe/15', component: Adobe15Component },
  { path: 'projets/adobe/16', component: Adobe16Component },
  { path: 'projets/adobe/17', component: Adobe17Component },
  { path: 'projets/adobe/18', component: Adobe18Component },
  { path: 'projets/adobe/19', component: Adobe19Component },
  {
    path: 'projets/articles/1',
    component: Article1Component,
  },
  {
    path: 'projets/articles/2',
    component: Article2Component,
  },
  {
    path: 'projets/articles/3',
    component: Article3Component,
  },
  {
    path: 'projets/articles/4',
    component: Article4Component,
  },
  {
    path: 'projets/articles/5',
    component: Article5Component,
  },
  {
    path: 'projets/articles/6',
    component: Article6Component,
  },
  {
    path: 'projets/articles/7',
    component: Article7Component,
  },
  {
    path: 'projets/articles/8',
    component: Article8Component,
  },
  {
    path: 'projets/articles/9',
    component: Article9Component,
  },
  {
    path: 'projets/articles/10',
    component: Article10Component,
  },
  {
    path: 'projets/articles/11',
    component: Article11Component,
  },
  {
    path: 'projets/articles/12',
    component: Article12Component,
  },
  { path: 'contact', component: ContactComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];
