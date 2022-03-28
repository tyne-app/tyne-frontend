import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNgxComponent } from './phone-ngx.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatIntlTelInputModule } from "ngx-mat-intl-tel-input";



@NgModule({
  declarations: [
    PhoneNgxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatIntlTelInputModule
  ],
  exports: [
    PhoneNgxComponent
  ]
})
export class PhoneNgxModule { }
