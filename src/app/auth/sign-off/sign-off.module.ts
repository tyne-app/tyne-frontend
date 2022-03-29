import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignOffComponent } from './sign-off.component';
import { ButtonsModule } from '@app/shared/controls/customs/buttons/buttons.module';



@NgModule({
  declarations: [
    SignOffComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    SignOffComponent
  ]
})
export class SignOffModule { }
