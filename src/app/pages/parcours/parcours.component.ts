import { ChangeDetectionStrategy, Component, ElementRef, afterNextRender, signal, viewChild } from '@angular/core';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { RouterLink } from '@angular/router';
import { CHAPTERS, DIPLOMAS, Diploma, EXPERIENCES, LANGUAGES, LEVELS, MASTER } from '../../core/data/profil';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-parcours',
  imports: [RouterLink, IconComponent, RevealDirective],
  host: { '(window:scroll)': 'updateProgress()', '(window:resize)': 'updateProgress()' },
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParcoursComponent {
  protected readonly chapters = CHAPTERS;
  protected readonly experiences = EXPERIENCES;
  protected readonly master = MASTER;
  protected readonly diplomas = DIPLOMAS;
  protected readonly languages = LANGUAGES;
  protected readonly levels = LEVELS;

  protected readonly preview = signal<Diploma | null>(null);
  /** Remplissage de la frise des expériences (0 à 1), selon le défilement. */
  protected readonly progress = signal(0);
  private readonly timeline = viewChild.required<ElementRef<HTMLElement>>('timeline');

  constructor() {
    afterNextRender(() => this.updateProgress());
  }

  updateProgress(): void {
    const rect = this.timeline().nativeElement.getBoundingClientRect();
    const target = window.innerHeight * 0.65;
    const value = (target - rect.top) / rect.height;
    this.progress.set(Math.max(0, Math.min(1, value)));
  }
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('apercu');

  /** Ouvre l’aperçu au centre de l’écran, sans faire défiler la page. */
  open(diploma: Diploma): void {
    this.preview.set(diploma);
    this.dialog().nativeElement.showModal();
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  /** Un clic sur le fond assombri ferme l’aperçu. */
  onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) this.close();
  }
}
