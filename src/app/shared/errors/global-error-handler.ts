import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { DialogModel } from "../components/components/dialog/models/dialog-model";
import { DialogService } from "../components/components/dialog/services/dialog.service";
import { ErrorMessages } from "../inmutable/enums/error-messages"; 

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  public constructor(
    private zone: NgZone,
    private dialogService: DialogService
  ) {}

  public handleError(error: Error): void {
    if (!error) return;

    this.zone.run(() => {
      this.showErrorMessage();
      console.error("Error details", error);
    });
  }

  private showErrorMessage() {
    const dialogModel: DialogModel = {
      title: "¡Lo sentimos!",
      subtitle: ErrorMessages.GenericError,
      isSuccessful: false,
      messageButton: "Volver",
    };

    this.dialogService.openDialog(dialogModel);
  }
}
