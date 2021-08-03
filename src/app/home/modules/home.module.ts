import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '../routes/home-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { HomeComponent } from '../pages/home.component';
import { BodyComponent } from '../components/body/body.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { HeaderLoginComponent } from '../components/header-login/header-login.component';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { HeaderLocalsComponent } from '../components/header-locals/header-locals.component';

@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    HeaderLoginComponent,
    SearchBarComponent,
    HomeComponent,
    HeaderLocalsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HeaderLoginComponent,
    SearchBarComponent,
    HeaderLocalsComponent,
  ]
})
export class HomeModule { }