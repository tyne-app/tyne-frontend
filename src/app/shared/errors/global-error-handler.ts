import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  public constructor(private zone: NgZone, private snackbar: MatSnackBar) {}

  public handleError(error: Error): void {
    if (!error) return;

    this.zone.run(() => {
      this.snackbar.open("Ha ocurrido un error inesperado", "Aceptar", {
        duration: 8000,
        panelClass: ["error-snackbar"],
      });

      console.error("Error details", error);
    });
  }
}
