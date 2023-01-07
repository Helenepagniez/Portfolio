import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  onSubmit(contactForm: NgForm){
    if(contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mvonpkab',
        { nom: email.nom, replyto: email.email, sujet: email.sujet, message: email.message },
        { 'headers': headers }).subscribe(
          (response: any) => {
            contactForm.reset();
            this.snackBar.open("Message envoyé", "Fermer", {duration: 2000});
          }
      );
    }
  }
}
