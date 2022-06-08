import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { DialogComponent } from "../../dialog.component";
import { DialogModel } from "../interfaces/dialog-model";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  public constructor(private dialog: MatDialog, private router: Router) {}

  public openDialog(dialogModel: DialogModel): MatDialogRef<DialogComponent, any> {
    if (this.dialog.openDialogs.length <= 2) {
      const ref = this.dialog.open(DialogComponent, {
        data: dialogModel,
        maxWidth: "95%",
        minWidth: "55%",
        panelClass: "dialog",
      });

      return ref;
    }
  }

  public openDialogReloadCurrentPage(dialogModel: DialogModel): void {
    if (this.dialog.openDialogs.length <= 2) {
      this.dialog
        .open(DialogComponent, {
          data: dialogModel,
          maxWidth: "95%",
          minWidth: "55%",
          panelClass: "dialog",
        })
        .afterClosed()
        .subscribe(() => {
          window.location.reload();
        });
    }
  }

  public openDialogSuccesRegister(dialogModel: DialogModel): void {
    if (this.dialog.openDialogs.length <= 2) {
      this.dialog
        .open(DialogComponent, {
          data: dialogModel,
          maxWidth: "95%",
          minWidth: "55%",
          panelClass: "dialog",
        })
        .afterClosed()
        .subscribe(() => {
          this.router.navigate(["/" + TyneRoutes.Home]);
        });
    }
  }

  public openDialogErrorRegister(dialogModel: DialogModel): void {
    if (this.dialog.openDialogs.length <= 2) {
      this.dialog
        .open(DialogComponent, {
          data: dialogModel,
          maxWidth: "95%",
          minWidth: "55%",
          panelClass: "dialog",
        })
        .afterClosed()
        .subscribe(() => {});
    }
  }

  public closePreviousDialogs(): void {
    this.dialog.closeAll();
  }
}
