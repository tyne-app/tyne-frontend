import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordRegex } from 'src/app/shared/constants/password';
import { PasswordValidator } from 'src/app/shared/validations/password-validator';

@Component({
  selector: 'app-business-profile-body',
  templateUrl: './business-profile-body.component.html',
  styleUrls: ['./business-profile-body.component.scss']
})
export class BusinessProfileBodyComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.form = this.fb.group({
      currentPassword: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: ['', [Validators.required, PasswordValidator('password')]],
    });
  }

  public getCurrentPasswordError() {
    const currentPassword = this.form.get("currentPassword");
    return currentPassword.hasError("required") ? "Debe ingresar una contraseña" : null;
  }

  public getPasswordError() {
    const password = this.form.get("password");
    return password.hasError("required") ? "Debe ingresar una contraseña" :
      password.hasError("pattern") ? "Debe tener como mínimo 8 dígitos, 1 mayúscula y 1 número" : null;
  }

  public getPasswordConfirmError() {
    const passwordConfirm = this.form.get("passwordConfirm");
    return passwordConfirm.hasError("required") ? "Debe ingresar una contraseña" :
      passwordConfirm.hasError("notMatch") ? "La contraseña no coincide" : null;
  }
}
