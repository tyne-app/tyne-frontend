import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { HomeModule } from 'src/app/home/modules/home.module';
import { BusinessProfileComponent } from '../pages/business-profile.component';
import { BusinessProfileRoutingModule } from '../routes/business-registration-routing.module';
import { BusinessProfileBodyComponent } from '../components/business-profile-body/business-profile-body.component';

@NgModule({
  declarations: [
    BusinessProfileComponent,
    BusinessProfileBodyComponent
  ],
  imports: [
    CommonModule,
    BusinessProfileRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule
  ]
})
export class BusinessProfileModule { }
