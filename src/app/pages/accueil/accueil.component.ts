import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CHAPTERS, CONTACT, SECTORS, SKILL_GROUPS } from '../../core/data/profil';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink, IconComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccueilComponent {
  protected readonly contact = CONTACT;
  protected readonly chapters = CHAPTERS;
  protected readonly sectors = SECTORS;
  protected readonly skills = SKILL_GROUPS;

  /** Progression 0 → 1 de l’animation des chiffres (1 = valeurs finales). */
  private readonly progress = signal(1);
  protected readonly stats = computed(() => {
    const p = this.progress();
    return {
      years: Math.round(4 * p),
      weekly: Math.round(150 * p),
      grandsComptes: Math.round(60 * p),
      sectors: Math.round(3 * p),
      companies: Math.round(4 * p),
    };
  });

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
      let frame = 0;
      const start = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - start) / 1500);
        this.progress.set(1 - Math.pow(1 - k, 3));
        if (k < 1) frame = requestAnimationFrame(step);
      };
      this.progress.set(0);
      frame = requestAnimationFrame(step);
      destroyRef.onDestroy(() => cancelAnimationFrame(frame));
    });
  }
}
