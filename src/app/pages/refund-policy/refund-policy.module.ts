import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundPolicyRoutingModule } from './refund-policy-routing.module';
import { RefundPolicyComponent } from './refund-policy.component';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [RefundPolicyComponent],
  imports: [
    CommonModule,
    RefundPolicyRoutingModule,
    HomeModule,
    MaterialModule
  ]
})
export class RefundPolicyModule { }
