import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Projet } from 'src/app/core/interfaces/projet';
import { articles } from 'src/assets/data/articles';
import { CarteComponent } from '../carte/carte.component';

@Component({
  selector: 'app-conteneur-articles',
  imports: [CommonModule, RouterModule, CarteComponent],
  templateUrl: './conteneur-articles.component.html',
  styleUrl: './conteneur-articles.component.css',
})
export class ConteneurArticlesComponent {
  articles: Projet[] = articles;
}
