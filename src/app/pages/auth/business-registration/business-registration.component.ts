import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';

import { emailRegex } from 'src/app/shared/constants/email';
import { Local } from 'src/app/shared/interfaces/local';

@Component({
  selector: 'app-business-registration',
  templateUrl: './business-registration.component.html',
  styleUrls: ['./business-registration.component.scss']
})
export class BusinessRegistrationComponent implements OnInit {

  form: FormGroup;

  days:  Array<any> = [
    {value: 0, name: 'L'},
    {value: 1, name: 'M'},
    {value: 2, name: 'M'},
    {value: 3, name: 'J'},
    {value: 4, name: 'V'},
    {value: 5, name: 'S'},
    {value: 6, name: 'D'},
  ];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
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
      commune: ['', [Validators.required]],
      region: ['', [Validators.required]],
      havePet: [false, []],
      rutAccountOwner: ['', [Validators.required]],
      nameAccountOwner: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      bank: ['', [Validators.required]],
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


  /* 
    Argument(e) -> Event from checkbox.
    If the checkbox is checked, we push that value to an array as FormArray.
    And if the user unselect the checkbox we remove the value from the FormArray
  */
  onDaysCheckboxChange(e) {
    const daysArray: FormArray = this.form.get('days') as FormArray; //pass it as a reference.

    if (e.checked) {
      daysArray.push(new FormControl(e.source.value));
    } else {
      let i: number = 0;

      daysArray.controls.forEach((item: FormControl) => {
        if (item.value == e.source.value) {
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

    //**HAY QUE SETEAR EL DISEÑO  */
    this.snackBar.open("Ha ingresado satisfactoriamente", 'ok', {
      duration: 3000
    });
  }

}
