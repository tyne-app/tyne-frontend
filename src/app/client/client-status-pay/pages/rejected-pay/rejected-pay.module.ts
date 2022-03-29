import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RejectedPayComponent } from './rejected-pay.component';

@NgModule({ 
  imports: [
    CommonModule
  ],
  declarations: [RejectedPayComponent],
  exports: [RejectedPayComponent]
})
export class RejectedPayModule { }
