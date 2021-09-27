import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Ng9RutModule } from "ng9-rut";
import { HomeModule } from "src/app/home/modules/home.module";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { MaterialModule } from "../../shared/modules/material.module";
import { BusinessNewBranchComponent } from "../pages/business-new-branch.component";
import { BusinessNewBranchRoutingModule } from "../routes/business-new-branch-routing.module";

@NgModule({
  declarations: [BusinessNewBranchComponent],
  imports: [
    CommonModule,
    BusinessNewBranchRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    Ng9RutModule,
  ],
})
export class BusinessNewBranchModule {}
