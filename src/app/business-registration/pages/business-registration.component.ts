import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RutValidator } from 'ng9-rut';
import { emailRegex } from 'src/app/shared/constants/email';
import { passwordRegex } from 'src/app/shared/constants/password';
import { Bank } from 'src/app/shared/interfaces/bank';
import { City } from 'src/app/shared/interfaces/city';
import { State } from 'src/app/shared/interfaces/state';
import { BankService } from 'src/app/shared/services/bank.service';
import { TerritorialsService } from 'src/app/shared/services/territorials.service';
import { EmailValidator } from 'src/app/shared/validations/email-validator';
import { PasswordValidator } from 'src/app/shared/validations/password-validator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-business-registration',
  templateUrl: './business-registration.component.html',
  styleUrls: ['./business-registration.component.scss']
})
export class BusinessRegistrationComponent implements OnInit {

  public isLinear = environment.production;
  public cities: City[] = [];
  public states: State[] = [];
  public banks: Bank[] = [];
  public accountType = [];
  public rutRepresentanteLegal: string = null;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;

  days: Array<any> = [
    { value: 0, name: 'Lunes' },
    { value: 1, name: 'Martes' },
    { value: 2, name: 'Miércoles' },
    { value: 3, name: 'Jueves' },
    { value: 4, name: 'Viernes' },
    { value: 5, name: 'Sábado' },
    { value: 6, name: 'Domingo' },
  ];

  constructor(
    private fb: FormBuilder,
    private rutValidator: RutValidator,
    private snackBar: MatSnackBar,
    private router: Router,
    private territorialsService: TerritorialsService,
    private banksService: BankService
  ) { }

  public ngOnInit() {
    this.initFirstFormGroup();
    this.initSecondFormGroup();
    this.initThirdFormGroup();
    this.getCities();
    this.getBanks();
    this.getAccountType();
  }

