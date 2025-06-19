import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article2',
  imports: [CommonModule, RouterModule],
  templateUrl: './article2.component.html',
  styleUrls: ['./article2.component.css'],
})
export class Article2Component {
  imagePath: string = environment.imagePath + 'articles/article2/';
}
