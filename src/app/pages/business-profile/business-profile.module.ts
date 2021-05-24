import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessProfileComponent } from './business-profile.component';
import { HomeModule } from '../home/home.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OpinionsComponent } from './components/opinions-component/opinions/opinions.component';
import { OpinionComponent } from './components/opinions-component/opinion/opinion.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { SimilarComponent } from './components/similars-component/similar/similar.component';
import { SimilarsComponent } from './components/similars-component/similars/similars.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    BusinessProfileComponent,
    OpinionsComponent, 
    OpinionComponent,
    InfoCardComponent,
    SimilarComponent,
    SimilarsComponent,
    CarouselComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    SharedModule,
    MaterialModule,
    SwiperModule
  ]
})
export class BusinessProfileModule { }
