import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Projet } from 'src/app/core/interfaces/projet';
import { Adobe1Component } from 'src/app/projets/conteneur-adobe/adobe/adobe1/adobe1.component';
import { Adobe10Component } from 'src/app/projets/conteneur-adobe/adobe/adobe10/adobe10.component';
import { Adobe11Component } from 'src/app/projets/conteneur-adobe/adobe/adobe11/adobe11.component';
import { Adobe12Component } from 'src/app/projets/conteneur-adobe/adobe/adobe12/adobe12.component';
import { Adobe13Component } from 'src/app/projets/conteneur-adobe/adobe/adobe13/adobe13.component';
import { Adobe14Component } from 'src/app/projets/conteneur-adobe/adobe/adobe14/adobe14.component';
import { Adobe15Component } from 'src/app/projets/conteneur-adobe/adobe/adobe15/adobe15.component';
import { Adobe16Component } from 'src/app/projets/conteneur-adobe/adobe/adobe16/adobe16.component';
import { Adobe17Component } from 'src/app/projets/conteneur-adobe/adobe/adobe17/adobe17.component';
import { Adobe18Component } from 'src/app/projets/conteneur-adobe/adobe/adobe18/adobe18.component';
import { Adobe19Component } from 'src/app/projets/conteneur-adobe/adobe/adobe19/adobe19.component';
import { Adobe2Component } from 'src/app/projets/conteneur-adobe/adobe/adobe2/adobe2.component';
import { Adobe3Component } from 'src/app/projets/conteneur-adobe/adobe/adobe3/adobe3.component';
import { Adobe4Component } from 'src/app/projets/conteneur-adobe/adobe/adobe4/adobe4.component';
import { Adobe5Component } from 'src/app/projets/conteneur-adobe/adobe/adobe5/adobe5.component';
import { Adobe6Component } from 'src/app/projets/conteneur-adobe/adobe/adobe6/adobe6.component';
import { Adobe7Component } from 'src/app/projets/conteneur-adobe/adobe/adobe7/adobe7.component';
import { Adobe8Component } from 'src/app/projets/conteneur-adobe/adobe/adobe8/adobe8.component';
import { Adobe9Component } from 'src/app/projets/conteneur-adobe/adobe/adobe9/adobe9.component';
import { Article1Component } from 'src/app/projets/conteneur-articles/articles/article1/article1.component';
import { Article10Component } from 'src/app/projets/conteneur-articles/articles/article10/article10.component';
import { Article11Component } from 'src/app/projets/conteneur-articles/articles/article11/article11.component';
import { Article12Component } from 'src/app/projets/conteneur-articles/articles/article12/article12.component';
import { Article2Component } from 'src/app/projets/conteneur-articles/articles/article2/article2.component';
import { Article3Component } from 'src/app/projets/conteneur-articles/articles/article3/article3.component';
import { Article4Component } from 'src/app/projets/conteneur-articles/articles/article4/article4.component';
import { Article5Component } from 'src/app/projets/conteneur-articles/articles/article5/article5.component';
import { Article6Component } from 'src/app/projets/conteneur-articles/articles/article6/article6.component';
import { Article7Component } from 'src/app/projets/conteneur-articles/articles/article7/article7.component';
import { Article8Component } from 'src/app/projets/conteneur-articles/articles/article8/article8.component';
import { Article9Component } from 'src/app/projets/conteneur-articles/articles/article9/article9.component';
import { Defi1Component } from 'src/app/projets/conteneur-defis-marketing/defis-marketing/defi1/defi1.component';
import { Defi2Component } from 'src/app/projets/conteneur-defis-marketing/defis-marketing/defi2/defi2.component';
import { Defi3Component } from 'src/app/projets/conteneur-defis-marketing/defis-marketing/defi3/defi3.component';
import { Defi4Component } from 'src/app/projets/conteneur-defis-marketing/defis-marketing/defi4/defi4.component';
import { Livre1Component } from 'src/app/projets/conteneur-livres/livres/livre1/livre1.component';
import { Livre2Component } from 'src/app/projets/conteneur-livres/livres/livre2/livre2.component';
import { Projet1Component } from 'src/app/projets/conteneur-projets-master/projets-master/projet1/projet1.component';
import { Projet2Component } from 'src/app/projets/conteneur-projets-master/projets-master/projet2/projet2.component';
import { Projet3Component } from 'src/app/projets/conteneur-projets-master/projets-master/projet3/projet3.component';
import { Projet4Component } from 'src/app/projets/conteneur-projets-master/projets-master/projet4/projet4.component';
import { Projet5Component } from 'src/app/projets/conteneur-projets-master/projets-master/projet5/projet5.component';
import { Projet6Component } from 'src/app/projets/conteneur-projets-master/projets-master/projet6/projet6.component';
import { Projet7Component } from 'src/app/projets/conteneur-projets-master/projets-master/projet7/projet7.component';
import { Projet8Component } from 'src/app/projets/conteneur-projets-master/projets-master/projet8/projet8.component';
import { Site1Component } from 'src/app/projets/conteneur-sites/sites/site1/site1.component';
import { Site2Component } from 'src/app/projets/conteneur-sites/sites/site2/site2.component';

@Component({
  selector: 'app-info-dialog',
  imports: [
    CommonModule,
    Adobe1Component,
    Adobe2Component,
    Adobe3Component,
    Adobe4Component,
    Adobe5Component,
    Adobe6Component,
    Adobe7Component,
    Adobe8Component,
    Adobe9Component,
    Adobe10Component,
    Adobe11Component,
    Adobe12Component,
    Adobe13Component,
    Adobe14Component,
    Adobe15Component,
    Adobe16Component,
    Adobe17Component,
    Adobe18Component,
    Adobe19Component,
    Article1Component,
    Article2Component,
    Article3Component,
    Article4Component,
    Article5Component,
    Article6Component,
    Article7Component,
    Article8Component,
    Article9Component,
    Article10Component,
    Article11Component,
    Article12Component,
    Projet1Component,
    Projet2Component,
    Projet3Component,
    Projet4Component,
    Projet5Component,
    Projet6Component,
    Projet7Component,
    Projet8Component,
    Defi1Component,
    Defi2Component,
    Defi3Component,
    Defi4Component,
    Livre1Component,
    Livre2Component,
    Site1Component,
    Site2Component,
  ],
  templateUrl: './info-dialog.component.html',
  styleUrl: './info-dialog.component.css',
})
export class InfoDialogComponent implements OnInit {
  projet: Projet = {} as Projet;

  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Projet
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.projet = this.data;
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
