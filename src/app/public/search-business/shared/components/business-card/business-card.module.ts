import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessCardComponent } from './business-card.component';
import { BusinessImagePipe } from '../../pipes/business-image.pipe';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@app/shared/shared.module';



@NgModule({
  declarations: [
    BusinessCardComponent,BusinessImagePipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule
  ],
  exports: [
    BusinessCardComponent
  ]
})
export class BusinessCardModule { }
