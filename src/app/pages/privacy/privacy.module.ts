import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';



@NgModule({
  declarations: [PrivacyComponent],
  imports: [
    PrivacyRoutingModule,
    CommonModule,
    HomeModule,
    MaterialModule,
  ]
})
export class PrivacyModule { }
