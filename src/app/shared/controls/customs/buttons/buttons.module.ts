import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "./button/button.module";
import { FacebookButtonModule } from "./facebook-button/facebook-button.module";
import { GoogleButtonModule } from "./google-button/google-button.module";

@NgModule({
  imports: [CommonModule, ButtonModule, FacebookButtonModule, GoogleButtonModule],
  declarations: [],
  exports: [ButtonModule, FacebookButtonModule, GoogleButtonModule],
})
export class ButtonsModule {}
