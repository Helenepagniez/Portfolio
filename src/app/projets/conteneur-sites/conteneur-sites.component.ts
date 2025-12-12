import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CarteComponent } from '../carte/carte.component';
import { InfoDialogComponent } from 'src/app/shared/components/info-dialog/info-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Projet } from 'src/app/core/interfaces/projet';
import { sites } from 'src/assets/data/sites';

@Component({
  selector: 'app-conteneur-sites',
  imports: [CommonModule, CarteComponent],
  templateUrl: './conteneur-sites.component.html',
  styleUrl: './conteneur-sites.component.css',
})
export class ConteneurSitesComponent {
  sites: Projet[] = sites;
  dialog = inject(MatDialog);

  openDialog(projet: Projet): void {
    this.dialog.open(InfoDialogComponent, {
      data: projet,
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
