import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article9',
  templateUrl: './article9.component.html',
  styleUrls: ['./article9.component.css'],
})
export class Article9Component {
  imagePath: string = environment.imagePath + 'articles/article9/';
}
