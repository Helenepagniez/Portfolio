import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

export type Palette = 'emeraude' | 'prune';
export type FontChoice = 'jakarta' | 'montserrat' | 'fraunces' | 'playfair';

export interface FontOption {
  id: FontChoice;
  label: string;
  family: string;
}

/**
 * Choix temporaire des couleurs et de la police, le temps de se décider.
 * Le choix est mémorisé dans le navigateur du visiteur.
 */
@Injectable({ providedIn: 'root' })
export class StyleService {
  private readonly document = inject(DOCUMENT);

  readonly fonts: FontOption[] = [
    { id: 'jakarta', label: 'Moderne', family: "'Plus Jakarta Sans', sans-serif" },
    { id: 'montserrat', label: 'Classique', family: "'Montserrat', sans-serif" },
    { id: 'fraunces', label: 'Élégante', family: "'Fraunces', serif" },
    { id: 'playfair', label: 'Éditoriale', family: "'Playfair Display', serif" },
  ];

  readonly palette = signal<Palette>(this.read('hp-palette', ['emeraude', 'prune'], 'emeraude'));
  readonly font = signal<FontChoice>(
    this.read('hp-font', ['jakarta', 'montserrat', 'fraunces', 'playfair'], 'jakarta')
  );

  constructor() {
    effect(() => {
      const root = this.document.documentElement;
      const palette = this.palette();
      const font = this.font();
      root.classList.remove('th-emeraude', 'th-prune');
      this.fonts.forEach((f) => root.classList.remove('ft-' + f.id));
      root.classList.add('th-' + palette, 'ft-' + font);
      this.write('hp-palette', palette);
      this.write('hp-font', font);
    });
  }

  private read<T extends string>(key: string, allowed: T[], fallback: T): T {
    try {
      const value = localStorage.getItem(key) as T | null;
      return value && allowed.includes(value) ? value : fallback;
    } catch {
      return fallback;
    }
  }

  private write(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* stockage indisponible : le choix vaut pour la visite en cours */
    }
  }
}
