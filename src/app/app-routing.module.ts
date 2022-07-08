import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TyneRoutes } from "@app/shared/inmutable/enums/url-routes.enum";
import { AuthGuard } from "./auth/shared/guards/auth.guard";
import { BusinessGuard } from "./business/shared/guards/business.guard";
import { ClientGuard } from "./client/shared/guards/client.guard";
import { ClientResolver } from "./client/shared/resolvers/client.resolver";
import { StateResolver } from "./core/resolvers/state.resolver";
import { HomeGuard } from "./public/shared/guard/home.guard";

const routes: Routes = [
  // Auth Routes
  {
    path: TyneRoutes.Activation,
    loadChildren: () => import("@app/auth/activation/activation.module").then((m) => m.ActivationModule),
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
  // Business Routes
  {
    path: TyneRoutes.BusinessDetail,
    loadChildren: () =>
      import("@app/business/business-details/business-details.module").then((m) => m.BusinessDetailsModule),
  },
  {
    path: TyneRoutes.BusinessEditMenu,
    loadChildren: () => import("@app/business/business-menus/business-menus.module").then((m) => m.BusinessMenusModule),
    canActivate: [AuthGuard, BusinessGuard],
  },
  {
    path: TyneRoutes.BusinessNewBranch,
    loadChildren: () =>
      import("@app/business/business-new-branch/business-new-branch.module").then((m) => m.BusinessNewBranchModule),
    canActivate: [AuthGuard, BusinessGuard],
  },
  {
    path: TyneRoutes.BusinessProfile,
    loadChildren: () =>
      import("@app/business/business-profile/business-profile.module").then((m) => m.BusinessProfileModule),
    canActivate: [AuthGuard, BusinessGuard],
  },
  {
    path: TyneRoutes.BusinessRegister,
    loadChildren: () =>
      import("@app/business/business-registration/business-registration.module").then(
        (m) => m.BusinessRegistrationModule
      ),
  },
  {
    path: TyneRoutes.BusinessHome,
    loadChildren: () => import("@app/business/bussines-home/bussines-home.module").then((m) => m.BussinesHomeModule),
    canActivate: [AuthGuard, BusinessGuard],
  },
  {
    path: TyneRoutes.ClientMenu,
    loadChildren: () => import("@app/client/client-menus/client-menus.module").then((m) => m.ClientMenusModule),
    canActivate: [AuthGuard, ClientGuard],
  },
  {
    path: TyneRoutes.ClientPendingReservation,
    loadChildren: () =>
      import("@app/client/client-pending-reservations/client-pending-reservations.module").then(
        (m) => m.ClientPendingReservationsModule
      ),
    canActivate: [AuthGuard, ClientGuard],
  },
  {
    path: TyneRoutes.ClientProfile,
    loadChildren: () => import("@app/client/client-profile/client-profile.module").then((m) => m.ClientProfileModule),
    canActivate: [AuthGuard, ClientGuard],
    resolve: { client: ClientResolver },
  },
  {
    path: TyneRoutes.ClientStatusPay,
    loadChildren: () =>
      import("@app/client/client-status-pay/client-status-pay.module").then((m) => m.ClientStatusPayModule),
    canActivate: [AuthGuard, ClientGuard],
  },
  // Public Routes
  { path: "", redirectTo: TyneRoutes.Home, pathMatch: "full" },
  {
    path: TyneRoutes.Home,
    loadChildren: () => import("@app/public/home/home.module").then((m) => m.HomeModule),
    canActivate: [HomeGuard],
  },
  {
    path: TyneRoutes.AboutUs,
    loadChildren: () => import("@app/public/about-us/about-us.module").then((m) => m.AboutUsModule),
  },
  {
    path: TyneRoutes.Refund,
    loadChildren: () => import("@app/public/refund-policy/refund-policy.module").then((m) => m.RefundPolicyModule),
  },
  {
    path: TyneRoutes.FrequentQuestion,
    loadChildren: () =>
      import("@app/public/frecuent-questions/frequent-questions.module").then((m) => m.FrequentQuestionsModule),
  },
  {
    path: TyneRoutes.Privacity,
    loadChildren: () => import("@app/public/privacy/privacy.module").then((m) => m.PrivacyModule),
  },
  {
    path: TyneRoutes.BusinessSearchResults,
    loadChildren: () =>
      import("@app/public/search-business/search-business.module").then((m) => m.SearchBusinessModule),
    resolve: { states: StateResolver },
  },
  {
    path: TyneRoutes.NotFound,
    loadChildren: () => import("@app/public/not-found-page/not-found-page.module").then((m) => m.NotFoundPageModule),
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
