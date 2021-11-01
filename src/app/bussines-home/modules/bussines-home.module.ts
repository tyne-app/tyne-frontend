import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { Ng9RutModule } from "ng9-rut";
import { HomeModule } from "@src/app/home/modules/home.module";
import { SharedModule } from "@src/app/shared/modules/shared.module";
import { SwiperModule } from "swiper/angular";
import { MaterialModule } from "@shared/modules/material.module";
import { BussinesHomeRoutingModule } from "../routes/bussines-home-routing.module";
import { BussinesHomeComponent } from "../pages/bussines-home.component";
import { LocalReservationsComponent } from "../components/local-reservations/local-reservations.component";
import { LocalReservationsDetailsComponent } from "../components/local-reservations-details/local-reservations-details.component";

@NgModule({
  declarations: [BussinesHomeComponent, LocalReservationsComponent, LocalReservationsDetailsComponent],
  imports: [
    CommonModule,
    BussinesHomeRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    SwiperModule,
    Ng9RutModule,
    MatSlideToggleModule,
  ],
})
export class BussinesHomeModule {}
