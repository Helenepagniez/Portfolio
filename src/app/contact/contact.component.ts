import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  nom?: string;
  email?: string;
  sujet?: string;
  message?: string;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  sendMessage(): void {
    if (
      this.isAnElementMissing() ||
      this.isAnElementNotLongEnough() ||
      this.isEmailInvalid()
    ) {
      const raisonMessage: string = this.getErrorMessage();
      const message: string = 'Le formulaire est invalide car ' + raisonMessage;
      this.snackBar.open(message, 'Fermer', {
        duration: 2000,
      });
      return;
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http
      .post(
        'https://formspree.io/f/mvonpkab',
        {
          nom: this.nom,
          replyto: this.email,
          sujet: this.sujet,
          message: this.message,
        },
        { headers: headers }
      )
      .subscribe({
        next: (response: any) => {
          this.resetForm();
          this.snackBar.open('Message envoyé', 'Fermer', { duration: 2000 });
        },
        error: (error: HttpErrorResponse) => {
          this.resetForm();
          this.snackBar.open(
            "Une erreur s'est produite lors de l'envoi",
            'Fermer',
            { duration: 2000 }
          );
        },
      });
  }

  resetForm(): void {
    this.nom = undefined;
    this.email = undefined;
    this.sujet = undefined;
    this.message = undefined;
  }

  getErrorMessage(): string {
    if (this.isAnElementMissing()) {
      return this.isAnElementMissing()!;
    } else if (this.isAnElementNotLongEnough()) {
      return this.isAnElementNotLongEnough()!;
    } else if (this.isEmailInvalid()) {
      return this.isEmailInvalid()!;
    }
    return " une erreur inconnue s'est produite !";
  }

  isEmailInvalid(): string | undefined {
    let message: string | undefined;
    if (
      !this.email ||
      !this.email.includes('@') ||
      !this.email.trim().split('@')[0] ||
      !this.email.trim().split('@')[1] ||
      this.email.trim().split('@').length > 2 ||
      this.email.trim().split('@')[0].length < 2 ||
      this.email.trim().split('@')[1].length < 2
    ) {
      message = "l'email est invalide !";
    }
    return message;
  }

  isAnElementMissing(): string | undefined {
    let message: string | undefined;
    if (
      !this.nom ||
      !this.email ||
      !this.sujet ||
      !this.message ||
      this.nom.trim() === '' ||
      this.email.trim() === '' ||
      this.sujet.trim() === '' ||
      this.message.trim() === ''
    ) {
      message = 'un élément est vide !';
    }
    return message;
  }

  isAnElementNotLongEnough(): string | undefined {
    let message: string | undefined;
    if (
      !this.nom ||
      !this.email ||
      !this.sujet ||
      !this.message ||
      this.nom.trim().length < 2 ||
      this.email.trim().length < 2 ||
      this.sujet.trim().length < 2 ||
      this.message.trim().length < 2
    ) {
      message = 'un élément est trop court !';
    }
    return message;
  }
}
