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
  selector: 'app-projet8',
  imports: [CommonModule, RouterModule],
  templateUrl: './projet8.component.html',
  styleUrl: './projet8.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Projet8Component {
  filePath: string = environment.filePath;
  imagePath: string = environment.imagePath + 'projets-master/projet8/';
  expandedImageSrc = signal<string | null>(null);
  windowScrolled = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  onImageClick(imageSrc: string): void {
    this.expandedImageSrc.set(imageSrc);
  }

  closeImage(): void {
    this.expandedImageSrc.set(null);
  }
}
