import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step.component';
import { SearchBarModule } from '@app/shared/components';
import { StepImageContainerModule } from '../step-image-container/step-image-container.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [StepComponent],
  imports: [
    MatCardModule,
    CommonModule,
    SearchBarModule,
    StepImageContainerModule
  ],exports:[
    StepComponent
  ]
})
export class StepModule { }
