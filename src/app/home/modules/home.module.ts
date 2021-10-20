import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SearchBarComponent } from "@src/app/shared/components/components/search-bar/pages/search-bar.component";
import { MaterialModule } from "@src/app/shared/modules/material.module";
import { SharedModule } from "@src/app/shared/modules/shared.module";
import { BodyComponent } from "../components/body/body.component";
import { HomeComponent } from "../pages/home.component";
import { HomeRoutingModule } from "../routes/home-routing.module";

@NgModule({
  declarations: [BodyComponent, SearchBarComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, MaterialModule],
  exports: [SearchBarComponent],
})
export class HomeModule {}
