import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ClientRegistrationComponent } from "src/app/client-registration/pages/client.registration.component";
import { LoginComponent } from "src/app/login/pages/login.component";

@Component({
  selector: "app-not-found-page",
  templateUrl: "./not-found-page.component.html",
  styleUrls: ["./not-found-page.component.scss"],
})
export class NotFoundPageComponent implements OnInit {
  @Input()
  public isWhiteLogo = true;

  public constructor(public dialog: MatDialog, public router: Router) {}

  public openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(ClientRegistrationComponent, {
      maxWidth: "100%",
      width: "75%",
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  public openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      maxWidth: "100%",
      width: "75%",
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  public ngOnInit(): void {}

  public getLogo(): string {
    return this.isWhiteLogo ? "/assets/logo-home.png" : "/assets/logo2 1.png";
  }

  public goToHome(): void {
    this.router.navigateByUrl("/");
  }
}
