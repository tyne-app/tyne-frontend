import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogModel } from "@shared/components/components/dialog/models/dialog-model";
import { DialogComponent } from "../pages/dialog.component";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  public constructor(private dialog: MatDialog) {}

  public openDialog(dialogModel: DialogModel): void {
    if (this.dialog.openDialogs.length <= 2) {
      this.dialog.open(DialogComponent, {
        data: dialogModel,
        maxWidth: "95%",
        minWidth: "55%",
        panelClass: "dialog",
      });
    }
  }
}
