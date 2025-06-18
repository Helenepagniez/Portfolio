import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article7',
  templateUrl: './article7.component.html',
  styleUrls: ['./article7.component.css'],
})
export class Article7Component {
  imagePath: string = environment.imagePath + 'articles/article7/';
}
