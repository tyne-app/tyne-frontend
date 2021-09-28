import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SpinnerComponent } from "../components/components/spinner/spinner.component";

@Injectable({
  providedIn: "root",
})
export class SpinnerService {
  private count = 0;

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
    this.dialog.open(SpinnerComponent, {
      width: "200px",
      panelClass: "custom-dialog",
      disableClose: true,
    });
  }

  private closeSpinner(): void {
    this.dialog.closeAll();
  }
}
