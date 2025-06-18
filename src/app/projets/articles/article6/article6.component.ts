import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article6',
  templateUrl: './article6.component.html',
  styleUrls: ['./article6.component.css'],
})
export class Article6Component {
  imagePath: string = environment.imagePath + 'articles/article6/';
}
