import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Projet } from 'src/app/core/interfaces/projet';
import { designsAdobe } from 'src/assets/data/designs-adobe';
import { CarteComponent } from '../carte/carte.component';

@Component({
  selector: 'app-conteneur-adobe',
  imports: [CommonModule, CarteComponent],
  templateUrl: './conteneur-adobe.component.html',
  styleUrl: './conteneur-adobe.component.css',
})
export class ConteneurAdobeComponent {
  designsAdobe: Projet[] = designsAdobe;
}
