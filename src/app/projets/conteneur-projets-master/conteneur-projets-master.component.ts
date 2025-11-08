import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Projet } from 'src/app/core/interfaces/projet';
import { InfoDialogComponent } from 'src/app/shared/components/info-dialog/info-dialog.component';
import { projetsMaster } from 'src/assets/data/projets-master';
import { CarteComponent } from '../carte/carte.component';

@Component({
  selector: 'app-conteneur-projets-master',
  imports: [CommonModule, CarteComponent],
  templateUrl: './conteneur-projets-master.component.html',
  styleUrl: './conteneur-projets-master.component.css',
})
export class ConteneurProjetsMasterComponent {
  projetsMaster: Projet[] = projetsMaster;
  dialog = inject(MatDialog);

  openDialog(projet: Projet): void {
    this.dialog.open(InfoDialogComponent, {
      data: projet,
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
