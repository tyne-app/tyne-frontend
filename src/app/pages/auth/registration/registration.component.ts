import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import { ClientService } from 'src/app/core/services/client.service';
import { emailRegex } from 'src/app/shared/constants/email';
import { Client } from 'src/app/shared/interfaces/client';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;

  loading = false; //Una vez que se haga submit, loading pasa a  ser verdadero y el boton se deshabilita.
  
  // Injeccion de servicios, dialog, formbuilder y servicio cliente.
  constructor(private fb: FormBuilder,
              public matDialogRef: MatDialogRef<RegistrationComponent>,
              private clientService: ClientService,
              private _snackbar:MatSnackBar) { }

  // Creación de formgroup.
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      phoneNumber: ['', [Validators.required]],
      password:  ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', []]
    });
  }

  // Getters de cada campo del form.

  get name() { return this.form.get('name') }

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

    // Objeto cliente.
    // const clientRegister: Client = {
    //   name: this.name.value,
    //   last_name: this.lastName.value,
    //   birth_date: this.birthDate.value, 
    //   email: this.email.value,
    //   password: this.password.value
    // }

    // const response = await this.clientService.register(clientRegister);
    
    console.log('loggin test')
  }

  // Cierra el modal (Dialog)
  closeClick(): void {
    this._snackbar.open("Ha ingresado satisfactoriamente", 'ok', {
      duration: 3000
    });  
    this.matDialogRef.close();
  }
  

}
