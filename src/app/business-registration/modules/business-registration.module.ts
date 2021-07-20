import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRegistrationRoutingModule } from '../routes/business-registration-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../shared/material/material.module';
import { BusinessRegistrationComponent } from '../pages/business-registration.component';

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
