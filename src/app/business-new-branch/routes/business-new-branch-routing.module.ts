import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BusinessNewBranchComponent } from "../pages/business-new-branch.component";

const routes: Routes = [{ path: "", component: BusinessNewBranchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessNewBranchRoutingModule {}
