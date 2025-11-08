import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { Projet } from 'src/app/core/interfaces/projet';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-carte-livre',
  imports: [CommonModule],
  templateUrl: './carte-livre.component.html',
  styleUrl: './carte-livre.component.css',
})
export class CarteLivreComponent {
  imagePath: string = environment.imagePath;
  projet = input.required<Projet>();
  @Output() openDialogEvent = new EventEmitter<void>();

  openDialog(): void {
    this.openDialogEvent.emit();
  }
}
