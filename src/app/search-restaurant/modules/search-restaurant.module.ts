import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SearchRestaurantRoutingModule } from '../routes/search-restautant-routing.module';
import { SearchResultsComponent } from '../components/search-results/search-results.component';
import { SearchRestaurantComponent } from '../pages/search-restaurant.component';

@NgModule({
  declarations: [
    SearchRestaurantComponent,
    SearchResultsComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      MaterialModule,
      SearchRestaurantRoutingModule
  ]
})
export class SearchRestaurantModule { }