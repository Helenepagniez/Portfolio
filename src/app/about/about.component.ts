import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { Component } from '@angular/core';
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

  activeFormation() {
    this.isActivedFormation = true;
    this.isActivedExperience = false;
  }

  activeExperience() {
    this.isActivedFormation = false;
    this.isActivedExperience = true;
  }
}
