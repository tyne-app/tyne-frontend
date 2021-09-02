import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CloseModalComponent } from "../components/close-modal/close-modal.component";
import { HeaderComponent } from "../components/header/header.component";
import { HeaderModule } from "../components/header/modules/header.module";
import { MapComponent } from "../components/map/components/map.component";
import { NotFoundPageComponent } from "../components/not-found-page/not-found-page.component";
import { SpinnerComponent } from "../components/spinner/spinner.component";
import { SharedDirectivesModule } from "../directives/modules/shared-directives.module";
import { ErrorHandlerModule } from "../errors/error-handler.module";
import { SafeHtml } from "../pipe/safeHtml.pipe";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [
    MapComponent,
    CloseModalComponent,
    SpinnerComponent,
    SafeHtml,
    NotFoundPageComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    RouterModule,
    ErrorHandlerModule,
    HeaderModule,
  ],
  exports: [
    ReactiveFormsModule,
    SharedDirectivesModule,
    MapComponent,
    CloseModalComponent,
    SpinnerComponent,
    SafeHtml,
    NotFoundPageComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
