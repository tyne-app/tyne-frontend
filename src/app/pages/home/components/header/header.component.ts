import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { RegistrationComponent } from 'src/app/pages/auth/registration/registration.component';


/*
  Se implementa el modal (dialog de angular material) para la creación de la vista registro, esta se encuentra en (../../../auth/registration).
  Para ver implementacion de este -> https://v8.material.angular.io/components/dialog/overview
  Falta. Implementación de logica de registro.
*/

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      maxWidth: '100%',
      width: '75%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed')
    });
  }

  ngOnInit() {
  }

}
