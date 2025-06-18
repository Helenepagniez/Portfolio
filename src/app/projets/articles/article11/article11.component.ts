import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article11',
  templateUrl: './article11.component.html',
  styleUrls: ['./article11.component.css'],
})
export class Article11Component {
  imagePath: string = environment.imagePath + 'articles/article11/';
}
