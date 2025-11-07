import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Projet } from 'src/app/core/interfaces/projet';
import { defisMarketing } from 'src/assets/data/defis-marketing';
import { CarteComponent } from '../carte/carte.component';

@Component({
  selector: 'app-conteneur-defis-marketing',
  imports: [CommonModule, RouterModule, CarteComponent],
  templateUrl: './conteneur-defis-marketing.component.html',
  styleUrl: './conteneur-defis-marketing.component.css',
})
export class ConteneurDefisMarketingComponent {
  defisMarketing: Projet[] = defisMarketing;
}
