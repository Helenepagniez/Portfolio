import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-projet5',
  imports: [CommonModule, RouterModule],
  templateUrl: './projet5.component.html',
  styleUrl: './projet5.component.css',
})
export class Projet5Component {
  filePath: string = environment.filePath;
  imagePath: string = environment.imagePath + 'projets-master/projet5/';
  expandedImageSrc = signal<string | null>(null);

  onImageClick(imageSrc: string): void {
    this.expandedImageSrc.set(imageSrc);
  }

  closeImage(): void {
    this.expandedImageSrc.set(null);
  }

  windowScrolled = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop =
      window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    this.windowScrolled = scrollTop > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {}
}
