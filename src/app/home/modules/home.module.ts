import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '../routes/home-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from '../pages/home.component';
import { BodyComponent } from '../components/body/body.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    FooterComponent
  ]
})
export class HomeModule { }
