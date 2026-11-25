import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, OnDestroy, afterNextRender, inject, input } from '@angular/core';

/**
 * Ajoute la classe `is-visible` quand l’élément entre à l’écran (une seule fois).
 * Avec la classe `rv`, l’élément apparaît en fondu ; sinon, le CSS du composant
 * peut s’appuyer sur `.is-visible` pour lancer ses propres animations (frises…).
 */
@Directive({
  selector: '[appReveal]',
  host: { '[style.--d]': 'delay() + "ms"' },
})
export class RevealDirective implements OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private observer?: IntersectionObserver;

  /** Délai avant l’animation, en millisecondes. */
  readonly delay = input(0, { alias: 'appReveal', transform: (v: number | string) => Number(v) || 0 });

  constructor() {
    afterNextRender(() => {
      const node = this.el.nativeElement;
      const win = this.document.defaultView;
      if (!win || !('IntersectionObserver' in win)) {
        node.classList.add('is-visible');
        return;
      }
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              node.classList.add('is-visible');
              this.observer?.disconnect();
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );
      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
