import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchRestaurantComponent } from './search-restaurant.component';

const routes: Routes = [
  {path: '', component: SearchRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRestaurantRoutingModule { }