import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { CreateReservationComponent } from "../pages/create-reservation.component";


@NgModule({
  declarations: [CreateReservationComponent],
  imports: [MaterialModule, CommonModule, SharedModule],
})
export class CreateReservationModule {}
