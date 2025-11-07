import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article7',
  imports: [CommonModule, RouterModule],
  templateUrl: './article7.component.html',
  styleUrls: ['./article7.component.css'],
})
export class Article7Component {
  imagePath: string = environment.imagePath + 'articles/article7/';
}
