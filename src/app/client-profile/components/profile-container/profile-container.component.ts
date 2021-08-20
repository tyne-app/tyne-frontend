import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Claims } from 'src/app/shared/interfaces/token';
import { PasswordValidation } from 'src/app/shared/validations/password-validation';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent implements OnInit {

  public recoverPasswordForm:FormGroup;  

  @Input() public ClientDataInfo: Claims;
  @Input() public urlImage: string;
  
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();    
  }
  
  buildForm(): void {
    this.recoverPasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: PasswordValidation.MatchPassword
    }
    );
  }
  OnSubmit():void{
    
  }
}
