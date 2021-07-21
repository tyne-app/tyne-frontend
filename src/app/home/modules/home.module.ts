import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '../routes/home-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from '../pages/home.component';
import { BodyComponent } from '../components/body/body.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { HeaderLoginComponent } from '../components/header-login/header-login.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    HeaderLoginComponent,
    SearchBarComponent,
    HomeComponent,
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
    SearchBarComponent
  ]
})
export class HomeModule { }
