import { CommonModule, DOCUMENT } from '@angular/common';
import { environment } from '../environments/environment';
import { Component, HostListener, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  filePath: string = environment.filePath;
  imagePath: string = environment.imagePath;
  isActivedFormation: boolean = true;
  isActivedExperience: boolean = false;
  windowScrolled = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  activeFormation() {
    this.isActivedFormation = true;
    this.isActivedExperience = false;
  }

  activeExperience() {
    this.isActivedFormation = false;
    this.isActivedExperience = true;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop =
      window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    this.windowScrolled = scrollTop > 100;
  }
}
