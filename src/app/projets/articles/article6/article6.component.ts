import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-article6',
  imports: [CommonModule, RouterModule],
  templateUrl: './article6.component.html',
  styleUrls: ['./article6.component.css'],
})
export class Article6Component {
  imagePath: string = environment.imagePath + 'articles/article6/';
  windowScrolled = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop =
      window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    this.windowScrolled = scrollTop > 100;
  }
}
