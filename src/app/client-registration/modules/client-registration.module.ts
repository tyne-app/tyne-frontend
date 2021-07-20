import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { RegistrationComponent } from "../pages/registration.component";

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    SharedModule,
  ]
})
export class ClientRegistrationModule { }
