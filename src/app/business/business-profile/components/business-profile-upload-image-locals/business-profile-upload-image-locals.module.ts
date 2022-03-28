import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessProfileUploadImageLocalsComponent } from './business-profile-upload-image-locals.component';
import { CloseModalModule } from '@app/shared/components';
import { BusinessProfileCarouselUploadImageModule } from '../business-profile-carousel-upload-image/business-profile-carousel-upload-image.module';
import { ButtonsModule } from '@app/shared/controls/customs/buttons/buttons.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    CloseModalModule,
    BusinessProfileCarouselUploadImageModule,
    ButtonsModule,
    MatButtonModule
  ],
  declarations: [BusinessProfileUploadImageLocalsComponent],
  exports: [BusinessProfileUploadImageLocalsComponent]
})
export class BusinessProfileUploadImageLocalsModule { }
