import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-creation-contenu',
  templateUrl: './creation-contenu.component.html',
  styleUrls: ['./creation-contenu.component.css']
})
export class CreationContenuComponent {
  imagePath: string = environment.imagePath;
}
