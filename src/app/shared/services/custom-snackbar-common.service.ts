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

  public openSuccessSnackbar(messageSnackbar:string): void {
    this.snackbar.open(messageSnackbar, 'Aceptar', {
      duration: 3000,
    });
  }

  public openErrorSnackbar(messageSnackbar:string): void{
    this.snackbar.open(messageSnackbar, 'Aceptar', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });  
  }

}
