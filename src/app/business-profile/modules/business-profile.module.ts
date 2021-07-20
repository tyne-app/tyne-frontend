import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../../home/modules/home.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoCardComponent } from '../components/info-card/info-card.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { DetailsComponent } from '../components/details/details.component';
import { BusinnesProfileRoutingModule } from '../routes/businnes-profile-routing.module';
import { BusinessProfileComponent } from '../pages/business-profile.component';
import { OpinionComponent } from '../components/opinions-component/opinion/opinion.component';
import { OpinionsComponent } from '../components/opinions-component/opinions/opinions.component';
import { SimilarComponent } from '../components/similars-component/similar/similar.component';
import { SimilarsComponent } from '../components/similars-component/similars/similars.component';

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
    BusinnesProfileRoutingModule,
    CommonModule,
    HomeModule,
    SharedModule,
    MaterialModule,
    SwiperModule
  ]
})
export class BusinessProfileModule { }
