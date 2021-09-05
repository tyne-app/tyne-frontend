/** ANGULAR CORE */
import { Injectable } from '@angular/core';
/** ANGULAR MATERIAL */
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
/** COMPONENTS */
import { ClientRegistrationComponent } from 'src/app/client-registration/pages/client.registration.component';
import { LoginComponent } from 'src/app/login/pages/login.component';

@Injectable({
  providedIn: 'root'
})
export class InvokeDialogAuthService {

  public constructor(
    private dialog: MatDialog
  ) { }
  
  public openLogin(): MatDialogRef<LoginComponent,any> {
   const loginRef = this.dialog.open(LoginComponent, {
      maxWidth: "100%",
      width: "40%",
      maxHeight: "100%",
    });
    return loginRef;
  }

  public openRegister(): MatDialogRef<ClientRegistrationComponent,any> {
    const registerRef = this.dialog.open(ClientRegistrationComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "business-profile-dialog",
    });
    return registerRef;
  }

}
