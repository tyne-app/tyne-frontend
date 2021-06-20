import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

import { MatDialogRef } from '@angular/material/dialog';
import { emailRegex } from 'src/app/shared/constants/email';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _SNACKBAR: MatSnackBar,
    private fb: FormBuilder,
    public matDialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', [Validators.required]]
    });
  }

  closeClick(): void {
    this.matDialogRef.close();
    // **HAY QUE SETEAR EL DISEÑO  */
    this._SNACKBAR.open('Ha ingresado satisfactoriamente', 'ok', {
      duration: 3000
    });
  }

}
