import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ButtonModule } from "@app/shared/controls/customs/buttons/button/button.module";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { SharedModule } from "@app/shared/shared.module";
import { RecoverPasswordRoutingModule } from "./recover-password-routing.module";
import { RecoverPasswordComponent } from "./recover-password.component";

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
    ButtonsModule,
    ButtonModule,
  ],
})
export class RecoverPasswordModule {}
