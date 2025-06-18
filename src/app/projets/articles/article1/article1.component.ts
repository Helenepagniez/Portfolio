import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article1',
  templateUrl: './article1.component.html',
  styleUrls: ['./article1.component.css'],
})
export class Article1Component {
  imagePath: string = environment.imagePath + 'articles/article1/';
}
