import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    MaterialModule
  ]
})
export class PrivacyModule { }
