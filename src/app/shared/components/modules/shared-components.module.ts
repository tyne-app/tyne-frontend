import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { CloseModalComponent } from "../close-modal/close-modal.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderModule } from "../header/modules/header.module";
import { HeaderComponent } from "../header/pages/header.component";
import { MapComponent } from "../map/components/map.component";
import { NotFoundPageComponent } from "../not-found-page/not-found-page.component";
import { SpinnerComponent } from "../spinner/spinner.component";

@NgModule({
  declarations: [
    CloseModalComponent,
    FooterComponent,
    HeaderComponent,
    MapComponent,
    NotFoundPageComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, HeaderModule],
  exports: [
    CloseModalComponent,
    FooterComponent,
    HeaderComponent,
    MapComponent,
    NotFoundPageComponent,
    SpinnerComponent,
  ],
})
export class SharedComponentsModule {}
