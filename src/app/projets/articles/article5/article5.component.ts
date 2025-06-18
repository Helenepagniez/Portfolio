import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article5',
  templateUrl: './article5.component.html',
  styleUrls: ['./article5.component.css'],
})
export class Article5Component {
  imagePath: string = environment.imagePath + 'articles/article5/';
}
