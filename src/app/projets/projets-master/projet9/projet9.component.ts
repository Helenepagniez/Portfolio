import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-projet9',
  imports: [CommonModule, RouterModule],
  templateUrl: './projet9.component.html',
  styleUrl: './projet9.component.css',
})
export class Projet9Component {
  filePath: string = environment.filePath;
  imagePath: string = environment.imagePath + 'projets-master/projet9/';
  expandedImageSrc = signal<string | null>(null);

  onImageClick(imageSrc: string): void {
    this.expandedImageSrc.set(imageSrc);
  }

  closeImage(): void {
    this.expandedImageSrc.set(null);
  }
}
