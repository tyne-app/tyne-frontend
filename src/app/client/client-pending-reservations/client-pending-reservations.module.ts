import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FooterModule, HeaderModule, SpinnerModule } from "@app/shared/components";
import { ClientPendingReservationsRoutingModule } from "./client-pending-reservations-routing.module";
import { ClientPendingReservationsComponent } from "./client-pending-reservations.component";
import { CancelReservationModule } from "./components/cancel-reservation/cancel-reservation.module";
import { ReservationModule } from "./components/reservation/reservation.module";

@NgModule({
  declarations: [ClientPendingReservationsComponent],
  imports: [
    ClientPendingReservationsRoutingModule,
    CommonModule,
    ReservationModule,
    CancelReservationModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    SpinnerModule,
  ],
})
export class ClientPendingReservationsModule {}
