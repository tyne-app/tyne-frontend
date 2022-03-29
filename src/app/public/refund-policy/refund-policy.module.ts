import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { RefundPolicyComponent } from "./refund-policy.component";
import { RefundPolicyRoutingModule } from "./refund-policy-routing.module";
import { RefundPolicyCardModule } from "./shared/components/refund-policy-card/refund-policy-card.module";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [RefundPolicyComponent],
  imports: [
    CommonModule,
    RefundPolicyRoutingModule,
    MatCardModule,
    SharedModule,
    RefundPolicyCardModule
  ],
})
export class RefundPolicyModule {}
