import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Projet } from 'src/app/core/interfaces/projet';
import { InfoDialogComponent } from 'src/app/shared/components/info-dialog/info-dialog.component';
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
  dialog = inject(MatDialog);

  openDialog(projet: Projet): void {
    this.dialog.open(InfoDialogComponent, {
      data: projet,
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
