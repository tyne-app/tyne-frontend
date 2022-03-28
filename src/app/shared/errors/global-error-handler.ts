import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { errorContent } from "@app/shared/components/dialog/shared/inmutable/constants/dialog-message";
import { LoggerService } from "../helpers";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  public constructor(
    private zone: NgZone, private dialogService: DialogService,
    private loggerService:LoggerService ) {}

  public handleError(error: Error): void {
    if (!error) return;
    this.zone.run(() => {
      this.showErrorMessage();
      this.loggerService.writeErrorMessage("Error details", error);
    });
  }

  private showErrorMessage() {
    this.dialogService.openDialog(errorContent);
  }
}
