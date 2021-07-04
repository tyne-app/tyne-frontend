import { PrivacyComponent } from './privacy.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PrivacyRoutingModule } from './privacy-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



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
