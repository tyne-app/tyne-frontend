import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { SharedModule } from "@app/shared/shared.module";
import { Ng9RutModule } from "ng9-rut";
import { NgxMatIntlTelInputModule } from "ngx-mat-intl-tel-input";
import { BusinessNewBranchRoutingModule } from "./business-new-branch-routing.module";
import { BusinessNewBranchComponent } from "./business-new-branch.component";

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
    ReactiveFormsModule,
  ],
})
export class BusinessNewBranchModule {}
