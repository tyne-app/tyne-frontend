import { NgModule } from "@angular/core";
import { PhoneMaskDirective } from "@shared/directives/classes/phone-mask.directive";
import { SanitizeHtmlDirective } from "@shared/directives/classes/sanitize-html.directive";
import { TimeDirective } from "@shared/directives/classes/time.directive";

@NgModule({
  declarations: [TimeDirective, SanitizeHtmlDirective, PhoneMaskDirective],
  exports: [TimeDirective, SanitizeHtmlDirective, PhoneMaskDirective],
})
export class SharedDirectivesModule {}
