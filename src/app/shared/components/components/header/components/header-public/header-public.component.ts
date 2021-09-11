import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { TyneRoutes } from "src/app/shared/constants/url-routes";
import { InvokeDialogAuthService } from "src/app/shared/helpers/invoke-dialog-auth.service";

@Component({
  selector: "app-header-public",
  templateUrl: "./header-public.component.html",
  styleUrls: ["./header-public.component.scss"],
})
export class HeaderPublicComponent implements OnInit {
  @Input()
  public isWhiteLogo = true;

  public constructor(
    public dialog: MatDialog,
    private router: Router,
    private invokeDialogAuthService: InvokeDialogAuthService
  ) {}

  public ngOnInit(): void {
    //
  }

  public openRegistrationDialog(): void {
    const dialogRef = this.invokeDialogAuthService.openRegister();
    dialogRef.afterClosed().subscribe((result) => {
      //
    });
  }

  public openLoginDialog(): void {
    const dialogRef = this.invokeDialogAuthService.openLogin();
    dialogRef.afterClosed().subscribe((result) => {
      //
    });
  }

  public getLogo(): string {
    return this.isWhiteLogo
      ? "/assets/tyne-logo-white.png"
      : "/assets/tyne-logo-color.png";
  }

  public redirectToBusinessRegistration(): void {
    this.router.navigate(["/" + TyneRoutes.BusinessRegister]);
  }
}
