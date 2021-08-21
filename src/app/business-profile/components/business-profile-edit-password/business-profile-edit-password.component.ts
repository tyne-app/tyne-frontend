import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { ErrorMessages } from "src/app/shared/constants/error-messages.enum";
import { passwordRegex } from "src/app/shared/constants/password";
import { PasswordValidator } from "src/app/shared/validations/password-validator";

@Component({
  selector: "app-business-profile-edit-password",
  templateUrl: "./business-profile-edit-password.component.html",
  styleUrls: ["./business-profile-edit-password.component.scss"],
})
export class BusinessProfileEditPasswordComponent implements OnInit {
  public form: FormGroup;

  public constructor(
    private fb: FormBuilder,
    public matDialogRef: MatDialogRef<BusinessProfileEditPasswordComponent>
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      currentPassword: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: [
        "",
        [Validators.required, PasswordValidator("password")],
      ],
    });
  }

  public getCurrentPasswordError(): string {
    const control = this.form.get("currentPassword");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "contraseña")
      : null;
  }

  public getPasswordError(): string {
    const control = this.form.get("password");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "contraseña")
      : control.hasError("pattern")
      ? ErrorMessages.PasswordPattern
      : null;
  }

  public getPasswordConfirmError(): string {
    const control = this.form.get("passwordConfirm");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "contraseña")
      : control.hasError("notMatch")
      ? ErrorMessages.PasswordDoesntMatch
      : null;
  }
}
