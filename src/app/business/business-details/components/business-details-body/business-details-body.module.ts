import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@app/shared/controls/customs/buttons/buttons.module';
import { MatButtonModule } from '@angular/material/button';
import { BusinessDetailsBodyComponent } from './business-details-body.component';
import { MatCardModule } from '@angular/material/card';
import { AcceptPetModule, MapModule } from '@app/shared/components';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [
    BusinessDetailsBodyComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    AcceptPetModule,
    MatButtonModule,
    MatCardModule,
    MapModule,
    SharedModule
  ],
  exports: [BusinessDetailsBodyComponent]
})
export class BusinessDetailsBodyModule { }
