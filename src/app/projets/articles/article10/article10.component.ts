import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article10',
  templateUrl: './article10.component.html',
  styleUrls: ['./article10.component.css'],
})
export class Article10Component {
  imagePath: string =
    environment.imagePath + 'creations-contenu/articles/article10/';
}
