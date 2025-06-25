import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-defi2',
  imports: [CommonModule, RouterModule],
  templateUrl: './defi2.component.html',
  styleUrl: './defi2.component.css',
})
export class Defi2Component {
  imagePath: string = environment.imagePath + 'defis-marketing/defi2/';
  expandedImageSrc = signal<string | null>(null);

  onImageClick(imageSrc: string): void {
    this.expandedImageSrc.set(imageSrc);
  }

  closeImage(): void {
    this.expandedImageSrc.set(null);
  }
}
