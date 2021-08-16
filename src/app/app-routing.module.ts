import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { TyneRoutes } from './shared/constants/url-routes';
 
/** TODO: ADD GUARD VERY CASE */
const routes: Routes = [
  {
    path: TyneRoutes.Init,
    loadChildren: () => import('./home/modules/home.module').then( m => m.HomeModule),
  },
  {
    path: 'detalle-local',
    loadChildren: () => import('./business-details/modules/business-details.module').then( m=>m.BusinessDetailsModule),
  },
  {
    path: TyneRoutes.CommensalRegister,
    loadChildren: () => import('./business-registration/modules/business-registration.module').then( m => m.BusinessRegistrationModule),
  },
  {
    path: TyneRoutes.ClientProfile,
    loadChildren: () => import('./client-profile/modules/client-profile.module').then(m=>m.ClientProfileModule)
  },
  {
    path: TyneRoutes.LocalProfile,
    loadChildren: () => import('./business-profile/modules/business-registration.module').then(m=>m.BusinessProfileModule)
  },
  {
    path: TyneRoutes.Refund,
    loadChildren: () => import('./refund-policy/modules/refund-policy.module').then( m => m.RefundPolicyModule),
  },
  {
    path: TyneRoutes.FrecuentQuestion,
    loadChildren: () => import('./frecuent-questions/modules/frequent-questions.module').then( m => m.FrequentQuestionsModule),
  },
  {
    path: TyneRoutes.Privacity,
    loadChildren: () => import('./privacy/modules/privacy.module').then( m=> m.PrivacyModule)
  },
  {
    path: 'buscar-locales',
    loadChildren: () => import('./search-restaurant/modules/search-restaurant.module').then( m=> m.SearchRestaurantModule)
  },
  {
    path: TyneRoutes.Menu,
    loadChildren: () => import('./business-menus/modules/business-menus.module').then( m=> m.BusinessMenusModule)
  },
  {
    path: TyneRoutes.NotFound,
    component: NotFoundPageComponent
  },
  { path: '', 
    redirectTo: TyneRoutes.Init, 
    pathMatch: 'full' },
  {
    path: '**',
    redirectTo: TyneRoutes.NotFound 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


