import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SpinnerComponent } from "@shared/components/components/spinner/spinner.component";

@Injectable({
  providedIn: "root",
})
export class SpinnerService {
  private count = 0;
  private spinnerComponentDialog: MatDialogRef<SpinnerComponent> = null;

  public constructor(private dialog: MatDialog) {}

  public setLoading(isLoading: boolean): void {
    if (isLoading && this.count == 0) {
      this.openSpinner();
    }

    if (isLoading === true) {
      this.count++;
    } else {
      this.count--;
      this.closeSpinner();
    }
  }

  private openSpinner(): void {
    this.spinnerComponentDialog = this.dialog.open(SpinnerComponent, {
      width: "200px",
      panelClass: "custom-dialog",
      disableClose: true,
    });
  }

  private closeSpinner(): void {
    this.spinnerComponentDialog.close();
  }
}
