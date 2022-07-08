import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { RouterModule } from "@angular/router";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { SuccessPayComponent } from "./success-pay.component";

@NgModule({
  imports: [CommonModule, ButtonsModule, RouterModule, MatCardModule],
  declarations: [SuccessPayComponent],
  exports: [SuccessPayComponent],
})
export class SuccessPayModule {}
