import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleService } from './core/services/style.service';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // Instancié ici pour appliquer les couleurs et la police dès le démarrage
  private readonly style = inject(StyleService);
  private readonly contenu = viewChild.required<ElementRef<HTMLElement>>('contenu');

  skipToContent(): void {
    this.contenu().nativeElement.focus();
  }
}
