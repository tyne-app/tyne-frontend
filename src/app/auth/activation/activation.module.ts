import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivationComponent } from "./activation.component";
import { SharedModule } from "@app/shared/shared.module";
import { MatCardModule } from "@angular/material/card";
import { ButtonModule } from "@app/shared/controls/customs/buttons/button/button.module";
import { ActivationRoutingModule } from "./activation-routing.module";
@NgModule({
  declarations: [ActivationComponent],
  imports: [CommonModule, ActivationRoutingModule, SharedModule, MatCardModule, ButtonModule],
})
export class ActivationModule {}
