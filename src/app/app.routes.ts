import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Article1Component } from './projets/articles/article1/article1.component';
import { Article10Component } from './projets/articles/article10/article10.component';
import { Article11Component } from './projets/articles/article11/article11.component';
import { Article12Component } from './projets/articles/article12/article12.component';
import { Article2Component } from './projets/articles/article2/article2.component';
import { Article3Component } from './projets/articles/article3/article3.component';
import { Article4Component } from './projets/articles/article4/article4.component';
import { Article5Component } from './projets/articles/article5/article5.component';
import { Article6Component } from './projets/articles/article6/article6.component';
import { Article7Component } from './projets/articles/article7/article7.component';
import { Article8Component } from './projets/articles/article8/article8.component';
import { Article9Component } from './projets/articles/article9/article9.component';
import { ArticlesComponent } from './projets/articles/articles.component';
import { BannieresComponent } from './projets/bannieres/bannieres.component';
import { LivresComponent } from './projets/livres/livres.component';
import { ProjetsComponent } from './projets/projets.component';
import { DefisMarketingComponent } from './projets/defis-marketing/defis-marketing.component';
import { ProjetsMasterComponent } from './projets/projets-master/projets-master.component';
import { Defi1Component } from './projets/defis-marketing/defi1/defi1.component';
import { Routes } from '@angular/router';
import { Projet1Component } from './projets/projets-master/projet1/projet1.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'projets/defis-marketing', component: DefisMarketingComponent },
  {
    path: 'projets/defis-marketing/1',
    component: Defi1Component,
  },
  { path: 'projets/projets-master', component: ProjetsMasterComponent },
  { path: 'projets/projets-master/1', component: Projet1Component },
  { path: 'projets/livres', component: LivresComponent },
  {
    path: 'projets/bannieres',
    component: BannieresComponent,
  },
  { path: 'projets/articles', component: ArticlesComponent },
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
