import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { emailRegex } from "src/app/shared/constants/email";
import { passwordRegex } from "src/app/shared/constants/password";
import { ClientService } from "src/app/shared/services/client.service";
import { PasswordValidator } from "src/app/shared/validations/password-validator";
@Component({
  selector: "app-client-registration",
  templateUrl: "./client.registration.component.html",
  styleUrls: ["./client.registration.component.scss"],
})
export class ClientRegistrationComponent implements OnInit {
  public form!: FormGroup;
  public loading = false; // Una vez que se haga submit, loading pasa a  ser verdadero y el boton se deshabilita.

  // Injeccion de servicios, dialog, formbuilder y servicio cliente.
  public constructor(
    private fb: FormBuilder,
    public matDialogRef: MatDialogRef<ClientRegistrationComponent>,
    private router: Router,
    private clientService: ClientService,
    private _SNACKBAR: MatSnackBar
  ) {}

  // Creación de formgroup.
  public ngOnInit(): void {
    this.initForm();
    /*
     * this.form = this.fb.group({
     * name: ['', [Validators.required]],
     * lastName: ['', [Validators.required]],
     * birthDate: ['', [Validators.required]],
     * email: ['', [Validators.required, Validators.pattern(emailRegex)]],
     * phoneNumber: ['', [Validators.required]],
     * password:  ['', [Validators.required, Validators.minLength(6)]],
     * passwordConfirm: ['', []]
     * });
     */
  }

  // Cierra el modal (Dialog)
  public closeClick(): void {
    this._SNACKBAR.open("Se Ha registrado satisfactoriamente", "ok", {
      duration: 3000,
    });
    this.matDialogRef.close();
  }
  public isWhiteLogo = false;

  public getLogo(): string {
    return this.isWhiteLogo ? "/assets/logo-home.png" : "/assets/logo2 1.png";
  }
  public initForm(): void {
    this.form = this.fb.group({
      clientName: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      clientLastName: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      clientPhone: ["", [Validators.required, Validators.minLength(17)]],
      clientEmail: [
        "",
        [Validators.email, Validators.required, Validators.pattern(emailRegex)],
      ],
      password: ["", [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: [
        "",
        [Validators.required, PasswordValidator("password")],
      ],
      birthDate: ["", [Validators.required]],
    });
  }

  public getClientNameError(): string {
    const control = this.form.get("clientName");
    return control.hasError("required")
      ? "Debe ingresar un nombre"
      : control.hasError("minlength")
      ? "Debe tener mínimo 2 caracteres"
      : control.hasError("maxlength")
      ? "Debe tener máximo 30 caracteres"
      : null;
  }

  public getClientLastNameError(): string {
    const control = this.form.get("clientLastName");
    return control.hasError("required")
      ? "Debe ingresar un apellido"
      : control.hasError("minlength")
      ? "Debe tener mínimo 2 caracteres"
      : control.hasError("maxlength")
      ? "Debe tener máximo 30 caracteres"
      : null;
  }

  public getClientPhoneError(): string {
    const control = this.form.get("clientPhone");
    return control.hasError("required")
      ? "El número no es válido"
      : control.hasError("minlength")
      ? "El número no es válido"
      : null;
  }

  public getClientEmailError(): string {
    const control = this.form.get("clientEmail");
    return control.hasError("required")
      ? "Debe ingresar un email"
      : control.hasError("email")
      ? "Debe ingresar un email válido"
      : control.hasError("pattern")
      ? "Debe ingresar un email válido"
      : null;
  }

  public getPasswordError(): string {
    const control = this.form.get("password");
    return control.hasError("required")
      ? "Debe ingresar una contraseña"
      : control.hasError("pattern")
      ? "Debe tener como mínimo 8 dígitos, 1 mayúscula y 1 número"
      : null;
  }

  public getPasswordConfirmError(): string {
    const control = this.form.get("passwordConfirm");
    return control.hasError("required")
      ? "Debe ingresar una contraseña"
      : control.hasError("notMatch")
      ? "La contraseña no coincide"
      : null;
  }

  public getBirthDateError(): string {
    const control = this.form.get("birthDate");
    return control.hasError("required")
      ? "Debe ingresar una fecha de nacimiento"
      : null;
  }
}
