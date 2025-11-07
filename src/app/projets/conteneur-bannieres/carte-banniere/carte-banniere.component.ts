import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Projet } from 'src/app/core/interfaces/projet';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-carte-banniere',
  imports: [CommonModule],
  templateUrl: './carte-banniere.component.html',
  styleUrl: './carte-banniere.component.css',
})
export class CarteBanniereComponent {
  imagePath: string = environment.imagePath;
  projet = input.required<Projet>();
}
