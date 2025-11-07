import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Projet } from 'src/app/core/interfaces/projet';
import { projetsMaster } from 'src/assets/data/projets-master';
import { CarteComponent } from '../carte/carte.component';

@Component({
  selector: 'app-conteneur-projets-master',
  imports: [CommonModule, RouterModule, CarteComponent],
  templateUrl: './conteneur-projets-master.component.html',
  styleUrl: './conteneur-projets-master.component.css',
})
export class ConteneurProjetsMasterComponent {
  projetsMaster: Projet[] = projetsMaster;
}
