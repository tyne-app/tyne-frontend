import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BusinessReservationsComponent } from "./business-reservations.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BusinessReservationsDetailsModule } from "../business-reservations-details/business-reservations-details.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatOptionModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { SharedModule } from "@app/shared/shared.module";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [BusinessReservationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    BusinessReservationsDetailsModule,
  ],
  exports: [BusinessReservationsComponent],
})
export class BusinessReservationsModule {}
