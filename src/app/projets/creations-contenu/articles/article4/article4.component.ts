import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article4',
  templateUrl: './article4.component.html',
  styleUrls: ['./article4.component.css'],
})
export class Article4Component {
  imagePath: string =
    environment.imagePath + 'creations-contenu/articles/article4/';
}
