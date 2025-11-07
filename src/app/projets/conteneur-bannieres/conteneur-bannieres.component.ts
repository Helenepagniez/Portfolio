import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Projet } from 'src/app/core/interfaces/projet';
import { bannieres } from 'src/assets/data/bannieres';
import { CarteBanniereComponent } from './carte-banniere/carte-banniere.component';

@Component({
  selector: 'app-conteneur-bannieres',
  imports: [CommonModule, CarteBanniereComponent],
  templateUrl: './conteneur-bannieres.component.html',
  styleUrl: './conteneur-bannieres.component.css',
})
export class ConteneurBannieresComponent {
  bannieres: Projet[] = bannieres;
}
