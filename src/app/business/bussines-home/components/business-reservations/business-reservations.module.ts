import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatOptionModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorProvider } from "@app/shared/providers";
import { BusinessReservationsDetailsModule } from "../business-reservations-details/business-reservations-details.module";
import { BusinessReservationsComponent } from "./business-reservations.component";

@NgModule({
  declarations: [BusinessReservationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
  providers: [MatPaginatorProvider],
})
export class BusinessReservationsModule {}
