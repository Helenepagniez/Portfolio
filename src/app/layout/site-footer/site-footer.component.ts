import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CONTACT, NAV } from '../../core/data/profil';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  private readonly document = inject(DOCUMENT);
  protected readonly nav = NAV;
  protected readonly contact = CONTACT;
  protected readonly year = new Date().getFullYear();

  toTop(): void {
    this.document.defaultView?.scrollTo({ top: 0 });
  }
}
