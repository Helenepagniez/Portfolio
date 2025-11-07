import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Projet } from 'src/app/core/interfaces/projet';
import { livres } from 'src/assets/data/livres';
import { CarteLivreComponent } from './carte-livre/carte-livre.component';

@Component({
  selector: 'app-conteneur-livres',
  imports: [CommonModule, RouterModule, CarteLivreComponent],
  templateUrl: './conteneur-livres.component.html',
  styleUrl: './conteneur-livres.component.css',
})
export class ConteneurLivresComponent {
  livres: Projet[] = livres;
}
