import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessProfileCarouselUploadImageComponent } from './business-profile-carousel-upload-image.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
  ],
  declarations: [BusinessProfileCarouselUploadImageComponent],
  exports: [BusinessProfileCarouselUploadImageComponent]
})
export class BusinessProfileCarouselUploadImageModule { }
