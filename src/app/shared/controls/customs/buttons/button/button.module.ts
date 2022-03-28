import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button.component";
import { MatButtonModule } from "@angular/material/button";
import { SharedButtonModule } from "../shared/shared-button.module";

@NgModule({
  imports: [CommonModule,MatButtonModule, SharedButtonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {}
