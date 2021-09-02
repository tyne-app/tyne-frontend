import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CloseModalComponent } from "../components/close-modal/close-modal.component";
import { FooterComponent } from "../components/footer/footer.component";
import { MapComponent } from "../components/map/components/map.component";
import { SharedComponentsModule } from "../components/modules/shared-components.module";
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
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    RouterModule,
    ErrorHandlerModule,
    SharedComponentsModule,
  ],
  exports: [
    SharedComponentsModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    MapComponent,
    CloseModalComponent,
    SpinnerComponent,
    SafeHtml,
    NotFoundPageComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
