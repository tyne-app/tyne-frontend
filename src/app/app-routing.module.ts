import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './shared/components/map/map.component';
import { BusinessProfileComponent } from './pages/business-profile/business-profile.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

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
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: '**',
    redirectTo: 'home'
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


