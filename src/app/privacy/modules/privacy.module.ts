import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../../home/modules/home.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { PrivacyRoutingModule } from './privacy-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PrivacyComponent } from '../pages/privacy.component';

@NgModule({
  declarations: [PrivacyComponent],
  imports: [
    PrivacyRoutingModule,
    CommonModule,
    HomeModule,
    MaterialModule,
    SharedModule
  ]
})
export class PrivacyModule { }
