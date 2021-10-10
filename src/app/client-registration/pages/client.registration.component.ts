import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { DialogModel } from "src/app/shared/components/components/dialog/models/dialog-model";
import { emailRegex } from "src/app/shared/inmutable/constants/email";
import { ErrorMessages } from "src/app/shared/inmutable/enums/error-messages";
import { passwordRegex } from "src/app/shared/inmutable/constants/password";
import { TyneRoutes } from "src/app/shared/inmutable/enums/url-routes";
import { Client } from "src/app/shared/interfaces/client";
import { PasswordValidator } from "src/app/shared/validations/password-validator";
import { errorContent, registerClientContent } from "src/app/shared/inmutable/constants/dialog-messages";
/** SERVICES */
import { ClientService } from "src/app/shared/services/client.service";
import { SocialService } from "src/app/shared/services/social.service";
import { DialogService } from "src/app/shared/components/components/dialog/services/dialog.service";


@Component({
  selector: "app-client-registration",
  templateUrl: "./client.registration.component.html",
  styleUrls: ["./client.registration.component.scss"],
})
export class ClientRegistrationComponent implements OnInit {
  public loading = false;
  public clientRegisterForm!: FormGroup;
  public isWhiteLogo = false; 

 // #region Getters 
 public get ClientNameControl():AbstractControl{
  return this.clientRegisterForm.get("clientName");
 }

 public get ClientLastNameControl():AbstractControl{
  return this.clientRegisterForm.get("clientLastName");
 }

 public get ClientEmailControl(): AbstractControl {
  return this.clientRegisterForm.get("clientEmail");
 }

 public get ClientPhoneControl():AbstractControl {
  return this.clientRegisterForm.get("clientPhone");
 }

 public get ClientPasswordControl():AbstractControl{
   return this.clientRegisterForm.get("password");
 }

 public get ClientBirthdayControl():AbstractControl{
   return this.clientRegisterForm.get("birthDate");
 }

 // #endregion
  /**
   * @param fb 
   * @param matDialogRef 
   * @param router 
   * @param clientService 
   * @param snackbar 
   * @param dialogService 
   */

  public constructor(
    private fb: FormBuilder,
    public matDialogRef: MatDialogRef<ClientRegistrationComponent>,
    private router: Router,
    private clientService: ClientService,
    private snackbar: MatSnackBar,
    private dialogService: DialogService,
    private socialService:SocialService
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public createClient(): void {
    if (this.clientRegisterForm.invalid) {
      this.showMessage(ErrorMessages.FormNotReady, false);
      return;
    }

    this.loading = true;

    const client: Client = {
      name: this.ClientNameControl.value,
      lastName: this.ClientLastNameControl.value,
      phone: this.ClientPhoneControl
        .value.toString()
        .replace("(", "")
        .replace(")", "")
        .replace("+", "")
        .replace(/\s/g, ""),
      email: this.ClientEmailControl.value,
      password: this.ClientPasswordControl.value,
      birthDate: this.ClientBirthdayControl.value
    };

    this.clientService.register(client).subscribe(
      () => {
        this.loading = false;
        this.showSuccessMessage();
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        if (error.status === 409) {
          this.showErrorMessage();
        } else {
          throw error;
        }
      }
    );
  }

  public registerFacebook():void{
    this.socialService.FacebookLogin().subscribe(resp=>{
      
    });
  }
  public registerGoogle():void{
    this.socialService.GoogleLogin().subscribe(resp=>{

    });
  }

  private showSuccessMessage() {
    this.dialogService.openDialog(registerClientContent);
  }

  private showErrorMessage() {
    this.dialogService.openDialog(errorContent);
  }

  public closeClick(): void {
    this.snackbar.open("Se Ha registrado satisfactoriamente", "ok", {
      duration: 3000,
    });
    this.matDialogRef.close();
  }

  public getLogo(): string {
    return this.isWhiteLogo
      ? "/assets/tyne-logo-white.png"
      : "/assets/tyne-logo-color.png";
  }

  public initForm(): void {
    this.clientRegisterForm = this.fb.group({
      clientName: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      clientLastName: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      clientPhone: ["", [Validators.required, Validators.minLength(17)]],
      clientEmail: [
        "",
        [Validators.email, Validators.required, Validators.pattern(emailRegex)],
      ],
      password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: [
        "",
        [Validators.required, PasswordValidator("password")],
      ],
      birthDate: ["", [Validators.required]],
    });
  }

  private showMessage(message: string, isSucceful = true) {
    this.snackbar.open(message, "Aceptar", {
      duration: 3000,
      panelClass: [isSucceful ? "class-template" : "error-snackbar"],
    });
  }

  // #region Errors

  public getClientNameError(): string {
    const control = this.ClientNameControl;
    return this.ClientNameControl.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "nombre")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "2")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "30")
      : null;
  }

  public getClientLastNameError(): string {
    const control = this.ClientLastNameControl;
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "apellido")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "2")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "30")
      : null;
  }

  public getClientPhoneError(): string {
    const control = this.ClientPhoneControl;
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "teléfono")
      : control.hasError("minlength")
      ? ErrorMessages.Required.replace("{0}", "teléfono válido")
      : null;
  }

  public getClientEmailError(): string {
    const control = this.ClientEmailControl;
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "email")
      : control.hasError("email")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : control.hasError("pattern")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : null;
  }

  public getPasswordError(): string {
    const control = this.ClientPasswordControl;
    return control.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "contraseña")
      : control.hasError("pattern")
      ? ErrorMessages.PasswordPattern
      : null;
  }

  public getPasswordConfirmError(): string {
    const control = this.ClientPasswordControl;
    return control.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "contraseña")
      : control.hasError("notMatch")
      ? ErrorMessages.PasswordDoesntMatch
      : null;
  }

  public getBirthDateError(): string {
    const control = this.ClientBirthdayControl;
    return control.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "fecha de nacimiento")
      : null;
  }

  // #endregion
}
