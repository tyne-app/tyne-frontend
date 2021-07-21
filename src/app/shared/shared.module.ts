import { SearchBarComponent } from '../home/components/search-bar/search-bar.component';
import { MapComponent } from './components/map/map.component';
import { HeaderLoginComponent } from '../home/components/header-login/header-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import  {RouterModule } from '@angular/router';
import { HeaderComponent } from '../home/components/header/header.component';
import { FooterComponent } from '../home/components/footer/footer.component';

@NgModule({
  declarations: [
    SearchBarComponent, 
    MapComponent, 
    HeaderComponent, 
    HeaderLoginComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SearchBarComponent,
    ReactiveFormsModule,
    MapComponent,
    HeaderComponent,
    HeaderLoginComponent,
    // FooterComponent
  ]
})

export class SharedModule { }
