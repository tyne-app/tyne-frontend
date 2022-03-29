import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { InvokeDialogAuthService } from "@app/auth/shared/helpers/invoke-dialog-auth.service";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";

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

  public ngOnInit(): void {}

  public openRegistrationDialog(): void {
    const dialogRef = this.invokeDialogAuthService.openRegister();
    dialogRef.afterClosed().subscribe(() => {});
  }

  public openLoginDialog(): void {
    const dialogRef = this.invokeDialogAuthService.openLogin();
    dialogRef.afterClosed().subscribe(() => {});
  }

  public redirectToBusinessRegistration(): void {
    this.router.navigate([`${TyneRoutes.BusinessRegister}`]);
  }
}
