import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CloseModalComponent } from "../components/close-modal/close-modal.component";
import { MapComponent } from "../components/map/components/map.component";
import { SpinnerComponent } from "../components/spinner/spinner.component";
import { PhoneMaskDirective } from "../directives/phone-mask.directive";
import { SanitizeHtmlDirective } from "../directives/sanitize-html.directive";
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
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule],
  exports: [
    ReactiveFormsModule,
    MapComponent,
    CloseModalComponent,
    PhoneMaskDirective,
    SpinnerComponent,
    SanitizeHtmlDirective,
    SafeHtml,
  ],
})
export class SharedModule {}
