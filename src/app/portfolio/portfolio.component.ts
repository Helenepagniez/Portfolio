import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppComponentDialog } from '../dialog/dialog.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imagePath: string = environment.imagePath;
  
  constructor(private router: Router,
    public dialog: MatDialog) { }


  openDialog(projet: string) {
    const dialogRef = this.dialog.open(AppComponentDialog,
      {
        data: {
          projet: projet
        }
      }
    );
  }
}
