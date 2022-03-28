import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { CloseModalModule } from '../close-modal/close-modal.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    CloseModalModule,
    MatButtonModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
