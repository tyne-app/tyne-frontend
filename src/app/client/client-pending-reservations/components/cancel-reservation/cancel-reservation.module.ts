import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CloseModalModule } from "@app/shared/components";
import { CancelReservationComponent } from "./cancel-reservation.component";

@NgModule({
  imports: [CommonModule, CloseModalModule],
  declarations: [CancelReservationComponent],
  exports: [CancelReservationComponent],
})
export class CancelReservationModule {}
