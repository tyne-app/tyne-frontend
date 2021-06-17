import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent implements OnInit {

  /** Es posible que se ocupe el objeto del usuario */
  username:string    = "Cristopher Angulo";
  phonenumber:string = "+569 2222 3333";
  birthday:string    ="DD/MM/AA";
  email:string        = "misterion_es_loMásGrande@gmail.com"
  

  recoverPasswordForm:FormGroup;  
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.recoverPasswordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  OnSubmit():void{

  }
}
