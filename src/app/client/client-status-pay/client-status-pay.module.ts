import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FooterModule, HeaderModule, SpinnerModule } from "@app/shared/components";
import { Ng9RutModule } from "ng9-rut";
import { SwiperModule } from "swiper/angular";
import { ClientStatusPayRoutingModule } from "./client-status-pay-routing.module";
import { ClientStatusPayComponent } from "./client-status-pay.component";
import { CancelPayModule } from "./pages/cancel-pay/cancel-pay.module";
import { RejectedPayModule } from "./pages/rejected-pay/rejected-pay.module";
import { SuccessPayModule } from "./pages/success-pay/success-pay.module";

@NgModule({
  declarations: [ClientStatusPayComponent],
  imports: [
    CommonModule,
    ClientStatusPayRoutingModule,
    SwiperModule,
    Ng9RutModule,
    MatSlideToggleModule,
    CancelPayModule,
    SuccessPayModule,
    RejectedPayModule,
    HeaderModule,
    FooterModule,
    SpinnerModule,
  ],
})
export class ClientStatusPayModule {}
