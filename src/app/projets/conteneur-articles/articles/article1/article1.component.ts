import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article1',
  imports: [CommonModule, RouterModule],
  templateUrl: './article1.component.html',
  styleUrls: ['./article1.component.css'],
})
export class Article1Component {
  imagePath: string = environment.imagePath + 'articles/article1/';
}
