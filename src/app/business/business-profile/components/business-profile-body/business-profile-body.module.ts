import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessProfileBodyComponent } from './business-profile-body.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { AcceptPetModule } from '@app/shared/components';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule, 
    MatDialogModule,
    AcceptPetModule
  ],
  declarations: [BusinessProfileBodyComponent],
  exports: [BusinessProfileBodyComponent]
})
export class BusinessProfileBodyModule { }
