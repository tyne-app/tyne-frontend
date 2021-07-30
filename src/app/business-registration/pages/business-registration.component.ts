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

@Component({
  selector: 'app-business-registration',
  templateUrl: './business-registration.component.html',
  styleUrls: ['./business-registration.component.scss']
})
export class BusinessRegistrationComponent implements OnInit {

  public cities: City[] = [];
  public states: State[] = [];
  public banks: Bank[] = [];
  public accountType = [];
  public rutRepresentanteLegal: string = null;
  public form: FormGroup;

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
    this.initForm();
    this.getCities();
    this.getBanks();
    this.getAccountType();
  }

  public initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      rut: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator]],
      email: ['', [Validators.email, Validators.required, Validators.pattern(emailRegex)]],
      emailConfirm: ['', [Validators.required, Validators.pattern(emailRegex), EmailValidator('email')]],
      contactNumber: ['', [Validators.required, Validators.minLength(17)]],
      nameCompany: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      businessLine: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      rutLocal: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      number: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      city: ['0', [Validators.required, Validators.min(1)]],
      state: ['0', [Validators.required, Validators.min(1)]],
      havePet: ["0"],
      rutAccountOwner: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator]],
      nameAccountOwner: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      accountNumber: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      bank: ['0', [Validators.required, Validators.min(1)]],
      accountType: ['0', [Validators.required, Validators.min(1)]],
      hourOpening: ['', [Validators.required, Validators.min(0), Validators.max(23)]],
      minutesOpening: ['', [Validators.required, Validators.min(0), Validators.max(59)]],
      hourClosure: ['', [Validators.required, Validators.min(0), Validators.max(23)]],
      minutesClosure: ['', [Validators.required, Validators.min(0), Validators.max(59)]],
      days: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      passwordConfirm: ['', [Validators.required, PasswordValidator('password'), Validators.pattern(passwordRegex)]],
    });
  }

  public getCities() {
    this.territorialsService.getCities(1).subscribe(cities => {
      this.cities = cities;
    });
  }

  public getStates() {
    const idCity = this.form.get("city").value;
    this.territorialsService.getStates(idCity).subscribe(states => {
      this.states = states;
      this.form.get("state").setValue("0");
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
    },{
      id: 2,
      name: "Corriente"
    }];
  }

  public onSubmit() {

    if (this.form.invalid) return;

    // Local object.
    // const local: Local = {
    //   days: this.form.get('days').value,
    //   ending_hour: this.closure,
    //   opening_hour: this.opening,
    //   region: this.form.get('region').value,
    //   commune: this.form.get('commune').value,
    //   address: this.form.get('address').value,
    //   rut: this.form.get('rut').value,
    //   type: this.form.get('accountType').value,
    //   pets: this.form.get('havePet').value,
    //   phone: this.form.get('contactNumber').value,
    //   social_reason: this.form.get('socialReason').value
    // };

    // console.log(local);

    // **HAY QUE SETEAR EL DISEÑO  */
    this.snackBar.open('Ha registrado satisfactoriamente el local', 'ok', {
      duration: 3000
    });
    this.router.navigateByUrl('/inicio');
  }

  public getNameError() {
    const name = this.form.get("name");
    return name.hasError("required") ? "Debe ingresar un nombre" :
      name.hasError("minlength") ? "Debe tener mínimo 2 caracteres" :
        name.hasError("maxlength") ? "Debe tener máximo 30 caracteres" : null
  }

  public getLastNameError() {
    const lastName = this.form.get("lastName");
    return lastName.hasError("required") ? "Debe ingresar un apellido" :
      lastName.hasError("minlength") ? "Debe tener mínimo 2 caracteres" :
        lastName.hasError("maxlength") ? "Debe tener máximo 30 caracteres" : null
  }

  public getRutError() {
    const rut = this.form.get("rut");
    return rut.hasError("required") ? "Debe ingresar un rut" :
      rut.hasError("minlength") ? "Debe ingresar un rut válido" :
        rut.hasError("maxlength") ? "Debe ingresar un rut válido" :
          rut.hasError("invalidRut") ? "Debe ingresar un rut válido" : null
  }

  public getEmailError() {
    const email = this.form.get("email");
    return email.hasError("required") ? "Debe ingresar un email" :
      email.hasError("email") ? "Debe ingresar un email válido" :
        email.hasError("pattern") ? "Debe ingresar un email válido" : null
  }

  public getEmailConfirmError() {
    const emailConfirm = this.form.get("emailConfirm");
    return emailConfirm.hasError("required") ? "Debe ingresar un email" :
      emailConfirm.hasError("notMatch") ? "El email no coincide" :
        emailConfirm.hasError("email") ? "Debe ingresar un email válido" :
          emailConfirm.hasError("pattern") ? "Debe ingresar un email válido" : null
  }

  public getContactNumberError() {
    const contactNumber = this.form.get("contactNumber");
    return contactNumber.hasError("required") ? "El número no es válido" :
      contactNumber.hasError("minlength") ? "El número no es válido" : null;
  }

  public getNameCompanyError() {
    const nameCompany = this.form.get("nameCompany");
    return nameCompany.hasError("required") ? "Debe ingresar una razón social" :
      nameCompany.hasError("minlength") ? "Debe tener mínimo 5 caracteres" :
        nameCompany.hasError("maxlength") ? "Debe tener máximo 50 caracteres" : null
  }

  public getBusinessLineError() {
    const businessLine = this.form.get("businessLine");
    return businessLine.hasError("required") ? "Debe ingresar un giro" :
      businessLine.hasError("minlength") ? "Debe tener mínimo 5 caracteres" :
        businessLine.hasError("maxlength") ? "Debe tener máximo 50 caracteres" : null
  }

  public getRutLocalError() {
    const rutLocal = this.form.get("rutLocal");
    return rutLocal.hasError("required") ? "Debe ingresar un rut" :
      rutLocal.hasError("minlength") ? "Debe ingresar un rut válido" :
        rutLocal.hasError("maxlength") ? "Debe ingresar un rut válido" :
          rutLocal.hasError("invalidRut") ? "Debe ingresar un rut válido" : null
  }

  public getAddressError() {
    const address = this.form.get("address");
    return address.hasError("required") ? "Debe ingresar una calle" :
      address.hasError("minlength") ? "Debe tener mínimo 5 caracteres" :
        address.hasError("maxlength") ? "Debe tener máximo 50 caracteres" : null
  }

  public getNumberError() {
    const number = this.form.get("number");
    return number.hasError("required") ? "Debe ingresar un número de calle" :
      number.hasError("minlength") ? "Debe tener mínimo 1 caracteres" :
        number.hasError("maxlength") ? "Debe tener máximo 20 caracteres" : null
  }

  public getCityError() {
    const city = this.form.get("city");
    return city.hasError("required") ? "Debe seleccionar una región" :
      city.hasError("min") ? "Debe seleccionar una región" : null
  }

  public getStateError() {
    const state = this.form.get("state");
    return state.hasError("required") ? "Debe seleccionar una comuna" :
      state.hasError("min") ? "Debe seleccionar una comuna" : null
  }

  public getRutAccountOwnerError() {
    const rutAccountOwner = this.form.get("rutAccountOwner");
    return rutAccountOwner.hasError("required") ? "Debe ingresar un rut" :
      rutAccountOwner.hasError("minlength") ? "Debe ingresar un rut válido" :
        rutAccountOwner.hasError("maxlength") ? "Debe ingresar un rut válido" :
          rutAccountOwner.hasError("invalidRut") ? "Debe ingresar un rut válido" : null
  }

  public getNameAccountOwnerError() {
    const nameAccountOwner = this.form.get("nameAccountOwner");
    return nameAccountOwner.hasError("required") ? "Debe ingresar el nombre del titular" :
      nameAccountOwner.hasError("minlength") ? "Debe tener mínimo 5 caracteres" :
        nameAccountOwner.hasError("maxlength") ? "Debe tener máximo 50 caracteres" : null
  }

  public getAccountNumberError() {
    const accountNumber = this.form.get("accountNumber");
    return accountNumber.hasError("required") ? "Debe ingresar un número de cuenta" :
      accountNumber.hasError("minlength") ? "Debe tener mínimo 4 caracteres" :
        accountNumber.hasError("maxlength") ? "Debe tener máximo 20 caracteres" : null
  }

  public getBankError() {
    const bank = this.form.get("bank");
    return bank.hasError("required") ? "Debe seleccionar un banco" :
      bank.hasError("min") ? "Debe seleccionar un banco" : null
  }

  public getAccountTypeError() {
    const accountType = this.form.get("accountType");
    return accountType.hasError("required") ? "Debe seleccionar un tipo de cuenta" :
      accountType.hasError("min") ? "Debe seleccionar un tipo de cuenta" : null
  }

  public getHourOpeningError() {
    const hourOpening = this.form.get("hourOpening");
    return hourOpening.hasError("required") ? "Solo entre 0 y 23" :
      hourOpening.hasError("min") ? "Solo entre 0 y 23" :
        hourOpening.hasError("max") ? "Solo entre 0 y 23" : null
  }

  public getMinutesOpeningError() {
    const minutesOpening = this.form.get("minutesOpening");
    return minutesOpening.hasError("required") ? "Solo entre 0 y 59" :
      minutesOpening.hasError("min") ? "Solo entre 0 y 59" :
        minutesOpening.hasError("max") ? "Solo entre 0 y 59" : null
  }

  public getHourClosureError() {
    const hourClosure = this.form.get("hourClosure");
    return hourClosure.hasError("required") ? "Solo entre 0 y 23" :
      hourClosure.hasError("min") ? "Solo entre 0 y 23" :
        hourClosure.hasError("max") ? "Solo entre 0 y 23" : null
  }

  public getMinutesClosureError() {
    const minutesClosure = this.form.get("minutesClosure");
    return minutesClosure.hasError("required") ? "Solo entre 0 y 59" :
      minutesClosure.hasError("min") ? "Solo entre 0 y 59" :
        minutesClosure.hasError("max") ? "Solo entre 0 y 59" : null
  }

  public getDaysError() {
    const days = this.form.get("days");
    console.log(days.errors);
    return days.hasError("required") ? "Debe escoger días de funcionamiento" : null;
  }

  public getPasswordError() {
    const password = this.form.get("password");
    return password.hasError("required") ? "Debe ingresar una contraseña" :
      password.hasError("pattern") ? "Debe tener como mínimo 8 dígitos, 1 mayúscula y 1 número" : null;
  }

  public getPasswordConfirmError() {
    const passwordConfirm = this.form.get("passwordConfirm");
    return passwordConfirm.hasError("required") ? "Debe ingresar una contraseña" :
      passwordConfirm.hasError("notMatch") ? "La contraseña no coincide" : 
      passwordConfirm.hasError("pattern") ? "No cumple" : null;
  }
}
