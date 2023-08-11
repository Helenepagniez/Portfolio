import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {
  imagePath: string = environment.imagePath;
  estActifLivres: boolean = false;
  estActifSites: boolean = false;

  retour() {
    this.estActifLivres = false;
    this.estActifSites = false;
  }

  activeLivres() {
    this.estActifLivres = true;
    this.estActifSites = false;
  }

  activeSites() {
    this.estActifLivres = false;
    this.estActifSites = true;
  }
}
