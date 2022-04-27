import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { TokenService } from "@app/auth/shared/helpers/token.service";
import { FacebookService } from "@app/auth/shared/services/facebook.service";
import { GoogleService } from "@app/auth/shared/services/google.service";
import { UserService } from "@app/core/services/user.service";
import { FormControlService } from "@app/shared/helpers";
import {
  errorContent,
  unregisteredUser,
} from "@app/shared/components/dialog/shared/inmutable/constants/dialog-message";
import { emailRegex, passwordRegex } from "@app/shared/inmutable/constants/regex";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { UserType } from "@app/shared/inmutable/enums/user-type.enum";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { HttpErrorResponse } from "@angular/common/http";
import { DialogModel } from "@app/shared/components/dialog/shared/interfaces/dialog-model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public hide = true;

  public get emailControl(): AbstractControl {
    return this.loginForm.get("email");
  }

  public get passwordControl(): AbstractControl {
    return this.loginForm.get("password");
  }

  public get passwordError(): string {
    return this.formControlService.getPasswordError(this.passwordControl);
  }

  public get emailError(): string {
    return this.formControlService.getEmailError(this.emailControl);
  }

  public constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public loginRef: MatDialogRef<LoginComponent>,
    private userService: UserService,
    public dialog: MatDialog,
    private googleService: GoogleService,
    private facebookService: FacebookService,
    private dialogService: DialogService,
    private tokenService: TokenService,
    private formControlService: FormControlService
  ) {}

  public ngOnInit(): void {
    this.buildLoginForm();
  }

  public buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.pattern(emailRegex)]],
      password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
    });
  }

  public onSubmit(): void {
    if (!this.loginForm.invalid) {
      this.userService.login(this.emailControl.value, this.passwordControl.value).subscribe(
        (token) => {
          this.verifyToken(token.access_token);
        },
        (error: HttpErrorResponse) => {
          let dialog: DialogModel = {
            isSuccessful: false,
            title: "Problemas para iniciar sesion.",
            subtitle: "Ha ocurrido un problema vuelva a intentarlo.",
            messageButton: "Volver",
          };
          if (error.status === 400 || error.status === 401) {
            let subtitle = "";
            if (Array.isArray(error.error.details)) {
              error.error.details.forEach((element) => {
                subtitle += element + "\n";
              });
            } else {
              subtitle = error.error.details;
            }
            dialog = {
              isSuccessful: false,
              title: "Problemas para iniciar sesion.",
              subtitle: subtitle,
              messageButton: "Volver",
            };
          }
          this.showErrorMessage(dialog);
        }
      );
    }
  }

  public closeDialogAndRedirect(): void {
    this.loginRef.close();
    const token = this.tokenService.getDecodedJwtToken();
    if (token) {
      if (token.rol === UserType.Manager) {
        this.router.navigate([TyneRoutes.BusinessHome]);
      } else {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = "reload";
        this.router.navigate([TyneRoutes.Home]);
      }
    }
  }

  public goToForgotPassword(): void {
    this.router.navigate([TyneRoutes.RecoverPassword]);
    this.closeDialogAndRedirect();
  }

  public goToGoogleSignIn(): void {
    this.googleService.googleSignIn().subscribe(
      (token) => {
        this.verifyToken(token.access_token);
      },
      (error: HttpErrorResponse) => {
        let dialog: DialogModel = {
          isSuccessful: false,
          title: "Problemas para iniciar sesion.",
          subtitle: "Ha ocurrido un problema vuelva a intentarlo.",
          messageButton: "Volver",
        };
        if (error.status === 400 || error.status === 401) {
          let subtitle = "";
          if (Array.isArray(error.error.details)) {
            error.error.details.forEach((element) => {
              subtitle += element + "\n";
            });
          } else {
            subtitle = error.error.details;
          }
          dialog = {
            isSuccessful: false,
            title: "Problemas para iniciar sesion.",
            subtitle: subtitle,
            messageButton: "Volver",
          };
        }
        this.showErrorMessage(dialog);
      }
    );
  }

  public goToFacebookSignIn(): void {
    this.facebookService.facebookSignIn().subscribe(
      (token) => {
        this.verifyToken(token.access_token);
      },
      (error: HttpErrorResponse) => {
        let dialog: DialogModel = {
          isSuccessful: false,
          title: "Problemas para iniciar sesion.",
          subtitle: "Ha ocurrido un problema vuelva a intentarlo.",
          messageButton: "Volver",
        };
        if (error.status === 400 || error.status === 401) {
          let subtitle = "";
          if (Array.isArray(error.error.details)) {
            error.error.details.forEach((element) => {
              subtitle += element + "\n";
            });
          } else {
            subtitle = error.error.details;
          }
          dialog = {
            isSuccessful: false,
            title: "Problemas para iniciar sesion.",
            subtitle: subtitle,
            messageButton: "Volver",
          };
        }
        this.showErrorMessage(dialog);
      }
    );
  }

  private verifyToken(token: string): void {
    if (token) {
      this.tokenService.setTokenInLocalStorage(token);
      this.closeDialogAndRedirect();
    } else {
      this.showUnregisteredUserMessage();
    }
  }

  private showErrorMessage(dialogModel: DialogModel): void {
    this.dialogService.openDialog(dialogModel);
  }

  private showUnregisteredUserMessage(): void {
    this.dialogService.openDialog(unregisteredUser);
  }
}
