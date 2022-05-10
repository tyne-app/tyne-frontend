import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared/shared.module";
import { ClientMenusComponent } from "./client-menus.component";
import { ClientMenusRoutingModule } from "./client-menus-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDividerModule } from "@angular/material/divider";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { ScheduleBusinessComponent } from "./components/schedule-business/schedule-business.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [ClientMenusComponent, ScheduleBusinessComponent],
  imports: [
    ClientMenusRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
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
  ],
})
export class ClientMenusModule {}
