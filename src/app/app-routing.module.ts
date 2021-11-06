import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFoundPageComponent } from "@shared/components/components/not-found-page/not-found-page.component";
import { TyneRoutes } from "@shared/inmutable/enums/url-routes";

import { AuthGuard } from "@app/core/guards/auth.guard";
import {ClientGuard} from "@core/guards/client.guard";
import {LocalGuard} from "@core/guards/local.guard";

const routes: Routes = [
  {
    path: TyneRoutes.Home,
    loadChildren: () => import("./home/modules/home.module").then((m) => m.HomeModule),
  },
  {
    path: "detalle-local",
    loadChildren: () =>
      import("./business-details/modules/business-details.module").then((m) => m.BusinessDetailsModule),
  },
  {
    path: TyneRoutes.BusinessRegister,
    loadChildren: () =>
      import("./business-registration/modules/business-registration.module").then((m) => m.BusinessRegistrationModule),
  },
  {
    path: TyneRoutes.BusinessNewBranch,
    loadChildren: () =>
      import("./business-new-branch/modules/business-new-branch.module").then((m) => m.BusinessNewBranchModule),
  },
  {
    path: TyneRoutes.ClientProfile,
    loadChildren: () => import("./client-profile/modules/client-profile.module").then((m) => m.ClientProfileModule),
    canActivate: [AuthGuard, ClientGuard],
  },
  {
    path: TyneRoutes.ClientMenu,
    loadChildren: () => import("./client-menus/modules/business-menus.module").then((m) => m.ClientMenusModule),
    canActivate: [AuthGuard, ClientGuard],
  },
  {
    path: TyneRoutes.BusinessProfile,
    loadChildren: () =>
      import("./business-profile/modules/business-registration.module").then((m) => m.BusinessProfileModule),
    canActivate: [AuthGuard, LocalGuard],
  },
  {
    path: TyneRoutes.Refund,
    loadChildren: () => import("./refund-policy/modules/refund-policy.module").then((m) => m.RefundPolicyModule),
  },
  {
    path: TyneRoutes.FrecuentQuestion,
    loadChildren: () =>
      import("./frecuent-questions/modules/frequent-questions.module").then((m) => m.FrequentQuestionsModule),
  },
  {
    path: TyneRoutes.Privacity,
    loadChildren: () => import("./privacy/modules/privacy.module").then((m) => m.PrivacyModule),
  },
  {
    path: "buscar-locales",
    loadChildren: () =>
      import("./search-restaurant/modules/search-restaurant.module").then((m) => m.SearchRestaurantModule),
  },
  {
    path: TyneRoutes.BusinessEditMenu,
    loadChildren: () => import("./business-menus/modules/business-menus.module").then((m) => m.BusinessMenusModule),
    canActivate: [AuthGuard, LocalGuard]
  },
  {
    path: TyneRoutes.StatusPay,
    loadChildren: () => import("./status-pay/modules/status-pay.module").then((m) => m.StatusPayModule),
  },

  {
    path: TyneRoutes.BussinesHome,
    loadChildren: () => import("./bussines-home/modules/bussines-home.module").then((m) => m.BussinesHomeModule),
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
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
