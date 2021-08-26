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
import { PhoneMaskDirective } from "../directives/phone-mask.directive";
import { SanitizeHtmlDirective } from "../directives/sanitize-html.directive";
import { ErrorHandlerModule } from "../errors/error-handler.module";
import { SafeHtml } from "../pipe/safeHtml.pipe";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [
    MapComponent,
    CloseModalComponent,
    SpinnerComponent,
    PhoneMaskDirective,
    PhoneMaskDirective,
    SanitizeHtmlDirective,
    SafeHtml,
    NotFoundPageComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    ErrorHandlerModule,
    HeaderModule,
  ],
  exports: [
    ReactiveFormsModule,
    MapComponent,
    CloseModalComponent,
    PhoneMaskDirective,
    SpinnerComponent,
    SanitizeHtmlDirective,
    SafeHtml,
    NotFoundPageComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
