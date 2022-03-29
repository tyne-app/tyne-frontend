import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BusinessMenusComponent } from "./business-menus.component";

const routes: Routes = [
  {
    path: "",
    component: BusinessMenusComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessMenusRoutingModule {}
