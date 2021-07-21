import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefundPolicyRoutingModule } from '../routes/refund-policy-routing.module';
import { RefundPolicyComponent } from '../pages/refund-policy.component';
import { HomeModule } from '../../home/modules/home.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [RefundPolicyComponent],
  imports: [
    CommonModule,
    RefundPolicyRoutingModule,
    HomeModule,
    MaterialModule,
    SharedModule
  ]
})
export class RefundPolicyModule { }
