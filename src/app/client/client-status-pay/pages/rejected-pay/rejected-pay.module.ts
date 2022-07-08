import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RejectedPayComponent } from "./rejected-pay.component";

@NgModule({
  imports: [CommonModule],
  declarations: [RejectedPayComponent],
  exports: [RejectedPayComponent],
})
export class RejectedPayModule {}
