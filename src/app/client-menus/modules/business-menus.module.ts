import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { HomeModule } from "../../home/modules/home.module";
import { ClientMenusComponent } from "../pages/client-menus.component";
import { ClientMenusRoutingModule } from "../routes/client-menus-routing.module";

@NgModule({
  declarations: [ClientMenusComponent],
  imports: [
    ClientMenusRoutingModule,
    CommonModule,
    HomeModule,
    SharedModule,
    MaterialModule,
    FormsModule,
  ],
})
export class ClientMenusModule {}
