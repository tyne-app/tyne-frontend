import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { SharedModule } from "@app/shared/shared.module";
import { ReservationComponent } from "./reservation.component";

@NgModule({
  declarations: [ReservationComponent],
  imports: [CommonModule, MatCardModule, SharedModule],
  exports: [ReservationComponent],
})
export class ReservationModule {}
