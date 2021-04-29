import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-business-registration',
  templateUrl: './business-registration.component.html',
  styleUrls: ['./business-registration.component.scss']
})
export class BusinessRegistrationComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      emailConfirm: ['', [Validators.required]],
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
      days: ['', [Validators.required]]

    });
  }

  async onSubmit() {
    console.log('loggin test')
  }

}
