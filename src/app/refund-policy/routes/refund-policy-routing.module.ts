import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefundPolicyComponent } from '../pages/refund-policy.component';

const routes: Routes = [
  {path: '', component: RefundPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundPolicyRoutingModule { }
