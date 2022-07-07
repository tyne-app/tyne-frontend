import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterModule, HeaderModule } from "@app/shared/components";
import { AboutUsRoutingModule } from "./about-us-routing.module";
import { AboutUsComponent } from "./about-us.component";

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule, HeaderModule, FooterModule],
})
export class AboutUsModule {}
