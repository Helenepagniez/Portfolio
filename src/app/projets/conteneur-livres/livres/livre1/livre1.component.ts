import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-livre1',
  imports: [CommonModule, RouterModule],
  templateUrl: './livre1.component.html',
  styleUrl: './livre1.component.css',
})
export class Livre1Component {
  imagePath: string = environment.imagePath + 'livres/';
}
