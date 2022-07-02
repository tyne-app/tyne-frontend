import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { SharedModule } from "@app/shared/shared.module";
import { LoginComponent } from "./login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
