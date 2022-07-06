import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { SharedModule } from "@app/shared/shared.module";
import { Ng9RutModule } from "ng9-rut";
import { NgxMatIntlTelInputModule } from "ngx-mat-intl-tel-input";
import { BusinessRegistrationRoutingModule } from "./business-registration-routing.module";
import { BusinessRegistrationComponent } from "./business-registration.component";

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
    MatDialogModule,
  ],
})
export class BusinessRegistrationModule {}
