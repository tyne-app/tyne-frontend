/**
 * ANGULAR CORE
 */
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * INTERFACES
 */
import { Claims } from 'src/app/shared/interfaces/token';
/**
 * CONSTANTS
 */
import { passwordRegex } from 'src/app/shared/constants/password';
/**
 * VALIDATORS
 */
import { PasswordValidator } from 'src/app/shared/validations/password-validator';
import { ClientProfileService } from '../../services/client-profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent implements OnInit {
  
  // #region Variables
  public recoverPasswordForm:FormGroup;  

  @Input() public ClientDataInfo: Claims;
  @Input() public urlImage: string;

  // #endregion 

  // #region Getters Controls

  public get newPasswordControl(): AbstractControl {
    return this.recoverPasswordForm.get('newPassword');
  }

  public get confirmPasswordControl(): AbstractControl{
    return this.recoverPasswordForm.get('confirmPassword');
  }

  // #endregion
  
  public constructor(
    private fb: FormBuilder, 
    private clientProfileService: ClientProfileService,
    private snackbar:MatSnackBar
  ) { }

  public ngOnInit(): void {
    this.buildForm();    
  }
  
  public buildForm(): void {
    this.recoverPasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required,Validators.pattern(passwordRegex)]],
      newPassword: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      confirmPassword: ['', [Validators.required, PasswordValidator('newPassword')]],
    });
  }

  public OnSubmit() :void {
    if(this.newPasswordControl.value == this.confirmPasswordControl.value){
      this.clientProfileService.putPassword(this.newPasswordControl.value).subscribe({
        next: () => {
          this.snackbar.open('Tu contraseña ha sido actualizada exitosamente', 'Aceptar', {
            duration: 3000
          });  
        },
        error: () => {
          this.snackbar.open('Ha ocurrido un problema, intente nuevamente', 'Aceptar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });  
        }
      });
    }
  }

  public getPasswordError():string {
    const control = this.newPasswordControl ;
    return control.hasError("required") ? "Debe ingresar una contraseña" :
      control.hasError("pattern") ? "Debe tener como mínimo 8 dígitos, 1 mayúscula y 1 número" : null;
  }

  public getPasswordConfirmError(): string {
    const control = this.confirmPasswordControl;
    return control.hasError("required") ? "Debe ingresar una contraseña" :
      control.hasError("notMatch") ? "La contraseña no coincide" : null;
  }

  public getButtonClass():string {
      return (this.recoverPasswordForm.invalid) ? 'btn btn-disabled' : 'btn btn-submit';
  }
}

 
