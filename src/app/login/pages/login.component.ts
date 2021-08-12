import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { emailRegex } from 'src/app/shared/constants/email';
import { ClientService } from 'src/app/shared/services/client.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';

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
    
  public isLoading: boolean = false; 
 ;

  //#endregion "Variables"

  constructor(
    private snackbar: MatSnackBar,
    private router: Router, 
    private fb: FormBuilder,
    public loginRef: MatDialogRef<LoginComponent>,
    public spinnerRef: MatDialogRef<SpinnerComponent>,
    private clientservice: ClientService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.openSpinner();
    if(!this.formLogin.invalid){
      this.clientservice.login(this.email.value, this.password.value).subscribe({
        next: (token:string) => {        
          localStorage.setItem("access_token", token);
          this.closeModal();
          this.spinnerRef.close();
        },
        error: (error: HttpErrorResponse) => {
          this.snackbar.open('Ha ocurrido un problema, intente nuevamente', 'Aceptar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });  
         this.spinnerRef.close(); 
        }
      });
    }
  } 

  closeModal(): void {
    this.loginRef.close();
    this.snackbar.open('Ha ingresado satisfactoriamente', 'Aceptar', {
      duration: 3000,
    });
    this.router.navigateByUrl('/perfil-cliente');
  }

  openSpinner(): void {
    this.spinnerRef = this.dialog.open(SpinnerComponent,{
      width: '200px',
      panelClass: 'custom-dialog'
    });
  }

 
}
