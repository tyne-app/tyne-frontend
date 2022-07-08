import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../button/button.module";
import { GoogleButtonComponent } from "./google-button.component";

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [GoogleButtonComponent],
  exports: [GoogleButtonComponent],
})
export class GoogleButtonModule {}
