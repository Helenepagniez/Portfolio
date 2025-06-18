import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-defis-marketing',
  templateUrl: './defis-marketing.component.html',
  styleUrls: ['./defis-marketing.component.css'],
})
export class DefisMarketingComponent {
  imagePath: string = environment.imagePath + 'defis-marketing/';
}
