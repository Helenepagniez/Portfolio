import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjetsComponent,
    ContactComponent,
    HeaderComponent,
    LivresComponent,
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
    DefisMarketingComponent,
    ProjetsMasterComponent,
    Defi1Component,
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
