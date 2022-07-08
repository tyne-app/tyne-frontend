import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { FooterModule, HeaderModule, SpinnerModule } from "@app/shared/components";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { CurrencyStandardModule } from "@app/shared/pipe/currency-standard.module";
import { DateAdapterProvider, MatDateFormatProvider, MatDateLocalProvider } from "@app/shared/providers";
import { ClientCreateReservationModule } from "../client-create-reservation/client-create-reservation.module";
import { ClientMenusRoutingModule } from "./client-menus-routing.module";
import { ClientMenusComponent } from "./client-menus.component";
import { ScheduleBusinessComponent } from "./components/schedule-business/schedule-business.component";

@NgModule({
  declarations: [ClientMenusComponent, ScheduleBusinessComponent],
  imports: [
    CurrencyStandardModule,
    ClientMenusRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    FormsModule,
    ButtonsModule,
    MatDialogModule,
    ClientCreateReservationModule,
    HeaderModule,
    FooterModule,
    SpinnerModule,
  ],
  providers: [MatDateLocalProvider, DateAdapterProvider, MatDateFormatProvider],
})
export class ClientMenusModule {}
