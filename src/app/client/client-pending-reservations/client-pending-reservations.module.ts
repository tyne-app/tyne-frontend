import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ClientPendingReservationsComponent } from "./client-pending-reservations.component";
import { ClientPendingReservationsRoutingModule } from "./client-pending-reservations-routing.module";
import { SharedModule } from "@app/shared/shared.module";
import { ReservationModule } from "./components/reservation/reservation.module";


@NgModule({
  declarations: [ClientPendingReservationsComponent],
  imports: [
    ClientPendingReservationsRoutingModule,
    CommonModule,
    SharedModule,
    ReservationModule,
    FormsModule,
  ],
})
export class ClientPendingReservationsModule {}
