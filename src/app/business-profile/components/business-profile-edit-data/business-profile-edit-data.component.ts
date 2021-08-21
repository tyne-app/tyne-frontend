import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { emailRegex } from "src/app/shared/constants/email";
import { ErrorMessages } from "src/app/shared/constants/error-messages.enum";

@Component({
  selector: "app-business-profile-edit-data",
  templateUrl: "./business-profile-edit-data.component.html",
  styleUrls: ["./business-profile-edit-data.component.scss"],
})
export class BusinessProfileEditDataComponent implements OnInit {
  public form: FormGroup;

  public constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.fb.group({
      businessName: [
        { value: "Los Vikingos", disabled: true },
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      businessPhone: ["", [Validators.required, Validators.minLength(17)]],
      businessLocation: [
        { value: "Avenida Grecia #1223", disabled: true },
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      email: [
        "",
        [Validators.email, Validators.required, Validators.pattern(emailRegex)],
      ],
      managerName: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      phoneManager: ["", [Validators.required, Validators.minLength(17)]],
      petsAllowed: ["0"],
    });
  }

  public save(): void {
    //
  }

  // #region Validations Errors
  public getBusinessNameError(): string {
    const control = this.form.get("businessName");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "nombre")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "2")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getBusinessPhoneError(): string {
    const control = this.form.get("businessPhone");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "número")
      : control.hasError("minlength")
      ? ErrorMessages.Invalid.replace("{0}", "número")
      : null;
  }

  public getBusinessLocationError(): string {
    const control = this.form.get("businessLocation");
    return control.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "calle")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "5")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getLegalRepresentativeEmailError(): string {
    const control = this.form.get("email");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "email")
      : control.hasError("email")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : control.hasError("pattern")
      ? ErrorMessages.Invalid.replace("{0}", "email")
      : null;
  }

  public getManagerNameError(): string {
    const control = this.form.get("managerName");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "nombre")
      : control.hasError("minlength")
      ? ErrorMessages.Minlength.replace("{0}", "2")
      : control.hasError("maxlength")
      ? ErrorMessages.Maxlength.replace("{0}", "50")
      : null;
  }

  public getPhoneManagerError(): string {
    const control = this.form.get("phoneManager");
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "teléfono")
      : control.hasError("minlength")
      ? ErrorMessages.Invalid.replace("{0}", "teléfono")
      : null;
  }
  // #endregion Validations Errors
}
