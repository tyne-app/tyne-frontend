import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "@shared/modules/material.module";
import { HeaderLoginComponent } from "../components/header-login/header-login.component";
import { HeaderPublicComponent } from "../components/header-public/header-public.component";

@NgModule({
  declarations: [HeaderPublicComponent, HeaderLoginComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [HeaderPublicComponent, HeaderLoginComponent],
})
export class HeaderModule {}
