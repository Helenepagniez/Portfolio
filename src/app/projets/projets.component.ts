import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { ConteneurAdobeComponent } from './conteneur-adobe/conteneur-adobe.component';
import { ConteneurArticlesComponent } from './conteneur-articles/conteneur-articles.component';
import { ConteneurBannieresComponent } from './conteneur-bannieres/conteneur-bannieres.component';
import { ConteneurDefisMarketingComponent } from './conteneur-defis-marketing/conteneur-defis-marketing.component';
import { ConteneurLivresComponent } from './conteneur-livres/conteneur-livres.component';
import { ConteneurProjetsMasterComponent } from './conteneur-projets-master/conteneur-projets-master.component';
import { ConteneurSitesComponent } from './conteneur-sites/conteneur-sites.component';

@Component({
  selector: 'app-projets',
  imports: [
    CommonModule,
    RouterModule,
    ConteneurAdobeComponent,
    ConteneurArticlesComponent,
    ConteneurProjetsMasterComponent,
    ConteneurDefisMarketingComponent,
    ConteneurBannieresComponent,
    ConteneurLivresComponent,
    ConteneurSitesComponent,
  ],
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css'],
})
export class ProjetsComponent {
  imagePath: string = environment.imagePath + 'images/';
  activePage: string = 'adobe';
  windowScrolled = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  changeActivePage(activePage: string): void {
    this.activePage = activePage;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop =
      window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    this.windowScrolled = scrollTop > 100;
  }
}
