import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { HeaderComponent } from "../header/header.component";
import { HeaderModule } from "../header/modules/header.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, HeaderModule],
  exports: [HeaderComponent],
})
export class SharedComponentsModule {}
