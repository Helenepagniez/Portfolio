import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-projets-master',
  imports: [CommonModule, RouterModule],
  templateUrl: './projets-master.component.html',
  styleUrls: ['./projets-master.component.css'],
})
export class ProjetsMasterComponent {
  imagePath: string = environment.imagePath + 'projets-master/';
}
