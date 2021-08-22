import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ClientRegistrationComponent } from "src/app/client-registration/pages/client.registration.component";
import { LoginComponent } from "src/app/login/pages/login.component";
import { TyneRoutes } from "src/app/shared/constants/url-routes";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input()
  public isWhiteLogo = true;

  public constructor(public dialog: MatDialog, private router: Router) {}

  public openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(ClientRegistrationComponent, {
      maxWidth: "100%",
      width: "75%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("Closed");
    });
  }

  public openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      maxWidth: "100%",
      width: "40%",
      maxHeight: "100%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("Closed");
    });
  }

  public ngOnInit(): void {
    //
  }

  public getLogo(): string {
    return this.isWhiteLogo ? "/assets/logo-home.png" : "/assets/logo2 1.png";
  }

  public redirectToBusinessRegistration(): void {
    this.router.navigate(["/" + TyneRoutes.BusinessRegister]);
  }
}
