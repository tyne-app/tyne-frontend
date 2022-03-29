import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { SharedModule } from "@app/shared/shared.module";
import { ClientCreateReservationComponent } from "./client-create-reservation.component";

@NgModule({
  declarations: [ClientCreateReservationComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatIconModule,
    CommonModule,
    SharedModule,
    ButtonsModule
  ],
})
export class ClientCreateReservationModule {}
