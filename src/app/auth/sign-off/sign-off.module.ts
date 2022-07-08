import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonsModule } from "@app/shared/controls/customs/buttons/buttons.module";
import { SignOffComponent } from "./sign-off.component";

@NgModule({
  declarations: [SignOffComponent],
  imports: [CommonModule, ButtonsModule],
  exports: [SignOffComponent],
})
export class SignOffModule {}
