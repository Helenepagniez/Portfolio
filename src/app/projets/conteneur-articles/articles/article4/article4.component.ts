import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article4',
  imports: [CommonModule, RouterModule],
  templateUrl: './article4.component.html',
  styleUrls: ['./article4.component.css'],
})
export class Article4Component {
  imagePath: string = environment.imagePath + 'articles/article4/';
}
