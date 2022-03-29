import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ClientRegistrationComponent } from "@app/client/client-registration/client.registration.component";
import { LoginComponent } from "@app/auth/login/login.component";
import { SignOffComponent } from "@app/auth/sign-off/sign-off.component";

@Injectable({
  providedIn: "root",
})
export class InvokeDialogAuthService {
  public constructor(private dialog: MatDialog) {}

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

  public signOff(): MatDialogRef<SignOffComponent, any> {
    return this.dialog.open(SignOffComponent, {
      maxWidth: "50%",
      minWidth: "50%",
      panelClass: "",
    });
  }
}