  public initFirstFormGroup() {
    this.firstFormGroup = this.fb.group({
      managerName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      managerLastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      managerPhone: ['', [Validators.required, Validators.minLength(17)]],
      managerEmail: ['', [Validators.email, Validators.required, Validators.pattern(emailRegex)]],
      managerEmailConfirm: ['', [Validators.required, Validators.pattern(emailRegex), EmailValidator('managerEmail')]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: ['', [Validators.required, PasswordValidator('password')]],
    });
  }

  public initSecondFormGroup() {
    this.secondFormGroup = this.fb.group({
      legalRepresentativeName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      legalRepresentativeLastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      legalRepresentativeRut: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator]],
      legalRepresentativeEmail: ['', [Validators.email, Validators.required, Validators.pattern(emailRegex)]],
      legalRepresentativePhone: ['', [Validators.required, Validators.minLength(17)]],
      legalRepresentativeNameCompany: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      legalRepresentativeBusinessLine: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      legalRepresentativeRutBusiness: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator]],
      principalLocationAddress: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      principalLocationNumber: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      principalLocationCity: ['0', [Validators.required, Validators.min(1)]],
      principalLocationState: ['0', [Validators.required, Validators.min(1)]],
      principalLocationHavePet: ["0"],
    });
  }

  public initThirdFormGroup() {
    this.thirdFormGroup = this.fb.group({
      rutAccountOwner: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator]],
      nameAccountOwner: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      accountNumber: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      bank: ['0', [Validators.required, Validators.min(1)]],
      accountType: ['0', [Validators.required, Validators.min(1)]],
    });
  }

  public getCities() {
    this.territorialsService.getCities(1).subscribe(cities => {
      this.cities = cities;
    });
  }

  public getStates() {
    const idCity = this.secondFormGroup.get("principalLocationCity").value;
    this.territorialsService.getStates(idCity).subscribe(states => {
      this.states = states;
      this.secondFormGroup.get("principalLocationState").setValue("0");
    });
  }

  public getBanks() {
    this.banksService.getBanks().subscribe(banks => {
      this.banks = banks;
    });
  }

  public getAccountType() {
    this.accountType = [{
      id: 1,
      name: "Vista"
    }, {
      id: 2,
      name: "Corriente"
    }];
  }

  public saveNewBusiness() {

    if (this.thirdFormGroup.invalid) return;

    /*
     * this.snackBar.open('Ha registrado satisfactoriamente el local', 'ok', {
     *   duration: 3000
     * });
     * this.router.navigateByUrl('/inicio');  
     */
  }

  // #region First stepper validations
  public getManagerNameError() {
    const control = this.firstFormGroup.get("managerName");
    return control.hasError("required") ? "Debe ingresar un nombre" :
      control.hasError("minlength") ? "Debe tener mínimo 2 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 30 caracteres" : null;
  }

  public getManagerLastNameError() {
    const control = this.firstFormGroup.get("managerLastName");
    return control.hasError("required") ? "Debe ingresar un apellido" :
      control.hasError("minlength") ? "Debe tener mínimo 2 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 30 caracteres" : null;
  }

  public getManagerPhoneError() {
    const control = this.firstFormGroup.get("managerPhone");
    return control.hasError("required") ? "El número no es válido" :
      control.hasError("minlength") ? "El número no es válido" : null;
  }

  public getManagerEmailError() {
    const control = this.firstFormGroup.get("managerEmail");
    return control.hasError("required") ? "Debe ingresar un email" :
      control.hasError("email") ? "Debe ingresar un email válido" :
        control.hasError("pattern") ? "Debe ingresar un email válido" : null;
  }

  public getManagerEmailConfirmError() {
    const control = this.firstFormGroup.get("managerEmailConfirm");
    return control.hasError("required") ? "Debe ingresar un email" :
      control.hasError("notMatch") ? "El email no coincide" :
        control.hasError("email") ? "Debe ingresar un email válido" :
          control.hasError("pattern") ? "Debe ingresar un email válido" : null;
  }

  public getPasswordError() {
    const control = this.firstFormGroup.get("password");
    return control.hasError("required") ? "Debe ingresar una contraseña" :
      control.hasError("pattern") ? "Debe tener como mínimo 8 dígitos, 1 mayúscula y 1 número" : null;
  }

  public getPasswordConfirmError() {
    const control = this.firstFormGroup.get("passwordConfirm");
    return control.hasError("required") ? "Debe ingresar una contraseña" :
      control.hasError("notMatch") ? "La contraseña no coincide" : null;
  }
  // #endregion First stepper validations

  // #region Second stepper validations
  public getLegalRepresentativeNameError() {
    const control = this.secondFormGroup.get("legalRepresentativeName");
    return control.hasError("required") ? "Debe ingresar un nombre" :
      control.hasError("minlength") ? "Debe tener mínimo 2 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 30 caracteres" : null;
  }

  public getLegalRepresentativeLastNameError() {
    const control = this.secondFormGroup.get("legalRepresentativeLastName");
    return control.hasError("required") ? "Debe ingresar un apellido" :
      control.hasError("minlength") ? "Debe tener mínimo 2 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 30 caracteres" : null;
  }

  public getLegalRepresentativeRutError() {
    const control = this.secondFormGroup.get("legalRepresentativeRut");
    return control.hasError("required") ? "Debe ingresar un rut" :
      control.hasError("minlength") ? "Debe ingresar un rut válido" :
        control.hasError("maxlength") ? "Debe ingresar un rut válido" :
          control.hasError("invalidRut") ? "Debe ingresar un rut válido" : null;
  }

  public getLegalRepresentativeEmailError() {
    const control = this.secondFormGroup.get("legalRepresentativeEmail");
    return control.hasError("required") ? "Debe ingresar un email" :
      control.hasError("email") ? "Debe ingresar un email válido" :
        control.hasError("pattern") ? "Debe ingresar un email válido" : null;

  }

  public getLegalRepresentativePhoneError() {
    const control = this.secondFormGroup.get("legalRepresentativePhone");
    return control.hasError("required") ? "El número no es válido" :
      control.hasError("minlength") ? "El número no es válido" : null;
  }

  public getLegalRepresentativeNameCompanyError() {
    const control = this.secondFormGroup.get("legalRepresentativeNameCompany");
    return control.hasError("required") ? "Debe ingresar una razón social" :
      control.hasError("minlength") ? "Debe tener mínimo 5 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 50 caracteres" : null;
  }

  public getLegalRepresentativeBusinessLineError() {
    const control = this.secondFormGroup.get("legalRepresentativeBusinessLine");
    return control.hasError("required") ? "Debe ingresar un giro" :
      control.hasError("minlength") ? "Debe tener mínimo 5 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 50 caracteres" : null;
  }

  public getLegalRepresentativeRutBusinessError() {
    const control = this.secondFormGroup.get("legalRepresentativeRutBusiness");
    return control.hasError("required") ? "Debe ingresar un rut" :
      control.hasError("minlength") ? "Debe ingresar un rut válido" :
        control.hasError("maxlength") ? "Debe ingresar un rut válido" :
          control.hasError("invalidRut") ? "Debe ingresar un rut válido" : null;
  }

  public getPrincipalLocationAddressError() {
    const control = this.secondFormGroup.get("principalLocationAddress");
    return control.hasError("required") ? "Debe ingresar una calle" :
      control.hasError("minlength") ? "Debe tener mínimo 5 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 50 caracteres" : null;
  }

  public getPrincipalLocationNumberError() {
    const control = this.secondFormGroup.get("principalLocationNumber");
    return control.hasError("required") ? "Debe ingresar un número de calle" :
      control.hasError("minlength") ? "Debe tener mínimo 1 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 20 caracteres" : null;
  }

  public getPrincipalLocationCityError() {
    const control = this.secondFormGroup.get("principalLocationCity");
    return control.hasError("required") ? "Debe seleccionar una región" :
      control.hasError("min") ? "Debe seleccionar una región" : null;
  }

  public getPrincipalLocationStateError(): string {
    const control = this.secondFormGroup.get("principalLocationState");
    return control.hasError("required") ? "Debe seleccionar una comuna" :
      control.hasError("min") ? "Debe seleccionar una comuna" : null;
  }
  // #endregion Second stepper validations

  // #region Third stepper validations
  public getRutAccountOwnerError() {
    const control = this.thirdFormGroup.get("rutAccountOwner");
    return control.hasError("required") ? "Debe ingresar un rut" :
      control.hasError("minlength") ? "Debe ingresar un rut válido" :
        control.hasError("maxlength") ? "Debe ingresar un rut válido" :
          control.hasError("invalidRut") ? "Debe ingresar un rut válido" : null;
  }

  public getNameAccountOwnerError() {
    const control = this.thirdFormGroup.get("nameAccountOwner");
    return control.hasError("required") ? "Debe ingresar el nombre del titular" :
      control.hasError("minlength") ? "Debe tener mínimo 5 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 50 caracteres" : null;
  }

  public getAccountNumberError() {
    const control = this.thirdFormGroup.get("accountNumber");
    return control.hasError("required") ? "Debe ingresar un número de cuenta" :
      control.hasError("minlength") ? "Debe tener mínimo 4 caracteres" :
        control.hasError("maxlength") ? "Debe tener máximo 20 caracteres" : null;
  }

  public getBankError() {
    const control = this.thirdFormGroup.get("bank");
    return control.hasError("required") ? "Debe seleccionar un banco" :
      control.hasError("min") ? "Debe seleccionar un banco" : null;
  }

  public getAccountTypeError() {
    const control = this.thirdFormGroup.get("accountType");
    return control.hasError("required") ? "Debe seleccionar un tipo de cuenta" :
      control.hasError("min") ? "Debe seleccionar un tipo de cuenta" : null;
  }
  // #endregion Third stepper validations

  public a(): void {
    // aa
    const a = 1;
    // bas
    const b = a;
    // aafsdfsdf
  }
}
