import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { SearchBarModule } from "@app/shared/components";
import { StepImageContainerModule } from "../step-image-container/step-image-container.module";
import { StepComponent } from "./step.component";

@NgModule({
  declarations: [StepComponent],
  imports: [MatCardModule, CommonModule, SearchBarModule, StepImageContainerModule],
  exports: [StepComponent],
})
export class StepModule {}
