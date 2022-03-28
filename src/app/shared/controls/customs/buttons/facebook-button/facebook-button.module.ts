import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookButtonComponent } from './facebook-button.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [FacebookButtonComponent],
  exports: [FacebookButtonComponent]
})
export class FacebookButtonModule { }
