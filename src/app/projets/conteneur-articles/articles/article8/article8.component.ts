import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article8',
  imports: [CommonModule, RouterModule],
  templateUrl: './article8.component.html',
  styleUrls: ['./article8.component.css'],
})
export class Article8Component {
  imagePath: string = environment.imagePath + 'articles/article8/';
}
