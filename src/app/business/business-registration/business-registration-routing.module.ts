import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormSaveGuard } from "@app/shared/guard/form-save.guard";
import { BusinessRegistrationComponent } from "./business-registration.component";

const routes: Routes = [{ path: "", component: BusinessRegistrationComponent,
canDeactivate: [FormSaveGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRegistrationRoutingModule {}
