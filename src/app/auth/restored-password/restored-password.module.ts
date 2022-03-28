import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { SharedModule } from "@app/shared/shared.module";
import { RestoredPasswordRoutingModule } from "./restored-password-routing.module";
import { RestoredPasswordComponent } from "./restored-password.component";

@NgModule({
  declarations: [RestoredPasswordComponent],
  imports: [
    CommonModule,
    RestoredPasswordRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonsModule,
    MatCardModule,
    MatDialogModule,
  ],
})
export class RestoredPasswordModule {}
