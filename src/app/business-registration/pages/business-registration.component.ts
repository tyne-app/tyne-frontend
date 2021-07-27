import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { emailRegex } from 'src/app/shared/constants/email';
import { Bank } from 'src/app/shared/interfaces/bank';
import { City } from 'src/app/shared/interfaces/city';
import { State } from 'src/app/shared/interfaces/state';
import { BankService } from 'src/app/shared/services/bank.service';
import { TerritorialsService } from 'src/app/shared/services/territorials.service';

@Component({
  selector: 'app-business-registration',
  templateUrl: './business-registration.component.html',
  styleUrls: ['./business-registration.component.scss']
})
export class BusinessRegistrationComponent implements OnInit {

  public cities: City[] = [];
  public states: State[] = [];
  public banks: Bank[] = [];

  form: FormGroup;

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
    private snackBar: MatSnackBar,
    private router: Router,
    private territorialsService: TerritorialsService,
    private banksService: BankService
    ) { }

  ngOnInit() {
    this.initForm();
    this.getCities();
    this.getBanks();
  }

  public initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required, Validators.pattern(emailRegex)]],
      emailConfirm: ['', [Validators.required, Validators.pattern(emailRegex)]],
      contactNumber: ['', [Validators.required]],
      socialReason: ['', [Validators.required]],
      localTurn: ['', [Validators.required]],
      rutLocal: ['', [Validators.required]],
      address: ['', [Validators.required]],
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

  /*
    Argument(e) -> Event from checkbox.
    If the checkbox is checked, we push that value to an array as FormArray.
    And if the user unselect the checkbox we remove the value from the FormArray
  */
  onDaysCheckboxChange(e) {
    const daysArray: FormArray = this.form.get('days') as FormArray; // pass it as a reference.

    if (e.checked) {
      daysArray.push(new FormControl(e.source.value));
    } else {
      let i = 0;

      daysArray.controls.forEach((item: FormControl) => {
        if (item.value === e.source.value) {
          daysArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  get opening() {
    return this.form.get('hourOpening').value.concat(this.form.get('minutesOpening').value);
  }

  get closure() {
    return this.form.get('hourClosure').value.concat(this.form.get('minutesClosure').value);
  }

  async onSubmit() {

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

}
