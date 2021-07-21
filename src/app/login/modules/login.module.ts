import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { LoginComponent } from "../pages/login.component";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    SharedModule,
  ]
})
export class LoginModule { }
