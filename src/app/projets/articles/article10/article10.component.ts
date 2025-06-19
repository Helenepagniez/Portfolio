import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article10',
  imports: [CommonModule, RouterModule],
  templateUrl: './article10.component.html',
  styleUrls: ['./article10.component.css'],
})
export class Article10Component {
  imagePath: string = environment.imagePath + 'articles/article10/';
}
