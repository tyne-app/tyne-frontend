import { SearchBarComponent } from '../home/components/search-bar/search-bar.component';
import { MapComponent } from './components/map/map.component';
import { HeaderLoginComponent } from '../home/components/header-login/header-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import  {RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    MapComponent
  ]
})

export class SharedModule { }
