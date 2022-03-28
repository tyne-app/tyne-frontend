import { Component, Input } from '@angular/core';
import { RefundPolicy } from '../../interfaces/refund-policy';

@Component({
  selector: 'app-refund-policy-card',
  templateUrl: './refund-policy-card.component.html',
  styleUrls: ['./refund-policy-card.component.scss']
})
export class RefundPolicyCardComponent {
  @Input() public refundPolicy!: RefundPolicy;
}
