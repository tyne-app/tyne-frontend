import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ClientService } from "@app/core/services/client.service";
import { ClientResponse } from "@app/shared/interfaces/response/client_response";
import {DialogService} from "@shared/components/components/dialog/services/dialog.service";
import {passwordRegex} from "@shared/inmutable/constants/password";
import {PasswordValidator} from "@shared/validations/password-validator";
import {errorContent, passwordUserUpdatedContent} from "@shared/inmutable/constants/dialog-messages";


@Component({
  selector: "app-profile-container",
  templateUrl: "./profile-container.component.html",
  styleUrls: ["./profile-container.component.scss"],
})
export class ProfileContainerComponent implements OnInit {
  // #region Variables

  public recoverPasswordForm: FormGroup;

  @Input()
  public client: ClientResponse = null;

  // #endregion

  // #region Getters Controls

  public get newPasswordControl(): AbstractControl {
    return this.recoverPasswordForm.get("newPassword");
  }

  public get confirmPasswordControl(): AbstractControl {
    return this.recoverPasswordForm.get("confirmPassword");
  }

  public get currentPasswordControl(): AbstractControl {
    return this.recoverPasswordForm.get("currentPassword");
  }

  // #endregion

  public constructor(
    private fb: FormBuilder,
    private clientProfileService: ClientService,
    private snackbar: MatSnackBar,
    private dialogService: DialogService
  ) {}

  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.recoverPasswordForm = this.fb.group({
      currentPassword: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      newPassword: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      confirmPassword: ["", [Validators.required, PasswordValidator("newPassword")]],
    });
  }

  public OnSubmit(): void {
    if (this.newPasswordControl.value == this.confirmPasswordControl.value) {
      this.clientProfileService.putPassword(this.newPasswordControl.value).subscribe({
        next: () => {
          this.dialogService.openDialog(passwordUserUpdatedContent);
          this.cleanPasswordControlForm();
        },
        error: () => {
          this.dialogService.openDialog(errorContent);
          this.cleanPasswordControlForm();
        },
      });
    }
  }

  public getPasswordError(): string {
    const control = this.newPasswordControl;
    return control.hasError("required")
      ? "Debe ingresar una contraseña"
      : control.hasError("pattern")
      ? "Debe tener como mínimo 8 dígitos, 1 mayúscula y 1 número"
      : null;
  }

  public getPasswordConfirmError(): string {
    const control = this.confirmPasswordControl;
    return control.hasError("required")
      ? "Debe ingresar una contraseña"
      : control.hasError("notMatch")
      ? "La contraseña no coincide"
      : null;
  }

  public getButtonClass(): string {
    return this.recoverPasswordForm.invalid ? "btn btn-disabled" : "btn btn-submit";
  }

  private resetPasswordForm = (): void => this.recoverPasswordForm.reset();

  private cleanPasswordControlForm(): void {
    this.recoverPasswordForm.reset();
    this.recoverPasswordForm.clearValidators();
    this.recoverPasswordForm.markAsUntouched();
  }
}
