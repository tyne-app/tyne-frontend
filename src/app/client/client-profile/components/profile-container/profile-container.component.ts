import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "@app/core/services/user.service";
import { ClientResponse } from "@app/client/shared/interfaces/client_response";

import {PasswordValidator} from "@shared/validations/password-validator";
import {errorContent, passwordUserUpdatedContent} from "@app/shared/components/dialog/shared/inmutable/constants/dialog-message";
import { passwordRegex } from "@app/shared/inmutable/constants/regex";
import { FormControlService } from "@app/shared/helpers";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";


@Component({
  selector: "app-profile-container",
  templateUrl: "./profile-container.component.html",
  styleUrls: ["./profile-container.component.scss"],
})
export class ProfileContainerComponent implements OnInit {

  public recoverPasswordForm: FormGroup;
  public hideCurrentPassword = true;
  public hideNewPassword = true;
  public hideConfirmPassword = true;


  @Input()
  public client: ClientResponse = null;

  public get newPasswordControl(): AbstractControl {
    return this.recoverPasswordForm.get("newPassword");
  }

  public get confirmPasswordControl(): AbstractControl {
    return this.recoverPasswordForm.get("confirmPassword");
  }

  public get currentPasswordControl(): AbstractControl {
    return this.recoverPasswordForm.get("currentPassword");
  }

  public constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogService: DialogService,
    private formControlService: FormControlService
  ) {}

  public ngOnInit(): void {
    this.buildForm();

  }

  public buildForm(): void {
    this.recoverPasswordForm = this.formBuilder.group({
      currentPassword: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      newPassword: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      confirmPassword: ["", [Validators.required, PasswordValidator("newPassword")]],
    });
  }

  public OnSubmit(): void {
    if (this.newPasswordControl.value == this.confirmPasswordControl.value) {
      this.userService.putUserPassword(this.newPasswordControl.value).subscribe({
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
    return this.formControlService.getPasswordError(this.newPasswordControl);
  }

  public getPasswordConfirmError(): string {
    return this.formControlService.getPasswordConfirmError(this.confirmPasswordControl);
  }


  private cleanPasswordControlForm(): void {
    this.recoverPasswordForm.reset();
    this.recoverPasswordForm.clearValidators();
    this.recoverPasswordForm.markAsUntouched();
  }
}
