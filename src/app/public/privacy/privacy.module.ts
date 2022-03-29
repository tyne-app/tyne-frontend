import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { PrivacyComponent } from "./privacy.component";
import { PrivacyRoutingModule } from "./privacy-routing.module";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [PrivacyComponent],
  imports: [
    PrivacyRoutingModule,
    MatCardModule,
    CommonModule,
    SharedModule,
  ],
})
export class PrivacyModule {}
