import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})



export class AppComponentDialog implements OnInit{
  imagePath: string = environment.imagePath;
  activeBooki: boolean = false;
  activeOhmyfood: boolean = false;
  activeLapanthere: boolean = false;
  activeKanap: boolean = false;
  activePiiquante: boolean = false;
  activeGroupomania: boolean = false;
  activeFoodlove: boolean = false;

  constructor(public dialogRef: MatDialogRef<AppComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(){
    if (this.data.projet === 'Booki') {
      this.activeBooki = true;
    }
    else if (this.data.projet === 'Ohmyfood') {
      this.activeOhmyfood = true;
    }
    else if (this.data.projet === 'La panthère') {
      this.activeLapanthere = true;
    }
    else if (this.data.projet === 'Kanap') {
      this.activeKanap = true;
    }
    else if (this.data.projet === 'Piiquante') {
      this.activePiiquante = true;
    }
    else if (this.data.projet === 'Groupomania') {
      this.activeGroupomania = true;
    }
    else if (this.data.projet === 'Foodlove') {
      this.activeFoodlove = true;
    }
    else {
      console.log("Erreur de selection du projet");
    }
  }

  close(): void {
    this.dialogRef.close(false);
  }
}