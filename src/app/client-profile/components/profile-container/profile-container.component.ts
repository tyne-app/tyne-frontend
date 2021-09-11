/** ANGULAR CORE */
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
/** INTERFACES - MODELS */
import { Claims } from 'src/app/shared/interfaces/token';
import { DialogModel } from 'src/app/shared/components/components/dialog/models/dialog-model';
/** CONSTANTS */
import { ErrorMessages } from 'src/app/shared/inmutable/enums/error-messages';
import { passwordRegex } from 'src/app/shared/inmutable/constants/password';
/** VALIDATORS */
import { PasswordValidator } from 'src/app/shared/validations/password-validator';
/** SERVICES */
import { ClientProfileService } from '../../services/client-profile.service';
import { DialogService } from 'src/app/shared/components/components/dialog/services/dialog.service';

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

  public get currentPasswordControl(): AbstractControl{
    return this.recoverPasswordForm.get('currentPassword');
  }

  // #endregion
  
  public constructor(
    private fb: FormBuilder, 
    private clientProfileService: ClientProfileService,
    private snackbar:MatSnackBar,
    private dialogService :DialogService
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
          const dialogModel: DialogModel = {
            title: "¡Felicidades!",
            subtitle: "¡Tu contraseña se ha cambiado con éxito!",
            isSuccessful: true,
            messageButton: "Entendido",
          };
      
          this.dialogService.openDialog(dialogModel);
          this.cleanPasswordControlForm();
        },
        error: () => {
          const dialogModel: DialogModel = {
            title: "¡Lo sentimos!",
            subtitle: ErrorMessages.GenericError,
            isSuccessful: false,
            messageButton: "Volver",
          };
          this.dialogService.openDialog(dialogModel);
          this.cleanPasswordControlForm();        
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
  
  private resetPasswordForm = (): void => this.recoverPasswordForm.reset();

  private cleanPasswordControlForm(): void {
    this.recoverPasswordForm.reset();
    this.recoverPasswordForm.clearValidators(); 
    this.recoverPasswordForm.markAsUntouched();
  }

  
}

 
