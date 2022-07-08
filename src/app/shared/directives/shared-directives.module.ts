import { NgModule } from "@angular/core";
import { SanitizeHtmlDirective } from "@app/shared/directives/sanitize-html.directive";

@NgModule({
  declarations: [SanitizeHtmlDirective],
  exports: [SanitizeHtmlDirective],
})
export class SharedDirectivesModule {}
