import { environment } from 'src/app/environments/environment';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-defi1',
  imports: [CommonModule, RouterModule],
  templateUrl: './defi1.component.html',
  styleUrls: ['./defi1.component.css'],
})
export class Defi1Component {
  imagePath: string = environment.imagePath + 'defis-marketing/defi1/';
  expandedImageSrc = signal<string | null>(null);

  onImageClick(imageSrc: string): void {
    this.expandedImageSrc.set(imageSrc);
  }

  closeImage(): void {
    this.expandedImageSrc.set(null);
  }
}
