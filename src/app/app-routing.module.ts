import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
/** Se deben añadir los guards correspondientes en cada caso */
const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./home/modules/home.module').then( m => m.HomeModule),
  },
  {
    path: 'detalle-local',
    loadChildren: () => import('./business-details/modules/business-details.module').then( m=>m.BusinessDetailsModule),
  },
  {
    path: 'registro-negocio',
    loadChildren: () => import('./business-registration/modules/business-registration.module').then( m => m.BusinessRegistrationModule),
  },
  {
    path: 'perfil-cliente',
    loadChildren: () => import('./client-profile/modules/client-profile.module').then(m=>m.ClientProfileModule)
  },
  {
    path: 'reembolso',
    loadChildren: () => import('./refund-policy/modules/refund-policy.module').then( m => m.RefundPolicyModule),
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('./frecuent-questions/modules/frequent-questions.module').then( m => m.FrequentQuestionsModule),
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./privacy/modules/privacy.module').then( m=> m.PrivacyModule)
  },
  {
    path: 'buscar-locales',
    loadChildren: () => import('./search-restaurant/modules/search-restaurant.module').then( m=> m.SearchRestaurantModule)
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


