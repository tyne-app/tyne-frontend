import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessProfileCloseUploadImageComponent } from './business-profile-close-upload-image.component';
import { CloseModalModule } from '@app/shared/components';

@NgModule({
  imports: [
    CommonModule,
    CloseModalModule,
  ],
  declarations: [BusinessProfileCloseUploadImageComponent],
  exports: [BusinessProfileCloseUploadImageComponent]
})
export class BusinessProfileCloseUploadImageModule { }
