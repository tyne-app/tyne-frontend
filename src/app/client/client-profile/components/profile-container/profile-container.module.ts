import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { MissedInformationModule } from "@app/shared/pipe/missed-information.module";
import { ProfileImageModule } from "../profile-image/profile-image.module";
import { ProfileContainerComponent } from "./profile-container.component";

@NgModule({
  declarations: [ProfileContainerComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    ButtonsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    ProfileImageModule,
    MissedInformationModule,
  ],
  exports: [ProfileContainerComponent],
})
export class ProfileContainerModule {}
