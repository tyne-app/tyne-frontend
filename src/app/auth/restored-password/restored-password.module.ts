import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { FooterModule, HeaderModule, SpinnerModule } from "@app/shared/components";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { RestoredPasswordRoutingModule } from "./restored-password-routing.module";
import { RestoredPasswordComponent } from "./restored-password.component";

@NgModule({
  declarations: [RestoredPasswordComponent],
  imports: [
    CommonModule,
    RestoredPasswordRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonsModule,
    MatCardModule,
    MatDialogModule,
    HeaderModule,
    FooterModule,
    SpinnerModule,
    MatIconModule,
  ],
})
export class RestoredPasswordModule {}
