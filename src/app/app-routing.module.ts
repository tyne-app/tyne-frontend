import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
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
    path: 'reembolso',
    loadChildren: () => import('./pages/refund-policy/refund-policy.module').then( m => m.RefundPolicyModule),
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('./pages/frequent-questions/frequent-questions.module').then( m => m.FrequentQuestionsModule),
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./pages/privacy/privacy.module').then( m=> m.PrivacyModule)
  },
  {
    path: 'buscar-locales',
    loadChildren: () => import('./pages/search-restaurant/search-restaurant.module').then( m=> m.SearchRestaurantModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


