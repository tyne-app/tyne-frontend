import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessMenusComponent } from '../pages/business-menus.component';

const routes: Routes = [
  {
    path: '', component: BusinessMenusComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class businessMenusRoutingModule { }
