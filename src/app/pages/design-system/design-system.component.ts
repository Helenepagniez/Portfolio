import { ChangeDetectionStrategy, Component, afterNextRender, signal } from '@angular/core';
import { ICON_NAMES, IconComponent } from '../../shared/icon/icon.component';

interface Token {
  name: string;
  variable: string;
  usage: string;
}

/**
 * Vitrine du design system : chaque pièce du site, dans tous ses états.
 * Tout ce qui est montré ici vient de src/styles.css : changer une pièce là-bas la change ici et partout.
 */
@Component({
  selector: 'app-design-system',
  imports: [IconComponent],
  templateUrl: './design-system.component.html',
  styleUrl: './design-system.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignSystemComponent {
  protected readonly sommaire = [
    { id: 'couleurs', label: 'Couleurs' },
    { id: 'typographie', label: 'Typographie' },
    { id: 'formes', label: 'Formes et ombres' },
    { id: 'icones', label: 'Icônes' },
    { id: 'boutons', label: 'Boutons' },
    { id: 'etiquettes', label: 'Étiquettes' },
    { id: 'cartes', label: 'Cartes' },
    { id: 'animations', label: 'Animations' },
  ];

  protected readonly couleurs: Token[] = [
    { name: 'Prune foncé', variable: '--dark', usage: 'Surfaces sombres, bouton principal' },
    { name: 'Prune vif', variable: '--accent-ink', usage: 'Survol, liens, chiffres, sur-titres' },
    { name: 'Rose poudré', variable: '--accent', usage: 'Accent sur fond sombre, bouton accent' },
    { name: 'Rose pâle', variable: '--soft', usage: 'Étiquettes, pastilles d’icône' },
    { name: 'Fond', variable: '--bg', usage: 'Fond de page' },
    { name: 'Carte', variable: '--card', usage: 'Fond des cartes' },
  ];

  protected readonly textes: Token[] = [
    { name: 'Encre', variable: '--ink', usage: 'Titres et texte principal' },
    { name: 'Corps', variable: '--body', usage: 'Listes et paragraphes longs' },
    { name: 'Discret', variable: '--muted', usage: 'Textes secondaires' },
    { name: 'Sur sombre', variable: '--on-dark', usage: 'Texte sur surface sombre' },
    { name: 'Sur sombre 2', variable: '--on-dark-2', usage: 'Texte secondaire sur sombre' },
    { name: 'Trait', variable: '--line', usage: 'Séparateurs' },
    { name: 'Trait appuyé', variable: '--line-strong', usage: 'Contour des cartes' },
  ];

  protected readonly arrondis: Token[] = [
    { name: 'Pilule', variable: '--radius-pill', usage: 'Boutons, pastilles' },
    { name: 'Carte', variable: '--radius-card', usage: 'Cartes' },
    { name: 'Panneau', variable: '--radius-panel', usage: 'Grands panneaux sombres' },
  ];

  protected readonly icones = ICON_NAMES;

  /** Valeur réelle de chaque jeton, lue dans la feuille de style. */
  protected readonly valeurs = signal<Record<string, string>>({});
  /** Change de clé pour rejouer l’animation d’apparition. */
  protected readonly rejouer = signal(0);

  constructor() {
    afterNextRender(() => {
      const style = getComputedStyle(document.documentElement);
      const all = [...this.couleurs, ...this.textes, ...this.arrondis];
      this.valeurs.set(Object.fromEntries(all.map((t) => [t.variable, style.getPropertyValue(t.variable).trim()])));
    });
  }

  protected allerA(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
