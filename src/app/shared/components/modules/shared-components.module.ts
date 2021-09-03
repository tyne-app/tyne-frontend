import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { CloseModalComponent } from "../components/close-modal/close-modal.component";
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderModule } from "../components/header/modules/header.module";
import { HeaderComponent } from "../components/header/pages/header.component";
import { MapComponent } from "../components/map/components/map.component";
import { NotFoundPageComponent } from "../components/not-found-page/not-found-page.component";
import { SpinnerComponent } from "../components/spinner/spinner.component";

@NgModule({
  declarations: [
    CloseModalComponent,
    FooterComponent,
    HeaderComponent,
    MapComponent,
    NotFoundPageComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    HeaderModule,
  ],
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
