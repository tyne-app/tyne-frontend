import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DialogService } from "src/app/shared/components/components/dialog/services/dialog.service";
import { CustomSnackbarCommonService } from "src/app/shared/helpers/custom-snackbar-common.service";
import { SpinnerService } from "src/app/shared/helpers/spinner-service";
import { errorContent } from "src/app/shared/inmutable/constants/dialog-messages";
import { emailRegex } from "src/app/shared/inmutable/constants/email";
import { SuccessMessages } from "src/app/shared/inmutable/enums/success-messages";
import { ClientService } from "src/app/shared/services/client.service";
import { SocialService } from "src/app/shared/services/social.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isLoading = false;
  public hide = true;
  public checked = false;

  public get emailControl(): AbstractControl {
    return this.loginForm.get("email");
  }

  public get passwordControl(): AbstractControl {
    return this.loginForm.get("password");
  }

  public constructor(
    private router: Router,
    private fb: FormBuilder,
    public loginRef: MatDialogRef<LoginComponent>,
    private clientservice: ClientService,
    public dialog: MatDialog,
    private socialService: SocialService,
    private customSnackbarCommon: CustomSnackbarCommonService,
    private dialogService: DialogService,
    private invokeDialogCommon: SpinnerService
  ) {}

  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(emailRegex)]],
      password: ["", [Validators.required]],
    });
  }

  public onSubmit(): void {
    if (!this.loginForm.invalid) {
      this.clientservice
        .login(this.emailControl.value, this.passwordControl.value)
        .subscribe(
          (token) => {
            if (token) {
              localStorage.setItem("access_token", token);
              this.closeModal();
            }
          },
          (error: HttpErrorResponse) => {
            this.showErrorMessage();
          }
        );
    }
  }

  private showErrorMessage() {
    this.dialogService.openDialog(errorContent);
  }

  public closeModal(): void {
    this.loginRef.close();
    this.customSnackbarCommon.openSuccessSnackbar(SuccessMessages.Success);
    this.router.navigateByUrl("/perfil-cliente");
  }

  public getPasswordError(): string {
    const control = this.passwordControl;
    return control.hasError("required")
      ? "Debe ingresar una contraseña"
      : control.hasError("pattern")
      ? "Debe tener como mínimo 8 dígitos, 1 mayúscula y 1 número"
      : null;
  }

  public getButtonClass(): string {
    return this.loginForm.invalid ? "btn btn-disabled" : "btn btn-submit";
  }

  public goToForgotPassword(): void {
    console.log("Ir a la página de contraseña olvidada");
  }

  public goToGoogleSignIn() {
    this.socialService.GoogleLogin().subscribe((resp) => {
      console.log(resp);
    });
  }

  public goToFacebookSignIn() {
    this.socialService.FacebookLogin().subscribe((resp) => {
      console.log(resp);
    });
  }
}
