import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { SearchBarModule } from "@app/shared/components";
import { StepImageContainerModule } from "../step-image-container/step-image-container.module";
import { StepComponent } from "./step.component";
// Importaciones provisorias
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { BusinessCardModule } from "@app/public/search-business/shared/components/business-card/business-card.module";
import { MatPaginatorProvider } from "@app/shared/providers";
import { SpinnerModule } from "@app/shared/components";

@NgModule({
  declarations: [StepComponent],
  imports: [
    MatCardModule,
    CommonModule,
    SearchBarModule,
    StepImageContainerModule,
    MatPaginatorModule,
    MatSelectModule,
    MatOptionModule,
    BusinessCardModule,
    SpinnerModule
  ],
  exports: [StepComponent],
  providers: [MatPaginatorProvider],
})
export class StepModule {}
