import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { ClientCreateReservationComponent } from "./client-create-reservation.component";

@NgModule({
  declarations: [ClientCreateReservationComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    ButtonsModule,
  ],
})
export class ClientCreateReservationModule {}
