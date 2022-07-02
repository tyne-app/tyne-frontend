import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PasswordModule } from "./customs/password/password.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, PasswordModule],
  exports: [PasswordModule],
})
export class ControlsModule {}
