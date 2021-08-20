import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { HomeModule } from "../../home/modules/home.module";
import { PrivacyComponent } from "../pages/privacy.component";
import { PrivacyRoutingModule } from "./privacy-routing.module";

@NgModule({
  declarations: [PrivacyComponent],
  imports: [
    PrivacyRoutingModule,
    CommonModule,
    HomeModule,
    MaterialModule,
    SharedModule,
  ],
})
export class PrivacyModule {}
