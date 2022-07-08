import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { errorContent } from "@app/shared/components/dialog/shared/inmutable/constants/dialog-message";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  public constructor(private zone: NgZone, private dialogService: DialogService) {}

  public handleError(error: Error): void {
    if (!error) return;
    this.zone.run(() => {
      console.log(error);
      this.dialogService.openDialog(errorContent);
    });
  }
}
