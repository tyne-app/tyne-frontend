import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ErrorMessages } from "src/app/shared/inmutable/enums/error-messages";
import { passwordRegex } from "src/app/shared/inmutable/constants/password";
import { PasswordValidator } from "src/app/shared/validations/password-validator";

@Component({
  selector: "app-business-profile-edit-password",
  templateUrl: "./business-profile-edit-password.component.html",
  styleUrls: ["./business-profile-edit-password.component.scss"],
})
export class BusinessProfileEditPasswordComponent implements OnInit {

  public updatePasswordBusinessProfileForm: FormGroup;

  public get newPasswordControl(): AbstractControl {
    return this.updatePasswordBusinessProfileForm.get("newPassword");
  }

  public get confirmPasswordControl(): AbstractControl {
    return this.updatePasswordBusinessProfileForm.get("confirmPassword");
  }

  public get currentPasswordControl(): AbstractControl {
    return this.updatePasswordBusinessProfileForm.get("currentPassword");
  }


  public constructor(
    private fb: FormBuilder,
    public matDialogRef: MatDialogRef<BusinessProfileEditPasswordComponent>
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.updatePasswordBusinessProfileForm = this.fb.group({
      currentPassword: ["", [Validators.required]],
      newPassword: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      confirmPassword: [
        "",
        [Validators.required, PasswordValidator("newPassword")],
      ],
    });
  }

  public updatePassword(){
    console.log("aqui entro");
    if (this.newPasswordControl.value == this.confirmPasswordControl.value) {

    }
  }

  public getCurrentPasswordError(): string {
    const control = this.currentPasswordControl;
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "contraseña")
      : null;
  }

  public getNewPasswordError(): string {
    const control = this.newPasswordControl;
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "contraseña")
      : control.hasError("pattern")
      ? ErrorMessages.PasswordPattern
      : null;
  }

  public getConfirmPasswordError(): string {
    const control = this.confirmPasswordControl;
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "contraseña")
      : control.hasError("notMatch")
      ? ErrorMessages.PasswordDoesntMatch
      : null;
  }
}
