import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchRestaurantComponent } from './search-restaurant.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SearchRestaurantRoutingModule } from './search-restautant-routing.module';

@NgModule({
  declarations: [
    SearchRestaurantComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      MaterialModule,
      SearchRestaurantRoutingModule
  ]
})
export class SearchRestaurantModule { }