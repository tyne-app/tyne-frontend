import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { RouterModule } from "@angular/router";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { CancelPayComponent } from "./cancel-pay.component";

@NgModule({
  imports: [CommonModule, ButtonsModule, RouterModule, MatCardModule],
  declarations: [CancelPayComponent],
  exports: [CancelPayComponent],
})
export class CancelPayModule {}
