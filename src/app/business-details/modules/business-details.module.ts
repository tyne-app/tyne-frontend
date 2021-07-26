import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../../home/modules/home.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { InfoCardComponent } from '../components/info-card/info-card.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { DetailsComponent } from '../components/details/details.component';
import { businessDetailsRoutingModule } from '../routes/business-details-routing.module';
import { BusinessDetailsComponent } from '../pages/business-details.component';
import { OpinionComponent } from '../components/opinions-component/opinion/opinion.component';
import { OpinionsComponent } from '../components/opinions-component/opinions/opinions.component';
import { SimilarComponent } from '../components/similars-component/similar/similar.component';
import { SimilarsComponent } from '../components/similars-component/similars/similars.component';

@NgModule({
  declarations: [
    BusinessDetailsComponent,
    OpinionsComponent,
    OpinionComponent,
    InfoCardComponent,
    SimilarComponent,
    SimilarsComponent,
    CarouselComponent,
    DetailsComponent
  ],
  imports: [
    businessDetailsRoutingModule,
    CommonModule,
    HomeModule,
    SharedModule,
    MaterialModule,
    SwiperModule
  ]
})
export class BusinessDetailsModule { }
