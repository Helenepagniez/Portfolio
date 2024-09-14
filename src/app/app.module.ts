import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SitesComponent } from './projets/sites/sites.component';
import { LivresComponent } from './projets/livres/livres.component';
import { CreationsContenuComponent } from './projets/creations-contenu/creations-contenu.component';
import { BannieresComponent } from './projets/creations-contenu/bannieres/bannieres.component';
import { ArticlesComponent } from './projets/creations-contenu/articles/articles.component';
import { Article1Component } from './projets/creations-contenu/articles/article1/article1.component';
import { Article2Component } from './projets/creations-contenu/articles/article2/article2.component';
import { Article3Component } from './projets/creations-contenu/articles/article3/article3.component';
import { Article4Component } from './projets/creations-contenu/articles/article4/article4.component';
import { Article5Component } from './projets/creations-contenu/articles/article5/article5.component';
import { Article6Component } from './projets/creations-contenu/articles/article6/article6.component';
import { Article7Component } from './projets/creations-contenu/articles/article7/article7.component';
import { Article8Component } from './projets/creations-contenu/articles/article8/article8.component';
import { Article9Component } from './projets/creations-contenu/articles/article9/article9.component';
import { Article10Component } from './projets/creations-contenu/articles/article10/article10.component';
import { Article11Component } from './projets/creations-contenu/articles/article11/article11.component';
import { Article12Component } from './projets/creations-contenu/articles/article12/article12.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjetsComponent,
    ContactComponent,
    HeaderComponent,
    SitesComponent,
    LivresComponent,
    CreationsContenuComponent,
    BannieresComponent,
    ArticlesComponent,
    Article1Component,
    Article2Component,
    Article3Component,
    Article4Component,
    Article5Component,
    Article6Component,
    Article7Component,
    Article8Component,
    Article9Component,
    Article10Component,
    Article11Component,
    Article12Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
