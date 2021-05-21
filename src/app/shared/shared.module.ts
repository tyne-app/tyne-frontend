import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';



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
