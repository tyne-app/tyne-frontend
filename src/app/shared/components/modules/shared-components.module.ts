/** MODULES */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "@shared/modules/material.module";
/** COMPONENTS */
import { CloseModalComponent } from "../components/close-modal/close-modal.component";
import { DialogComponent } from "../components/dialog/pages/dialog.component";
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderModule } from "../components/header/modules/header.module";
import { HeaderComponent } from "../components/header/pages/header.component";
import { MapComponent } from "../components/map/components/map.component";
import { NotFoundPageComponent } from "../components/not-found-page/not-found-page.component";
import { SpinnerComponent } from "../components/spinner/spinner.component";
import { DateAdapterProvider, MatDateFormatProvider, MatDateLocalProvider } from "../../providers/mat-date.provider";
@NgModule({
  declarations: [
    CloseModalComponent,
    FooterComponent,
    HeaderComponent,
    MapComponent,
    NotFoundPageComponent,
    SpinnerComponent,
    DialogComponent,
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
    DialogComponent,
  ],
  providers: [
    MatDateLocalProvider,
    DateAdapterProvider,
    MatDateFormatProvider
  ],
})
export class SharedComponentsModule {}
