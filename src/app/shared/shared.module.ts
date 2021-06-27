/**
 * COMPONENTS
 */
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MapComponent } from './components/map/map.component';
import { SharedFooterComponent } from './components/shared-footer/shared-footer.component';

/**
 * MODULES
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SearchBarComponent, MapComponent, SharedFooterComponent],
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
    SharedFooterComponent
  ]
})

export class SharedModule { }
