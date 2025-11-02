import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-adobe',
  imports: [CommonModule, RouterModule],
  templateUrl: './adobe.component.html',
  styleUrl: './adobe.component.css',
})
export class AdobeComponent {
  imagePath: string = environment.imagePath + 'adobe/';
}
