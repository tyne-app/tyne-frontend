import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientMenusComponent } from "./client-menus.component";

const routes: Routes = [
  {
    path: "",
    component: ClientMenusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientMenusRoutingModule {}
