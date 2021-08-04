import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../../home/modules/home.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { BusinessMenusComponent } from '../pages/business-menus.component';
import { businessMenusRoutingModule } from '../routes/business-menus-routing.module';

@NgModule({
  declarations: [
    BusinessMenusComponent
  ],
  imports: [
    businessMenusRoutingModule,
    CommonModule,
    HomeModule,
    SharedModule,
    MaterialModule
  ]
})
export class BusinessMenusModule { }
