import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

import { UserService} from "@app/core/services/user.service";
import {errorContent, passwordUserUpdatedContent} from "@app/shared/components/dialog/shared/inmutable/constants/dialog-message";
import {DialogService} from "@app/shared/components/dialog/shared/services/dialog.service";

import {PasswordValidator} from "@shared/validations/password-validator";
import {ErrorMessages} from "@app/shared/inmutable/enums/error-message.enum";
import { passwordRegex } from "@app/shared/inmutable/constants/regex";

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
    public matDialogRef: MatDialogRef<BusinessProfileEditPasswordComponent>,
    private dialogService: DialogService,
    private userService: UserService
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
    if (this.newPasswordControl.value == this.confirmPasswordControl.value) {
      this.userService.putUserPassword(this.newPasswordControl.value).subscribe(()=>{
        this.dialogService.openDialog(passwordUserUpdatedContent);
      },()=>{
        //TODO: Delete in case global error handler launch up popup in this case
        this.dialogService.openDialog(errorContent);
      });
    }
  }

  public getCurrentPasswordError(): string {
    const control = this.currentPasswordControl;
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "contrase??a")
      : null;
  }

  public getNewPasswordError(): string {
    const control = this.newPasswordControl;
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "contrase??a")
      : control.hasError("pattern")
      ? ErrorMessages.PasswordPattern
      : null;
  }

  public getConfirmPasswordError(): string {
    const control = this.confirmPasswordControl;
    return control.hasError("required")
      ? ErrorMessages.Required.replace("{0}", "contrase??a")
      : control.hasError("notMatch")
      ? ErrorMessages.PasswordDoesntMatch
      : null;
  }
}
