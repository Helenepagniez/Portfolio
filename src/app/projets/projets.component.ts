import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {
  imagePath: string = environment.imagePath;
  pageActive?: string;

  retour(): void {
    this.pageActive = undefined;
  }

  activePage(pageAActiver: string): void {
    this.pageActive = pageAActiver;
  }
}
