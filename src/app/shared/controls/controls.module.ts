import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from './customs/password/password.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PasswordModule],
  exports:[ 
    PasswordModule,
  ]
})
export class ControlsModule { }
