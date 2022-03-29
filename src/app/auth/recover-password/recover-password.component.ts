import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '@app/core/services/user.service';
import { DialogModel } from '@app/shared/components/dialog/shared/interfaces/dialog-model';

import { DialogService } from '@app/shared/components/dialog/shared/services/dialog.service';
import { errorContent } from '@app/shared/components/dialog/shared/inmutable/constants/dialog-message';
import { emailRegex } from '@app/shared/inmutable/constants/regex';
import { HttpErrorResponse } from '@angular/common/http';
import { ButtonCustom } from '@app/shared/controls/customs/buttons/shared/interfaces/button-custom';


@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
 
  public passwordRecoverMessage = `Ingresa el email con el que te registraste y te enviaremos un correo con las instrucciones para recuperar tu
  contraseña`

  public email:FormControl = new FormControl("", [Validators.required, Validators.pattern(emailRegex)]);
  public custombutton: ButtonCustom = {
    buttonMaterialType: 'mat-raised-button',
    buttonType: 'submit',
    buttonTypeClass: 'btn-submit'
  }
  public constructor(
    private userService:UserService,
    private dialogService: DialogService
    ) { }

  public ngOnInit(): void {
  }

  public restoredPassword(): void {
    if(this.email.valid){
      const email:string = this.email.value;
      this.userService.sendEmailToRecoverPassword(email).subscribe(
      (response)=>{
        this.showSuccessDialog(response.message);
      },
      (error:HttpErrorResponse)=>{
        this.showErrorDialog(error);
      });
    }
  }


  private showSuccessDialog(message:string): void {
    const content: DialogModel = {
      messageButton: "Ok",
      subtitle: message,
      title: "",
      isSuccessful: true
    };
    this.dialogService.openDialog(content);
  }

  private showErrorDialog(error:HttpErrorResponse): void{
    if (error.status === 400) {
      let subtitle = "";
      error.error.details.forEach((element) => {
        subtitle += element + "\n";
      });
      const content: DialogModel = {
        isSuccessful: false,
        title: "Problemas con su registro.",
        subtitle: subtitle,
        messageButton: "Volver",
      };
      this.dialogService.openDialog(content);
    }
  }

}
