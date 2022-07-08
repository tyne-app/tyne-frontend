import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RestoredPasswordComponent } from "./restored-password.component";

const routes: Routes = [{ path: "", component: RestoredPasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestoredPasswordRoutingModule {}
