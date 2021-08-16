import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { passwordRegex } from "src/app/shared/constants/password";
import { PasswordValidator } from "src/app/shared/validations/password-validator";
import { BusinessProfileEditBankDataComponent } from "../business-profile-edit-bank-data/business-profile-edit-bank-data.component";
import { BusinessProfileEditDataComponent } from "../business-profile-edit-data/business-profile-edit-data.component";
import { BusinessProfileEditPasswordComponent } from "../business-profile-edit-password/business-profile-edit-password.component";
import { BusinessProfileEditWorkDaysComponent } from "../business-profile-edit-work-days/business-profile-edit-work-days.component";

@Component({
  selector: "app-business-profile-body",
  templateUrl: "./business-profile-body.component.html",
  styleUrls: ["./business-profile-body.component.scss"],
})
export class BusinessProfileBodyComponent implements OnInit {
  public form: FormGroup;

  public constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.fb.group({
      currentPassword: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: [
        "",
        [Validators.required, PasswordValidator("password")],
      ],
    });
  }

  public openEditDataComponent(): void {
    const dialogRef = this.dialog.open(BusinessProfileEditDataComponent, {
      maxWidth: "100%",
      width: "75%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }

  public openEditPasswordComponent(): void {
    const dialogRef = this.dialog.open(BusinessProfileEditPasswordComponent, {
      maxWidth: "95%",
      minWidth: "75%",
      panelClass: "business-profile-dialog",
    });

    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }

  public openEditBankDataComponent(): void {
    const dialogRef = this.dialog.open(BusinessProfileEditBankDataComponent, {
      maxWidth: "100%",
      width: "75%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }

  public openEditWorkDaysComponent(): void {
    const dialogRef = this.dialog.open(BusinessProfileEditWorkDaysComponent, {
      maxWidth: "100%",
      width: "75%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      // empty
    });
  }

  public getCurrentPasswordError(): string {
    const currentPassword = this.form.get("currentPassword");
    return currentPassword.hasError("required")
      ? "Debe ingresar una contraseña"
      : null;
  }

  public getPasswordError(): string {
    const password = this.form.get("password");
    return password.hasError("required")
      ? "Debe ingresar una contraseña"
      : password.hasError("pattern")
      ? "Debe tener como mínimo 8 dígitos, 1 mayúscula y 1 número"
      : null;
  }

  public getPasswordConfirmError(): string {
    const passwordConfirm = this.form.get("passwordConfirm");
    return passwordConfirm.hasError("required")
      ? "Debe ingresar una contraseña"
      : passwordConfirm.hasError("notMatch")
      ? "La contraseña no coincide"
      : null;
  }
}
