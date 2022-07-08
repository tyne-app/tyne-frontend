import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterModule, HeaderModule, SpinnerModule } from "@app/shared/components";
import { businessDetailsRoutingModule } from "./business-details-routing.module";
import { BusinessDetailsComponent } from "./business-details.component";
import { BusinessDetailsBodyModule } from "./components/business-details-body/business-details-body.module";
import { CarouselModule } from "./components/carousel/carousel.module";

@NgModule({
  declarations: [BusinessDetailsComponent],
  imports: [
    businessDetailsRoutingModule,
    CommonModule,
    BusinessDetailsBodyModule,
    CarouselModule,
    HeaderModule,
    FooterModule,
    SpinnerModule,
  ],
})
export class BusinessDetailsModule {}
