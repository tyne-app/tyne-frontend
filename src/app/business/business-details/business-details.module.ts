import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { BusinessDetailsComponent } from "./business-details.component";
import { businessDetailsRoutingModule } from "./business-details-routing.module";
import { BusinessDetailsBodyModule } from "./components/business-details-body/business-details-body.module";
import { CarouselModule } from "./components/carousel/carousel.module";

@NgModule({
  declarations: [BusinessDetailsComponent],
  imports: [
    businessDetailsRoutingModule,
    CommonModule,
    SharedModule,
    BusinessDetailsBodyModule, 
    CarouselModule,
  ],
})
export class BusinessDetailsModule {}
