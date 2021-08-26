import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { SearchBarComponent } from "../../shared/components/search-bar/search-bar.component";
import { BodyComponent } from "../components/body/body.component";
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderLoginComponent } from "../components/header-login/header-login.component";
import { HeaderComponent } from "../components/header/header.component";
import { HomeComponent } from "../pages/home.component";
import { HomeRoutingModule } from "../routes/home-routing.module";

@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    HeaderLoginComponent,
    SearchBarComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, MaterialModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    HeaderLoginComponent,
    SearchBarComponent,
  ],
})
export class HomeModule {}
