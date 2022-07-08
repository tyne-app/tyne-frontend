import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterModule, HeaderModule, SpinnerModule } from "@app/shared/components";
import { ClientProfileRoutingModule } from "./client-profile-routing.module";
import { ClientProfileComponent } from "./client-profile.component";
import { ProfileContainerModule } from "./components/profile-container/profile-container.module";

@NgModule({
  declarations: [ClientProfileComponent],
  imports: [
    CommonModule,
    ClientProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileContainerModule,
    HeaderModule,
    FooterModule,
    SpinnerModule,
  ],
  providers: [],
})
export class ClientProfileModule {}
