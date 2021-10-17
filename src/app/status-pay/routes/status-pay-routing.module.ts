import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StatusPayComponent } from "../pages/status-pay.component";

const routes: Routes = [{ path: "", component: StatusPayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusPayRoutingModule {}
