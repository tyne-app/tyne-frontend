import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedComponentsModule } from "@shared/components/modules/shared-components.module";
import { SharedDirectivesModule } from "@shared/directives/modules/shared-directives.module";
import { ErrorHandlerModule } from "@shared/errors/error-handler.module";
import { SafeHtmlPipe } from "@shared/pipe/safe-html.pipe";
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
