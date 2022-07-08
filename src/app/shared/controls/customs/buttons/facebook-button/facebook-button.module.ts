import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../button/button.module";
import { FacebookButtonComponent } from "./facebook-button.component";

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [FacebookButtonComponent],
  exports: [FacebookButtonComponent],
})
export class FacebookButtonModule {}
