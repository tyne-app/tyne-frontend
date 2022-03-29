import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Ng9RutModule } from "ng9-rut";
import { SharedModule } from "@app/shared/shared.module";

import { BusinessNewBranchComponent } from "./business-new-branch.component";
import { BusinessNewBranchRoutingModule } from "./business-new-branch-routing.module";

import { NgxMatIntlTelInputModule } from "ngx-mat-intl-tel-input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatRadioModule } from "@angular/material/radio";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [BusinessNewBranchComponent],
  imports: [
    CommonModule,
    BusinessNewBranchRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    Ng9RutModule,
    NgxMatIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class BusinessNewBranchModule {}
