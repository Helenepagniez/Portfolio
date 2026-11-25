import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CONTACT } from '../../core/data/profil';
import { IconComponent } from '../../shared/icon/icon.component';

type Status = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact-page',
  imports: [FormsModule, IconComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly contact = CONTACT;

  protected nom = '';
  protected email = '';
  protected entreprise = '';
  protected sujet = '';
  protected message = '';

  protected readonly status = signal<Status>('idle');
  protected readonly error = signal('');
  protected readonly copied = signal(false);
  private copyTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    this.destroyRef.onDestroy(() => clearTimeout(this.copyTimer));
  }

  async copyMail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.contact.email);
      this.copied.set(true);
      clearTimeout(this.copyTimer);
      this.copyTimer = setTimeout(() => this.copied.set(false), 2200);
    } catch {
      /* presse-papiers indisponible : l’adresse reste visible et cliquable */
    }
  }

  send(): void {
    const problem = this.validate();
    if (problem) {
      this.error.set('Le formulaire est incomplet : ' + problem);
      this.status.set('error');
      return;
    }
    this.error.set('');
    this.status.set('sending');
    this.http
      .post('https://formspree.io/f/mvonpkab', {
        nom: this.nom.trim(),
        replyto: this.email.trim(),
        entreprise: this.entreprise.trim(),
        sujet: this.sujet.trim(),
        message: this.message.trim(),
      })
      .subscribe({
        next: () => {
          this.reset();
          this.status.set('sent');
        },
        error: () => {
          this.error.set(
            'Une erreur s’est produite lors de l’envoi. Vous pouvez réessayer ou m’écrire directement par e-mail.'
          );
          this.status.set('error');
        },
      });
  }

  newMessage(): void {
    this.status.set('idle');
  }

  private validate(): string | null {
    const required = [this.nom, this.email, this.sujet, this.message].map((v) => v.trim());
    if (required.some((v) => v === '')) return 'merci de remplir le nom, l’e-mail, le sujet et le message.';
    if (required.some((v) => v.length < 2)) return 'un des champs est trop court.';
    const [user, domain, ...rest] = this.email.trim().split('@');
    if (!user || !domain || rest.length || user.length < 2 || domain.length < 2 || !domain.includes('.')) {
      return 'l’adresse e-mail ne semble pas valide.';
    }
    return null;
  }

  private reset(): void {
    this.nom = '';
    this.email = '';
    this.entreprise = '';
    this.sujet = '';
    this.message = '';
  }
}
