/** ANGULAR CORE */
import {Injectable} from '@angular/core';
/** ANGULAR MATERIAL */
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
/** COMPONENTS */
import {ClientRegistrationComponent} from '@app/client-registration/pages/client.registration.component';
import {LoginComponent} from '@app/login/pages/login.component';

@Injectable({
  providedIn: 'root'
})
export class InvokeDialogAuthService {

  public constructor(
    private dialog: MatDialog
  ) { }

  public openLogin(): MatDialogRef<LoginComponent, any> {
    return this.dialog.open(LoginComponent, {
      maxWidth: "95%",
      minWidth: "40%",
      maxHeight: "100%",
      panelClass: "login-dialog",
    });
  }

  public openRegister(): MatDialogRef<ClientRegistrationComponent, any> {
    return this.dialog.open(ClientRegistrationComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "business-profile-dialog",
    });
  }

}
