import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article5',
  imports: [CommonModule, RouterModule],
  templateUrl: './article5.component.html',
  styleUrls: ['./article5.component.css'],
})
export class Article5Component {
  imagePath: string = environment.imagePath + 'articles/article5/';
}
