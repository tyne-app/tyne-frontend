import { NgModule } from "@angular/core";
import { PhoneMaskDirective } from "../classes/phone-mask.directive";
import { SanitizeHtmlDirective } from "../classes/sanitize-html.directive";
import { TimeDirective } from "../classes/time.directive";

@NgModule({
  declarations: [TimeDirective, SanitizeHtmlDirective, PhoneMaskDirective],
  exports: [TimeDirective, SanitizeHtmlDirective, PhoneMaskDirective],
})
export class SharedDirectivesModule {}
