import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailRegex } from 'src/app/shared/constants/email';

@Component({
  selector: 'app-business-profile-edit-data',
  templateUrl: './business-profile-edit-data.component.html',
  styleUrls: ['./business-profile-edit-data.component.scss']
})
export class BusinessProfileEditDataComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.form = this.fb.group({
      businessName: [{ value: 'Los Vikingos', disabled: true }, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      businessPhone: ['', [Validators.required, Validators.minLength(17)]],
      businessLocation: [{ value: 'Avenida Grecia #1223', disabled: true }, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [Validators.email, Validators.required, Validators.pattern(emailRegex)]],
      managerName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      phoneManager: ['', [Validators.required, Validators.minLength(17)]]
    });
  }

  public save() {
    
  }

  //#region Validations Errors
  public getBusinessNameError() {
    const control = this.form.get("businessName");
    return control.hasError("required") ? "Debe ingresar un nombre" :
      control.hasError("minlength") ? "Debe tener mínimo 2 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 50 caracteres" : null
  }

  public getBusinessPhoneError() {
    const control = this.form.get("businessPhone");
    return control.hasError("required") ? "El número no es válido" :
      control.hasError("minlength") ? "El número no es válido" : null;
  }

  public getBusinessLocationError() {
    const control = this.form.get("businessLocation");
    return control.hasError("required") ? "Debe ingresar una calle" :
      control.hasError("minlength") ? "Debe tener mínimo 5 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 50 caracteres" : null
  }

  public getLegalRepresentativeEmailError() {
    const control = this.form.get("email");
    return control.hasError("required") ? "Debe ingresar un email" :
      control.hasError("email") ? "Debe ingresar un email válido" :
        control.hasError("pattern") ? "Debe ingresar un email válido" : null

  }

  public getManagerNameError() {
    const control = this.form.get("managerName");
    return control.hasError("required") ? "Debe ingresar un nombre" :
      control.hasError("minlength") ? "Debe tener mínimo 2 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 50 caracteres" : null
  }

  public getPhoneManagerError() {
    const control = this.form.get("phoneManager");
    return control.hasError("required") ? "El número no es válido" :
      control.hasError("minlength") ? "El número no es válido" : null;
  }
  //#endregion Validations Errors
}
