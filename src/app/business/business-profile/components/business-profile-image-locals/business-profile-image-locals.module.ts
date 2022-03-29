import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessProfileImageLocalsComponent } from './business-profile-image-locals.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [BusinessProfileImageLocalsComponent],
  exports: [BusinessProfileImageLocalsComponent]
})
export class BusinessProfileImageLocalsModule { }
