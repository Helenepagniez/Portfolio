import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-projet6',
  imports: [CommonModule, RouterModule],
  templateUrl: './projet6.component.html',
  styleUrl: './projet6.component.css',
})
export class Projet6Component {
  filePath: string = environment.filePath;
  imagePath: string = environment.imagePath + 'projets-master/projet6/';
  expandedImageSrc = signal<string | null>(null);

  onImageClick(imageSrc: string): void {
    this.expandedImageSrc.set(imageSrc);
  }

  closeImage(): void {
    this.expandedImageSrc.set(null);
  }
}
