import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchRestaurantComponent } from "../pages/search-restaurant.component";

const routes: Routes = [{ path: "", component: SearchRestaurantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRestaurantRoutingModule {}
