import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Ng9RutModule } from "ng9-rut";
import { SharedModule } from "@app/shared/shared.module";

import { BusinessRegistrationComponent } from "./business-registration.component";
import { BusinessRegistrationRoutingModule } from "./business-registration-routing.module";

import { NgxMatIntlTelInputModule } from "ngx-mat-intl-tel-input";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";

import { MatStepperModule } from "@angular/material/stepper";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatRadioModule } from "@angular/material/radio";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [BusinessRegistrationComponent],
  imports: [
    CommonModule,
    BusinessRegistrationRoutingModule,
    SharedModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    Ng9RutModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgxMatIntlTelInputModule,
    ButtonsModule,
    MatButtonModule,
    MatDialogModule
  ],
})
export class BusinessRegistrationModule {}
