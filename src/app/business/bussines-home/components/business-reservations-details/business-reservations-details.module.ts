import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { CloseModalModule } from "@app/shared/components";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { CurrencyStandardModule } from "@app/shared/pipe/currency-standard.module";
import { BusinessReservationsDetailsComponent } from "./business-reservations-details.component";

@NgModule({
  declarations: [BusinessReservationsDetailsComponent],
  imports: [
    CurrencyStandardModule,
    CommonModule,
    CloseModalModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ButtonsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [BusinessReservationsDetailsComponent],
})
export class BusinessReservationsDetailsModule {}
