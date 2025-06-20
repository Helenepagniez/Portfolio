import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-projet1',
  imports: [CommonModule, RouterModule],
  templateUrl: './projet1.component.html',
  styleUrl: './projet1.component.css',
})
export class Projet1Component {
  filePath: string = environment.filePath;
  imagePath: string = environment.imagePath + 'projets-master/projet1/';
  expandedImageSrc = signal<string | null>(null);

  onImageClick(imageSrc: string): void {
    this.expandedImageSrc.set(imageSrc);
  }

  closeImage(): void {
    this.expandedImageSrc.set(null);
  }
}
