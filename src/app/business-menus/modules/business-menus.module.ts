import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { HomeModule } from "../../home/modules/home.module";
import { BusinessMenusComponent } from "../pages/business-menus.component";
import { businessMenusRoutingModule } from "../routes/business-menus-routing.module";

@NgModule({
  declarations: [BusinessMenusComponent],
  imports: [
    businessMenusRoutingModule,
    CommonModule,
    HomeModule,
    SharedModule,
    MaterialModule,
    FormsModule,
  ],
})
export class BusinessMenusModule {}
