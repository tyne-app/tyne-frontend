import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { Ng9RutModule } from "ng9-rut";
import { HomeModule } from "@src/app/home/modules/home.module";
import { SharedModule } from "@src/app/shared/modules/shared.module";
import { SwiperModule } from "swiper/angular";
import { MaterialModule } from "@shared/modules/material.module";
import { StatusPayComponent } from "../pages/status-pay.component";
import { StatusPayRoutingModule } from "../routes/status-pay-routing.module";
import { SuccessPayComponent } from "../components/success-pay/success-pay.component";
import { CancelPayComponent } from "../components/cancel-pay/cancel-pay.component";
import { RejectedPayComponent } from "../components/rejected-pay/rejected-pay.component";

@NgModule({
  declarations: [StatusPayComponent, SuccessPayComponent, CancelPayComponent, RejectedPayComponent],
  imports: [
    CommonModule,
    StatusPayRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    SwiperModule,
    Ng9RutModule,
    MatSlideToggleModule,
  ],
})
export class StatusPayModule {}
