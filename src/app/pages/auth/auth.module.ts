import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/login/pages/login.component';
import { RegistrationComponent } from 'src/app/client-registration/pages/registration.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent],
  imports: [
    MaterialModule,
    CommonModule,
    SharedModule,
  ]
})
export class AuthModule { }

