import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/pages/auth/login/login.component';
import { RegistrationComponent } from 'src/app/pages/auth/registration/registration.component';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent implements OnInit {
  
  @Input()
  public isWhiteLogo: boolean = true;

  constructor(public dialog: MatDialog) { }

  public openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      maxWidth: '100%',
      width: '75%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Closed');
    });
  }

  public openLoginDialog(): void {
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

  public getLogo() {
    return this.isWhiteLogo ? "/assets/logo-home.png" : "/assets/logo2 1.png";
  }
}
