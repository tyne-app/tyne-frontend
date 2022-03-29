import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchBusinessComponent } from "./search-business.component";

const routes: Routes = [{ path: "", component: SearchBusinessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBusinessRoutingModule {}
