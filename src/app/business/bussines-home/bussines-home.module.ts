import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { SharedModule } from "@app/shared/shared.module";
import { SwiperModule } from "swiper/angular";
import { BussinesHomeRoutingModule } from "./bussines-home-routing.module";
import { BussinesHomeComponent } from "./bussines-home.component";
import { Ng9RutModule } from "ng9-rut";
import { BusinessReservationsModule } from "./components/business-reservations/business-reservations.module";

@NgModule({
  declarations: [BussinesHomeComponent],
  imports: [
    CommonModule,
    BussinesHomeRoutingModule,
    SharedModule,
    SwiperModule,
    Ng9RutModule,
    MatSlideToggleModule,
    BusinessReservationsModule,
  ],
  exports:[
    BussinesHomeComponent
  ]
})
export class BussinesHomeModule {}
