import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { TokenService } from "@app/core/helpers/token.service";
import { ClientService } from "@app/core/services/client.service";
import { SocialService } from "@app/core/services/social.service";
import { UserType } from "@app/shared/inmutable/enums/user_type.enum";
import { DialogService } from "src/app/shared/components/components/dialog/services/dialog.service";
import { errorContent } from "src/app/shared/inmutable/constants/dialog-messages";
import { emailRegex } from "src/app/shared/inmutable/constants/email";
import { TyneRoutes } from "src/app/shared/inmutable/enums/url-routes";

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
    private clientService: ClientService,
    public dialog: MatDialog,
    private socialService: SocialService,
    private dialogService: DialogService,
    private tokenService: TokenService
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
      this.clientService.login(this.emailControl.value, this.passwordControl.value).subscribe(
        (token) => {
          if (token) {
            localStorage.setItem("access_token", token.access_token);
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
    const token = this.tokenService.getDecodedJwtToken();

    if (token) {
      if (token.rol === UserType.Manager) this.router.navigateByUrl(TyneRoutes.BusinessProfile);
      else this.router.navigateByUrl(TyneRoutes.ClientProfile);
    }
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

  public goToGoogleSignIn(): void {
    this.socialService.GoogleLogin().subscribe((userInfo) => {
      const user: any = userInfo.additionalUserInfo.profile;
      const email: string = user.email;
      // this.clientService.login(email)
      //   .subscribe(resp=>{

      // });
    });
  }

  public goToFacebookSignIn(): void {
    this.socialService.FacebookLogin().subscribe((userInfo) => {
      const user: any = userInfo.additionalUserInfo.profile;
      const email: string = user.email;
      // this.clientService.login(email)
      //   .subscribe(resp=>{

      // });
    });
  }
}
