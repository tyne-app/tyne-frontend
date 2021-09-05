/** ANGULAR CORE */
import { Injectable } from '@angular/core';
/** ANGULAR MATERIAL */
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
/** COMPONENTS */
import { SpinnerComponent } from '../components/components/spinner/spinner.component';

@Injectable({
  providedIn: 'root'
})
export class InvokeDialogCommonService {

  public constructor(
    private dialog: MatDialog
  ) { }

  public openSpinner(): MatDialogRef<SpinnerComponent,any>{
    const spinnerRef = this.dialog.open(SpinnerComponent, {
      width: "200px",
      panelClass: "custom-dialog",
      disableClose: true,
    });
    return spinnerRef;
  }
  
}
