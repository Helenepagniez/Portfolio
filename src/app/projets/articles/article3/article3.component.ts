import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article3',
  imports: [CommonModule, RouterModule],
  templateUrl: './article3.component.html',
  styleUrls: ['./article3.component.css'],
})
export class Article3Component {
  imagePath: string = environment.imagePath + 'articles/article3/';
}
