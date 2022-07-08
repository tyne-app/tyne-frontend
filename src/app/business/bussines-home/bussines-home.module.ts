import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FooterModule, HeaderModule, SpinnerModule } from "@app/shared/components";
import { Ng9RutModule } from "ng9-rut";
import { SwiperModule } from "swiper/angular";
import { BussinesHomeRoutingModule } from "./bussines-home-routing.module";
import { BussinesHomeComponent } from "./bussines-home.component";
import { BusinessReservationsModule } from "./components/business-reservations/business-reservations.module";

@NgModule({
  declarations: [BussinesHomeComponent],
  imports: [
    CommonModule,
    BussinesHomeRoutingModule,
    SwiperModule,
    Ng9RutModule,
    MatSlideToggleModule,
    BusinessReservationsModule,
    HeaderModule,
    FooterModule,
    SpinnerModule,
  ],
  exports: [BussinesHomeComponent],
})
export class BussinesHomeModule {}
