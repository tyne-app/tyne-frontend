import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './shared/components/map/map.component';
import { BusinessProfileComponent } from './pages/business-profile/business-profile.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule),
  },
  {
    path: 'business',
    loadChildren: () => import('./pages/auth/business-registration/business-registration.module').then( m => m.BusinessRegistrationModule),
  },
  {
    path: 'mapa',
    component: MapComponent
  },
  {
    path: 'refund',
    loadChildren: () => import('./pages/refund-policy/refund-policy.module').then( m => m.RefundPolicyModule),
  },
  {
    path: 'frequent',
    loadChildren: () => import('./pages/frequent-questions/frequent-questions.module').then( m => m.FrequentQuestionsModule),
  },
  {
    path: 'local-profile', component: BusinessProfileComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


