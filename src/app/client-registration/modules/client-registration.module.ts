import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { ClientRegistrationComponent } from "../pages/client.registration.component";

@NgModule({
  declarations: [
    ClientRegistrationComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    SharedModule,
  ]
})
export class ClientRegistrationModule { }
