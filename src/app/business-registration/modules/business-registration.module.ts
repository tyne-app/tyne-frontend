import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRegistrationRoutingModule } from '../routes/business-registration-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { BusinessRegistrationComponent } from '../pages/business-registration.component';
import { HomeModule } from 'src/app/home/modules/home.module';
import { Ng9RutModule } from 'ng9-rut';

@NgModule({
  declarations: [
    BusinessRegistrationComponent
  ],
  imports: [
    CommonModule,
    BusinessRegistrationRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    Ng9RutModule
  ]
})
export class BusinessRegistrationModule { }
