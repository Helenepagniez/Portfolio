import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BOOKS, PASTRIES } from '../../core/data/profil';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

@Component({
  selector: 'app-passions',
  imports: [IconComponent, RevealDirective],
  templateUrl: './passions.component.html',
  styleUrl: './passions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PassionsComponent {
  protected readonly books = BOOKS;
  protected readonly pastries = PASTRIES;
}
