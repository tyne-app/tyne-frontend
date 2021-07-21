import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import  {RouterModule } from '@angular/router';
import { MapComponent } from '../components/map/components/map.component';

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
