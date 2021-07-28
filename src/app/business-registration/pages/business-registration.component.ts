import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Ng9RutService, RutValidator } from 'ng9-rut';
import { emailRegex } from 'src/app/shared/constants/email';
import { Bank } from 'src/app/shared/interfaces/bank';
import { City } from 'src/app/shared/interfaces/city';
import { State } from 'src/app/shared/interfaces/state';
import { BankService } from 'src/app/shared/services/bank.service';
import { TerritorialsService } from 'src/app/shared/services/territorials.service';
import { EmailValidator } from 'src/app/shared/validations/email-validator';

@Component({
  selector: 'app-business-registration',
  templateUrl: './business-registration.component.html',
  styleUrls: ['./business-registration.component.scss']
})
export class BusinessRegistrationComponent implements OnInit {

  public cities: City[] = [];
  public states: State[] = [];
  public banks: Bank[] = [];
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
  }

  public initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      rut: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9), this.rutValidator]],
      email: ['', [Validators.email, Validators.required, Validators.pattern(emailRegex)]],
      emailConfirm: ['', [Validators.required, Validators.pattern(emailRegex), EmailValidator('email')]],
      contactNumber: ['', [Validators.required]],
      socialReason: ['', [Validators.required]],
      localTurn: ['', [Validators.required]],
      rutLocal: ['', [Validators.required]],
      address: ['', [Validators.required]],
      number: ['', [Validators.required]],
      city: ['0', [Validators.required]],
      state: ['0', [Validators.required]],
      havePet: [false, []],
      rutAccountOwner: ['', [Validators.required]],
      nameAccountOwner: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      bank: ['0', [Validators.required]],
      accountType: ['', [Validators.required]],
      hourOpening: ['', [Validators.required]],
      minutesOpening: ['', [Validators.required]],
      hourClosure: ['', [Validators.required]],
      minutesClosure: ['', [Validators.required]],
      days: this.fb.array([], [Validators.required]),
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
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

  public onSubmit() {

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
    console.log(rut.errors);
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
}
