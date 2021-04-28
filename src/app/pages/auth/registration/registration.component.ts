import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/shared/interfaces/client';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;

  loading = false;
  

  constructor(private fb: FormBuilder, public matDialogRef: MatDialogRef<RegistrationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Client) { }

  // Creación de formgroup.
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: ['DD/MM/AAAA', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      password:  ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', []]
    });
  }

  // Getters de cada campo del form.

  get name() { return this.form.get('email') }

  get lastName() { return this.form.get('lastName') }

  get birthDate() { return this.form.get('birthDate') }

  get email() { return this.form.get('email') }

  get phoneNumber() { return this.form.get('phoneNumber') }

  get password() { return this.form.get('password') }

  get passwordConfirm() { return this.form.get('passwordConfirm') }

  get passwordDoesMatch() { return this.password.value === this.passwordConfirm.value }

  // Implementacion de logica del submit
  async onSubmit() {
    this.loading = true

    console.log('loggin test')
  }
  // Cierra el modal (Dialog)
  closeClick(): void {
    this.matDialogRef.close();
  }
  

}
