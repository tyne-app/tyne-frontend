import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "./button/button.module";
import { GoogleButtonModule } from "./google-button/google-button.module";

@NgModule({
  imports: [CommonModule, ButtonModule, GoogleButtonModule],
  declarations: [],
  exports: [ButtonModule, GoogleButtonModule],
})
export class ButtonsModule {}
