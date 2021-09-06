import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundPageComponent } from "./shared/components/components/not-found-page/not-found-page.component";
import { TyneRoutes } from "./shared/constants/url-routes";
import { AuthGuard } from "./shared/guards/auth.guard";

/** TODO: ADD GUARD VERY CASE */
const routes: Routes = [
  {
    path: TyneRoutes.Home,
    loadChildren: () =>
      import("./home/modules/home.module").then((m) => m.HomeModule),
  },
  {
    path: "detalle-local",
    loadChildren: () =>
      import("./business-details/modules/business-details.module").then(
        (m) => m.BusinessDetailsModule
      ),
  },
  {
    path: TyneRoutes.BusinessRegister,
    loadChildren: () =>
      import(
        "./business-registration/modules/business-registration.module"
      ).then((m) => m.BusinessRegistrationModule),
  },
  {
    path: TyneRoutes.ClientProfile,
    loadChildren: () =>
      import("./client-profile/modules/client-profile.module").then(
        (m) => m.ClientProfileModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: TyneRoutes.ClientMenu,
    loadChildren: () =>
      import("./client-menus/modules/business-menus.module").then(
        (m) => m.ClientMenusModule
      ),
  },
  {
    path: TyneRoutes.BusinessProfile,
    loadChildren: () =>
      import("./business-profile/modules/business-registration.module").then(
        (m) => m.BusinessProfileModule
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: TyneRoutes.Refund,
    loadChildren: () =>
      import("./refund-policy/modules/refund-policy.module").then(
        (m) => m.RefundPolicyModule
      ),
  },
  {
    path: TyneRoutes.FrecuentQuestion,
    loadChildren: () =>
      import("./frecuent-questions/modules/frequent-questions.module").then(
        (m) => m.FrequentQuestionsModule
      ),
  },
  {
    path: TyneRoutes.Privacity,
    loadChildren: () =>
      import("./privacy/modules/privacy.module").then((m) => m.PrivacyModule),
  },
  {
    path: "buscar-locales",
    loadChildren: () =>
      import("./search-restaurant/modules/search-restaurant.module").then(
        (m) => m.SearchRestaurantModule
      ),
  },
  {
    path: TyneRoutes.BusinessEditMenu,
    loadChildren: () =>
      import("./business-menus/modules/business-menus.module").then(
        (m) => m.BusinessMenusModule
      ),
  },
  {
    path: TyneRoutes.NotFound,
    component: NotFoundPageComponent,
  },
  { path: "", redirectTo: TyneRoutes.Home, pathMatch: "full" },
  {
    path: "**",
    redirectTo: TyneRoutes.NotFound,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
