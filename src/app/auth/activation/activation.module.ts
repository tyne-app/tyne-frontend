import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { ButtonModule } from "@app/shared/controls/customs/buttons/button/button.module";
import { SharedModule } from "@app/shared/shared.module";
import { ActivationRoutingModule } from "./activation-routing.module";
import { ActivationComponent } from "./activation.component";

@NgModule({
  declarations: [ActivationComponent],
  imports: [CommonModule, ActivationRoutingModule, SharedModule, MatCardModule, ButtonModule],
})
export class ActivationModule {}
