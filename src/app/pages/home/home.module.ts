import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, BodyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  exports: []
})
export class HomeModule { }
