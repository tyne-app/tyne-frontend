import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@app/auth/shared/guards/auth.guard";
import { ClientGuard } from "../shared/guards/client.guard";
import { ClientStatusPayComponent } from "./client-status-pay.component";
import { CancelPayComponent } from "./pages/cancel-pay/cancel-pay.component";
import { SuccessPayComponent } from "./pages/success-pay/success-pay.component";

const routes: Routes = [
  {
    path: "",
    component: ClientStatusPayComponent,
    children: [
      {
        path: "cancelado",
        component: CancelPayComponent,
        canActivate: [AuthGuard, ClientGuard],
      },
      {
        path: "exitoso",
        component: SuccessPayComponent,
        canActivate: [AuthGuard, ClientGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientStatusPayRoutingModule {}
