import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BusinessProfileEditPasswordComponent } from "./business-profile-edit-password.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { CloseModalModule } from "@app/shared/components";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    CloseModalModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonsModule,
  ],
  declarations: [BusinessProfileEditPasswordComponent],
  exports: [BusinessProfileEditPasswordComponent],
})
export class BusinessProfileEditPasswordModule {}
