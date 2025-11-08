import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Projet } from 'src/app/core/interfaces/projet';
import { InfoDialogComponent } from 'src/app/shared/components/info-dialog/info-dialog.component';
import { defisMarketing } from 'src/assets/data/defis-marketing';
import { CarteComponent } from '../carte/carte.component';

@Component({
  selector: 'app-conteneur-defis-marketing',
  imports: [CommonModule, CarteComponent],
  templateUrl: './conteneur-defis-marketing.component.html',
  styleUrl: './conteneur-defis-marketing.component.css',
})
export class ConteneurDefisMarketingComponent {
  defisMarketing: Projet[] = defisMarketing;
  dialog = inject(MatDialog);

  openDialog(projet: Projet): void {
    this.dialog.open(InfoDialogComponent, {
      data: projet,
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
