import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/pages/auth/login/login.component';
import { RegistrationComponent } from 'src/app/pages/auth/registration/registration.component';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      maxWidth: '100%',
      width: '75%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    });
  }


  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      maxWidth: '100%',
      width: '75%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    });
  }



  ngOnInit() {
  }


}
