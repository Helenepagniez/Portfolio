import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-defis-marketing',
  imports: [CommonModule, RouterModule],
  templateUrl: './defis-marketing.component.html',
  styleUrls: ['./defis-marketing.component.css'],
})
export class DefisMarketingComponent {
  imagePath: string = environment.imagePath + 'defis-marketing/';
}
