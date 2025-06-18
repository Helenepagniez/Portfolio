import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-projets-master',
  templateUrl: './projets-master.component.html',
  styleUrls: ['./projets-master.component.css'],
})
export class ProjetsMasterComponent {
  imagePath: string = environment.imagePath + 'projets-master/';
}
