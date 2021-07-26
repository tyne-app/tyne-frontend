import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessDetailsComponent } from '../pages/business-details.component';

const routes: Routes = [
  {
    path: '', component: BusinessDetailsComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class businessDetailsRoutingModule { }
