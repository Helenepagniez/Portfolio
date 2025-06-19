import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article11',
  imports: [CommonModule, RouterModule],
  templateUrl: './article11.component.html',
  styleUrls: ['./article11.component.css'],
})
export class Article11Component {
  imagePath: string = environment.imagePath + 'articles/article11/';
}
