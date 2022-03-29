import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseModalComponent } from './close-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CloseModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    CloseModalComponent
  ]
})
export class CloseModalModule { }
