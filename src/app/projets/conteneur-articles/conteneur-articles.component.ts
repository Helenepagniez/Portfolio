import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Projet } from 'src/app/core/interfaces/projet';
import { InfoDialogComponent } from 'src/app/shared/components/info-dialog/info-dialog.component';
import { articles } from 'src/assets/data/articles';
import { CarteComponent } from '../carte/carte.component';

@Component({
  selector: 'app-conteneur-articles',
  imports: [CommonModule, CarteComponent],
  templateUrl: './conteneur-articles.component.html',
  styleUrl: './conteneur-articles.component.css',
})
export class ConteneurArticlesComponent {
  articles: Projet[] = articles;
  dialog = inject(MatDialog);

  openDialog(projet: Projet): void {
    this.dialog.open(InfoDialogComponent, {
      data: projet,
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
