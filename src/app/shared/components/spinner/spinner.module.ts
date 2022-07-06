import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerComponent } from "./spinner.component";

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, NgxSpinnerModule],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
