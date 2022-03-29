import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomButtonPipe } from "./pipes/custom-button.pipe";
import { ButtonService } from "./helpers/button.service";

@NgModule({
  imports: [CommonModule],
  declarations: [CustomButtonPipe],
  exports: [CustomButtonPipe],
  providers: [ButtonService],
})
export class SharedButtonModule {}
