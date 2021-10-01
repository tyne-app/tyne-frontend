import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { DialogService } from "../components/components/dialog/services/dialog.service";
import { errorContent } from "../inmutable/constants/dialog-messages";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  public constructor(private zone: NgZone, private dialogService: DialogService, private router: Router) {}

  public handleError(error: Error): void {
    if (!error) return;

    this.zone.run(() => {
      this.showErrorMessage();
      console.error("Error details", error);
    });
  }

  private showErrorMessage() {
    this.dialogService.openDialog(errorContent);
  }
}
