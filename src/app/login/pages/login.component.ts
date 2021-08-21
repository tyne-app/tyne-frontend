/**
 * ANGULAR CORE
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
/**
 * CONSTANTS
 */
import { emailRegex } from 'src/app/shared/constants/email';
/**
 * COMPONENTS
 */
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
/**
 * SERVICES
 */
import { ClientService } from 'src/app/shared/services/client.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  // #region "Getters"
  public loginForm: FormGroup;
  public get emailControl(): AbstractControl {
      return this.loginForm.get('email');
    }
  
  public get passwordControl(): AbstractControl {
      return this.loginForm.get('password');
    }
    
  public isLoading = false; 
 

  // #endregion "Getters"

  public constructor(
    private snackbar: MatSnackBar,
    private router: Router, 
    private fb: FormBuilder,
    public loginRef: MatDialogRef<LoginComponent>,
    public spinnerRef: MatDialogRef<SpinnerComponent>,
    private clientservice: ClientService,
    public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  //Validators.pattern(passwordRegex)

  public buildForm():void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    this.openSpinner();
    if(!this.loginForm.invalid){
      this.clientservice.login(this.emailControl.value, this.passwordControl.value).subscribe({
        next: (token:string) => {        
          localStorage.setItem("access_token", token);
          this.closeModal();
          this.spinnerRef.close();
        },
        error: () => {
          this.snackbar.open('Ha ocurrido un problema, intente nuevamente', 'Aceptar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });  
         this.spinnerRef.close(); 
        }
      });
    }
  } 

  public closeModal(): void {
    this.loginRef.close();
    this.snackbar.open('Ha ingresado satisfactoriamente', 'Aceptar', {
      duration: 3000,
    });
    this.router.navigateByUrl('/perfil-cliente');
  }

  public openSpinner(): void {
    this.spinnerRef = this.dialog.open(SpinnerComponent,{
      width: '200px',
      panelClass: 'custom-dialog',
      disableClose: true
    });
  }

  public getButtonClass():string {
    return (this.loginForm.invalid) ? 'btn-disabled' : 'btn-submit';
  }

 
}
