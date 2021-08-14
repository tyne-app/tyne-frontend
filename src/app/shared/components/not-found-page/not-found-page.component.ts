import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClientRegistrationComponent } from 'src/app/client-registration/pages/client.registration.component';
import { LoginComponent } from 'src/app/login/pages/login.component';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  @Input()
  public isWhiteLogo: boolean = true;

  constructor(public dialog: MatDialog) { }

  public openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(ClientRegistrationComponent, {
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
 