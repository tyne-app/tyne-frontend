import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import("./pages/home/home.module").then( m => m.HomeModule),
  },
  {
    path: 'business',
    loadChildren: ()=> import("./pages/auth/business-registration/business-registration.module").then( m => m.BusinessRegistrationModule),
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


