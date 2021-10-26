import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeModule } from "src/app/home/modules/home.module";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { ProfileContainerComponent } from "../components/profile-container/profile-container.component";
import { ProfileImageComponent } from "../components/profile-image/profile-image.component";
import { ClientProfileComponent } from "../pages/client-profile.component";
import { ClientProfileRoutingModule } from "../routes/client-profile-routing.module";

@NgModule({
  declarations: [ClientProfileComponent, ProfileContainerComponent, ProfileImageComponent],
  imports: [
    CommonModule,
    ClientProfileRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule,
  ],
  providers: [],
})
export class ClientProfileModule {}
