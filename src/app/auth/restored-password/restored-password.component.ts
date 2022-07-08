import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "@app/core/services/user.service";
import { DialogService } from "@app/shared/components/dialog/shared/services/dialog.service";
import { passwordRegex } from "@app/shared/inmutable/constants/regex";
import { ErrorMessages } from "@app/shared/inmutable/enums/error-message.enum";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";

@Component({
  selector: "app-restored-password",
  templateUrl: "./restored-password.component.html",
  styleUrls: ["./restored-password.component.scss"],
})
export class RestoredPasswordComponent implements OnInit {
  public get password(): AbstractControl {
    return this.restoredPasswordForm.get("password");
  }

  public get confirmPassword(): AbstractControl {
    return this.restoredPasswordForm.get("confirmPassword");
  }

  public restoredPasswordForm: FormGroup;
  public hidePassword = true;
  public hidePassordConfirm = true;

  public constructor(
    public formBuilder: FormBuilder,
    public userService: UserService,
    public activedRoute: ActivatedRoute,
    private dialogService: DialogService
  ) {}

  public ngOnInit(): void {
    this.buildRestoredPasswordForm();
  }

  public buildRestoredPasswordForm(): void {
    this.restoredPasswordForm = this.formBuilder.group({
      password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      confirmPassword: ["", [Validators.required, Validators.pattern(passwordRegex)]],
    });
  }

  public restorePassword(): void {
    this.activedRoute.paramMap.subscribe((params) => {
      const token: string = params.get("token");
      if (!this.restoredPasswordForm.invalid) {
        this.userService.restorePassword(this.confirmPassword.value, token).subscribe((response) => {
          this.dialogService.openDialog({
            isSuccessful: true,
            messageButton: "Aceptar",
            subtitle: "Contraseña cambiada con éxito",
            title: "¡Felicitaciones!",
            redirectTo: TyneRoutes.Home,
          });
        });
      } else {
        this.dialogService.openDialog({
          isSuccessful: false,
          messageButton: "Aceptar",
          subtitle: "Debe completar todos los campos",
          title: "¡Ha ocurrido un error!",
          redirectTo: TyneRoutes.Home,
        });
      }
    });
  }

  public getPasswordError(): string {
    return this.password.hasError("required")
      ? "Debe ingresar una contraseña"
      : this.password.hasError("pattern")
      ? "Debe tener como mínimo 8 dígitos, 1 mayúscula y 1 número"
      : null;
  }

  public getPasswordConfirmError(): string {
    return this.confirmPassword.hasError("required")
      ? ErrorMessages.RequiredVariant.replace("{0}", "contraseña")
      : this.confirmPassword.hasError("pattern")
      ? ErrorMessages.PasswordDoesntMatch
      : null;
  }
}
