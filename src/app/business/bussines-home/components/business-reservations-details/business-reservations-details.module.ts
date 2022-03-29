import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BusinessReservationsDetailsComponent } from "./business-reservations-details.component";
import { CloseModalModule } from "@app/shared/components";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [BusinessReservationsDetailsComponent],
  imports: [
    CommonModule,
    CloseModalModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ButtonsModule,
    MatInputModule,
    MatFormFieldModule,
    SharedModule,
  ],
  exports: [BusinessReservationsDetailsComponent],
})
export class BusinessReservationsDetailsModule {}
