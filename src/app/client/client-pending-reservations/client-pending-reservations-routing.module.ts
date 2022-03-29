import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientPendingReservationsComponent } from "./client-pending-reservations.component";

const routes: Routes = [{ path: "", component: ClientPendingReservationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPendingReservationsRoutingModule {}
