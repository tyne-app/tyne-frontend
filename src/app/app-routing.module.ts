import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessProfileComponent } from './pages/business-profile/business-profile.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import("./pages/home/home.module").then( m => m.HomeModule),
  },
  {
    path: 'business',
    loadChildren: ()=> import("./pages/auth/business-registration/business-registration.module").then( m => m.BusinessRegistrationModule),
  },
  {
    path: 'local-profile', component: BusinessProfileComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


