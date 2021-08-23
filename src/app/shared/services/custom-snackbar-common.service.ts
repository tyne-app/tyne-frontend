/**
 * ANGULAR CORE
 */
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarCommonService {
  
  public constructor(
    private snackbar: MatSnackBar,
  ) { }

  public openSuccessSnackbar(): void {
    this.snackbar.open('Ha ingresado satisfactoriamente', 'Aceptar', {
      duration: 3000,
    });
  }

  public openErrorSnackbar(): void{
    this.snackbar.open('Ha ocurrido un problema, intente nuevamente', 'Aceptar', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });  
  }

}
