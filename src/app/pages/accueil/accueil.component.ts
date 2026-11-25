import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CHAPTERS, CONTACT, SECTORS, SKILL_GROUPS } from '../../core/data/profil';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink, IconComponent, RevealDirective],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccueilComponent {
  protected readonly contact = CONTACT;
  protected readonly chapters = CHAPTERS;
  protected readonly sectors = SECTORS;
  protected readonly skills = SKILL_GROUPS;

  /** Progression de 0 à 1 de l’animation des chiffres (1 = valeurs finales). */
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
    const host = inject<ElementRef<HTMLElement>>(ElementRef);

    // Les chiffres défilent quand le bloc devient visible à l’écran
    afterNextRender(() => {
      const panel = host.nativeElement.querySelector('.kpi-panel');
      if (!panel || !('IntersectionObserver' in window)) return;
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

      let frame = 0;
      this.progress.set(0);
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          observer.disconnect();
          const start = performance.now();
          const step = (now: number) => {
            const k = Math.min(1, (now - start) / 1500);
            this.progress.set(1 - Math.pow(1 - k, 3));
            if (k < 1) frame = requestAnimationFrame(step);
          };
          frame = requestAnimationFrame(step);
        },
        { threshold: 0.3 }
      );
      observer.observe(panel);
      destroyRef.onDestroy(() => {
        observer.disconnect();
        cancelAnimationFrame(frame);
      });
    });
  }
}
