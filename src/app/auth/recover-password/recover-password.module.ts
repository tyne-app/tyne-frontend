import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FooterModule, HeaderModule, SpinnerModule } from "@app/shared/components";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { RecoverPasswordRoutingModule } from "./recover-password-routing.module";
import { RecoverPasswordComponent } from "./recover-password.component";

@NgModule({
  declarations: [RecoverPasswordComponent],
  imports: [
    RecoverPasswordRoutingModule,
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ButtonsModule,
    HeaderModule,
    FooterModule,
    SpinnerModule,
  ],
})
export class RecoverPasswordModule {}
