import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Projet } from 'src/app/core/interfaces/projet';
import { InfoDialogComponent } from 'src/app/shared/components/info-dialog/info-dialog.component';
import { livres } from 'src/assets/data/livres';
import { CarteLivreComponent } from './carte-livre/carte-livre.component';

@Component({
  selector: 'app-conteneur-livres',
  imports: [CommonModule, CarteLivreComponent],
  templateUrl: './conteneur-livres.component.html',
  styleUrl: './conteneur-livres.component.css',
})
export class ConteneurLivresComponent {
  livres: Projet[] = livres;
  dialog = inject(MatDialog);

  openDialog(projet: Projet): void {
    this.dialog.open(InfoDialogComponent, {
      data: projet,
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
