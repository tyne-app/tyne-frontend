import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedComponentsModule } from "../components/modules/shared-components.module";
import { SharedDirectivesModule } from "../directives/modules/shared-directives.module";
import { ErrorHandlerModule } from "../errors/error-handler.module";
import { SafeHtmlPipe } from "../pipe/safe-html.pipe";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [SafeHtmlPipe],
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
    SafeHtmlPipe,
  ],
})
export class SharedModule {}
