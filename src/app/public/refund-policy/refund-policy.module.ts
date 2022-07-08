import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { FooterModule, HeaderModule } from "@app/shared/components";
import { RefundPolicyRoutingModule } from "./refund-policy-routing.module";
import { RefundPolicyComponent } from "./refund-policy.component";
import { RefundPolicyCardModule } from "./shared/components/refund-policy-card/refund-policy-card.module";

@NgModule({
  declarations: [RefundPolicyComponent],
  imports: [CommonModule, RefundPolicyRoutingModule, MatCardModule, RefundPolicyCardModule, FooterModule, HeaderModule],
})
export class RefundPolicyModule {}
