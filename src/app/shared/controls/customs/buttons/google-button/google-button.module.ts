import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleButtonComponent } from './google-button.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [GoogleButtonComponent],
  exports: [GoogleButtonComponent]
})
export class GoogleButtonModule { }
