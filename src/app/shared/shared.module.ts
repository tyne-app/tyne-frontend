import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MapComponent } from './components/map/map.component';
import { SharedFooterComponent } from '../home/components/footer/shared-footer.component';
import { SharedHeaderLoginComponent } from './components/shared-header-login/shared-header-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import  {RouterModule } from '@angular/router';
import { SharedHeaderComponent } from '../home/components/header/shared-header.component';

@NgModule({
  declarations: [
    SearchBarComponent, 
    MapComponent, 
    SharedFooterComponent,
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
    SharedHeaderComponent,
    SharedHeaderLoginComponent
  ]
})

export class SharedModule { }
