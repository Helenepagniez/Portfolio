import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-projet5',
  imports: [CommonModule, RouterModule],
  templateUrl: './projet5.component.html',
  styleUrl: './projet5.component.css',
})
export class Projet5Component {
  filePath: string = environment.filePath;
  imagePath: string = environment.imagePath + 'projets-master/projet5/';
  expandedImageSrc = signal<string | null>(null);

  onImageClick(imageSrc: string): void {
    this.expandedImageSrc.set(imageSrc);
  }

  closeImage(): void {
    this.expandedImageSrc.set(null);
  }
}
