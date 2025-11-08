import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { Projet } from 'src/app/core/interfaces/projet';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-carte',
  imports: [CommonModule],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css',
})
export class CarteComponent {
  imagePath: string = environment.imagePath;
  projet = input.required<Projet>();
  @Output() openDialogEvent = new EventEmitter<void>();

  openDialog(): void {
    this.openDialogEvent.emit();
  }
}
