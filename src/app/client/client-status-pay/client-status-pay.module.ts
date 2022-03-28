import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { Ng9RutModule } from "ng9-rut";
import { SharedModule } from "@app/shared/shared.module";
import { SwiperModule } from "swiper/angular";
import { ClientStatusPayComponent } from "./client-status-pay.component";
import { ClientStatusPayRoutingModule } from "./client-status-pay-routing.module";
import { CancelPayModule } from "./pages/cancel-pay/cancel-pay.module";
import { SuccessPayModule } from "./pages/success-pay/success-pay.module";
import { RejectedPayModule } from "./pages/rejected-pay/rejected-pay.module";


@NgModule({
  declarations: [ClientStatusPayComponent],
  imports: [ 
    CommonModule,
    ClientStatusPayRoutingModule,
    SharedModule,
    SwiperModule,
    Ng9RutModule,
    MatSlideToggleModule,
    CancelPayModule,
    SuccessPayModule,
    RejectedPayModule
  ],
})
export class ClientStatusPayModule {}
