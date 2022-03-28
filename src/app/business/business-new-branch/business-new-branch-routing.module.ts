import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormSaveGuard } from "@app/shared/guard/form-save.guard";
import { BusinessNewBranchComponent } from "./business-new-branch.component";


const routes: Routes = [{ path: "", component: BusinessNewBranchComponent,
canDeactivate: [FormSaveGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessNewBranchRoutingModule {}
