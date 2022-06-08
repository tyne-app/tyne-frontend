import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundPageComponent } from "@app/public/not-found-page/not-found-page.component";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { AuthGuard } from "./auth/shared/guards/auth.guard";
import { BusinessGuard } from "./business/shared/guards/business.guard";
import { ClientGuard } from "./client/shared/guards/client.guard";
import { ClientResolver } from "./client/shared/resolvers/client.resolver";
import { StateResolver } from "./core/resolvers/state.resolver";
import { HomeGuard } from "./public/shared/guard/home.guard";

const routes: Routes = [
  { path: "", redirectTo: TyneRoutes.Home, pathMatch: "full" },
  {
    path: TyneRoutes.Home,
    loadChildren: () => import("./public/home/home.module").then((m) => m.HomeModule),
    canActivate: [HomeGuard],
  },
  {
    path: TyneRoutes.BusinessDetail,
    loadChildren: () =>
      import("./business/business-details/business-details.module").then((m) => m.BusinessDetailsModule),
  },
  {
    path: TyneRoutes.BusinessRegister,
    loadChildren: () =>
      import("./business/business-registration/business-registration.module").then((m) => m.BusinessRegistrationModule),
  },
  {
    path: TyneRoutes.BusinessNewBranch,
    loadChildren: () =>
      import("./business/business-new-branch/business-new-branch.module").then((m) => m.BusinessNewBranchModule),
    canActivate: [AuthGuard, BusinessGuard],
  },
  {
    path: TyneRoutes.ClientProfile,
    loadChildren: () => import("./client/client-profile/client-profile.module").then((m) => m.ClientProfileModule),
    canActivate: [AuthGuard, ClientGuard],
    resolve: { client: ClientResolver },
  },
  {
    path: TyneRoutes.ClientMenu,
    loadChildren: () => import("./client/client-menus/client-menus.module").then((m) => m.ClientMenusModule),
    canActivate: [AuthGuard, ClientGuard],
  },
  {
    path: TyneRoutes.BusinessProfile,
    loadChildren: () =>
      import("./business/business-profile/business-profile.module").then((m) => m.BusinessProfileModule),
    canActivate: [AuthGuard, BusinessGuard],
  },
  {
    path: TyneRoutes.AboutUs,
    loadChildren: () => import("@app/public/about-us/about-us.module").then((m) => m.AboutUsModule),
  },
  {
    path: TyneRoutes.RecoverPassword,
    loadChildren: () =>
      import("@app/auth/recover-password/recover-password.module").then((m) => m.RecoverPasswordModule),
  },
  {
    path: TyneRoutes.RestoredPassword,
    loadChildren: () =>
      import("@app/auth/restored-password/restored-password.module").then((m) => m.RestoredPasswordModule),
  },
  {
    path: TyneRoutes.Refund,
    loadChildren: () => import("./public/refund-policy/refund-policy.module").then((m) => m.RefundPolicyModule),
  },
  {
    path: TyneRoutes.FrequentQuestion,
    loadChildren: () =>
      import("./public/frecuent-questions/frequent-questions.module").then((m) => m.FrequentQuestionsModule),
  },
  {
    path: TyneRoutes.Privacity,
    loadChildren: () => import("./public/privacy/privacy.module").then((m) => m.PrivacyModule),
  },
  {
    path: TyneRoutes.BusinessSearchResults,
    loadChildren: () => import("./public/search-business/search-business.module").then((m) => m.SearchBusinessModule),
    resolve: { states: StateResolver },
  },
  {
    path: TyneRoutes.BusinessEditMenu,
    loadChildren: () => import("./business/business-menus/business-menus.module").then((m) => m.BusinessMenusModule),
    canActivate: [AuthGuard, BusinessGuard],
  },
  {
    path: TyneRoutes.ClientStatusPay,
    loadChildren: () =>
      import("@app/client/client-status-pay/client-status-pay.module").then((m) => m.ClientStatusPayModule),
    canActivate: [AuthGuard, ClientGuard],
  },
  {
    path: TyneRoutes.BusinessHome,
    loadChildren: () => import("./business/bussines-home/bussines-home.module").then((m) => m.BussinesHomeModule),
    canActivate: [AuthGuard, BusinessGuard],
  },
  {
    path: TyneRoutes.ClientPendingReservation,
    loadChildren: () =>
      import("./client/client-pending-reservations/client-pending-reservations.module").then(
        (m) => m.ClientPendingReservationsModule
      ),
    canActivate: [AuthGuard, ClientGuard],
  },
  {
    path: TyneRoutes.NotFound,
    component: NotFoundPageComponent,
  },
  {
    path: "**",
    redirectTo: TyneRoutes.NotFound,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled", relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
