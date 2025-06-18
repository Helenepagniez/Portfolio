import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-bannieres',
  templateUrl: './bannieres.component.html',
  styleUrls: ['./bannieres.component.css'],
})
export class BannieresComponent {
  imagePath: string = environment.imagePath + 'creations-contenu/bannieres/';
}
