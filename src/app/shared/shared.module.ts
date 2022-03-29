import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "@app/shared/components/shared-components.module";
import { SharedDirectivesModule } from "@app/shared/directives/shared-directives.module";
import { ErrorHandlerModule } from "@shared/errors/error-handler.module";
import { SafeHtmlPipe } from "@shared/pipe/safe-html.pipe";
import { ControlsModule } from "./controls/controls.module";
import { CurrencyStandardPipe } from "./pipe/currency-standard.pipe";
import { MissedInformationPipe } from "./pipe/missed-information.pipe";

@NgModule({
  declarations: [SafeHtmlPipe, MissedInformationPipe,CurrencyStandardPipe],
  imports: [CommonModule, SharedDirectivesModule, ErrorHandlerModule, SharedComponentsModule, ControlsModule],
  exports: [SharedComponentsModule, SharedDirectivesModule, SafeHtmlPipe, MissedInformationPipe, CurrencyStandardPipe, ControlsModule],
})
export class SharedModule {}