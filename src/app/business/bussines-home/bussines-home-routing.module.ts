import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BussinesHomeComponent } from "./bussines-home.component";

const routes: Routes = [{ path: "", component: BussinesHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BussinesHomeRoutingModule { }
