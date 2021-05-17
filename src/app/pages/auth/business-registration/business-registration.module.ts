import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRegistrationRoutingModule } from './business-registration-routing.module';
import { BusinessRegistrationComponent } from './business-registration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../../shared/material/material.module';



@NgModule({
  declarations: [BusinessRegistrationComponent],
  imports: [
    CommonModule,
    BusinessRegistrationRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class BusinessRegistrationModule { }
