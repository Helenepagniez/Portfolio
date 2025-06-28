import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
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
