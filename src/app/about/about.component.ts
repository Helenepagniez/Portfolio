import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
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
