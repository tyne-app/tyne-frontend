import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { CurrencyStandardModule } from "@app/shared/pipe/currency-standard.module";
import { SharedModule } from "@app/shared/shared.module";
import { BusinessImagePipe } from "../../pipes/business-image.pipe";
import { BusinessCardComponent } from "./business-card.component";

@NgModule({
  declarations: [BusinessCardComponent, BusinessImagePipe],
  imports: [CommonModule, MatCardModule, SharedModule, CurrencyStandardModule],
  exports: [BusinessCardComponent],
})
export class BusinessCardModule {}
