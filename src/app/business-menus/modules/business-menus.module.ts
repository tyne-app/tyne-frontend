/** MODULES */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "@shared/modules/material.module";
import { SharedModule } from "@shared/modules/shared.module";
import { HomeModule } from "@app/home/modules/home.module";
import { BusinessMenusRoutingModule } from "../routes/business-menus-routing.module";
/** COMPONENTS */
import { BusinessMenusComponent } from "../pages/business-menus.component";

@NgModule({
  declarations: [BusinessMenusComponent],
  imports: [
    BusinessMenusRoutingModule,
    CommonModule,
    HomeModule,
    SharedModule,
    MaterialModule,
    FormsModule,
  ],
})
export class BusinessMenusModule {}
