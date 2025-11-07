import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-livre2',
  imports: [CommonModule, RouterModule],
  templateUrl: './livre2.component.html',
  styleUrl: './livre2.component.css',
})
export class Livre2Component {
  imagePath: string = environment.imagePath + 'livres/';
}
