import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Projet } from 'src/app/core/interfaces/projet';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-carte-livre',
  imports: [CommonModule, RouterModule],
  templateUrl: './carte-livre.component.html',
  styleUrl: './carte-livre.component.css',
})
export class CarteLivreComponent {
  imagePath: string = environment.imagePath;
  projet = input.required<Projet>();
}
