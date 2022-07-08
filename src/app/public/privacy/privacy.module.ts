import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { FooterModule, HeaderModule } from "@app/shared/components";
import { PrivacyRoutingModule } from "./privacy-routing.module";
import { PrivacyComponent } from "./privacy.component";

@NgModule({
  declarations: [PrivacyComponent],
  imports: [PrivacyRoutingModule, MatCardModule, CommonModule, HeaderModule, FooterModule],
})
export class PrivacyModule {}
