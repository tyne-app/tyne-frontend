import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MapComponent } from './components/map/map.component';
import { SharedFooterComponent } from './components/shared-footer/shared-footer.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { SharedHeaderLoginComponent } from './components/shared-header-login/shared-header-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import  {RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchBarComponent, 
    MapComponent, 
    SharedFooterComponent, 
    HomeBodyComponent, 
    SharedHeaderComponent, 
    SharedHeaderLoginComponent
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
    SharedFooterComponent,
    HomeBodyComponent,
    SharedHeaderComponent,
    SharedHeaderLoginComponent
  ]
})

export class SharedModule { }
