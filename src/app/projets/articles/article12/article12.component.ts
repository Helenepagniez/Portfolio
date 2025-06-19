import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article12',
  imports: [CommonModule, RouterModule],
  templateUrl: './article12.component.html',
  styleUrls: ['./article12.component.css'],
})
export class Article12Component {
  imagePath: string = environment.imagePath + 'articles/article12/';
}
