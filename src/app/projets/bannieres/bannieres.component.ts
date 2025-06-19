import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-bannieres',
  imports: [CommonModule, RouterModule],
  templateUrl: './bannieres.component.html',
  styleUrls: ['./bannieres.component.css'],
})
export class BannieresComponent {
  imagePath: string = environment.imagePath + 'bannieres/';
}
