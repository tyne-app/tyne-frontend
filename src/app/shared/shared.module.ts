/**
 * COMPONENTS
 */
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MapComponent } from './components/map/map.component';

/**
 * MODULES
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchBarComponent, MapComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchBarComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
