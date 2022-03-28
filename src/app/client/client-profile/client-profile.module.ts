import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared/shared.module";
import { ClientProfileRoutingModule } from "./client-profile-routing.module";
import { ClientProfileComponent } from "./client-profile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileContainerModule } from "./components/profile-container/profile-container.module";

@NgModule({
  declarations: [ClientProfileComponent
  ],
  imports: [
    CommonModule,
    ClientProfileRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileContainerModule
  ],
  providers: [],
})
export class ClientProfileModule {}
