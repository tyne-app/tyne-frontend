import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { SharedButtonModule } from "../shared/shared-button.module";
import { ButtonComponent } from "./button.component";

@NgModule({
  imports: [CommonModule, MatButtonModule, SharedButtonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {}
