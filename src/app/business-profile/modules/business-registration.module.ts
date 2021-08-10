import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { HomeModule } from 'src/app/home/modules/home.module';
import { BusinessProfileComponent } from '../pages/business-profile.component';
import { BusinessProfileRoutingModule } from '../routes/business-registration-routing.module';
import { BusinessProfileBodyComponent } from '../components/business-profile-body/business-profile-body.component';
import { SwiperModule } from 'swiper/angular';
import { BusinessProfileEditPasswordComponent } from '../components/business-profile-edit-password/business-profile-edit-password.component';
import { BusinessProfileEditDataComponent } from '../components/business-profile-edit-data/business-profile-edit-data.component';
import { BusinessProfileEditBankDataComponent } from '../components/business-profile-edit-bank-data/business-profile-edit-bank-data.component';
import { BusinessProfileEditWorkDaysComponent } from '../components/business-profile-edit-work-days/business-profile-edit-work-days.component';

@NgModule({
  declarations: [
    BusinessProfileComponent,
    BusinessProfileBodyComponent,
    BusinessProfileEditPasswordComponent,
    BusinessProfileEditBankDataComponent,
    BusinessProfileEditDataComponent,
    BusinessProfileEditWorkDaysComponent

  ],
  imports: [
    CommonModule,
    BusinessProfileRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    SwiperModule
  ]
})
export class BusinessProfileModule { }
