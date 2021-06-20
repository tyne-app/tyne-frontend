import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './shared/components/map/map.component';
import { BusinessProfileComponent } from './pages/business-profile/business-profile.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

/** Se deben añadir los guards correspondientes en cada caso */
const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule),
  },
  {
    path: 'perfil-local',
    loadChildren: () => import('./pages/business-profile/business-profile.module').then( m=>m.BusinessProfileModule),
  },
  {
    path: 'registro-negocio',
    loadChildren: () => import('./pages/auth/business-registration/business-registration.module').then( m => m.BusinessRegistrationModule),
  },
  {
    path: 'perfil-cliente',
    loadChildren: () => import('./pages/client-profile/client-profile.module').then(m=>m.ClientProfileModule)
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./pages/privacy/privacy.module').then( m => m.PrivacyModule),
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


