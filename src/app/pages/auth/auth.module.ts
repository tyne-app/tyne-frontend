import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ]
})
export class AuthModule { }
