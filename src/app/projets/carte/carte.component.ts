import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Projet } from 'src/app/core/interfaces/projet';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-carte',
  imports: [CommonModule, RouterModule],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css',
})
export class CarteComponent {
  imagePath: string = environment.imagePath;
  projet = input.required<Projet>();
}
