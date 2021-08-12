import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

import { emailRegex } from 'src/app/shared/constants/email';
import { ClientService } from 'src/app/shared/services/client.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  //#region "Variables"
  formLogin: FormGroup;
  get email() {
      return this.formLogin.get('email');
    }
  
  get password(){
      return this.formLogin.get('password');
    }
    
  //#endregion "Variables"

  constructor(
    private snackbar: MatSnackBar,
    private router:Router, 
    private fb: FormBuilder,
    public matDialogRef: MatDialogRef<LoginComponent>,
    private clientservice:ClientService) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if(!this.formLogin.invalid){
      this.clientservice.login(this.email.value, this.password.value).subscribe({
        next: (token:string) => {        
          localStorage.setItem("access_token", token);
          this.closeClick();
        },
        error: (error: HttpErrorResponse) => {

          this.snackbar.open('Ha ocurrido un problema, intente nuevamente', 'ok', {
            duration: 3000
          });
          
        }
      });
    }
  } 

  closeClick(): void {
    this.matDialogRef.close();
    this.snackbar.open('Ha ingresado satisfactoriamente', 'ok', {
      duration: 3000
    });
    this.router.navigateByUrl('/perfil-cliente');
  }


 
}
