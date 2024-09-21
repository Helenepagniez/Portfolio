import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article12',
  templateUrl: './article12.component.html',
  styleUrls: ['./article12.component.css'],
})
export class Article12Component {
  imagePath: string =
    environment.imagePath + 'creations-contenu/articles/article12/';
}
