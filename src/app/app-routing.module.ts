import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';
import { CreationsContenuComponent } from './projets/creations-contenu/creations-contenu.component';
import { LivresComponent } from './projets/livres/livres.component';
import { SitesComponent } from './projets/sites/sites.component';
import { BannieresComponent } from './projets/creations-contenu/bannieres/bannieres.component';
import { ArticlesComponent } from './projets/creations-contenu/articles/articles.component';
import { Article1Component } from './projets/creations-contenu/articles/article1/article1.component';
import { Article12Component } from './projets/creations-contenu/articles/article12/article12.component';
import { Article11Component } from './projets/creations-contenu/articles/article11/article11.component';
import { Article10Component } from './projets/creations-contenu/articles/article10/article10.component';
import { Article9Component } from './projets/creations-contenu/articles/article9/article9.component';
import { Article8Component } from './projets/creations-contenu/articles/article8/article8.component';
import { Article7Component } from './projets/creations-contenu/articles/article7/article7.component';
import { Article6Component } from './projets/creations-contenu/articles/article6/article6.component';
import { Article5Component } from './projets/creations-contenu/articles/article5/article5.component';
import { Article4Component } from './projets/creations-contenu/articles/article4/article4.component';
import { Article3Component } from './projets/creations-contenu/articles/article3/article3.component';
import { Article2Component } from './projets/creations-contenu/articles/article2/article2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'projets/sites', component: SitesComponent },
  { path: 'projets/livres', component: LivresComponent },
  { path: 'projets/creations-contenu', component: CreationsContenuComponent },
  {
    path: 'projets/creations-contenu/bannieres',
    component: BannieresComponent,
  },
  { path: 'projets/creations-contenu/articles', component: ArticlesComponent },
  {
    path: 'projets/creations-contenu/articles/1',
    component: Article1Component,
  },
  {
    path: 'projets/creations-contenu/articles/2',
    component: Article2Component,
  },
  {
    path: 'projets/creations-contenu/articles/3',
    component: Article3Component,
  },
  {
    path: 'projets/creations-contenu/articles/4',
    component: Article4Component,
  },
  {
    path: 'projets/creations-contenu/articles/5',
    component: Article5Component,
  },
  {
    path: 'projets/creations-contenu/articles/6',
    component: Article6Component,
  },
  {
    path: 'projets/creations-contenu/articles/7',
    component: Article7Component,
  },
  {
    path: 'projets/creations-contenu/articles/8',
    component: Article8Component,
  },
  {
    path: 'projets/creations-contenu/articles/9',
    component: Article9Component,
  },
  {
    path: 'projets/creations-contenu/articles/10',
    component: Article10Component,
  },
  {
    path: 'projets/creations-contenu/articles/11',
    component: Article11Component,
  },
  {
    path: 'projets/creations-contenu/articles/12',
    component: Article12Component,
  },
  { path: 'contact', component: ContactComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
