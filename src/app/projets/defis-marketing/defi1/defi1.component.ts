import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-defi1',
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
