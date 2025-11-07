import { CommonModule, DOCUMENT } from '@angular/common';
import { computeMsgId } from '@angular/compiler';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
  Inject,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-adobe16',
  imports: [CommonModule, RouterModule],
  templateUrl: './adobe16.component.html',
  styleUrl: './adobe16.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Adobe16Component {
  filePath: string = environment.filePath;
  imagePath: string = environment.imagePath + 'adobe/';
  expandedImageSrc = signal<string | null>(null);
  windowScrolled = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  onImageClick(imageSrc: string): void {
    this.expandedImageSrc.set(imageSrc);
  }

  closeImage(): void {
    this.expandedImageSrc.set(null);
  }

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
