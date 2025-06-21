import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-projet7',
  imports: [CommonModule, RouterModule],
  templateUrl: './projet7.component.html',
  styleUrl: './projet7.component.css',
})
export class Projet7Component {
  filePath: string = environment.filePath;
  imagePath: string = environment.imagePath + 'projets-master/projet7/';
  expandedImageSrc = signal<string | null>(null);

  onImageClick(imageSrc: string): void {
    this.expandedImageSrc.set(imageSrc);
  }

  closeImage(): void {
    this.expandedImageSrc.set(null);
  }
}
