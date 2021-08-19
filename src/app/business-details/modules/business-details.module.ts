import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { SwiperModule } from "swiper/angular";
import { HomeModule } from "../../home/modules/home.module";
import { BusinessDetailsBodyComponent } from "../components/business-details-body/business-details-body.component";
import { CarouselComponent } from "../components/carousel/carousel.component";
import { BusinessDetailsComponent } from "../pages/business-details.component";
import { businessDetailsRoutingModule } from "../routes/business-details-routing.module";

@NgModule({
  declarations: [
    BusinessDetailsComponent,
    CarouselComponent,
    BusinessDetailsBodyComponent,
  ],
  imports: [
    businessDetailsRoutingModule,
    CommonModule,
    HomeModule,
    SharedModule,
    MaterialModule,
    SwiperModule,
  ],
})
export class BusinessDetailsModule {}
