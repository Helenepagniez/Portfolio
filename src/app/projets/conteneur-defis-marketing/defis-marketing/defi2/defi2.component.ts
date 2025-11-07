import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-defi2',
  imports: [CommonModule, RouterModule],
  templateUrl: './defi2.component.html',
  styleUrl: './defi2.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Defi2Component {
  imagePath: string = environment.imagePath + 'defis-marketing/defi2/';
  expandedImageSrc = signal<string | null>(null);
  windowScrolled = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  onImageClick(imageSrc: string): void {
    this.expandedImageSrc.set(imageSrc);
  }

  closeImage(): void {
    this.expandedImageSrc.set(null);
  }

  ngOnInit() {}
}
