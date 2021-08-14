import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { passwordRegex } from 'src/app/shared/constants/password';
import { PasswordValidator } from 'src/app/shared/validations/password-validator';


@Component({
  selector: 'app-business-profile-edit-password',
  templateUrl: './business-profile-edit-password.component.html',
  styleUrls: ['./business-profile-edit-password.component.scss']
})
export class BusinessProfileEditPasswordComponent implements OnInit {
  
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public matDialogRef: MatDialogRef<BusinessProfileEditPasswordComponent>,
    
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm () {
    this.form = this.fb.group({
      currentPassword: ['',[Validators.required]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: ['', [Validators.required, PasswordValidator('password')]],
    });
  }

  public getCurrentPasswordError() {
    const control = this.form.get("currentPassword");
    return control.hasError("required") ? "Ingresa tu contraseña actual" : null;
  }

  public getPasswordError() {
    const control = this.form.get("password");
    return control.hasError("required") ? "Debe ingresar una contraseña" :
      control.hasError("pattern") ? "Debe tener como mínimo 8 dígitos, 1 mayúscula y 1 número" : null;
  }

  public getPasswordConfirmError() {
    const control = this.form.get("passwordConfirm");
    return control.hasError("required") ? "Debe ingresar una contraseña" :
      control.hasError("notMatch") ? "La contraseña no coincide" : null;
  }



}
