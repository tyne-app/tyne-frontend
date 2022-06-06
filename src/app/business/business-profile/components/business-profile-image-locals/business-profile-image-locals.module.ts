import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { SwiperModule } from "swiper/angular";
import { BusinessProfileImageLocalsComponent } from "./business-profile-image-locals.component";

@NgModule({
  imports: [CommonModule, SwiperModule, MatButtonModule],
  declarations: [BusinessProfileImageLocalsComponent],
  exports: [BusinessProfileImageLocalsComponent],
})
export class BusinessProfileImageLocalsModule {}
