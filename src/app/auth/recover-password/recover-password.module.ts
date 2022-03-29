import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { RecoverPasswordComponent } from "./recover-password.component";
import { RecoverPasswordRoutingModule } from "./recover-password-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [RecoverPasswordComponent],
  imports: [
    SharedModule,
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    RecoverPasswordRoutingModule,
    ButtonsModule
  ],
})

export class RecoverPasswordModule {}