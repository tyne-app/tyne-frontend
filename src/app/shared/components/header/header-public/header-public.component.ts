import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { LoginComponent } from "@app/auth/login/login.component";
import { ClientRegistrationComponent } from "@app/client/client-registration/client.registration.component";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";

@Component({
  selector: "app-header-public",
  templateUrl: "./header-public.component.html",
  styleUrls: ["./header-public.component.scss"],
})
export class HeaderPublicComponent implements OnInit {
  @Input()
  public isWhiteLogo = true;

  public constructor(public dialog: MatDialog, private router: Router) {}

  public ngOnInit(): void {}

  public openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(ClientRegistrationComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "business-profile-dialog",
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  public openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      maxWidth: "95%",
      minWidth: "40%",
      maxHeight: "100%",
      panelClass: "login-dialog",
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  public redirectToBusinessRegistration(): void {
    this.router.navigate([`${TyneRoutes.BusinessRegister}`]);
  }
}
