import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BusinessRegistrationComponent } from "../pages/business-registration.component";

const routes: Routes = [{ path: "", component: BusinessRegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRegistrationRoutingModule {}
